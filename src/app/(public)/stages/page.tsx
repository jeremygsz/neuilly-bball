import { Metadata } from "next";
import StagesClient from "./StagesClient";
import s from "./page.module.scss";

export const metadata: Metadata = {
    title: "Nos Stages | Neuilly Basketball",
    description: "Inscrivez-vous aux stages de perfectionnement Neuilly Basketball pour l'été 2026. Summer Nocturne et Summer Basketball Camps pour tous les niveaux.",
};

export default function StagesPage() {
    return (
        <main className={s.page}>
            {/* ── Hero ── */}
            <section className={s.hero}>
                <div className={s.heroInner}>
                    <span className={s.heroLabel}>Vacances d'Été 2026</span>
                    <h1 className={s.heroTitle}>
                        Nos <span className={s.accent}>Stages</span>
                    </h1>
                    <p className={s.heroSub}>
                        Progresse, relève des défis et vis ta passion du basketball
                        avec nos coachs experts et du matériel de haut niveau.
                    </p>
                </div>
            </section>

            {/* ── Content ── */}
            <section className={s.content}>
                <div className={s.container}>
                    <StagesClient />
                </div>
            </section>
        </main>
    );
}
