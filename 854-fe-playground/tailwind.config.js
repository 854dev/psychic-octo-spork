// tailwind.config.js 
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  
	// theme 키값에 유틸리티 클래스 커스텀을 넣는다
  theme: {
    extend: {
      colors: {
        'sixgray': 'rgba(102, 102, 102, 0.4)',
      },
    }
  },

	// postCSS 등 플러그인 필요시 세팅
  plugins: [],
}