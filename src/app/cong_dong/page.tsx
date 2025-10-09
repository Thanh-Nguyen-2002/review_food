import HeroSection from '@/components/community/HeroSection';
import StatsSection from '@/components/community/StatsSection';
import RevealOnScroll from '@/components/RevealOnScroll';
import { BookOpenText, CalendarDays, ChefHat, Clock, Crown, Flame, Heart, ImagePlus, MapPin,
    Medal, PencilLine, Salad, Soup, Tags, User, Users, Zap 
}   from 'lucide-react';
import React from 'react';

export const metadata = {
    title: "Cộng đồng | ReviewFood",
    discripton: 
    "Khám phá ReviewFood - cộng đồng chia sẻ và đánh giá ẩm thực hàng đầu Việt Nam."
}

export default function Community() {

    return (
        <div className='bg-white'>
            <div className="min-h-screen text-gray-900 font-sans max-w-[1500px] mx-auto p-2">
                <RevealOnScroll>
                    <HeroSection />
                </RevealOnScroll>
                

                <StatsSection />

                <main className="container mx-auto py-8 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">

                    <div className="lg:col-span-2 space-y-8">
                        <RevealOnScroll delay={200}>
                            <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                <div className="flex justify-between items-center mb-4 pr-2">
                                    <h2 className="text-2xl font-bold flex items-center">
                                    <Flame className="text-orange-500 w-6 h-6 mr-2" />
                                        Reviews Hot Nhất
                                    </h2>
                                    <a href="#" className="text-yellow-500 hover:underline font-medium">
                                        Xem Tất Cả
                                    </a>
                                </div>

                                <div className="space-y-6">
                                    <div className="last:border-b-0 last:pb-0 border-l-2 border-green-400 pl-2 hover:bg-green-100
                                                    cursor-pointer p-2"
                                    >
                                        <div className='flex justify-between'>
                                            <h3 className="text-lg font-semibold">Bánh Mì Thịt Nướng - Cô Tư</h3>
                                            <div className="flex items-center text-yellow-500 mb-2">
                                                <span className="text-base mr-1">★★★★☆</span>
                                                <span className="text-gray-700 text-sm">(4.5)</span>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 text-sm italic mb-2">
                                            "Bánh mì giòn tan, thịt nướng thơm lừng, rau sống tươi mát..."
                                        </p>
                                        <div className="flex items-center text-gray-500 text-xs">
                                            <span className="flex items-center mr-3">
                                                <User className="w-4 h-4 mr-1 text-blue-500" /> Hoàng Nam
                                            </span>
                                            <span className="flex items-center mr-3">
                                                <Clock className="w-4 h-4 mr-1 text-gray-400" /> 6 giờ trước
                                            </span>
                                            <span className="flex items-center">
                                                <Heart className="w-4 h-4 mr-1 text-red-500" /> 18 likes
                                            </span>
                                        </div>
                                    </div>

                                    <div className="last:border-b-0 last:pb-0 border-l-2 border-orange-500 pl-2 
                                                    cursor-pointer p-2 hover:bg-orange-100"
                                    >
                                        <div className='flex justify-between'>
                                            <h3 className="text-lg font-semibold">Phở Hà Nội - Quán Cô Ba</h3>
                                            <div className="flex items-center text-yellow-500 mb-2">
                                                <span className="text-base mr-1">★★★☆☆</span>
                                                <span className="text-gray-700 text-sm">(3.0)</span>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 text-sm italic mb-2">
                                            "Phở ngon tuyệt vời, nước dùng đậm đà, nhớ bố tuổi ngọn..."
                                        </p>
                                        <div className="flex items-center text-gray-500 text-xs">
                                            <span className="flex items-center mr-3">
                                                <User className="w-4 h-4 mr-1 text-blue-500" /> Minh Anh
                                            </span>
                                            <span className="flex items-center mr-3">
                                                <Clock className="w-4 h-4 mr-1 text-gray-400" /> 2 giờ trước
                                            </span>
                                            <span className="flex items-center">
                                                <Heart className="w-4 h-4 mr-1 text-red-500" /> 24 likes
                                            </span>
                                        </div>
                                    </div>

                                    <div className='border-l-2 border-purple-600 pl-2 cursor-pointer p-2 hover:bg-purple-100'>
                                        <div className='flex justify-between'>
                                            <h3 className="text-lg font-semibold">Chè Đậu Đỏ - Dì Hoa</h3>
                                            <div className="flex items-center text-yellow-500 mb-2">
                                                <span className="text-base mr-1">★★★★☆</span>
                                                <span className="text-gray-700 text-sm">(4.8)</span>
                                            </div>
                                        </div>
                                        
                                        <p className="text-gray-600 text-sm italic mb-2">
                                            "Chè ngọt vừa phải, đậu đỏ mềm tan, nước cốt dừa thơm béo..."
                                        </p>
                                        <div className="flex items-center text-gray-500 text-xs">
                                            <span className="flex items-center mr-3">
                                                <User className="w-4 h-4 mr-1 text-blue-500" /> Thu Hà
                                            </span>
                                            <span className="flex items-center mr-3">
                                                <Clock className="w-4 h-4 mr-1 text-gray-400" /> 6 giờ trước
                                            </span>
                                            <span className="flex items-center">
                                                <Heart className="w-4 h-4 mr-1 text-red-500" /> 31 likes
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </RevealOnScroll>

                        <RevealOnScroll delay={300}>
                            <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-2xl font-bold flex items-center">
                                        <Soup className="text-purple-500 w-6 h-6 mr-2" />
                                        Công Thức Được Yêu Thích
                                    </h2>
                                    <a href="#" className="text-yellow-500 hover:underline font-medium">Chia Sẻ Công Thức</a>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                                    <div className="bg-green-50 p-4 rounded-lg flex items-center space-x-4">
                                        <Soup className="text-green-500 w-10 h-10" />
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Bún Bò Huế Chay</h3>
                                            <p className="text-gray-600 text-sm line-clamp-2">
                                                Công thức làm bún bò Huế chay đậm đà, thơm ngon không kém bản gốc...
                                            </p>
                                            <div className="flex items-center justify-between text-gray-500 text-xs mt-2">
                                                <span className="flex items-center">
                                                    <ChefHat className="w-4 h-4 mr-1 text-orange-500" />
                                                    Chef Linh
                                                </span>
                                                <span className="flex items-center">
                                                    <Clock className="w-4 h-4 mr-1 text-blue-500" />
                                                    45 phút
                                                </span>
                                                <span className="flex items-center">
                                                    <Heart className="w-4 h-4 mr-1 text-red-500" />
                                                    156
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 p-4 rounded-lg flex items-center space-x-4">
                                        <Salad className="text-blue-500 w-10 h-10" />
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Salad Đu Đủ Thái</h3>
                                            <p className="text-gray-600 text-sm line-clamp-2">
                                                Cách làm salad đu đủ chua cay đúng vị Thái Lan tại nhà...
                                            </p>
                                            <div className="flex items-center justify-between text-gray-500 text-xs mt-2">
                                                <span className="flex items-center">
                                                    <ChefHat className="w-4 h-4 mr-1 text-orange-500" />
                                                    Bếp Trưởng Mai
                                                </span>
                                                <span className="flex items-center">
                                                    <Clock className="w-4 h-4 mr-1 text-blue-500" />
                                                    20 phút
                                                </span>
                                                <span className="flex items-center">
                                                    <Heart className="w-4 h-4 mr-1 text-red-500" />
                                                    89
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </RevealOnScroll>

                        <RevealOnScroll delay={400}>
                            <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-2xl font-bold flex items-center">
                                        <CalendarDays className="text-blue-500 w-6 h-6 mr-2" />
                                        Sự Kiện Cộng Đồng
                                    </h2>
                                    <a href="#" className="text-yellow-500 hover:underline font-medium">Tạo Sự Kiện</a>
                                </div>
                                <div className="space-y-4">

                                    <div className="bg-purple-50 p-4 rounded-lg flex justify-between items-center">
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Tuần Lễ Phở Việt Nam</h3>
                                            <p className="text-gray-600 text-sm">Cùng khám phá và review các quán phở ngon nhất thành phố</p>
                                            
                                            <p className="text-gray-500 text-xs mt-1 flex items-center">
                                                <CalendarDays className="w-4 h-4 mr-1 text-blue-500" />
                                                15/12 - 22/12
                                                <span className="mx-2">•</span>
                                                <Users className="w-4 h-4 mr-1 text-green-500" />
                                                247 người tham gia
                                            </p>
                                        </div>
                                        <button className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm 
                                            hover:bg-purple-700 transition duration-300"
                                        >
                                            Đăng Diễn Ra
                                        </button>
                                    </div>

                                    <div className="bg-orange-50 p-4 rounded-lg flex justify-between items-center">
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Cuộc Thi Làm Bánh Giáng Sinh</h3>
                                            <p className="text-gray-600 text-sm">Thể hiện tài năng làm bánh và giành giải thưởng hấp dẫn</p>
                                            <p className="text-gray-500 text-xs mt-1 flex items-center">
                                                <CalendarDays className="w-4 h-4 mr-1 text-blue-500" />
                                                20/12 - 25/12
                                                <span className="mx-2">•</span>
                                                <Clock className="w-4 h-4 mr-1 text-yellow-500" />
                                                Giới hạn 5 triệu
                                            </p>
                                        </div>
                                        <button className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm 
                                            hover:bg-orange-700 transition duration-300"
                                        >
                                            Sắp Diễn Ra
                                        </button>
                                    </div>
                                </div>
                            </section>
                        </RevealOnScroll>
                    </div>

                    <div className="space-y-8">
                        <RevealOnScroll delay={200}>
                            <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                <h2 className="text-2xl font-bold flex items-center mb-4">
                                    <Crown className="text-yellow-500 w-6 h-6 mr-2" /> Top Reviewers
                                </h2>
                                <div className="space-y-4">

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className="font-bold text-lg text-gray-700 w-3">1</div>
                                            <img 
                                                src="https://randomuser.me/api/portraits/men/32.jpg" 
                                                alt="Foodie Master" 
                                                className="w-10 h-10 rounded-full object-cover border-2 border-yellow-400" 
                                            />
                                            <div>
                                                <p className="font-semibold">Foodie Master</p>
                                                <p className="text-gray-600 text-sm">1,234 reviews</p>
                                            </div>
                                        </div>
                                        <Medal className="text-yellow-500 w-6 h-6" />
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className="font-bold text-lg text-gray-700 w-3">2</div>
                                            <img 
                                                src="https://randomuser.me/api/portraits/women/44.jpg" 
                                                alt="Taste Explorer" 
                                                className="w-10 h-10 rounded-full object-cover border-2 border-orange-400" 
                                            />
                                            <div>
                                                <p className="font-semibold">Taste Explorer</p>
                                                <p className="text-gray-600 text-sm">882 reviews</p>
                                            </div>
                                        </div>
                                        <Medal className="text-gray-400 w-6 h-6" />
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className="font-bold text-lg text-gray-700 w-3">3</div>
                                            <img 
                                                src="https://randomuser.me/api/portraits/men/50.jpg" 
                                                alt="Flavor Hunter" 
                                                className="w-10 h-10 rounded-full object-cover border-2 border-green-400" 
                                            />
                                            <div>
                                                <p className="font-semibold">Flavor Hunter</p>
                                                <p className="text-gray-600 text-sm">654 reviews</p>
                                            </div>
                                        </div>
                                        <Medal className="text-amber-700 w-6 h-6" />
                                    </div>
                                </div>
                                <button className="w-full bg-gray-100 text-yellow-500 font-medium py-2 rounded-lg mt-6 
                                    hover:bg-gray-200 transition duration-300 cursor-pointer"
                                >
                                    Xem Bảng Xếp Hạng Đầy Đủ
                                </button>
                            </section>
                        </RevealOnScroll>

                        <RevealOnScroll delay={300}>
                            <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                <h2 className="text-2xl font-bold flex items-center mb-4">
                                    <Zap className="text-orange-500 w-6 h-6 mr-2" />Hành Động Nhanh
                                </h2>
                                <div className="space-y-4">
                                    <button className="w-full bg-orange-500 text-white px-4 py-3 rounded-lg flex items-center 
                                                    justify-center hover:bg-orange-600 transition duration-300"
                                    >
                                        <PencilLine className="w-5 h-5 mr-2" />Viết Review Mới
                                    </button>
                                    <button className="w-full bg-green-500 text-white px-4 py-3 rounded-lg flex items-center 
                                                    justify-center hover:bg-green-600 transition duration-300"
                                    >
                                        <ImagePlus className="w-5 h-5 mr-2" />Upload Ảnh Món Ăn
                                    </button>
                                    <button className="w-full bg-purple-500 text-white px-4 py-3 rounded-lg flex items-center 
                                                    justify-center hover:bg-purple-600 transition duration-300"
                                    >
                                        <BookOpenText className="w-5 h-5 mr-2" />Chia Sẻ Công Thức
                                    </button>
                                    <button className="w-full bg-yellow-500 text-white px-4 py-3 rounded-lg flex items-center 
                                                    justify-center hover:bg-yellow-600 transition duration-300"
                                    >
                                        <MapPin className="w-5 h-5 mr-2" />Tìm Quán Gần Đây
                                    </button>
                                </div>
                            </section>
                        </RevealOnScroll>

                        <RevealOnScroll delay={400}>
                            <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                <h2 className="text-2xl font-bold flex items-center mb-4">
                                    <Tags className="text-yellow-500 w-6 h-6 mr-2" /> Hashtag Thịnh Hành
                                </h2>
                                <div className="flex flex-wrap gap-3">
                                    <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-[6px] text-sm cursor-pointer">#phở</span>
                                    <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-[6px] text-sm cursor-pointer">#bánhmì</span>
                                    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-[6px] text-sm cursor-pointer">#chay</span>
                                    <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-[6px] text-sm cursor-pointer">#seafood</span>
                                    <span className="bg-red-100 text-red-700 px-4 py-2 rounded-[6px] text-sm cursor-pointer">#dessert</span>
                                    <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-[6px] text-sm cursor-pointer">#streetfood</span>
                                </div>
                            </section>
                        </RevealOnScroll>
                    </div>
                </main>

            </div>
        </div>
    );
}