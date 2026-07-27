"use client";

import { useState, useEffect } from "react";
import { Send, Loader2, Check, X, ChevronLeft, ChevronRight } from "lucide-react";
import { submitTrainingCenter } from "@/app/actions/trainingCenter";
import { Lang } from "./LanguageContext";
import s from "./TrainingCenterForm.module.scss";

// ─── Translations ──────────────────────────────────────────────────────────────

const ft = {
    fr: {
        ctaBadge: "Privatisation & Accès Élite",
        ctaTitle: "Prêt à planifier votre session ?",
        ctaDesc: "Que vous soyez un joueur professionnel, un agent ou un club, soumettez votre projet d'entraînement. Nos installations sont privatisables en toute confidentialité pour répondre à vos exigences de haut niveau.",
        ctaBtn: "Faire une demande de privatisation",

        formTitle: "Demande d'Accès Privatise",
        formSubtitle: "Notre direction technique étudiera votre dossier en toute discrétion.",

        successTitle: "Demande Envoyée !",
        closeWindow: "Fermer la fenêtre",
        closeModal: "Fermer la modal",

        steps: [
            { num: 1, label: "Identité" },
            { num: 2, label: "Profil" },
            { num: 3, label: "Projet" },
            { num: 4, label: "Services" },
        ],

        step1Title: "Étape 1 : Vos coordonnées",
        firstnameLabel: "Prénom *",
        firstnamePlaceholder: "Ex: Jean",
        lastnameLabel: "Nom *",
        lastnamePlaceholder: "Ex: Dupont",
        emailLabel: "Adresse Email *",
        emailPlaceholder: "Ex: contact@agency.com",
        phoneLabel: "Téléphone",
        phonePlaceholder: "Ex: +33 6 12 34 56 78",

        step2Title: "Étape 2 : Profil sportif",
        clubLabel: "Club / Organisation *",
        clubPlaceholder: "Ex: Dallas Mavericks, ASVEL, Free Agent...",
        leagueLabel: "Championnat / Niveau *",
        leaguePlaceholder: "Ex: NBA, EuroLeague, Betclic Élite, NCAA...",
        playersCountLabel: "Nombre de Joueurs *",
        players1: "1 joueur (Individuel)",
        players2: "2 à 6 joueurs (Small Group)",
        players3: "7 joueurs ou plus (Team Camp)",

        step3Title: "Étape 3 : Votre projet de session",
        datesLabel: "Dates Souhaitées *",
        datesPlaceholder: "Ex: Du 15 au 25 Juillet 2026",
        objectivesLabel: "Objectifs de la session (plusieurs choix possibles)",
        objectives: [
            { val: "Off Season", label: "Off Season Program" },
            { val: "Shooting", label: "Shooting Lab" },
            { val: "Préparation physique", label: "Préparation Physique" },
            { val: "Reprise", label: "Reprise / Post-blessure" },
            { val: "Team Camp", label: "Team Camp" },
            { val: "Recovery", label: "Récupération & Soins" },
            { val: "Autre", label: "Autre" },
        ],

        step4Title: "Étape 4 : Services complémentaires & description",
        servicesLabel: "Services & Équipements souhaités",
        services: [
            { val: "Coach individuel", label: "Coach de basket individuel" },
            { val: "Préparateur physique", label: "Préparateur physique dédié" },
            { val: "Machine Dr. Dish", label: "Machine de tir Dr. Dish" },
            { val: "Bain froid", label: "Accès Bain Froid (Cryo)" },
            { val: "Sauna", label: "Accès Sauna" },
            { val: "Service boissons / snacks", label: "Nutrition (Boissons & Collation)" },
            { val: "Analyse vidéo", label: "Captation & Analyse vidéo" },
            { val: "Récupération active / Kiné", label: "Kiné / Ostéopathe sur demande" },
            { val: "Transport", label: "Transferts VTC / Chauffeur privé" },
            { val: "Hébergement", label: "Recherche d'hébergement premium" },
        ],
        descriptionLabel: "Description de votre projet *",
        descriptionPlaceholder: "Précisez vos besoins particuliers, votre staff habituel, vos contraintes de confidentialité...",

        btnBack: "Retour",
        btnNext: "Suivant",
        btnSending: "Envoi sécurisé...",
        btnSubmit: "Envoyer ma demande",
    },

    en: {
        ctaBadge: "Privatization & Elite Access",
        ctaTitle: "Ready to plan your session?",
        ctaDesc: "Whether you are a professional player, an agent, or a club, submit your training project. Our facilities can be privately booked in full confidentiality to meet your high-performance requirements.",
        ctaBtn: "Submit a privatization request",

        formTitle: "Private Access Request",
        formSubtitle: "Our technical staff will review your application in complete discretion.",

        successTitle: "Request Sent!",
        closeWindow: "Close window",
        closeModal: "Close modal",

        steps: [
            { num: 1, label: "Identity" },
            { num: 2, label: "Profile" },
            { num: 3, label: "Project" },
            { num: 4, label: "Services" },
        ],

        step1Title: "Step 1: Your contact details",
        firstnameLabel: "First name *",
        firstnamePlaceholder: "Ex: John",
        lastnameLabel: "Last name *",
        lastnamePlaceholder: "Ex: Smith",
        emailLabel: "Email Address *",
        emailPlaceholder: "Ex: contact@agency.com",
        phoneLabel: "Phone",
        phonePlaceholder: "Ex: +1 310 000 0000",

        step2Title: "Step 2: Athletic profile",
        clubLabel: "Club / Organization *",
        clubPlaceholder: "Ex: Dallas Mavericks, Valencia, Free Agent...",
        leagueLabel: "League / Level *",
        leaguePlaceholder: "Ex: NBA, EuroLeague, NCAA, G-League...",
        playersCountLabel: "Number of Players *",
        players1: "1 player (Individual)",
        players2: "2 to 6 players (Small Group)",
        players3: "7+ players (Team Camp)",

        step3Title: "Step 3: Your session project",
        datesLabel: "Preferred Dates *",
        datesPlaceholder: "Ex: July 15–25, 2026",
        objectivesLabel: "Session objectives (multiple choices allowed)",
        objectives: [
            { val: "Off Season", label: "Off Season Program" },
            { val: "Shooting", label: "Shooting Lab" },
            { val: "Préparation physique", label: "Physical Conditioning" },
            { val: "Reprise", label: "Return to Play / Post-injury" },
            { val: "Team Camp", label: "Team Camp" },
            { val: "Recovery", label: "Recovery & Care" },
            { val: "Autre", label: "Other" },
        ],

        step4Title: "Step 4: Additional services & description",
        servicesLabel: "Desired Services & Equipment",
        services: [
            { val: "Coach individuel", label: "Individual Basketball Coach" },
            { val: "Préparateur physique", label: "Dedicated Strength & Conditioning Coach" },
            { val: "Machine Dr. Dish", label: "Dr. Dish Shooting Machine" },
            { val: "Bain froid", label: "Cold Plunge Access (Cryo)" },
            { val: "Sauna", label: "Sauna Access" },
            { val: "Service boissons / snacks", label: "Nutrition (Drinks & Snacks)" },
            { val: "Analyse vidéo", label: "Video Capture & Analysis" },
            { val: "Récupération active / Kiné", label: "Physio / Osteopath on request" },
            { val: "Transport", label: "VTC Transfers / Private Chauffeur" },
            { val: "Hébergement", label: "Premium Accommodation Search" },
        ],
        descriptionLabel: "Project description *",
        descriptionPlaceholder: "Describe your specific needs, usual staff, confidentiality requirements...",

        btnBack: "Back",
        btnNext: "Next",
        btnSending: "Securely sending...",
        btnSubmit: "Send my request",
    },
};

// ─── Component ─────────────────────────────────────────────────────────────────

interface TrainingCenterFormProps {
    lang?: Lang;
}

export function TrainingCenterForm({ lang = "fr" }: TrainingCenterFormProps) {
    const tr = ft[lang];

    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(1);
    const [isPending, setIsPending] = useState(false);
    const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

    // Form inputs state
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        club: "",
        league: "",
        dates: "",
        playersCount: "1",
        projectDescription: ""
    });

    const [objectives, setObjectives] = useState<string[]>([]);
    const [services, setServices] = useState<string[]>([]);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const isStepValid = (currentStep: number) => {
        if (currentStep === 1) {
            return (
                formData.firstname.trim() !== "" &&
                formData.lastname.trim() !== "" &&
                formData.email.trim() !== "" &&
                formData.email.includes("@")
            );
        }
        if (currentStep === 2) {
            return formData.club.trim() !== "" && formData.league.trim() !== "";
        }
        if (currentStep === 3) {
            return formData.dates.trim() !== "";
        }
        if (currentStep === 4) {
            return formData.projectDescription.trim().length >= 10;
        }
        return false;
    };

    const nextStep = () => {
        if (isStepValid(step)) {
            setStep(prev => Math.min(prev + 1, 4));
        }
    };

    const prevStep = () => {
        setStep(prev => Math.max(prev - 1, 1));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (value: string, type: "objectives" | "services") => {
        if (type === "objectives") {
            setObjectives(prev =>
                prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
            );
        } else {
            setServices(prev =>
                prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
            );
        }
    };

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!isStepValid(4)) return;

        setIsPending(true);
        setMessage(null);

        const data = new FormData();
        data.append("firstname", formData.firstname);
        data.append("lastname", formData.lastname);
        data.append("email", formData.email);
        data.append("phone", formData.phone);
        data.append("club", formData.club);
        data.append("league", formData.league);
        data.append("dates", formData.dates);
        data.append("playersCount", formData.playersCount);
        data.append("projectDescription", formData.projectDescription);

        objectives.forEach(obj => data.append("objectives", obj));
        services.forEach(srv => data.append("services", srv));

        const result = await submitTrainingCenter(data);

        if (result.success) {
            setMessage({ type: "success", text: result.success });
            setFormData({
                firstname: "",
                lastname: "",
                email: "",
                phone: "",
                club: "",
                league: "",
                dates: "",
                playersCount: "1",
                projectDescription: ""
            });
            setObjectives([]);
            setServices([]);
        } else if (result.error) {
            setMessage({ type: "error", text: result.error });
        }

        setIsPending(false);
    }

    const handleClose = () => {
        setIsOpen(false);
        setStep(1);
        setMessage(null);
    };

    const handleCloseSuccess = () => {
        setIsOpen(false);
        setStep(1);
        setMessage(null);
    };

    return (
        <>
            {/* CTA Section on training center page */}
            <div className={s.ctaCard}>
                <span className={s.ctaBadge}>{tr.ctaBadge}</span>
                <h3 className={s.ctaTitle}>{tr.ctaTitle}</h3>
                <p className={s.ctaDesc}>{tr.ctaDesc}</p>
                <button className={s.ctaBtn} onClick={() => setIsOpen(true)}>
                    {tr.ctaBtn}
                </button>
            </div>

            {/* Modal Overlay */}
            {isOpen && (
                <div className={s.modalOverlay} onClick={handleClose}>
                    <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={s.closeBtn} onClick={handleClose} aria-label={tr.closeModal}>
                            <X size={20} />
                        </button>

                        {message?.type === "success" ? (
                            <div className={s.successView}>
                                <div className={s.successIcon}>
                                    <Check size={48} />
                                </div>
                                <h3 className={s.successTitle}>{tr.successTitle}</h3>
                                <p className={s.successText}>{message.text}</p>
                                <button className={s.closeSuccessBtn} onClick={handleCloseSuccess}>
                                    {tr.closeWindow}
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className={s.form}>
                                <div className={s.modalHeader}>
                                    <h3 className={s.formTitle}>{tr.formTitle}</h3>
                                    <p className={s.formSubtitle}>{tr.formSubtitle}</p>
                                </div>

                                {/* Step Progress Header */}
                                <div className={s.stepsHeader}>
                                    {tr.steps.map((sObj) => (
                                        <div
                                            key={sObj.num}
                                            className={`${s.stepDot} ${step >= sObj.num ? s.activeDot : ""} ${step > sObj.num ? s.completedDot : ""}`}
                                        >
                                            <div className={s.dotCircle}>
                                                {step > sObj.num ? <Check size={12} strokeWidth={3} /> : sObj.num}
                                            </div>
                                            <span className={s.dotLabel}>{sObj.label}</span>
                                        </div>
                                    ))}
                                    <div className={s.stepsProgressLine}>
                                        <div
                                            className={s.stepsProgressLineFill}
                                            style={{ width: `${((step - 1) / 3) * 100}%` }}
                                        />
                                    </div>
                                </div>

                                {/* Step Form Content */}
                                <div className={s.stepContent}>
                                    {/* STEP 1: Contact Information */}
                                    {step === 1 && (
                                        <div className={s.animateFade}>
                                            <h4 className={s.stepTitle}>{tr.step1Title}</h4>
                                            <div className={s.row}>
                                                <div className={s.field}>
                                                    <label htmlFor="firstname" className={s.label}>{tr.firstnameLabel}</label>
                                                    <input
                                                        type="text"
                                                        id="firstname"
                                                        name="firstname"
                                                        required
                                                        className={s.input}
                                                        placeholder={tr.firstnamePlaceholder}
                                                        value={formData.firstname}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className={s.field}>
                                                    <label htmlFor="lastname" className={s.label}>{tr.lastnameLabel}</label>
                                                    <input
                                                        type="text"
                                                        id="lastname"
                                                        name="lastname"
                                                        required
                                                        className={s.input}
                                                        placeholder={tr.lastnamePlaceholder}
                                                        value={formData.lastname}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className={s.row}>
                                                <div className={s.field}>
                                                    <label htmlFor="email" className={s.label}>{tr.emailLabel}</label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        required
                                                        className={s.input}
                                                        placeholder={tr.emailPlaceholder}
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className={s.field}>
                                                    <label htmlFor="phone" className={s.label}>{tr.phoneLabel}</label>
                                                    <input
                                                        type="tel"
                                                        id="phone"
                                                        name="phone"
                                                        className={s.input}
                                                        placeholder={tr.phonePlaceholder}
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* STEP 2: Athletic Profile */}
                                    {step === 2 && (
                                        <div className={s.animateFade}>
                                            <h4 className={s.stepTitle}>{tr.step2Title}</h4>
                                            <div className={s.row}>
                                                <div className={s.field}>
                                                    <label htmlFor="club" className={s.label}>{tr.clubLabel}</label>
                                                    <input
                                                        type="text"
                                                        id="club"
                                                        name="club"
                                                        required
                                                        className={s.input}
                                                        placeholder={tr.clubPlaceholder}
                                                        value={formData.club}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className={s.field}>
                                                    <label htmlFor="league" className={s.label}>{tr.leagueLabel}</label>
                                                    <input
                                                        type="text"
                                                        id="league"
                                                        name="league"
                                                        required
                                                        className={s.input}
                                                        placeholder={tr.leaguePlaceholder}
                                                        value={formData.league}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className={s.field}>
                                                <label htmlFor="playersCount" className={s.label}>{tr.playersCountLabel}</label>
                                                <select
                                                    id="playersCount"
                                                    name="playersCount"
                                                    required
                                                    className={s.select}
                                                    value={formData.playersCount}
                                                    onChange={handleChange}
                                                >
                                                    <option value="1">{tr.players1}</option>
                                                    <option value="2-6">{tr.players2}</option>
                                                    <option value="7+">{tr.players3}</option>
                                                </select>
                                            </div>
                                        </div>
                                    )}

                                    {/* STEP 3: Dates & Objectives */}
                                    {step === 3 && (
                                        <div className={s.animateFade}>
                                            <h4 className={s.stepTitle}>{tr.step3Title}</h4>
                                            <div className={s.field}>
                                                <label htmlFor="dates" className={s.label}>{tr.datesLabel}</label>
                                                <input
                                                    type="text"
                                                    id="dates"
                                                    name="dates"
                                                    required
                                                    className={s.input}
                                                    placeholder={tr.datesPlaceholder}
                                                    value={formData.dates}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className={s.checkboxSection}>
                                                <span className={s.sectionLabel}>{tr.objectivesLabel}</span>
                                                <div className={s.checkboxGrid}>
                                                    {tr.objectives.map(item => (
                                                        <label key={item.val} className={s.checkboxLabel}>
                                                            <input
                                                                type="checkbox"
                                                                name="objectives"
                                                                value={item.val}
                                                                checked={objectives.includes(item.val)}
                                                                onChange={() => handleCheckboxChange(item.val, "objectives")}
                                                                className={s.checkboxInput}
                                                            />
                                                            <span className={s.checkboxBox}>
                                                                <Check size={12} className={s.checkboxCheckIcon} />
                                                            </span>
                                                            <span className={s.checkboxText}>{item.label}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* STEP 4: Services & Description */}
                                    {step === 4 && (
                                        <div className={s.animateFade}>
                                            <h4 className={s.stepTitle}>{tr.step4Title}</h4>

                                            <div className={s.checkboxSection}>
                                                <span className={s.sectionLabel}>{tr.servicesLabel}</span>
                                                <div className={s.checkboxGrid}>
                                                    {tr.services.map(item => (
                                                        <label key={item.val} className={s.checkboxLabel}>
                                                            <input
                                                                type="checkbox"
                                                                name="services"
                                                                value={item.val}
                                                                checked={services.includes(item.val)}
                                                                onChange={() => handleCheckboxChange(item.val, "services")}
                                                                className={s.checkboxInput}
                                                            />
                                                            <span className={s.checkboxBox}>
                                                                <Check size={12} className={s.checkboxCheckIcon} />
                                                            </span>
                                                            <span className={s.checkboxText}>{item.label}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className={s.field}>
                                                <label htmlFor="projectDescription" className={s.label}>{tr.descriptionLabel}</label>
                                                <textarea
                                                    id="projectDescription"
                                                    name="projectDescription"
                                                    required
                                                    className={s.textarea}
                                                    placeholder={tr.descriptionPlaceholder}
                                                    value={formData.projectDescription}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {message?.type === "error" && (
                                    <div className={`${s.message} ${s.error}`}>
                                        {message.text}
                                    </div>
                                )}

                                {/* Form Navigation Buttons */}
                                <div className={s.navButtons}>
                                    {step > 1 && (
                                        <button
                                            type="button"
                                            onClick={prevStep}
                                            disabled={isPending}
                                            className={s.backBtn}
                                        >
                                            <ChevronLeft size={16} />
                                            {tr.btnBack}
                                        </button>
                                    )}

                                    {step < 4 ? (
                                        <button
                                            type="button"
                                            onClick={nextStep}
                                            disabled={!isStepValid(step)}
                                            className={s.nextBtn}
                                        >
                                            {tr.btnNext}
                                            <ChevronRight size={16} />
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            disabled={isPending || !isStepValid(4)}
                                            className={s.submitBtn}
                                        >
                                            {isPending ? (
                                                <>
                                                    <Loader2 size={16} className="animate-spin" />
                                                    {tr.btnSending}
                                                </>
                                            ) : (
                                                <>
                                                    <Send size={16} />
                                                    {tr.btnSubmit}
                                                </>
                                            )}
                                        </button>
                                    )}
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
