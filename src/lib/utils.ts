import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string): string {
    return format(new Date(date), "d MMMM yyyy", { locale: fr });
}

export function formatDateShort(date: Date | string): string {
    return format(new Date(date), "dd/MM/yyyy", { locale: fr });
}

export function slugify(text: string): string {
    return text
        .toString()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "")
        .replace(/--+/g, "-");
}

export function truncate(text: string, length: number): string {
    if (text.length <= length) return text;
    return text.substring(0, length) + "...";
}

export function calculateAge(dateOfBirth: Date | string): number {
    const today = new Date();
    const birth = new Date(dateOfBirth);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}
