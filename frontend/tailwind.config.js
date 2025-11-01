export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        accent: "#22d3ee",
        dark: "#1e293b",
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
