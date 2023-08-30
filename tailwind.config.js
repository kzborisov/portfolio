/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#10F0FC",
        secondary: "#10637D",
        tertiary: "#B3C3D7",
        white: "#F2F2F2",
        gray: "#27282F",
        black: "#1C2025",
        blackOpacity: "#1C202550",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(100%)",
            transform: "translateX(100%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0px)",
            transform: "translateX(0px)",
          },
        },

        "slide-fwd": {
          "0%": {
            "-webkit-transform": "translateZ(0px)",
            transform: "translateZ(0px)",
          },
          "100%": {
            "-webkit-transform": "translateZ(160px)",
            transform: "translateZ(160px)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-in-out",
        "slide-fwd":
          " slide-fwd 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
      dropShadow: {
        primary: ["0 25px 13px #10F0FC35", "0 10px 15px #10F0FC25"],
      },
    },
  },
  plugins: [],
};
