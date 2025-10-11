import ExploreBanner from "@/components/explore/ExploreBanner";
import VietnamCuisine from "@/components/explore/VietnamCuisine";
import FoodStoriesVN from "@/components/explore/FoodStoriesVN";
import FoodQuizVN from "@/components/explore/FoodQuizVN";
import FoodChallengesVN from "@/components/explore/FoodChallengesVN";
import ExploreRecipesVN from "@/components/explore/ExploreRecipesVN";
import HotTrendsVN from "@/components/explore/HotTrends";

export const metadata = {
    title: "Khám Phá Ẩm Thực Việt | ReviewFood",
    description: `
        Cùng ReviewFood khám phá hương vị ba miền Bắc – Trung – Nam, 
        nơi mỗi món ăn là một câu chuyện văn hoá và niềm tự hào của người Việt.
    `
};

export default function Explore() {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans max-w-[1500px] mx-auto">
            <ExploreBanner />
            <VietnamCuisine />
            <HotTrendsVN />
            <FoodStoriesVN />
            <FoodQuizVN />
            <FoodChallengesVN />
            <ExploreRecipesVN />
        </div>
    );
}
