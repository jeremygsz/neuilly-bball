import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Palette principale — sobre, sérieux, premium
                navy: {
                    50:  "#f0f2ff",
                    100: "#e0e5ff",
                    200: "#c7d0fe",
                    300: "#a4b0fd",
                    400: "#7c87fa",
                    500: "#5a62f5",
                    600: "#3d41e8",
                    700: "#2e30cc",
                    800: "#1e1fa5",
                    900: "#1a1a2e", // couleur principale
                    950: "#0d0d1a",
                },
                silver: {
                    50:  "#f8f9fa",
                    100: "#f1f3f5",
                    200: "#e9ecef",
                    300: "#dee2e6",
                    400: "#ced4da",
                    500: "#adb5bd",
                    600: "#868e96",
                    700: "#495057",
                    800: "#343a40",
                    900: "#212529",
                },
                accent: {
                    DEFAULT: "#e63946", // rouge basket
                    light:   "#ff6b74",
                    dark:    "#c1121f",
                },
            },
            fontFamily: {
                sans:    ["var(--font-inter)", "sans-serif"],
                display: ["var(--font-bebas)", "sans-serif"],
                mono:    ["var(--font-mono)", "monospace"],
            },
            fontSize: {
                "display-xl": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "1" }],
                "display-lg": ["clamp(2rem, 5vw, 4rem)", { lineHeight: "1.1" }],
                "display-md": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.2" }],
            },
            spacing: {
                "section": "6rem",
                "section-sm": "4rem",
            },
            backgroundImage: {
                "gradient-radial":   "radial-gradient(var(--tw-gradient-stops))",
                "gradient-navy":
                    "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
                "gradient-hero":
                    "linear-gradient(to bottom, rgba(26,26,46,0.3) 0%, rgba(26,26,46,0.8) 100%)",
            },
            animation: {
                "fade-in":       "fadeIn 0.6s ease-out forwards",
                "fade-up":       "fadeUp 0.6s ease-out forwards",
                "fade-up-delay": "fadeUp 0.6s ease-out 0.2s forwards",
                "slide-in-left": "slideInLeft 0.6s ease-out forwards",
                "pulse-slow":    "pulse 3s ease-in-out infinite",
                "float":         "float 6s ease-in-out infinite",
            },
            keyframes: {
                fadeIn: {
                    from: { opacity: "0" },
                    to:   { opacity: "1" },
                },
                fadeUp: {
                    from: { opacity: "0", transform: "translateY(30px)" },
                    to:   { opacity: "1", transform: "translateY(0)" },
                },
                slideInLeft: {
                    from: { opacity: "0", transform: "translateX(-30px)" },
                    to:   { opacity: "1", transform: "translateX(0)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%":      { transform: "translateY(-10px)" },
                },
            },
            boxShadow: {
                "card":    "0 4px 20px rgba(0, 0, 0, 0.08)",
                "card-lg": "0 8px 40px rgba(0, 0, 0, 0.12)",
                "navy":    "0 4px 20px rgba(26, 26, 46, 0.3)",
                "glow":    "0 0 30px rgba(90, 98, 245, 0.3)",
            },
            borderRadius: {
                "xl":  "1rem",
                "2xl": "1.5rem",
                "3xl": "2rem",
            },
            transitionTimingFunction: {
                "bounce-soft": "cubic-bezier(0.34, 1.56, 0.64, 1)",
            },
        },
    },
    plugins: [],
};

export default config;
