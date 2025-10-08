"use client";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

interface Props {
    children: React.ReactNode;
    delay?: number;
}

export default function RevealOnScroll({ children, delay = 0 }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
        ([entry]) => {
                if (entry.isIntersecting) {
                setVisible(true);
                observer.unobserve(el);
                }
            },
            { threshold: 0.15 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={clsx(
                "transition-all duration-1000 ease-out transform opacity-0 translate-y-10",
                visible && "opacity-100 translate-y-0",
            )}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
