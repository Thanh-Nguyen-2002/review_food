import { Mail, PhoneCall, Shield } from "lucide-react";

const Terms = () => {
    return (
        <section className="max-w-5xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">

            <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6 text-center">
                Điều Khoản Sử Dụng
            </h1>

            <div className="space-y-8">

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3 mb-2">
                        Giới thiệu chung
                    </h2>
                    <p>
                        Chào mừng Quý khách đến với <span className="font-semibold text-orange-600">ReviewFood</span> — nền tảng chia sẻ đánh giá món ăn và địa điểm ẩm thực.
                        Khi truy cập hoặc sử dụng website, Quý khách được xem như đã đọc, hiểu và đồng ý tuân thủ các điều khoản sử dụng dưới đây.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3 mb-2">
                        Quyền và nghĩa vụ của người dùng
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Người dùng có quyền tạo tài khoản, đăng bài đánh giá và bình luận theo đúng quy định của pháp luật Việt Nam.</li>
                        <li>Không được đăng tải nội dung vi phạm thuần phong mỹ tục, bạo lực, phân biệt chủng tộc, tôn giáo, hoặc xâm phạm quyền riêng tư của người khác.</li>
                        <li>Người dùng chịu trách nhiệm về mọi nội dung mà mình đăng tải trên hệ thống.</li>
                        <li>Không sử dụng website cho mục đích thương mại hoặc quảng cáo khi chưa được sự đồng ý bằng văn bản của ReviewFood.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3 mb-2">
                        Quyền và trách nhiệm của ReviewFood
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>ReviewFood có quyền kiểm duyệt, chỉnh sửa hoặc gỡ bỏ bất kỳ nội dung nào vi phạm quy định.</li>
                        <li>Chúng tôi cam kết bảo vệ thông tin cá nhân người dùng theo <a href="/security" className="text-orange-600 font-semibold hover:underline">Chính sách bảo mật</a>.</li>
                        <li>ReviewFood không chịu trách nhiệm đối với nội dung do người dùng đăng tải, nhưng sẽ phối hợp với cơ quan có thẩm quyền nếu có vi phạm xảy ra.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3 mb-2">
                        Quyền sở hữu trí tuệ
                    </h2>
                    <p>
                        Toàn bộ nội dung, thiết kế, logo, hình ảnh, mã nguồn và dữ liệu trên website ReviewFood 
                        đều thuộc quyền sở hữu của ReviewFood hoặc các bên cấp phép hợp pháp.
                        Nghiêm cấm mọi hành vi sao chép, sử dụng lại hoặc phân phối mà không có sự đồng ý của chúng tôi.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3 mb-2">
                        Giới hạn trách nhiệm
                    </h2>
                    <p>
                        ReviewFood không chịu trách nhiệm đối với thiệt hại phát sinh do:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Thông tin sai lệch hoặc không chính xác do người dùng cung cấp.</li>
                        <li>Sự cố kỹ thuật, gián đoạn hệ thống hoặc tấn công mạng ngoài tầm kiểm soát.</li>
                        <li>Việc sử dụng nội dung trên website mà không tham khảo thông tin chính thức từ nhà hàng, thương hiệu hoặc cơ quan chức năng.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3 mb-2">
                        Thay đổi điều khoản
                    </h2>
                    <p>
                        ReviewFood có quyền thay đổi, cập nhật hoặc bổ sung các điều khoản sử dụng bất kỳ lúc nào.
                        Các thay đổi sẽ có hiệu lực ngay khi được đăng tải trên website.
                        Người dùng có trách nhiệm thường xuyên kiểm tra để cập nhật các thông tin mới nhất.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3 mb-2">
                        Liên hệ hỗ trợ
                    </h2>
                    <p>
                        Nếu Quý khách có bất kỳ thắc mắc hoặc khiếu nại liên quan đến việc sử dụng website,
                        vui lòng liên hệ với chúng tôi qua các kênh hỗ trợ sau:
                    </p>
                    <div className="bg-orange-50 border border-orange-200 p-4 rounded-md mt-3 text-gray-700">
                        <p className="flex gap-3 items-center">
                            <PhoneCall size={18} />
                            Hotline: <span className="font-semibold text-orange-600">0377648322</span>
                        </p>
                        <p className="flex gap-3 items-center">
                            <Mail size={18} />
                            Email: <span className="font-semibold text-orange-600">nxthanh.nb2002@gmail.com</span>
                        </p>
                        <p className="flex gap-3 items-center">
                            <Shield size={18} />
                            Đơn vị quản lý: <span className="font-semibold text-orange-600">ReviewFood Việt Nam</span>
                        </p>
                    </div>
                </div>

                <div className="bg-orange-50 border border-orange-200 p-4 rounded-md">
                    <p className="font-semibold text-orange-600">
                        Khi sử dụng website, Quý khách xác nhận đã đọc, hiểu và đồng ý với toàn bộ các điều khoản sử dụng này.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Terms;
