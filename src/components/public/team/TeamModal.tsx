"use client";

import { useEffect, useRef } from "react";
import { MockTeam }          from "@/lib/mock/teams";
import { PlayerCard }        from "@/components/public/player/PlayerCard";
import { X, Users }          from "lucide-react";
import { createPortal }      from "react-dom";
import s from "./TeamModal.module.scss";

interface Props {
    team:    MockTeam;
    onClose: () => void;
}

const POSITION_ORDER = ["Meneur", "Arrière", "Ailier", "Ailier fort", "Pivot"];

export function TeamModal({ team, onClose }: Props) {
    const overlayRef = useRef<HTMLDivElement>(null);

    // Ferme sur Escape
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handler);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handler);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    // Ferme sur click overlay
    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === overlayRef.current) onClose();
    };

    const sorted = [...team.players].sort((a, b) => {
        const ai = POSITION_ORDER.indexOf(a.position ?? "");
        const bi = POSITION_ORDER.indexOf(b.position ?? "");
        return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
    });

    return createPortal(
        <div
            className={s.overlay}
            ref={overlayRef}
            onClick={handleOverlayClick}
            role="dialog"
            aria-modal="true"
            aria-label={`Équipe ${team.label}`}
        >
            <div className={s.modal}>

                {/* ── Header ── */}
                <header className={s.header}>
                    <div className={s.headerLeft}>
                        <div className={s.headerIcon}>
                            <Users size={20} />
                        </div>
                        <div>
                            <h2 className={s.title}>{team.label}</h2>
                            <p className={s.subtitle}>
                                {team.players.length} joueur{team.players.length > 1 ? "s" : ""}
                                &nbsp;— Saison 2024 / 2025
                            </p>
                        </div>
                    </div>

                    <button
                        className={s.closeBtn}
                        onClick={onClose}
                        aria-label="Fermer"
                    >
                        <X size={18} />
                    </button>
                </header>

                {/* ── Body ── */}
                <div className={s.body}>
                    {/* Regroupement par poste */}
                    {POSITION_ORDER.map((pos) => {
                        const group = sorted.filter((p) => p.position === pos);
                        if (!group.length) return null;
                        return (
                            <div key={pos} className={s.group}>
                                <div className={s.groupLabel}>
                                    <span>{pos}</span>
                                    <span className={s.groupCount}>{group.length}</span>
                                </div>
                                <div className={s.grid}>
                                    {group.map((player) => (
                                        <PlayerCard key={player.id} player={player} />
                                    ))}
                                </div>
                            </div>
                        );
                    })}

                    {/* Joueurs sans poste */}
                    {(() => {
                        const noPos = sorted.filter((p) => !p.position);
                        if (!noPos.length) return null;
                        return (
                            <div className={s.group}>
                                <div className={s.groupLabel}>
                                    <span>Poste non défini</span>
                                </div>
                                <div className={s.grid}>
                                    {noPos.map((player) => (
                                        <PlayerCard key={player.id} player={player} />
                                    ))}
                                </div>
                            </div>
                        );
                    })()}
                </div>

            </div>
        </div>,
        document.body
    );
}
