import { TeamWithPlayers } from "@/types";

export type CategoryKey =
    | "jeunes-1"
    | "jeunes-2"
    | "jeunes-3"
    | "corporate"
    | "loisirs-masculin"
    | "loisirs-feminin"
    | "attribution";

export interface CategoryStyle {
    label: string;
    color: string;
    textColor?: string;
}

export const CATEGORY_STYLES: Record<CategoryKey, CategoryStyle> = {
    "jeunes-1":         { label: "Jeunes 6 à 10 ans",   color: "#BCEBCB" },
    "jeunes-2":         { label: "Jeunes 10 à 14 ans",  color: "#A6E1DC" },
    "jeunes-3":         { label: "Jeunes 15 à 18 ans",  color: "#A3D9B4" },
    corporate:          { label: "Basket Entreprise",   color: "#BCCCEC" },
    "loisirs-masculin": { label: "Loisirs Masculin",    color: "#FFD3B0" },
    "loisirs-feminin":  { label: "Loisirs Féminin",     color: "#f54298", textColor: "#FFFFFF" },
    attribution:        { label: "En cours d'attribution", color: "#000000", textColor: "#FFFFFF" },
};

// Ids des équipes (table `team`) rattachées à chaque créneau. Les libellés affichés
// sont résolus dynamiquement depuis la base — ce fichier ne fixe que le jour, l'horaire,
// le lieu et la catégorie (couleur) d'un créneau.
export interface PlanningSlot {
    day: string;
    start: number;
    end: number;
    category: CategoryKey;
    teamIds: number[];
}

export interface PlanningSite {
    id: "ile-du-pont" | "koenig";
    name: string;
    address: string;
    startHour?: number;
    slots: PlanningSlot[];
}

export const DAY_ORDER = ["Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

export const HOURS = Array.from({ length: 13 }, (_, i) => 9 + i); // 9h → 21h (colonnes de la grille, jusqu'à 22h)

export const sites: PlanningSite[] = [
    {
        id: "ile-du-pont",
        name: "Complexe sportif de l'Île du Pont",
        address: "Neuilly-sur-Seine",
        slots: [
            { day: "Mardi", start: 12, end: 13, category: "corporate", teamIds: [11] },
            { day: "Mardi", start: 18, end: 20, category: "attribution", teamIds: [] },
            { day: "Mardi", start: 20, end: 22, category: "loisirs-masculin", teamIds: [12] },

            { day: "Mercredi", start: 12, end: 13, category: "attribution", teamIds: [] },
            { day: "Mercredi", start: 13, end: 15, category: "jeunes-1", teamIds: [3, 4] },
            { day: "Mercredi", start: 15, end: 17, category: "jeunes-2", teamIds: [5, 9] },
            { day: "Mercredi", start: 17, end: 18, category: "attribution", teamIds: [] },
            { day: "Mercredi", start: 18, end: 20, category: "jeunes-3", teamIds: [8, 7] },
            { day: "Mercredi", start: 20, end: 22, category: "attribution", teamIds: [] },

            { day: "Jeudi", start: 19, end: 20, category: "attribution", teamIds: [] },
            { day: "Jeudi", start: 20, end: 22, category: "loisirs-masculin", teamIds: [12] },

            { day: "Vendredi", start: 18, end: 20, category: "loisirs-feminin", teamIds: [10] },
            { day: "Vendredi", start: 20, end: 22, category: "attribution", teamIds: [] },

            { day: "Samedi", start: 9, end: 13, category: "attribution", teamIds: [] },
            { day: "Samedi", start: 13, end: 15, category: "jeunes-1", teamIds: [3, 4] },
            { day: "Samedi", start: 15, end: 17, category: "jeunes-2", teamIds: [5, 9] },
            { day: "Samedi", start: 17, end: 19, category: "jeunes-3", teamIds: [8, 7] },

            { day: "Dimanche", start: 9, end: 13, category: "attribution", teamIds: [] },
        ],
    },
    {
        id: "koenig",
        name: "Espace Koenig",
        address: "Neuilly-sur-Seine",
        startHour: 15,
        slots: [
            { day: "Mardi", start: 18, end: 19, category: "jeunes-1", teamIds: [3, 4] },
            { day: "Mardi", start: 19, end: 20, category: "jeunes-2", teamIds: [5] },
            { day: "Mardi", start: 20, end: 22, category: "loisirs-masculin", teamIds: [12] },

            { day: "Jeudi", start: 17, end: 19, category: "attribution", teamIds: [] },
        ],
    },
];

export interface RecapRow {
    day: string;
    time: string;
    site: PlanningSite;
    slot: PlanningSlot;
}

export function buildRecapRows(): RecapRow[] {
    const rows: RecapRow[] = [];
    for (const site of sites) {
        for (const slot of site.slots) {
            rows.push({
                day: slot.day,
                time: `${String(slot.start).padStart(2, "0")}h00 - ${String(slot.end).padStart(2, "0")}h00`,
                site,
                slot,
            });
        }
    }
    return rows.sort((a, b) => {
        const dayDiff = DAY_ORDER.indexOf(a.day) - DAY_ORDER.indexOf(b.day);
        if (dayDiff !== 0) return dayDiff;
        return a.slot.start - b.slot.start;
    });
}

export function makeTeamLabelResolver(teams: TeamWithPlayers[]) {
    const teamsById = new Map(teams.map((team) => [team.id, team]));
    return (teamIds: number[]) =>
        teamIds
            .map((id) => teamsById.get(id))
            .filter((team): team is TeamWithPlayers => Boolean(team))
            .map((team) => (team.gender === "Mixte" ? team.label : `${team.label} - ${team.gender}`))
            .join(" & ");
}
