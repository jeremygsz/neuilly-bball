import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
    Activity, 
    Zap, 
    BookOpen, 
    Shield, 
    Sparkles, 
    ArrowRight,
    TrendingUp,
    CheckCircle
} from "lucide-react";
import s from "./page.module.scss";

export const metadata: Metadata = {
    title: "Nos Équipements | Neuilly Basketball",
    description: "Découvrez les équipements de Neuilly Basketball Association. Des outils modernes (Machine de tir Dr Dish, ballons techniques) au service de la progression de nos joueurs.",
};

const equipmentsList = [
    {
        id: "drdish",
        title: "Machine de tir Dr Dish",
        desc: "Un outil de référence utilisé par de nombreux clubs professionnels pour perfectionner le tir, améliorer la répétition des gestes et développer la précision.",
        icon: Sparkles
    },
    {
        id: "ballons",
        title: "Ballons techniques",
        desc: "Des ballons spécifiques, adaptés aux différents âges et objectifs, dont des modèles d’entraînement favorisant le développement du dribble et de la maîtrise du ballon.",
        icon: Activity
    },
    {
        id: "coordination",
        title: "Matériel de coordination et d’appuis",
        desc: "Échelles de rythme, haies, cônes, cerceaux et accessoires destinés à améliorer la vitesse, l’équilibre, les déplacements et les qualités athlétiques.",
        icon: Zap
    },
    {
        id: "ateliers",
        title: "Ateliers pédagogiques",
        desc: "Des équipements variés permettant de créer des exercices ludiques, progressifs et adaptés à chaque catégorie d’âge.",
        icon: BookOpen
    },
    {
        id: "modernes",
        title: "Outils modernes d’entraînement",
        desc: "Le club poursuit son développement en intégrant régulièrement de nouveaux équipements afin d’offrir à ses licenciés des conditions d’entraînement toujours plus performantes.",
        icon: Shield
    }
];

export default function EquipementsPage() {
    return (
        <main className={s.page}>
            {/* ── Hero ── */}
            <section className={s.hero}>
                <div className={s.heroImageWrapper}>
                    <Image
                        src="/images/court/COURT.JPG"
                        alt="Terrain de basketball — Neuilly Basketball"
                        fill
                        priority
                        className={s.heroImage}
                        sizes="100vw"
                    />
                    <div className={s.heroOverlay} />
                </div>
                <div className={s.heroContent}>
                    <div className={s.heroInner}>
                        <span className={s.heroLabel}>L'Excellence Technique</span>
                        <h1 className={s.heroTitle}>
                            Nos <span className={s.accent}>Équipements</span>
                        </h1>
                        <p className={s.heroSub}>
                            Des outils de dernière génération pour enrichir chaque séance,
                            faciliter l'apprentissage et révéler le potentiel de nos joueurs.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── 1. Investir dans les joueurs ── */}
            <section className={s.introSection}>
                <div className="container-custom">
                    <div className={s.introGrid}>
                        <div className={s.introContent}>
                            <span className="badge-red">Philosophie d'Investissement</span>
                            <h2 className={s.sectionTitle}>Investir dans les joueurs, c’est investir dans leur progression</h2>
                            <p className={s.leadText}>
                                À Neuilly Basketball Association, nous sommes convaincus que la qualité de l’entraînement repose sur trois piliers essentiels : un encadrement compétent, une pédagogie moderne et des équipements performants.
                            </p>
                            <p className={s.bodyText}>
                                C’est pourquoi nous avons fait le choix d’investir dans un matériel de dernière génération, inspiré des méthodes utilisées par les clubs professionnels et les centres de formation.
                            </p>
                            <p className={s.bodyText}>
                                Notre objectif n’est pas de posséder du matériel pour le plaisir, mais de mettre à la disposition de nos licenciés des outils qui enrichissent chaque séance, facilitent l’apprentissage et permettent à chacun de progresser dans les meilleures conditions.
                            </p>
                            <p className={s.bodyText}>
                                Parce que chaque détail compte lorsqu’il s’agit de développer le potentiel d’un joueur.
                            </p>
                        </div>
                        <div className={s.introVisual}>
                            <div className={s.pillarsCard}>
                                <h3>Les 3 Piliers de l'Entraînement</h3>
                                <div className={s.dividerAccent}></div>
                                <ul className={s.pillarsList}>
                                    <li><CheckCircle size={18} className={s.pillarListIcon} /> Encadrement Compétent</li>
                                    <li><CheckCircle size={18} className={s.pillarListIcon} /> Pédagogie Moderne</li>
                                    <li><CheckCircle size={18} className={s.pillarListIcon} /> Équipements Performants</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 2 & 3. Matériel & Haut niveau ── */}
            <section className={s.detailsSection}>
                <div className="container-custom">
                    <div className={s.twoColsGrid}>
                        <div className={s.colCard}>
                            <div className={s.cardIconWrapper}>
                                <BookOpen className={s.icon} />
                            </div>
                            <h3>Un matériel au service de la pédagogie</h3>
                            <p>
                                Chaque équipement utilisé au sein du club répond à un objectif précis :
                            </p>
                            <ul className={s.objectivesList}>
                                <li>Développer la coordination</li>
                                <li>Améliorer la qualité du dribble</li>
                                <li>Perfectionner le tir</li>
                                <li>Travailler la vitesse d’exécution</li>
                                <li>Développer les appuis</li>
                                <li>Renforcer la lecture du jeu</li>
                            </ul>
                            <p>
                                Nos entraîneurs construisent leurs séances en s’appuyant sur un matériel varié, permettant de rendre chaque entraînement dynamique, ludique et adapté au niveau des joueurs. Cette diversité favorise la progression tout en maintenant le plaisir de pratiquer.
                            </p>
                        </div>

                        <div className={s.colCard}>
                            <div className={s.cardIconWrapper}>
                                <TrendingUp className={s.icon} />
                            </div>
                            <h3>Des outils inspirés du haut niveau</h3>
                            <p>
                                Le basketball moderne évolue constamment. Les méthodes d’entraînement utilisées dans les clubs professionnels permettent aujourd’hui d’améliorer considérablement la qualité du travail individuel et collectif.
                            </p>
                            <p>
                                Dans cette démarche, Neuilly Basketball Association s’équipe progressivement de matériels performants et innovants afin d’offrir à ses licenciés une expérience d’entraînement rarement proposée dans le basketball amateur.
                            </p>
                            <p>
                                Notre ambition est simple : rapprocher nos conditions d’entraînement des standards les plus exigeants.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 4 & 5. Technologie & Qualité détails ── */}
            <section className={s.techSection}>
                <div className="container-custom">
                    <div className={s.techGrid}>
                        <div className={s.techContent}>
                            <span className="badge-blue">Innovation</span>
                            <h2 className={s.sectionTitle}>Une technologie au service de la performance</h2>
                            <p className={s.bodyText}>
                                L’innovation occupe une place importante dans notre projet sportif. Nous intégrons progressivement des outils permettant d’optimiser le travail technique, de mesurer la progression des joueurs et de rendre les séances encore plus efficaces.
                            </p>
                            <p className={s.bodyText}>
                                Ces équipements ne remplacent jamais l’entraîneur. Ils viennent compléter son expertise et offrent aux joueurs des conditions d’apprentissage modernes, motivantes et adaptées aux exigences du basketball actuel.
                            </p>

                            <h3 className={s.subTitle}>La qualité jusque dans les moindres détails</h3>
                            <p className={s.bodyText}>
                                Au-delà des équipements les plus visibles, nous accordons une attention particulière à l’ensemble du matériel utilisé lors des entraînements :
                            </p>
                            <ul className={s.detailsBulletList}>
                                <li>Ballons adaptés à chaque catégorie d'âge</li>
                                <li>Matériel pédagogique sur-mesure</li>
                                <li>Accessoires de coordination et d'appuis</li>
                                <li>Équipements spécifiques au travail individuel</li>
                                <li>Outils destinés au développement de la technique et de la précision</li>
                            </ul>
                            <p className={s.bodyText}>
                                Chaque élément est sélectionné avec soin afin de garantir un apprentissage de qualité et un confort optimal pour les joueurs. Notre volonté est d’offrir un environnement où chacun peut progresser dans les meilleures conditions possibles.
                            </p>
                        </div>
                        <div className={s.techVisual}>
                            <div className={s.techCard}>
                                <Sparkles className={s.techCardIcon} />
                                <h3>Un investissement permanent</h3>
                                <p className={s.techCardText}>
                                    Le développement d’un club passe également par sa capacité à évoluer. C’est pourquoi nous poursuivons chaque saison une politique d’investissement visant à enrichir nos équipements et à intégrer les nouvelles méthodes d’entraînement.
                                </p>
                                <p className={s.techCardText}>
                                    Cette démarche traduit notre volonté de construire un club tourné vers l’avenir, capable de proposer à ses licenciés des conditions de pratique en constante évolution.
                                </p>
                                <p className={s.techCardTextHighlight}>
                                    Nous considérons chaque investissement comme un engagement envers nos joueurs et leurs familles.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 6. L'ambition d'offrir le meilleur ── */}
            <section className={s.ambitionSection}>
                <div className="container-custom">
                    <div className={s.ambitionCard}>
                        <h2>L'ambition d'offrir le meilleur</h2>
                        <div className={s.dividerAccentCenter}></div>
                        <p>
                            À Neuilly Basketball Association, nous ne cherchons pas simplement à suivre les standards existants. Nous souhaitons les dépasser.
                        </p>
                        <p className={s.ambitionHighlight}>
                            Chaque nouvel équipement est choisi avec une seule question en tête : Permettra-t-il à nos joueurs d’apprendre, de progresser et de prendre davantage de plaisir ?
                        </p>
                        <p>
                            Si la réponse est oui, alors il trouve naturellement sa place dans notre projet. Parce que nous croyons que les grandes ambitions se construisent grâce à une multitude de petits détails. Et que les meilleurs outils, associés à un encadrement de qualité, permettent à chaque joueur de révéler pleinement son potentiel.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── 7. Nos équipements en un coup d'œil ── */}
            <section className={s.overviewSection}>
                <div className="container-custom">
                    <div className={s.headerCenter}>
                        <span className="badge-red">Le Matériel du Club</span>
                        <h2>Nos équipements en un coup d’œil</h2>
                        <p className={s.headerSub}>
                            Un aperçu des principaux outils pédagogiques et technologiques mis à disposition lors des séances.
                        </p>
                    </div>

                    <div className={s.equipmentsGrid}>
                        {equipmentsList.map((item) => {
                            const IconComp = item.icon;
                            return (
                                <div key={item.id} className={s.equipmentCard}>
                                    <div className={s.equipmentIconWrapper}>
                                        <IconComp className={s.equipmentIcon} />
                                    </div>
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── 8. Pourquoi investissons-nous autant ? ── */}
            <section className={s.whySection}>
                <div className="container-custom">
                    <div className={s.whyCard}>
                        <span className={s.whyLabel}>Encadré Explicatif</span>
                        <h2>Pourquoi investissons-nous autant dans notre matériel ?</h2>
                        <div className={s.whyDivider}></div>
                        <p className={s.whyText}>
                            Parce qu’un ballon ne fait pas progresser un joueur à lui seul. Mais lorsqu’il est associé à un entraîneur passionné, à une méthode moderne et à des outils adaptés, il devient un formidable accélérateur d’apprentissage. 
                        </p>
                        <p className={s.whyTextHighlight}>
                            Chez Neuilly Basketball Association, nous avons fait le choix d’investir dans la qualité afin d’offrir à chaque licencié une expérience d’entraînement exigeante, motivante et tournée vers l’avenir.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Final CTA ── */}
            <section className={s.ctaSection}>
                <div className="container-custom">
                    <div className={s.ctaContentCard}>
                        <h2>Prêt(e) à vous entraîner avec le meilleur matériel ?</h2>
                        <p>
                            Rejoignez Neuilly Basketball Association et profitez de séances dynamiques 
                            encadrées par des professionnels équipés d'outils modernes.
                        </p>
                        <div className={s.ctaButtons}>
                            <Link href="/inscription" className="btn-primary">
                                S'inscrire pour la saison 2026-2027 <ArrowRight size={16} />
                            </Link>
                            <Link href="/contact" className="btn-outline-blue">
                                Nous poser des questions
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
