import { Navbar } from "@/components/public/layout/Navbar";
import { Footer } from "@/components/public/layout/Footer";
import { WhatsAppFloatingButton } from "@/components/public/layout/WhatsAppFloatingButton";

export default function PublicLayout({children}: {children: React.ReactNode;}) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppFloatingButton />
        </div>
    );
}
