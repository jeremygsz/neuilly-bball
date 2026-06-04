"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function submitContact(formData: FormData) {
    const firstname = formData.get("firstname") as string;
    const lastname = formData.get("lastname") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (!firstname || !lastname || !email || !subject || !message) {
        return { error: "Veuillez remplir tous les champs obligatoires." };
    }

    try {
        await prisma.contact.create({
            data: {
                firstname,
                lastname,
                email,
                phone,
                subject,
                message,
            },
        });

        revalidatePath("/admin/contacts"); // Pour rafraîchir la liste côté admin plus tard
        return { success: "Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais." };
    } catch (error) {
        console.error("Contact submission error:", error);
        return { error: "Une erreur est survenue lors de l'envoi du message." };
    }
}
