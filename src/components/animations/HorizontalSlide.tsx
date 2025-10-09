"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";

interface HorizontalSlideProps {
    children: React.ReactNode[];
    activeIndex: number;
    direction?: "left" | "right";
    duration?: number; // ms
}

export default function HorizontalSlide({
    children,
    activeIndex,
    direction = "left",
    duration = 800,
}: HorizontalSlideProps) {
    const [prevIndex, setPrevIndex] = useState(activeIndex);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        if (activeIndex === prevIndex) return;
        setAnimating(true);
        const timeout = setTimeout(() => {
            setPrevIndex(activeIndex);
            setAnimating(false);
        }, duration);
        return () => clearTimeout(timeout);
    }, [activeIndex, duration, prevIndex]);

    return (
        <div className="relative overflow-hidden w-full h-full">

            <div
                className={clsx(
                "absolute inset-0 transition-transform ease-in-out",
                animating
                    ? direction === "left"
                    ? "-translate-x-full opacity-0"
                    : "translate-x-full opacity-0"
                    : "translate-x-0 opacity-100"
                )}
                style={{ transitionDuration: `${duration}ms` }}
            >
                {children[prevIndex]}
            </div>

            {animating && (
                <div
                    className={clsx(
                        "absolute inset-0 transition-transform ease-in-out",
                        direction === "left"
                        ? "translate-x-full opacity-0"
                        : "-translate-x-full opacity-0"
                    )}
                    style={{ transitionDuration: `${duration}ms` }}
                >
                    <div
                        className={clsx(
                            "absolute inset-0 transition-transform ease-in-out translate-x-0 opacity-100"
                        )}
                        style={{
                            transform: "translateX(0)",
                            animation: `slideIn-${direction} ${duration}ms ease-in-out forwards`,
                        }}
                    >
                        {children[activeIndex]}
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes slideIn-left {
                    from {
                        transform: translateX(100%);
                        opacity: 0.2;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                @keyframes slideIn-right {
                    from {
                        transform: translateX(-100%);
                        opacity: 0.2;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }   
            `}
            </style>
        </div>
    );
}
