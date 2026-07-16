import { Metadata } from "next";
import Link from "next/link";
import { 
    Award, 
    BookOpen, 
    ChevronRight, 
    Heart, 
    Sparkles, 
    Users 
} from "lucide-react";
import s from "./page.module.scss";

export const metadata: Metadata = {
    title: "Notre Staff Technique | Neuilly Basketball",
    description: "Rencontrez l'équipe d'encadrement technique de Neuilly Basketball Association. Une équipe qualifiée dédiée à la formation et à la progression de nos licenciés.",
};

// Mock staff members data to populate the page professionally
const staffMembers = [
    {
        id: 1,
        name: "Marc Antoine",
        role: "Directeur Technique & Coach Senior",
        diploma: "DEJEPS Basketball",
        description: "Plus de 15 ans d'expérience dans la formation de jeunes joueurs et la direction technique de clubs franciliens.",
        specialty: "Stratégie collective & Perfectionnement",
    },
    {
        id: 2,
        name: "Yassine Boussa",
        role: "Responsable Pôle Jeunes & U15/U18",
        diploma: "CQP Animateur de Basketball",
        description: "Passionné par la formation des adolescents, Yassine met l'accent sur la rigueur et le développement individuel.",
        specialty: "Fondamentaux individuels & Préparation physique",
    },
    {
        id: 3,
        name: "Sophie Laurent",
        role: "Responsable École de Basket & Mini-Basket",
        diploma: "Brevet Fédéral Enfant",
        description: "Spécialiste du jeune joueur, Sophie anime l'école de basket avec une approche ludique et bienveillante.",
        specialty: "Motricité, coordination & Esprit d'équipe",
    },
    {
        id: 4,
        name: "Julien Mercier",
        role: "Entraîneur Senior Féminin & U13",
        diploma: "CQP Basket",
        description: "Ancien joueur régional, Julien transmet la passion du jeu et l'exigence de la compétition avec convivialité.",
        specialty: "Jeu de transition & Analyse vidéo",
    }
];

export default function StaffTechniquePage() {
    return (
        <main className={s.page}>
            {/* ── Hero ── */}
            <section className={s.hero}>
                <div className={s.heroInner}>
                    <span className={s.heroLabel}>L'Encadrement</span>
                    <h1 className={s.heroTitle}>
                        Notre Staff <span className={s.accent}>Technique</span>
                    </h1>
                    <p className={s.heroSub}>
                        Une équipe d’entraîneurs passionnés et diplômés, engagés au quotidien 
                        pour transmettre les valeurs de Neuilly Basketball Association.
                    </p>
                </div>
            </section>

            {/* ── Philosophie d'Encadrement ── */}
            <section className={s.philosophySection}>
                <div className="container-custom">
                    <div className={s.gridPhilosophy}>
                        <div className={s.philosophyContent}>
                            <span className="badge-blue">La qualité au cœur du projet</span>
                            <h2 className={s.sectionTitle}>Une structure d'excellence</h2>
                            <p className={s.leadText}>
                                Nous croyons qu’un club se construit avant tout grâce à la qualité de son encadrement 
                                et aux valeurs qu’il transmet chaque jour sur et en dehors du terrain.
                            </p>
                            <p className={s.bodyText}>
                                Neuilly Basketball Association a choisi d'investir massivement dans la formation 
                                de ses entraîneurs et la qualité des séances. Notre projet consiste à proposer à chaque 
                                licencié des conditions d’entraînement inspirées des meilleures organisations sportives.
                            </p>
                            <p className={s.bodyText}>
                                Nos techniciens n'enseignent pas uniquement des schémas tactiques. Ils conçoivent 
                                chaque entraînement comme une opportunité d’apprendre : apprendre à jouer, respecter les règles, 
                                collaborer au sein du groupe et persévérer dans l’effort.
                            </p>
                        </div>

                        <div className={s.philosophyHighlight}>
                            <div className={s.highlightCard}>
                                <Sparkles className={s.highlightIcon} />
                                <h3>Notre engagement</h3>
                                <p>
                                    « Offrir à chaque joueur, quel que soit son âge ou son niveau, une expérience sportive exigeante, moderne et profondément humaine. »
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Les Piliers du Staff (Extracts from histoire) ── */}
            <section className={s.pillarsSection}>
                <div className="container-custom">
                    <div className={s.headerCenter}>
                        <h2>Les Piliers de notre Pédagogie</h2>
                        <div className={s.dividerAccentCenter}></div>
                    </div>

                    <div className={s.pillarsGrid}>
                        <div className={s.pillarCard}>
                            <Award className={s.pillarIcon} />
                            <h4>Exigence et Rigueur</h4>
                            <p>
                                Des entraînements préparés avec soin, une organisation rigoureuse et une attention constante 
                                portée aux détails pour garantir des séances de haute qualité.
                            </p>
                        </div>
                        <div className={s.pillarCard}>
                            <Users className={s.pillarIcon} />
                            <h4>Esprit de Famille</h4>
                            <p>
                                Allier l'exigence du sport à la convivialité d'une grande famille. Nous accueillons chaque 
                                joueur pour qu'il s'épanouisse dans un climat de confiance.
                            </p>
                        </div>
                        <div className={s.pillarCard}>
                            <BookOpen className={s.pillarIcon} />
                            <h4>Formation Continue</h4>
                            <p>
                                Le basketball évolue. Nos entraîneurs se forment régulièrement pour intégrer les dernières 
                                méthodes d'entraînement et de préparation physique.
                            </p>
                        </div>
                        <div className={s.pillarCard}>
                            <Heart className={s.pillarIcon} />
                            <h4>Valeurs Humaines</h4>
                            <p>
                                Développer autant les qualités sportives que les qualités humaines : respect, discipline, 
                                persévérance et goût du travail en collectif.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── L'Équipe Technique (Grid) ── */}
            <section className={s.teamSection}>
                <div className="container-custom">
                    <div className={s.headerCenter}>
                        <span className="badge-red">Notre Staff 2026-2027</span>
                        <h2>Les Techniciens du Club</h2>
                        <p className={s.teamHeaderSub}>
                            Des éducateurs diplômés d'État et fédéraux, spécialisés par catégories d'âges.
                        </p>
                    </div>

                    <div className={s.teamGrid}>
                        {staffMembers.map((member) => (
                            <div key={member.id} className={s.memberCard}>
                                <div className={s.memberBadge}>
                                    <span>{member.diploma}</span>
                                </div>
                                <div className={s.memberInfo}>
                                    <h3>{member.name}</h3>
                                    <span className={s.memberRole}>{member.role}</span>
                                    <p className={s.memberDesc}>{member.description}</p>
                                    <div className={s.memberSpecialty}>
                                        <strong>Spécialité :</strong> {member.specialty}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Join Us / Call to Action ── */}
            <section className={s.ctaSection}>
                <div className="container-custom">
                    <div className={s.ctaCard}>
                        <h2>Rejoindre l'équipe d'encadrement ?</h2>
                        <p>
                            Un club avance et grandit grâce à l'engagement de ses entraîneurs, de ses bénévoles, 
                            et à la confiance de ses familles. Vous partagez notre vision d'excellence et de convivialité ?
                        </p>
                        <p className={s.ctaHighlight}>
                            Venez participer au développement du basketball à Neuilly-sur-Seine !
                        </p>
                        <div className={s.ctaButtons}>
                            <Link href="/contact" className="btn-primary">
                                Postuler ou nous rejoindre <ChevronRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
