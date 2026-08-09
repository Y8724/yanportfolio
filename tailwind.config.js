export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0) scale(1)" },
          "50%": { transform: "translateY(-24px) translateX(12px) scale(1.05)" },
        },
        blob: {
          "0%, 100%": { borderRadius: "42% 58% 65% 35% / 45% 40% 60% 55%" },
          "50%": { borderRadius: "60% 40% 35% 65% / 55% 65% 35% 45%" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        float: "float 9s ease-in-out infinite",
        "float-delayed": "float 11s ease-in-out infinite 2s",
        "float-slow": "float 14s ease-in-out infinite 1s",
        blob: "blob 10s ease-in-out infinite, float 12s ease-in-out infinite",
        "gradient-x": "gradient-x 6s ease infinite",
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
    },
  },
  plugins: [],
};
