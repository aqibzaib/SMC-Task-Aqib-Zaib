/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        redtone: ["Redtone", "sans-serif"],
        "dm-sans": ['"DM Sans"', "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(139deg, #3A97A4 0%, #2366CD 91%)",
      },
    },
  },
  plugins: [],
};
