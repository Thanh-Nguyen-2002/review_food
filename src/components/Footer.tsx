import React from "react";
import { Facebook, Instagram, Youtube, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="max-w-[1500px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

                <div>
                    <h2 className="text-3xl font-bold mb-3 tracking-wide"> ReviewFood</h2>
                    <p className="italic text-amber-400 mb-4">
                        “Ăn ngon – Sống vui – Chia sẻ vị thật.”
                    </p>
                    <p className="text-sm opacity-90 leading-relaxed">
                        ReviewFood là nơi bạn khám phá những món ăn ngon, 
                        câu chuyện ẩm thực và địa điểm hấp dẫn khắp Việt Nam.  
                        Chúng tôi lan tỏa tình yêu ẩm thực đến mọi người.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4 border-b border-white/30 w-fit">
                        Chính sách & Hợp tác
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/chinh_sach/bao_mat" className="hover:text-amber-400">Chính sách bảo mật</Link></li>
                        <li><Link href="/chinh_sach/dieu_khoan_su_dung" className="hover:text-amber-400">Điều khoản sử dụng</Link></li>
                        <li><Link href="/chinh_sach/hop_tac_quang_cao" className="hover:text-amber-400">Hợp tác quảng cáo</Link></li>
                        <li><Link href="/chinh_sach/lien_he_hop_tac_nha_hang" className="hover:text-amber-400">Liên hệ hợp tác nhà hàng</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4 border-b border-white/30 w-fit">
                        Theo dõi & Nhận ưu đãi
                    </h3>

                    <div className="flex space-x-4 mb-5">
                        <Link href="#" className="hover:text-amber-400 transition">
                            <Facebook size={22} />
                        </Link>
                        <Link href="#" className="hover:text-amber-400 transition">
                            <Instagram size={22} />
                        </Link>
                        <Link href="#" className="hover:text-amber-400 transition">
                            <Youtube size={22} />
                        </Link>
                        <Link href="mailto:info@reviewfood.vn" className="hover:text-amber-400 transition">
                            <Mail size={22} />
                        </Link>
                        <Link href="tel:+84987654321" className="hover:text-amber-400 transition">
                            <Phone size={22} />
                        </Link>
                    </div>

                    <p className="text-sm mb-3 opacity-90">
                        Đăng ký email để nhận <span className="text-amber-400 font-semibold">mẹo ăn ngon & ưu đãi mới nhất!</span>
                    </p>
                    <form className="flex flex-col sm:flex-row items-center sm:items-stretch gap-3">
                        <input
                            type="email"
                            placeholder="Nhập email của bạn..."
                            className="flex-1 px-4 py-2 rounded-md text-white focus:outline-none border border-white"
                        />
                        <button
                            type="button"
                            className="bg-amber-400 hover:bg-amber-600 text-white px-4 py-2 rounded-md 
                            transition font-medium cursor-pointer"
                        >
                            Gửi
                        </button>
                    </form>
                </div>
            </div>

            <div className="bg-zinc-900 text-center py-4 text-sm border-t border-white/10">
                © 2025 <span className="font-semibold">ReviewFood</span>.  
                Mọi quyền được bảo lưu.
            </div>
        </footer>
    );
}
