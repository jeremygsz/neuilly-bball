import { TeamWithPlayers } from "@/types";
import { Users, ChevronRight } from "lucide-react";
import s from "./TeamCard.module.scss";

interface Props {
    team:    TeamWithPlayers;
    onClick: () => void;
}

// Couleur d'accent par équipe (cyclique)
const TEAM_ACCENTS = ["#C8102E", "#2550C0", "#1B8C4C", "#8B2FC9", "#C87210"];

export function TeamCard({ team, onClick }: Props) {
    const accent = TEAM_ACCENTS[(team.id - 1) % TEAM_ACCENTS.length];

    return (
        <article
            className={s.card}
            onClick={onClick}
            style={{ "--accent": accent } as React.CSSProperties}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && onClick()}
            aria-label={`Voir l'équipe ${team.label}`}
        >
            {/* Bande colorée top */}
            <div className={s.stripe} />

            {/* Header card */}
            <div className={s.header}>
                <div className={s.avatar}>
                    <Users size={22} />
                </div>
                <div className={s.meta}>
                    <h2 className={s.title}>{team.label}</h2>
                    <p className={s.playerCount}>
                        {team.gender}
                    </p>
                </div>
            </div>

            {/* CTA */}
            <div className={s.cta}>
                <span>Informations</span>
                <ChevronRight size={16} />
            </div>

        </article>
    );
}
