import { MessageCircle } from "lucide-react";
import s from "./WhatsAppFloatingButton.module.scss";

export function WhatsAppFloatingButton() {
    return (
        <a
            href="https://wa.me/33646861477"
            target="_blank"
            rel="noopener noreferrer"
            className={s.float}
            aria-label="Contactez-nous sur WhatsApp"
        >
            <MessageCircle size={28} className={s.icon} />
            <span className={s.tooltip}>Besoin d'aide ?</span>
        </a>
    );
}
