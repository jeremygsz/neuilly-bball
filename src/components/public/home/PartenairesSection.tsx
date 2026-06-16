"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import s from "./PartenairesSection.module.scss";

const PARTENAIRES = [
    {
        nom: "Adidas",
        img: "/images/partner/adidas.svg",
        desc: "Équipementier officiel",
    },
    {
        nom: "Molten",
        img: "/images/partner/molten.svg",
        desc: "Ballon officiel",
    },
    {
        nom: "Spalding",
        img: "/images/partner/spalding.svg",
        desc: "Équipementier technique",
    },
    {
        nom: "Wilson",
        img: "/images/partner/wilson.svg",
        desc: "Partenaire technique",
    },
    {
        nom: "Noah Basketball",
        img: "/images/partner/noah.svg",
        desc: "Analyse de tir",
    },
    {
        nom: "Dr Dish",
        img: "/images/partner/drdish.svg",
        desc: "Machine de tir",
    },
];

export function PartenairesSection() {
    return (
        <section className={s.section}>
            <div className={s.container}>

                {/* ── Header ── */}
                <motion.div
                    className={s.header}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className={s.label}>Partenaires Techniques</span>
                    <h2 className={s.title}>Ils nous font <span className={s.accent}>Confiance</span></h2>
                    <p className={s.subtitle}>
                        Neuilly Basketball est fier de collaborer avec les plus grands 
                        équipementiers et solutions technologiques du monde du basket.
                    </p>
                </motion.div>

                {/* ── Logo Grid ── */}
                <div className={s.grid}>
                    {PARTENAIRES.map((p, i) => (
                        <motion.div
                            key={p.nom}
                            className={s.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                        >
                            <div className={s.logoWrap}>
                                <Image
                                    src={p.img}
                                    alt={p.nom}
                                    fill
                                    className={s.logo}
                                    sizes="(max-width: 768px) 50vw, 250px"
                                />
                            </div>
                            <div className={s.cardInfo}>
                                <p className={s.nom}>{p.nom}</p>
                                <p className={s.desc}>{p.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
