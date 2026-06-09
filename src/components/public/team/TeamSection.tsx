import { TeamWithPlayers } from "@/types";
import { PlayerCard } from "@/components/public/player/PlayerCard";

import { Users }      from "lucide-react";
import s from "./TeamSection.module.scss";

interface Props { team: TeamWithPlayers; }

const POSITION_ORDER = ["Meneur", "Arrière", "Ailier", "Ailier fort", "Pivot"];

export function TeamSection({ team }: Props) {
    if (!team.isOnline) {
        return (
            <div className={s.emptyState}>
                <p>Cette équipe n'est pas disponible pour le moment.</p>
            </div>
        );
    }

    if (!team.players || team.players.length === 0) {
        return (
            <div className={s.emptyState}>
                <p>Aucun joueur n'a encore été ajouté à cette équipe.</p>
            </div>
        );
    }

    const sorted = [...team.players].sort((a, b) => {
        const ai = POSITION_ORDER.indexOf(a.position ?? "");
        const bi = POSITION_ORDER.indexOf(b.position ?? "");
        return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
    });

    return (
        <article className={s.section}>

            {/* Header */}
            <header className={s.header}>
                <div className={s.headerLeft}>
                    <div className={s.icon}>
                        <Users size={18} />
                    </div>
                    <div>
                        <h2 className={s.title}>{team.label}</h2>
                        <p className={s.meta}>
                            {team.players.length} joueur{team.players.length > 1 ? "s" : ""}
                        </p>
                    </div>
                </div>
                <div className={s.headerLine} />
            </header>

            {/* Grid joueurs */}
            <div className={s.grid}>
                {sorted.map((player) => (
                    <PlayerCard key={player.id} player={player} />
                ))}
            </div>

        </article>
    );
}
