"use client";

import { useState, useMemo } from "react";
import { TeamsFilter }         from "@/components/public/team/TeamsFilter";
import { TeamCard }            from "@/components/public/team/TeamCard";
import { TeamModal }           from "@/components/public/team/TeamModal";
import s from "./page.module.scss";

// On définit un type local compatible avec ce que renvoie Prisma
import { Team, Player } from "@prisma/client";

export type TeamWithPlayers = Team & {
    players: Player[];
};

interface Props {
    initialTeams: TeamWithPlayers[];
}

export function EquipesClientWrapper({ initialTeams }: Props) {
    const [activeTeamId, setActiveTeamId]     = useState<number | "all">("all");
    const [selectedTeam, setSelectedTeam]     = useState<TeamWithPlayers | null>(null);

    const visibleTeams = useMemo(() =>
            activeTeamId === "all"
                ? initialTeams
                : initialTeams.filter((t) => t.id === activeTeamId),
        [activeTeamId, initialTeams]
    );

    return (
        <section className={s.content}>
            <div className={s.container}>

                <TeamsFilter
                    teams={initialTeams}
                    activeId={activeTeamId}
                    onChange={setActiveTeamId}
                />

                {visibleTeams.length > 0 ? (
                    <div className={s.grid}>
                        {visibleTeams.map((team) => (
                            <TeamCard
                                key={team.id}
                                team={team}
                                onClick={() => setSelectedTeam(team)}
                            />
                        ))}
                    </div>
                ) : (
                    <div className={s.emptyState}>
                        <p>Aucune équipe trouvée.</p>
                    </div>
                )}

            </div>

            {/* ── Modal ── */}
            {selectedTeam && (
                <TeamModal
                    team={selectedTeam}
                    onClose={() => setSelectedTeam(null)}
                />
            )}
        </section>
    );
}
