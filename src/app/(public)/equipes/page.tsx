"use client";

import { useState, useMemo } from "react";
import { mockTeams, MockTeam } from "@/lib/mock/teams";
import { TeamsFilter }         from "@/components/public/team/TeamsFilter";
import { TeamCard }            from "@/components/public/team/TeamCard";
import { TeamModal }           from "@/components/public/team/TeamModal";
import s from "./page.module.scss";
import {getCurrentSeason} from "@/lib/utils/season";

export default function EquipesPage() {
    const [activeTeamId, setActiveTeamId]     = useState<number | "all">("all");
    const [selectedTeam, setSelectedTeam]     = useState<MockTeam | null>(null);

    const visibleTeams = useMemo(() =>
            activeTeamId === "all"
                ? mockTeams
                : mockTeams.filter((t) => t.id === activeTeamId),
        [activeTeamId]
    );

    return (
        <main className={s.page}>

            {/* ── Hero ── */}
            <section className={s.hero}>
                <div className={s.heroInner}>
                    <span className={s.heroLabel}>Saison {getCurrentSeason()}</span>
                    <h1 className={s.heroTitle}>
                        Nos <span className={s.accent}>Équipes</span>
                    </h1>
                    <p className={s.heroSub}>
                        Découvrez les joueurs qui représentent Neuilly Basketball
                        à chaque niveau de compétition.
                    </p>
                </div>
            </section>

            {/* ── Content ── */}
            <section className={s.content}>
                <div className={s.container}>

                    <TeamsFilter
                        teams={mockTeams}
                        activeId={activeTeamId}
                        onChange={setActiveTeamId}
                    />

                    <div className={s.grid}>
                        {visibleTeams.map((team) => (
                            <TeamCard
                                key={team.id}
                                team={team}
                                onClick={() => setSelectedTeam(team)}
                            />
                        ))}
                    </div>

                </div>
            </section>

            {/* ── Modal ── */}
            {selectedTeam && (
                <TeamModal
                    team={selectedTeam}
                    onClose={() => setSelectedTeam(null)}
                />
            )}

        </main>
    );
}
