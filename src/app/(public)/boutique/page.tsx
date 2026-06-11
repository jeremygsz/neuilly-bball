import { Metadata } from "next";
import Image from "next/image";
import { Info, Phone, MessageCircle } from "lucide-react";
import BoutiqueClient from "./BoutiqueClient";
import s from "./page.module.scss";

export const metadata: Metadata = {
    title: "Boutique Officielle | Neuilly Basketball",
    description: "Découvrez les équipements officiels de Neuilly Basketball Association. Maillots, shorts, survêtements et accessoires aux couleurs du club.",
};

export default function BoutiquePage() {
    return (
        <main className={s.page}>
            {/* ── Hero ── */}
            <section className={s.hero}>
                <div className={s.heroInner}>
                    <div className={s.adidasLogo}>
                        <Image 
                            src="/images/partner/adidas.svg" 
                            alt="Adidas" 
                            width={60} 
                            height={40} 
                            className={s.brandLogo}
                        />
                    </div>
                    <span className={s.heroLabel}>Collection Officielle</span>
                    <h1 className={s.heroTitle}>
                        La <span className={s.accent}>Boutique</span>
                    </h1>
                    <p className={s.heroSub}>
                        Portez fièrement les couleurs de Neuilly Basketball Association. 
                        Une gamme complète d'équipements techniques et lifestyle.
                    </p>
                </div>
            </section>

            {/* ── Content ── */}
            <section className={s.content}>
                <div className={s.container}>
                    
                    {/* ── Purchase Info ── */}
                    <div className={s.infoBox}>
                        <div className={s.infoIcon}>
                            <Info size={24} />
                        </div>
                        <div className={s.infoText}>
                            <h3>Comment commander ?</h3>
                            <p>
                                La vente de nos équipements se fait <strong>uniquement au sein du club</strong>. 
                                Pour toute commande ou renseignement, veuillez vous adresser à vos entraîneurs 
                                ou passer nous voir au Complexe Sportif de l'île du Pont pendant les horaires d'entraînement.
                            </p>
                        </div>
                    </div>

                    <BoutiqueClient />

                    {/* ── Contact for Boutique ── */}
                    <div className={s.boutiqueContact}>
                        <div className={s.contactCard}>
                            <h3>Une question sur une taille ?</h3>
                            <p>N'hésitez pas à nous contacter directement pour plus de précisions sur nos produits.</p>
                            <div className={s.contactActions}>
                                <a href="tel:+33646861477" className={s.contactBtn}>
                                    <Phone size={18} />
                                    06 46 86 14 77
                                </a>
                                <a href="https://wa.me/33646861477" target="_blank" rel="noopener noreferrer" className={s.whatsappBtn}>
                                    <MessageCircle size={18} />
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
