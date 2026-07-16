"use client";

import { useState } from "react";
import { Users, BookOpen, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { TeamsFilter } from "@/components/public/team/TeamsFilter";
import { TeamCard }    from "@/components/public/team/TeamCard";
import { TeamWithPlayers } from "@/types";
import s from "./page.module.scss";

interface Props {
    initialTeams: TeamWithPlayers[];
}

const values = [
    "Le respect des partenaires et des adversaires",
    "Le goût de l'effort",
    "L'engagement",
    "L'humilité",
    "La persévérance",
    "Le plaisir de jouer",
];

export function EquipesClientWrapper({ initialTeams }: Props) {
    const [tab, setTab] = useState<"presentation" | "categories">("presentation");
    const [activeTeamId, setActiveTeamId] = useState<number | "all">("all");

    const visibleTeams =
        activeTeamId === "all"
            ? initialTeams
            : initialTeams.filter((t) => t.id === activeTeamId);

    return (
        <>
            {/* ── Tab Pills ── */}
            <div className={s.tabsBar}>
                <div className={s.tabsInner}>
                    <button
                        id="tab-presentation"
                        className={`${s.tabPill} ${tab === "presentation" ? s.tabPillActive : ""}`}
                        onClick={() => setTab("presentation")}
                        aria-selected={tab === "presentation"}
                        role="tab"
                    >
                        <BookOpen size={15} />
                        Présentation
                    </button>
                    <button
                        id="tab-categories"
                        className={`${s.tabPill} ${tab === "categories" ? s.tabPillActive : ""}`}
                        onClick={() => setTab("categories")}
                        aria-selected={tab === "categories"}
                        role="tab"
                    >
                        <Users size={15} />
                        Nos catégories
                        {initialTeams.length > 0 && (
                            <span className={s.tabCount}>{initialTeams.length}</span>
                        )}
                    </button>
                </div>
            </div>

            {/* ── Présentation ── */}
            {tab === "presentation" && (
                <div className={s.presentationPanel}>

                    {/* 1. Intro */}
                    <section className={s.introSection}>
                        <div className="container-custom">
                            <div className={s.introGrid}>
                                <div className={s.introContent}>
                                    <span className="badge-red">Notre Philosophie</span>
                                    <h2 className={s.sectionTitle}>
                                        Une équipe pour chacun.<br />Un projet commun.
                                    </h2>
                                    <p className={s.leadText}>
                                        À Neuilly Basketball Association, nous sommes convaincus
                                        que chaque joueur mérite un accompagnement adapté à son
                                        âge, à son niveau et à ses objectifs.
                                    </p>
                                    <p className={s.bodyText}>
                                        Le basketball est un sport universel, capable de rassembler
                                        des profils très différents autour d'une même passion.
                                        C'est pourquoi notre club accueille des enfants, des
                                        adolescents et des adultes dans un environnement où chacun
                                        peut évoluer, progresser et s'épanouir.
                                    </p>
                                    <p className={s.bodyText}>
                                        Que vous découvriez le basketball pour la première fois ou
                                        que vous souhaitiez poursuivre un parcours plus ambitieux,
                                        vous trouverez au sein de notre club une équipe qui vous
                                        correspond.
                                    </p>
                                    <p className={s.bodyText}>
                                        Au-delà du niveau de jeu, nous accordons une importance
                                        particulière à l'intégration de chacun. Nous souhaitons
                                        que chaque licencié se sente pleinement membre de la
                                        famille Neuilly Basketball Association dès son arrivée.
                                    </p>
                                </div>
                                <div className={s.introVisual}>
                                    <div className={s.valuesCard}>
                                        <h3>Nos Valeurs</h3>
                                        <div className={s.valuesDivider} />
                                        <ul className={s.valuesList}>
                                            {values.map((v) => (
                                                <li key={v}>
                                                    <CheckCircle size={16} className={s.valuesIcon} />
                                                    {v}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 2. Grandir & Accessible */}
                    <section className={s.twoColSection}>
                        <div className="container-custom">
                            <div className={s.twoColGrid}>
                                <div className={s.colCard}>
                                    <span className={s.cardNumber}>01</span>
                                    <h3>Grandir au rythme de chaque joueur</h3>
                                    <p>
                                        Chaque étape de la progression est importante. Les plus
                                        jeunes découvrent le basketball à travers des exercices
                                        ludiques qui développent la coordination, la motricité,
                                        l'équilibre et les premiers fondamentaux techniques.
                                    </p>
                                    <p>
                                        Au fil des années, les séances deviennent plus complètes
                                        et plus exigeantes. Les joueurs développent leur lecture
                                        du jeu, leur intelligence tactique et leur maîtrise
                                        technique, tout en conservant le plaisir de pratiquer.
                                    </p>
                                    <p className={s.cardQuote}>
                                        Notre objectif n'est jamais de brûler les étapes, mais
                                        d'accompagner chaque joueur dans une progression durable
                                        et adaptée à son développement.
                                    </p>
                                </div>
                                <div className={s.colCard}>
                                    <span className={s.cardNumber}>02</span>
                                    <h3>Une pratique accessible à tous</h3>
                                    <p>
                                        Certains souhaitent pratiquer pour le plaisir, partager
                                        un moment entre amis et entretenir leur condition physique.
                                    </p>
                                    <p>
                                        D'autres recherchent un cadre plus exigeant, avec l'envie
                                        de progresser techniquement, de relever de nouveaux défis
                                        ou de participer à des compétitions.
                                    </p>
                                    <p>
                                        Notre organisation permet de répondre à ces différentes
                                        attentes grâce à des groupes cohérents et un encadrement
                                        attentif aux besoins de chacun.
                                    </p>
                                    <p className={s.cardQuote}>
                                        Quelle que soit votre motivation, vous trouverez votre
                                        place au sein du club.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 3. Esprit d'équipe */}
                    <section className={s.spiritSection}>
                        <div className="container-custom">
                            <div className={s.spiritCard}>
                                <div className={s.spiritContent}>
                                    <span className="badge-blue">Notre État d'Esprit</span>
                                    <h2 className={s.sectionTitle}>L'esprit d'équipe avant tout</h2>
                                    <p className={s.bodyText}>
                                        Le basketball est un sport collectif où chaque joueur
                                        contribue à la réussite du groupe.
                                    </p>
                                    <ul className={s.spiritList}>
                                        <li>Une passe décisive peut être aussi importante qu'un panier.</li>
                                        <li>Un effort défensif peut changer le cours d'un match.</li>
                                        <li>Un encouragement peut redonner confiance à un coéquipier.</li>
                                    </ul>
                                    <p className={s.bodyText}>
                                        À Neuilly Basketball Association, nous accordons une place
                                        essentielle au respect, à la solidarité, à l'entraide et
                                        à la communication. Nous souhaitons former des équipes qui
                                        prennent plaisir à jouer ensemble, qui se soutiennent dans
                                        les moments difficiles et qui célèbrent ensemble leurs réussites.
                                    </p>
                                    <p className={s.leadText}>
                                        Parce qu'une grande équipe se construit avant tout grâce à
                                        la qualité des relations humaines.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 4. Objectifs & Identité */}
                    <section className={s.twoColSection}>
                        <div className="container-custom">
                            <div className={s.twoColGrid}>
                                <div className={s.colCard}>
                                    <span className={s.cardNumber}>03</span>
                                    <h3>Des objectifs adaptés à chaque parcours</h3>
                                    <p>Chaque licencié arrive avec ses propres ambitions.</p>
                                    <ul className={s.dotList}>
                                        <li>Découvrir un nouveau sport</li>
                                        <li>Perfectionner sa technique</li>
                                        <li>Préparer une saison de compétition</li>
                                        <li>Retrouver le plaisir de jouer</li>
                                    </ul>
                                    <p>
                                        Notre rôle est d'accompagner chacun dans son projet
                                        personnel, avec des entraînements structurés, des conseils
                                        individualisés et un suivi attentif tout au long de la
                                        saison.
                                    </p>
                                    <p className={s.cardQuote}>
                                        La réussite d'un club se mesure autant à l'épanouissement
                                        de ses licenciés qu'à ses résultats sportifs.
                                    </p>
                                </div>
                                <div className={s.colCard}>
                                    <span className={s.cardNumber}>04</span>
                                    <h3>Construire l'avenir ensemble</h3>
                                    <p>
                                        Nos équipes ne représentent pas seulement le présent du
                                        club. Elles incarnent également son avenir.
                                    </p>
                                    <p>
                                        Chaque entraînement, chaque match et chaque stage
                                        contribuent à construire une culture commune, fondée sur
                                        le travail, la passion et l'envie de progresser ensemble.
                                    </p>
                                    <p className={s.cardQuote}>
                                        Rejoindre une équipe de Neuilly Basketball Association,
                                        c'est rejoindre bien plus qu'un groupe de joueurs : c'est
                                        intégrer une communauté où chacun a sa place.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA vers catégories */}
                    <section className={s.ctaBridgeSection}>
                        <div className="container-custom">
                            <div className={s.ctaBridgeCard}>
                                <p className={s.ctaBridgeText}>
                                    Prêt à trouver l'équipe qui vous correspond ?
                                </p>
                                <button
                                    className={s.ctaBridgeBtn}
                                    onClick={() => setTab("categories")}
                                >
                                    Voir nos catégories <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    </section>

                </div>
            )}

            {/* ── Nos Catégories (équipes) ── */}
            {tab === "categories" && (
                <section className={s.content}>
                    <div className={s.container}>
                        <TeamsFilter
                            teams={initialTeams}
                            activeId={activeTeamId}
                            onChange={setActiveTeamId}
                        />
                        {visibleTeams.length > 0 ? (
                            <div className={s.grid}>
                                {visibleTeams.map((team) => (
                                    <TeamCard
                                        key={team.id}
                                        team={team}
                                        onClick={() => {}}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className={s.emptyState}>
                                <p>Aucune équipe trouvée.</p>
                            </div>
                        )}
                    </div>
                </section>
            )}
        </>
    );
}
