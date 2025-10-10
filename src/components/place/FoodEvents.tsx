import { CalendarDays, MapPin } from "lucide-react";
import RevealOnScroll from "../RevealOnScroll";

export default function FoodEvents() {
    const events = [
        {
            name: "Lễ hội Ẩm thực Quốc tế Đà Nẵng",
            date: "Tháng 6 hằng năm",
            location: "Đà Nẵng",
            desc: "Quy tụ đầu bếp quốc tế và các món ăn đặc sắc khắp Việt Nam, diễn ra bên bờ biển Mỹ Khê.",
        },
        {
            name: "Lễ hội Bánh Dân Gian Nam Bộ",
            date: "Tháng 4",
            location: "Cần Thơ",
            desc: "Hơn 200 loại bánh dân gian truyền thống hội tụ, tái hiện văn hoá miệt vườn.",
        },
        {
            name: "Lễ hội Ẩm thực Huế",
            date: "Tháng 4–5",
            location: "Thừa Thiên Huế",
            desc: "Trưng bày hàng trăm món cung đình, dân gian, cùng các chương trình trình diễn nấu ăn.",
        },
        {
            name: "Liên hoan Món ngon các nước",
            date: "Tháng 12",
            location: "TP. Hồ Chí Minh",
            desc: "Sự kiện giao lưu văn hoá ẩm thực quốc tế, thu hút hàng trăm nghìn du khách.",
        },
        {
            name: "Lễ hội Ẩm thực Phú Quốc",
            date: "Tháng 11",
            location: "Phú Quốc, Kiên Giang",
            desc: "Tôn vinh hải sản địa phương và ẩm thực đảo ngọc.",
        },
        {
            name: "Lễ hội Cơm cháy – Dê núi Ninh Bình",
            date: "Tháng 3",
            location: "Ninh Bình",
            desc: "Giới thiệu đặc sản vùng Tràng An cùng trải nghiệm chế biến truyền thống.",
        },
        {
            name: "Tuần lễ Văn hoá Ẩm thực Tây Bắc",
            date: "Tháng 10",
            location: "Lào Cai – Yên Bái – Sơn La",
            desc: "Khám phá ẩm thực vùng cao với rượu ngô, thắng cố, thịt gác bếp.",
        },
        {
            name: "Lễ hội Cá và Nước mắm Phan Thiết",
            date: "Tháng 7",
            location: "Bình Thuận",
            desc: "Tôn vinh nghề làm nước mắm truyền thống và hải sản địa phương.",
        },
        {
            name: "Lễ hội Ẩm thực Biển Nha Trang",
            date: "Tháng 8",
            location: "Khánh Hòa",
            desc: "Mang đến trải nghiệm độc đáo với món ăn từ hải sản và đặc sản miền Trung.",
        },
        
    ];

    return (
        <section className="max-w-[1500px] mx-auto py-10 px-6 ">
            <h2 className="text-3xl font-bold text-center text-yellow-700 mb-10">
                Lễ Hội & Sự Kiện Ẩm Thực Việt Nam
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((e, i) => (
                    <RevealOnScroll key={i} delay={i * 100}>
                        <div className="bg-yellow-50 border-2 border-gray-200 rounded-xl shadow 
                                p-5 hover:shadow-lg transition cursor-pointer hover:border-yellow-300"
                        >
                            <h3 className="font-semibold text-lg text-yellow-700 mb-1">{e.name}</h3>
                            <div className="flex items-center text-sm text-gray-500 mb-1">
                                <MapPin className="w-4 h-4 mr-2 text-yellow-600" />
                                <span>{e.location}</span>
                            </div>

                            <div className="flex items-center text-sm text-gray-500 mb-3">
                                <CalendarDays className="w-4 h-4 mr-2 text-yellow-600" />
                                <span>{e.date}</span>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed h-12">{e.desc}</p>
                        </div>
                    </RevealOnScroll>
                ))}
            </div>
        </section>
    );
}
