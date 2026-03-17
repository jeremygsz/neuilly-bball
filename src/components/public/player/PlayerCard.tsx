import { MockPlayer } from "@/lib/mock/teams";
import { User }       from "lucide-react";
import s from "./PlayerCard.module.scss";

interface Props { player: MockPlayer; }

const POSITION_COLORS: Record<string, string> = {
    "Meneur":      "#2550C0",
    "Arrière":     "#1B3A8C",
    "Ailier":      "#C8102E",
    "Ailier fort": "#9b1c2e",
    "Pivot":       "#0D1B3E",
};

function getAge(dob: string | null): string | null {
    if (!dob) return null;
    const diff = Date.now() - new Date(dob).getTime();
    return `${Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))} ans`;
}

export function PlayerCard({ player }: Props) {
    const age   = getAge(player.dateOfBirth);
    const color = POSITION_COLORS[player.position ?? ""] ?? "#1B3A8C";
    const initials = `${player.firstname[0]}${player.lastname[0]}`.toUpperCase();

    return (
        <article className={s.card}>

            {/* Numéro */}
            {player.number !== null && (
                <span className={s.number}>#{player.number}</span>
            )}

            {/* Avatar */}
            <div className={s.avatar} style={{ "--color": color } as React.CSSProperties}>
                {player.photo
                    ? <img src={player.photo} alt={`${player.firstname} ${player.lastname}`} className={s.photo} />
                    : <span className={s.initials}>{initials}</span>
                }
            </div>

            {/* Infos */}
            <div className={s.infos}>
                <p className={s.firstname}>{player.firstname}</p>
                <p className={s.lastname}>{player.lastname}</p>

                {player.position && (
                    <span
                        className={s.position}
                        style={{ "--color": color } as React.CSSProperties}
                    >
                        {player.position}
                    </span>
                )}

                {age && <p className={s.age}>{age}</p>}
            </div>

        </article>
    );
}
