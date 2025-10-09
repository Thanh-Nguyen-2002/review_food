import { MapPin } from "lucide-react";

export default function ExploreBanner() {
    return (
        <div className="bg-gradient-to-r from-orange-50 to-yellow-100 py-12 px-4 text-center">
            <div className="container mx-auto">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-2 flex items-center justify-center">
                    <MapPin className="text-orange-500 w-8 h-8 mr-2" />
                    Bản Đồ Ẩm Thực Việt Nam
                </h2>
                <p className="text-lg text-gray-700">
                    Hành trình khám phá món ngon ba miền — Bắc, Trung, Nam
                </p>
            </div>
        </div>
    );
}
