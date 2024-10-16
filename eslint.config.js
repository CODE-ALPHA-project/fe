import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: { "react/react-in-jsx-scope": "off", "react/jsx-uses-react": "off" },
  },
  {
    // 여기에 settings 추가
    settings: {
      react: {
        version: "detect", // React 버전을 자동으로 감지하도록 설정
      },
    },
  }
];
