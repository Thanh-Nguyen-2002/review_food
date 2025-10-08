module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html",
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
    plugins: [],
}