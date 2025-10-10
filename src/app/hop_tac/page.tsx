import React from 'react';
import { Briefcase, Handshake, Mail, Phone, MapPin, Lightbulb, TrendingUp, Users, CheckCircle } from 'lucide-react';
import RevealOnScroll from '@/components/RevealOnScroll';
export const metadata = {
    title: "Hợp tác | ReviewFood",
    description:
        `ReviewFood tìm kiếm cơ hội hợp tác cùng các nhà hàng, thương hiệu ẩm thực, KOL và đối tác truyền thông 
        để mang đến trải nghiệm ẩm thực chân thực và giá trị cho cộng đồng yêu ăn uống.`
};
export default function Partnership() {
    return (
        <div className="min-h-screen bg-white text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1500px] mx-auto space-y-16 p-6">
                <RevealOnScroll>
                    <section className="text-center">
                        <h1 className="text-5xl font-extrabold text-yellow-500 mb-6 animate-fade-in">
                            Cơ Hội Hợp Tác
                        </h1>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-100">
                            ReviewFood luôn tìm kiếm những đối tác tiềm năng để cùng nhau phát triển,
                            mang đến giá trị bền vững và trải nghiệm tốt nhất cho cộng đồng.
                        </p>
                    </section>
                </RevealOnScroll>

                <RevealOnScroll delay={200}>
                    <section className="bg-gray-50 p-10 rounded-lg shadow-lg animate-slide-up">
                        <h2 className="text-4xl font-bold text-yellow-500 mb-8 border-b-2 border-amber-500 pb-2 inline-block">
                            Tại Sao Nên Hợp Tác Với Chúng Tôi?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-transform hover:scale-105 duration-300 border border-gray-200">
                                <TrendingUp className="text-yellow-500 mb-4" size={48} strokeWidth={1.5} />
                                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Tiếp Cận Cộng Đồng Lớn</h3>
                                <p className="text-gray-600">Hàng ngàn người dùng đam mê ẩm thực trên toàn quốc.</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-transform hover:scale-105 duration-300 border border-gray-200">
                                <Lightbulb className="text-yellow-500 mb-4" size={48} strokeWidth={1.5} />
                                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Giải Pháp Sáng Tạo</h3>
                                <p className="text-gray-600">Các chiến dịch tiếp thị và quảng bá độc đáo, hiệu quả.</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-transform hover:scale-105 duration-300 border border-gray-200">
                                <Users className="text-yellow-500 mb-4" size={48} strokeWidth={1.5} />
                                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Hỗ Trợ Chuyên Nghiệp</h3>
                                <p className="text-gray-600">Đội ngũ tận tâm luôn đồng hành cùng đối tác.</p>
                            </div>
                        </div>
                    </section>
                </RevealOnScroll>

                <RevealOnScroll delay={200}>
                    <section className="bg-gray-50 p-10 rounded-lg shadow-lg animate-slide-up delay-200">
                        <h2 className="text-4xl font-bold text-yellow-500 mb-8 border-b-2 border-amber-500 pb-2 inline-block">
                            Hình Thức Hợp Tác Đa Dạng
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex items-start p-6 bg-white rounded-lg shadow-md border border-gray-200">
                                <Briefcase className="text-yellow-500 mr-4 mt-1" size={32} strokeWidth={1.5} />
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Quảng Cáo & Tiếp Thị</h3>
                                    <p className="text-gray-600">
                                        Đăng tải banner, bài viết PR, các chiến dịch truyền thông trên nền tảng của chúng tôi.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start p-6 bg-white rounded-lg shadow-md border border-gray-200">
                                <Handshake className="text-yellow-500 mr-4 mt-1" size={32} strokeWidth={1.5} />
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Tài Trợ Sự Kiện</h3>
                                    <p className="text-gray-600">
                                        ReviewFood đồng hành cùng các sự kiện ẩm thực, văn hóa, giải trí.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start p-6 bg-white rounded-lg shadow-md border border-gray-200">
                                <CheckCircle className="text-yellow-500 mr-4 mt-1" size={32} strokeWidth={1.5} />
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Hợp Tác Nội Dung</h3>
                                    <p className="text-gray-600">
                                        Cùng tạo ra những nội dung độc đáo, review chuyên sâu về sản phẩm/dịch vụ của bạn.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start p-6 bg-white rounded-lg shadow-md border border-gray-200">
                                <Users className="text-yellow-500 mr-4 mt-1" size={32} strokeWidth={1.5} />
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Đối Tác Chiến Lược</h3>
                                    <p className="text-gray-600">
                                        Cùng xây dựng các chương trình dài hạn, phát triển thương hiệu bền vững.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </RevealOnScroll>

                <RevealOnScroll delay={200}>
                    <section className="bg-gray-50 p-10 rounded-lg shadow-lg animate-slide-up delay-400">
                        <h2 className="text-4xl font-bold text-yellow-500 mb-8 border-b-2 border-amber-500 pb-2 inline-block">
                            Quy Trình Hợp Tác
                        </h2>
                        <ol className="relative border-l-2 border-amber-500 ml-4 md:ml-0">
                            <li className="mb-10 ml-6">
                                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-amber-500 rounded-full ring-8 ring-white dark:ring-gray-50">
                                    <span className="text-sm font-bold text-white">1</span>
                                </span>
                                <h3 className="flex items-center mb-1 text-2xl font-semibold text-gray-900">Liên Hệ & Đề Xuất</h3>
                                <p className="mb-4 text-lg font-normal text-gray-700">Gửi thông tin về nhu cầu và ý tưởng hợp tác của bạn cho chúng tôi.</p>
                            </li>
                            <li className="mb-10 ml-6">
                                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-amber-500 rounded-full ring-8 ring-white dark:ring-gray-50">
                                    <span className="text-sm font-bold text-white">2</span>
                                </span>
                                <h3 className="mb-1 text-2xl font-semibold text-gray-900">Thảo Luận & Lên Kế Hoạch</h3>
                                <p className="mb-4 text-lg font-normal text-gray-700">Đội ngũ của chúng tôi sẽ liên hệ để trao đổi chi tiết và xây dựng kế hoạch phù hợp.</p>
                            </li>
                            <li className="mb-10 ml-6">
                                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-amber-500 rounded-full ring-8 ring-white dark:ring-gray-50">
                                    <span className="text-sm font-bold text-white">3</span>
                                </span>
                                <h3 className="mb-1 text-2xl font-semibold text-gray-900">Thực Hiện & Đánh Giá</h3>
                                <p className="mb-4 text-lg font-normal text-gray-700">Triển khai kế hoạch và cùng nhau đánh giá hiệu quả, tối ưu hóa chiến dịch.</p>
                            </li>
                            <li className="mb-10 ml-6">
                                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-amber-500 rounded-full ring-8 ring-white dark:ring-gray-50">
                                    <span className="text-sm font-bold text-white">4</span>
                                </span>
                                <h3 className="mb-1 text-2xl font-semibold text-gray-900">Phát Triển Bền Vững</h3>
                                <p className="mb-4 text-lg font-normal text-gray-700">Duy trì mối quan hệ đối tác lâu dài, cùng nhau phát triển và mở rộng.</p>
                            </li>
                        </ol>
                    </section>
                </RevealOnScroll>

                <RevealOnScroll delay={200}>
                    <section className="bg-gray-50 p-10 rounded-lg shadow-lg animate-slide-up delay-600">
                        <h2 className="text-4xl font-bold text-yellow-500 mb-8 border-b-2 border-amber-500 pb-2 inline-block">
                            Liên Hệ Với Chúng Tôi
                        </h2>
                        <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
                            Hãy liên hệ với đội ngũ chuyên trách của chúng tôi để bắt đầu hành trình hợp tác thành công.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
                                <Mail className="text-yellow-500 mb-4" size={48} strokeWidth={1.5} />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                                <a href="mailto:partnership@reviewfood.com" className="text-blue-600 hover:underline">
                                    nxthanh@gmail.com
                                </a>
                            </div>
                            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
                                <Phone className="text-yellow-500 mb-4" size={48} strokeWidth={1.5} />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Điện thoại</h3>
                                <a href="tel:+84987654321" className="text-blue-600 hover:underline">
                                    +84 377 648 322
                                </a>
                            </div>
                            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
                                <MapPin className="text-yellow-500 mb-4" size={48} strokeWidth={1.5} />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Văn phòng</h3>
                                <p className="text-gray-600">546 Đường Trần Cung, Cổ Nhuế 1, Nam Từ Liêm, Hà Nội</p>
                            </div>
                        </div>
                    </section>
                </RevealOnScroll>

                <RevealOnScroll delay={200}>
                    <section className="bg-gray-50 p-10 rounded-lg shadow-lg animate-slide-up delay-800">
                        <h2 className="text-4xl font-bold text-yellow-500 text-center mb-8 border-b-2 border-amber-500 pb-2 inline-block">
                            Gửi Yêu Cầu Hợp Tác
                        </h2>
                        <form className="max-w-2xl mx-auto space-y-6">
                            <div>
                                <label htmlFor="partnerName" className="block text-sm font-medium text-gray-700">Tên công ty/Tổ chức:</label>
                                <input type="text" id="partnerName" name="partnerName" required
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                                    placeholder="Tên công ty/tổ chức của bạn"
                                />
                            </div>
                            <div>
                                <label htmlFor="partnerEmail" className="block text-sm font-medium text-gray-700">Email liên hệ:</label>
                                <input type="email" id="partnerEmail" name="partnerEmail" required
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                                    placeholder="email@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="partnerType" className="block text-sm font-medium text-gray-700">Lĩnh vực hợp tác:</label>
                                <select id="partnerType" name="partnerType"
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                                >
                                    <option value="">Chọn hình thức hợp tác</option>
                                    <option value="quang_cao">Quảng Cáo & Tiếp Thị</option>
                                    <option value="tai_tro">Tài Trợ Sự Kiện</option>
                                    <option value="noi_dung">Hợp Tác Nội Dung</option>
                                    <option value="chien_luoc">Đối Tác Chiến Lược</option>
                                    <option value="khac">Khác</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="partnerMessage" className="block text-sm font-medium text-gray-700">Thông điệp:</label>
                                <textarea id="partnerMessage" name="partnerMessage" rows={5} required
                                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 resize-y"
                                    placeholder="Hãy chia sẻ ý tưởng hợp tác của bạn..."
                                ></textarea>
                            </div>
                            <button type="submit"
                                className="w-full py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-amber-500 hover:bg-amber-600 
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
                            >
                                Gửi Yêu Cầu
                            </button>
                        </form>
                    </section>
                </RevealOnScroll>
            </div>
        </div>
    );
}