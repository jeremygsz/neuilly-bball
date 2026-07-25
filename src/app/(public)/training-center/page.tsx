import { Metadata } from "next";
import Image from "next/image";
import {
    MapPin,
    Shield,
    Activity,
    Compass,
    Clock,
    Target,
    Sliders,
    Eye,
    CheckCircle2,
    Building2,
    Users2,
    Sparkles,
} from "lucide-react";
import { TrainingCenterForm } from "@/components/public/training-center/TrainingCenterForm";
import s from "./page.module.scss";

export const metadata: Metadata = {
    title: "High Performance Training Center | Neuilly Basketball",
    description:
        "Votre camp d’entraînement privé au cœur de Paris. Infrastructure de basket haut de niveau pour joueurs NBA, EuroLeague, Betclic Élite, Pro B, NCAA et internationaux.",
};

const clienteles = [
    "NBA",
    "EuroLeague",
    "Betclic Élite",
    "Pro B",
    "NCAA",
    "NM1 / Féminines Pro",
    "Internationaux",
];

const highlights = [
    {
        title: "Environnement Privé & Sécurisé",
        desc: "Un cadre calme, discret et sécurisé à Neuilly-sur-Seine, à l'écart de l'agitation des gymnases publics.",
        icon: Shield,
    },
    {
        title: "100% Personnalisé",
        desc: "Que vous veniez avec votre propre staff (coach, prépa) ou que vous utilisiez le nôtre, nous nous adaptons.",
        icon: Sliders,
    },
    {
        title: "Localisation Stratégique",
        desc: "Situé à quelques minutes des Champs-Élysées, de La Défense, des hôtels de luxe parisiens et des aéroports.",
        icon: MapPin,
    },
];

const infrastructures = [
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
];

const programs = [
    {
        title: "Individual Workout",
        desc: "1 joueur, 100% personnalisé. Travail technique et physique ciblé selon vos objectifs de progression.",
        badge: "1 Joueur",
    },
    {
        title: "Small Group Workout",
        desc: "2 à 6 joueurs. Intensité de jeu, perfectionnement des fondamentaux collectifs et du un-contre-un.",
        badge: "2-6 Joueurs",
    },
    {
        title: "Team Camp",
        desc: "Préparation d’équipe professionnelle. Privatisation complète des installations pour des stages fermés.",
        badge: "Équipes Pro",
    },
    {
        title: "Off Season Program",
        desc: "Préparation estivale complète : renforcement athlétique spécifique, cardio et routines techniques.",
        badge: "Été",
    },
    {
        title: "Shooting Lab",
        desc: "Un focus absolu sur la mécanique de tir, la répétition sous fatigue et la création de routines stables.",
        badge: "Tir Élite",
    },
    {
        title: "Elite Skills Camp",
        desc: "Programme intensif sur plusieurs jours pour les joueurs souhaitant franchir un cap physique et tactique.",
        badge: "Intensif",
    },
];

const optionsPlus = [
    { title: "Salle de musculation", desc: "Équipement complet (racks, cages, haltères, kettlebells) pour la puissance et la prévention des blessures." },
    { title: "Analyse Vidéo", desc: "Captation de vos séances, analyse technique au ralenti et comparaison avant/après envoyée à votre staff." },
    { title: "Testing Physique", desc: "Évaluation du saut vertical, sprint, agilité latérale et endurance sous fatigue avec rapports détaillés." },
    { title: "Staff Médical & Kiné", desc: "Mise en relation et organisation de soins (Kiné, Ostéopathie) avec des experts du sport de haut niveau." },
    { title: "Nutrition Dédiée", desc: "Organisation de repas et collations sur mesure répondant strictement aux exigences du joueur." },
    { title: "Logistique VVIP", desc: "Transferts en VTC premium / chauffeur privé et accompagnement pour hébergement dans les hôtels de luxe à proximité." },
];

export default function TrainingCenterPage() {
    return (
        <main className={s.page}>

            {/* ── Hero (Design pur sans photo) ── */}
            <section className={s.hero}>
                <div className={s.gridBackground} />
                <div className={s.heroInner}>
                    <div className={s.badgeWrapper}>
                        <span className={s.heroLabel}>High Performance Training Center</span>
                    </div>
                    <h1 className={s.heroTitle}>
                        VOTRE CAMP<br />
                        D'ENTRAÎNEMENT <span className={s.accent}>PRIVÉ</span><br />
                        AU CŒUR DE PARIS
                    </h1>
                    <p className={s.heroSub}>
                        Neuilly Basketball Association met à disposition des joueurs professionnels et espoirs
                        une structure confidentielle d'excellence pour organiser leur préparation individuelle sur mesure.
                    </p>

                    {/* Clientèle ciblée */}
                    <div className={s.clienteleContainer}>
                        <span className={s.clienteleTitle}>Accès réservé</span>
                        <div className={s.clienteleGrid}>
                            {clienteles.map((client, idx) => (
                                <span key={idx} className={s.clienteleBadge}>
                                    🏀 {client}
                                </span>
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
                            <span className="badge-red">Standard NBA</span>
                            <h2 className={s.sectionTitle}>
                                S'entraîner comme vous le souhaitez, avec qui vous voulez.
                            </h2>
                            <p className={s.leadText}>
                                Chaque joueur possède ses habitudes, ses protocoles de préparation et son staff.
                                Notre mission est de vous offrir la flexibilité ultime. Vous venez avec votre coach personnel,
                                ou vous utilisez nos entraîneurs expérimentés de haut niveau. Nous construisons votre
                                programme selon vos besoins.
                            </p>
                        </div>
                        <div className={s.philosophyCard}>
                            <Sparkles className={s.philosophyCardIcon} />
                            <h3 className={s.philosophyCardTitle}>Notre Philosophie</h3>
                            <ul className={s.philosophyList}>
                                <li><strong>Discrétion :</strong> Sessions privatisées, sans public ni médias.</li>
                                <li><strong>Professionnalisme :</strong> Équipements et installations de niveau franchise.</li>
                                <li><strong>Flexibilité :</strong> Horaires, staff et logistique adaptés à votre rythme.</li>
                                <li><strong>Exigence :</strong> Des standards de qualité élevés sur chaque workout.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Proximity & Access ── */}
            <section className={s.highlightsSection}>
                <div className="container-custom">
                    <div className={s.highlightsGrid}>
                        {highlights.map((hl, index) => {
                            const IconComponent = hl.icon;
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

            {/* ── Infrastructures & Photos (Demonstration) ── */}
            <section className={s.infraSection}>
                <div className="container-custom">
                    <div className={s.sectionHeader}>
                        <span className="badge-blue">Des Outils de Niveau Elite</span>
                        <h2 className={s.sectionTitle}>Infrastructures & Équipements</h2>
                        <p className={s.sectionSubtitle}>
                            Nos installations permettent d’organiser des séances individuelles ou collectives de très haut niveau.
                        </p>
                    </div>

                    <div className={s.infraGrid}>
                        {infrastructures.map((infra, idx) => (
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

            {/* ── Programs & Workouts ── */}
            <section className={s.programsSection}>
                <div className="container-custom">
                    <div className={s.sectionHeader}>
                        <span className="badge-red">Programmes d'entraînement</span>
                        <h2 className={s.sectionTitle}>Format d'Accompagnement</h2>
                    </div>

                    <div className={s.programsGrid}>
                        {programs.map((prog, idx) => (
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
                        <span className="badge-blue">Services à 360 Degrés</span>
                        <h2 className={s.sectionTitle}>Services & Prestations Complémentaires</h2>
                        <p className={s.sectionSubtitle}>
                            Tout est pensé pour que le joueur ou la joueuse n'ait à penser qu’à une seule chose : travailler.
                        </p>
                    </div>

                    <div className={s.extraGrid}>
                        {optionsPlus.map((opt, idx) => (
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
                            <h3>Pour les Clubs Professionnels</h3>
                            <p>
                                Vous recherchez une solution fiable lorsque l’un de vos joueurs séjourne à Paris ?
                                Nous devenons votre relais local. Votre joueur bénéficie d’un interlocuteur unique,
                                d’installations de qualité et d’un environnement sécurisé. Tout est organisé dans le
                                respect strict de vos protocoles de staff.
                            </p>
                        </div>
                        <div className={s.partnerBox}>
                            <Users2 className={s.partnerIcon} />
                            <h3>Pour les Agents de Joueurs</h3>
                            <p>
                                Nous accueillons vos athlètes tout au long de l’année (Off Season ou en cours de saison).
                                Notre engagement est de leur offrir un cadre de travail professionnel, discret, sécurisé et efficace
                                pendant leurs passages dans la capitale.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Form Section ── */}
            <section id="privatisation" className={s.formSection}>
                <div className="container-custom">
                    <div className={s.formWrapper}>
                        <TrainingCenterForm />
                    </div>
                </div>
            </section>

        </main>
    );
}
