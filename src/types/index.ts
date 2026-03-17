import { DefaultSession } from "next-auth";

// ─── Auth ────────────────────────────────────────────────────────────────────
declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            firstname: string;
            lastname: string;
            role: string;
        } & DefaultSession["user"];
    }

    interface User {
        id?: string;
        firstname: string;
        lastname: string;
        role: string;
    }

    interface JWT {
        id: string;
        firstname: string;
        lastname: string;
        role: string;
    }
}

// ... reste du fichier inchangé


// ─── Carousel ────────────────────────────────────────────────────────────────
export interface CarouselItem {
    id: number;
    title: string;
    picture: string;
    isOnline: boolean;
    createdAt: Date;
    updatedAt: Date;
}

// ─── Teams & Players ─────────────────────────────────────────────────────────
export interface TeamWithPlayers {
    id: number;
    label: string;
    players: Player[];
    trainings: Training[];
    createdAt: Date;
    updatedAt: Date;
}

export interface Player {
    id: number;
    firstname: string;
    lastname: string;
    position: string | null;
    number: number | null;
    photo: string | null;
    teamId: number;
    dateOfBirth: Date | null;
    createdAt: Date;
    updatedAt: Date;
}

export type Position =
    | "Meneur"
    | "Arrière"
    | "Ailier"
    | "Ailier fort"
    | "Pivot";

// ─── Blog ────────────────────────────────────────────────────────────────────
export interface Post {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string;
    picture: string | null;
    isOnline: boolean;
    createdAt: Date;
    updatedAt: Date;
}

// ─── Training ────────────────────────────────────────────────────────────────
export interface Training {
    id: number;
    teamId: number;
    team?: TeamWithPlayers;
    dayOfWeek: number;
    startTime: string;
    endTime: string;
    location: string | null;
    createdAt: Date;
    updatedAt: Date;
}

export const DAYS_OF_WEEK = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
];

// ─── Contact ─────────────────────────────────────────────────────────────────
export interface ContactMessage {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    phone: string | null;
    subject: string;
    message: string;
    isRead: boolean;
    createdAt: Date;
    updatedAt: Date;
}

// ─── API Response ────────────────────────────────────────────────────────────
export interface ApiResponse<T = unknown> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
}
