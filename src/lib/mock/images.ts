// ─────────────────────────────────────────────────────────────────────────────
// Toutes les images mockées du site — remplacer par les vraies photos du club
// ─────────────────────────────────────────────────────────────────────────────

export const IMG = {

    // ── Hero ─────────────────────────────────────────────────────────────────
    hero: {
        main:    "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1600&q=80",
        // joueur qui saute pour dunker, fond sombre — parfait pour hero
    },

    // ── Actualités ───────────────────────────────────────────────────────────
    news: {
        match:       "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800&q=80",
        // match en salle, ambiance compétition

        entrainement:"https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=800&q=80",
        // entraînement collectif

        jeunes:      "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80",
        // jeunes joueurs, école de basket

        trophy:      "https://images.unsplash.com/photo-1607457561901-e6ec3a6d16cf?w=800&q=80",
        // trophée / victoire

        default:     "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&q=80",
        // basket générique
    },

    // ── Club ─────────────────────────────────────────────────────────────────
    club: {
        equipe:      "https://images.unsplash.com/photo-1505666287802-931dc83948e9?w=800&q=80",
        // photo d'équipe collective

        gymnase:     "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        // gymnase / salle de sport intérieure

        coach:       "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
        // coach qui explique une tactique

        action:      "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
        // action de jeu dynamique
    },

    // ── Équipes ───────────────────────────────────────────────────────────────
    equipes: {
        seniorsM:    "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=600&q=80",
        seniorsF:    "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&q=80",
        u17:         "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=600&q=80",
        u15:         "https://images.unsplash.com/photo-1607457561901-e6ec3a6d16cf?w=600&q=80",
        u13:         "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=600&q=80",
        ecoleBasket: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    },

    // ── Joueurs / Avatars ─────────────────────────────────────────────────────
    avatars: {
        default:     "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
        // portrait homme générique

        femme:       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
        // portrait femme générique
    },

    // ── Partenaires (logos placeholder colorés) ───────────────────────────────
    partenaires: {
        p1: "https://placehold.co/200x80/f4f4f5/71717a?text=Partenaire+1",
        p2: "https://placehold.co/200x80/f4f4f5/71717a?text=Partenaire+2",
        p3: "https://placehold.co/200x80/f4f4f5/71717a?text=Partenaire+3",
        p4: "https://placehold.co/200x80/f4f4f5/71717a?text=Partenaire+4",
        p5: "https://placehold.co/200x80/f4f4f5/71717a?text=Partenaire+5",
    },

    // ── Agenda / Événements ───────────────────────────────────────────────────
    agenda: {
        terrain:     "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        evenement:   "https://images.unsplash.com/photo-1607457561901-e6ec3a6d16cf?w=600&q=80",
    },

} as const;

// ─── Type helper ─────────────────────────────────────────────────────────────
export type ImgKey = typeof IMG;
