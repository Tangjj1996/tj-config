module.exports = {
  extends: [
    "stylelint-config-recess-order",
    "stylelint-config-recommended",
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
  ],
  plugins: [
    "stylelint-css-modules",
    "stylelint-scss",
    "stylelint-declaration-block-no-ignored-properties",
    "stylelint-no-unsupported-browser-features",
  ],
  rules: {
    "max-line-length": null,
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "scss/at-import-partial-extension": "always",
    "scss/at-import-partial-extension-whitelist": ["scss"],
    "css-modules/composed-class-names": true,
    "css-modules/css-variables": null,
    "plugin/declaration-block-no-ignored-properties": true,
    "no-descending-specificity": [
      true,
      {
        severity: "warning",
      },
    ],
    "plugin/no-unsupported-browser-features": [
      true,
      {
        severity: "warning",
      },
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"],
      },
    ],
    "value-no-vendor-prefix": null,
    "property-no-vendor-prefix": null,
    // kebab-case(组件库常用 or snake_case(方便使用css modules)
    "selector-class-pattern": "^([a-z][a-z0-9]*)((_|__|-|--)[a-z0-9]+)*$",
    indentation: [2, { baseIndentLevel: 1 }],
  },
  overrides: [
    {
      files: ["*.vue", "**/*.vue"],
      extends: [
        "stylelint-config-recommended-vue",
        "stylelint-config-recommended-vue/scss",
        "stylelint-config-standard-vue",
        "stylelint-config-standard-vue/scss",
      ],
      rules: {
        "selector-pseudo-class-no-unknown": [
          true,
          {
            ignorePseudoClasses: ["global", "deep"],
          },
        ],
      },
    },
  ],
  ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
};
