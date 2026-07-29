import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "@/styles/globals.scss";


const inter = Inter({
    variable: "--font-body",
    subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
    variable: "--font-display",
    subsets: ["latin"],
    weight: "400",
});

export const metadata: Metadata = {
    title: {
        default: "Neuilly Basketball",
        template: "%s | Neuilly Basketball"
    },
    description: "Club de basketball de Neuilly-sur-Seine. Rejoignez l'association pour progresser, jouer en compétition ou en loisir dans une ambiance conviviale.",
    icons: {
        icon: "/images/logo3d.png",
    },
    openGraph: {
        type: "website",
        url: "https://neuilly-basketball.fr",
        title: "Neuilly Basketball",
        description: "Club de basketball de Neuilly-sur-Seine.",
        images: [{ url: "/images/logo3d.png", width: 800, height: 600, alt: "Neuilly Basketball Logo" }],
        siteName: "Neuilly Basketball",
    },
    twitter: {
        card: "summary_large_image",
        title: "Neuilly Basketball",
        description: "Club de basketball de Neuilly-sur-Seine.",
        images: ["/images/logo3d.png"],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsClub",
    "name": "Neuilly Basketball Association",
    "url": "https://neuilly-basketball.fr",
    "logo": "https://neuilly-basketball.fr/images/logo3d.png",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Neuilly-sur-Seine",
        "addressRegion": "Île-de-France",
        "addressCountry": "FR"
    },
    "description": "Club de basketball de Neuilly-sur-Seine proposant des entraînements et des compétitions pour enfants et adultes."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
        <head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </head>
        <body className={`${inter.variable} ${bebasNeue.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}
