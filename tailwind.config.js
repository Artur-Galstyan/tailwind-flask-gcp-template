module.exports = {
  mode: 'jit',
  content: [
      "./index/templates/**/*.{html,js}",
      "./blog/templates/**/*.{html,js}",
      './templates/**/*.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}