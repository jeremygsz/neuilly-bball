"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import styles from "./Navbar.module.scss";

const navLinks = [
    { href: "/", label: "Accueil" },
    {
        label: "Le Club",
        children: [
            { href: "/notre-histoire", label: "Notre Histoire" },
            { href: "/equipes", label: "Nos Équipes" },
            { href: "/staff-technique", label: "Notre Staff Technique" },
            { href: "/infrastructure", label: "Infrastructure" },
            { href: "/equipements", label: "Nos Équipements" },
            { href: "/sport-adapte", label: "Sport Adapté" },
            { href: "/actualites", label: "Nos Actualités" },
        ]
    },
    { href: "/stages", label: "Nos Stages" },
    { href: "/boutique", label: "Boutique" },
    { href: "/#", label: "Nos partenaires" },
    { href: "/contact", label: "Contact" },
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
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
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

    // Bloque le défilement de la page en arrière-plan lorsque le menu mobile est ouvert (notamment sur Safari/iOS)
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        };
    }, [isOpen]);

    const isLightPage = pathname?.startsWith("/inscription");

    const headerClass = [
        styles.header,
        scrolled ? styles["header--scrolled"] : styles["header--transparent"],
        (!scrolled && isLightPage) ? styles["header--light"] : "",
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
                        src="/images/logo3d.png"
                        alt="Neuilly Basketball Association"
                        width={60}
                        height={60}
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
                        const hasChildren = "children" in link;
                        const isActive = link.href ? pathname === link.href : link.children?.some(child => pathname === child.href);

                        return (
                            <li
                                key={link.label}
                                className={hasChildren ? styles.navItemWithChildren : ""}
                                onMouseEnter={() => hasChildren && setActiveDropdown(link.label)}
                                onMouseLeave={() => hasChildren && setActiveDropdown(null)}
                            >
                                {link.href ? (
                                    <Link
                                        href={link.href}
                                        className={[
                                            styles.navLink,
                                            isActive ? styles["navLink--active"] : "",
                                        ].join(" ")}
                                    >
                                        {link.label}
                                        {isActive && !hasChildren && (
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
                                ) : (
                                    <div className={[
                                        styles.navLink,
                                        isActive ? styles["navLink--active"] : "",
                                    ].join(" ")} style={{ cursor: 'default' }}>
                                        {link.label}
                                        <ChevronDown size={14} className={styles.chevron} />
                                    </div>
                                )}

                                {hasChildren && link.children && (
                                    <AnimatePresence>
                                        {activeDropdown === link.label && (
                                            <motion.ul
                                                className={styles.dropdown}
                                                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                                                transition={{ duration: 0.2, ease: "easeOut" }}
                                            >
                                                {link.children.map((child) => {
                                                    const isChildActive = pathname === child.href;
                                                    return (
                                                        <li key={child.label}>
                                                            <Link
                                                                href={child.href}
                                                                className={[
                                                                    styles.dropdownLink,
                                                                    isChildActive ? styles["dropdownLink--active"] : "",
                                                                ].join(" ")}
                                                            >
                                                                {child.label}
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                )}
                            </li>
                        );
                    })}
                </ul>

                {/* ── CTA Desktop ── */}
                <div className={styles.cta}>
                    <Link href="/inscription" className={styles.ctaButton}>
                        Adhésion 2026-2027
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
                                const hasChildren = "children" in link;
                                const isActive = link.href ? pathname === link.href : link.children?.some(child => pathname === child.href);
                                const isDropdownOpen = openMobileDropdown === link.label;

                                return (
                                    <motion.li
                                        key={link.label}
                                        custom={i}
                                        variants={itemVariants}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        {link.href ? (
                                            <Link
                                                href={link.href}
                                                className={[
                                                    styles.mobileLink,
                                                    isActive ? styles["mobileLink--active"] : "",
                                                ].join(" ")}
                                            >
                                                {link.label}
                                            </Link>
                                        ) : (
                                            <>
                                                <button
                                                    onClick={() => setOpenMobileDropdown(isDropdownOpen ? null : link.label)}
                                                    className={[
                                                        styles.mobileLink,
                                                        styles.mobileLinkTrigger,
                                                        isActive ? styles["mobileLink--active"] : "",
                                                    ].join(" ")}
                                                >
                                                    {link.label}
                                                    <ChevronDown
                                                        size={18}
                                                        className={styles.mobileChevron}
                                                        style={{ transform: isDropdownOpen ? "rotate(180deg)" : "none" }}
                                                    />
                                                </button>
                                                <AnimatePresence>
                                                    {isDropdownOpen && link.children && (
                                                        <motion.ul
                                                            className={styles.mobileSubList}
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                                        >
                                                            {link.children.map((child) => {
                                                                const isChildActive = pathname === child.href;
                                                                return (
                                                                    <li key={child.label}>
                                                                        <Link
                                                                            href={child.href}
                                                                            className={[
                                                                                styles.mobileSubLink,
                                                                                isChildActive ? styles["mobileSubLink--active"] : "",
                                                                            ].join(" ")}
                                                                        >
                                                                            {child.label}
                                                                        </Link>
                                                                    </li>
                                                                );
                                                            })}
                                                        </motion.ul>
                                                    )}
                                                </AnimatePresence>
                                            </>
                                        )}
                                    </motion.li>
                                );
                            })}

                            <motion.li
                                custom={navLinks.length}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <Link href="/inscription" className={styles.mobileCta}>
                                    Adhésion 2026-2027
                                </Link>
                            </motion.li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
