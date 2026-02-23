import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx", "./src/**/*.ts"],
  theme: {
    extend: {
      colors: {
        sc: {
          bg: "#0c1427",
          surface: "#121c33",
          "surface-soft": "#0f1729",
          border: "#1f2c44",
          text: "#e9efff",
          muted: "#a8bad8",
          accent: "#6ee7d3",
          "accent-2": "#7fb7ff",
          warning: "#f5d06f",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        "sc-gradient":
          "radial-gradient(circle at 15% 20%, rgba(126,214,255,.12), transparent 35%), radial-gradient(circle at 80% 10%, rgba(111,231,211,.12), transparent 32%), linear-gradient(135deg, #0a0f1f 0%, #0b1729 45%, #0b1224 100%)",
      },
      boxShadow: {
        sc: "0 24px 50px rgba(4,10,24,.55)",
      },
      borderRadius: {
        sc: "18px",
        "sc-sm": "14px",
        "sc-pill": "999px",
      },
      animation: {
        "fade-in": "fadeIn 420ms ease-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
