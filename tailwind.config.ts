import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      screens: {
        xs: "400px",
      },
      colors: {
        ink: "#F7FAF8",
        surface: "#FFFFFF",
        surface2: "#EEF4F0",
        line: "#DDE7E0",
        green: {
          DEFAULT: "#0E8F52",
          deep: "#39FF8C",
          dim: "#DEF3E6",
        },
        bone: "#0B1710",
        muted: "#5C6E65",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
