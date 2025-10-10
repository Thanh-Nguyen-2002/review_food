"use client";
import { Soup, Fish, Cake, Clock, Users } from "lucide-react";
import RevealOnScroll from "../RevealOnScroll";

export default function ExploreRecipesVN() {
    const recipes = [
        {
            name: "Bún Riêu Cua",
            desc: "Món bún truyền thống thanh mát, hương vị đồng quê.",
            icon: <Soup className="text-yellow-500 w-10 h-10" />,
            time: "25 phút",
            serve: "3 người",
            rate: "4.9",
        },
        {
            name: "Cá Kho Tộ",
            desc: "Món ăn đậm chất miền Tây với vị mặn, ngọt hài hòa.",
            icon: <Fish className="text-yellow-500 w-10 h-10" />,
            time: "45 phút",
            serve: "4 người",
            rate: "4.8",
        },
        {
            name: "Bánh Chuối Nướng",
            desc: "Món tráng miệng dân dã nhưng đầy hấp dẫn.",
            icon: <Cake className="text-yellow-500 w-10 h-10" />,
            time: "30 phút",
            serve: "5 người",
            rate: "4.7",
        },
    ];

    return (
        <div className="bg-white text-black">
            <RevealOnScroll delay={200}>
                <div className="py-12 text-center">
                    <div className="container mx-auto">
                        <h2 className="text-4xl font-extrabold text-yellow-500 mb-3 flex items-center justify-center gap-2">
                            <Soup className="w-8 h-8 text-yellow-500" />
                            Khám Phá Công Thức Việt
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Cùng học nấu những món ăn truyền thống Việt Nam thơm ngon tại nhà.
                        </p>
                    </div>
                </div>
            </RevealOnScroll>

            <section className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {recipes.map((r, i) => (
                    <RevealOnScroll key={r.name} delay={200 * i}>
                        <div
                            className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm 
                            hover:shadow-xl hover:border-yellow-400 transition-all duration-300 ease-out 
                            flex flex-col justify-between text-center"
                        >
                            <div className="flex flex-col items-center">
                                <div className="bg-yellow-50 p-4 rounded-full mb-4 shadow-inner">
                                    {r.icon}
                                </div>
                                <h3 className="text-lg font-semibold mb-1">{r.name}</h3>
                                <p className="text-gray-600 text-sm mb-4">{r.desc}</p>
                            </div>

                            <div className="flex justify-between text-xs text-gray-500 mb-4 px-2">
                                <span className="flex items-center">
                                    <Clock className="w-4 h-4 mr-1 text-yellow-500" /> {r.time}
                                </span>
                                <span className="flex items-center">
                                    <Users className="w-4 h-4 mr-1 text-yellow-500" /> {r.serve}
                                </span>
                                <span className="text-yellow-500 font-medium">{r.rate} ⭐</span>
                            </div>

                            <button
                                className="w-full bg-yellow-500 text-white px-4 py-3 rounded-lg font-medium cursor-pointer
                                hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-[1.02]"
                            >
                                Xem Công Thức
                            </button>
                        </div>
                    </RevealOnScroll>
                ))}
            </section>
        </div>
    );
}
