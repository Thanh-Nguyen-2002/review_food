import { Flame, Leaf, ChefHat, Gift } from "lucide-react";

export default function FoodChallengesVN() {
    const challenges = [
        {
            title: "Thử Thách Cay",
            desc: "Chinh phục 10 món cay Việt Nam nổi tiếng",
            color: "red",
            progress: "7/10",
            icon: <Flame className="w-10 h-10 text-red-500" />,
        },
        {
            title: "30 Ngày Ăn Healthy",
            desc: "Ăn lành mạnh với rau củ Việt mỗi ngày",
            color: "green",
            progress: "15/30",
            icon: <Leaf className="w-10 h-10 text-green-500" />,
        },
        {
            title: "Master Chef Tháng 12",
            desc: "Cuộc thi nấu món truyền thống Việt Nam",
            color: "orange",
            progress: "12 ngày còn lại",
            icon: <ChefHat className="w-10 h-10 text-orange-500" />,
        },
    ];

    return (
        <>
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 py-12 text-center">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-2 flex items-center justify-center">
                        <Gift className="mr-3 text-yellow-500 w-7 h-7" /> Thử Thách Ẩm Thực
                    </h2>
                    <p className="text-lg text-gray-700">
                        Tham gia thử thách và nhận phần thưởng hấp dẫn
                    </p>
                </div>
            </div>

            <section className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {challenges.map((c) => (
                    <div
                        key={c.title}
                        className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between"
                    >
                        <div>
                            <div className="mb-4">{c.icon}</div>
                            <h3 className="text-2xl font-bold mb-2">{c.title}</h3>
                            <p className="text-gray-700 mb-4">{c.desc}</p>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                                <div
                                    className={`bg-${c.color}-500 h-2.5 rounded-full`}
                                    style={{ width: c.title === "Thử Thách Cay" ? "70%" : "50%" }}
                                ></div>
                            </div>
                            <p className="text-gray-600 text-sm mb-4">
                                Tiến độ:{" "}
                                <span className={`font-bold text-${c.color}-600`}>
                                    {c.progress}
                                </span>
                            </p>
                        </div>
                        <button
                            className={`w-full bg-${c.color}-500 text-white px-4 py-3 rounded-lg hover:bg-${c.color}-600 transition duration-300 font-medium`}
                        >
                            Tham Gia Ngay
                        </button>
                    </div>
                ))}
            </section>
        </>
    );
}
