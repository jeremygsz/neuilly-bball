"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { getResend } from "@/lib/mailer";
import { z } from "zod";

const contactSchema = z.object({
    firstname: z.string().min(2, "Le prénom est trop court"),
    lastname: z.string().min(2, "Le nom est trop court"),
    email: z.string().email("Email invalide"),
    phone: z.string().optional(),
    subject: z.string().min(1, "Veuillez choisir un sujet"),
    message: z.string().min(10, "Votre message doit faire au moins 10 caractères"),
});

export async function submitContact(formData: FormData) {
    const rawData = {
        firstname: formData.get("firstname"),
        lastname: formData.get("lastname"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        subject: formData.get("subject"),
        message: formData.get("message"),
    };

    const validatedData = contactSchema.safeParse(rawData);

    if (!validatedData.success) {
        return { error: validatedData.error.issues[0].message };
    }

    const { firstname, lastname, email, phone, subject, message } = validatedData.data;

    try {
        // 1. Sauvegarde en DB
        await prisma.contact.create({
            data: {
                firstname,
                lastname,
                email,
                phone: phone || null,
                subject,
                message,
            },
        });

        // 2. Envoi de l'email via Resend
        const resend = getResend();
        if (resend) {
            try {
                const { data, error: mailError } = await resend.emails.send({
                    from: 'Neuilly Basketball <contact@contact.neuillybasketball.com>',
                    to: ['contact@neuillybasketball.com'],
                    replyTo: email,
                    subject: `Nouveau message: ${subject} - ${firstname} ${lastname}`,
                    html: `
                        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
                            <!-- Header Banner -->
                            <div style="background: linear-gradient(135deg, #0d1b3e 0%, #1b3a8c 100%); padding: 30px 24px; text-align: center; border-bottom: 4px solid #c8102e;">
                                <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">Neuilly Basketball</h1>
                                <p style="color: #93c5fd; margin: 5px 0 0 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 500;">Nouveau Message de Contact</p>
                            </div>

                            <div style="padding: 24px;">
                                <!-- Section: Contact details -->
                                <h3 style="color: #0d1b3e; border-bottom: 1px solid #f1f5f9; padding-bottom: 8px; margin-top: 0; margin-bottom: 16px; font-size: 16px; text-transform: uppercase; letter-spacing: 0.05em;">📞 Coordonnées</h3>
                                <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                                    <tr>
                                        <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 35%;">Nom complet</td>
                                        <td style="padding: 8px 0; color: #0d1b3e; font-size: 14px; font-weight: 600;">${firstname} ${lastname}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Email</td>
                                        <td style="padding: 8px 0; color: #0d1b3e; font-size: 14px; font-weight: 600;"><a href="mailto:${email}" style="color: #1b3a8c; text-decoration: none;">${email}</a></td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Téléphone</td>
                                        <td style="padding: 8px 0; color: #0d1b3e; font-size: 14px; font-weight: 600;">${phone || "Non renseigné"}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Sujet</td>
                                        <td style="padding: 8px 0; font-size: 14px;"><span style="background-color: #eff6ff; color: #1b3a8c; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-weight: 700;">${subject}</span></td>
                                    </tr>
                                </table>

                                <!-- Section: Message -->
                                <h3 style="color: #0d1b3e; border-bottom: 1px solid #f1f5f9; padding-bottom: 8px; margin-bottom: 12px; font-size: 16px; text-transform: uppercase; letter-spacing: 0.05em;">📝 Message</h3>
                                <div style="background-color: #f8fafc; border-left: 4px solid #c8102e; border-radius: 4px; padding: 16px; margin-bottom: 16px;">
                                    <p style="margin: 0; font-size: 14px; color: #334155; white-space: pre-wrap; font-style: italic;">"${message}"</p>
                                </div>
                            </div>

                            <!-- Footer -->
                            <div style="background-color: #f8fafc; padding: 20px 24px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;">
                                <p style="margin: 0 0 4px 0;">Ce mail est généré automatiquement suite à une demande sur le site Neuilly Basketball.</p>
                                <p style="margin: 0; font-weight: 600; color: #64748b;">Neuilly Basketball Association</p>
                            </div>
                        </div>
                    `,
                });

                if (mailError) {
                    console.error("Resend API error sending contact notification email:", mailError);
                } else {
                    console.log("Contact notification email sent successfully:", data);
                }
            } catch (err) {
                console.error("Failed to send contact notification email via Resend:", err);
            }
        }

        revalidatePath("/admin/contacts");
        return { success: "Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais." };
    } catch (error) {
        console.error("Contact submission error (DB or general):", error);
        return { error: "Une erreur est survenue lors de l'envoi du message." };
    }
}
