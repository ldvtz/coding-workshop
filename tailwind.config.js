const themes = require("@bcc-code/design-library-vue");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    themes.bccForbundetTheme
  ],
  content: [
    "./src/**/*.{vue,ts}",
    "./node_modules/@bcc-code/design-library-vue/dist/design-library-vue.js",
  ],
  plugins: [
    themes.tailwindPlugin
  ],
  darkMode: 'class'
};