module.exports = {
    env: {
      es2021: true,
      node: true,
    },
    extends: ["standard-with-typescript", "prettier"],
    plugins: ["prettier"],
    rules: {
      "prettier/prettier": "error",
      "arrow-body-style": "off",
      "prefer-arrow-callback": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "import/no-default-export": "error",
      "@typescript-eslint/return-await": ["error", "in-try-catch"],
      eqeqeq: ["error", "smart"],
    },
    overrides: [],
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      project: "./tsconfig.json",
      tsconfigRootDir: __dirname,
    },
  };