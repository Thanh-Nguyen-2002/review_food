"use client";
import { Flame, Leaf, ChefHat, Gift, ArrowRight } from "lucide-react";
import RevealOnScroll from "../RevealOnScroll";

export default function FoodChallengesVN() {
    const challenges = [
        {
            title: "Thử Thách Vua Cay",
            desc: "Chinh phục 10 món cay Việt Nam nổi tiếng, liệu bạn có đủ dũng cảm?",
            color: "red",
            progress: 70,
            progressText: "7/10 món đã hoàn thành",
            icon: <Flame className="w-12 h-12 text-red-500" />,
        },
        {
            title: "30 Ngày Ăn Healthy",
            desc: "Thay đổi thói quen với rau củ tươi ngon, món ăn lành mạnh mỗi ngày!",
            color: "green",
            progress: 50,
            progressText: "Ngày 15/30",
            icon: <Leaf className="w-12 h-12 text-green-500" />,
        },
        {
            title: "Master Chef Tài Năng",
            desc: "Tham gia cuộc thi nấu món truyền thống Việt Nam, trổ tài nấu nướng!",
            color: "yellow",
            progress: 80,
            progressText: "Còn 12 ngày đăng ký",
            icon: <ChefHat className="w-12 h-12 text-yellow-500" />,
        },
    ];

    return (
        <>
            <RevealOnScroll delay={100}>
                <div className="py-6
                text-center bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 flex items-center justify-center gap-2">
                            <Gift className="text-yellow-500 w-7 h-7" />
                            <span className="text-yellow-500">Khám Phá</span>
                        </h2>
                        <p className="text-xl text-gray-700 font-light max-w-2xl mx-auto">
                            Tham gia ngay các thử thách thú vị, nâng cao kỹ năng và nhận về những phần thưởng giá trị!
                        </p>
                    </div>
                </div>
            </RevealOnScroll>

            <section className="max-w-[1500px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {challenges.map((c, i) => (
                    <RevealOnScroll key={c.title} delay={100 * i}>
                        <div
                            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden group"
                        >

                            <div className={`absolute top-0 right-0 w-20 h-20 bg-${c.color}-100 rounded-bl-full opacity-70 group-hover:w-24 group-hover:h-24 transition-all duration-300`}></div>

                            <div className="flex items-center justify-between mb-6">
                                <div className={`p-3 rounded-full bg-${c.color}-50 shadow-md group-hover:scale-105 transition-transform duration-300`}>
                                    {c.icon}
                                </div>

                                {c.color === "red" && (
                                    <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">HOT</span>
                                )}
                            </div>

                            <h3 className="text-3xl font-extrabold text-gray-900 mb-3 leading-tight">
                                {c.title}
                            </h3>
                            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                                {c.desc}
                            </p>

                            <div className="mb-6">
                                <div className="w-full bg-gray-200 rounded-full h-3.5 relative overflow-hidden">
                                    <div
                                        className={`bg-${c.color}-500 h-full rounded-full transition-all duration-700 ease-out`}
                                        style={{ width: `${c.progress}%` }}
                                    ></div>
                                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white tracking-wide">
                                        {c.progress}%
                                    </span>
                                </div>
                                <p className="text-gray-600 text-sm mt-2 flex justify-between">
                                    <span className="font-semibold">Tiến độ:</span>
                                    <span className={`font-bold text-${c.color}-600`}>
                                        {c.progressText}
                                    </span>
                                </p>
                            </div>

                            <button
                                className={`w-full bg-${c.color}-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-${c.color}-600 
                                transition duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg flex items-center justify-center cursor-pointer`}
                            >
                                Tham Gia Ngay <ArrowRight className="ml-2 w-5 h-5" />
                            </button>
                        </div>
                    </RevealOnScroll>
                ))}
            </section>
        </>
    );
}