'use strict'

module.exports = {
  extends: [
    'tslint:latest',
    'tslint-react',
    'tslint-eslint-rules',
    'tslint-microsoft-contrib',
    'tslint-config-prettier',
    'tslint-react-hooks'
  ],
  rulesDirectory: ['rules'],
  rules: {
    'completed-docs': false,
    'missing-jsdoc': false,
    'no-spread-object-literal-as-props': true,
    "no-this-assignment": [
      true,
      {
        "allow-destructuring": true
      }
    ],
    'ordered-imports': [
      true,
      {
        'grouped-imports': true,
        'import-sources-order': 'case-insensitive',
        'module-source-path': 'full',
        'named-imports-order': 'case-insensitive',
      },
    ],
    semicolon: { options: ['never'] },
    'type-literal-delimiter': false,
  },
}
