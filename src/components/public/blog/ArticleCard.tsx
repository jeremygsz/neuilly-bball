import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Tag } from "lucide-react";
import s from "./ArticleCard.module.scss";
import * as m from "framer-motion/client";
import { Post } from "@prisma/client";

interface Props {
    article: Post;
    index: number;
}

const CATEGORY_COLORS: Record<string, string> = {
    Résultats:  "red",
    Club:       "blue",
    Événement:  "orange",
};

const DEFAULT_IMAGE = "/images/logo3d.png";
const DEFAULT_CATEGORY = "Club";

function formatDate(date: Date) {
    return date.toLocaleDateString("fr-FR", {
        day:   "numeric",
        month: "long",
        year:  "numeric",
    });
}

export function ArticleCard({ article, index }: Props) {
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
            <Link href={`/actualites/${article.slug}`} className={s.cardImageWrap}>
                <Image
                    src={article.picture || DEFAULT_IMAGE}
                    alt={article.title}
                    fill
                    className={s.cardImage}
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className={s.cardImageOverlay} />
                <span className={`${s.cardBadge} ${s[`cardBadge--${color}`]}`}>
                    <Tag size={11} />
                    {category}
                </span>
            </Link>

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
