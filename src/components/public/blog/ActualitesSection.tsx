import Link from "next/link";
import { ArrowRight } from "lucide-react";
import s from "./ActualitesSection.module.scss";
import { prisma } from "@/lib/prisma";
import * as m from "framer-motion/client";
import { ArticleCard } from "./ArticleCard";
import { Post } from "@prisma/client";

interface Props {
    eyebrow?: string;
    title?: string;
    limit?: number;
    showAllLink?: boolean;
}

// ─── Section ─────────────────────────────────────────────────────────────────
export async function ActualitesSection({
    eyebrow = "À la une",
    title = "Dernières actualités",
    limit = 3,
    showAllLink = true,
}: Props = {}) {
    let articles: Post[] = [];
    try {
        articles = await prisma.post.findMany({
            where: { isOnline: true },
            take: limit,
            orderBy: { createdAt: "desc" }
        });
    } catch (error) {
        console.error("Failed to fetch articles:", error);
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
                            {eyebrow}
                        </span>
                        <h2 className={s.sectionTitle}>{title}</h2>
                    </div>

                    {showAllLink && (
                        <Link href="/actualites" className={s.allLink}>
                            Toutes les actus
                            <ArrowRight size={16} />
                        </Link>
                    )}
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
