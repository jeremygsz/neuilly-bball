"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Calendar } from "lucide-react";
import s from "./AgendaSection.module.scss";

// ─── Types ───────────────────────────────────────────────────────────────────
interface Evenement {
    id:        string;
    slug:      string;
    type:      "Match" | "Entraînement" | "Événement";
    equipe:    string;
    adversaire?: string;
    domicile?: boolean;
    lieu:      string;
    date:      string;   // ISO
    heure:     string;   // "18:30"
    competition?: string;
}

// ─── Mock data ────────────────────────────────────────────────────────────────
const EVENEMENTS: Evenement[] = [
    {
        id: "1", slug: "seniors-m-vs-levallois",
        type: "Match", equipe: "Seniors Masculins",
        adversaire: "Levallois BC", domicile: true,
        lieu: "Gymnase Paul-Valéry", date: "2025-01-25", heure: "20:00",
        competition: "Régional 1",
    },
    {
        id: "2", slug: "seniors-f-vs-poissy",
        type: "Match", equipe: "Seniors Féminines",
        adversaire: "Poissy Basket", domicile: false,
        lieu: "Salle Poissy Nord", date: "2025-01-26", heure: "15:00",
        competition: "Départemental 2",
    },
    {
        id: "3", slug: "u17-vs-asvel",
        type: "Match", equipe: "U17 Masculins",
        adversaire: "ASVEL U17", domicile: true,
        lieu: "Gymnase Paul-Valéry", date: "2025-02-01", heure: "14:00",
        competition: "Régional U17",
    },
    {
        id: "4", slug: "portes-ouvertes-fevrier",
        type: "Événement", equipe: "Tout le club",
        lieu: "Gymnase Paul-Valéry", date: "2025-02-08", heure: "10:00",
    },
    {
        id: "5", slug: "u13-vs-stade-francais",
        type: "Match", equipe: "U13 Mixte",
        adversaire: "Stade Français U13", domicile: false,
        lieu: "Stade Français — Salle A", date: "2025-02-09", heure: "11:00",
        competition: "Départemental U13",
    },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────
function formatDateFull(iso: string) {
    return new Date(iso).toLocaleDateString("fr-FR", {
        weekday: "short",
        day:     "numeric",
        month:   "short",
    });
}

function formatDateDay(iso: string) {
    return new Date(iso).toLocaleDateString("fr-FR", { day: "numeric" });
}

function formatDateMonth(iso: string) {
    return new Date(iso).toLocaleDateString("fr-FR", { month: "short" });
}

const TYPE_CONFIG = {
    "Match":       { color: "red",    label: "Match" },
    "Entraînement":{ color: "blue",   label: "Training" },
    "Événement":   { color: "orange", label: "Événement" },
};

// ─── Row ──────────────────────────────────────────────────────────────────────
function EvenementRow({ evt, index }: { evt: Evenement; index: number }) {
    const config = TYPE_CONFIG[evt.type];

    return (
        <motion.div
            className={s.row}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
            {/* Date bloc */}
            <div className={s.dateBloc}>
                <span className={s.dateDay}>{formatDateDay(evt.date)}</span>
                <span className={s.dateMonth}>{formatDateMonth(evt.date)}</span>
            </div>

            {/* Séparateur */}
            <div className={s.separator} />

            {/* Contenu */}
            <div className={s.content}>
                <div className={s.contentTop}>
                    <span className={`${s.typeBadge} ${s[`typeBadge--${config.color}`]}`}>
                        {config.label}
                    </span>
                    {evt.competition && (
                        <span className={s.competition}>{evt.competition}</span>
                    )}
                </div>

                <div className={s.matchInfo}>
                    {evt.adversaire ? (
                        <span className={s.matchTitle}>
                            <strong>{evt.equipe}</strong>
                            <span className={s.vs}>vs</span>
                            <strong>{evt.adversaire}</strong>
                        </span>
                    ) : (
                        <span className={s.matchTitle}>
                            <strong>{evt.equipe}</strong>
                        </span>
                    )}
                </div>

                <div className={s.meta}>
                    {evt.domicile !== undefined && (
                        <span className={`${s.domicile} ${evt.domicile ? s["domicile--home"] : s["domicile--away"]}`}>
                            {evt.domicile ? "Domicile" : "Extérieur"}
                        </span>
                    )}
                    <span className={s.metaItem}>
                        <Clock size={12} />
                        {evt.heure}
                    </span>
                    <span className={s.metaItem}>
                        <MapPin size={12} />
                        {evt.lieu}
                    </span>
                </div>
            </div>

            {/* Arrow */}
            <Link href={`/agenda/${evt.slug}`} className={s.rowArrow}>
                <ArrowRight size={15} />
            </Link>
        </motion.div>
    );
}

// ─── Section ─────────────────────────────────────────────────────────────────
export function AgendaSection() {
    return (
        <section className={s.section}>
            <div className={s.container}>

                {/* Header */}
                <motion.div
                    className={s.header}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <span className={s.eyebrow}>
                            <span className={s.eyebrowLine} />
                            Agenda
                        </span>
                        <h2 className={s.sectionTitle}>Prochains matchs<br />& événements</h2>
                    </div>

                    <Link href="/agenda" className={s.allLink}>
                        Agenda complet
                        <ArrowRight size={15} />
                    </Link>
                </motion.div>

                {/* Liste */}
                <div className={s.list}>
                    {EVENEMENTS.map((evt, i) => (
                        <EvenementRow key={evt.id} evt={evt} index={i} />
                    ))}
                </div>

            </div>
        </section>
    );
}
