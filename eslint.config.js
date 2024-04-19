import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";


export default [
  {
    languageOptions:
    {
      globals: globals.browser
    }
  },
  ...tseslint.configs.recommended,
  {
    ...pluginReactConfig,
    rules: {
      'react/react-in-jsx-scope': 'off',
     },
  }
];

// Missing plugins for eslint v9: April 2024
// eslint-plugin-react-hooks: https://github.com/facebook/react/issues/28313
// jsx-eslint: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/978