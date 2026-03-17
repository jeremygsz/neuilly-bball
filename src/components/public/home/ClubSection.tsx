"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Trophy, Users, Calendar, MapPin } from "lucide-react";
import s from "./ClubSection.module.scss";
import { IMG } from "@/lib/mock/images";

// ─── Stats ────────────────────────────────────────────────────────────────────
const STATS = [
    { value: "1987", label: "Année de fondation", icon: Calendar },
    { value: "320+", label: "Licenciés",           icon: Users    },
    { value: "18",   label: "Équipes",             icon: Trophy   },
    { value: "3",    label: "Gymnases partenaires",icon: MapPin   },
];

// ─── Valeurs ──────────────────────────────────────────────────────────────────
const VALEURS = [
    { emoji: "🏀", titre: "Sport & Performance",  desc: "Former des joueurs complets, du débutant au compétiteur régional." },
    { emoji: "🤝", titre: "Esprit d'équipe",       desc: "Cohésion, respect et entraide au cœur de chaque entraînement." },
    { emoji: "🌱", titre: "Jeunesse & Formation",  desc: "École de basket dès 6 ans, parcours progressif jusqu'en senior." },
    { emoji: "🏆", titre: "Excellence locale",     desc: "Engagés dans les championnats régionaux et départementaux." },
];

// ─── Section ─────────────────────────────────────────────────────────────────
export function ClubSection() {
    return (
        <section className={s.section}>
            <div className={s.container}>

                {/* ── Gauche : image + stats ── */}
                <motion.div
                    className={s.left}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                >
                    {/* Image principale */}
                    <div className={s.imageWrap}>
                        <Image
                            src={IMG.club.action}
                            alt="Le club en action"
                            fill
                            className={s.image}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {/* Overlay dégradé bas */}
                        <div className={s.imageOverlay} />

                        {/* Badge flottant */}
                        <div className={s.imageBadge}>
                            <span className={s.imageBadgeYear}>1987</span>
                            <span className={s.imageBadgeLabel}>Fondé en</span>
                        </div>
                    </div>

                    {/* Stats grid */}
                    <div className={s.statsGrid}>
                        {STATS.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                className={s.statCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                            >
                                <stat.icon size={16} className={s.statIcon} />
                                <span className={s.statValue}>{stat.value}</span>
                                <span className={s.statLabel}>{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ── Droite : texte + valeurs ── */}
                <motion.div
                    className={s.right}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                >
                    <span className={s.eyebrow}>
                        <span className={s.eyebrowLine} />
                        Le Club
                    </span>

                    <h2 className={s.title}>
                        Un club ancré<br />
                        dans son territoire
                    </h2>

                    <p className={s.intro}>
                        Depuis 1987, notre association développe la pratique du basketball
                        pour tous les âges et tous les niveaux. Du baby-basket aux équipes
                        senior engagées en championnat régional, nous formons des joueurs
                        et des citoyens.
                    </p>

                    {/* Valeurs */}
                    <div className={s.valeurs}>
                        {VALEURS.map((v, i) => (
                            <motion.div
                                key={v.titre}
                                className={s.valeurItem}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: 0.4 + i * 0.07 }}
                            >
                                <span className={s.valeurEmoji}>{v.emoji}</span>
                                <div className={s.valeurText}>
                                    <strong className={s.valeurTitre}>{v.titre}</strong>
                                    <span className={s.valeurDesc}>{v.desc}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className={s.ctas}>
                        <Link href="/club" className={s.ctaPrimary}>
                            Découvrir le club
                            <ArrowRight size={15} />
                        </Link>
                        <Link href="/inscription" className={s.ctaSecondary}>
                            S'inscrire
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
