"use client";

import Image from "next/image";
import { Calendar, Clock, MapPin, Users, Target, Zap, Video, Trophy, Maximize2, Snowflake, Leaf } from "lucide-react";
import s from "./page.module.scss";

interface StageFeature {
    icon: typeof Trophy;
    text: string;
}

interface Stage {
    id: string;
    title: string;
    subtitle?: string;
    image: string;
    dates: string;
    hours: string;
    target: string;
    description: string;
    features: StageFeature[];
    registerLink: string;
    isFull: boolean;
}

interface Period {
    id: string;
    label: string;
    intro?: string;
    theme?: "christmas" | "autumn";
    stages: Stage[];
}

// Valeurs fixes (pas de Math.random) pour éviter un mismatch d'hydratation
const snowflakes = Array.from({ length: 24 }, (_, i) => ({
    left: (i * 37) % 100,
    size: 10 + ((i * 7) % 14),
    duration: 6 + ((i * 5) % 7),
    delay: -((i * 3) % 10),
}));

const leafColors = ["#facc15", "#f97316", "#dc2626"];
const leaves = Array.from({ length: 18 }, (_, i) => ({
    left: (i * 41) % 100,
    size: 14 + ((i * 7) % 12),
    duration: 8 + ((i * 5) % 7),
    delay: -((i * 3) % 12),
    color: leafColors[i % leafColors.length],
}));

const periods: Period[] = [
    {
        id: "noel-2026",
        label: "Vacances de Noël 2026",
        theme: "christmas",
        intro: "LE TEMPS PASSE VITE… NOËL APPROCHE DÉJÀ!\n" +
            " On a l'impression que la rentrée, c'était hier… et pourtant, nous voilà déjà en train de préparer les fêtes de fin d'année !\n" +
            "Après le succès de nos stages de la Toussaint, toute l'équipe de Neuilly Basketball Association est déjà mobilisée pour vous préparer un nouveau rendez-vous sportif, festif et inoubliable !\n" +
            "À Neuilly Basketball Association, nous voulons que chaque enfant trouve sa place, quel que soit son niveau.\n" +
            "Nous prenons le temps d'accompagner chacun, de corriger les gestes, de valoriser les progrès et de transmettre notre passion du basketball dans une ambiance à la fois sérieuse, bienveillante et joyeuse.",
        stages: [
            {
                id: "noel-camp-1",
                title: "Camp de Basket",
                image: "/images/stages/noel26.jpeg",
                dates: "Du 21 au 24 Décembre 2026",
                hours: "10h-12h & 14h-17h",
                target: "De 6 à 17 ans (Filles & Garçons)",
                description: "Gymnase climatisé, avec ou sans repas.",
                features: [
                    { icon: Snowflake, text: "Gymnase climatisé" },
                    { icon: Target, text: "Perfectionnement technique" },
                    { icon: Zap, text: "Machines de shoot & VertiMax" },
                    { icon: Calendar, text: "Repas en option" },
                    { icon: Trophy, text: "Jeux, concours & ambiance fun" }
                ],
                registerLink: "https://buy.stripe.com/5kQ8wP4Lk55Z20p7XiefC1R",
                isFull: false
            }
        ],
    },{
        id: "toussaint-2026",
        label: "Vacances de la Toussaint 2026",
        theme: "autumn",
        intro: "Les vacances approchent et Neuilly Basketball Association vous prépare deux semaines de basket exceptionnelles !\n" +
            "Au programme : du basket, du plaisir, du travail, des progrès, des défis et surtout de très beaux moments à partager ensemble !\n" +
            "UNE EXPÉRIENCE BASKET COMPLÈTE !\n" +
            "Que votre enfant soit débutant ou déjà passionné, notre objectif reste le même : lui permettre de progresser à son rythme, de prendre confiance en lui et surtout de prendre un maximum de plaisir sur le terrain !",
        stages: [
            {
                id: "toussaint-camp-1",
                title: "Camp de Basket",
                image: "/images/stages/4.png",
                dates: "Du 19 au 23 Octobre 2026",
                hours: "10h-12h & 14h-17h",
                target: "De 7 à 21 ans (Filles & Garçons)",
                description: "Gymnase climatisé, avec ou sans repas.",
                features: [
                    { icon: Snowflake, text: "Gymnase climatisé" },
                    { icon: Target, text: "Perfectionnement technique" },
                    { icon: Zap, text: "Machines de shoot & VertiMax" },
                    { icon: Calendar, text: "Repas en option" },
                    { icon: Trophy, text: "Jeux, concours & ambiance fun" }
                ],
                registerLink: "https://buy.stripe.com/cNi28r6Ts2XR0WlgtOefC0I",
                isFull: true
            },
            {
                id: "toussaint-camp-2",
                title: "Camp de Basket",
                image: "/images/stages/4.png",
                dates: "Du 26 au 30 Octobre 2026",
                hours: "10h-12h & 14h-17h",
                target: "De 7 à 21 ans (Filles & Garçons)",
                description: "Gymnase climatisé, avec ou sans repas.",
                features: [
                    { icon: Snowflake, text: "Gymnase climatisé" },
                    { icon: Target, text: "Perfectionnement technique" },
                    { icon: Zap, text: "Machines de shoot & VertiMax" },
                    { icon: Calendar, text: "Repas en option" },
                    { icon: Trophy, text: "Jeux, concours & ambiance fun" }
                ],
                registerLink: "https://buy.stripe.com/cNi28r6Ts2XR0WlgtOefC0I",
                isFull: true
            }
        ],
    },
    {
        id: "ete-2026",
        label: "Été 2026",
        stages: [
            {
                id: "summer-nocturne",
                title: "Summer Nocturne",
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
                registerLink: "https://neuilly-basketball-association.sporteasy.net/collections/49999/",
                isFull: true
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
                registerLink: "https://neuilly-basketball-association.sporteasy.net/collections/49998/checkout/",
                isFull: true
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
                registerLink: "https://neuilly-basketball-association.sporteasy.net/collections/49997/checkout/",
                isFull: true
            }
        ],
    },
];

export default function StagesClient() {
    return (
        <>
            {periods.map((period) => (
                <div key={period.id}>
                    <div className={s.periodHeader}>
                        <h2 className="font-display">{period.label}</h2>
                    </div>

                    {period.intro && (
                        <div className={`${s.periodIntro} ${period.theme === "christmas" ? s.periodIntroChristmas : ""} ${period.theme === "autumn" ? s.periodIntroAutumn : ""}`}>
                            {period.theme === "christmas" && (
                                <div className={s.snow} aria-hidden="true">
                                    {snowflakes.map((f, i) => (
                                        <Snowflake
                                            key={i}
                                            size={f.size}
                                            className={s.snowflake}
                                            style={{
                                                left: `${f.left}%`,
                                                animationDuration: `${f.duration}s`,
                                                animationDelay: `${f.delay}s`,
                                            }}
                                        />
                                    ))}
                                </div>
                            )}
                            {period.theme === "autumn" && (
                                <div className={s.snow} aria-hidden="true">
                                    {leaves.map((l, i) => (
                                        <Leaf
                                            key={i}
                                            size={l.size}
                                            fill="currentColor"
                                            className={s.leaf}
                                            style={{
                                                left: `${l.left}%`,
                                                color: l.color,
                                                animationDuration: `${l.duration}s`,
                                                animationDelay: `${l.delay}s`,
                                            }}
                                        />
                                    ))}
                                </div>
                            )}
                            <p className={s.periodIntroText}>{period.intro}</p>
                        </div>
                    )}

                    <div className={s.grid}>
                        {period.stages.map((stage) => (
                            <div key={stage.id} className={`${s.card} ${stage.isFull ? s.cardFull : s["card--available"]}`}>
                                <div className={s.cardHeader}>
                                    {stage.subtitle && <div className={s.cardBadge}>{stage.subtitle}</div>}
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
                </div>
            ))}

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
