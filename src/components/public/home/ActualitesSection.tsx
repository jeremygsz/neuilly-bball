"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Tag } from "lucide-react";
import s from "./ActualitesSection.module.scss";

// ─── Types ───────────────────────────────────────────────────────────────────
interface Article {
    id:        string;
    slug:      string;
    titre:     string;
    resume:    string;
    image:     string;
    categorie: string;
    date:      string;
}

// ─── Mock data (remplacer par fetch Prisma) ───────────────────────────────────
const ARTICLES: Article[] = [
    {
        id:        "1",
        slug:      "victoire-seniors-masculins",
        titre:     "Belle victoire des Seniors Masculins ce week-end",
        resume:    "L'équipe première s'impose 78-62 face à Levallois et consolide sa place en tête du championnat.",
        image:     "/images/logo.jpeg",
        categorie: "Résultats",
        date:      "2025-01-18",
    },
    {
        id:        "2",
        slug:      "recrutement-u15",
        titre:     "Recrutement ouvert pour les U15 — Saison 2025",
        resume:    "Le club ouvre ses portes aux jeunes talents nés en 2010-2011. Venez découvrir le basket en famille.",
        image:     "/images/logo.jpeg",
        categorie: "Club",
        date:      "2025-01-14",
    },
    {
        id:        "3",
        slug:      "tournoi-noel-2024",
        titre:     "Retour sur le tournoi de Noël — édition 2024",
        resume:    "Plus de 12 équipes réunies pour un week-end de basket intense. Ambiance, sport et convivialité au programme.",
        image:     "/images/logo.jpeg",
        categorie: "Événement",
        date:      "2025-01-08",
    },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────
function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("fr-FR", {
        day:   "numeric",
        month: "long",
        year:  "numeric",
    });
}

const CATEGORY_COLORS: Record<string, string> = {
    Résultats:  "red",
    Club:       "blue",
    Événement:  "orange",
};

// ─── Card ─────────────────────────────────────────────────────────────────────
function ArticleCard({ article, index }: { article: Article; index: number }) {
    const color = CATEGORY_COLORS[article.categorie] ?? "red";

    return (
        <motion.article
            className={s.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
            {/* Image */}
            <Link href={`/actualites/${article.slug}`} className={s.cardImageWrap}>
                <Image
                    src={article.image}
                    alt={article.titre}
                    fill
                    className={s.cardImage}
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className={s.cardImageOverlay} />
                {/* Catégorie badge */}
                <span className={`${s.cardBadge} ${s[`cardBadge--${color}`]}`}>
                    <Tag size={11} />
                    {article.categorie}
                </span>
            </Link>

            {/* Body */}
            <div className={s.cardBody}>
                <div className={s.cardMeta}>
                    <Clock size={13} />
                    <span>{formatDate(article.date)}</span>
                </div>

                <h3 className={s.cardTitle}>
                    <Link href={`/actualites/${article.slug}`}>
                        {article.titre}
                    </Link>
                </h3>

                <p className={s.cardResume}>{article.resume}</p>

                <Link href={`/actualites/${article.slug}`} className={s.cardLink}>
                    Lire la suite
                    <ArrowRight size={15} />
                </Link>
            </div>
        </motion.article>
    );
}

// ─── Section ─────────────────────────────────────────────────────────────────
export function ActualitesSection() {
    return (
        <section className={s.section}>
            <div className={s.container}>

                {/* Header */}
                <motion.div
                    className={s.header}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                >
                    <div className={s.headerLeft}>
                        <span className={s.eyebrow}>
                            <span className={s.eyebrowLine} />
                            À la une
                        </span>
                        <h2 className={s.sectionTitle}>Dernières actualités</h2>
                    </div>

                    <Link href="/actualites" className={s.allLink}>
                        Toutes les actus
                        <ArrowRight size={16} />
                    </Link>
                </motion.div>

                {/* Grid */}
                <div className={s.grid}>
                    {ARTICLES.map((article, i) => (
                        <ArticleCard key={article.id} article={article} index={i} />
                    ))}
                </div>

            </div>
        </section>
    );
}
