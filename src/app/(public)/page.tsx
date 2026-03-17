import { HeroSection } from "@/components/public/home/HeroSection";
import {ActualitesSection} from "@/components/public/home/ActualitesSection";
import {EquipesSection} from "@/components/public/home/EquipesSection";
import {AgendaSection} from "@/components/public/home/AgendaSection";
import {ClubSection} from "@/components/public/home/ClubSection";
import {PartenairesSection} from "@/components/public/home/PartenairesSection";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <ActualitesSection />
            <EquipesSection />
            <AgendaSection />
            <ClubSection />
            <PartenairesSection />
        </>
    );
}
