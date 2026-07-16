import { Metadata } from "next";
import Link from "next/link";
import {
    Calendar,
    Trophy,
    Users,
    Megaphone,
    Heart,
    BookOpen,
    ArrowRight,
    Star,
} from "lucide-react";
import s from "./page.module.scss";

export const metadata: Metadata = {
    title: "Actualités | Neuilly Basketball",
    description:
        "Suivez toute l'actualité de Neuilly Basketball Association : événements, résultats, stages, tournois et moments de vie du club.",
};

const eventTypes = [
    {
        id: "stages",
        title: "Stages & Vacances",
        desc: "Stages pendant les vacances scolaires pour progresser intensément dans la bonne humeur.",
        icon: BookOpen,
    },
    {
        id: "portes-ouvertes",
        title: "Journées Portes Ouvertes",
        desc: "Des rendez-vous pour découvrir le club, rencontrer les entraîneurs et essayer le basketball.",
        icon: Users,
    },
    {
        id: "tournois",
        title: "Tournois Amicaux",
        desc: "Des rencontres compétitives dans un esprit fair-play et convivial entre clubs.",
        icon: Trophy,
    },
    {
        id: "haut-niveau",
        title: "Rencontres Haut Niveau",
        desc: "Interventions de joueurs et entraîneurs professionnels pour inspirer nos licenciés.",
        icon: Star,
    },
    {
        id: "animations",
        title: "Animations Jeunes",
        desc: "Des animations ludiques et sportives spécialement conçues pour les plus jeunes.",
        icon: Heart,
    },
    {
        id: "convivialite",
        title: "Moments de Convivialité",
        desc: "Des événements qui rassemblent joueurs, familles et bénévoles autour du club.",
        icon: Calendar,
    },
];

const communicationItems = [
    "Résultats",
    "Calendriers",
    "Photos",
    "Vidéos",
    "Inscriptions",
    "Événements",
    "Partenariats",
    "Stages",
];

const memoriesItems = [
    "Le premier entraînement",
    "Les premiers paniers",
    "Les victoires",
    "Les défis",
    "Les stages",
    "Les rencontres",
    "Les sourires partagés après une belle séance",
];

export default function ActualitesPage() {
    return (
        <main className={s.page}>

            {/* ── Hero ── */}
            <section className={s.hero}>
                <div className={s.heroInner}>
                    <span className={s.heroLabel}>Le club en mouvement</span>
                    <h1 className={s.heroTitle}>
                        Nos <span className={s.accent}>Actualités</span>
                    </h1>
                    <p className={s.heroSub}>
                        À Neuilly Basketball Association, chaque semaine est une nouvelle occasion
                        de vivre le basketball autrement. Stages, compétitions, tournois,
                        événements associatifs… la vie du club est riche et ne cesse d'évoluer.
                    </p>
                </div>
            </section>

            {/* ── 1. Vivre le club au quotidien ── */}
            <section className={s.introSection}>
                <div className="container-custom">
                    <div className={s.introGrid}>
                        <div className={s.introContent}>
                            <span className="badge-red">La Vie du Club</span>
                            <h2 className={s.sectionTitle}>Vivre le club au quotidien</h2>
                            <p className={s.leadText}>
                                Le basketball ne se limite pas aux matchs.
                            </p>
                            <p className={s.bodyText}>
                                Chaque entraînement est une occasion d'apprendre, chaque stage
                                une opportunité de progresser, chaque événement un moment de partage.
                            </p>
                            <p className={s.bodyText}>
                                Nous souhaitons faire vivre le club bien au-delà des terrains
                                en créant des expériences qui renforcent les liens entre les
                                joueurs, les familles et l'ensemble des personnes qui participent
                                à cette aventure.
                            </p>
                            <p className={s.bodyText}>
                                Cette dynamique contribue à créer une véritable identité de club,
                                où chacun se sent pleinement impliqué.
                            </p>
                        </div>
                        <div className={s.introVisual}>
                            <div className={s.quoteCard}>
                                <Megaphone className={s.quoteIcon} />
                                <blockquote>
                                    Au-delà des entraînements, notre club est rythmé par de
                                    nombreux événements qui rassemblent les joueurs, les familles,
                                    les entraîneurs, les bénévoles et nos partenaires.
                                </blockquote>
                                <div className={s.quoteDivider}></div>
                                <p className={s.quoteAuthor}>Neuilly Basketball Association</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 2. Des événements pour tous ── */}
            <section className={s.eventsSection}>
                <div className="container-custom">
                    <div className={s.headerCenter}>
                        <span className="badge-blue">Tout au long de la saison</span>
                        <h2>Des événements pour tous</h2>
                        <p className={s.headerSub}>
                            Tout au long de la saison, Neuilly Basketball Association organise
                            des rendez-vous destinés à tous les publics. Ces événements permettent
                            de découvrir le basketball sous un autre angle et de renforcer
                            l'esprit de communauté qui caractérise notre club.
                        </p>
                    </div>
                    <div className={s.eventsGrid}>
                        {eventTypes.map((event) => {
                            const IconComp = event.icon;
                            return (
                                <div key={event.id} className={s.eventCard}>
                                    <div className={s.eventIconWrapper}>
                                        <IconComp className={s.eventIcon} />
                                    </div>
                                    <h4>{event.title}</h4>
                                    <p>{event.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── 3. Mettre en valeur chaque réussite & Communication ── */}
            <section className={s.valuesSection}>
                <div className="container-custom">
                    <div className={s.twoColsGrid}>
                        <div className={s.colCard}>
                            <div className={s.cardIconWrapper}>
                                <Trophy className={s.icon} />
                            </div>
                            <h3>Mettre en valeur chaque réussite</h3>
                            <p>
                                Chaque progrès mérite d'être partagé. Nous sommes fiers de mettre
                                en avant les performances de nos équipes, les réussites individuelles,
                                les projets menés par le club ainsi que les initiatives de nos
                                entraîneurs et de nos bénévoles.
                            </p>
                            <p className={s.cardHighlight}>
                                Parce qu'une victoire ne se mesure pas uniquement au tableau d'affichage.
                                Elle se retrouve aussi dans les progrès réalisés à l'entraînement,
                                dans les efforts fournis chaque semaine et dans les valeurs transmises
                                au quotidien.
                            </p>
                        </div>

                        <div className={s.colCard}>
                            <div className={s.cardIconWrapper}>
                                <Megaphone className={s.icon} />
                            </div>
                            <h3>Une communication proche de ses licenciés</h3>
                            <p>
                                Informer, partager et échanger font partie intégrante de notre projet.
                                À travers notre site internet et nos réseaux sociaux, nous publions
                                régulièrement des informations concernant la vie du club afin que
                                chacun puisse suivre son actualité.
                            </p>
                            <ul className={s.commList}>
                                {communicationItems.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 4. Construire ensemble les souvenirs de demain ── */}
            <section className={s.memoriesSection}>
                <div className="container-custom">
                    <div className={s.memoriesGrid}>
                        <div className={s.memoriesContent}>
                            <span className="badge-red">Des émotions à partager</span>
                            <h2 className={s.sectionTitle}>
                                Construire ensemble les souvenirs de demain
                            </h2>
                            <p className={s.bodyText}>
                                Chaque saison apporte son lot d'émotions. Ces moments constituent
                                l'histoire du club et forgent les souvenirs qui resteront longtemps
                                dans la mémoire de nos licenciés.
                            </p>
                            <p className={s.bodyText}>
                                Nous sommes heureux de pouvoir les partager avec vous au fil de
                                nos actualités.
                            </p>
                        </div>
                        <div className={s.memoriesVisual}>
                            <div className={s.memoriesCard}>
                                <h3>Les moments qui comptent</h3>
                                <div className={s.memoriesDivider}></div>
                                <ul className={s.memoriesList}>
                                    {memoriesItems.map((item) => (
                                        <li key={item}>
                                            <span className={s.memoriesDot}></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 5. Une histoire qui continue de s'écrire ── */}
            <section className={s.storySection}>
                <div className="container-custom">
                    <div className={s.storyCard}>
                        <h2>Une histoire qui continue de s'écrire</h2>
                        <div className={s.storyDivider}></div>
                        <p>
                            Neuilly Basketball Association est un club en pleine évolution.
                            Chaque saison marque une nouvelle étape dans notre développement.
                        </p>
                        <p className={s.storyHighlight}>
                            Nouveaux projets, nouveaux partenariats, nouveaux équipements,
                            nouvelles équipes et nouvelles ambitions viennent enrichir notre histoire.
                        </p>
                        <p>
                            Notre actualité est le reflet de cette dynamique. Elle témoigne de
                            l'énergie, de l'engagement et de la passion qui animent notre club
                            au quotidien.
                        </p>
                        <p className={s.storyInvitation}>
                            Nous vous invitons à la suivre régulièrement… et, pourquoi pas,
                            à venir en devenir l'un des acteurs.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Final CTA ── */}
            <section className={s.ctaSection}>
                <div className="container-custom">
                    <div className={s.ctaContentCard}>
                        <h2>Prêt(e) à rejoindre l'aventure ?</h2>
                        <p>
                            Rejoignez Neuilly Basketball Association et devenez acteur
                            de cette belle histoire commune.
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
