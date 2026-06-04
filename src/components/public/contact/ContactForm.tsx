"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { submitContact } from "@/app/actions/contact";
import s from "./ContactForm.module.scss";

export function ContactForm() {
    const [isPending, setIsPending] = useState(false);
    const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

    async function handleSubmit(formData: FormData) {
        setIsPending(true);
        setMessage(null);

        const result = await submitContact(formData);

        if (result.success) {
            setMessage({ type: "success", text: result.success });
            // Reset form if success
            const form = document.querySelector("form") as HTMLFormElement;
            form.reset();
        } else if (result.error) {
            setMessage({ type: "error", text: result.error });
        }

        setIsPending(false);
    }

    return (
        <form action={handleSubmit} className={s.form}>
            <div className={s.row}>
                <div className={s.field}>
                    <label htmlFor="firstname" className={s.label}>Prénom *</label>
                    <input type="text" id="firstname" name="firstname" required className={s.input} placeholder="Ex: Jean" />
                </div>
                <div className={s.field}>
                    <label htmlFor="lastname" className={s.label}>Nom *</label>
                    <input type="text" id="lastname" name="lastname" required className={s.input} placeholder="Ex: Dupont" />
                </div>
            </div>

            <div className={s.row}>
                <div className={s.field}>
                    <label htmlFor="email" className={s.label}>Email *</label>
                    <input type="email" id="email" name="email" required className={s.input} placeholder="jean.dupont@exemple.com" />
                </div>
                <div className={s.field}>
                    <label htmlFor="phone" className={s.label}>Téléphone</label>
                    <input type="tel" id="phone" name="phone" className={s.input} placeholder="06 12 34 56 78" />
                </div>
            </div>

            <div className={s.field}>
                <label htmlFor="subject" className={s.label}>Sujet *</label>
                <select id="subject" name="subject" required className={s.select}>
                    <option value="">Sélectionnez un sujet</option>
                    <option value="Inscription">Demande d'inscription</option>
                    <option value="Renseignement">Renseignement général</option>
                    <option value="Partenariat">Devenir partenaire</option>
                    <option value="Autre">Autre demande</option>
                </select>
            </div>

            <div className={s.field}>
                <label htmlFor="message" className={s.label}>Votre message *</label>
                <textarea id="message" name="message" required className={s.textarea} placeholder="Comment pouvons-nous vous aider ?" />
            </div>

            {message && (
                <div className={`${s.message} ${s[message.type]}`}>
                    {message.text}
                </div>
            )}

            <button type="submit" disabled={isPending} className={s.submitBtn}>
                {isPending ? (
                    <>
                        <Loader2 size={18} className="animate-spin" />
                        Envoi en cours...
                    </>
                ) : (
                    <>
                        <Send size={18} />
                        Envoyer le message
                    </>
                )}
            </button>
        </form>
    );
}
