/* eslint-env node */
module.exports = {
  root: true,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {     
    "no-tabs": 0, 
    quotes: ["error", "double", { avoidEscape: true, allowTemplateLiterals: true }],
    semi: [1, "always"],
    indent: ["off", 2],
    "dot-notation": 0,
    "space-before-function-paren": ["error", "never"],
    "comma-dangle": ["off", "always-multiline"],
  },
};
