import { Soup, Drumstick, Fish, Star } from "lucide-react";

export default function VietnamCuisine() {
    const regions = [
        {
            name: "Miền Bắc",
            color: "blue",
            icon: <Soup className="w-12 h-12 text-blue-500" />,
            dishes: [
                { name: "Phở Hà Nội", rating: 4.9 },
                { name: "Bún Chả", rating: 4.8 },
                { name: "Chả Cá Lã Vọng", rating: 4.7 },
            ],
        },
        {
            name: "Miền Trung",
            color: "orange",
            icon: <Drumstick className="w-12 h-12 text-orange-500" />,
            dishes: [
                { name: "Mì Quảng", rating: 4.8 },
                { name: "Bún Bò Huế", rating: 4.9 },
                { name: "Cao Lầu Hội An", rating: 4.7 },
            ],
        },
        {
            name: "Miền Nam",
            color: "green",
            icon: <Fish className="w-12 h-12 text-green-500" />,
            dishes: [
                { name: "Cơm Tấm Sài Gòn", rating: 4.9 },
                { name: "Hủ Tiếu Nam Vang", rating: 4.8 },
                { name: "Bánh Xèo Miền Tây", rating: 4.7 },
            ],
        },
    ];

    return (
        <section className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {regions.map((region) => (
                <div
                    key={region.name}
                    className={`bg-${region.color}-50 p-6 rounded-lg shadow-md flex flex-col justify-between`}
                >
                    <div>
                        <div className="mb-4">{region.icon}</div>
                        <h3 className="text-2xl font-bold mb-4">{region.name}</h3>
                        <ul className="space-y-3 mb-6">
                            {region.dishes.map((dish) => (
                                <li
                                    key={dish.name}
                                    className="flex items-center justify-between text-gray-700"
                                >
                                    <span>{dish.name}</span>
                                    <span className="flex items-center text-yellow-500">
                                        {dish.rating}
                                        <Star className="w-4 h-4 ml-1 fill-yellow-400" />
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button
                        className={`w-full bg-${region.color}-500 text-white px-4 py-3 rounded-lg hover:bg-${region.color}-600 
                        transition duration-300 font-medium cursor-pointer`}
                    >
                        Khám Phá Ngay
                    </button>
                </div>
            ))}
        </section>
    );
}
