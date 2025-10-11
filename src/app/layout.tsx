import "./globals.css";
import { Inter } from "next/font/google";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "ReviewFood | Khám Phá Ẩm Thực Việt",
    description:
            "ReviewFood mang đến những câu chuyện, review và hành trình khám phá ẩm thực Việt Nam.",
    openGraph: {
        title: "ReviewFood | Hành trình ẩm thực Việt",
        description:
            "Cùng ReviewFood thưởng thức hương vị ba miền Bắc – Trung – Nam.",
        url: "https://review-food-pe9tmbl99-nguyenthanhs-projects-9bd44689.vercel.app/",
        images: [
            {
                url: "/about_us.jpg",
                width: 1200,
                height: 630,
                alt: "ReviewFood Vietnam",
            },
        ],
    },
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
