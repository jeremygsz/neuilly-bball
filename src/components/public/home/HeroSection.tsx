"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import s from "./HeroSection.module.scss";
import {IMG} from "@/lib/mock/images";

function fadeUp(delay = 0): Pick<HTMLMotionProps<"div">, "initial" | "animate" | "transition"> {
    return {
        initial:    { opacity: 0, y: 40 },
        animate:    { opacity: 1, y: 0  },
        transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
    };
}

const STATS = [
    { value: "12",   label: "Équipes"        },
    { value: "200+", label: "Licenciés"      },
    { value: "30+",  label: "Ans d'histoire" },
];

export function HeroSection() {
    return (
        <section className={s.hero}>

            {/* ── Image de fond ── */}
            <div className={s.bgImage}>
                <Image
                    src={IMG.hero.main}
                    alt="Terrain de basketball"
                    fill
                    priority
                    className={s.bgImg}
                    sizes="100vw"
                />
                <div className={s.bgOverlay} />
            </div>

            {/* ── Ligne déco verticale gauche ── */}
            <motion.div
                className={s.lineLeft}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            />

            {/* ── Numéro déco ── */}
            <motion.div
                className={s.decoNumber}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0  }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                NBA
            </motion.div>

            {/* ── Contenu principal ── */}
            <div className={s.container}>
                <div className={s.content}>

                    {/* Tag saison */}
                    <motion.div className={s.tag} {...fadeUp(0.2)}>
                        <span className={s.tagLine} />
                        <span>Saison 2024 — 2025</span>
                    </motion.div>

                    {/* Titre */}
                    <motion.h1 className={s.title} {...fadeUp(0.35)}>
                        <span className={s.titleTop}>NEUILLY</span>
                        <span className={s.titleBottom}>
                            BASKET<span className={s.titleRed}>BALL</span>
                        </span>
                    </motion.h1>

                    {/* Sous-titre */}
                    <motion.p className={s.subtitle} {...fadeUp(0.5)}>
                        Passion, performance et esprit d'équipe au cœur de Neuilly-sur-Seine.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div className={s.ctas} {...fadeUp(0.65)}>
                        <Link href="/contact" className={s.ctaPrimary}>
                            <span>Nous rejoindre</span>
                            <span className={s.ctaIcon}><ArrowRight size={16} /></span>
                        </Link>
                        <Link href="/equipes" className={s.ctaSecondary}>
                            Nos équipes
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div className={s.stats} {...fadeUp(0.8)}>
                        {STATS.map((stat, i) => (
                            <div key={stat.label} className={s.stat}>
                                {i > 0 && <div className={s.statDivider} />}
                                <span className={s.statValue}>{stat.value}</span>
                                <span className={s.statLabel}>{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>

                </div>
            </div>

            {/* ── Scroll indicator ── */}
            <motion.div
                className={s.scroll}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
            >
                <motion.div
                    className={s.scrollDot}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                />
                <span className={s.scrollLine} />
            </motion.div>

        </section>
    );
}
