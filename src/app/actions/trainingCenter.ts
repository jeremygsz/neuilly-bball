"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { resend } from "@/lib/mailer";
import { z } from "zod";

const trainingCenterSchema = z.object({
    firstname: z.string().min(2, "Le prénom est trop court"),
    lastname: z.string().min(2, "Le nom est trop court"),
    email: z.string().email("Email invalide"),
    phone: z.string().optional(),
    club: z.string().min(1, "Veuillez renseigner votre club actuel"),
    league: z.string().min(1, "Veuillez renseigner votre championnat"),
    dates: z.string().min(1, "Veuillez renseigner les dates souhaitées"),
    playersCount: z.string().min(1, "Veuillez renseigner le nombre de joueurs"),
    objectives: z.array(z.string()).optional(),
    services: z.array(z.string()).optional(),
    projectDescription: z.string().min(10, "Veuillez détailler votre projet (min. 10 caractères)"),
});

export async function submitTrainingCenter(formData: FormData) {
    const rawData = {
        firstname: formData.get("firstname"),
        lastname: formData.get("lastname"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        club: formData.get("club"),
        league: formData.get("league"),
        dates: formData.get("dates"),
        playersCount: formData.get("playersCount"),
        objectives: formData.getAll("objectives"),
        services: formData.getAll("services"),
        projectDescription: formData.get("projectDescription"),
    };

    const validatedData = trainingCenterSchema.safeParse(rawData);

    if (!validatedData.success) {
        return { error: validatedData.error.issues[0].message };
    }

    const {
        firstname,
        lastname,
        email,
        phone,
        club,
        league,
        dates,
        playersCount,
        objectives = [],
        services = [],
        projectDescription,
    } = validatedData.data;

    // Serialize details into a structured message
    const formattedMessage = `
[DEMANDE D'ACCÈS EXCLUSIF - TRAINING CENTER ELITE]

• Joueur / Contact : ${firstname} ${lastname}
• Email : ${email}
• Téléphone : ${phone || "Non renseigné"}
• Club actuel : ${club}
• Championnat : ${league}
• Dates souhaitées : ${dates}
• Nombre de joueurs : ${playersCount}

• Objectifs du séjour :
  ${objectives.length > 0 ? objectives.join(", ") : "Aucun objectif spécifique coché"}

• Services requis :
  ${services.length > 0 ? services.join(", ") : "Aucun service additionnel coché"}

• Description détaillée du projet :
${projectDescription}
    `.trim();

    const subject = `Training Center - ${firstname} ${lastname} (${club})`;

    try {
        // 1. Sauvegarde en DB dans la table dédiée
        await prisma.trainingCenterRequest.create({
            data: {
                firstname,
                lastname,
                email,
                phone: phone || null,
                club,
                league,
                dates,
                playersCount,
                objectives,
                services,
                projectDescription,
            },
        });

        // 2. Sauvegarde en DB (table contact réutilisée pour l'admin global)
        await prisma.contact.create({
            data: {
                firstname,
                lastname,
                email,
                phone: phone || null,
                subject,
                message: formattedMessage,
            },
        });

        // 3. Envoi de l'email via Resend
        if (process.env.RESEND_API_KEY) {
            try {
                const { data, error: mailError } = await resend.emails.send({
                    from: 'Neuilly Basketball Training Center <contact@contact.neuillybasketball.com>',
                    to: ['contact@neuillybasketball.com'],
                    replyTo: email,
                    subject: `[Training Center] Demande de ${firstname} ${lastname} (${club})`,
                    html: `
                        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
                            <!-- Header Banner -->
                            <div style="background: linear-gradient(135deg, #0d1b3e 0%, #1b3a8c 100%); padding: 30px 24px; text-align: center; border-bottom: 4px solid #c8102e;">
                                <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">High Performance</h1>
                                <p style="color: #93c5fd; margin: 5px 0 0 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 500;">Demande de Privatisation Training Center</p>
                            </div>
                            
                            <div style="padding: 24px;">
                                <!-- Section: Athlete Profile -->
                                <h3 style="color: #0d1b3e; border-bottom: 1px solid #f1f5f9; padding-bottom: 8px; margin-top: 0; margin-bottom: 16px; font-size: 16px; text-transform: uppercase; letter-spacing: 0.05em;">👤 Profil de l'Athlète</h3>
                                <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                                    <tr>
                                        <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 35%;">Nom complet</td>
                                        <td style="padding: 8px 0; color: #0d1b3e; font-size: 14px; font-weight: 600;">${firstname} ${lastname}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Club / Organisation</td>
                                        <td style="padding: 8px 0; color: #0d1b3e; font-size: 14px; font-weight: 600;">${club}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Championnat / Ligue</td>
                                        <td style="padding: 8px 0; color: #0d1b3e; font-size: 14px; font-weight: 600;"><span style="background-color: #eff6ff; color: #1b3a8c; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">${league}</span></td>
                                    </tr>
                                </table>

                                <!-- Section: Contact details -->
                                <h3 style="color: #0d1b3e; border-bottom: 1px solid #f1f5f9; padding-bottom: 8px; margin-bottom: 16px; font-size: 16px; text-transform: uppercase; letter-spacing: 0.05em;">📞 Coordonnées</h3>
                                <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                                    <tr>
                                        <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 35%;">Email</td>
                                        <td style="padding: 8px 0; color: #0d1b3e; font-size: 14px; font-weight: 600;"><a href="mailto:${email}" style="color: #1b3a8c; text-decoration: none;">${email}</a></td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Téléphone</td>
                                        <td style="padding: 8px 0; color: #0d1b3e; font-size: 14px; font-weight: 600;">${phone || "Non renseigné"}</td>
                                    </tr>
                                </table>

                                <!-- Section: Project Info -->
                                <h3 style="color: #0d1b3e; border-bottom: 1px solid #f1f5f9; padding-bottom: 8px; margin-bottom: 16px; font-size: 16px; text-transform: uppercase; letter-spacing: 0.05em;">🗓️ Détails du Séjour</h3>
                                <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                                    <tr>
                                        <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 35%;">Dates souhaitées</td>
                                        <td style="padding: 8px 0; color: #0d1b3e; font-size: 14px; font-weight: 600; color: #c8102e;">${dates}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Nombre de joueurs</td>
                                        <td style="padding: 8px 0; color: #0d1b3e; font-size: 14px; font-weight: 600;">${playersCount}</td>
                                    </tr>
                                </table>

                                <!-- Section: Objectives & Services -->
                                <div style="margin-bottom: 24px; display: table; width: 100%;">
                                    <div style="display: table-cell; width: 50%; padding-right: 10px; vertical-align: top;">
                                        <h4 style="color: #0d1b3e; font-size: 13px; margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.05em;">🏀 Objectifs du séjour</h4>
                                        <ul style="margin: 0; padding-left: 18px; font-size: 13px; color: #475569; line-height: 1.5;">
                                            ${objectives.length > 0 ? objectives.map(obj => `<li style="margin-bottom: 4px;">${obj}</li>`).join("") : `<li style="color: #94a3b8; font-style: italic;">Aucun renseigné</li>`}
                                        </ul>
                                    </div>
                                    <div style="display: table-cell; width: 50%; padding-left: 10px; vertical-align: top;">
                                        <h4 style="color: #0d1b3e; font-size: 13px; margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 0.05em;">⚡ Services demandés</h4>
                                        <ul style="margin: 0; padding-left: 18px; font-size: 13px; color: #475569; line-height: 1.5;">
                                            ${services.length > 0 ? services.map(srv => `<li style="margin-bottom: 4px;">${srv}</li>`).join("") : `<li style="color: #94a3b8; font-style: italic;">Aucun renseigné</li>`}
                                        </ul>
                                    </div>
                                </div>

                                <!-- Section: Project Description -->
                                <h3 style="color: #0d1b3e; border-bottom: 1px solid #f1f5f9; padding-bottom: 8px; margin-bottom: 12px; font-size: 16px; text-transform: uppercase; letter-spacing: 0.05em;">📝 Description du Projet</h3>
                                <div style="background-color: #f8fafc; border-left: 4px solid #c8102e; border-radius: 4px; padding: 16px; margin-bottom: 16px;">
                                    <p style="margin: 0; font-size: 14px; color: #334155; white-space: pre-wrap; font-style: italic;">"${projectDescription}"</p>
                                </div>
                            </div>

                            <!-- Footer -->
                            <div style="background-color: #f8fafc; padding: 20px 24px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;">
                                <p style="margin: 0 0 4px 0;">Ce mail est généré automatiquement suite à une demande sur le site Neuilly Basketball.</p>
                                <p style="margin: 0; font-weight: 600; color: #64748b;">Neuilly Basketball Association — High Performance Section</p>
                            </div>
                        </div>
                    `,
                });

                if (mailError) {
                    console.error("Resend API error sending training center notification email:", mailError);
                } else {
                    console.log("Training center notification email sent successfully:", data);
                }
            } catch (err) {
                console.error("Failed to send training center notification email via Resend:", err);
            }
        }

        revalidatePath("/admin/contacts");
        return { success: "Votre demande d'accès a été transmise avec succès. Notre directeur technique vous contactera en toute discrétion sous 24h." };
    } catch (error) {
        console.error("Training center contact submission error:", error);
        return { error: "Une erreur est survenue lors de l'envoi de votre demande." };
    }
}
