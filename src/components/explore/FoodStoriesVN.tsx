import { BookOpen, CalendarDays } from "lucide-react";

export default function FoodStoriesVN() {
    const stories = [
        {
            title: "Lịch Sử Phở Việt Nam",
            desc: "Phở không chỉ là món ăn, mà còn là biểu tượng văn hóa của người Việt, gắn liền với Hà Nội xưa.",
            color: "orange",
            date: "2 ngày trước",
        },
        {
            title: "Câu Chuyện Bánh Chưng Ngày Tết",
            desc: "Bánh chưng là biểu tượng của đất trời, thể hiện lòng biết ơn của con cháu với tổ tiên.",
            color: "green",
            date: "1 tuần trước",
        },
    ];

    return (
        <>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 py-12 text-center">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-2 flex items-center justify-center">
                        <BookOpen className="text-orange-500 w-7 h-7 mr-2" /> Câu Chuyện Ẩm Thực
                    </h2>
                    <p className="text-lg text-gray-700">
                        Khám phá những câu chuyện thú vị đằng sau món ăn truyền thống
                    </p>
                </div>
            </div>

            <section className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                {stories.map((story) => (
                    <div
                        key={story.title}
                        className={`bg-${story.color}-50 p-6 rounded-lg shadow-md flex flex-col justify-between`}
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-2">{story.title}</h3>
                            <p className="text-gray-700 text-sm mb-4">{story.desc}</p>
                        </div>
                        <div className="flex justify-between items-center text-gray-500 text-xs">
                            <span className="flex items-center">
                                <CalendarDays className="w-4 h-4 mr-1" /> {story.date}
                            </span>
                            <button
                                className={`bg-${story.color}-400 text-white px-4 py-2 rounded-full text-sm hover:bg-${story.color}-500 transition duration-300`}
                            >
                                Đọc Tiếp →
                            </button>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}
