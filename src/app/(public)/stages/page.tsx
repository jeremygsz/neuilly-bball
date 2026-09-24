import { Metadata } from "next";
import StagesClient from "./StagesClient";
import s from "./page.module.scss";

export const metadata: Metadata = {
    title: "Nos Stages | Neuilly Basketball",
    description: "Inscrivez-vous aux stages de perfectionnement Neuilly Basketball. Basketball Camps pour tous les niveaux.",
};

export default function StagesPage() {
    return (
        <main className={s.page}>
            {/* ── Hero ── */}
            <section className={s.hero}>
                <div className={s.heroInner}>
                    <h1 className={s.heroTitle}>
                        Nos <span className={s.accent}>Stages</span>
                    </h1>
                    <p className={s.heroSub}>
                        Tout au long de l’année nous proposons des stages pendants les vacances scolaires et les grandes vacances d’été.
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
