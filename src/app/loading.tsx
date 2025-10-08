"use client";
import React, { useEffect, useState } from "react";

export default function Loading() {
  const [startOpen, setStartOpen] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    console.log("🌀 Loading started → spinner quay giữa màn hình...");

    const openTimer = setTimeout(() => {
      console.log("🎬 Bắt đầu mở rèm từ giữa ra hai bên...");
      setStartOpen(true);
    }, 2500); // sau 2.5s mở màn

    const endTimer = setTimeout(() => {
      console.log("✅ Rèm mở xong → ẩn toàn bộ overlay!");
      setDone(true);
    }, 4000); // sau 4s tắt toàn bộ overlay

    return () => {
      clearTimeout(openTimer);
      clearTimeout(endTimer);
    };
  }, []);

  if (done) {
    console.log("🧡 Overlay đã bị remove khỏi DOM!");
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white overflow-hidden">

      <div
        className={`relative w-36 h-36 z-20 transition-opacity duration-700 ${
          startOpen ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="absolute inset-0 border-4 border-t-transparent border-green-500 rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-4 border-r-transparent border-yellow-500 rounded-full animate-[spin_3s_linear_reverse_infinite]"></div>
        <div className="absolute inset-4 border-4 border-b-transparent border-red-500 rounded-full animate-[spin_4s_linear_infinite]"></div>
      </div>

      {/* Hai cánh rèm từ giữa */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Cánh trái */}
        <div
          className={`bg-orange-500 h-full origin-right transition-transform duration-[1200ms] ease-in-out ${
            startOpen ? "scale-x-0" : "scale-x-100"
          } w-1/2`}
        ></div>

        {/* Cánh phải */}
        <div
          className={`bg-orange-500 h-full origin-left transition-transform duration-[1200ms] ease-in-out ${
            startOpen ? "scale-x-0" : "scale-x-100"
          } w-1/2`}
        ></div>
      </div>

      <div
        className={`absolute inset-0 bg-white transition-opacity duration-700 ${
          startOpen ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
}
