'use strict'

module.exports = {
  extends: [
    'tslint:latest',
    'tslint-react',
    'tslint-config-prettier',
    'tslint-eslint-rules',
    'tslint-microsoft-contrib',
  ],
  rulesDirectory: ['rules'],
  rules: {
    'completed-docs': false,
    'missing-jsdoc': false,
    'no-spread-object-literal-as-props': true,
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
  },
}
