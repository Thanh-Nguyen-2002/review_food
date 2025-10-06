import { Mail, Map, PhoneCall } from "lucide-react";

const Security = () => {
    return (
        <section className="max-w-5xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">

            <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6 text-center">
                Chính Sách Bảo Mật
            </h1>

            <div className="space-y-8">

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3 mb-2">
                        Mục đích thu thập thông tin
                    </h2>
                    <p>
                        ReviewFood thu thập dữ liệu cá nhân của Quý khách nhằm mục đích hỗ trợ đăng ký tài khoản,
                        đăng bài đánh giá món ăn, liên hệ hợp tác, cung cấp dịch vụ chăm sóc khách hàng 
                        và cải thiện trải nghiệm người dùng trên website.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3 mb-2">
                        Cách thức thu thập thông tin
                    </h2>
                    <p>
                        Dữ liệu cá nhân được thu thập thông qua các hình thức:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Khi người dùng đăng ký tài khoản hoặc gửi form liên hệ.</li>
                        <li>Khi để lại bình luận, đánh giá hoặc bài viết trên website.</li>
                        <li>Tự động ghi nhận thông tin truy cập như địa chỉ IP, loại thiết bị, trình duyệt… nhằm tối ưu hiệu năng và trải nghiệm người dùng.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3 mb-2">
                        Phạm vi sử dụng thông tin
                    </h2>
                    <p>
                        Các thông tin được cung cấp chỉ được sử dụng cho mục đích quản lý nội bộ,
                        hỗ trợ kỹ thuật, chăm sóc khách hàng và phân tích hành vi người dùng.
                        ReviewFood cam kết không bán, chia sẻ hoặc trao đổi dữ liệu cá nhân cho bên thứ ba
                        khi chưa có sự đồng ý của Quý khách, trừ trường hợp pháp luật yêu cầu.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3 mb-2">
                        Thời gian lưu trữ thông tin
                    </h2>
                    <p>
                        Dữ liệu cá nhân sẽ được lưu trữ trong hệ thống của ReviewFood cho đến khi:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Người dùng yêu cầu xoá tài khoản hoặc dữ liệu cá nhân.</li>
                        <li>ReviewFood ngừng hoạt động dịch vụ hoặc thay đổi mô hình hoạt động.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3 mb-2">
                        Bảo mật dữ liệu
                    </h2>
                    <p>
                        Chúng tôi áp dụng nhiều biện pháp kỹ thuật và quản lý an toàn như mã hóa dữ liệu (SSL),
                        tường lửa (Firewall), và giới hạn quyền truy cập nội bộ nhằm bảo vệ thông tin người dùng.
                    </p>
                    <p className="mt-2">
                        Trong trường hợp hệ thống bị tấn công dẫn đến rò rỉ thông tin,
                        ReviewFood sẽ thông báo kịp thời đến cơ quan chức năng và người dùng bị ảnh hưởng.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3 mb-2">
                        Quyền của khách hàng
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Kiểm tra, cập nhật và điều chỉnh thông tin cá nhân của mình.</li>
                        <li>Yêu cầu ReviewFood ngừng sử dụng hoặc xoá dữ liệu cá nhân bất kỳ lúc nào.</li>
                        <li>Gửi khiếu nại về việc thông tin cá nhân bị sử dụng sai mục đích.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3 mb-2">
                        Xử lý vi phạm
                    </h2>
                    <p>
                        Mọi hành vi xâm phạm dữ liệu người dùng hoặc sử dụng thông tin trái phép
                        sẽ bị xử lý theo quy định của pháp luật Việt Nam về an ninh mạng và bảo mật thông tin cá nhân.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 border-l-4 border-orange-500 pl-3 mb-2">
                        Liên hệ hỗ trợ
                    </h2>
                    <p>
                        Mọi thắc mắc, yêu cầu hoặc khiếu nại liên quan đến chính sách bảo mật,
                        vui lòng liên hệ với chúng tôi qua:
                    </p>
                    <div className="bg-orange-50 border border-orange-200 p-4 rounded-md mt-3 text-gray-700">
                        <p className="flex gap-3 items-center">
                            <PhoneCall size={18}/> 
                            Hotline: <span className="font-semibold text-orange-600">0377648322</span>
                        </p>
                        <p className="flex gap-3 items-center">
                            <Mail size={18}/> 
                            Email: <span className="font-semibold text-orange-600">nxthanh.nb2002@gmail.com</span>
                        </p>
                        <p className="flex gap-3 items-center">
                            <Map size={18}/> 
                            Địa chỉ: 32/546 Trần Cung
                        </p>
                    </div>
                </div>

                <div className="bg-orange-50 border border-orange-200 p-4 rounded-md">
                    <p className="font-semibold text-orange-600">
                        ReviewFood cam kết bảo mật tuyệt đối thông tin cá nhân của Quý khách, 
                        tuân thủ đầy đủ theo quy định pháp luật Việt Nam.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Security;
