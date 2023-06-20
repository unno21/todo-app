module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-recommended"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ['extend', 'at-root', 'debug', 'warn', 'error', 'if', 'else', 'for', 'each', 'while', 'mixin', 'include', 'content', 'return', 'function']
      }
    ],
    "no-descending-specificity": null,
    "no-duplicate-selectors": null,
    "font-family-no-missing-generic-family-keyword": null
  },
  ignoreFiles: ["node_modules", "*/.tsx"]
}