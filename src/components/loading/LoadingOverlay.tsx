import React from "react";

interface LoadingOverlayProps {
    isLoading: boolean;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ isLoading }) => {

    return (
        <div
        className={`fixed inset-0 z-50 flex items-center justify-center
            bg-white transition-transform duration-[5000ms]
            ${isLoading ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
        >
            <div className="relative w-40 h-40">
                <div className="absolute inset-0 border-4 border-t-transparent border-green-500 rounded-full animate-spin"></div>
                <div className="absolute inset-2 border-4 border-r-transparent border-yellow-500 rounded-full animate-[spin_3s_linear_reverse_infinite]"></div>
                <div className="absolute inset-4 border-4 border-b-transparent border-red-500 rounded-full animate-[spin_4s_linear_infinite]"></div>
            </div>
        </div>
    );
};

export default LoadingOverlay;
