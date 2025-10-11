import CommentSection from "@/components/blog/CommentSection";
import HighlightFoodCard from "@/components/blog/HighlightFoodCard";

export default function Blog() {
    return (
        <main className="bg-white text-gray-800 max-w-[1500px] mx-auto px-6 py-10">

            <div className="text-center relative py-10">
                <div className="w-full h-[150px] border border-gray-50 relative
                    bg-gradient-to-r from-orange-200 via-yellow-50 to-white -skew-y-3">
                    
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-1/2">
                    <h1 className="text-4xl">Blog ẩm thực Việt Nam.</h1>
                </div>

                <div className="flex justify-center gap-1 mt-3">
                    <span className="w-8 h-2 bg-yellow-400 rounded-full"></span>
                    <span className="w-4 h-2 bg-yellow-300 rounded-full"></span>
                    <span className="w-2 h-2 bg-yellow-200 rounded-full"></span>
                </div>
            </div>

            <section className="py-5">
                <HighlightFoodCard />
            </section>

            <section className="py-5">
                <CommentSection />
            </section>

            
        
        </main>
    );
}
