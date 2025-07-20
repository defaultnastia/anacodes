import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";
import tsParser from "@typescript-eslint/parser";
import tsEslint from "@typescript-eslint/eslint-plugin";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
    plugins: {
      js,
      react: pluginReact,
      import: importPlugin,
      prettier,
      "@typescript-eslint": tsEslint,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...tsEslint.configs.recommended.rules,
      ...pluginReact.configs.flat.recommended.rules,
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-empty-object-type": "off",

      "import/order": [
        "error",
        {
          groups: [
            ["builtin", "external"],
            ["internal", "parent", "sibling", "index"],
          ],
          "newlines-between": "always",
        },
      ],

      "prettier/prettier": "error",

      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          fixStyle: "inline-type-imports",
        },
      ],
    },
  },
  {
    ignores: [
      ".next/",
      "node_modules/",
      "dist/",
      "build/",
      "coverage/",
      "tailwind.config.ts",
      "next.config.ts",
      "eslint.config.mjs",
      "postcss.config.mjs",
    ],
  },
]);
