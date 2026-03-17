"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { IMG } from "@/lib/mock/images";
import s from "./PartenairesSection.module.scss";

// ─── Data ─────────────────────────────────────────────────────────────────────
const PARTENAIRES = [
    {
        nom:     "Partenaire Principal",
        img:     IMG.partenaires.p1,
        url:     "#",
        tier:    "gold",
        desc:    "Sponsor titre depuis 2018",
    },
    {
        nom:     "Partenaire 2",
        img:     IMG.partenaires.p2,
        url:     "#",
        tier:    "gold",
        desc:    "Partenaire officiel maillots",
    },
    {
        nom:     "Partenaire 3",
        img:     IMG.partenaires.p3,
        url:     "#",
        tier:    "silver",
        desc:    "Partenaire équipement",
    },
    {
        nom:     "Partenaire 4",
        img:     IMG.partenaires.p4,
        url:     "#",
        tier:    "silver",
        desc:    "Partenaire transport",
    },
    {
        nom:     "Partenaire 5",
        img:     IMG.partenaires.p5,
        url:     "#",
        tier:    "bronze",
        desc:    "Partenaire local",
    },
];

const TIERS = [
    { key: "gold",   label: "Partenaires Or",    color: "#eab308" },
    { key: "silver", label: "Partenaires Argent", color: "#94a3b8" },
    { key: "bronze", label: "Partenaires Bronze", color: "#b45309" },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
export function PartenairesSection() {
    return (
        <section className={s.section}>
            <div className={s.container}>

                {/* ── Header ── */}
                <motion.div
                    className={s.header}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className={s.label}>Ils nous soutiennent</span>
                    <h2 className={s.title}>Nos <span className={s.accent}>Partenaires</span></h2>
                    <p className={s.subtitle}>
                        Grâce à leur soutien, le club peut évoluer et offrir
                        les meilleures conditions à ses joueurs.
                    </p>
                </motion.div>

                {/* ── Grilles par tier ── */}
                {TIERS.map((tier) => {
                    const liste = PARTENAIRES.filter((p) => p.tier === tier.key);
                    if (!liste.length) return null;

                    return (
                        <div key={tier.key} className={s.tierBlock}>

                            {/* Label tier */}
                            <div className={s.tierLabel}>
                                <span
                                    className={s.tierLine}
                                    style={{ background: tier.color }}
                                />
                                <span
                                    className={s.tierText}
                                    style={{ color: tier.color }}
                                >
                                    {tier.label}
                                </span>
                                <span
                                    className={s.tierLine}
                                    style={{ background: tier.color }}
                                />
                            </div>

                            {/* Cards */}
                            <div className={`${s.grid} ${s[tier.key]}`}>
                                {liste.map((p, i) => (
                                    <motion.div
                                        key={p.nom}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: i * 0.1 }}
                                    >
                                        <Link
                                            href={p.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={s.card}
                                            style={{ "--tier-color": tier.color } as React.CSSProperties}
                                        >
                                            {/* Logo */}
                                            <div className={s.logoWrap}>
                                                <Image
                                                    src={p.img}
                                                    alt={p.nom}
                                                    fill
                                                    className={s.logo}
                                                    sizes="(max-width: 768px) 50vw, 200px"
                                                />
                                            </div>

                                            {/* Hover overlay */}
                                            <div className={s.overlay}>
                                                <p className={s.overlayNom}>{p.nom}</p>
                                                <p className={s.overlayDesc}>{p.desc}</p>
                                                <span className={s.overlayLink}>
                                                    Voir le site <ExternalLink size={12} />
                                                </span>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    );
                })}

                {/* ── CTA devenir partenaire ── */}
                <motion.div
                    className={s.cta}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className={s.ctaContent}>
                        <p className={s.ctaTitle}>Devenez partenaire du club</p>
                        <p className={s.ctaDesc}>
                            Associez votre image à un club dynamique et en plein essor.
                            Plusieurs formules disponibles.
                        </p>
                    </div>
                    <Link href="/contact" className={s.ctaBtn}>
                        Nous contacter
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
