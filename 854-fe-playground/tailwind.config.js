// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],

  // theme 키값에 유틸리티 클래스 커스텀을 넣는다
  theme: {
    extend: {
      spacing: {
        "1p": "8px",
        "2p": "16px",
        "3p": "24px",
        "4p": "32px",
        "5p": "40px",
        "6p": "48px",
      },
      colors: {
        "gray-mdr": {
          DEFAULT: "#333333",
          0: "#FFFFFF",
          1: "#FAFAFA",
          2: "#F0F0F0",
          3: "#E5E5E5",
          4: "#666666",
          5: "#333333",
        },
        "purple-mdr": {
          DEFAULT: "#6738D4",
          50: "#DACFF5",
          100: "#CEBEF1",
          200: "#B49DEA",
          300: "#9A7BE2",
          400: "#815ADB",
          500: "#6738D4",
          600: "#4F26AE",
          700: "#3A1C80",
          800: "#251252",
          900: "#100824",
        },
      },
    },
  },

  // postCSS 등 플러그인 필요시 세팅
  plugins: [],
};
