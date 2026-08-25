import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { ArticleImageLightbox } from "@/components/public/blog/ArticleImageLightbox";
import s from "./page.module.scss";

export const dynamic = "force-dynamic";

interface PageProps {
    params: Promise<{ slug: string }>;
}

async function getArticle(slug: string) {
    try {
        return await prisma.post.findFirst({ where: { slug, isOnline: true } });
    } catch (error) {
        console.error("Failed to fetch article:", error);
        return null;
    }
}

function formatDate(date: Date) {
    return date.toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = await getArticle(slug);

    if (!article) {
        return { title: "Actualité introuvable | Neuilly Basketball" };
    }

    return {
        title: `${article.title} | Neuilly Basketball`,
        description: article.excerpt ?? undefined,
    };
}

export default async function ArticlePage({ params }: PageProps) {
    const { slug } = await params;
    const article = await getArticle(slug);

    if (!article) {
        notFound();
    }

    return (
        <main className={s.page}>

            {/* ── Hero ── */}
            <section className={s.hero}>
                <div className="container-custom">
                    <Link href="/actualites" className={s.backLink}>
                        <ArrowLeft size={16} />
                        Toutes les actualités
                    </Link>
                    <span className={s.eyebrow}>Actualités</span>
                    <h1 className={s.title}>{article.title}</h1>
                    <div className={s.meta}>
                        <Clock size={14} />
                        <span>{formatDate(article.createdAt)}</span>
                    </div>
                </div>
            </section>

            {/* ── Image ── */}
            <div className="container-custom">
                <ArticleImageLightbox
                    src={article.picture || "/images/logo3d.png"}
                    alt={article.title}
                />
            </div>

            {/* ── Contenu ── */}
            <section className={s.content}>
                <div className="container-custom">
                    <div className={s.articleWrap}>
                        <div className={s.articleBody}>
                            {article.content
                                .split("\n")
                                .filter((paragraph) => paragraph.trim().length > 0)
                                .map((paragraph, i) => (
                                    <p key={i}>{paragraph}</p>
                                ))}
                        </div>

                        <Link href="/actualites" className="btn-outline-blue">
                            <ArrowLeft size={16} />
                            Retour aux actualités
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
