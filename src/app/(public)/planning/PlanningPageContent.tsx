"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { MapPin, Info } from "lucide-react";
import { TeamWithPlayers } from "@/types";
import s from "./page.module.scss";
import {
    CATEGORY_STYLES,
    DAY_ORDER,
    HOURS,
    sites,
    type CategoryKey,
    type PlanningSlot,
    type PlanningSite,
} from "./data";

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

function CategoryLegend() {
    const keys = Object.keys(CATEGORY_STYLES) as CategoryKey[];
    return (
        <div className={s.legend}>
            <span className={s.legendTitle}>Légende :</span>
            {keys.map((key) => (
                <div key={key} className={s.legendItem}>
                    <div className={s.legendColor} style={{ backgroundColor: CATEGORY_STYLES[key].color }} />
                    <span>{CATEGORY_STYLES[key].label}</span>
                </div>
            ))}
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
                        const label = teamLabel(slot.teamIds);
                        if (!label) return null;
                        const style = CATEGORY_STYLES[slot.category];
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

interface RecapRow {
    day: string;
    time: string;
    site: PlanningSite;
    slot: PlanningSlot;
}

function buildRecapRows(): RecapRow[] {
    const rows: RecapRow[] = [];
    for (const site of sites) {
        for (const slot of site.slots) {
            rows.push({
                day: slot.day,
                time: `${String(slot.start).padStart(2, "0")}h00 - ${String(slot.end).padStart(2, "0")}h00`,
                site,
                slot,
            });
        }
    }
    return rows.sort((a, b) => {
        const dayDiff = DAY_ORDER.indexOf(a.day) - DAY_ORDER.indexOf(b.day);
        if (dayDiff !== 0) return dayDiff;
        return a.slot.start - b.slot.start;
    });
}

export default function PlanningPageContent({ teams }: Props) {
    const teamsById = new Map(teams.map((team) => [team.id, team]));

    const teamLabel = (teamIds: number[]) =>
        teamIds
            .map((id) => teamsById.get(id))
            .filter((team): team is TeamWithPlayers => Boolean(team))
            .map((team) => (team.gender === "Mixte" ? team.label : `${team.label} ${team.gender}`))
            .join(" & ");

    const recapRows = buildRecapRows();

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
                            <CategoryLegend />

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

                        {/* ── Tableau récapitulatif ── */}
                        <motion.section className={s.recapSection} {...fadeUp(0.6)}>
                            <div className={s.recapHeader}>
                                <h2 className="font-display">Tableau récapitulatif</h2>
                                <p>Tous les créneaux, jour par jour, sur les deux sites</p>
                            </div>

                            <div className={s.tableWrapper}>
                                <table className={s.recapTable}>
                                    <thead>
                                        <tr>
                                            <th>Jour</th>
                                            <th>Horaires</th>
                                            <th>Lieu</th>
                                            <th>Équipe(s)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {recapRows.map((row, index) => {
                                            const label = teamLabel(row.slot.teamIds);
                                            if (!label) return null;
                                            const style = CATEGORY_STYLES[row.slot.category];
                                            return (
                                                <tr key={index}>
                                                    <td className={s.dayCell}>{row.day}</td>
                                                    <td>{row.time}</td>
                                                    <td>
                                                        <span
                                                            className={`${s.siteBadge} ${row.site.id === "koenig" ? s.siteBadgeKoenig : s.siteBadgePont}`}
                                                        >
                                                            {row.site.id === "koenig" ? "Espace Koenig" : "Île du Pont"}
                                                        </span>
                                                    </td>
                                                    <td className={s.categoryCell}>
                                                        <div className={s.colorTag} style={{ backgroundColor: style.color }} />
                                                        {label}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>

                            <CategoryLegend />
                        </motion.section>
                    </div>
                </div>
            </div>
        </main>
    );
}
