module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2015,
    sourceType: "module"
  },
  extends: "plugin:vue/recommended",
  plugins: [
    "vue",
    "html"
  ]
}
