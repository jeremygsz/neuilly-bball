"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, Calendar, Users, Trophy } from "lucide-react";
import s from "./page.module.scss";

function fadeUp(delay = 0): HTMLMotionProps<"div"> {
    return {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }
    };
}

export default function InscriptionPage() {
    return (
        <main className={s.main}>
            {/* ── Background Elements ── */}
            <div className={s.bgDecor}>
                <div className={s.blob1} />
                <div className={s.blob2} />
            </div>

            <div className="container-custom">
                <div className={s.content}>
                    {/* ── Header ── */}
                    <div className={s.header}>
                        <motion.div className="badge-red" {...fadeUp(0.1)}>
                            Saison 2026-2027
                        </motion.div>
                        
                        <motion.h1 className={`${s.title} font-display`} {...fadeUp(0.2)}>
                            INSCRIPTIONS <br />
                            <span className="">OUVERTES !</span>
                        </motion.h1>

                        <motion.div className={`${s.brush} font-display`} {...fadeUp(0.25)}>
                            POUR TOUS
                        </motion.div>
                        
                        <motion.p className={s.lead} {...fadeUp(0.3)}>
                            Rejoins la Neuilly Basketball Association et viens vivre ta passion du basket au cœur de l'équipe !
                        </motion.p>
                    </div>

                    {/* ── CTA Card ── */}
                    <motion.div className={s.ctaCard} {...fadeUp(0.4)}>
                        <div className={s.ctaInner}>
                            <div className={s.ctaText}>
                                <h2 className="font-display">INSCRIS-TOI DÈS MAINTENANT !</h2>
                                <p>Les inscriptions se font exclusivement en ligne via la plateforme SportEasy.</p>
                            </div>
                            <Link 
                                href="https://neuilly-basketball-association.sporteasy.net/collections/49026/" 
                                target="_blank" 
                                className="btn-primary"
                            >
                                <span>Accéder au formulaire</span>
                                <ExternalLink size={18} />
                            </Link>
                        </div>
                    </motion.div>

                    {/* ── Info Grid (Inspired by ww.jpeg) ── */}
                    <div className={s.infoGrid}>
                        <motion.div className={s.infoItem} {...fadeUp(0.5)}>
                            <div className={s.iconWrapper}>
                                <Users size={24} />
                            </div>
                            <div>
                                <h3 className="font-display">POUR TOUS</h3>
                                <p>Filles & Garçons de toutes catégories.</p>
                            </div>
                        </motion.div>

                        <motion.div className={s.infoItem} {...fadeUp(0.6)}>
                            <div className={s.iconWrapper}>
                                <Trophy size={24} />
                            </div>
                            <div>
                                <h3 className="font-display">PROGRESSION</h3>
                                <p>Encadrement de qualité et plaisir de jeu.</p>
                            </div>
                        </motion.div>

                        <motion.div className={s.infoItem} {...fadeUp(0.7)}>
                            <div className={s.iconWrapper}>
                                <Calendar size={24} />
                            </div>
                            <div>
                                <h3 className="font-display">FLEXIBILITÉ</h3>
                                <p>Plannings adaptés et ateliers le samedi.</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* ── Explanatory Text ── */}
                    <motion.div className={s.textSection} {...fadeUp(0.8)}>
                        <h2 className="font-display">Informations & Modalités</h2>
                        <div className={s.textContainer}>
                            <div className={s.scrollContent}>
                                <p>Bonjour à toutes et à tous,</p>
                                <p>Nous avons le plaisir de vous annoncer l’ouverture officielle des inscriptions pour la saison 2026-2027 de Neuilly Basketball Association.</p>
                                <p>Avant toute chose, nous souhaitons remercier chaleureusement l’ensemble des familles, joueurs et adhérents qui nous ont accordé leur confiance cette saison. Depuis la création du club, nous avons eu la chance de connaître un développement rapide et de recevoir un très grand nombre de demandes, ce qui nous encourage à poursuivre notre projet avec toujours autant d’énergie et de passion.</p>
                                
                                <p><strong>Priorité aux adhérents</strong></p>
                                <p>Les adhérents de la saison 2025-2026 bénéficient naturellement d'une priorité de réinscription. Toutefois, compte tenu du nombre important de demandes déjà enregistrées pour la saison prochaine, nous invitons toutes les familles souhaitant rejoindre ou poursuivre l'aventure avec nous à finaliser leur inscription dans les meilleurs délais.</p>

                                <p><strong>Notre Philosophie</strong></p>
                                <p>Pour la saison 2026-2027, nous poursuivrons cette dynamique avec la même philosophie : proposer un basketball accessible, formateur, convivial et centré avant tout sur le plaisir de jouer. Notre priorité reste le développement des joueurs, l'apprentissage des fondamentaux, la progression individuelle et l'épanouissement de chacun dans un cadre bienveillant, structuré et respectueux.</p>

                                <p><strong>Une immersion dans le haut niveau</strong></p>
                                <p>Au-delà des entraînements hebdomadaires, nous souhaitons également proposer à nos adhérents une véritable immersion dans l'univers du basketball. Grâce aux relations développées au fil des années dans le monde du basket français et international, les enfants auront régulièrement l'opportunité de croiser des joueurs professionnels, d'anciens internationaux ou encore des personnalités reconnues du basketball.</p>
                                <p>Il arrive également que certains joueurs de haut niveau recherchent ponctuellement un environnement calme, sécurisé et discret pour effectuer des séances complémentaires ou maintenir leur condition physique lors de leurs périodes de repos, d'intersaison ou de vacances. Nous essayons d'organiser des moments d'échange permettant aux jeunes de rencontrer ces sportifs et de partager leur expérience.</p>

                                <p><strong>Stages de vacances</strong></p>
                                <p>Neuilly Basketball Association organisera tout au long de l'année des stages pendant les vacances scolaires. Ces stages sont indépendants de la cotisation annuelle et permettent de bénéficier d'un programme intensif mêlant perfectionnement technique et activités ludiques.</p>

                                <p><strong>Investissements et Matériel</strong></p>
                                <p>Nous avons fait l'acquisition de machines de tir, de matériel spécifique dédié à l'apprentissage du dribble et de la coordination, ainsi que de véritables ballons de compétition. Nous avons fait le choix d'investir dès la première année dans des équipements que l'on retrouve habituellement dans des structures de haut niveau.</p>

                                <p><strong>Ateliers du samedi</strong></p>
                                <p>Les membres du club peuvent participer le samedi après-midi à des ateliers de basketball à partir de 15h30. Ces ateliers constituent une opportunité supplémentaire de pratique, axée sur les fondamentaux : dribble, tir, passes et coordination.</p>

                                <p><strong>Validation de l'inscription</strong></p>
                                <p>Une place est considérée comme réservée uniquement lorsque :</p>
                                <ul>
                                    <li>Le formulaire d'inscription a été complété ;</li>
                                    <li>Le certificat médical autorisant la pratique du basketball a été transmis (avant le 10/09/2026) ;</li>
                                    <li>Le règlement a été effectué et validé par le club.</li>
                                </ul>

                                <p><strong>Affiliation FFBB</strong></p>
                                <p>Neuilly Basketball Association est un club officiellement affilié à la Fédération Française de Basketball (FFBB). Chaque adhérent bénéficie ainsi d'une licence fédérale officielle, qu'il s'agisse d'une licence Loisirs ou d'une licence
                                    Compétition selon la catégorie et l'activité pratiquée. Cette affiliation garantit
                                    un encadrement conforme aux exigences de la fédération ainsi qu'une pratique
                                    du basketball dans un cadre reconnu et sécurisé.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
