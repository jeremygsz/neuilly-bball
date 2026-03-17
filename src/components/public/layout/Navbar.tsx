"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.scss";

const navLinks = [
    { href: "/",              label: "Accueil"               },
    { href: "/equipes",       label: "Équipes"               },
    { href: "/actualites",    label: "À la une"              },
    { href: "/stade",         label: "Stade & Entraînements" },
    { href: "/contact",       label: "Contact"               },
];

const headerVariants = {
    hidden:  { y: -80, opacity: 0 },
    visible: { y: 0,   opacity: 1,
        transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const } },
};

const mobileMenuVariants = {
    hidden:  { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto",
        transition: { duration: 0.32, ease: [0.4, 0, 0.2, 1] as const } },
    exit:    { opacity: 0, height: 0,
        transition: { duration: 0.24, ease: [0.4, 0, 0.2, 1] as const } },
};

const itemVariants = {
    hidden:  { x: -16, opacity: 0 },
    visible: (i: number) => ({
        x: 0, opacity: 1,
        transition: { delay: i * 0.055, duration: 0.3, ease: [0.34, 1.56, 0.64, 1] as const },
    }),
};


export function Navbar() {
    const [isOpen,   setIsOpen]   = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const id = setTimeout(() => setIsOpen(false), 0);
        return () => clearTimeout(id);
    }, [pathname]);

    const headerClass = [
        styles.header,
        scrolled ? styles["header--scrolled"] : styles["header--transparent"],
    ].join(" ");

    return (
        <motion.header
            className={headerClass}
            variants={headerVariants}
            initial="hidden"
            animate="visible"
        >
            <nav className={styles.nav}>

                {/* ── Logo ── */}
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/images/logo.jpeg"
                        alt="Neuilly Basketball Association"
                        width={44}
                        height={44}
                        className={styles.logoImage}
                        priority
                    />
                    <div className={styles.logoText}>
                        <span>NEUILLY</span>
                        <span>Basketball Association</span>
                    </div>
                </Link>

                {/* ── Desktop links ── */}
                <ul className={styles.navList}>
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={[
                                        styles.navLink,
                                        isActive ? styles["navLink--active"] : "",
                                    ].join(" ")}
                                >
                                    {link.label}
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-underline"
                                            style={{
                                                position: "absolute",
                                                bottom: 2,
                                                left: "1rem",
                                                right: "1rem",
                                                height: 2,
                                                background: "#C8102E",
                                                borderRadius: 2,
                                            }}
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* ── CTA Desktop ── */}
                <div className={styles.cta}>
                    <Link href="/contact" className={styles.ctaButton}>
                        Nous rejoindre
                    </Link>
                </div>

                {/* ── Burger ── */}
                <button
                    className={styles.burger}
                    onClick={() => setIsOpen((v) => !v)}
                    aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    aria-expanded={isOpen}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                            key={isOpen ? "close" : "open"}
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0,   opacity: 1 }}
                            exit={{    rotate:  90, opacity: 0 }}
                            transition={{ duration: 0.18 }}
                            style={{ display: "flex" }}
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </motion.span>
                    </AnimatePresence>
                </button>
            </nav>

            {/* ── Mobile menu ── */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <ul className={styles.mobileList}>
                            {navLinks.map((link, i) => {
                                const isActive = pathname === link.href;
                                return (
                                    <motion.li
                                        key={link.href}
                                        custom={i}
                                        variants={itemVariants}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        <Link
                                            href={link.href}
                                            className={[
                                                styles.mobileLink,
                                                isActive ? styles["mobileLink--active"] : "",
                                            ].join(" ")}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.li>
                                );
                            })}

                            <motion.li
                                custom={navLinks.length}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <Link href="/contact" className={styles.mobileCta}>
                                    Nous rejoindre
                                </Link>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
