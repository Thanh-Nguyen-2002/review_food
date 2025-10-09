import { Soup, Drumstick, Fish, Star } from "lucide-react";

interface Region {
    name: string;
    icon: React.ReactNode;
    dishes: { name: string; rating: number }[];
}

export default function VietnamCuisine() {
    const regions: Region[] = [
        {
            name: "Ẩm Thực Miền Bắc",
            icon: <Soup className="w-12 h-12 text-yellow-500" />,
            dishes: [
                { name: "Phở Hà Nội", rating: 4.9 },
                { name: "Bún Chả", rating: 4.8 },
                { name: "Chả Cá Lã Vọng", rating: 4.7 },
            ],
        },
        {
            name: "Ẩm Thực Miền Trung",
            icon: <Drumstick className="w-12 h-12 text-yellow-500" />,
            dishes: [
                { name: "Bún Bò Huế", rating: 4.9 },
                { name: "Mì Quảng", rating: 4.8 },
                { name: "Cao Lầu Hội An", rating: 4.7 },
            ],
        },
        {
            name: "Ẩm Thực Miền Nam",
            icon: <Fish className="w-12 h-12 text-yellow-500" />,
            dishes: [
                { name: "Cơm Tấm Sài Gòn", rating: 4.9 },
                { name: "Hủ Tiếu Nam Vang", rating: 4.8 },
                { name: "Bánh Xèo Miền Tây", rating: 4.7 },
            ],
        },
    ];

    return (
        <section className="bg-white text-gray-900 py-10 px-6">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Hương Vị Ba Miền Việt Nam</h2>
                <p className="text-gray-600 font-light">
                    Hành trình khám phá tinh hoa ẩm thực từ Bắc chí Nam – nơi mỗi món ăn kể một câu chuyện.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {regions.map((region) => (
                    <div
                        key={region.name}
                        className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                        <div className="flex flex-col items-center text-center mb-6">
                            {region.icon}
                            <h3 className="text-2xl font-semibold mt-4">{region.name}</h3>
                        </div>

                        <ul className="space-y-4 mb-6">
                            {region.dishes.map((dish) => (
                                <li
                                    key={dish.name}
                                    className="flex items-center justify-between text-gray-700"
                                >
                                    <span>{dish.name}</span>
                                    <span className="flex items-center text-yellow-500 font-medium">
                                        {dish.rating}
                                        <Star className="w-4 h-4 ml-1 fill-yellow-400" />
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <button className="w-full border border-yellow-400 text-yellow-600 font-medium py-3 rounded-lg 
                            hover:bg-yellow-500 hover:text-white transition duration-300 cursor-pointer">
                            Khám Phá Ngay
                        </button>
                    </div>
                ))}
            </div>

            <div className="text-center mt-16">
                <p className="text-gray-700 text-lg">
                        “Ẩm thực Việt – nơi hương vị kết nối trái tim.”
                </p>
                <div className="mt-3 h-[2px] w-32 bg-yellow-400 mx-auto rounded-full" />
            </div>
        </section>
    );
}
