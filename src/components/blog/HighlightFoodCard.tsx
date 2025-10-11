"use client";
import Image from "next/image";
import { Star, ChefHat } from "lucide-react";
import Link from "next/link";

export default function HighlightFoodCard() {
    const id = 'mon_gia_cay'
    return (
        <section className="relative max-w-[1500px] mx-auto py-16 flex flex-col md:flex-row items-center gap-10 overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute w-80 h-80 bg-orange-100 rounded-full blur-3xl top-10 left-0 opacity-40"></div>
                <div className="absolute w-96 h-96 bg-yellow-200 rounded-full blur-3xl bottom-0 right-10 opacity-30"></div>
                <div className="absolute w-64 h-64 bg-amber-300/20 rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl blur-2xl"></div>
            </div>

            <div className="flex-1 space-y-5 relative z-10">
                <div className="flex flex-col gap-3">
                    <span className="bg-yellow-100 text-black font-semibold text-sm px-3 py-3 rounded-[6px] shadow-sm w-40 text-center">
                        Món Truyền Thống
                    </span>

                    <h2 className="text-3xl md:text-3xl font-light text-gray-900 leading-snug">
                        Giả Cầy Việt Nam: Hương Vị Dân Dã  
                        <span className="text-orange-500 block">Từ Gian Bếp Quê Hương</span>
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                        Giả cầy – món ăn dân dã mang đậm hương vị Bắc Bộ, kết hợp giữa mắm tôm, riềng, mẻ 
                        và thịt heo tạo nên sự hài hòa giữa chua, cay, mặn, béo. Một món ăn bình dị nhưng gợi 
                        nhớ sâu sắc đến mâm cơm gia đình xưa.
                    </p>

                    <div className="flex items-center gap-3">
                        <div className="bg-orange-100 text-orange-600 rounded-full p-2">
                            <ChefHat size={18} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-800">Chef Minh Anh</p>
                            <p className="text-xs text-gray-500">20 tháng 10, 2024 • 6 phút đọc</p>
                        </div>
                    </div>

                    <Link href={`bai_viet/${id}`}>
                        <button className="relative overflow-hidden h-12 px-6 rounded-full font-semibold 
                                text-white bg-gradient-to-r from-orange-500 to-red-400 shadow-md group cursor-pointer">
                            <p className="relative z-10 h-12 w-full transition-transform duration-300 
                                group-hover:translate-y-full block content-center">
                                Đọc bài viết đầy đủ →
                            </p>

                            <p className="absolute inset-0 flex h-12 items-center justify-center text-white translate-y-[-100%] 
                                group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
                            >
                                Đọc bài viết đầy đủ →
                            </p>

                            <p className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-red-400/30 opacity-0 
                                group-hover:opacity-100 transition duration-300">

                            </p>
                        </button>
                    </Link>

                </div>
            </div>

            <div className="flex-1 flex justify-center">
                <div className="relative w-[400px] h-[260px] rounded-3xl 
                    shadow-lg flex items-center justify-center"
                >
                    <Image
                        src="/images/pho_co_ha_noi.jpg"
                        alt="Giả cầy Việt Nam"
                        width={400}
                        height={260}
                        className="object-contain drop-shadow-lg animate-bounce-slow rounded-3xl"
                    />

                    <div className="absolute top-6 left-6 w-12 h-12 bg-white/10 rounded-xl backdrop-blur-sm rotate-12"></div>
                    <div className="absolute bottom-6 right-10 w-14 h-14 bg-white/20 rounded-full backdrop-blur-sm blur-sm"></div>

                    <div className="absolute -bottom-7 -right-15 bg-white shadow-lg rounded-xl px-4 
                        py-2 flex items-center gap-2 z-20 border border-gray-100"
                    >
                        <Star className="text-yellow-400 fill-yellow-400" size={18} />
                        <div>
                            <p className="text-sm font-semibold text-gray-800">4.8/5</p>
                            <p className="text-xs text-gray-500">189 đánh giá</p>
                        </div>
                    </div>
                </div>

                
            </div>
        </section>
    );
}
