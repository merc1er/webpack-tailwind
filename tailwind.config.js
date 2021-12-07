module.exports = {
  // Without the purge the whole tailwind system gets included in the final
  // bundle (4MB). the purge makes sure only the classes we use get included.
  purge: {
    enable: true,
    content: ["./src/**/*.html"]
  },
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
