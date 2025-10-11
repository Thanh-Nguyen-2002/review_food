"use client";
import { useState } from "react";
import { BookOpen, CalendarDays, ChevronDown, ChevronUp } from "lucide-react";
import RevealOnScroll from "../RevealOnScroll";
import AnimationShowContent from "../animations/AnimationShowContent";

export default function FoodStoriesVN() {
    const stories = [
        {
            title: "Lịch Sử Phở Việt Nam",
            desc: "Phở không chỉ là món ăn, mà còn là biểu tượng văn hóa của người Việt, gắn liền với Hà Nội xưa.",
            full: `Nguồn gốc của phở bắt đầu từ đầu thế kỷ 20 tại miền Bắc Việt Nam, đặc biệt là Hà Nội. 
            Ban đầu, phở được bán rong trên những gánh hàng, được nấu từ nước xương bò, gừng, hành nướng và bánh phở trắng mềm. 
            Trải qua thời gian, phở đã lan tỏa khắp Việt Nam và trở thành món ăn biểu tượng quốc gia, được cả thế giới biết đến.`,
            color: "orange",
            date: "2 ngày trước",
        },
        {
            title: "Câu Chuyện Bánh Chưng Ngày Tết",
            desc: "Bánh chưng là biểu tượng của đất trời, thể hiện lòng biết ơn của con cháu với tổ tiên.",
            full: `Theo truyền thuyết Lang Liêu, bánh chưng tượng trưng cho đất, bánh dày tượng trưng cho trời. 
            Trong dịp Tết, người Việt gói bánh chưng để tỏ lòng hiếu kính với tổ tiên và cầu mong năm mới sung túc, ấm no. 
            Việc cùng nhau gói bánh, trông nồi bánh đêm giao thừa cũng là dịp gắn kết tình cảm gia đình.`,
            color: "green",
            date: "1 tuần trước",
        },
    ];

    const [expanded, setExpanded] = useState<string | null>(null);

    return (
        <section className="bg-white text-gray-900">
            <RevealOnScroll delay={150}>
                <div className="py-10 text-center">
                    <div className="container mx-auto">
                        <h2 className="text-4xl font-extrabold text-yellow-500 mb-2 flex items-center justify-center">
                            <BookOpen className="text-yellow-500 w-7 h-7 mr-2" /> Câu Chuyện Ẩm Thực
                        </h2>
                        <p className="text-lg text-gray-700 font-light">
                            Khám phá những câu chuyện thú vị đằng sau món ăn truyền thống
                        </p>
                    </div>
                </div>
            </RevealOnScroll>

            <div className="max-w-[1500px] mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                {stories.map((story, i) => {
                    const isOpen = expanded === story.title;

                    return (
                        <RevealOnScroll key={story.title} delay={100 * i}>
                            <div
                                className={`bg-${story.color}-50 p-6 rounded-lg shadow-md flex flex-col justify-between transition-all duration-300`}
                            >
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{story.title}</h3>
                                    <p className="text-gray-700 text-sm mb-4">{story.desc}</p>

                                    <div
                                        className={`text-gray-600 text-sm overflow-hidden transition-all duration-500 ease-in-out ${
                                            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                    >
                                        <AnimationShowContent content={story.full} isOpen={isOpen} />

                                    </div>
                                </div>

                                <div className="flex justify-between items-center text-gray-500 text-xs mt-2">
                                    <span className="flex items-center">
                                        <CalendarDays className="w-4 h-4 mr-1" /> {story.date}
                                    </span>
                                    <button
                                        onClick={() =>
                                            setExpanded(isOpen ? null : story.title)
                                        }
                                        className={`flex items-center gap-1 bg-${story.color}-400 text-white px-4 py-2 rounded-full w-35 justify-center
                                            text-sm hover:bg-${story.color}-500 transition duration-300 cursor-pointer border border-gray-200`}
                                    >
                                        {isOpen ? (
                                            <>
                                                <div className="text-black flex gap-2 items-center">
                                                    Thu Gọn <ChevronUp className="w-4 h-4"/>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="text-black flex gap-2 items-center">
                                                    Đọc Tiếp <ChevronDown className="w-4 h-4" />
                                                </div>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </RevealOnScroll>
                    );
                })}
            </div>
        </section>
    );
}
