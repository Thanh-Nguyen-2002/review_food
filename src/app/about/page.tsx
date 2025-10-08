import React from 'react';
import { Star, Award, HeartHandshake, Users, Lightbulb } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
    title: "Giới thiệu | ReviewFood",
    description:
    "Khám phá ReviewFood - cộng đồng chia sẻ và đánh giá ẩm thực hàng đầu Việt Nam.",
}

export default function AboutUs() {
    return (
        <div className="min-h-screen  text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1500px] mx-auto space-y-16 p-6">

                <section className="text-center">
                    <h1 className="text-5xl font-extrabold text-amber-400 mb-6 animate-fade-in">
                        Về Chúng Tôi
                    </h1>
                    <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed animate-fade-in delay-100">
                        Chào mừng bạn đến với ReviewFood - nơi hội tụ của những người đam mê ẩm thực,
                        cùng nhau khám phá và chia sẻ những trải nghiệm tuyệt vời nhất.
                    </p>
                </section>

                <section className="bg-gray-900 p-10 rounded-lg shadow-xl animate-slide-up">
                    <h2 className="text-4xl font-bold text-amber-400 mb-6 border-b-2 border-amber-400 pb-2 inline-block">
                        ReviewFood là ai?
                    </h2>
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="md:w-1/2">
                            <p className="text-lg text-gray-200 leading-relaxed mb-4">
                                ReviewFood được thành lập với sứ mệnh kết nối cộng đồng yêu ẩm thực.
                                Chúng tôi không chỉ là một nền tảng đánh giá món ăn, mà còn là nơi
                                khơi nguồn cảm hứng, chia sẻ những câu chuyện và trải nghiệm độc đáo
                                đằng sau mỗi món ăn, mỗi nhà hàng.
                            </p>
                            <p className="text-lg text-gray-200 leading-relaxed">
                                Với hàng ngàn đánh giá chân thực và cộng đồng sôi nổi, ReviewFood tự hào
                                là người bạn đồng hành tin cậy của bạn trên mọi hành trình ẩm thực.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <Image
                                src="/images/about_us.jpg"
                                alt="Về ReviewFood"
                                className="rounded-lg shadow-lg w-full h-auto object-cover border-2 border-amber-400"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>
                </section>

                <section className="bg-gray-900 p-10 rounded-lg shadow-xl animate-slide-up delay-200">
                    <h2 className="text-4xl font-bold text-amber-400 mb-8 border-b-2 border-amber-400 pb-2 inline-block">
                        Những Dấu Ấn Tự Hào
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg shadow-md transition-transform hover:scale-105 duration-300">
                            <Star className="text-amber-400 mb-4" size={48} strokeWidth={1.5} />
                            <h3 className="text-2xl font-semibold text-amber-400 mb-2">Hơn 100,000 Thành Viên</h3>
                            <p className="text-gray-300">Cộng đồng yêu ẩm thực lớn mạnh và sôi nổi nhất.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg shadow-md transition-transform hover:scale-105 duration-300">
                            <Award className="text-amber-400 mb-4" size={48} strokeWidth={1.5} />
                            <h3 className="text-2xl font-semibold text-amber-400 mb-2">50,000+ Đánh Giá Chất Lượng</h3>
                            <p className="text-gray-300">Tổng hợp những đánh giá chân thực, đa dạng.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg shadow-md transition-transform hover:scale-105 duration-300">
                            <HeartHandshake className="text-amber-400 mb-4" size={48} strokeWidth={1.5} />
                            <h3 className="text-2xl font-semibold text-amber-400 mb-2">Hàng Trăm Đối Tác</h3>
                            <p className="text-gray-300">Kết nối với các nhà hàng, quán ăn hàng đầu.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-900 p-10 rounded-lg shadow-xl animate-slide-up delay-400">
                    <h2 className="text-4xl font-bold text-amber-400 mb-6 border-b-2 border-amber-400 pb-2 inline-block">
                        Câu Chuyện của Chúng Tôi
                    </h2>
                    <div className="flex flex-col md:flex-row-reverse items-center gap-10"> {/* Đổi chiều để ảnh bên trái */}
                        <div className="md:w-1/2">
                            <p className="text-lg text-gray-200 leading-relaxed mb-4">
                                ReviewFood bắt đầu từ niềm đam mê nhỏ của một nhóm bạn thân yêu thích khám phá ẩm thực.
                                Chúng tôi nhận ra rằng việc tìm kiếm thông tin đáng tin cậy về món ăn và nhà hàng
                                thường khá khó khăn. Từ đó, ý tưởng xây dựng một cộng đồng nơi mọi người có thể
                                dễ dàng chia sẻ và tìm kiếm các đánh giá chân thực đã ra đời.
                            </p>
                            <p className="text-lg text-gray-200 leading-relaxed mb-4">
                                Với những đêm thức trắng và sự cống hiến không ngừng, ReviewFood dần trở thành
                                một nền tảng vững chắc. Chúng tôi luôn lắng nghe người dùng để cải thiện,
                                mang đến những tính năng mới và trải nghiệm tốt nhất.
                            </p>
                            <p className="text-lg text-gray-200 leading-relaxed">
                                Mỗi đánh giá, mỗi chia sẻ của bạn đều là một phần quan trọng trong câu chuyện
                                phát triển của ReviewFood.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <Image
                                src="/images/about_us.jpg"
                                alt="Câu chuyện ReviewFood"
                                className="rounded-lg shadow-lg w-full h-auto object-cover border-2 border-amber-400"
                                width={400}
                                height={300}
                            />
                        </div>
                    </div>
                </section>

                <section className="bg-gray-900 p-10 rounded-lg shadow-xl animate-slide-up delay-600">
                    <h2 className="text-4xl font-bold text-amber-400 mb-8 border-b-2 border-amber-400 pb-2 inline-block">
                        Đối Tác & Tài Trợ
                    </h2>
                    <p className="text-lg text-gray-200 leading-relaxed mb-8 text-center max-w-2xl mx-auto">
                        ReviewFood tự hào được hợp tác với các thương hiệu ẩm thực hàng đầu
                        và nhận được sự tài trợ từ những tổ chức uy tín, giúp chúng tôi
                        không ngừng phát triển và mang đến giá trị tốt nhất cho cộng đồng.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                        <div className="flex items-center justify-center p-4 bg-gray-800 rounded-lg">
                            <Image
                                src="/images/about_us.jpg"
                                alt="Brand A"
                                className="max-h-full max-w-full object-contain"
                                width={400}
                                height={300}
                            />
                        </div>
                        <div className="flex items-center justify-center p-4 bg-gray-800 rounded-lg">
                           <Image
                                src="/images/about_us.jpg"
                                alt="Brand B"
                                className="max-h-full max-w-full object-contain"
                                width={400}
                                height={300}
                            />
                        </div>
                        <div className="flex items-center justify-center p-4 bg-gray-800 rounded-lg">
                           <Image
                                src="/images/about_us.jpg"
                                alt="Brand C"
                                className="max-h-full max-w-full object-contain"
                                width={400}
                                height={300}
                            />
                        </div>
                        <div className="flex items-center justify-center p-4 bg-gray-800 rounded-lg">
                            <Image
                                src="/images/about_us.jpg"
                                alt="Brand D"
                                className="max-h-full max-w-full object-contain"
                                width={400}
                                height={300}
                            />
                        </div>

                    </div>
                </section>

                <section className="bg-gray-900 p-10 rounded-lg shadow-xl animate-slide-up delay-800">
                    <h2 className="text-4xl font-bold text-amber-400 mb-8 border-b-2 border-amber-400 pb-2 inline-block">
                        Tầm Nhìn & Sứ Mệnh
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="flex items-start bg-gray-800 p-6 rounded-lg shadow-md">
                            <Lightbulb className="text-amber-400 mr-4 mt-1" size={32} strokeWidth={1.5} />
                            <div>
                                <h3 className="text-2xl font-semibold text-amber-400 mb-2">Tầm Nhìn</h3>
                                <p className="text-gray-300">
                                    Trở thành nền tảng ẩm thực số 1 tại Việt Nam, truyền cảm hứng và kết nối
                                    hàng triệu người yêu ẩm thực trên khắp cả nước.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start bg-gray-800 p-6 rounded-lg shadow-md">
                            <Users className="text-amber-400 mr-4 mt-1" size={32} strokeWidth={1.5} />
                            <div>
                                <h3 className="text-2xl font-semibold text-amber-400 mb-2">Sứ Mệnh</h3>
                                <p className="text-gray-300">
                                    Cung cấp thông tin ẩm thực chính xác, đa dạng và xây dựng một cộng đồng
                                    minh bạch, nơi mọi người có thể chia sẻ niềm vui khám phá ẩm thực.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}