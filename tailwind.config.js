/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            primary: "#00703C",
            "primary-dark": "#085833",
            neutral: "#FEFEFE",
            "borders-neutral": "#DBDBDB",
         },
      },
   },
   plugins: [],
};
