module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser'
  'plugins': ["react", "jsx-a11y", "import", "prettier", "@typescript-eslint"],
  extends: [
    'react-app', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'airbnb', // Airbnb style guide
    "plugin:@typescript-eslint/recommended",
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    "prettier",
    "prettier/react",
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  ],
  rules: {
    'import/prefer-default-export': 'off',
    "indent": ["error", 2],
    "import/no-cycle": 'off',
    // prettier
    "prettier/prettier": ["error"],
    "jsx-a11y/accessible-emoji": 'off',
    // TypeScript
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-object-literal-type-assertion": "off",
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    // React
    "react/jsx-filename-extension": ["error", { extensions: [".tsx", ".jsx", ".js"] }],
    "react/prop-types": ["off", {}],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
    "jsx-a11y/label-has-associated-control": 0
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".jsx", ".tsx", ".json"]
      }
    },
    "import/extensions": [".js", ".ts", ".mjs", ".jsx", ".tsx"]
  }
};
