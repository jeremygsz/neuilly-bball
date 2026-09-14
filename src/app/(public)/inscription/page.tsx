import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { TeamWithPlayers } from "@/types";
import InscriptionPageContent from "./InscriptionPageContent";

export const metadata: Metadata = {
    title: "Inscriptions",
    description: "Inscrivez-vous dès maintenant à Neuilly Basketball pour la saison 2026-2027. Ouvert à tous, enfants et adultes.",
    openGraph: {
        title: "Inscriptions Neuilly Basketball - Saison 2026-2027",
        description: "Rejoignez Neuilly Basketball. Inscriptions en ligne.",
    }
};

export const dynamic = "force-dynamic";

export default async function InscriptionPage() {
    let teams: TeamWithPlayers[] = [];
    try {
        teams = await prisma.team.findMany({
            where: { isOnline: true },
            orderBy: { id: "asc" },
        }) as unknown as TeamWithPlayers[];
    } catch (error) {
        console.error("Failed to fetch teams:", error);
    }

    return <InscriptionPageContent teams={teams} />;
}
