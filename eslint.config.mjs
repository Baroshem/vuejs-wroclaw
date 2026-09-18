// @ts-check
import vuejsAccessibility from 'eslint-plugin-vuejs-accessibility'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    files: ['**/*.vue'],
    plugins: { 'vuejs-accessibility': vuejsAccessibility },
    rules: {
      ...vuejsAccessibility.configs.recommended.rules
    }
  }
)
