'use strict'

module.exports = {
  extends: [
    'tslint:latest',
    'tslint-react',
    'tslint-eslint-rules',
    'tslint-microsoft-contrib',
    'tslint-config-prettier',
    'tslint-react-hooks',
  ],
  rulesDirectory: ['rules'],
  rules: {
    'completed-docs': false,
    'function-constructor': true,
    'increment-decrement': true,
    'jsx-curly-brace-presence': true,
    'missing-jsdoc': false,
    'no-function-constructor-with-string-args': false,
    'no-increment-decrement': false,
    'no-spread-object-literal-as-props': true,
    'no-this-assignment': [
      true,
      {
        'allow-destructuring': true,
      },
    ],
    'no-unnecessary-bind': false,
    'ordered-imports': [
      true,
      {
        'grouped-imports': true,
        'import-sources-order': 'case-insensitive',
        'module-source-path': 'full',
        'named-imports-order': 'case-insensitive',
      },
    ],
    'react-no-unnecessary-fragment': true,
    semicolon: { options: ['never'] },
    'type-literal-delimiter': false,
    'unnecessary-bind': true,
  },
}
