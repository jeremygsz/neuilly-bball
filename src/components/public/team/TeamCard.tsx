import { MockTeam }            from "@/lib/mock/teams";
import { Users, ChevronRight } from "lucide-react";
import s from "./TeamCard.module.scss";

interface Props {
    team:    MockTeam;
    onClick: () => void;
}

const POSITION_ORDER = ["Meneur", "Arrière", "Ailier", "Ailier fort", "Pivot"];

function getPositionStats(team: MockTeam) {
    return POSITION_ORDER.map((pos) => ({
        label: pos,
        count: team.players.filter((p) => p.position === pos).length,
    })).filter((p) => p.count > 0);
}

// Couleur d'accent par équipe (cyclique)
const TEAM_ACCENTS = ["#C8102E", "#2550C0", "#1B8C4C", "#8B2FC9", "#C87210"];

export function TeamCard({ team, onClick }: Props) {
    const stats  = getPositionStats(team);
    const accent = TEAM_ACCENTS[(team.id - 1) % TEAM_ACCENTS.length];
    const initials = team.label
        .split(" ")
        .map((w) => w[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

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
                        {team.players.length} joueur{team.players.length > 1 ? "s" : ""}
                    </p>
                </div>
            </div>

            {/* Stats postes */}
            <div className={s.stats}>
                {stats.map(({ label, count }) => (
                    <div key={label} className={s.stat}>
                        <span className={s.statCount}>{count}</span>
                        <span className={s.statLabel}>{label}</span>
                    </div>
                ))}
            </div>

            {/* Avatars initiales joueurs */}
            <div className={s.playerAvatars}>
                {team.players.slice(0, 6).map((p) => (
                    <div key={p.id} className={s.playerAvatar} title={`${p.firstname} ${p.lastname}`}>
                        {p.photo
                            ? <img src={p.photo} alt="" />
                            : `${p.firstname[0]}${p.lastname[0]}`
                        }
                    </div>
                ))}
                {team.players.length > 6 && (
                    <div className={`${s.playerAvatar} ${s.playerAvatarMore}`}>
                        +{team.players.length - 6}
                    </div>
                )}
            </div>

            {/* CTA */}
            <div className={s.cta}>
                <span>Voir l'équipe</span>
                <ChevronRight size={16} />
            </div>

        </article>
    );
}
