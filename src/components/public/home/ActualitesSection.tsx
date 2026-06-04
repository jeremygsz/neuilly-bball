import Link from "next/link";
import { ArrowRight } from "lucide-react";
import s from "./ActualitesSection.module.scss";
import { prisma } from "@/lib/prisma";
import * as m from "framer-motion/client";
import { ArticleCard } from "@/components/public/blog/ArticleCard";

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
