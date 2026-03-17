import Link from "next/link";
import { BallIcon } from "@/components/public/icons/BallIcon";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import s from "./Footer.module.scss";

const footerLinks = {
    club: [
        { href: "/",           label: "Accueil"               },
        { href: "/equipes",    label: "Nos Équipes"           },
        { href: "/actualites", label: "À la une"              },
        { href: "/stade",      label: "Stade & Entraînements" },
        { href: "/contact",    label: "Contact"               },
    ],
    infos: [
        { href: "/mentions-legales",          label: "Mentions légales"             },
        { href: "/politique-confidentialite", label: "Politique de confidentialité" },
        { href: "/rgpd",                      label: "RGPD"                         },
    ],
};

const socials = [
    { href: "https://facebook.com",  icon: Facebook,  label: "Facebook"  },
    { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
    { href: "https://youtube.com",   icon: Youtube,   label: "YouTube"   },
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={s.footer}>

            {/* ── Main ── */}
            <div className={s.main}>
                <div className={s.grid}>

                    {/* Colonne 1 — Brand */}
                    <div className={s.brand}>
                        <Link href="/" className={s.logo}>
                            <div className={s.logoIcon}>
                                <BallIcon size={22} />
                            </div>
                            <div className={s.logoText}>
                                <span className={s.logoName}>NEUILLY</span>
                                <span className={s.logoSub}>Basketball</span>
                            </div>
                        </Link>

                        <p className={s.desc}>
                            Club de basketball de Neuilly-sur-Seine.
                            Rejoignez-nous pour vivre votre passion du basket
                            dans une ambiance familiale et compétitive.
                        </p>

                        <div className={s.socials}>
                            {socials.map(({ href, icon: Icon, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className={s.socialBtn}
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Colonne 2 — Le Club */}
                    <div className={s.col}>
                        <h3 className={s.colTitle}>Le Club</h3>
                        <ul className={s.links}>
                            {footerLinks.club.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className={s.link}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Colonne 3 — Informations */}
                    <div className={s.col}>
                        <h3 className={s.colTitle}>Informations</h3>
                        <ul className={s.links}>
                            {footerLinks.infos.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className={s.link}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Colonne 4 — Contact */}
                    <div className={s.col}>
                        <h3 className={s.colTitle}>Contact</h3>
                        <ul className={s.contactList}>
                            <li className={s.contactItem}>
                                <MapPin size={15} className={s.contactIcon} />
                                <span>
                                    Gymnase Municipal<br />
                                    92200 Neuilly-sur-Seine
                                </span>
                            </li>
                            <li>
                                <a href="tel:+33123456789" className={s.contactLink}>
                                    <Phone size={15} className={s.contactIcon} />
                                    +33 1 23 45 67 89
                                </a>
                            </li>
                            <li>
                                <a href="mailto:contact@neuilly-basketball.fr" className={s.contactLink}>
                                    <Mail size={15} className={s.contactIcon} />
                                    contact@neuilly-basketball.fr
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* ── Bottom bar ── */}
            <div className={s.bottom}>
                <div className={s.bottomInner}>
                    <p className={s.copyright}>
                        © {currentYear} Neuilly Basketball — Tous droits réservés.
                    </p>
                    <p className={s.madeWith}>
                        Fait avec ❤️ pour le basket
                    </p>
                </div>
            </div>

        </footer>
    );
}
