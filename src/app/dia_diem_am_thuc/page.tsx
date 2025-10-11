"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import AnimationShowContent from "@/components/animations/AnimationShowContent";
import MapVietnam from "@/components/MapVietnam";
import RevealOnScroll from "@/components/RevealOnScroll";
import FoodEvents from "@/components/place/FoodEvents";

const places = [
    {
        id: 1,
        title: "Phố Cổ Hà Nội – Hồn Ẩm Thực Miền Bắc",
        region: "Miền Bắc – Đồng bằng Bắc Bộ",
        image: "/images/pho_co_ha_noi.jpg",
        desc: `Nằm trong lòng thủ đô ngàn năm văn hiến, khu phố cổ Hà Nội là nơi hội tụ tinh hoa ẩm thực Bắc Bộ. 
        Những quán phở lâu đời, bún chả thơm nức, hay gánh hàng rong bán chè xanh và cốm làng Vòng – tất cả tạo nên một bức tranh sống động về văn hoá và vị giác.`,
        detail: `Buổi sáng dạo quanh phố Hàng Đào, thưởng thức tô phở nóng hổi; trưa ghé quán bún chả Đắc Kim; 
        chiều thong thả nhâm nhi chén trà mạn trong ngôi nhà cổ trên phố Mã Mây. 
        Phố cổ không chỉ là điểm đến của ẩm thực, mà còn là hành trình trải nghiệm ký ức, nơi mỗi góc phố đều kể một câu chuyện.`,
    },
    {
        id: 2,
        title: "Phố Cổ Hội An – Sắc Màu Miền Trung",
        region: "Miền Trung – Ven biển",
        image: "/images/hoi_an.jpg",
        desc: `Hội An là nơi giao thoa giữa di sản và hiện đại, nơi mà mỗi con hẻm nhỏ đều dẫn đến một hàng cao lầu, 
        một quán mì Quảng thơm phức hay những gánh chè ngọt ngào. Dưới ánh đèn lồng, tiếng rao hàng khẽ vang như lời mời gọi.`,
        detail: `Tản bộ dọc bờ sông Hoài, bạn có thể bắt gặp những quán ăn nhỏ với món cao lầu trứ danh, 
        được nấu bằng nước giếng Bá Lễ cổ truyền. Đêm đến, Hội An khoác lên mình lớp áo vàng rực rỡ của đèn lồng – 
        vừa là điểm thưởng thức ẩm thực, vừa là nơi lưu giữ linh hồn miền Trung.`,
    },
    {
        id: 3,
        title: "Chợ Nổi Cái Răng – Hơi Thở Miền Tây Sông Nước",
        region: "Miền Tây – Sông nước",
        image: "/images/cho_noi_cai_rang.jpg",
        desc: `Giữa làn sương sớm trên sông, những chiếc ghe đầy ắp trái cây, hủ tiếu, cà phê len lỏi giữa dòng nước chảy. 
        Chợ nổi Cái Răng là biểu tượng của ẩm thực sông nước miền Tây – giản dị mà chân thành.`,
        detail: `Người bán hàng chế biến món ăn ngay trên thuyền, khói bốc nghi ngút, mùi thơm quyện trong gió. 
        Một bát hủ tiếu nóng, ly cà phê đen đậm đà, tiếng cười nói rộn ràng… đó chính là bữa sáng đậm hồn Nam Bộ. 
        Du khách đến đây không chỉ ăn – mà còn sống trong nhịp đời miền sông nước.`,
    },
];

export default function Places() {
    const [current, setCurrent] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % places.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + places.length) % places.length);

    const currentPlace = places[current];

    return (
        <>
            <section className="bg-white text-black pt-16 pb-8 px-6 max-w-[1500px] mx-auto">
                <h1 className="text-4xl md:text-4xl font-bold text-center mb-10">
                    <span className="text-yellow-500">Địa Điểm</span> Ẩm Thực Việt Nam
                </h1>
                <RevealOnScroll delay={200}>
                    <div className="relative flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">

                        <div className="md:w-1/2 w-full relative h-100">
                            <Image
                                src={currentPlace.image}
                                alt={currentPlace.title}
                                className="rounded-2xl shadow-lg w-full h-[400px] object-cover transform hover:scale-[1.03] 
                                transition-transform duration-500 absolute"
                                // height={400}
                                // width={500}
                                // style={{height: "auto"}}
                                fill
                            />

                            <button
                                onClick={prevSlide}
                                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-yellow-500 
                                text-black p-2 rounded-full shadow cursor-pointer"
                            >
                                <ChevronLeft />
                            </button>

                            <button
                                onClick={nextSlide}
                                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-yellow-500 
                                text-black p-2 rounded-full shadow cursor-pointer"
                            >
                                <ChevronRight />
                            </button>
                        </div>

                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-bold mb-2">{currentPlace.title}</h2>
                            <p className="text-sm text-gray-600 italic mb-2">({currentPlace.region})</p>
                            <p className="text-gray-800 mb-3">{currentPlace.desc}</p>

                            <AnimationShowContent isOpen={isOpen} content={currentPlace.detail} />

                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="flex items-center mt-3 text-yellow-600 hover:text-yellow-700 font-semibold cursor-pointer"
                            >
                                {isOpen ? (
                                        <>
                                            Thu gọn <ChevronUp className="ml-1" size={18} />
                                        </>
                                    ) : (
                                        <>
                                            Xem thêm <ChevronDown className="ml-1" size={18} />
                                        </>
                                    )
                                }
                            </button>

                            <div className="flex gap-2 mt-6">
                                {places.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrent(i)}
                                            className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                                            i === current ? "bg-yellow-500 scale-110" : "bg-gray-300"
                                        }`}
                                    >

                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
                
                <RevealOnScroll delay={300}>
                    <div className="mt-16 max-w-3xl mx-auto text-center border-t border-gray-200 pt-8">
                        <h3 className="text-xl font-semibold mb-4">Việt Nam – Bản đồ ẩm thực từ núi đến biển</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Từ miền núi Tây Bắc đến đồng bằng Nam Bộ, từ cao nguyên lộng gió đến những vùng biển mặn mòi, 
                            Việt Nam là bức tranh đa sắc của thiên nhiên và con người – nơi mà mỗi vùng đất mang trong mình 
                            một phong vị riêng, một linh hồn ẩm thực không thể trộn lẫn.  
                            Dù bạn đi đâu, món ăn và địa điểm nơi đó luôn phản chiếu tính cách và nhịp sống của con người nơi ấy.
                        </p>
                        <p className="text-sm text-yellow-600 mt-4">– Trải dài theo dải đất hình chữ S –</p>
                    </div>
                </RevealOnScroll>
            </section>
            <RevealOnScroll delay={200}>
                <MapVietnam />
            </RevealOnScroll>

            <FoodEvents />
        </>
    );
}
