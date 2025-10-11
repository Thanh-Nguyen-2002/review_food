import FeaturedReviews from "@/components/reviews/FeaturedReviews";
import HeaderReviews from "@/components/reviews/HeaderReviews";

export const metadata = {
    title: "Review  & Trải Nghiệm Ẩm Thực Việt | ReviewFood",
    description: `
        Đọc những bài review chân thực từ cộng đồng yêu ẩm thực.
        Cùng ReviewFood khám phá hương vị, không gian và trải nghiệm ăn uống đáng nhớ trên khắp Việt Nam.
    `
};

export default function Reviews() {
    
    return (
        <section className="text-black py-16 px-6 max-w-[1500px] mx-auto">
            <HeaderReviews/>
            
            <FeaturedReviews />
            
        </section>
    );
}
