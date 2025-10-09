module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            keyframes: {
                fadeIn: { 
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideUp: { 
                    '0%': { opacity: '0', transform: 'translateY(50px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                zoomIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-out forwards',
                'fade-in-slow': 'fadeIn 1.5s ease-out forwards',
                'slide-up': 'slideUp 0.8s ease-out forwards',
                'zoom-in': 'zoomIn 0.8s ease-out forwards',
            }
        },
    },
    safelist: [
        'bg-orange-50', 'bg-green-50', 'bg-blue-50', 'bg-red-50', 'bg-purple-50',
        'bg-orange-400', 'bg-green-400', 'bg-blue-400', 'bg-red-400', 'bg-purple-400',
        'hover:bg-orange-500', 'hover:bg-green-500', 'hover:bg-blue-500', 'hover:bg-red-500', 'hover:bg-purple-500',
    ],
    plugins: [
        require('@tailwindcss/line-clamp'),
    ]
}