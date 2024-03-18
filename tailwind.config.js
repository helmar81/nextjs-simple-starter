/** @type {import('tailwindcss').Config} */


// tailwind.config.js
import {nextui} from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    
  ],

  darkMode: ["class"],
  theme: {
    extend: {},
  },
  plugins: [],
}