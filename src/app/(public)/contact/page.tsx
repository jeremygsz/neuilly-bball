import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { ContactForm } from "@/components/public/contact/ContactForm";
import s from "./page.module.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Contactez Neuilly Basketball Association pour toute question concernant les inscriptions, les entraînements ou le club.",
};

export default function ContactPage() {
    return (
        <main className={s.page}>

            {/* ── Hero ── */}
            <section className={s.hero}>
                <div className={s.heroInner}>
                    <span className={s.heroLabel}>Contactez-nous</span>
                    <h1 className={s.heroTitle}>
                        Une <span className={s.accent}>Question ?</span>
                    </h1>
                    <p className={s.heroSub}>
                        Besoin d'un renseignement pour une inscription ou une information sur le club ?
                        Notre équipe est à votre écoute.
                    </p>
                </div>
            </section>

            {/* ── Content ── */}
            <section className={s.content}>
                <div className={s.container}>

                    {/* ── Info ── */}
                    <div className={s.info}>
                        <div className={s.infoGroup}>
                            <h2 className={s.infoTitle}>Nos Coordonnées</h2>
                            <div className={s.contactList}>
                                <div className={s.contactItem}>
                                    <div className={s.iconBox}><MapPin size={20} /></div>
                                    <div>
                                        <span className={s.itemLabel}>Adresse</span>
                                        <p className={s.itemValue}>
                                            <a href="https://maps.app.goo.gl/z5aDEDxJrXMgvE1K9" target='_blank'>
                                                Complexe Sportif de l'île du Pont<br/> 92200 Neuilly-sur-Seine
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className={s.contactItem}>
                                    <div className={s.iconBox}><Phone size={20} /></div>
                                    <div>
                                        <span className={s.itemLabel}>Téléphone</span>
                                        <a href="tel:+33646861477" className={s.itemValue}>
                                            +33 (0)6 46 86 14 77
                                        </a>
                                    </div>
                                </div>
                                <div className={s.contactItem}>
                                    <div className={s.iconBox}><Mail size={20} /></div>
                                    <div>
                                        <span className={s.itemLabel}>Email</span>
                                        <p className={s.itemValue}>contact@neuillybasketball.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={s.infoGroup}>
                            <h2 className={s.infoTitle}>Suivez-nous</h2>
                            <div className={s.socials}>
                                <a href="#" className={s.socialLink} aria-label="Facebook">
                                    <Facebook size={20} />
                                </a>
                                <a href="#" className={s.socialLink} aria-label="Instagram">
                                    <Instagram size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ── Form ── */}
                    <div className={s.formWrapper}>
                        <ContactForm />
                    </div>

                </div>
            </section>

        </main>
    );
}
