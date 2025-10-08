import { Mail, Map, PhoneCall, Utensils } from "lucide-react";
export const metadata = {
    title: "Liên Hệ Hợp Tác Nhà Hàng | ReviewFood",
    description:
        `Kết nối cùng ReviewFood để hợp tác quảng bá nhà hàng, mở rộng tệp khách hàng và nâng cao 
        hình ảnh thương hiệu trong cộng đồng yêu ẩm thực Việt Nam.`,
};
const RestaurantCooperation = () => {
    return (
        <section className="max-w-5xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">
            <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6 text-center">
                Liên Hệ Hợp Tác Nhà Hàng
            </h1>

            <div className="space-y-8">

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3 mb-2">
                        Giới thiệu
                    </h2>
                    <p>
                        <span className="font-semibold text-orange-600">ReviewFood</span> sẵn sàng đồng hành cùng các nhà hàng,
                        quán ăn, thương hiệu ẩm thực trong việc xây dựng hình ảnh, tăng độ nhận diện và thu hút khách hàng.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3 mb-2">
                        Cách thức hợp tác
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Đăng bài giới thiệu nhà hàng trên nền tảng ReviewFood.</li>
                        <li>Tham gia chương trình “Top món ngon địa phương”.</li>
                        <li>Hợp tác quay video trải nghiệm thực tế (review chân thật).</li>
                        <li>Tổ chức sự kiện, workshop, hoặc chiến dịch khuyến mãi chung.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3 mb-2">
                        Đăng ký hợp tác
                    </h2>
                    <form className="mt-4 space-y-4 bg-orange-50 border border-orange-200 p-6 rounded-md">
                        <div>
                            <label className="block font-semibold mb-1">Tên nhà hàng / thương hiệu</label>
                            <input type="text" className="w-full border border-orange-300 rounded-md p-2 
                                    focus:outline-none focus:ring-2 focus:ring-orange-400" 
                            />
                        </div>
                        <div>
                            <label className="block font-semibold mb-1">Địa chỉ</label>
                            <input type="text" className="w-full border border-orange-300 rounded-md p-2 
                                    focus:outline-none focus:ring-2 focus:ring-orange-400" 
                            />
                        </div>
                        <div>
                            <label className="block font-semibold mb-1">Số điện thoại liên hệ</label>
                            <input type="tel" className="w-full border border-orange-300 rounded-md p-2 
                                    focus:outline-none focus:ring-2 focus:ring-orange-400" 
                            />
                        </div>
                        <div>
                            <label className="block font-semibold mb-1">Email</label>
                            <input type="email" className="w-full border border-orange-300 rounded-md p-2 
                                    focus:outline-none focus:ring-2 focus:ring-orange-400" 
                            />
                        </div>
                        <div>
                            <label className="block font-semibold mb-1">Nội dung hợp tác mong muốn</label>
                            <textarea rows={4} className="w-full border border-orange-300 rounded-md p-2 
                                    focus:outline-none focus:ring-2 focus:ring-orange-400">
                            </textarea>
                        </div>
                        <button
                            // type="submit"
                            className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 
                            transition cursor-pointer "
                        >
                            Gửi thông tin
                        </button>
                    </form>

                    <div className="bg-orange-50 border border-orange-200 p-4 rounded-md mt-6 text-gray-700">
                        <p className="flex gap-3 items-center">
                            <PhoneCall size={18} /> Hotline: <span className="font-semibold text-orange-600">0377648322</span>
                        </p>
                        <p className="flex gap-3 items-center">
                            <Mail size={18} /> Email: <span className="font-semibold text-orange-600">nxthanh.nb2002@gmail.com</span>
                        </p>
                        <p className="flex gap-3 items-center">
                            <Map size={18} /> Văn phòng: 32/546 Trần Cung, Hà Nội
                        </p>
                        <p className="flex gap-3 items-center">
                            <Utensils size={18} /> Hợp tác truyền thông & đánh giá món ăn chính thức
                        </p>
                    </div>
                </div>

                <div className="bg-orange-50 border border-orange-200 p-4 rounded-md">
                    <p className="font-semibold text-orange-600">
                        ReviewFood — Nền tảng kết nối ẩm thực, nơi mỗi món ăn là một câu chuyện!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default RestaurantCooperation;
