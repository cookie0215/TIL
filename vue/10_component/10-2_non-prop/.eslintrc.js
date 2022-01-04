module.exports = {
  // 어떤 환경에서 스크립트를 실행할 것인지 설정
  env: {
    browser: true,
    node: true
  },
  extends: [
    // vue에서 권장하는 코드 규칙 
    // 'plugin:vue/vue3-strongly-recommended',
    "plugin:vue/vue3-essential",

    // js에서 권장하는 코드 규칙
    'eslint: recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "never",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }]
  }
}