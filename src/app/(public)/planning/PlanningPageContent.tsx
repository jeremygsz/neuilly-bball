"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import Image from "next/image";
import { MapPin, Info, Camera } from "lucide-react";
import { TeamWithPlayers } from "@/types";
import { PlanningLegend, PlanningRecapTable } from "@/components/public/planning/PlanningRecapTable";
import { CATEGORY_STYLES, DAY_ORDER, HOURS, sites, makeTeamLabelResolver, type PlanningSite } from "@/lib/planning";
import s from "./page.module.scss";

interface Props {
    teams: TeamWithPlayers[];
}

function fadeUp(delay = 0): HTMLMotionProps<"div"> {
    return {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }
    };
}

function formatHour(h: number) {
    return `${h}h`;
}

const siteGalleries = [
    {
        id: "ile-du-pont",
        name: "Complexe sportif de l'Île du Pont",
        address: "Neuilly-sur-Seine",
        photos: [
            { src: "/images/court/COURT.JPG",    alt: "Complexe sportif de l'Île du Pont"  },
            { src: "/images/court/COURT-2.JPG",  alt: "Complexe sportif de l'Île du Pont"  },
            { src: "/images/court/COURT-3.JPG",  alt: "Complexe sportif de l'Île du Pont" },
            { src: "/images/court/COURT-4.JPG",  alt: "Complexe sportif de l'Île du Pont" },
        ],
    },
    {
        id: "koenig",
        name: "Espace Koenig",
        address: "23 Bd du Général Koenig, 92200 Neuilly-sur-Seine",
        photos: [
            { src: "/images/court/koening1.jpeg",   alt: "Espace Koenig" },
            { src: "/images/court/koening2.jpeg", alt: "Espace Koenig" },
            { src: "/images/court/koening3.jpeg", alt: "Espace Koenig" },
            { src: "/images/court/koening4.jpeg", alt: "Espace Koenig" },
        ],
    },
];

function SiteGallery({ site }: { site: (typeof siteGalleries)[number] }) {
    return (
        <div className={s.siteCard}>
            <div className={s.siteHeader}>
                <div className={s.siteIcon}>
                    <Camera size={20} />
                </div>
                <div>
                    <h3 className="font-display">{site.name}</h3>
                    <p>{site.address}</p>
                </div>
            </div>

            <div className={s.photoGrid}>
                {site.photos.map((photo, i) => (
                    <div key={i} className={s.photoWrapper}>
                        <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

function daysForSite(site: PlanningSite) {
    const present = new Set(site.slots.map((slot) => slot.day));
    return DAY_ORDER.filter((day) => present.has(day));
}

function SiteSchedule({ site, teamLabel }: { site: PlanningSite; teamLabel: (teamIds: number[]) => string }) {
    const days = daysForSite(site);

    return (
        <div className={s.siteCard}>
            <div className={s.siteHeader}>
                <div className={s.siteIcon}>
                    <MapPin size={20} />
                </div>
                <div>
                    <h3 className="font-display">{site.name}</h3>
                    <p>{site.address}</p>
                </div>
            </div>

            <div className={s.gridWrapper}>
                <div
                    className={s.weekGrid}
                    style={{
                        gridTemplateColumns: `minmax(110px, 130px) repeat(${HOURS.length}, minmax(48px, 1fr))`,
                        gridTemplateRows: `auto repeat(${days.length}, minmax(52px, auto))`,
                    }}
                >
                    {/* ── Header row ── */}
                    <div className={s.cornerCell} style={{ gridRow: 1, gridColumn: 1 }} />
                    {HOURS.map((h, i) => (
                        <div key={h} className={s.hourLabel} style={{ gridRow: 1, gridColumn: i + 2 }}>
                            {formatHour(h)}
                        </div>
                    ))}

                    {/* ── Day rows (background stripes + labels) ── */}
                    {days.map((day, i) => (
                        <div
                            key={`row-${day}`}
                            className={i % 2 === 0 ? s.dayTrack : `${s.dayTrack} ${s.dayTrackAlt}`}
                            style={{ gridRow: i + 2, gridColumn: `1 / ${HOURS.length + 2}` }}
                        />
                    ))}
                    {days.map((day, i) => (
                        <div key={`label-${day}`} className={s.dayLabel} style={{ gridRow: i + 2, gridColumn: 1 }}>
                            {day}
                        </div>
                    ))}

                    {/* ── Activity bars ── */}
                    {site.slots.map((slot, idx) => {
                        const rowIndex = days.indexOf(slot.day);
                        if (rowIndex === -1) return null;
                        const style = CATEGORY_STYLES[slot.category];
                        const label = slot.teamIds.length ? teamLabel(slot.teamIds) : style.label;
                        if (!label) return null;
                        const colStart = 2 + (slot.start - HOURS[0]);
                        const colEnd = 2 + (slot.end - HOURS[0]);
                        return (
                            <div
                                key={idx}
                                className={s.slotBar}
                                style={{
                                    gridRow: rowIndex + 2,
                                    gridColumn: `${colStart} / ${colEnd}`,
                                    backgroundColor: style.color,
                                    color: style.textColor ?? "#0D1B3E",
                                }}
                            >
                                <span className={s.slotLabel}>{label}</span>
                                <span className={s.slotTime}>
                                    {slot.start}h00 - {slot.end}h00
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default function PlanningPageContent({ teams }: Props) {
    const teamLabel = makeTeamLabelResolver(teams);

    return (
        <main className={s.main}>
            {/* ── Header ── */}
            <section className={s.hero}>
                <div className={s.heroInner}>
                    <motion.span className={s.heroLabel} {...fadeUp(0.1)}>
                        Saison 2026-2027
                    </motion.span>

                    <motion.h1 className={`${s.title} font-display`} {...fadeUp(0.2)}>
                        PLANNING <br />
                        <span>DES CRÉNEAUX</span>
                    </motion.h1>

                    <motion.p className={s.lead} {...fadeUp(0.3)}>
                        Le club s&apos;entraîne sur deux sites à Neuilly-sur-Seine : le Complexe sportif de l&apos;Île du Pont
                        et l&apos;Espace Koenig. Retrouvez ci-dessous le semainier de chaque site, puis le tableau récapitulatif
                        complet de tous les créneaux.
                    </motion.p>
                </div>
            </section>

            <div className={s.lower}>
                <div className={s.bgDecor}>
                    <div className={s.blob1} />
                    <div className={s.blob2} />
                </div>

                <div className="container-custom">
                    <div className={s.content}>
                        {/* ── Semainier par site ── */}
                        <motion.section className={s.scheduleSection} {...fadeUp(0.4)}>
                            <PlanningLegend />

                            <div className={s.sitesStack}>
                                {sites.map((site) => (
                                    <SiteSchedule key={site.id} site={site} teamLabel={teamLabel} />
                                ))}
                            </div>
                        </motion.section>

                        {/* ── Synthèse ── */}
                        <motion.div className={s.synthese} {...fadeUp(0.5)}>
                            <div className={s.syntheseIcon}>
                                <Info size={20} />
                            </div>
                            <div>
                                <h3 className="font-display">Synthèse</h3>
                                <p>
                                    Deux sites sont utilisés : le Complexe sportif de l&apos;Île du Pont et l&apos;Espace Koenig. Côté jeunes,
                                    les équipes sont réparties par tranche d&apos;âge principalement les mardi, mercredi et samedi. Côté adultes :
                                    Basket Entreprise le mardi midi, équipe Loisirs Masculin à Koenig le mardi soir et au Complexe le jeudi soir,
                                    et équipe Loisirs Féminin le vendredi de 18h à 20h.
                                </p>
                            </div>
                        </motion.div>

                        {/* ── Galeries photos des sites ── */}
                        <motion.section className={s.gallerySection} {...fadeUp(0.55)}>
                            <div className={s.galleryHeader}>
                                <h2 className="font-display">Nos Sites</h2>
                                <p>Découvrez nos deux lieux d&apos;entraînement à Neuilly-sur-Seine</p>
                            </div>

                            <div className={s.galleryGrid}>
                                {siteGalleries.map((site) => (
                                    <SiteGallery key={site.id} site={site} />
                                ))}
                            </div>
                        </motion.section>

                        {/* ── Tableau récapitulatif ── */}
                        <motion.section className={s.recapSection} {...fadeUp(0.6)}>
                            <div className={s.recapHeader}>
                                <h2 className="font-display">Tableau récapitulatif</h2>
                                <p>Tous les créneaux, jour par jour, sur les deux sites</p>
                            </div>

                            <PlanningRecapTable teams={teams} />
                        </motion.section>
                    </div>
                </div>
            </div>
        </main>
    );
}
