import { MapPin } from "lucide-react";

export default function ExploreBanner() {
    return (
        <div className="pt-12 px-6 text-center">
            <div className="container mx-auto">
                <h2 className="text-4xl font-extrabold text-yellow-500 mb-2 flex items-center justify-center">
                    <MapPin className="text-yellow-500 w-8 h-8 mr-2" />
                    Bản Đồ Ẩm Thực Việt Nam
                </h2>
                <p className="text-lg text-gray-700 font-light">
                    Hành trình khám phá món ngon ba miền — Bắc, Trung, Nam
                </p>
            </div>
        </div>
    );
}
