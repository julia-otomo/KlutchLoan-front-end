import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
  ],
  theme: {
    screens: { sm: "375px", md: "768px", lg: "1024px", xl: "1440px" },
    extend: {
      colors: {
        "brand-1": "#228A95",
        "brand-2": "#EF9C4B",
        "grey-1": "#F8F8F8",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
