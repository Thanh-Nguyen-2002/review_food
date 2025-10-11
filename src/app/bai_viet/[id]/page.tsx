"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Clock4, ChefHat, Flame, Star, Share2, Bookmark } from "lucide-react";


function Pill({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <span className={`inline-block rounded-[6px] px-3 py-1 text-xs font-semibold ${className}`}>
            {children}
        </span>
    );
}

export default function MonGiaCay() {

    const tocRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const headings = document.querySelectorAll("section[data-heading]");
        const onScroll = () => {
            const pos = window.scrollY + 120;
            headings.forEach((h) => {
                const id = h.getAttribute("id")!;
                const link = tocRef.current?.querySelector(`a[href="#${id}"]`);
                if (!link) return;
                const top = (h as HTMLElement).offsetTop;
                const height = (h as HTMLElement).offsetHeight;
                link.classList.toggle(
                    "text-orange-600",
                    pos >= top && pos < top + height
                );
            });
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <main className="relative bg-white text-gray-900">

            <header className="relative max-w-[1500px] mx-auto px-6 pt-10 pb-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">

                    <div className="relative">
                        <Pill className="bg-yellow-100 text-black h-10 content-center">Món truyền thống</Pill>
                        <h1 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight">
                            Giả Cầy Việt Nam: Hành Trình Tìm Về Hương Vị Dân Dã
                        </h1>
                        <p className="mt-4 text-gray-600">
                            Giả cầy là sự kết hợp hài hòa giữa{" "}
                            <strong>riềng – mẻ – mắm tôm</strong> và thịt heo, tạo nên vị
                            chua thanh, mặn mà, thơm nồng khó lẫn. Bài viết này hướng dẫn chi
                            tiết từng bước, kèm mẹo nhỏ và câu chuyện văn hóa sau mâm cơm Việt.
                        </p>

                        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-gray-600">
                            <span className="inline-flex items-center gap-2">
                                <ChefHat className="text-orange-500" size={18} />
                                Chef Minh Anh
                            </span>
                            <span>•</span>
                            <span className="inline-flex items-center gap-2">
                                <Clock4 size={18} /> 8 phút đọc
                            </span>
                            <span>•</span>
                            <span className="inline-flex items-center gap-2">
                                <Flame size={18} /> 4 khẩu phần
                            </span>
                        </div>

                        <div className="mt-6 flex items-center gap-3">

                            <button className="h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg">
                                <Share2 size={18} />
                            </button>
                            <button className="h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg">
                                <Bookmark size={18} />
                            </button>
                            <div className="ml-auto hidden lg:flex items-center gap-2 bg-white/80 backdrop-blur px-3 py-2 rounded-xl shadow">
                                <Star className="text-yellow-400 fill-yellow-400" size={18} />
                                <div>
                                    <p className="text-sm font-semibold leading-tight">4.8/5</p>
                                    <p className="text-[11px] text-gray-500 leading-tight">189 đánh giá</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="relative h-[260px] md:h-[320px] w-full rounded-3xl bg-gradient-to-tr from-orange-400 to-pink-500 shadow-xl overflow-hidden">
                            <Image
                                src="/images/gia_cay.jpg"
                                alt="Giả cầy Việt Nam"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover opacity-90 rounded-3xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-[1500px] mx-auto px-6 pb-24 grid lg:grid-cols-[260px_1fr] gap-10">

                <aside className="lg:sticky lg:top-24 h-max">
                    <div
                        ref={tocRef}
                        className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
                    >
                        <p className="text-xs font-semibold text-gray-500 mb-2">Nội dung</p>
                        <nav className="space-y-2 text-sm">
                            <a href="#cau-chuyen" className="block hover:text-orange-600">
                                1. Câu chuyện món giả cầy
                            </a>
                            <a href="#nguyen-lieu" className="block hover:text-orange-600">
                                2. Nguyên liệu & tỉ lệ
                            </a>
                            <a href="#cac-buoc" className="block hover:text-orange-600">
                                3. Các bước thực hiện
                            </a>
                            <a href="#meo-nho" className="block hover:text-orange-600">
                                4. Mẹo nhỏ & biến tấu
                            </a>
                            <a href="#dinh-duong" className="block hover:text-orange-600">
                                5. Dinh dưỡng ước tính
                            </a>
                            <a href="#faq" className="block hover:text-orange-600">
                                6. Câu hỏi thường gặp
                            </a>
                        </nav>
                    </div>
                </aside>

                <article className="space-y-14">

                    <section id="cau-chuyen" data-heading className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold">Câu chuyện món giả cầy</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Từ những phiên chợ làng vùng đồng bằng Bắc Bộ, giả cầy xuất hiện như một cách
                            <em> “thỏa nỗi nhớ vị cầy”</em> dựa trên nguyên liệu quen thuộc là thịt heo. Hương thơm
                            đặc trưng đến từ <strong>riềng giã</strong>, độ chua thanh của <strong>mẻ</strong> và chút
                            <strong> mắm tôm</strong> dậy mùi, kết hợp kỹ thuật om để thịt mềm mà không bở. Món ăn
                            thường dùng trong những bữa cơm gia đình, đặc biệt những ngày mưa lạnh – khi hơi ấm của
                            nồi giả cầy lan tỏa khắp gian bếp nhỏ.
                        </p>
                    </section>

                    <section id="nguyen-lieu" data-heading className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold">Nguyên liệu & tỉ lệ (4 khẩu phần)</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                                <h3 className="font-semibold mb-3">Phần chính</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Thịt heo (chân giò hoặc ba chỉ): 800g – 1kg</li>
                                    <li>• Riềng tươi giã: 3–4 muỗng canh</li>
                                    <li>• Mẻ xay: 3 muỗng canh (lọc lấy nước)</li>
                                    <li>• Mắm tôm ngon: 1–1.5 muỗng canh</li>
                                    <li>• Nghệ tươi hoặc bột nghệ: 1 muỗng cà phê</li>
                                    <li>• Sả đập dập: 2 cây</li>
                                    <li>• Hành khô bằm, tỏi bằm: mỗi loại 1 muỗng canh</li>
                                    <li>• Nước dừa tươi: 300–400ml (tùy độ đậm)</li>
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                                <h3 className="font-semibold mb-3">Gia vị & ăn kèm</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Muối, đường, tiêu: vừa đủ</li>
                                    <li>• Dầu điều (tùy chọn) để lên màu</li>
                                    <li>• Hành lá, rau răm, lá mơ (ăn kèm)</li>
                                    <li>• Bún tươi / cơm trắng / bánh mì</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section id="cac-buoc" data-heading className="space-y-7">
                        <h2 className="text-2xl md:text-3xl font-bold">Các bước thực hiện</h2>

                        <div className="grid md:grid-cols-2 gap-5 items-start">
                            <div className="relative h-56 rounded-2xl overflow-hidden shadow-md">
                                <Image
                                    src="/images/so_che.jpg"
                                    alt="Sơ chế và tẩm ướp"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <Pill className="bg-orange-50 text-orange-700">Bước 1</Pill>
                                <h3 className="text-xl font-semibold mt-2">Sơ chế & tẩm ướp</h3>
                                <p className="text-gray-700 mt-2">
                                    Chần nhanh thịt với ít gừng + muối để khử mùi, rửa sạch. Cắt miếng quân cờ.
                                    Ướp thịt với riềng giã, mẻ lọc, mắm tôm, nghệ, hành tỏi bằm, một chút đường
                                    và tiêu. Để tối thiểu 30 phút (ngon nhất 2–3 giờ trong ngăn mát).
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-5 items-start">
                            <div className="order-2 md:order-1">
                                <Pill className="bg-orange-50 text-orange-700">Bước 2</Pill>
                                <h3 className="text-xl font-semibold mt-2">Xào săn & dậy mùi</h3>
                                <p className="text-gray-700 mt-2">
                                Phi thơm ít dầu với hành khô, cho thịt đã ướp vào xào lửa vừa đến khi săn.
                                Lúc này mùi riềng – mắm tôm – nghệ quyện rất thơm. Có thể thêm một muỗng dầu điều để màu đẹp.
                                </p>
                            </div>
                            <div className="relative h-56 rounded-2xl overflow-hidden shadow-md order-1 md:order-2">
                                <Image
                                    src="/images/step_2.jpg"
                                    alt="Xào săn thịt"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-5 items-start">
                            <div className="relative h-56 rounded-2xl overflow-hidden shadow-md">
                                <Image
                                    src="/images/step_3.jpg"
                                    alt="Om với nước dừa"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <Pill className="bg-orange-50 text-orange-700">Bước 3</Pill>
                                <h3 className="text-xl font-semibold mt-2">Om mềm với nước dừa</h3>
                                <p className="text-gray-700 mt-2">
                                    Cho nước dừa tươi vào xâm xấp thịt, kèm sả đập dập. Hạ nhỏ lửa, om 25–35 phút
                                    đến khi thịt mềm vừa, nước sánh. Nêm lại vị chua – mặn – ngọt cân bằng, thêm mẻ nếu muốn chua hơn.
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-5 items-start">
                            <div className="order-2 md:order-1">
                                <Pill className="bg-orange-50 text-orange-700">Bước 4</Pill>
                                <h3 className="text-xl font-semibold mt-2">Trình bày & thưởng thức</h3>
                                <p className="text-gray-700 mt-2">
                                Rắc hành lá, rau răm. Ăn nóng với bún hoặc cơm trắng. Có thể dọn kèm chén mắm tôm pha
                                loãng, vài lát ớt tươi. Nước om sánh bóng bám đều miếng thịt là đạt.
                                </p>
                            </div>
                            <div className="relative h-56 rounded-2xl overflow-hidden shadow-md order-1 md:order-2">
                                <Image
                                    src="/images/step_4.jpg"
                                    alt="Trình bày món giả cầy"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </section>

                    <section id="meo-nho" data-heading className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold">Mẹo nhỏ & biến tấu</h2>
                        <div className="grid md:grid-cols-3 gap-5">
                            <div className="rounded-2xl bg-white border border-gray-200 p-5 shadow-sm">
                                <h3 className="font-semibold mb-2">Chọn thịt</h3>
                                <p className="text-gray-700">
                                    Chân giò (có da) cho độ dai giòn; ba chỉ cho béo mềm. Có thể trộn 50–50 để cân bằng.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-white border border-gray-200 p-5 shadow-sm">
                                <h3 className="font-semibold mb-2">Canh vị</h3>
                                <p className="text-gray-700">
                                    Vị chuẩn là <em>chua thanh – mặn vừa – thơm riềng mẻ</em>. Không để mắm tôm lấn át.
                                </p>
                            </div>
                            <div className="rounded-2xl bg-white border border-gray-200 p-5 shadow-sm">
                                <h3 className="font-semibold mb-2">Biến tấu nhanh</h3>
                                <p className="text-gray-700">
                                    Thêm chút sữa dừa cuối cùng cho phiên bản béo nhẹ; hoặc om với măng chua để tăng độ đậm đà.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section id="dinh-duong" data-heading className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold">Dinh dưỡng ước tính (1 khẩu phần)</h2>
                        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="p-3">Thành phần</th>
                                        <th className="p-3">Giá trị</th>
                                        <th className="p-3">Ghi chú</th>
                                    </tr>
                                </thead>
                                <tbody className="[&>tr:nth-child(even)]:bg-gray-50/60">
                                    <tr>
                                        <td className="p-3">Năng lượng</td>
                                        <td className="p-3">520–580 kcal</td>
                                        <td className="p-3">Phụ thuộc phần thịt sử dụng</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">Protein</td>
                                        <td className="p-3">28–32 g</td>
                                        <td className="p-3">Từ thịt heo</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">Chất béo</td>
                                        <td className="p-3">30–36 g</td>
                                        <td className="p-3">Giảm nếu dùng phần nạc/vệ sinh mỡ</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">Carb</td>
                                        <td className="p-3">6–10 g</td>
                                        <td className="p-3">Từ nước dừa & gia vị</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section id="faq" data-heading className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold">Câu hỏi thường gặp</h2>
                        <div className="space-y-3">
                            <details className="group rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                                <summary className="cursor-pointer font-medium text-gray-800 flex items-center justify-between">
                                    Không có mẻ thì thay bằng gì?
                                    <span className="text-orange-500">+</span>
                                </summary>
                                <p className="mt-2 text-gray-700">
                                    Có thể dùng <em>giấm gạo</em> hoặc <em>sữa chua không đường</em> để tạo độ chua nhẹ,
                                    nhưng hương vị sẽ khác mẻ truyền thống.
                                </p>
                            </details>
                            <details className="group rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                                <summary className="cursor-pointer font-medium text-gray-800 flex items-center justify-between">
                                    Nên om bằng nồi gì?
                                    <span className="text-orange-500">+</span>
                                </summary>
                                <p className="mt-2 text-gray-700">
                                    Nồi gang/nồi dày giữ nhiệt giúp thịt mềm đều, nước sánh đẹp.
                                </p>
                            </details>
                        </div>
                    </section>

                    <div className="flex items-center gap-3 pt-2">
                        <span className="text-gray-500 text-sm">Chia sẻ bài viết:</span>
                        <button className="rounded-full bg-sky-100 text-sky-700 px-3 py-1 text-sm hover:bg-sky-200 cursor-pointer">
                            Facebook
                        </button>
                        <button className="rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-sm hover:bg-blue-200 cursor-pointer">
                            Twitter/X
                        </button>
                        <button className="rounded-full bg-green-100 text-green-700 px-3 py-1 text-sm hover:bg-green-200 cursor-pointer">
                            Zalo
                        </button>
                    </div>

                </article>
            </div>
        </main>
    );
}
