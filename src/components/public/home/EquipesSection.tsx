import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users } from "lucide-react";
import s from "./EquipesSection.module.scss";
import { prisma } from "@/lib/prisma";
import * as m from "framer-motion/client";
import { Team } from "@prisma/client";

// ─── Types ───────────────────────────────────────────────────────────────────
interface TeamWithCount {
    id: number;
    label: string;
    gender?: string; // Optionnel pour éviter les erreurs de type Prisma
    _count: {
        players: number;
    };
    slug?: string;
    image?: string;
    niveau?: string;
}

// ─── Default values ──────────────────────────────────────────────────────────
const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800";
const DEFAULT_NIVEAU = "Compétition";

const GENDER_COLOR: Record<string, string> = {
    Masculin: "blue",
    Féminin:  "pink",
    Mixte:    "purple",
};

// ─── Card ─────────────────────────────────────────────────────────────────────
function EquipeCard({ equipe, index }: { equipe: TeamWithCount; index: number }) {
    const gender = equipe.gender || "Masculin";
    const color = GENDER_COLOR[gender] || "purple";
    const slug = equipe.label.toLowerCase().replace(/\s+/g, "-");

    return (
        <m.div
            className={s.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
            <Link href={`/equipes/${slug}`} className={s.cardInner}>

                {/* Image */}
                <div className={s.imageWrap}>
                    <Image
                        src={equipe.image || DEFAULT_IMAGE}
                        alt={equipe.label}
                        fill
                        className={s.image}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className={s.imageOverlay} />

                    {/* Gender badge */}
                    <span className={`${s.badge} ${s[`badge--${color}`]}`}>
                        {gender}
                    </span>

                    {/* Niveau */}
                    <div className={s.niveau}>
                        {equipe.niveau || DEFAULT_NIVEAU}
                    </div>
                </div>

                {/* Footer */}
                <div className={s.footer}>
                    <div className={s.footerLeft}>
                        <span className={s.nom}>{equipe.label}</span>
                        <span className={s.joueurs}>
                            <Users size={12} />
                            {equipe._count.players} joueurs
                        </span>
                    </div>
                    <div className={s.arrow}>
                        <ArrowRight size={16} />
                    </div>
                </div>

            </Link>
        </m.div>
    );
}

// ─── Section ─────────────────────────────────────────────────────────────────
export async function EquipesSection() {
    let equipes: TeamWithCount[] = [];
    try {
        const result = await prisma.team.findMany({
            where: { isOnline: true },
            include: {
                _count: {
                    select: { players: true }
                }
            },
            take: 6,
            orderBy: { id: "asc" }
        });
        equipes = result as unknown as TeamWithCount[];
    } catch (error) {
        console.error("Failed to fetch teams:", error);
    }

    return (
        <section className={s.section}>
            <div className={s.container}>

                {/* Header */}
                <m.div
                    className={s.header}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                >
                    <div className={s.headerLeft}>
                        <span className={s.eyebrow}>
                            <span className={s.eyebrowLine} />
                            Nos équipes
                        </span>
                        <h2 className={s.sectionTitle}>Du baby-basket<br />aux seniors</h2>
                    </div>

                    <div className={s.headerRight}>
                        <p className={s.sectionDesc}>
                            Retrouvez toutes les équipes du club engagées<br />
                            pour cette saison.
                        </p>
                        <Link href="/equipes" className={s.allLink}>
                            Voir toutes les équipes
                            <ArrowRight size={15} />
                        </Link>
                    </div>
                </m.div>

                {/* Grid or Empty State */}
                {equipes.length > 0 ? (
                    <div className={s.grid}>
                        {equipes.map((equipe, i) => (
                            <EquipeCard key={equipe.id} equipe={equipe} index={i} />
                        ))}
                    </div>
                ) : (
                    <m.div 
                        className={s.emptyState}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <p>Aucune équipe créée pour le moment.</p>
                    </m.div>
                )}

            </div>
        </section>
    );
}
