"use client";

import { useState } from "react";
import { Send, Loader2, Check } from "lucide-react";
import { submitTrainingCenter } from "@/app/actions/trainingCenter";
import s from "./TrainingCenterForm.module.scss";

export function TrainingCenterForm() {
    const [isPending, setIsPending] = useState(false);
    const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

    // Form inputs state for validation
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

    const isFormValid =
        formData.firstname.trim() !== "" &&
        formData.lastname.trim() !== "" &&
        formData.email.trim() !== "" &&
        formData.club.trim() !== "" &&
        formData.league.trim() !== "" &&
        formData.dates.trim() !== "" &&
        formData.projectDescription.trim().length >= 10;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsPending(true);
        setMessage(null);

        const data = new FormData(e.currentTarget);
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
            (e.target as HTMLFormElement).reset();
        } else if (result.error) {
            setMessage({ type: "error", text: result.error });
        }

        setIsPending(false);
    }

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <h3 className={s.formTitle}>Demande de Privatisation & Accès</h3>
            <p className={s.formSubtitle}>
                Veuillez remplir ce formulaire. Notre direction technique étudiera votre demande avec la plus grande discrétion.
            </p>

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

            <div className={s.row}>
                <div className={s.field}>
                    <label htmlFor="club" className={s.label}>Club Actuel / Organisation *</label>
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
                    <label htmlFor="league" className={s.label}>Championnat *</label>
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

            <div className={s.row}>
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

            {/* Checkboxes: Objectifs */}
            <div className={s.checkboxSection}>
                <span className={s.sectionLabel}>Objectifs du séjour (plusieurs choix possibles)</span>
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
                            <input type="checkbox" name="objectives" value={item.val} className={s.checkboxInput} />
                            <span className={s.checkboxBox}>
                                <Check size={12} className={s.checkboxCheckIcon} />
                            </span>
                            <span className={s.checkboxText}>{item.label}</span>
                        </label>
                    ))}
                </div>
            </div>

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
                            <input type="checkbox" name="services" value={item.val} className={s.checkboxInput} />
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

            {message && (
                <div className={`${s.message} ${s[message.type]}`}>
                    {message.text}
                </div>
            )}

            <button
                type="submit"
                disabled={isPending || !isFormValid}
                className={s.submitBtn}
            >
                {isPending ? (
                    <>
                        <Loader2 size={18} className="animate-spin" />
                        Envoi sécurisé en cours...
                    </>
                ) : (
                    <>
                        <Send size={18} />
                        Soumettre ma demande d'accès
                    </>
                )}
            </button>
        </form>
    );
}
