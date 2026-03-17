interface BallIconProps {
    size?: number;
    className?: string;
}

export function BallIcon({ size = 24, className = "" }: BallIconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
        >
            {/* Cercle principal */}
            <circle cx="12" cy="12" r="10" />
            {/* Ligne horizontale */}
            <path d="M2 12h20" />
            {/* Arc gauche */}
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10" />
            {/* Arc droite */}
            <path d="M12 2a15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0 4 10" />
        </svg>
    );
}
