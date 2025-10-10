"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import AnimationShowContent from "@/components/animations/AnimationShowContent";

const reviews = [
    {
        id: 1,
        title: "Phở Hà Nội – Hương vị quốc hồn quốc túy",
        region: "Miền Bắc",
        image: "/images/pho_viet.jpg",
        desc: "Tô phở Hà Nội không chỉ là món ăn, mà còn là ký ức, là hương vị của quê hương trong từng giọt nước dùng trong veo.",
        review:
        "Nước phở đậm đà, thịt bò chín tới, hành hoa thơm lừng. Mùi vị khiến mình nhớ mãi. Một lần đến Hà Nội nhất định phải thử.",
    },
    {
        id: 2,
        title: "Bánh xèo miền Tây – Vàng giòn, dân dã",
        region: "Miền Tây",
        image: "/images/banh_xeo.jpg",
        desc: "Tiếng xèo vui tai, màu vàng tươi của nghệ cùng vị béo thơm của tôm thịt là bản hòa tấu miền sông nước.",
        review:
        "Cảm giác cắn vào lớp vỏ giòn rụm, rau sống tươi mát, chấm nước mắm chua ngọt đúng điệu, không lẫn vào đâu được.",
    },
    {
        id: 3,
        title: "Cao lầu Hội An – Linh hồn phố cổ",
        region: "Miền Trung",
        image: "/images/cao_lau.png",
        desc: "Món ăn mang sắc vàng của mì, mùi thơm của thịt xá xíu, hòa cùng nước dùng thanh ngọt.",
        review:
        "Thưởng thức cao lầu giữa lòng phố Hội, nghe tiếng chuông chùa và tiếng đèn lồng khẽ lay – cảm giác rất riêng.",
    },
];

export default function Reviews() {
    const [current, setCurrent] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % reviews.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

    const currentReview = reviews[current];

    return (
        <section className="bg-white text-black py-16 px-6 max-w-[1500px] mx-auto">
            <h1 className="text-4xl md:text-4xl font-bold text-center mb-10">
                <span className="text-yellow-500">Review</span> Ẩm Thực Việt Nam
            </h1>

            <div className="relative flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">

                <div className="md:w-1/2 w-full relative">
                    <Image
                        src={currentReview.image}
                        alt={currentReview.title}
                        className="rounded-2xl shadow-lg w-full h-[400px] object-cover transform hover:scale-[1.03] 
                        transition-transform duration-500"
                        height={400}
                        width={500}
                    />


                    <button
                        onClick={prevSlide}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-yellow-500 
                            text-black p-2 rounded-full shadow cursor-pointer"
                    >
                        <ChevronLeft />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-yellow-500 
                        text-black p-2 rounded-full shadow cursor-pointer"
                    >
                        <ChevronRight />
                    </button>
                </div>

                <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold mb-2">{currentReview.title}</h2>
                    <p className="text-sm text-gray-600 italic mb-2">({currentReview.region})</p>
                    <p className="text-gray-800 mb-3">{currentReview.desc}</p>

                    <AnimationShowContent 
                        isOpen={isOpen} 
                        content={currentReview.review} 
                    />


                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center mt-3 text-yellow-600 hover:text-yellow-700 font-semibold cursor-pointer"
                    >
                        {isOpen ? (
                            <>
                                Thu gọn <ChevronUp className="ml-1" size={18} />
                            </>
                            ) : (
                            <>
                                Xem thêm <ChevronDown className="ml-1" size={18} />
                            </>
                        )}
                    </button>

                    <div className="flex gap-2 mt-6">
                        {reviews.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                                i === current ? "bg-yellow-500 scale-110" : "bg-gray-300"
                                }`}
                            >
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-12 max-w-2xl mx-auto text-center border-t border-gray-200 pt-8">
                <h3 className="text-xl font-semibold mb-4">Bình luận nổi bật</h3>
                <p className="text-gray-700 italic">
                    &quot;Ẩm thực Việt Nam không chỉ là hương vị – đó là một hành trình của ký ức, tình người và quê hương.&quot;
                </p>
                <p className="text-sm text-yellow-600 mt-2">– Một người yêu phở –</p>
            </div>
        </section>
    );
}
