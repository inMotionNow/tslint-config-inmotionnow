'use strict'
const path = require('path')

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
    'type-i-prefix': true,
  },
}
