"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingOverlay from "@/components/loading/LoadingOverlay";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, [pathname]);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative">
            {isLoading ? (
                <LoadingOverlay isLoading={isLoading} />
            ) : (
                <div className={`${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}>
                    <header className="h-[100px]">
                        <Header />
                    </header>
                    <main className="min-h-[calc(100vh-100px)]">{children}</main>
                    <footer>
                        <Footer />
                    </footer>
                </div>
            )}
        </div>
    );
}
