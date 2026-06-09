import { Metadata } from "next";
import InscriptionPageContent from "./InscriptionPageContent";

export const metadata: Metadata = {
    title: "Inscriptions",
    description: "Inscrivez-vous dès maintenant à Neuilly Basketball pour la saison 2026-2027. Ouvert à tous, enfants et adultes.",
    openGraph: {
        title: "Inscriptions Neuilly Basketball - Saison 2026-2027",
        description: "Rejoignez Neuilly Basketball. Inscriptions en ligne.",
    }
};

export default function InscriptionPage() {
    return <InscriptionPageContent />;
}
