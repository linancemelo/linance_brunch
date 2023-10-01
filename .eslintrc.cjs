/* eslint-env node */
module.exports = {
  root: true,
  globals: {
    defineEmits: "readonly",
    defineExpose: "readonly",
    defineProps: "readonly",
  },
  env: { node: true, es6: true },
  extends: [
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
    "./.eslintrc-auto-import.json",
  ],
  rules: {
    "no-debugger": process.env.VITE_APP_PENV === "outside" ? "error" : "off",
    "no-tabs": 0,
    quotes: [
      "error",
      "double",
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    semi: [1, "always"],
    indent: ["off", 2],
    "dot-notation": 0,
    "comma-dangle": ["off", "always-multiline"],
    "space-before-function-paren": [
      "error",
      { anonymous: "never", named: "never", asyncArrow: "always" },
    ],
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    // "no-undef": "off"
  },
  parser: "vue-eslint-parser",
  parserOptions: { parser: "@typescript-eslint/parser", ecmaVersion: 2020 },
  plugins: ["@typescript-eslint"],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      // 各種規則...
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      extends: [
        /* ... */
      ],
      rules: {
        /* ... */
      },
    },
  ],
};
