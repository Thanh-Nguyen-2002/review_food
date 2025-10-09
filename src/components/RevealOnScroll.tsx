// "use client";
// import { useEffect, useRef, useState } from "react";
// import clsx from "clsx";
// 
// interface Props {
//     children: React.ReactNode;
//     delay?: number;
// }
// 
// export default function RevealOnScroll({ children, delay = 0 }: Props) {
//     const ref = useRef<HTMLDivElement>(null);
//     const [visible, setVisible] = useState(false);
// 
//     useEffect(() => {
//         const el = ref.current;
//         if (!el) return;
//         const observer = new IntersectionObserver(
//         ([entry]) => {
//                 if (entry.isIntersecting) {
//                 setVisible(true);
//                 observer.unobserve(el);
//                 }
//             },
//             { threshold: 0.15 }
//         );
//         observer.observe(el);
//         return () => observer.disconnect();
//     }, []);
// 
//     return (
//         <div
//             ref={ref}
//             className={clsx(
//                 "transition-all duration-1000 ease-out transform opacity-0 translate-y-10",
//                 visible && "opacity-100 translate-y-0",
//             )}
//             style={{ transitionDelay: `${delay}ms` }}
//         >
//             {children}
//         </div>
//     );
// }

"use client";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

interface Props {
    children: React.ReactNode;
    delay?: number;
    once?: boolean;
}

export default function RevealOnScroll({ children, delay = 0, once = false }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                setVisible(true);
                if (once) observer.unobserve(el);
                } else {
                if (!once) setVisible(false);
                }
            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -10% 0px",
            }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [once]);

    return (
        <div
            ref={ref}
            className={clsx(
                "transition-all duration-1000 ease-out transform",
                visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
