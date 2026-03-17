/**
 * Retourne la saison en cours au format "2024 — 2025"
 * La saison commence en septembre (mois 8 en index 0)
 * et se termine en juin de l'année suivante.
 */
export function getCurrentSeason(): string {
    const now       = new Date();
    const year      = now.getFullYear();
    const month     = now.getMonth(); // 0 = janvier, 8 = septembre

    const startYear = month >= 8 ? year : year - 1;
    const endYear   = startYear + 1;

    return `${startYear} — ${endYear}`;
}
