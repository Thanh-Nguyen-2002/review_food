import { Flame, Coffee, Sandwich, Cake, UtensilsCrossed, Star } from "lucide-react";

export default function HotTrendsVN() {
    const trends = [
        {
            name: "Bánh Mì Việt Nam",
            desc: "Món ăn đường phố nổi tiếng khắp thế giới",
            icon: <Sandwich className="w-10 h-10 text-yellow-500" />,
            rank: 1,
            rating: 4.9,
        },
        {
            name: "Cà Phê Sữa Đá",
            desc: "Hương vị quen thuộc, đậm đà, lan tỏa toàn cầu",
            icon: <Coffee className="w-10 h-10 text-yellow-500" />,
            rank: 2,
            rating: 4.8,
        },
        {
            name: "Bánh Xèo Miền Tây",
            desc: "Giòn rụm, vàng ươm, hòa quyện cùng rau sống tươi",
            icon: <UtensilsCrossed className="w-10 h-10 text-yellow-500" />,
            rank: 3,
            rating: 4.7,
        },
        {
            name: "Chè Ba Màu",
            desc: "Ngọt thanh, mát lạnh, biểu tượng món tráng miệng Việt",
            icon: <Cake className="w-10 h-10 text-yellow-500" />,
            rank: 4,
            rating: 4.6,
        },
    ];

    return (
        <section className="bg-white text-gray-900 py-1 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,213,79,0.1),_transparent_70%)] 
            pointer-events-none">
            </div>

            <div className="text-center relative z-10 mb-14">
                <div className="flex justify-center items-center mb-3">
                    <Flame className="w-8 h-8 text-yellow-500 animate-pulse" />
                    <h2 className="text-4xl md:text-4xl font-extrabold ml-3 bg-gradient-to-r from-yellow-500 to-yellow-300 
                        bg-clip-text text-transparent"
                    >
                        Món Hot Việt Nam
                    </h2>
                </div>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Những món ăn được cộng đồng yêu thích và tìm kiếm nhiều nhất hiện nay
                </p>
                <div className="mt-3 h-[3px] w-32 bg-yellow-400 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-[1500px] mx-auto relative z-10">
                {trends.map((item) => (
                    <div
                        key={item.name}
                        className="relative bg-white border border-gray-100 p-8 rounded-xl shadow-md hover:shadow-2xl 
                        hover:-translate-y-2 transition-all duration-300 group cursor-pointer hover:border-yellow-400"
                    >
                        <div className="absolute top-3 right-3 bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full">
                            🔥 Hot #{item.rank}
                        </div>

                        <div className="w-24 h-24 bg-yellow-50 rounded-full flex items-center justify-center 
                            mb-5 group-hover:scale-110 transition"
                        >
                            {item.icon}
                        </div>

                        <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-600 transition">
                            {item.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-5 line-clamp-2">{item.desc}</p>

                        <div className="flex justify-center items-center text-yellow-500 font-medium">
                            <span>{item.rating}</span>
                            <Star className="w-4 h-4 ml-1 fill-yellow-400" />
                        </div>

                        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition 
                                bg-gradient-to-br from-yellow-100/30 to-transparent blur-xl pointer-events-none">

                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-20 text-gray-700 italic relative z-10">
                “Ẩm thực Việt Nam – kết nối trái tim qua từng món ăn.”
            </div>
        </section>
    );
}
