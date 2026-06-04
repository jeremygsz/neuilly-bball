import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users } from "lucide-react";
import s from "./EquipesSection.module.scss";
import { prisma } from "@/lib/prisma";
import * as m from "framer-motion/client";

// ─── Types ───────────────────────────────────────────────────────────────────
interface TeamWithCount {
    id: number;
    label: string;
    _count: {
        players: number;
    };
    // Note: Temporary fallback for missing fields in DB schema
    slug?: string;
    genre?: string;
    image?: string;
    niveau?: string;
}

// ─── Default values (since DB schema is minimalist) ──────────────────────────
const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800";
const DEFAULT_GENRE = "Mixte";
const DEFAULT_NIVEAU = "Compétition";

const GENRE_COLOR: Record<string, string> = {
    Masculin: "blue",
    Féminin:  "pink",
    Mixte:    "purple",
};

// ─── Card ─────────────────────────────────────────────────────────────────────
function EquipeCard({ equipe, index }: { equipe: TeamWithCount; index: number }) {
    const genre = equipe.genre || DEFAULT_GENRE;
    const color = GENRE_COLOR[genre] || "purple";
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

                    {/* Genre badge */}
                    <span className={`${s.badge} ${s[`badge--${color}`]}`}>
                        {genre}
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
    const equipes = await prisma.team.findMany({
        include: {
            _count: {
                select: { players: true }
            }
        },
        take: 6,
        orderBy: { createdAt: "desc" }
    });

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
