// tailwind.config.js 
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  
	// theme 키값에 유틸리티 클래스 커스텀을 넣는다
  theme: {
    extend: {
      colors: {
        'sixgray': 'rgba(102, 102, 102, 0.4)',
        'purple-mdr': {
          DEFAULT: '#6738D4',
          '50': '#DACFF5',
          '100': '#CEBEF1',
          '200': '#B49DEA',
          '300': '#9A7BE2',
          '400': '#815ADB',
          '500': '#6738D4',
          '600': '#4F26AE',
          '700': '#3A1C80',
          '800': '#251252',
          '900': '#100824'
        },
      },
    }
  },

	// postCSS 등 플러그인 필요시 세팅
  plugins: [],
}