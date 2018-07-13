module.exports = {
  "extends": [
    "tslint:recommended",
    "tslint-react",
    "tslint-config-prettier",
  ],
  "rulesDirectory": [
    "../tslint-eslint-rules/dist/rules",
    "../tslint-microsoft-contrib",
    "rules",
  ],
  "rules": {
    "no-var-requires": false,
    "type-i-prefix": true,

    // tslint-eslint-rules
    "array-bracket-spacing": [true, "never"],
    "block-spacing": true,
    "brace-style": [ true, "1tbs", { "allowSingleLine": true } ],
    "object-curly-spacing": [true, "always"],
    "space-in-parens": [true, "never"],
    "ter-computed-property-spacing": true,
    "ter-prefer-arrow-callback": [true],

    // tslint-microsoft-contrib
    "no-function-constructor-with-string-args": true,
    "no-increment-decrement": true,
    "no-relative-imports": true,
    "prefer-array-literal": true,
    "react-a11y-anchors": true,
    "react-a11y-aria-unsupported-elements": true,
    "react-a11y-event-has-role": true,
    "react-a11y-image-button-has-alt": true,
    "react-a11y-img-has-alt": true,
    "react-a11y-lang": true,
    "react-a11y-meta": true,
    "react-a11y-props": true,
    "react-a11y-proptypes": true,
    "react-a11y-role-has-required-aria-props": true,
    "react-a11y-role-supports-aria-props": true,
    "react-a11y-role": true,
    "react-a11y-tabindex-no-positive": true,
    "react-a11y-titles": true,
    "react-anchor-blank-noopener": true,
  }
}
