"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { resend } from "@/lib/mailer";
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
        if (process.env.RESEND_API_KEY) {
            try {
                const { data, error: mailError } = await resend.emails.send({
                    from: 'Neuilly Basketball <contact@contact.neuillybasketball.com>',
                    to: ['contact@neuillybasketball.com'],
                    replyTo: email,
                    subject: `Nouveau message: ${subject} - ${firstname} ${lastname}`,
                    html: `
                        <h2>Nouveau message de contact</h2>
                        <p><strong>De:</strong> ${firstname} ${lastname} (${email})</p>
                        <p><strong>Téléphone:</strong> ${phone || "Non renseigné"}</p>
                        <p><strong>Sujet:</strong> ${subject}</p>
                        <p><strong>Message:</strong></p>
                        <p>${message.replace(/\n/g, "<br>")}</p>
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
