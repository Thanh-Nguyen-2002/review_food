import { Flame, Coffee, Sandwich, Cake, UtensilsCrossed, Star } from "lucide-react";

export default function HotTrendsVN() {
    const trends = [
        {
            name: "Bánh Mì Việt Nam",
            desc: "Món ăn đường phố nổi tiếng khắp thế giới",
            color: "yellow",
            icon: <Sandwich className="w-10 h-10 text-yellow-500" />,
            rank: "#1",
            rating: 4.9,
        },
        {
            name: "Cà Phê Sữa Đá",
            desc: "Hương vị quen thuộc, đậm đà, lan tỏa toàn cầu",
            color: "brown",
            icon: <Coffee className="w-10 h-10 text-orange-700" />,
            rank: "#2",
            rating: 4.8,
        },
        {
            name: "Bánh Xèo Miền Tây",
            desc: "Giòn rụm, vàng ươm, hòa quyện cùng rau sống tươi",
            color: "green",
            icon: <UtensilsCrossed className="w-10 h-10 text-green-500" />,
            rank: "#3",
            rating: 4.7,
        },
        {
            name: "Chè Ba Màu",
            desc: "Ngọt thanh, mát lạnh, biểu tượng món tráng miệng Việt",
            color: "purple",
            icon: <Cake className="w-10 h-10 text-purple-500" />,
            rank: "#4",
            rating: 4.6,
        },
    ];

    return (
        <>
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 py-12 px-4 text-center">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-2 flex items-center justify-center">
                        <Flame className="mr-3 text-red-500 w-7 h-7" /> Món Hot Việt Nam
                    </h2>
                    <p className="text-lg text-gray-700">
                        Những món ăn được cộng đồng yêu thích và tìm kiếm nhiều nhất
                    </p>
                </div>
            </div>

            <section className="container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {trends.map((item) => (
                    <div
                        key={item.name}
                        className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
                    >
                        <div
                            className={`w-24 h-24 bg-${item.color}-100 rounded-full flex items-center justify-center mb-4`}
                        >
                            {item.icon}
                        </div>
                        <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                        <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                        <div className="flex items-center justify-between w-full text-sm">
                            <span
                                className={`bg-${item.color}-100 text-${item.color}-700 px-3 py-1 rounded-full font-medium`}
                            >
                                #Trending {item.rank}
                            </span>
                            <span className="flex items-center text-yellow-500">
                                {item.rating}
                                <Star className="w-4 h-4 ml-1 fill-yellow-400" />
                            </span>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}
