"use client";
import Link from "next/link";
import { Star, Utensils, Heart, MapPin } from "lucide-react";

export default function TextInfo() {
    return (
        <section className="max-w-[1400px] mx-auto p-5">
            <div className="bg-zinc-900 text-white py-10 px-6 md:px-12 rounded-xl shadow-lg mt-[-80px] relative z-10">

                <h2 className="text-3xl md:text-4xl font-extrabold text-amber-400 mb-3">
                    REVIEWFOOD
                </h2>

                <p className="text-lg md:text-xl text-amber-300 mb-6 border-l-4 border-amber-500 pl-3 italic">
                    Khám phá – Đánh giá – Thưởng thức hương vị Việt!
                </p>

                <ul className="text-gray-300 grid md:grid-cols-2 gap-4 mb-8">
                    <li className="flex items-center gap-3">
                        <Star className="text-amber-400" size={20} />  
                        Đánh giá trung thực – khách quan từ cộng đồng yêu ẩm thực
                    </li>
                    <li className="flex items-center gap-3">
                        <Utensils className="text-amber-400" size={20} />  
                        Đa dạng món ngon từ Bắc chí Nam, đủ loại phong cách
                    </li>
                    <li className="flex items-center gap-3">
                        <Heart className="text-amber-400" size={20} />  
                        Trải nghiệm – cảm nhận – chia sẻ đam mê ẩm thực Việt
                    </li>
                    <li className="flex items-center gap-3">
                        <MapPin className="text-amber-400" size={20} />  
                        Gợi ý quán ăn ngon, địa điểm nổi bật quanh bạn
                    </li>
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href="/reviews"
                        className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-md font-semibold text-center transition"
                    >
                        Xem Bài Review
                    </Link>
                    {/* <Link
                        href="/contact"
                        className="border border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-white px-6 py-3 rounded-md font-semibold text-center transition"
                    >
                        Gửi Review Của Bạn
                    </Link> */}
                </div>
            </div>
        </section>
    );
}
