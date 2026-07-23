"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, MailOpen, ChevronDown, ChevronUp, Sparkles, Feather } from "lucide-react";
import { Caveat } from "next/font/google";
import s from "./PresidentLetter.module.scss";

const caveat = Caveat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

export default function PresidentLetter() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleLetter = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <section className={s.section}>
            <div className="container-custom">
                {/* ── Banner Card ── */}
                <div 
                    className={`${s.bannerCard} ${isOpen ? s.bannerActive : ""}`}
                    onClick={toggleLetter}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && toggleLetter()}
                >
                    <div className={s.bannerContent}>
                        <div className={s.iconWrapper}>
                            {isOpen ? (
                                <MailOpen className={s.mailIcon} />
                            ) : (
                                <Mail className={s.mailIcon} />
                            )}
                            <span className={s.pulseRing}></span>
                        </div>

                        <div className={s.bannerText}>
                            <div className={s.badge}>
                                <Sparkles size={14} className={s.badgeIcon} />
                                <span>Message officiel</span>
                            </div>
                            <h2 className={s.bannerTitle}>Le Mot du Président</h2>
                            <p className={s.bannerSubtitle}>
                                Une lettre adressée à l’ensemble des joueurs, parents, bénévoles et passionnés du Neuilly Basketball.
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleLetter();
                        }}
                        className={s.toggleButton}
                        aria-expanded={isOpen}
                        aria-label={isOpen ? "Fermer la lettre du Président" : "Ouvrir la lettre du Président"}
                    >
                        <span className={s.btnText}>
                            {isOpen ? "Fermer la lettre" : "Lire la lettre du Président"}
                        </span>
                        <span className={s.btnIconWrapper}>
                            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </span>
                    </button>
                </div>

                {/* ── 3D Envelope & Handwritten Letter Container ── */}
                <div className={`${s.letterWrapper} ${isOpen ? s.letterOpen : ""}`}>
                    <div className={s.envelopeContainer}>
                        {/* Top Envelope Flap (3D Flip Animation) */}
                        <div className={s.envelopeFlap}>
                            <div className={s.flapShape}></div>
                        </div>

                        {/* Wax Seal Crest */}
                        <div 
                            className={s.waxSeal} 
                            onClick={toggleLetter}
                            title={isOpen ? "Replier la lettre" : "Ouvrir la lettre"}
                        >
                            <div className={s.sealInner}>
                                <Feather size={20} className={s.sealIcon} />
                            </div>
                        </div>

                        {/* Paper Sheet (Handwritten Letter) */}
                        <div className={s.paperSheet}>
                            {/* Paper header with 2 Logos */}
                            <div className={s.paperHeader}>
                                <div className={s.logoBox}>
                                    <Image
                                        src="/images/neuilly-logo.svg"
                                        alt="Ville de Neuilly-sur-Seine"
                                        width={120}
                                        height={55}
                                        className={s.logoImage}
                                        priority
                                    />
                                </div>

                                <div className={s.headerCenter}>
                                    <span className={s.associationName}>Neuilly Basketball Association</span>
                                    <span className={s.headerDivider}></span>
                                    <span className={s.letterTag}>Mot du Président</span>
                                </div>

                                <div className={s.logoBox}>
                                    <Image
                                        src="/images/logo3d.png"
                                        alt="Neuilly Basketball 3D Logo"
                                        width={75}
                                        height={75}
                                        className={s.logo3dImage}
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Handwritten Content */}
                            <div className={`${s.handwrittenText} ${caveat.className}`}>
                                <p className={s.salutation}>Bienvenue dans votre salle,</p>
                                <p className={s.salutation}>Bienvenue dans votre club.</p>

                                <p className={s.paragraph}>
                                    Le Neuilly Basketball Association est un club jeune, ambitieux et en plein
                                    développement, né d&apos;une passion profonde pour le basketball et d&apos;un attachement sincère à
                                    la ville de Neuilly-sur-Seine.
                                </p>

                                <p className={s.paragraph}>
                                    Notre projet repose sur une équipe de passionnés, engagés au quotidien pour faire vivre, grandir et rayonner le basket à Neuilly. Éducateurs, bénévoles, dirigeants : tous partagent la même envie de transmettre, de progresser et de construire un club solide, humain et durable.
                                </p>

                                <p className={s.paragraph}>
                                    Ici, nous défendons les valeurs fondamentales du sport :<br />
                                    <strong className={s.valuesHighlight}>le respect, le fair-play, l&apos;engagement, l&apos;esprit d&apos;équipe et le plaisir de jouer ensemble.</strong>
                                </p>

                                <p className={s.paragraph}>
                                    Que vous soyez joueur, parent, visiteur ou simple curieux, vous êtes les bienvenus.
                                </p>

                                <p className={s.paragraph}>
                                    Ce club est le vôtre, un club en devenir, tourné vers l&apos;avenir, avec l&apos;ambition de faire briller le
                                    Basketball à Neuilly et de rassembler autour d&apos;un projet sportif fort et positif.
                                </p>

                                <p className={s.paragraph}>
                                    Nous sommes très fiers de porter ce club et nous ferons toujours le maximum pour qu&apos;il continue à grandir, à transmettre et à inspirer.
                                </p>

                                <p className={s.valediction}>À très bientôt sur les terrains,</p>

                                {/* Handwritten Signature */}
                                <div className={s.signatureBox}>
                                    <div className={s.signatureLine}>
                                        <span className={s.signTitle}>La Présidence</span>
                                        <span className={s.signClub}>Neuilly Basketball Association</span>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom action button */}
                            <div className={s.paperFooter}>
                                <button
                                    onClick={toggleLetter}
                                    className={s.closePaperBtn}
                                >
                                    <ChevronUp size={18} />
                                    Replier la lettre
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
