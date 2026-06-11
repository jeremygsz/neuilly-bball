import { HeroSection } from "@/components/public/home/HeroSection";
import { WelcomeSection } from "@/components/public/home/WelcomeSection";
import {ActualitesSection} from "@/components/public/home/ActualitesSection";
import {EquipesSection} from "@/components/public/home/EquipesSection";
import {AgendaSection} from "@/components/public/home/AgendaSection";
import {ClubSection} from "@/components/public/home/ClubSection";
import {PartenairesSection} from "@/components/public/home/PartenairesSection";

export const dynamic = "force-dynamic";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <WelcomeSection />
            <ActualitesSection />
            <EquipesSection />
            {/*<AgendaSection />*/}
            {/*<ClubSection />*/}
            <PartenairesSection />
        </>
    );
}
