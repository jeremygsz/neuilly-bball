"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users } from "lucide-react";
import s from "./EquipesSection.module.scss";
import {IMG} from "@/lib/mock/images";

// ─── Types ───────────────────────────────────────────────────────────────────
interface Equipe {
    id:       string;
    slug:     string;
    nom:      string;
    categorie: string;
    genre:    "Masculin" | "Féminin" | "Mixte";
    joueurs:  number;
    image:    string;
    niveau:   string;
}

// ─── Mock data ────────────────────────────────────────────────────────────────
const EQUIPES: Equipe[] = [
    { id: "1", slug: "seniors-masculins",  nom: "Seniors Masculins",  categorie: "Seniors", genre: "Masculin", joueurs: 12, image: IMG.equipes.seniorsM,  niveau: "Régional 1" },
    { id: "2", slug: "seniors-feminines",  nom: "Seniors Féminines",  categorie: "Seniors", genre: "Féminin",  joueurs: 10, image: IMG.equipes.seniorsF,  niveau: "Départemental 2" },
    { id: "3", slug: "u17-masculins",      nom: "U17 Masculins",      categorie: "Jeunes",  genre: "Masculin", joueurs: 11, image: IMG.equipes.u17,         niveau: "Régional" },
    { id: "4", slug: "u15-feminines",      nom: "U15 Féminines",      categorie: "Jeunes",  genre: "Féminin",  joueurs: 10, image: IMG.equipes.u15,       niveau: "Départemental" },
    { id: "5", slug: "u13-mixte",          nom: "U13 Mixte",          categorie: "Jeunes",  genre: "Mixte",    joueurs: 14, image: IMG.equipes.u13,         niveau: "Départemental" },
    { id: "6", slug: "u11-mixte",          nom: "U11 Mixte",          categorie: "École",   genre: "Mixte",    joueurs: 16, image: IMG.equipes.ecoleBasket,         niveau: "Loisir" },
];

const GENRE_COLOR: Record<string, string> = {
    Masculin: "blue",
    Féminin:  "pink",
    Mixte:    "purple",
};

// ─── Card ─────────────────────────────────────────────────────────────────────
function EquipeCard({ equipe, index }: { equipe: Equipe; index: number }) {
    const color = GENRE_COLOR[equipe.genre];

    return (
        <motion.div
            className={s.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
            <Link href={`/equipes/${equipe.slug}`} className={s.cardInner}>

                {/* Image */}
                <div className={s.imageWrap}>
                    <Image
                        src={equipe.image}
                        alt={equipe.nom}
                        fill
                        className={s.image}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className={s.imageOverlay} />

                    {/* Genre badge */}
                    <span className={`${s.badge} ${s[`badge--${color}`]}`}>
                        {equipe.genre}
                    </span>

                    {/* Niveau */}
                    <div className={s.niveau}>
                        {equipe.niveau}
                    </div>
                </div>

                {/* Footer */}
                <div className={s.footer}>
                    <div className={s.footerLeft}>
                        <span className={s.nom}>{equipe.nom}</span>
                        <span className={s.joueurs}>
                            <Users size={12} />
                            {equipe.joueurs} joueurs
                        </span>
                    </div>
                    <div className={s.arrow}>
                        <ArrowRight size={16} />
                    </div>
                </div>

            </Link>
        </motion.div>
    );
}

// ─── Section ─────────────────────────────────────────────────────────────────
export function EquipesSection() {
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
                            Nos équipes
                        </span>
                        <h2 className={s.sectionTitle}>Du baby-basket<br />aux seniors</h2>
                    </div>

                    <div className={s.headerRight}>
                        <p className={s.sectionDesc}>
                            12 équipes engagées en compétition,<br />
                            pour tous les niveaux et tous les âges.
                        </p>
                        <Link href="/equipes" className={s.allLink}>
                            Voir toutes les équipes
                            <ArrowRight size={15} />
                        </Link>
                    </div>
                </motion.div>

                {/* Grid */}
                <div className={s.grid}>
                    {EQUIPES.map((equipe, i) => (
                        <EquipeCard key={equipe.id} equipe={equipe} index={i} />
                    ))}
                </div>

            </div>
        </section>
    );
}
