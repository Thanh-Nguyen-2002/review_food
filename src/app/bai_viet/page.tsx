import Image from "next/image";
import { blogData } from "./data";

export default function Blog() {
    return (
        <main className="bg-white text-gray-800">
        {/* Hero */}
        <section className="bg-gradient-to-r from-yellow-100 via-white to-orange-50 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-600 mb-3">
            Blog Ẩm Thực Việt Nam
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
            Khám phá hương vị, văn hóa và câu chuyện đằng sau từng món ăn Việt.
            </p>
        </section>

        {/* Section generator */}
        {Object.entries(blogData).map(([key, section]) => (
            <section key={key} className="max-w-6xl mx-auto py-12 px-4">
            <h2 className="text-2xl font-bold text-yellow-600 mb-6 capitalize">
                {key === "regions"
                ? "Ẩm Thực Vùng Miền"
                : key === "streetFoods"
                ? "Món Ăn Đường Phố"
                : key === "desserts"
                ? "Món Tráng Miệng"
                : "Câu Chuyện Văn Hóa"}
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
                {section.map((item) => (
                <div
                    key={item.id}
                    className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all"
                >
                    <div className="relative h-48 w-full">
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                    />
                    </div>
                    <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900">
                        {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">
                        {item.author} – {item.date}
                    </p>
                    <p className="text-gray-700 mb-3">{item.desc}</p>
                    <button className="text-yellow-600 font-medium hover:underline">
                        Đọc thêm →
                    </button>
                    </div>
                </div>
                ))}
            </div>
            </section>
        ))}
        </main>
    );
}
