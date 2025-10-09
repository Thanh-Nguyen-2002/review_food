import { Brain, Trophy } from "lucide-react";

export default function FoodQuizVN() {
    return (
        <>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-12 text-center">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-2 flex items-center justify-center">
                        <Brain className="mr-3 text-purple-500 w-7 h-7" /> Thử Thách Kiến Thức Ẩm Thực
                    </h2>
                    <p className="text-lg text-gray-700">
                        Kiểm tra hiểu biết của bạn về món Việt nhé!
                    </p>
                </div>
            </div>

            <section className="container mx-auto px-4 py-12 flex justify-center">
                <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        Món ăn nào là đặc sản của Huế?
                    </h3>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        {["Bún Bò", "Phở", "Bánh Cuốn", "Mì Quảng"].map((opt) => (
                            <button
                                key={opt}
                                className="bg-purple-50 text-purple-700 px-4 py-3 rounded-lg hover:bg-purple-100 transition duration-300 font-medium text-left"
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                    <div className="flex justify-between items-center text-gray-700 mb-6">
                        <span>
                            Điểm của bạn:{" "}
                            <span className="font-bold text-purple-600">1,247</span>
                        </span>
                        <span>
                            Hạng <span className="font-bold text-purple-600">15/1000</span>
                        </span>
                    </div>
                    <button className="w-full bg-purple-500 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-purple-600 transition duration-300 flex items-center justify-center">
                        <Trophy className="mr-2 w-5 h-5" /> Chơi Quiz Đầy Đủ
                    </button>
                </div>
            </section>
        </>
    );
}
