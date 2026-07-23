import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
    Award, 
    ShieldCheck, 
    Sparkles, 
    Users, 
    ArrowRight, 
    Compass, 
    Activity 
} from "lucide-react";
import PresidentLetter from "@/components/public/histoire/PresidentLetter";
import s from "./page.module.scss";

export const metadata: Metadata = {
    title: "Notre Histoire | Neuilly Basketball",
    description: "Découvrez la genèse, l'ambition et les valeurs fondatrices de Neuilly Basketball Association. Plus qu'un club, une vision tournée vers l'avenir.",
};

export default function NotreHistoirePage() {
    return (
        <main className={s.page}>
            {/* ── Hero ── */}
            <section className={s.hero}>
                <div className={s.heroImageWrapper}>
                    <Image
                        src="/images/hero/COMPLEXE-6.JPG"
                        alt="Complexe de l'Île du Pont — Neuilly Basketball"
                        fill
                        priority
                        className={s.heroImage}
                        sizes="100vw"
                    />
                    <div className={s.heroOverlay} />
                </div>
                <div className={s.heroContent}>
                    <div className={s.heroInner}>
                        <span className={s.heroLabel}>Le Club</span>
                        <h1 className={s.heroTitle}>
                            Notre <span className={s.accent}>Histoire</span>
                        </h1>
                        <p className={s.heroSub}>
                            Plus qu'un club. Une vision. Découvrez la genèse et les valeurs
                            fondatrices de Neuilly Basketball Association.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Mot du Président ── */}
            <PresidentLetter />

            {/* ── Intro / Vision ── */}
            <section className={s.introSection}>
                <div className="container-custom">
                    <div className={s.introGrid}>
                        <div className={s.introText}>
                            <h2 className={s.sectionTitle}>Une conviction partagée</h2>
                            <p className={s.leadParagraph}>
                                Le basketball est bien plus qu’un sport. C’est une école de la vie, 
                                un formidable vecteur d’éducation et un lieu où se construisent 
                                la confiance, le respect et le dépassement de soi.
                            </p>
                            <p className={s.bodyText}>
                                C’est autour de cette conviction qu’est née <strong>Neuilly Basketball Association</strong>. 
                                Notre ambition est simple : proposer à chaque joueur, quel que soit son âge ou 
                                son niveau, une expérience sportive exigeante, moderne et profondément humaine.
                            </p>
                            <p className={s.bodyText}>
                                Depuis notre création, nous avons choisi de placer la qualité au cœur de chacune de nos décisions. 
                                Chaque projet, chaque investissement et chaque entraînement répond à une même ambition : 
                                offrir à nos licenciés les meilleures conditions pour progresser, s’épanouir et prendre plaisir à jouer.
                            </p>
                        </div>
                        <div className={s.introImageWrapper}>
                            <div className={s.quoteCard}>
                                <span className={s.quoteSymbol}>“</span>
                                <p className={s.quoteText}>
                                    Nous construisons aujourd’hui le club que nous souhaitons transmettre demain.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Dynamique & Avenir (2 Columns) ── */}
            <section className={s.dynamicSection}>
                <div className="container-custom">
                    <div className={s.twoColsGrid}>
                        <div className={s.colCard}>
                            <div className={s.cardIconWrapper}>
                                <Activity className={s.icon} />
                            </div>
                            <h3>Une nouvelle dynamique</h3>
                            <p>
                                Neuilly Basketball Association est née avec la volonté d’apporter un nouvel élan au basketball à Neuilly-sur-Seine.
                            </p>
                            <p>
                                Notre projet repose sur une idée forte : construire un club capable d’allier l’exigence du sport de haut niveau à la convivialité d’une grande famille sportive.
                                Nous souhaitons offrir un environnement où chaque licencié se sent accueilli, accompagné et encouragé à donner le meilleur de lui-même.
                            </p>
                            <p>
                                Au-delà des résultats sportifs, nous croyons qu’un club se construit avant tout grâce à la qualité de son encadrement, à la confiance des familles, à l’engagement de ses bénévoles et aux valeurs qu’il transmet chaque jour.
                            </p>
                        </div>

                        <div className={s.colCard}>
                            <div className={s.cardIconWrapper}>
                                <Compass className={s.icon} />
                            </div>
                            <h3>Une vision tournée vers l'avenir</h3>
                            <p>
                                Le basketball évolue constamment. Les méthodes d’entraînement progressent, les attentes des familles changent, et les jeunes joueurs souhaitent bénéficier d’un accompagnement toujours plus qualitatif.
                            </p>
                            <p>
                                C’est pourquoi notre club a choisi d’investir dans un projet ambitieux, durable et résolument tourné vers l’avenir.
                                Notre volonté est de développer progressivement une structure moderne capable d’offrir à chaque licencié des conditions d’entraînement inspirées des meilleures organisations sportives.
                            </p>
                            <p>
                                Cette ambition se traduit par des investissements réguliers dans le matériel, la formation, l’encadrement, les stages, les événements et les partenariats qui permettront au club de poursuivre sa croissance au fil des saisons.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Valeurs (Bien plus qu'un entraînement) ── */}
            <section className={s.valuesSection}>
                <div className="container-custom">
                    <div className={s.sectionHeaderCenter}>
                        <span className="badge-red">Pédagogie & Valeurs</span>
                        <h2>Bien plus qu'un entraînement</h2>
                        <p className={s.sectionHeaderSub}>
                            Le terrain devient un espace où les joueurs développent autant leurs qualités sportives que leurs qualités humaines.
                        </p>
                    </div>

                    <div className={s.valuesGrid}>
                        <div className={s.valueCard}>
                            <span className={s.valueNumber}>01</span>
                            <h4>Le respect des autres</h4>
                            <p>Apprendre à respecter ses coéquipiers, ses adversaires, les règles et les arbitres en toutes circonstances.</p>
                        </div>
                        <div className={s.valueCard}>
                            <span className={s.valueNumber}>02</span>
                            <h4>La discipline & L'effort</h4>
                            <p>Le goût du travail bien fait, de l'investissement personnel aux entraînements et la persévérance face aux défis.</p>
                        </div>
                        <div className={s.valueCard}>
                            <span className={s.valueNumber}>03</span>
                            <h4>L'entraide & Le collectif</h4>
                            <p>Apprendre à travailler ensemble, à s'encourager mutuellement et à mettre son talent au service du groupe.</p>
                        </div>
                        <div className={s.valueCard}>
                            <span className={s.valueNumber}>04</span>
                            <h4>La gestion des émotions</h4>
                            <p>Développer le contrôle de soi, canaliser son énergie et transformer la pression en motivation positive.</p>
                        </div>
                    </div>

                    <p className={s.valuesFooterText}>
                        Nous croyons que les valeurs acquises pendant les entraînements accompagnent les enfants bien au-delà du basketball, 
                        guidant également leur parcours scolaire, professionnel et personnel.
                    </p>
                </div>
            </section>

            {/* ── Excellence dans les détails ── */}
            <section className={s.detailsSection}>
                <div className="container-custom">
                    <div className={s.detailsGrid}>
                        <div className={s.detailsVisual}>
                            <div className={s.excellenceBadgeCard}>
                                <Award className={s.visualIcon} />
                                <h5>L'excellence dans les détails</h5>
                                <p>Chaque aspect compte pour offrir la meilleure expérience possible.</p>
                            </div>
                        </div>
                        <div className={s.detailsContent}>
                            <h2 className={s.sectionTitle}>L'exigence au quotidien</h2>
                            <p className={s.detailsIntroParagraph}>
                                Nous sommes convaincus que la qualité d’un club se mesure à l’attention portée aux détails. 
                                Chaque décision participe à créer une expérience positive pour nos licenciés.
                            </p>

                            <ul className={s.detailsList}>
                                <li>
                                    <ShieldCheck className={s.listIcon} />
                                    <div>
                                        <strong>Une organisation rigoureuse</strong>
                                        <p>Une structure de club carrée et professionnelle pour rassurer et guider.</p>
                                    </div>
                                </li>
                                <li>
                                    <Sparkles className={s.listIcon} />
                                    <div>
                                        <strong>Des entraînements préparés avec soin</strong>
                                        <p>Un contenu pédagogique structuré et adapté aux tranches d'âge et niveaux.</p>
                                    </div>
                                </li>
                                <li>
                                    <Users className={s.listIcon} />
                                    <div>
                                        <strong>Un accueil et une communication transparente</strong>
                                        <p>Un accueil chaleureux et des échanges constants avec les familles.</p>
                                    </div>
                                </li>
                            </ul>
                            
                            <p className={s.detailsConclusion}>
                                Notre volonté est simple : que chaque joueur arrive avec le sourire et reparte avec le sentiment d’avoir appris quelque chose de nouveau.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Un club ouvert à tous ── */}
            <section className={s.inclusiveSection}>
                <div className="container-custom">
                    <div className={s.inclusiveCard}>
                        <h2>Un club ouvert à tous</h2>
                        <div className={s.dividerAccentCenter}></div>
                        <p>
                            Neuilly Basketball Association accueille des enfants, des adolescents et des adultes animés par une même passion. 
                            Certains découvrent le basketball pour la première fois, d’autres pratiquent déjà depuis plusieurs années. 
                            Certains souhaitent simplement partager un moment convivial, d’autres nourrissent des ambitions sportives plus importantes.
                        </p>
                        <p className={s.inclusiveHighlight}>
                            Tous trouvent leur place au sein du club. Parce que notre richesse réside dans la diversité 
                            de nos licenciés et dans les liens qui se créent entre eux au fil des saisons.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Conclusion / Call to Action ── */}
            <section className={s.ctaSection}>
                <div className="container-custom">
                    <div className={s.ctaCard}>
                        <h2>L'histoire ne fait que commencer</h2>
                        <p>
                            Neuilly Basketball Association est un jeune club, mais son ambition est grande. 
                            Saison après saison, nous continuerons à développer notre projet, à enrichir nos infrastructures, 
                            à renforcer notre encadrement et à créer de nouvelles opportunités pour nos licenciés.
                        </p>
                        <p className={s.ctaHighlight}>
                            Faire de Neuilly Basketball Association une référence du basketball en Île-de-France.
                        </p>
                        <div className={s.ctaButtonsWrapper}>
                            <Link href="/inscription" className="btn-primary">
                                Rejoindre l'aventure (Adhésion 2026-2027) <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
