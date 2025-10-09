import { PencilLine, Users } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative py-16 px-4 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(255,200,150,0.15),transparent_60%)] pointer-events-none">
            </div>

            <div className="relative container mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
                    Chào Mừng Đến Với{" "}
                    <span className="text-orange-500">Cộng Đồng Ẩm Thực</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                    Nơi những người yêu thích ẩm thực cùng chia sẻ, khám phá và kết nối để lan tỏa hương vị Việt 🌿
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <button className="group bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full text-lg font-semibold 
                        flex items-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                    >
                        <PencilLine className="w-5 h-5 mr-2 transition-transform group-hover:-rotate-6" />
                        Viết Review
                    </button>
                    <button className="group bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold 
                        flex items-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                    >
                        <Users className="w-5 h-5 mr-2 transition-transform group-hover:rotate-6" />
                        Tham Gia Nhóm
                    </button>
                </div>

                <div className="mx-auto w-32 h-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"></div>
            </div>
        </section>
    );
}
