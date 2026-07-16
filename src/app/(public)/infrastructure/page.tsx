import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
    MapPin,
    Car,
    Accessibility,
    ArrowRight,
    Quote,
} from "lucide-react";
import { GalleryLightbox } from "@/components/public/infrastructure/GalleryLightbox";
import s from "./page.module.scss";

export const metadata: Metadata = {
    title: "Notre Infrastructure | Neuilly Basketball",
    description:
        "Découvrez le Complexe de l'Île du Pont, le lieu d'entraînement de Neuilly Basketball Association : terrains de qualité, vestiaires, accessibilité et cadre idéal au cœur de Neuilly-sur-Seine.",
};

const installations = [
    {
        id: "terrains",
        icon: "🏀",
        title: "Terrains de basketball de qualité",
        desc: "Des surfaces homologuées offrant des conditions d'entraînement et de compétition optimales pour tous nos licenciés, de la plus jeune catégorie aux équipes seniors.",
    },
    {
        id: "vestiaires",
        icon: "🚿",
        title: "Vestiaires",
        desc: "Des vestiaires adaptés et bien équipés pour que chaque joueur puisse se préparer dans les meilleures conditions avant et après l'entraînement.",
    },
    {
        id: "acces",
        icon: "🚗",
        title: "Accès facile",
        desc: "Le complexe est facilement accessible en voiture, en transports en commun et à vélo depuis l'ensemble de Neuilly-sur-Seine et des communes environnantes.",
    },
    {
        id: "accessibilite",
        icon: "♿",
        title: "Accessibilité",
        desc: "Nos installations sont pensées pour être accessibles à toutes et à tous, y compris aux personnes à mobilité réduite, en accord avec notre engagement inclusif.",
    },
    {
        id: "familles",
        icon: "👨‍👩‍👧",
        title: "Espaces d'accueil pour les familles",
        desc: "Des espaces dédiés permettent aux parents et aux proches de suivre les entraînements et les matchs dans de bonnes conditions.",
    },
    {
        id: "localisation",
        icon: "📍",
        title: "Au cœur de Neuilly-sur-Seine",
        desc: "Idéalement situé dans le Complexe de l'Île du Pont, notre lieu d'entraînement bénéficie d'un cadre privilégié, facilement identifiable et pratique pour toute la communauté.",
    },
];

const galleryImages = [
    { src: "/images/game/DAY_03.jpeg",    alt: "Match Neuilly Basketball — action sur le terrain" },
    { src: "/images/game/DAY_03-2.jpeg",  alt: "Match Neuilly Basketball — duel en attaque" },
    { src: "/images/game/DAY_03-3.jpeg",  alt: "Match Neuilly Basketball — tir en extension" },
    { src: "/images/game/DAY_03-4.jpeg",  alt: "Match Neuilly Basketball — moment de jeu collectif" },
    { src: "/images/game/DAY_03_12.webp", alt: "Match Neuilly Basketball — action défensive" },
    { src: "/images/game/DAY_03_13.webp", alt: "Match Neuilly Basketball — rebond" },
    { src: "/images/game/DAY_03_14.webp", alt: "Match Neuilly Basketball — percée en dribble" },
    { src: "/images/game/IMG_9467.jpeg",  alt: "Neuilly Basketball — jeu en équipe" },
    { src: "/images/game/IMG_9478.jpeg",  alt: "Neuilly Basketball — action de match" },
    { src: "/images/game/IMG_9513.webp",  alt: "Neuilly Basketball — attaque sous le panier" },
    { src: "/images/game/IMG_9516.webp",  alt: "Neuilly Basketball — démarquage" },
    { src: "/images/game/IMG_9521.webp",  alt: "Neuilly Basketball — contre" },
    { src: "/images/game/IMG_9531.webp",  alt: "Neuilly Basketball — passe décisive" },
    { src: "/images/game/IMG_9533.webp",  alt: "Neuilly Basketball — tir mi-distance" },
    { src: "/images/game/IMG_9558.webp",  alt: "Neuilly Basketball — contact au sol" },
    { src: "/images/game/IMG_9559.webp",  alt: "Neuilly Basketball — action rapide" },
    { src: "/images/game/IMG_9563.webp",  alt: "Neuilly Basketball — duel en un contre un" },
    { src: "/images/game/IMG_9564.webp",  alt: "Neuilly Basketball — lay-up" },
    { src: "/images/game/IMG_9566.webp",  alt: "Neuilly Basketball — jeu intérieur" },
    { src: "/images/game/IMG_9568.webp",  alt: "Neuilly Basketball — contre-attaque" },
    { src: "/images/game/IMG_9569.webp",  alt: "Neuilly Basketball — pénétration" },
    { src: "/images/game/IMG_9570.webp",  alt: "Neuilly Basketball — action collective" },
    { src: "/images/game/IMG_9573.webp",  alt: "Neuilly Basketball — jeu extérieur" },
    { src: "/images/game/IMG_9574.webp",  alt: "Neuilly Basketball — interception" },
    { src: "/images/game/IMG_9575.webp",  alt: "Neuilly Basketball — transition" },
    { src: "/images/game/IMG_9576.webp",  alt: "Neuilly Basketball — arrêt de jeu" },
    { src: "/images/game/IMG_9578.webp",  alt: "Neuilly Basketball — action à 3 points" },
    { src: "/images/game/IMG_9649.webp",  alt: "Neuilly Basketball — duel aérien" },
    { src: "/images/game/IMG_9650.jpeg",  alt: "Neuilly Basketball — ambiance de match" },
    { src: "/images/game/IMG_9651.jpeg",  alt: "Neuilly Basketball — attaque organisée" },
    { src: "/images/game/IMG_9651.webp",  alt: "Neuilly Basketball — geste technique" },
    { src: "/images/game/IMG_9692.jpeg",  alt: "Neuilly Basketball — match à domicile" },
    { src: "/images/game/IMG_9694.jpeg",  alt: "Neuilly Basketball — jeu rapide" },
    { src: "/images/game/IMG_9731.webp",  alt: "Neuilly Basketball — action de défense" },
    { src: "/images/game/IMG_9732.jpeg",  alt: "Neuilly Basketball — tir au panier" },
    { src: "/images/game/IMG_9737.jpg",   alt: "Neuilly Basketball — échauffement" },
    { src: "/images/game/IMG_9738.webp",  alt: "Neuilly Basketball — placement offensif" },
    { src: "/images/game/IMG_9740.jpeg",  alt: "Neuilly Basketball — engagement physique" },
    { src: "/images/game/IMG_9741.jpeg",  alt: "Neuilly Basketball — drive vers le panier" },
    { src: "/images/game/IMG_9753.jpeg",  alt: "Neuilly Basketball — fin de match" },
    { src: "/images/game/IMG_9650.jpg",   alt: "Neuilly Basketball — séquence de jeu" },
];

export default function InfrastructurePage() {
    return (
        <main className={s.page}>

            {/* ── Hero Pleine Largeur ── */}
            <section className={s.hero}>
                <div className={s.heroImageWrapper}>
                    <Image
                        src="/images/complexe.jpeg"
                        alt="Complexe de l'Île du Pont — terrain de basketball de Neuilly Basketball"
                        fill
                        priority
                        className={s.heroImage}
                        sizes="100vw"
                    />
                    <div className={s.heroOverlay} />
                </div>
                <div className={s.heroContent}>
                    <div className={s.heroInner}>
                        <span className={s.heroLabel}>Notre Lieu de Vie</span>
                        <h1 className={s.heroTitle}>
                            Le Complexe de<br />
                            <span className={s.accent}>l'Île du Pont</span>
                        </h1>
                        <p className={s.heroSub}>
                            Un cadre d'exception au cœur de Neuilly-sur-Seine pour
                            vivre pleinement le basketball.
                        </p>
                        <div className={s.heroLocation}>
                            <MapPin size={16} />
                            <span>Complexe de l'Île du Pont — Neuilly-sur-Seine</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Intro ── */}
            <section className={s.introSection}>
                <div className="container-custom">
                    <div className={s.introGrid}>
                        <div className={s.introContent}>
                            <span className="badge-red">Notre Maison</span>
                            <h2 className={s.sectionTitle}>Un lieu pensé pour la pratique</h2>
                            <p className={s.leadText}>
                                Le Complexe de l'Île du Pont est bien plus qu'un simple gymnase.
                                C'est le lieu où se forgent les ambitions, où se tissent les amitiés
                                et où s'écrit chaque jour l'histoire de Neuilly Basketball Association.
                            </p>
                            <p className={s.bodyText}>
                                Doté d'équipements de qualité et bénéficiant d'une localisation
                                idéale au cœur de Neuilly-sur-Seine, notre complexe offre à tous
                                nos licenciés — des benjamins aux seniors — des conditions de
                                pratique à la hauteur de leurs ambitions.
                            </p>
                            <p className={s.bodyText}>
                                Accessibilité, confort, qualité des surfaces et accueil des familles :
                                chaque détail a été pensé pour faire de chaque séance un moment
                                réussi.
                            </p>
                        </div>
                        <div className={s.introVisual}>
                            <div className={s.locationCard}>
                                <div className={s.locationCardHeader}>
                                    <MapPin className={s.locationIcon} />
                                    <h3>Comment nous trouver</h3>
                                </div>
                                <div className={s.locationDivider} />
                                <ul className={s.locationList}>
                                    <li>
                                        <Car size={16} className={s.listIcon} />
                                        Parking disponible sur place
                                    </li>
                                    <li>
                                        <MapPin size={16} className={s.listIcon} />
                                        Complexe de l'Île du Pont
                                    </li>
                                    <li>
                                        <MapPin size={16} className={s.listIcon} />
                                        Neuilly-sur-Seine
                                    </li>
                                    <li>
                                        <Accessibility size={16} className={s.listIcon} />
                                        Accès PMR disponible
                                    </li>
                                </ul>
                                <Link
                                    href="https://maps.google.com/?q=Complexe+de+l'Île+du+Pont+Neuilly-sur-Seine"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary"
                                >
                                    Voir sur Google Maps <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Nos Installations ── */}
            <section className={s.installationsSection}>
                <div className="container-custom">
                    <div className={s.headerCenter}>
                        <span className="badge-blue">Le Complexe</span>
                        <h2>Nos installations</h2>
                        <p className={s.headerSub}>
                            Un ensemble d'équipements et de services pensés pour offrir
                            les meilleures conditions de pratique à nos licenciés.
                        </p>
                    </div>
                    <div className={s.installationsGrid}>
                        {installations.map((item) => (
                            <div key={item.id} className={s.installationCard}>
                                <div className={s.installationEmoji}>{item.icon}</div>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Galerie Photos ── */}
            <section className={s.gallerySection}>
                <div className="container-custom">
                    <div className={s.headerCenter}>
                        <span className="badge-red">En Images</span>
                        <h2>La vie au complexe</h2>
                        <p className={s.headerSub}>
                            Matches, entraînements, moments de jeu et ambiance du club :
                            le Complexe de l'Île du Pont vu de l'intérieur.
                        </p>
                    </div>
                    <GalleryLightbox images={galleryImages} />
                </div>
            </section>

            {/* ── Citation ── */}
            <section className={s.quoteSection}>
                <div className="container-custom">
                    <div className={s.quoteCard}>
                        <Quote className={s.quoteIconDecor} />
                        <blockquote className={s.quoteText}>
                            Un grand club se construit autant grâce aux femmes et aux hommes
                            qui l'animent qu'aux lieux qui accueillent leurs ambitions.
                        </blockquote>
                        <div className={s.quoteDivider} />
                        <p className={s.quoteSource}>Neuilly Basketball Association</p>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className={s.ctaSection}>
                <div className="container-custom">
                    <div className={s.ctaCard}>
                        <h2>Venez nous rendre visite</h2>
                        <p>
                            La meilleure façon de découvrir le complexe, c'est de venir
                            directement sur place. N'hésitez pas à nous contacter pour
                            planifier une visite ou pour toute question.
                        </p>
                        <div className={s.ctaButtons}>
                            <Link href="/inscription" className="btn-primary">
                                S'inscrire pour la saison 2026-2027 <ArrowRight size={16} />
                            </Link>
                            <Link href="/contact" className="btn-outline-blue">
                                Nous contacter
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
