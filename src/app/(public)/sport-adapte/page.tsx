import { Metadata } from "next";
import Link from "next/link";
import { 
    Heart, 
    Smile, 
    Sparkles, 
    Users, 
    Shield, 
    ArrowRight,
    Compass,
    Activity
} from "lucide-react";
import s from "./page.module.scss";

export const metadata: Metadata = {
    title: "Sport Adapté | Neuilly Basketball",
    description: "Découvrez notre section Sport Adapté. Le basketball pour tous, sans exception. Une pratique adaptée et inclusive pour s'épanouir et progresser ensemble.",
};

export default function SportAdaptePage() {
    return (
        <main className={s.page}>
            {/* ── Hero ── */}
            <section className={s.hero}>
                <div className={s.heroInner}>
                    <span className={s.heroLabel}>Inclusion & Partage</span>
                    <h1 className={s.heroTitle}>
                        Sport <span className={s.accent}>Adapté</span>
                    </h1>
                    <p className={s.heroSub}>
                        Le basketball pour tous, sans exception. Découvrez notre vision 
                        d'un sport inclusif, bienveillant et rassembleur.
                    </p>
                </div>
            </section>

            {/* ── 1. Le sport rassemble ── */}
            <section className={s.introSection}>
                <div className="container-custom">
                    <div className={s.introGrid}>
                        <div className={s.introContent}>
                            <span className="badge-red">Identité & Valeurs</span>
                            <h2 className={s.sectionTitle}>Le sport possède un pouvoir unique : celui de rassembler</h2>
                            <p className={s.leadText}>
                                À Neuilly Basketball Association, nous sommes convaincus que chaque personne, quels que soient son parcours, ses capacités ou ses besoins spécifiques, doit pouvoir découvrir les bienfaits du basketball dans un environnement bienveillant, sécurisé et adapté.
                            </p>
                            <p className={s.bodyText}>
                                L’inclusion n’est pas une option. Elle fait pleinement partie de notre identité.
                                Notre ambition est de permettre à chacun de vivre une expérience sportive enrichissante, dans le respect de son rythme, de ses objectifs et de ses possibilités.
                            </p>
                            <p className={s.bodyText}>
                                Parce que le plaisir de jouer appartient à tout le monde.
                            </p>
                        </div>
                        <div className={s.introVisual}>
                            <div className={s.quoteCard}>
                                <span className={s.quoteSymbol}>“</span>
                                <p className={s.quoteText}>
                                    Le sport rassemble, inspire et fait grandir.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 2 & 3. Pratique adaptée & Vecteur d'épanouissement ── */}
            <section className={s.detailsSection}>
                <div className="container-custom">
                    <div className={s.twoColsGrid}>
                        {/* Pratique adaptée */}
                        <div className={s.colCard}>
                            <div className={s.cardIconWrapper}>
                                <Compass className={s.icon} />
                            </div>
                            <h3>Une pratique adaptée à chaque joueur</h3>
                            <p>
                                Chaque licencié est unique. Il possède ses propres qualités, ses propres besoins et sa propre manière d’apprendre.
                            </p>
                            <p>
                                C’est pourquoi nous privilégions une approche individualisée, fondée sur l’écoute, la bienveillance et l’adaptation. Nos séances sont conçues pour permettre à chacun de progresser dans un cadre rassurant, valorisant et motivant.
                            </p>
                            <p>
                                Notre objectif n’est pas de comparer les joueurs entre eux, mais d’aider chacun à révéler son potentiel. Chaque réussite, même la plus simple en apparence, constitue une étape importante dans le parcours de progression.
                            </p>
                        </div>

                        {/* Vecteur d'épanouissement */}
                        <div className={s.colCard}>
                            <div className={s.cardIconWrapper}>
                                <Activity className={s.icon} />
                            </div>
                            <h3>Le sport comme vecteur d’épanouissement</h3>
                            <p>
                                Le basketball développe bien plus que des qualités physiques. Il favorise la confiance en soi, l’autonomie, la concentration, la coordination, la communication et la capacité à évoluer au sein d’un groupe.
                            </p>
                            <p>
                                À travers le jeu, les exercices et les situations collectives, les joueurs développent progressivement des compétences qui leur seront utiles bien au-delà du terrain.
                            </p>
                            <p>
                                Chaque entraînement devient une occasion de gagner en assurance, de créer des liens et de prendre confiance dans ses capacités.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 4 & 6. Inclusion & Club plus inclusif ── */}
            <section className={s.inclusionSection}>
                <div className="container-custom">
                    <div className={s.inclusionGrid}>
                        <div className={s.inclusionContent}>
                            <span className="badge-blue">Engagement</span>
                            <h2 className={s.sectionTitle}>L’inclusion comme valeur fondamentale</h2>
                            <p className={s.bodyText}>
                                Notre volonté est de construire un club où chacun trouve naturellement sa place. Nous croyons que la richesse d’une équipe réside dans sa diversité. Le respect des différences, l’écoute et la solidarité font partie des valeurs que nous transmettons quotidiennement.
                            </p>
                            <p className={s.bodyText}>
                                Le basketball permet de créer des rencontres, de favoriser le dialogue et de développer un véritable esprit de groupe. Au sein de Neuilly Basketball Association, chaque joueur est accueilli avec la même considération, la même attention et le même enthousiasme.
                            </p>
                            <h3 className={s.subTitle}>Construire un club toujours plus inclusif</h3>
                            <p className={s.bodyText}>
                                Notre démarche d’inclusion est appelée à se développer au fil des saisons. Nous souhaitons poursuivre notre réflexion, renforcer les compétences de nos éducateurs et mettre en place de nouveaux projets permettant d’accueillir un public toujours plus large.
                            </p>
                            <p className={s.bodyText}>
                                Notre ambition est claire : faire de Neuilly Basketball Association un club où chacun peut pratiquer le basketball dans le respect de ses capacités, de ses envies et de son parcours. Parce que nous croyons profondément qu’un club grandit lorsqu’il ouvre ses portes à tous.
                            </p>
                        </div>
                        <div className={s.inclusionVisual}>
                            <div className={s.benefitsGrid}>
                                <div className={s.benefitItem}>
                                    <Shield className={s.benefitIcon} />
                                    <div>
                                        <strong>Respect des différences</strong>
                                        <p>Transmis quotidiennement dans toutes nos équipes.</p>
                                    </div>
                                </div>
                                <div className={s.benefitItem}>
                                    <Users className={s.benefitIcon} />
                                    <div>
                                        <strong>Diversité valorisée</strong>
                                        <p>La richesse de nos collectifs provient de nos différences.</p>
                                    </div>
                                </div>
                                <div className={s.benefitItem}>
                                    <Smile className={s.benefitIcon} />
                                    <div>
                                        <strong>Écoute & Solidarité</strong>
                                        <p>Pour un esprit de groupe soudé et bienveillant.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 5. Collaboration avec les familles ── */}
            <section className={s.familiesSection}>
                <div className="container-custom">
                    <div className={s.familiesCard}>
                        <h2>Une collaboration avec les familles</h2>
                        <div className={s.dividerAccentCenter}></div>
                        <p>
                            L’accompagnement d’un joueur ne se limite pas au temps passé sur le terrain. 
                            Nous attachons une grande importance au dialogue avec les familles afin de mieux comprendre les besoins de chacun et d’adapter, lorsque cela est nécessaire, notre manière d’accompagner les licenciés.
                        </p>
                        <p className={s.familiesHighlight}>
                            Cette relation de confiance nous permet de construire un environnement stable, rassurant et favorable à l’épanouissement de chaque joueur. Parce qu’un projet sportif se construit ensemble.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── 7 & 8. Le sport rassemble, inspire et fait grandir ── */}
            <section className={s.conclusionSection}>
                <div className="container-custom">
                    <div className={s.conclusionCard}>
                        <span className="badge-red">Aventure Humaine</span>
                        <h2>Le sport rassemble, inspire et fait grandir</h2>
                        <p className={s.conclusionText}>
                            Au-delà des performances, des résultats et des compétitions, le basketball est avant tout une aventure humaine. 
                            Chaque sourire, chaque progrès, chaque encouragement et chaque moment partagé rappellent pourquoi nous avons choisi de faire du sport un espace d’éducation, de respect et de partage.
                        </p>
                        <p className={s.conclusionText}>
                            À Neuilly Basketball Association, nous sommes fiers de défendre une vision du basketball où personne n’est laissé de côté. Car notre plus belle réussite n’est pas seulement de former de meilleurs joueurs. C’est de permettre à chacun de trouver sa place, de prendre confiance en lui et de vivre pleinement la passion du basketball.
                        </p>
                        
                        <div className={s.quoteBanner}>
                            <p className={s.quoteBannerText}>
                                « À Neuilly Basketball Association, nous ne voyons pas les différences comme des limites. Nous les considérons comme une richesse qui fait grandir notre club, nos équipes et chacune des personnes qui les composent. »
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Inscription / Contact CTA ── */}
            <section className={s.ctaSection}>
                <div className="container-custom">
                    <div className={s.ctaContentCard}>
                        <h2>Rejoindre notre section Sport Adapté ?</h2>
                        <p>
                            Que vous soyez un particulier, un établissement spécialisé (IME, FAM, MAS...) ou une association, 
                            nous serons ravis de vous accueillir pour une séance de découverte et d'essai.
                        </p>
                        <div className={s.ctaButtons}>
                            <Link href="/contact" className="btn-primary">
                                Demander une séance d'essai <ArrowRight size={16} />
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
