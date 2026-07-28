"use client";

import Image from "next/image";
import {
    MapPin,
    Shield,
    Sliders,
    CheckCircle2,
    Building2,
    Users2,
    Sparkles,
} from "lucide-react";
import { LanguageProvider, useLang } from "./LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { TrainingCenterForm } from "./TrainingCenterForm";
import s from "@/app/(public)/training-center/page.module.scss";

// ─── Translations ──────────────────────────────────────────────────────────────

const t = {
    fr: {
        heroLabel: "NEUILLY BASKET HIGH PERFORMANCE CENTER",
        heroTitle1: "VOTRE CAMP",
        heroTitle2: "D'ENTRAÎNEMENT",
        heroTitleAccent: "PRIVÉ",
        heroTitle3: "AU CŒUR DE PARIS",
        heroSub:
            "Neuilly Basketball Association met à disposition à des joueurs professionnels et espoirs une structure confidentielle d'excellence pour organiser leur préparation individuelle sur mesure.",
        clienteleTitle: "Accès réservé",

        // Philosophy
        philosophyBadge: "Standard NBA",
        philosophyTitle: "S'entraîner comme vous le souhaitez, avec qui vous voulez.",
        philosophyLead:
            "Chaque joueur possède ses habitudes, ses protocoles de préparation et son staff. Notre mission est de vous offrir la flexibilité ultime. Vous venez avec votre coach personnel, ou vous utilisez nos entraîneurs expérimentés de haut niveau. Nous construisons votre programme selon vos besoins.",
        philosophyCardTitle: "Notre Philosophie",
        philosophyList: [
            { key: "Discrétion", val: "Sessions privatisées, sans public ni médias." },
            { key: "Professionnalisme", val: "Équipements et installations de niveau franchise." },
            { key: "Flexibilité", val: "Horaires, staff et logistique adaptés à votre rythme." },
            { key: "Exigence", val: "Des standards de qualité élevés sur chaque workout." },
        ],

        // Highlights
        highlights: [
            {
                title: "Environnement Privé & Sécurisé",
                desc: "Un cadre calme, discret et sécurisé à Neuilly-sur-Seine, à l'écart de l'agitation des gymnases publics.",
            },
            {
                title: "100% Personnalisé",
                desc: "Que vous veniez avec votre propre staff (coach, prépa) ou que vous utilisiez le nôtre, nous nous adaptons.",
            },
            {
                title: "Localisation Stratégique",
                desc: "Situé à quelques minutes des Champs-Élysées, de La Défense, des hôtels de luxe parisiens et des aéroports.",
            },
        ],

        // Infrastructure
        infraBadge: "Des Outils de Niveau Elite",
        infraTitle: "Infrastructures & Équipements",
        infraSubtitle:
            "Nos installations permettent d'organiser des séances individuelles ou collectives de très haut niveau.",
        infrastructures: [
            {
                title: "Terrain Homologué & Matériel Pro",
                desc: "Terrain de basketball officiel avec parquets et paniers de niveau professionnel, ballons techniques lourds, cônes, échelles de rythme et haies de vitesse.",
                image: "/images/court/COURT.JPG",
                features: ["Terrain officiel", "Ballons lourds / multisizes", "Matériel de dribble et appuis"],
            },
            {
                title: "Shooting Lab & Technologie",
                desc: "Développez votre shoot avec la machine de tir Dr. Dish de dernière génération et des outils vidéo pour analyser la mécanique du tir en temps réel.",
                image: "/images/court/shooting_machine.jpg",
                features: ["Machine Dr. Dish", "Outils de développement du tir", "Captation vidéo des tirs"],
            },
            {
                title: "Espace Performance & Récupération",
                desc: "Optimisez vos temps de repos avec nos installations de récupération d'élite : bain froid (cryothérapie), sauna, et boissons nutritionnelles adaptées.",
                image: "/images/court/recovery_zone.jpg",
                features: ["Bains froids", "Sauna & Douches", "Collation & Récupération active"],
            },
        ],

        // Programs
        programsBadge: "Programmes d'entraînement",
        programsTitle: "Format d'Accompagnement",
        programs: [
            { title: "Individual Workout", desc: "1 joueur, 100% personnalisé. Travail technique et physique ciblé selon vos objectifs de progression.", badge: "1 Joueur" },
            { title: "Small Group Workout", desc: "2 à 6 joueurs. Intensité de jeu, perfectionnement des fondamentaux collectifs et du un-contre-un.", badge: "2-6 Joueurs" },
            { title: "Team Camp", desc: "Préparation d'équipe professionnelle. Privatisation complète des installations pour des stages fermés.", badge: "Équipes Pro" },
            { title: "Off Season Program", desc: "Préparation estivale complète : renforcement athlétique spécifique, cardio et routines techniques.", badge: "Été" },
            { title: "Shooting Lab", desc: "Un focus absolu sur la mécanique de tir, la répétition sous fatigue et la création de routines stables.", badge: "Tir Élite" },
            { title: "Elite Skills Camp", desc: "Programme intensif sur plusieurs jours pour les joueurs souhaitant franchir un cap physique et tactique.", badge: "Intensif" },
        ],

        // Extra services
        extraBadge: "Services à 360 Degrés",
        extraTitle: "Services & Prestations Complémentaires",
        extraSubtitle: "Tout est pensé pour que le joueur ou la joueuse n'ait à penser qu'à une seule chose : travailler.",
        optionsPlus: [
            { title: "Salle de musculation", desc: "Équipement complet (racks, cages, haltères, kettlebells) pour la puissance et la prévention des blessures." },
            { title: "Analyse Vidéo", desc: "Captation de vos séances, analyse technique au ralenti et comparaison avant/après envoyée à votre staff." },
            { title: "Testing Physique", desc: "Évaluation du saut vertical, sprint, agilité latérale et endurance sous fatigue avec rapports détaillés." },
            { title: "Staff Médical & Kiné", desc: "Mise en relation et organisation de soins (Kiné, Ostéopathie) avec des experts du sport de haut niveau." },
            { title: "Nutrition Dédiée", desc: "Organisation de repas et collations sur mesure répondant strictement aux exigences du joueur." },
            { title: "Logistique VVIP", desc: "Transferts en VTC premium / chauffeur privé et accompagnement pour hébergement dans les hôtels de luxe à proximité." },
        ],

        // Partners
        proClubTitle: "Pour les Clubs Professionnels",
        proClubDesc:
            "Vous recherchez une solution fiable lorsque l'un de vos joueurs séjourne à Paris ? Nous devenons votre relais local. Votre joueur bénéficie d'un interlocuteur unique, d'installations de qualité et d'un environnement sécurisé. Tout est organisé dans le respect strict de vos protocoles de staff.",
        agentTitle: "Pour les Agents de Joueurs",
        agentDesc:
            "Nous accueillons vos athlètes tout au long de l'année (Off Season ou en cours de saison). Notre engagement est de leur offrir un cadre de travail professionnel, discret, sécurisé et efficace pendant leurs passages dans la capitale.",
    },

    en: {
        heroLabel: "NEUILLY BASKET HIGH PERFORMANCE CENTER",
        heroTitle1: "YOUR PRIVATE",
        heroTitle2: "TRAINING",
        heroTitleAccent: "CAMP",
        heroTitle3: "IN THE HEART OF PARIS",
        heroSub:
            "Neuilly Basketball Association provides professional and elite prospect players with a confidential, world-class facility to organize their personalized training preparation.",
        clienteleTitle: "Reserved Access",

        // Philosophy
        philosophyBadge: "NBA Standard",
        philosophyTitle: "Train the way you want, with whoever you choose.",
        philosophyLead:
            "Every player has their own habits, preparation protocols, and staff. Our mission is to provide you with the ultimate flexibility. Bring your own personal coach, or use our experienced high-level trainers. We build your program around your needs.",
        philosophyCardTitle: "Our Philosophy",
        philosophyList: [
            { key: "Discretion", val: "Private sessions — no audience, no media." },
            { key: "Professionalism", val: "Franchise-level equipment and facilities." },
            { key: "Flexibility", val: "Schedules, staff, and logistics adapted to your rhythm." },
            { key: "Excellence", val: "High-quality standards maintained on every workout." },
        ],

        // Highlights
        highlights: [
            {
                title: "Private & Secure Environment",
                desc: "A calm, discreet, and secure setting in Neuilly-sur-Seine, away from the noise of public gyms.",
            },
            {
                title: "100% Customized",
                desc: "Whether you bring your own staff (coach, trainer) or use ours, we adapt to your needs.",
            },
            {
                title: "Strategic Location",
                desc: "Minutes away from the Champs-Élysées, La Défense, luxury Parisian hotels, and airports.",
            },
        ],

        // Infrastructure
        infraBadge: "Elite-Level Tools",
        infraTitle: "Infrastructure & Equipment",
        infraSubtitle:
            "Our facilities allow for individual or team sessions at the highest level of play.",
        infrastructures: [
            {
                title: "Certified Court & Pro Equipment",
                desc: "Official basketball court with professional-grade hardwood floors and hoops, technical heavy balls, cones, agility ladders, and speed hurdles.",
                image: "/images/court/COURT.JPG",
                features: ["Official court", "Heavy / multi-size balls", "Dribble & footwork equipment"],
            },
            {
                title: "Shooting Lab & Technology",
                desc: "Elevate your shooting with the latest Dr. Dish shooting machine and video tools to analyze your shooting mechanics in real time.",
                image: "/images/court/shooting_machine.jpg",
                features: ["Dr. Dish Machine", "Shot development tools", "Video shot capture"],
            },
            {
                title: "Performance & Recovery Zone",
                desc: "Optimize your recovery time with our elite recovery facilities: cold plunge (cryotherapy), sauna, and tailored nutritional beverages.",
                image: "/images/court/recovery_zone.jpg",
                features: ["Cold plunge", "Sauna & Showers", "Snacks & Active recovery"],
            },
        ],

        // Programs
        programsBadge: "Training Programs",
        programsTitle: "Training Formats",
        programs: [
            { title: "Individual Workout", desc: "1 player, 100% personalized. Targeted technical and physical work based on your progression goals.", badge: "1 Player" },
            { title: "Small Group Workout", desc: "2 to 6 players. Game intensity, fundamental refinement, and one-on-one work.", badge: "2-6 Players" },
            { title: "Team Camp", desc: "Professional team preparation. Full facility privatization for closed training camps.", badge: "Pro Teams" },
            { title: "Off Season Program", desc: "Complete summer preparation: sport-specific strength training, cardio, and technical routines.", badge: "Summer" },
            { title: "Shooting Lab", desc: "An absolute focus on shooting mechanics, repetition under fatigue, and building stable routines.", badge: "Elite Shooting" },
            { title: "Elite Skills Camp", desc: "Intensive multi-day program for players looking to make a physical and tactical leap.", badge: "Intensive" },
        ],

        // Extra services
        extraBadge: "360° Services",
        extraTitle: "Additional Services & Amenities",
        extraSubtitle: "Everything is designed so the player only has to think about one thing: working.",
        optionsPlus: [
            { title: "Weight Room", desc: "Full equipment (racks, cages, dumbbells, kettlebells) for strength and injury prevention." },
            { title: "Video Analysis", desc: "Session capture, slow-motion technical analysis, and before/after comparison sent to your staff." },
            { title: "Physical Testing", desc: "Evaluation of vertical jump, sprint, lateral agility, and endurance under fatigue with detailed reports." },
            { title: "Medical Staff & Physical Therapy", desc: "Connection and organization of care (physio, osteopathy) with elite sport experts." },
            { title: "Dedicated Nutrition", desc: "Organization of meals and snacks tailored strictly to the player's requirements." },
            { title: "VVIP Logistics", desc: "Premium VTC transfers / private chauffeur and assistance for accommodation at nearby luxury hotels." },
        ],

        // Partners
        proClubTitle: "For Professional Clubs",
        proClubDesc:
            "Looking for a reliable solution when one of your players is staying in Paris? We become your local relay. Your player benefits from a single point of contact, quality facilities, and a secure environment — all organized in strict accordance with your staff protocols.",
        agentTitle: "For Player Agents",
        agentDesc:
            "We welcome your athletes year-round (Off Season or in-season). Our commitment is to provide them with a professional, discreet, secure, and effective training environment during their time in the capital.",
    },
};

// ─── Clientèle / Ligues ─────────────────────────────────────────────────────

const LEAGUES = [
    { name: "NBA", logo: "/images/leagues/nba.svg" },
    { name: "WNBA", logo: "/images/leagues/wnba.svg" },
    { name: "Euroleague", logo: "/images/leagues/euroleague.svg" },
    { name: "Betclic Élite 1 & 2", logo: "/images/leagues/betclic-elite.svg" },
    { name: "Pro B", logo: "/images/leagues/pro-b.svg" },
    { name: "NCAA", logo: "/images/leagues/ncaa.svg" },
    { name: "NM1 / Féminines Pro", logo: "/images/leagues/ffbb.svg" },
    { name: "Internationaux", logo: "/images/leagues/fiba.svg" },
];

// ─── Inner Content (reads from context) ──────────────────────────────────────

function TrainingCenterContent() {
    const { lang } = useLang();
    const tr = t[lang];

    return (
        <main className={s.page}>

            {/* ── Hero ── */}
            <section className={s.hero}>
                <div className={s.gridBackground} />
                <div className={s.heroInner}>
                    {/* Language Switcher */}
                    <div className={s.langSwitcherWrapper}>
                        <LanguageSwitcher />
                    </div>

                    <div className={s.badgeWrapper}>
                        <span className={s.heroLabel}>{tr.heroLabel}</span>
                    </div>
                    <h1 className={s.heroTitle}>
                        {tr.heroTitle1}<br />
                        {tr.heroTitle2} <span className={s.accent}>{tr.heroTitleAccent}</span><br />
                        {tr.heroTitle3}
                    </h1>
                    <p className={s.heroSub}>{tr.heroSub}</p>

                    {/* Clientèle ciblée */}
                    <div className={s.clienteleContainer}>
                        <span className={s.clienteleTitle}>{tr.clienteleTitle}</span>
                        <div className={s.clienteleGrid}>
                            {LEAGUES.map((league) => (
                                <div key={league.name} className={s.clienteleItem}>
                                    <div className={s.clienteleLogoWrapper}>
                                        <Image
                                            src={league.logo}
                                            alt={league.name}
                                            fill
                                            sizes="80px"
                                            className={s.clienteleLogo}
                                        />
                                    </div>
                                    <span className={s.clienteleName}>{league.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Key Values & Philosophy ── */}
            <section className={s.philosophySection}>
                <div className="container-custom">
                    <div className={s.philosophyGrid}>
                        <div className={s.philosophyMain}>
                            <span className="badge-red">{tr.philosophyBadge}</span>
                            <h2 className={s.sectionTitle}>{tr.philosophyTitle}</h2>
                            <p className={s.leadText}>{tr.philosophyLead}</p>
                        </div>
                        <div className={s.philosophyCard}>
                            <Sparkles className={s.philosophyCardIcon} />
                            <h3 className={s.philosophyCardTitle}>{tr.philosophyCardTitle}</h3>
                            <ul className={s.philosophyList}>
                                {tr.philosophyList.map((item) => (
                                    <li key={item.key}>
                                        <strong>{item.key} :</strong> {item.val}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Highlights ── */}
            <section className={s.highlightsSection}>
                <div className="container-custom">
                    <div className={s.highlightsGrid}>
                        {tr.highlights.map((hl, index) => {
                            const icons = [Shield, Sliders, MapPin];
                            const IconComponent = icons[index];
                            return (
                                <div key={index} className={s.hlCard}>
                                    <div className={s.hlIconBox}>
                                        <IconComponent size={24} />
                                    </div>
                                    <h3 className={s.hlTitle}>{hl.title}</h3>
                                    <p className={s.hlDesc}>{hl.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Infrastructures ── */}
            <section className={s.infraSection}>
                <div className="container-custom">
                    <div className={s.sectionHeader}>
                        <span className="badge-blue">{tr.infraBadge}</span>
                        <h2 className={s.sectionTitle}>{tr.infraTitle}</h2>
                        <p className={s.sectionSubtitle}>{tr.infraSubtitle}</p>
                    </div>

                    <div className={s.infraGrid}>
                        {tr.infrastructures.map((infra, idx) => (
                            <div key={idx} className={s.infraCard}>
                                <div className={s.infraImageWrapper}>
                                    <Image
                                        src={infra.image}
                                        alt={infra.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className={s.infraImage}
                                    />
                                    <div className={s.infraOverlay} />
                                </div>
                                <div className={s.infraContent}>
                                    <h3 className={s.infraTitle}>{infra.title}</h3>
                                    <p className={s.infraDesc}>{infra.desc}</p>
                                    <ul className={s.infraFeatureList}>
                                        {infra.features.map((feat, fidx) => (
                                            <li key={fidx}>
                                                <CheckCircle2 size={14} className={s.checkIcon} />
                                                <span>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Programs ── */}
            <section className={s.programsSection}>
                <div className="container-custom">
                    <div className={s.sectionHeader}>
                        <span className="badge-red">{tr.programsBadge}</span>
                        <h2 className={s.sectionTitle}>{tr.programsTitle}</h2>
                    </div>

                    <div className={s.programsGrid}>
                        {tr.programs.map((prog, idx) => (
                            <div key={idx} className={s.progCard}>
                                <div className={s.progHeader}>
                                    <span className={s.progBadge}>{prog.badge}</span>
                                </div>
                                <h3 className={s.progTitle}>{prog.title}</h3>
                                <p className={s.progDesc}>{prog.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Services Additionnels ── */}
            <section className={s.extraServicesSection}>
                <div className="container-custom">
                    <div className={s.sectionHeader}>
                        <span className="badge-blue">{tr.extraBadge}</span>
                        <h2 className={s.sectionTitle}>{tr.extraTitle}</h2>
                        <p className={s.sectionSubtitle}>{tr.extraSubtitle}</p>
                    </div>

                    <div className={s.extraGrid}>
                        {tr.optionsPlus.map((opt, idx) => (
                            <div key={idx} className={s.extraCard}>
                                <h3 className={s.extraTitle}>⚡ {opt.title}</h3>
                                <p className={s.extraDesc}>{opt.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Club Relais & Agents ── */}
            <section className={s.partnersSection}>
                <div className="container-custom">
                    <div className={s.partnersGrid}>
                        <div className={s.partnerBox}>
                            <Building2 className={s.partnerIcon} />
                            <h3>{tr.proClubTitle}</h3>
                            <p>{tr.proClubDesc}</p>
                        </div>
                        <div className={s.partnerBox}>
                            <Users2 className={s.partnerIcon} />
                            <h3>{tr.agentTitle}</h3>
                            <p>{tr.agentDesc}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Form Section ── */}
            <section id="privatisation" className={s.formSection}>
                <div className="container-custom">
                    <div className={s.formWrapper}>
                        <TrainingCenterForm lang={lang} />
                    </div>
                </div>
            </section>

        </main>
    );
}

// ─── Root Export (wraps with LanguageProvider) ────────────────────────────────

export function TrainingCenterPageClient() {
    return (
        <LanguageProvider>
            <TrainingCenterContent />
        </LanguageProvider>
    );
}
