"use client";

import { MockTeam } from "@/lib/mock/teams";
import { Users }    from "lucide-react";
import s from "./TeamsFilter.module.scss";

interface Props {
    teams:    MockTeam[];
    activeId: number | "all";
    onChange: (id: number | "all") => void;
}

export function TeamsFilter({ teams, activeId, onChange }: Props) {
    return (
        <div className={s.wrapper}>
            <div className={s.inner}>
                <button
                    className={`${s.btn} ${activeId === "all" ? s.active : ""}`}
                    onClick={() => onChange("all")}
                >
                    <Users size={14} />
                    Toutes les équipes
                    <span className={s.count}>{teams.reduce((acc, t) => acc + t.players.length, 0)}</span>
                </button>

                {teams.map((team) => (
                    <button
                        key={team.id}
                        className={`${s.btn} ${activeId === team.id ? s.active : ""}`}
                        onClick={() => onChange(team.id)}
                    >
                        {team.label}
                        <span className={s.count}>{team.players.length}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
