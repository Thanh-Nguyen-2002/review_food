"use client";
import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";
import Image from "next/image";

interface Marker {
    id: number;
    name: string;
    region: string;
    top: string;
    left: string;
    desc: string;
    image: string;
}

const markers: Marker[] = [
    // ====== MIỀN BẮC (đầu bản đồ) ======
    {
        id: 1,
        name: "Hà Nội",
        region: "Miền Bắc – Đồng bằng sông Hồng",
        top: "19%",
        left: "45%",
        desc: "Phở Hà Nội, bún chả, cốm làng Vòng — hương vị ngàn năm của đất kinh kỳ.",
        image: "/images/pho_viet.jpg",
    },
    {
        id: 2,
        name: "Hạ Long",
        region: "Miền Bắc – Vịnh biển",
        top: "18%",
        left: "70%",
        desc: "Hải sản Hạ Long, chả mực, sá sùng khô — tinh hoa vùng biển Đông Bắc.",
        image: "/images/ha_long.jpg",
    },
    {
        id: 3,
        name: "Lào Cai",
        region: "Miền Bắc – Miền núi",
        top: "12%",
        left: "23%",
        desc: "Thắng cố, lẩu cá hồi Sapa — hương vị vùng cao Tây Bắc.",
        image: "/images/sapa_food.jpg",
    },
    {
        id: 4,
        name: "Ninh Bình",
        region: "Miền Bắc – Trung du",
        top: "23%",
        left: "50%",
        desc: "Cơm cháy, dê núi Ninh Bình — đặc sản vùng Tràng An di sản.",
        image: "/images/com_chay.jpg",
    },
    {
        id: 5,
        name: "Điện Biên",
        region: "Miền Bắc – Tây Bắc",
        top: "15%",
        left: "15%",
        desc: "Xôi nếp nương, thịt trâu gác bếp – món ăn đậm đà hương vị núi rừng Tây Bắc.",
        image: "/images/dien_bien.jpg",
    },
    {
        id: 6,
        name: "Sơn La",
        region: "Miền Bắc – Tây Bắc",
        top: "18.5%",
        left: "28%",
        desc: "Cá nướng sông Đà, nậm pịa – ẩm thực độc đáo của người Thái.",
        image: "/images/son_la.jpg",
    },
    {
        id: 7,
        name: "Tuyên Quang",
        region: "Miền Bắc – Trung du",
        top: "10%",
        left: "40%",
        desc: "Bánh nẳng, rượu ngô Na Hang – nét ẩm thực cổ truyền miền sơn cước.",
        image: "/images/tuyen_quang.jpg",
    },
    {
        id: 8,
        name: "Cao Bằng",
        region: "Miền Bắc – Đông Bắc",
        top: "7%",
        left: "55%",
        desc: "Phở chua Cao Bằng, vịt quay 7 vị – hương vị đặc trưng miền biên giới.",
        image: "/images/cao_bang.jpg",
    },
    {
        id: 9,
        name: "Bắc Ninh",
        region: "Miền Bắc – Đồng bằng sông Hồng",
        top: "15%",
        left: "60%",
        desc: "Bánh phu thê, nem làng Bùi – nét tinh tế của vùng quan họ Kinh Bắc.",
        image: "/images/bac_ninh.jpg",
    },

    // ====== MIỀN TRUNG (thân hẹp, chạy dọc xuống) ======
    {
        id: 10,
        name: "Thanh Hóa",
        region: "Miền Trung – Bắc Trung Bộ",
        top: "27%",
        left: "42.5%",
        desc: "Nem chua Thanh Hóa – món ăn vặt huyền thoại của miền Trung Bắc.",
        image: "/images/nem_chua_thanh_hoa.jpg",
    },
    {
        id: 11,
        name: "Nghệ An",
        region: "Miền Trung – Bắc Trung Bộ",
        top: "32%",
        left: "39.5%",
        desc: "Cháo lươn Vinh – đặc sản giản dị, đậm vị quê hương Bác Hồ.",
        image: "/images/chao_luon.jpg",
    },
    {
        id: 12,
        name: "Hà tĩnh",
        region: "Miền Trung – Bắc Trung Bộ",
        top: "41.5%",
        left: "55.5%",
        desc: "Cháo lươn Vinh – đặc sản giản dị, đậm vị quê hương Bác Hồ.",
        image: "/images/chao_luon.jpg",
    },
    {
        id: 13,
        name: "Huế",
        region: "Miền Trung – Cố đô",
        top: "48%",
        left: "70%",
        desc: "Bún bò Huế, bánh bèo, bánh nậm – tinh hoa ẩm thực cung đình.",
        image: "/images/bun_bo_hue.jpg",
    },
    {
        id: 14,
        name: "Đà Nẵng",
        region: "Miền Trung – Ven biển",
        top: "52.5%",
        left: "73.5%",
        desc: "Mì Quảng, bánh tráng thịt heo – biểu tượng ẩm thực miền Trung hiện đại.",
        image: "/images/mi_quang.jpg",
    },
    {
        id: 15,
        name: "Hội An",
        region: "Miền Trung – Phố cổ ven sông",
        top: "63%",
        left: "70.5%",
        desc: "Cao lầu, chè bắp, bánh đập – sự hòa quyện văn hóa Việt, Hoa, Nhật.",
        image: "/images/cao_lau.png",
    },
    {
        id: 16,
        name: "Quảng Ngãi",
        region: "Miền Trung – Duyên hải",
        top: "58%",
        left: "76.5%",
        desc: "Don Quảng Ngãi – món ăn dân dã đậm tình miền Trung.",
        image: "/images/don_quang_ngai.jpg",
    },
    {
        id: 17,
        name: "Nha Trang",
        region: "Miền Trung – Biển đảo",
        top: "71%",
        left: "80.5%",
        desc: "Bún sứa, nem nướng Nha Trang – đặc sản biển miền Nam Trung Bộ.",
        image: "/images/nha_trang.jpg",
    },

    // ====== MIỀN NAM (đuôi cong, mở rộng sang trái) ======
    {
        id: 18,
        name: "Đà Lạt",
        region: "Tây Nguyên – Cao nguyên lạnh",
        top: "78%",
        left: "75.5%",
        desc: "Bánh tráng nướng, lẩu gà lá é – hương vị cao nguyên Đà Lạt se lạnh.",
        image: "/images/da_lat_food.jpg",
    },
    {
        id: 19,
        name: "TP. Hồ Chí Minh",
        region: "Miền Nam – Đô thị sôi động",
        top: "84%",
        left: "48%",
        desc: "Cơm tấm, hủ tiếu Nam Vang – giao thoa tinh hoa khắp vùng miền.",
        image: "/images/com_tam.jpg",
    },
    {
        id: 20,
        name: "Cần Thơ",
        region: "Miền Tây – Sông nước",
        top: "92%",
        left: "38%",
        desc: "Chợ nổi Cái Răng, bánh xèo miền Tây – đậm đà vị quê miệt vườn.",
        image: "/images/cho_noi_cai_rang.jpg",
    },
    {
        id: 21,
        name: "Cà Mau",
        region: "Miền Tây – Đất mũi",
        top: "97.5%",
        left: "28%",
        desc: "Ba khía rang me, cua Cà Mau – món ngon nơi tận cùng Tổ quốc.",
        image: "/images/ca_mau_food.jpg",
    },
    {
        id: 22,
        name: "An Giang",
        region: "Miền Tây – Đất mũi",
        top: "91%",
        left: "26.5%",
        desc: "Ba khía rang me, cua Cà Mau – món ngon nơi tận cùng Tổ quốc.",
        image: "/images/ca_mau_food.jpg",
    },
];

export default function MapVietnam() {
    const [selected, setSelected] = useState<Marker | null>(null);

    return (
        <section className="bg-white text-black pb-20 px-6 max-w-[1500px] mx-auto relative">
            <div className="relative mx-auto max-w-[600px] aspect-[3/4]">
                {markers.map((m, i) => (
                    <div
                        key={m.id}
                        style={{ top: m.top, left: m.left, position: "absolute" }}
                        className="flex items-center transform -translate-x-[50px] -translate-y-[20px]"
                    >
                        <span className="mr-2 text-sm md:text-base font-semibold text-white bg-black/60 px-2 py-0.5 rounded-md shadow-md whitespace-nowrap">
                            {m.name}
                        </span>

                        <button
                            onClick={() => setSelected(m)}
                            className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-yellow-500 border-2 border-white shadow-md 
                                hover:scale-140 transition duration-300 cursor-pointer"
                            title={m.name}
                        />
                    </div>
                ))}
            </div>

        </section>
    );
}
