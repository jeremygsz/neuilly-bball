"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";
import s from "./PlanningCtaSection.module.scss";

export function PlanningCtaSection() {
    return (
        <section className={s.section}>
            <div className={s.container}>
                <motion.div
                    className={s.card}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className={s.icon}>
                        <CalendarDays size={28} />
                    </div>
                    <div className={s.text}>
                        <h2 className="font-display">Le planning des créneaux</h2>
                        <p>Retrouvez tous les horaires d&apos;entraînement, jeunes et adultes, sur nos deux sites.</p>
                    </div>
                    <Link href="/planning" className={s.button}>
                        <span>Voir le planning</span>
                        <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
