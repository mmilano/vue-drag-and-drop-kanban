module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/standard"],
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2020
  },
  rules: {

    "indent": ["error", 4],
    "quotes": ["warn", "double"],
    "semi":   ["warn", "always"],
    "prefer-const": ["warn"],
    "comma-dangle": ["warn"],
    "no-multiple-empty-lines": [0],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        mocha: true
      }
    }
  ]
};
