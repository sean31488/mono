module.exports = {
  extends: [
    '@stylistic/stylelint-config',
    'stylelint-config-recess-order',
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue/scss'
  ],
  rules: {
    'scss/at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind', 'theme'] }],
  }
}
