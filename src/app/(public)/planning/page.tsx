import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { TeamWithPlayers } from "@/types";
import PlanningPageContent from "./PlanningPageContent";

export const metadata: Metadata = {
    title: "Planning des créneaux",
    description: "Découvrez le planning des créneaux d'entraînement 2026-2027 de Neuilly Basketball Association, au Complexe sportif de l'Île du Pont et à l'Espace Koenig.",
    openGraph: {
        title: "Planning des créneaux - Neuilly Basketball Association",
        description: "Le semainier complet des entraînements jeunes et adultes, sur nos deux sites.",
    }
};

export const dynamic = "force-dynamic";

export default async function PlanningPage() {
    let teams: TeamWithPlayers[] = [];
    try {
        teams = await prisma.team.findMany({
            where: { isOnline: true },
            orderBy: { id: "asc" },
        }) as unknown as TeamWithPlayers[];
    } catch (error) {
        console.error("Failed to fetch teams:", error);
    }

    return <PlanningPageContent teams={teams} />;
}
