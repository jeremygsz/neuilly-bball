"use client";

import { useLang } from "./LanguageContext";
import s from "./LanguageSwitcher.module.scss";

export function LanguageSwitcher() {
    const { lang, setLang } = useLang();

    return (
        <div className={s.switcher}>
            <button
                className={`${s.flagBtn} ${lang === "fr" ? s.active : ""}`}
                onClick={() => setLang("fr")}
                aria-label="Passer en français"
                title="Français"
            >
                <span className={s.flagEmoji}>🇫🇷</span>
                <span className={s.flagLabel}>FR</span>
            </button>
            <div className={s.divider} />
            <button
                className={`${s.flagBtn} ${lang === "en" ? s.active : ""}`}
                onClick={() => setLang("en")}
                aria-label="Switch to English"
                title="English"
            >
                <span className={s.flagEmoji}>🇬🇧</span>
                <span className={s.flagLabel}>EN</span>
            </button>
        </div>
    );
}
