module.exports = {
    mode: 'jit',
    content: [
      './pages/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
      extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography')
    ],
  }
  