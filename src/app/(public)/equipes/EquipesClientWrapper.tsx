"use client";

import { useState, useMemo } from "react";
import { TeamsFilter }         from "@/components/public/team/TeamsFilter";
import { TeamCard }            from "@/components/public/team/TeamCard";
import s from "./page.module.scss";
import { TeamWithPlayers } from "@/types";

interface Props {
    initialTeams: TeamWithPlayers[];
}

export function EquipesClientWrapper({ initialTeams }: Props) {
    const [activeTeamId, setActiveTeamId]     = useState<number | "all">("all");

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
                                onClick={() => {}} // No more modal
                            />
                        ))}
                    </div>
                ) : (
                    <div className={s.emptyState}>
                        <p>Aucune équipe trouvée.</p>
                    </div>
                )}

            </div>
        </section>
    );
}
