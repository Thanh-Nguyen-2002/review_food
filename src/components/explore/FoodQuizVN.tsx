"use client";
import { useState } from "react";
import { Brain, Trophy, ChevronRight, CheckCircle, XCircle } from "lucide-react";
import RevealOnScroll from "../RevealOnScroll";
import CountUp from "react-countup";

export default function FoodQuizVN() {
    const quizData = {
        question: "Món ăn nào là đặc sản nổi tiếng của thành phố Huế mộng mơ?",
        options: [
            { text: "Phở cuốn", isCorrect: false },
            { text: "Bún bò Huế", isCorrect: true },
            { text: "Bánh xèo", isCorrect: false },
            { text: "Mì Quảng", isCorrect: false },
        ],
    };

    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(1247);
    const [rank] = useState(15);

    const handleOptionClick = (optionText: string, isCorrect: boolean) => {
        if (!isAnswered) {
            setSelectedOption(optionText);
            setIsAnswered(true);

            if (isCorrect) {
                setScore(prevScore => prevScore + 100);
            }
        }
    };

    return (
        <>
            <RevealOnScroll delay={150}>
                <div className="py-2 text-center bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 flex items-center justify-center gap-2">
                            <Brain className=" text-yellow-500 w-7 h-7 animate-pulse" />
                            <span className="text-yellow-500">Thử Thách</span>
                        </h2>
                        <p className="text-xl text-gray-700 font-light max-w-2xl mx-auto">
                            Kiểm tra hiểu biết sâu sắc của bạn về những món ăn truyền thống Việt Nam qua các câu hỏi thú vị!
                        </p>
                    </div>
                </div>
            </RevealOnScroll>

            <section className="container mx-auto px-4 py-12 flex justify-center">
                <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl max-w-3xl w-full text-center border border-gray-100 relative overflow-hidden">
                    <RevealOnScroll delay={150}>
                        <div className="absolute top-0 left-0 w-24 h-24 bg-yellow-100 rounded-full opacity-50 blur-xl -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-100 rounded-full opacity-50 blur-xl translate-x-1/2 translate-y-1/2"></div>

                        <p className="text-2xl font-semibold text-yellow-600 uppercase mb-3">Câu hỏi số 1</p>
                        <h3 className="text-2xl md:text-2xl font-extrabold text-gray-900 mb-8 leading-tight">
                            {quizData.question}
                        </h3>
                    </RevealOnScroll>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {quizData.options.map((opt, i) => (
                            <RevealOnScroll delay={100 * i} key={opt.text}>
                                <button
                                    onClick={() => handleOptionClick(opt.text, opt.isCorrect)}
                                    disabled={isAnswered}
                                    className={`
                                        relative flex items-center justify-between px-6 py-4 rounded-xl w-full
                                        text-lg font-semibold text-gray-800 border-2 transition duration-300
                                        ${
                                            selectedOption === opt.text
                                                ? opt.isCorrect
                                                    ? "bg-green-50 border-green-500 text-green-800 shadow-md"
                                                    : "bg-red-50 border-red-500 text-red-800 shadow-md"
                                                : isAnswered && opt.isCorrect
                                                    ? "bg-green-50 border-green-300 text-green-800 shadow-sm"
                                                    : "bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-yellow-300"
                                        }
                                        ${isAnswered ? "cursor-not-allowed" : "cursor-pointer"}
                                    `}
                                >
                                    <span className="flex-grow text-left">{opt.text}</span>
                                    {isAnswered && (
                                        <span className="ml-3">
                                            {opt.text === selectedOption ? (
                                                opt.isCorrect ? (
                                                    <CheckCircle className="w-6 h-6 text-green-500" />
                                                ) : (
                                                    <XCircle className="w-6 h-6 text-red-500" />
                                                )
                                            ) : (
                                                opt.isCorrect && <CheckCircle className="w-6 h-6 text-green-500 opacity-70" />
                                            )}
                                        </span>
                                    )}
                                </button>
                            </RevealOnScroll>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 p-6 rounded-xl mb-8 shadow-inner border border-gray-100">
                        <div className="flex items-center text-gray-700 text-xl font-medium mb-4 md:mb-0">
                            Điểm của bạn:{" "}
                            <CountUp 
                                key={score}
                                end={score} 
                                duration={4} 
                                separator="," 
                                className="font-extrabold text-yellow-600 ml-2 text-2xl animate-fade-in-up"
                            />
                        </div>
                            

                        <div className="flex items-center text-gray-700 text-xl font-medium">
                            Hạng:{" "}
                            <span className="font-extrabold text-yellow-600 ml-2 text-2xl animate-fade-in-up">
                                {rank.toLocaleString()}/1000
                            </span>
                        </div>
                    </div>

                    <button className="w-full bg-yellow-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-yellow-600 
                        transition duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center cursor-pointer">
                        <Trophy className="mr-3 w-6 h-6" /> Chơi Quiz Đầy Đủ <ChevronRight className="ml-2 w-5 h-5" />
                    </button>
                </div>
            </section>
        </>
    );
}