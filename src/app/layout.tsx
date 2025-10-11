import "./globals.css";
import { Inter } from "next/font/google";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Review Food",
    description: "Trang đánh giá món ăn",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="vi">
            <body className={`${inter.className} antialiased`}>
                <ClientLayoutWrapper>
                    {children}
                    <ToastContainer
                        position="top-right"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        pauseOnHover
                        theme="colored"
                        limit={3}
                    />
                </ClientLayoutWrapper>
            </body>
        </html>
    );
}
