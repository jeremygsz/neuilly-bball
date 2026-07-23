import { prisma } from "@/lib/prisma";
import { getCurrentSeason } from "@/lib/utils/season";
import { EquipesClientWrapper } from "./EquipesClientWrapper";
import { TeamWithPlayers } from "@/types";
import Image from "next/image";
import s from "./page.module.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nos Équipes",
    description: "Découvrez toutes les équipes de Neuilly Basketball : du mini basket aux vétérans.",
};

export const dynamic = "force-dynamic";

export default async function EquipesPage() {
    let teams: TeamWithPlayers[] = [];
    try {
        teams = await prisma.team.findMany({
            where: { isOnline: true },
            orderBy: {
                id: 'asc'
            }
        }) as unknown as TeamWithPlayers[];
        console.log("Teams fetched in production:", teams);
    } catch (error) {
        console.error("Failed to fetch teams:", error);
    }

    return (
        <main className={s.page}>

            {/* ── Hero ── */}
            <section className={s.hero}>
                <div className={s.heroImageWrapper}>
                    <Image
                        src="/images/court/COURT-6.JPG"
                        alt="Terrain de basketball — Neuilly Basketball"
                        fill
                        priority
                        className={s.heroImage}
                        sizes="100vw"
                    />
                    <div className={s.heroOverlay} />
                </div>
                <div className={s.heroContent}>
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
                </div>
            </section>

            <EquipesClientWrapper initialTeams={teams} />

        </main>
    );
}
