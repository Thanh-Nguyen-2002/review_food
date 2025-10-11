"use client";
import { Star } from "lucide-react";

const reviews = [
    {
        title: "Phở Hà Nội Huyền Thoại",
        desc: "Một tác phẩm nghệ thuật ẩm thực! Nước dùng trong vắt như pha lê, thịt bò tan chảy trên đầu lưỡi, bánh phở mềm mại hoàn hảo.",
        city: "Phở cổ Hà Nội",
        button: "Xem chi tiết →",
        color: "bg-yellow-400",
    },
    {
        title: "Bánh Mì Fusion",
        desc: "Sự kết hợp hoàn hảo giữa truyền thống và hiện đại.",
        button: "Khám phá →",
        color: "bg-emerald-400",
    },
    {
        title: "Bún Bò Huế Cung Đình",
        desc: "Hương vị hoàng gia trong từng thìa súp...",
        button: "Thưởng thức →",
        color: "bg-purple-500",
    },
    {
        title: "Bánh Xèo Miền Tây",
        desc: "Giòn rụm, thơm béo – tinh hoa Nam Bộ.",
        button: "Xem →",
        color: "bg-red-400",
    },
    {
        title: "Cơm Tấm Sài Gòn",
        desc: "Đậm đà hương vị miền Nam.",
        button: "Thử →",
        color: "bg-sky-400",
    },
    {
        title: "Bánh Flan",
        desc: "Mềm mịn, ngọt thanh.",
        button: "Ngon →",
        color: "bg-amber-400",
    },
    {
        title: "Chè Đậu Đỏ",
        desc: "Ngọt ngào như tình yêu đầu.",
        button: "Ngọt ngào →",
        color: "bg-pink-500",
    },
];

export default function FeaturedReviews() {
    return (
        <>

            <div className="text-center relative py-10">
                <div className="w-full h-24 bg-gradient-to-r from-orange-200 via-yellow-50 to-white -skew-y-3"></div>

                <div className="flex justify-center gap-1 mt-3">
                    <span className="w-6 h-2 bg-yellow-400 rounded-full"></span>
                    <span className="w-2 h-2 bg-yellow-300 rounded-full"></span>
                    <span className="w-2 h-2 bg-yellow-200 rounded-full"></span>
                </div>
            </div>

            <div className="max-w-[1500px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                <div className="md:col-span-2 bg-white shadow-xl rounded-2xl p-6 hover:scale-[1.02] transition-transform border border-gray-100">
                    <h2 className="text-xl font-bold text-yellow-600 mb-2 flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-500" />
                        {reviews[0].title}
                    </h2>
                    <p className="text-gray-700 mb-3">{reviews[0].desc}</p>
                    <p className="text-sm text-gray-500 mb-3">{reviews[0].city}</p>
                    <button
                        className={`${reviews[0].color} text-white font-medium px-4 py-2 rounded-md hover:opacity-90 transition`}
                    >
                        {reviews[0].button}
                    </button>
                </div>

                {reviews.slice(1).map((item, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-400" />
                            {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                        <button
                            className={`${item.color} text-white text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 cursor-pointer`}
                        >
                            {item.button}
                        </button>
                    </div>
                ))}
                <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center border border-gray-100">
                    <div className="text-3xl font-bold text-yellow-500 mb-2">1,250+</div>
                    <p className="text-gray-700">Reviews</p>
                    <p className="text-sm text-gray-500 mt-2">Được tin tưởng bởi cộng đồng</p>
                </div>
            </div>

            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-100/30 to-transparent -z-10"></div>
        </>
    );
}
