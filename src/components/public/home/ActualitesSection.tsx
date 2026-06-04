import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Tag } from "lucide-react";
import s from "./ActualitesSection.module.scss";
import { prisma } from "@/lib/prisma";
import * as m from "framer-motion/client";
import { Post } from "@prisma/client";

// ─── Helpers ─────────────────────────────────────────────────────────────────
function formatDate(date: Date) {
    return date.toLocaleDateString("fr-FR", {
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

const DEFAULT_IMAGE = "/images/logo.jpeg";
const DEFAULT_CATEGORY = "Club";

// ─── Card ─────────────────────────────────────────────────────────────────────
function ArticleCard({ article, index }: { article: Post; index: number }) {
    // Note: Temporary mapping since category is not in DB schema yet
    const category = DEFAULT_CATEGORY;
    const color = CATEGORY_COLORS[category] ?? "red";

    return (
        <m.article
            className={s.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
            {/* Image */}
            <Link href={`/actualites/${article.slug}`} className={s.cardImageWrap}>
                <Image
                    src={article.picture || DEFAULT_IMAGE}
                    alt={article.title}
                    fill
                    className={s.cardImage}
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className={s.cardImageOverlay} />
                {/* Catégorie badge */}
                <span className={`${s.cardBadge} ${s[`cardBadge--${color}`]}`}>
                    <Tag size={11} />
                    {category}
                </span>
            </Link>

            {/* Body */}
            <div className={s.cardBody}>
                <div className={s.cardMeta}>
                    <Clock size={13} />
                    <span>{formatDate(article.createdAt)}</span>
                </div>

                <h3 className={s.cardTitle}>
                    <Link href={`/actualites/${article.slug}`}>
                        {article.title}
                    </Link>
                </h3>

                <p className={s.cardResume}>{article.excerpt}</p>

                <Link href={`/actualites/${article.slug}`} className={s.cardLink}>
                    Lire la suite
                    <ArrowRight size={15} />
                </Link>
            </div>
        </m.article>
    );
}

// ─── Section ─────────────────────────────────────────────────────────────────
export async function ActualitesSection() {
    const articles = await prisma.post.findMany({
        where: { isOnline: true },
        take: 3,
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
                            À la une
                        </span>
                        <h2 className={s.sectionTitle}>Dernières actualités</h2>
                    </div>

                    <Link href="/actualites" className={s.allLink}>
                        Toutes les actus
                        <ArrowRight size={16} />
                    </Link>
                </m.div>

                {/* Grid or Empty State */}
                {articles.length > 0 ? (
                    <div className={s.grid}>
                        {articles.map((article, i) => (
                            <ArticleCard key={article.id} article={article} index={i} />
                        ))}
                    </div>
                ) : (
                    <m.div 
                        className={s.emptyState}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <p>Aucune actualité publiée pour le moment.</p>
                    </m.div>
                )}

            </div>
        </section>
    );
}
