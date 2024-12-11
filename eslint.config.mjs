import globals from "globals";
import pluginJs from "@eslint/js";
import pluginSecurity from "eslint-plugin-security"; // Security plugin
import pluginNode from "eslint-plugin-node";         // Node.js-specific rules

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.node,
    },
  },
  pluginJs.configs.recommended, // Base recommended rules from eslint
  {
    files: ["**/*.js"],
    plugins: {
      security: pluginSecurity, // Security-focused rules
      node: pluginNode,         // Node.js-specific rules
    },
    rules: {
      "security/detect-eval-with-expression": "error", // Flag risky eval-like expressions
      "security/detect-non-literal-fs-filename": "warn", // Warn on non-literal filenames in `fs` methods
      "security/detect-object-injection": "warn", // Warn on potential object injection attacks
      "no-console": "warn", // Discourage console usage in production
      "node/no-unsupported-features/es-syntax": "error", // Enforce ES syntax support for Node.js versions
    },
  },
];
