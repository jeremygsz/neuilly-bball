"use client";

import { useState, useEffect } from "react";
import { Send, Loader2, Check, X, ChevronLeft, ChevronRight } from "lucide-react";
import { submitTrainingCenter } from "@/app/actions/trainingCenter";
import s from "./TrainingCenterForm.module.scss";

export function TrainingCenterForm() {
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

        // Build FormData manually to submit to Action
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
            // Reset form states
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
        // Reset steps and message on close, keeping inputs intact in case they want to continue
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
                <span className={s.ctaBadge}>Privatisation & Accès Élite</span>
                <h3 className={s.ctaTitle}>Prêt à planifier votre session ?</h3>
                <p className={s.ctaDesc}>
                    Que vous soyez un joueur professionnel, un agent ou un club, soumettez votre projet d'entraînement. 
                    Nos installations sont privatisables en toute confidentialité pour répondre à vos exigences de haut niveau.
                </p>
                <button className={s.ctaBtn} onClick={() => setIsOpen(true)}>
                    Faire une demande de privatisation
                </button>
            </div>

            {/* Modal Overlay */}
            {isOpen && (
                <div className={s.modalOverlay} onClick={handleClose}>
                    <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={s.closeBtn} onClick={handleClose} aria-label="Fermer la modal">
                            <X size={20} />
                        </button>

                        {message?.type === "success" ? (
                            <div className={s.successView}>
                                <div className={s.successIcon}>
                                    <Check size={48} />
                                </div>
                                <h3 className={s.successTitle}>Demande Envoyée !</h3>
                                <p className={s.successText}>{message.text}</p>
                                <button className={s.closeSuccessBtn} onClick={handleCloseSuccess}>
                                    Fermer la fenêtre
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className={s.form}>
                                <div className={s.modalHeader}>
                                    <h3 className={s.formTitle}>Demande d'Accès Privatise</h3>
                                    <p className={s.formSubtitle}>
                                        Notre direction technique étudiera votre dossier en toute discrétion.
                                    </p>
                                </div>

                                {/* Step Progress Header */}
                                <div className={s.stepsHeader}>
                                    {[
                                        { num: 1, label: "Identité" },
                                        { num: 2, label: "Profil" },
                                        { num: 3, label: "Projet" },
                                        { num: 4, label: "Services" }
                                    ].map((sObj) => (
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
                                            <h4 className={s.stepTitle}>Étape 1 : Vos coordonnées</h4>
                                            <div className={s.row}>
                                                <div className={s.field}>
                                                    <label htmlFor="firstname" className={s.label}>Prénom *</label>
                                                    <input
                                                        type="text"
                                                        id="firstname"
                                                        name="firstname"
                                                        required
                                                        className={s.input}
                                                        placeholder="Ex: Jean"
                                                        value={formData.firstname}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className={s.field}>
                                                    <label htmlFor="lastname" className={s.label}>Nom *</label>
                                                    <input
                                                        type="text"
                                                        id="lastname"
                                                        name="lastname"
                                                        required
                                                        className={s.input}
                                                        placeholder="Ex: Dupont"
                                                        value={formData.lastname}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className={s.row}>
                                                <div className={s.field}>
                                                    <label htmlFor="email" className={s.label}>Adresse Email *</label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        required
                                                        className={s.input}
                                                        placeholder="Ex: contact@agency.com"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className={s.field}>
                                                    <label htmlFor="phone" className={s.label}>Téléphone</label>
                                                    <input
                                                        type="tel"
                                                        id="phone"
                                                        name="phone"
                                                        className={s.input}
                                                        placeholder="Ex: +33 6 12 34 56 78"
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
                                            <h4 className={s.stepTitle}>Étape 2 : Profil sportif</h4>
                                            <div className={s.row}>
                                                <div className={s.field}>
                                                    <label htmlFor="club" className={s.label}>Club / Organisation *</label>
                                                    <input
                                                        type="text"
                                                        id="club"
                                                        name="club"
                                                        required
                                                        className={s.input}
                                                        placeholder="Ex: Dallas Mavericks, ASVEL, Free Agent..."
                                                        value={formData.club}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className={s.field}>
                                                    <label htmlFor="league" className={s.label}>Championnat / Niveau *</label>
                                                    <input
                                                        type="text"
                                                        id="league"
                                                        name="league"
                                                        required
                                                        className={s.input}
                                                        placeholder="Ex: NBA, EuroLeague, Betclic Élite, NCAA..."
                                                        value={formData.league}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className={s.field}>
                                                <label htmlFor="playersCount" className={s.label}>Nombre de Joueurs *</label>
                                                <select
                                                    id="playersCount"
                                                    name="playersCount"
                                                    required
                                                    className={s.select}
                                                    value={formData.playersCount}
                                                    onChange={handleChange}
                                                >
                                                    <option value="1">1 joueur (Individuel)</option>
                                                    <option value="2-6">2 à 6 joueurs (Small Group)</option>
                                                    <option value="7+">7 joueurs ou plus (Team Camp)</option>
                                                </select>
                                            </div>
                                        </div>
                                    )}

                                    {/* STEP 3: Dates & Objectives */}
                                    {step === 3 && (
                                        <div className={s.animateFade}>
                                            <h4 className={s.stepTitle}>Étape 3 : Votre projet de session</h4>
                                            <div className={s.field}>
                                                <label htmlFor="dates" className={s.label}>Dates Souhaitées *</label>
                                                <input
                                                    type="text"
                                                    id="dates"
                                                    name="dates"
                                                    required
                                                    className={s.input}
                                                    placeholder="Ex: Du 15 au 25 Juillet 2026"
                                                    value={formData.dates}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            {/* Checkboxes: Objectifs */}
                                            <div className={s.checkboxSection}>
                                                <span className={s.sectionLabel}>Objectifs de la session (plusieurs choix possibles)</span>
                                                <div className={s.checkboxGrid}>
                                                    {[
                                                        { val: "Off Season", label: "Off Season Program" },
                                                        { val: "Shooting", label: "Shooting Lab" },
                                                        { val: "Préparation physique", label: "Préparation Physique" },
                                                        { val: "Reprise", label: "Reprise / Post-blessure" },
                                                        { val: "Team Camp", label: "Team Camp" },
                                                        { val: "Recovery", label: "Récupération & Soins" },
                                                        { val: "Autre", label: "Autre" }
                                                    ].map(item => (
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
                                            <h4 className={s.stepTitle}>Étape 4 : Services complémentaires & description</h4>
                                            
                                            {/* Checkboxes: Services */}
                                            <div className={s.checkboxSection}>
                                                <span className={s.sectionLabel}>Services & Équipements souhaités</span>
                                                <div className={s.checkboxGrid}>
                                                    {[
                                                        { val: "Coach individuel", label: "Coach de basket individuel" },
                                                        { val: "Préparateur physique", label: "Préparateur physique dédié" },
                                                        { val: "Machine Dr. Dish", label: "Machine de tir Dr. Dish" },
                                                        { val: "Bain froid", label: "Accès Bain Froid (Cryo)" },
                                                        { val: "Sauna", label: "Accès Sauna" },
                                                        { val: "Service boissons / snacks", label: "Nutrition (Boissons & Collation)" },
                                                        { val: "Analyse vidéo", label: "Captation & Analyse vidéo" },
                                                        { val: "Récupération active / Kiné", label: "Kiné / Ostéopathe sur demande" },
                                                        { val: "Transport", label: "Transferts VTC / Chauffeur privé" },
                                                        { val: "Hébergement", label: "Recherche d'hébergement premium" }
                                                    ].map(item => (
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
                                                <label htmlFor="projectDescription" className={s.label}>Description de votre projet *</label>
                                                <textarea
                                                    id="projectDescription"
                                                    name="projectDescription"
                                                    required
                                                    className={s.textarea}
                                                    placeholder="Précisez vos besoins particuliers, votre staff habituel, vos contraintes de confidentialité..."
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
                                            Retour
                                        </button>
                                    )}

                                    {step < 4 ? (
                                        <button
                                            type="button"
                                            onClick={nextStep}
                                            disabled={!isStepValid(step)}
                                            className={s.nextBtn}
                                        >
                                            Suivant
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
                                                    Envoi sécurisé...
                                                </>
                                            ) : (
                                                <>
                                                    <Send size={16} />
                                                    Envoyer ma demande
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



