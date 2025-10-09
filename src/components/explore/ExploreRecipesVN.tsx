import { Soup, Fish, Cake, Clock, Users } from "lucide-react";

export default function ExploreRecipesVN() {
    const recipes = [
        {
            name: "Bún Riêu Cua",
            desc: "Món bún truyền thống thanh mát, hương vị đồng quê",
            icon: <Soup className="text-red-500 w-10 h-10" />,
            time: "25 phút",
            serve: "3 người",
            rate: "4.9",
        },
        {
            name: "Cá Kho Tộ",
            desc: "Món ăn đậm chất miền Tây với vị mặn, ngọt hài hòa",
            icon: <Fish className="text-blue-500 w-10 h-10" />,
            time: "45 phút",
            serve: "4 người",
            rate: "4.8",
        },
        {
            name: "Bánh Chuối Nướng",
            desc: "Món tráng miệng dân dã nhưng đầy hấp dẫn",
            icon: <Cake className="text-purple-500 w-10 h-10" />,
            time: "30 phút",
            serve: "5 người",
            rate: "4.7",
        },
    ];

    return (
        <>
            <div className="bg-gradient-to-r from-blue-100 to-green-100 py-12 text-center">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-2 flex items-center justify-center">
                        <Soup className="text-green-500 w-7 h-7 mr-2" /> Khám Phá Công Thức Việt
                    </h2>
                    <p className="text-lg text-gray-700">
                        Học cách nấu những món ăn truyền thống Việt Nam
                    </p>
                </div>
            </div>

            <section className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {recipes.map((r) => (
                    <div
                        key={r.name}
                        className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between text-center"
                    >
                        <div className="flex items-center justify-center mb-4">
                            <div className="bg-gray-50 p-4 rounded-full">{r.icon}</div>
                        </div>
                        <h3 className="text-lg font-bold mb-1">{r.name}</h3>
                        <p className="text-gray-600 text-sm mb-3">{r.desc}</p>
                        <div className="flex justify-between text-xs text-gray-500 mb-4">
                            <span className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" /> {r.time}
                            </span>
                            <span className="flex items-center">
                                <Users className="w-4 h-4 mr-1" /> {r.serve}
                            </span>
                            <span className="text-yellow-500">{r.rate} ⭐</span>
                        </div>
                        <button className="w-full bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 
                            transition duration-300 font-medium cursor-pointer"
                        >
                            Xem Công Thức
                        </button>
                    </div>
                ))}
            </section>
        </>
    );
}
