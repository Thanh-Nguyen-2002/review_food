import MapVietnam from "@/components/MapVietnam";
import RevealOnScroll from "@/components/RevealOnScroll";
import FoodEvents from "@/components/place/FoodEvents";
import HeaderPlace from "@/components/place/HeaderPlace";

export const metadata = {
    title: "Khám Phá Địa Điểm Ăn Uống Hấp Dẫn Nhất Việt Nam | ReviewFood",
    description: `
        Tìm kiếm những địa điểm ăn uống nổi tiếng khắp ba miền Việt Nam.
        Cùng ReviewFood khám phá quán ngon, nhà hàng đặc sắc và trải nghiệm ẩm thực địa phương chân thực nhất.
    `
};

export default function Places() {

    return (
        <>
            <HeaderPlace />

            <RevealOnScroll delay={200}>
                <MapVietnam />
            </RevealOnScroll>

            <FoodEvents />
        </>
    );
}
