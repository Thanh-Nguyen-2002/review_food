"use client";
import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-black text-white fixed top-0 left-0 w-full z-50 border-b border-white/10 ">
            <div className="max-w-[1500px] mx-auto px-6 flex items-center justify-between h-[100px]">

                <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-amber-400">ReviewFood</span>
                </div>

                <nav className="hidden md:flex space-x-8 text-sm font-medium">
                    <Link href="/" className="hover:text-amber-400 transition">Trang chủ</Link>
                    <Link href="/reviews" className="hover:text-amber-400 transition">Bài Review</Link>
                    <Link href="/about" className="hover:text-amber-400 transition">Giới thiệu</Link>
                    <Link href="/contact" className="hover:text-amber-400 transition">Liên hệ</Link>
                </nav>

                <div className="hidden md:block">
                    <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-4 py-2 rounded-md transition">
                        Gửi Review
                    </button>
                </div>

                <button
                    className="md:hidden p-2 text-white"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {open && (
                <div className="md:hidden bg-black border-t border-white/10">
                    <nav className="flex flex-col space-y-4 px-6 py-4 text-sm font-medium">
                        <Link href="/" className="hover:text-amber-400 transition">Trang chủ</Link>
                        <Link href="/reviews" className="hover:text-amber-400 transition">Bài Review</Link>
                        <Link href="/about" className="hover:text-amber-400 transition">Giới thiệu</Link>
                        <Link href="/contact" className="hover:text-amber-400 transition">Liên hệ</Link>
                        <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-4 py-2 rounded-md transition w-fit">
                            Gửi Review
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}
