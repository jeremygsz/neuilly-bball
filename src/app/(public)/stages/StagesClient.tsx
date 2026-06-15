"use client";

import Image from "next/image";
import { Calendar, Clock, MapPin, Users, Target, Zap, Video, Trophy, Maximize2 } from "lucide-react";
import s from "./page.module.scss";

const stages = [
    {
        id: "summer-nocturne",
        title: "Summer Nocturne",
        subtitle: "Stage de perfectionnement",
        image: "/images/stages/1.png",
        dates: "Du 6 au 10 Juillet 2026",
        hours: "De 18h à 21h",
        target: "Tous niveaux",
        description: "Progresse après ta journée et deviens la meilleure version de toi-même ! Entraînez-vous en fin de journée pour progresser autrement.",
        features: [
            { icon: Trophy, text: "Entraînement comme un joueur pro" },
            { icon: Target, text: "Méthodes NBA & Euroleague" },
            { icon: Zap, text: "Machines Dr. Dish Shooting Machine" },
            { icon: Video, text: "Analyse vidéo & suivi individualisé" },
            { icon: Trophy, text: "Matériel professionnel US" }
        ],
        type: "nocturne",
        registerLink: "https://neuilly-basketball-association.sporteasy.net/collections/49999/"
    },
    {
        id: "summer-camp-1",
        title: "Summer Camp",
        subtitle: "Semaine 1 — Intensif",
        image: "/images/stages/2.png",
        dates: "Du 20 au 24 Juillet 2026",
        hours: "Toute la journée",
        target: "De 7 à 21 ans (Filles & Garçons)",
        description: "1 semaine d'entraînement intensif. Fun, progression et plaisir tout l'été ! Rejoignez-nous pour une expérience inoubliable.",
        features: [
            { icon: Trophy, text: "Entraînements & Challenges" },
            { icon: Trophy, text: "Concours & Activités" },
            { icon: Users, text: "Filles & Garçons (7 à 21 ans)" },
            { icon: Zap, text: "Machines Dr. Dish" },
            { icon: Trophy, text: "Surprises & Plaisir" }
        ],
        type: "camp",
        registerLink: "https://neuilly-basketball-association.sporteasy.net/collections/49998/checkout/"
    },
    {
        id: "summer-camp-2",
        title: "Summer Camp",
        subtitle: "Semaine 2 — Intensif",
        image: "/images/stages/3.png",
        dates: "Du 26 au 31 Juillet 2026",
        hours: "Toute la journée",
        target: "De 7 à 21 ans (Filles & Garçons)",
        description: "2ème semaine d'entraînement intensif. Terminez l'été en beauté avec du challenge et de la progression.",
        features: [
            { icon: Trophy, text: "Entraînements & Challenges" },
            { icon: Trophy, text: "Concours & Activités" },
            { icon: Users, text: "Filles & Garçons (7 à 21 ans)" },
            { icon: Zap, text: "Machines Dr. Dish" },
            { icon: Trophy, text: "Surprises & Plaisir" }
        ],
        type: "camp",
        registerLink: "https://neuilly-basketball-association.sporteasy.net/collections/49997/checkout/",
        isFull: true
    }
];

export default function StagesClient() {
    return (
        <>
            <div className={s.grid}>
                {stages.map((stage) => (
                    <div key={stage.id} className={`${s.card} ${s[`card--${stage.type}`]} ${stage.isFull ? s.cardFull : ""}`}>
                        <div className={s.cardHeader}>
                            <div className={s.cardBadge}>{stage.subtitle}</div>
                            <h2 className={s.cardTitle}>{stage.title}</h2>
                            <div className={s.cardDates}>
                                <Calendar size={18} className={s.icon} />
                                <span>{stage.dates}</span>
                            </div>
                            <div className={s.cardInfo}>
                                <div className={s.infoItem}>
                                    <Clock size={16} />
                                    <span>{stage.hours}</span>
                                </div>
                                <div className={s.infoItem}>
                                    <Users size={16} />
                                    <span>{stage.target}</span>
                                </div>
                            </div>
                        </div>

                        <div className={s.imageWrapper}>
                            <a 
                                href={stage.image} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={s.cardImage} 
                                title="Ouvrir l'image en plein écran"
                            >
                                <Image
                                    src={stage.image}
                                    alt={stage.title}
                                    width={400}
                                    height={250}
                                    className={s.image}
                                />
                                <div className={s.imageOverlay}>
                                    <Maximize2 size={32} color="white" />
                                </div>
                            </a>
                            {stage.isFull && (
                                <div className={s.soldOutBadge}>
                                    Complet
                                </div>
                            )}
                        </div>

                        <div className={s.cardBody}>
                            <p className={s.cardDesc}>{stage.description}</p>
                            <ul className={s.features}>
                                {stage.features.map((f, i) => (
                                    <li key={i} className={s.featureItem}>
                                        <f.icon size={16} className={s.featureIcon} />
                                        <span>{f.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={s.cardFooter}>
                            {stage.isFull ? (
                                <div className={s.disabledBtn}>
                                    Stage Complet
                                </div>
                            ) : (
                                <a
                                    href={stage.registerLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={s.registerBtn}
                                >
                                    S'inscrire au stage
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className={s.extraInfo}>
                <div className={s.location}>
                    <MapPin size={24} />
                    <div>
                        <h3>Lieu des stages</h3>
                        <p>Complexe Sportif de l'île du Pont, Neuilly-sur-Seine</p>
                    </div>
                </div>
                <div className={s.contact}>
                    <h3>Besoin d'infos ?</h3>
                    <p>
                        Contactez-nous au{" "}
                        <a href="https://wa.me/33646861477" target="_blank" rel="noopener noreferrer" className={s.whatsappLink}>
                            <strong>06 46 86 14 77</strong>
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}
