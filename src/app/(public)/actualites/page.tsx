import { prisma } from "@/lib/prisma";
import { ArticleCard } from "@/components/public/blog/ArticleCard";
import * as m from "framer-motion/client";
import s from "./page.module.scss";
import { Post } from "@prisma/client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Actualités",
    description: "Toutes les dernières nouvelles, résultats et événements du club Neuilly Basketball.",
};

export const dynamic = "force-dynamic";

export default async function ActualitesPage() {
    let articles: Post[] = [];
    try {
        articles = await prisma.post.findMany({
            where: { isOnline: true },
            orderBy: { createdAt: "desc" }
        });
    } catch (error) {
        console.error("Failed to fetch articles:", error);
    }

    return (
        <main className={s.page}>

            {/* ── Hero ── */}
            <section className={s.hero}>
                <div className={s.heroInner}>
                    <span className={s.heroLabel}>Le blog du club</span>
                    <h1 className={s.heroTitle}>
                        Toute l'<span className={s.accent}>Actualité</span>
                    </h1>
                    <p className={s.heroSub}>
                        Suivez les moments forts, les résultats et la vie du Neuilly Basketball.
                    </p>
                </div>
            </section>

            {/* ── Content ── */}
            <section className={s.content}>
                <div className={s.container}>
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
                            animate={{ opacity: 1 }}
                        >
                            <p>Aucune actualité n'est disponible pour le moment. Revenez bientôt !</p>
                        </m.div>
                    )}
                </div>
            </section>

        </main>
    );
}
