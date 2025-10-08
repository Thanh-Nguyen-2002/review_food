import { Mail, PhoneCall, DollarSign } from "lucide-react";
export const metadata = {
    title: "Hợp Tác | ReviewFood",
    description:
        `Tìm hiểu về chính sách hợp tác quảng cáo của ReviewFood — nền tảng kết nối 
        thương hiệu ẩm thực với cộng đồng người dùng, mang đến chiến dịch truyền thông hiệu quả và uy tín.`
};
const Advertising = () => {
    return (
        <section className="max-w-5xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">
            <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6 text-center">
                Hợp Tác Quảng Cáo
            </h1>

            <div className="space-y-8">

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3 mb-2">
                        Giới thiệu
                    </h2>
                    <p>
                        <span className="font-semibold text-orange-600">ReviewFood</span> chào đón các thương hiệu,
                        agency, KOL, và đối tác quảng cáo cùng hợp tác lan tỏa hình ảnh ẩm thực Việt Nam.
                        Chúng tôi cung cấp nhiều hình thức quảng cáo linh hoạt, tối ưu hiệu quả tiếp cận khách hàng.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3 mb-2">
                        Hình thức hợp tác quảng cáo
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Đăng bài viết / banner quảng cáo trên trang chủ và chuyên mục.</li>
                        <li>Hợp tác bài PR review ẩm thực, nhà hàng, thương hiệu.</li>
                        <li>Tài trợ các chuyên mục video, bài viết đặc biệt hoặc sự kiện offline.</li>
                        <li>Chương trình đồng thương hiệu (co-branding) và chiến dịch truyền thông.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3 mb-2">
                        Quyền lợi đối tác
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Tiếp cận hàng nghìn người đọc mỗi tháng trên nền tảng ReviewFood.</li>
                        <li>Được hỗ trợ thiết kế banner, nội dung truyền thông theo chuẩn SEO & UI.</li>
                        <li>Báo cáo hiệu quả chiến dịch minh bạch (traffic, lượt xem, tương tác).</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3 mb-2">
                        Liên hệ hợp tác
                    </h2>
                    <p>Vui lòng để lại thông tin, chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.</p>

                    <form className="mt-4 space-y-4 bg-orange-50 border border-orange-200 p-6 rounded-md">
                        <div>
                            <label className="block font-semibold mb-1">Tên doanh nghiệp / cá nhân</label>
                            <input type="text" className="w-full border border-orange-300 rounded-md p-2 
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
                            <label className="block font-semibold mb-1">Số điện thoại</label>
                            <input type="tel" className="w-full border border-orange-300 rounded-md p-2 
                                    focus:outline-none focus:ring-2 focus:ring-orange-400" 
                            />
                        </div>
                        <div>
                            <label className="block font-semibold mb-1">Nội dung hợp tác</label>
                            <textarea rows={4} className="w-full border border-orange-300 rounded-md p-2 
                                    focus:outline-none focus:ring-2 focus:ring-orange-400">
                            </textarea>
                        </div>
                        <button
                            // type="submit"
                            className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 
                                transition cursor-pointer"
                        >
                            Gửi yêu cầu
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
                        <DollarSign size={18} /> Hình thức thanh toán: Chuyển khoản / hợp đồng theo chiến dịch
                        </p>
                    </div>
                </div>

                <div className="bg-orange-50 border border-orange-200 p-4 rounded-md">
                    <p className="font-semibold text-orange-600">
                        Cùng ReviewFood lan tỏa giá trị ẩm thực Việt Nam đến cộng đồng!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Advertising;
