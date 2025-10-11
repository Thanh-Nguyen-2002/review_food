"use client";
import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const [open, setOpen] = useState(false);
    const pathName = usePathname()
    const links = [
        { href: "/", label: "Trang chủ" },
        { href: "/reviews", label: "Review" },
        { href: "/dia_diem_am_thuc", label: "Địa điểm ẩm thực" },
        { href: "/bai_viet", label: "Blog" },
        { href: "/kham_pha", label: "Khám phá" },
        { href: "/cong_dong", label: "Cộng đồng" },
        { href: "/hop_tac", label: "Hợp tác" },
        { href: "/about", label: "Giới thiệu" },
        { href: "/contact", label: "Liên hệ" },
    ];

    return (
        <header className="bg-black text-white fixed top-0 left-0 w-full z-50 border-b border-white/10 ">
            <div className="max-w-[1500px] mx-auto px-6 flex items-center justify-between h-[100px]">

                <div className="flex items-center space-x-2">
                    <Link  href="/" >
                        <span className="text-2xl font-bold text-amber-400">ReviewFood</span>
                    </Link>
                </div>

                <nav className="hidden lg:flex space-x-8 text-sm font-medium">
                    {links.map((link) => (
                        <Link 
                            key={link.href}
                            href={link.href}
                            className={`transition
                                ${pathName === link.href
                                ?  "text-amber-500 border-b-2 border-amber-500 pb-1" 
                                :  "hover:text-amber-400" }
                            `}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <button
                    className="lg:hidden p-2 text-white"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {open && (
                <div className="lg:hidden bg-black border-t border-white/10">
                    <nav className="flex flex-col space-y-4 px-6 py-4 text-sm font-medium">
                        {links.map((link) => (
                            <Link 
                                key={link.href}
                                href={link.href}
                                className={`transition
                                    ${pathName === link.href
                                    ?  "text-amber-500 border-b-2 border-amber-500 pb-1" 
                                    :  "hover:text-amber-400" }
                                `}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    
                </div>
            )}
        </header>
    );
}
