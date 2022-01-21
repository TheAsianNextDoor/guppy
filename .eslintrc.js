module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: "2021",
    sourceType: "module",
  },
  plugins: ["simple-import-sort", "@typescript-eslint", "modules-newline"],
  extends: [
    "plugin:import/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb-typescript/base",
  ],
  rules: {
    // indent rules
    indent: ["error", 4, { SwitchCase: 1 }],

    // line length rules
    "max-len": [
      "error",
      {
        comments: 256,
        code: 120,
        ignoreUrls: true,
      },
    ],

    // import rules
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/prefer-default-export": "off",
    "modules-newline/import-declaration-newline": "error",
    "modules-newline/export-declaration-newline": "error",

    // newline rules
    "array-bracket-newline": ["error", { minItems: 2 }],
    "array-element-newline": ["error", { minItems: 2 }],
    "object-curly-newline": [
      "error",
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 2,
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 2,
        },
        ImportDeclaration: {
          multiline: true,
          minProperties: 2,
        },
      },
    ],
    "object-property-newline": [
      "error",
      { allowAllPropertiesOnSameLine: false },
    ],

    // typescript
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/ban-types": "off",

    // misc rules
    "no-plusplus": "off",
    "no-debugger": "warn",
    "no-await-in-loop": "off",
    "no-process-env": "off",
    "linebreak-style": 0, // <-- Fixing the LF/CRLF issue
    semi: ["error", "always"],
    quotes: [
      2,
      "single",
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    "arrow-parens": ["error", "always"],
  },
  overrides: [
    {
      files: ["*.test.js"],
      rules: { "no-unused-expressions": "off" },
    },
  ],
};
