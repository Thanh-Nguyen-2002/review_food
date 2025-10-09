"use client"
import { Users, Star, BookOpenText, CalendarDays } from "lucide-react";
import RevealOnScroll from "../RevealOnScroll";
import CountUp from "react-countup";

export default function StatsSection() {
    const stats = [
        {
            icon: <Users className="w-10 h-10 text-orange-400" />,
            number: "2,847",
            label: "Thành Viên",
            gradient: "from-orange-100 to-orange-50",
        },
        {
            icon: <Star className="w-10 h-10 text-yellow-500" />,
            number: "15,392",
            label: "Reviews",
            gradient: "from-yellow-100 to-yellow-50",
        },
        {
            icon: <BookOpenText className="w-10 h-10 text-purple-500" />,
            number: "1,205",
            label: "Công Thức",
            gradient: "from-purple-100 to-purple-50",
        },
        {
            icon: <CalendarDays className="w-10 h-10 text-blue-500" />,
            number: "89",
            label: "Sự Kiện",
            gradient: "from-blue-100 to-blue-50",
        },
    ];

    return (
        <section className="container mx-auto px-4 mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((item, i) => (
                    <RevealOnScroll key={i} delay={100 * i}>
                        <div
                            className={`p-6 rounded-xl bg-gradient-to-br ${item.gradient} shadow-sm hover:shadow-md hover:-translate-y-1 
                            transition-all duration-300 text-center flex flex-col items-center border-gray-200`}
                        >
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-inner mb-3">
                                {item.icon}
                            </div>
                            <CountUp 
                                end={parseInt(item.number.replace(/,/g, ""))} 
                                duration={2} 
                                separator="," 
                                className="text-3xl font-extrabold text-gray-800" 
                            />

                            <p className="text-gray-600 font-medium mt-1">{item.label}</p>
                        </div>
                    </RevealOnScroll>
                ))}
            </div>
        </section>
    );
}
