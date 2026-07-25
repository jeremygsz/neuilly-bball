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

    const subject = `Elite Training Center - ${firstname} ${lastname} (${club})`;

    try {
        // 1. Sauvegarde en DB (table contact réutilisée)
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

        // 2. Envoi de l'email via Resend
        if (process.env.RESEND_API_KEY) {
            try {
                const { data, error: mailError } = await resend.emails.send({
                    from: 'Neuilly Basketball Training Center <contact@contact.neuillybasketball.com>',
                    to: ['contact@neuillybasketball.com'],
                    replyTo: email,
                    subject: `[Elite Training Center] Demande de ${firstname} ${lastname} - ${club}`,
                    html: `
                        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 8px;">
                            <h2 style="color: #1B3A8C; border-bottom: 2px solid #C8102E; padding-bottom: 8px;">Demande d'accès au High Performance Training Center</h2>
                            <p><strong>De :</strong> ${firstname} ${lastname} (${email})</p>
                            <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
                            <p><strong>Club actuel :</strong> ${club} (${league})</p>
                            <p><strong>Dates souhaitées :</strong> ${dates}</p>
                            <p><strong>Nombre de joueurs :</strong> ${playersCount}</p>
                            
                            <h3 style="color: #1B3A8C; margin-top: 20px;">Objectifs</h3>
                            <p>${objectives.length > 0 ? objectives.join(", ") : "Aucun"}</p>
                            
                            <h3 style="color: #1B3A8C; margin-top: 20px;">Services demandés</h3>
                            <p>${services.length > 0 ? services.join(", ") : "Aucun"}</p>
                            
                            <h3 style="color: #1B3A8C; margin-top: 20px;">Description du projet</h3>
                            <p style="background: #f9f9f9; padding: 12px; border-left: 4px solid #C8102E; border-radius: 4px; white-space: pre-wrap;">${projectDescription}</p>
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
