import { prisma } from "@/lib/prisma";
import { getCurrentSeason } from "@/lib/utils/season";
import { EquipesClientWrapper } from "./EquipesClientWrapper";
import { TeamWithPlayers } from "@/types";
import s from "./page.module.scss";

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

            <EquipesClientWrapper initialTeams={teams} />

        </main>
    );
}
