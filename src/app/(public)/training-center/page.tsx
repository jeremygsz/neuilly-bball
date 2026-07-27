import { Metadata } from "next";
import { TrainingCenterPageClient } from "@/components/public/training-center/TrainingCenterPageClient";

export const metadata: Metadata = {
    title: "NBHPC | Neuilly Basketball",
    description:
        "Votre camp d'entraînement privé au cœur de Paris. Infrastructure de basket haut de niveau pour joueurs NBA, EuroLeague, Betclic Élite, Pro B, NCAA et internationaux.",
};

export default function TrainingCenterPage() {
    return <TrainingCenterPageClient />;
}
