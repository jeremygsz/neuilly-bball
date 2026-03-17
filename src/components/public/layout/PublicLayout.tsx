import { Navbar } from "@/components/public/layout/Navbar";
import { Footer } from "@/components/public/layout/Footer";

interface PublicLayoutProps {
    children: React.ReactNode;
}

export function PublicLayout({ children }: PublicLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col bg-[#1a1a2e]">
            <Navbar />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
}
