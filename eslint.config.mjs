// @ts-check
import vuejsAccessibility from 'eslint-plugin-vuejs-accessibility'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // ── Ignores ────────────────────────────────────────────────────────────
  {
    ignores: [
      '.agents/**',
      '.claude/**',
      'tmp/**',
      'public/**',
      '.output/**',
      '.nuxt/**'
    ]
  },

  // ── Base JS/TS rules (all files) ───────────────────────────────────────
  {
    files: ['**/*.{js,mjs,ts,vue}'],
    rules: {
      'eqeqeq': ['error', 'always', { null: 'ignore' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'object-shorthand': ['error', 'always'],
      'no-useless-rename': 'error'
    }
  },

  // ── TypeScript ─────────────────────────────────────────────────────────
  {
    files: ['**/*.{ts,vue}'],
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' }
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          ignoreRestSiblings: true
        }
      ],
      '@typescript-eslint/no-import-type-side-effects': 'error'
    }
  },

  // ── Imports ────────────────────────────────────────────────────────────
  {
    files: ['**/*.{ts,vue,mjs}'],
    rules: {
      'import/first': 'error',
      'import/no-duplicates': 'error',
      'import/no-mutable-exports': 'error',
      'import/newline-after-import': 'error'
    }
  },

  // ── Vue ────────────────────────────────────────────────────────────────
  {
    files: ['**/*.vue'],
    rules: {
      'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
      'vue/block-lang': ['error', { script: { lang: 'ts' } }],
      'vue/component-api-style': ['error', ['script-setup']],
      'vue/define-macros-order': [
        'error',
        { order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'] }
      ],
      'vue/define-props-declaration': ['error', 'type-based'],
      'vue/define-emits-declaration': ['error', 'type-literal'],
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        { registeredComponentsOnly: false }
      ],
      'vue/custom-event-name-casing': ['error', 'camelCase'],
      'vue/prefer-true-attribute-shorthand': 'error',
      'vue/prefer-define-options': 'error',
      'vue/no-v-html': 'error',
      'vue/no-useless-v-bind': 'error',
      'vue/no-useless-mustaches': 'error',
      'vue/no-useless-template-attributes': 'error',
      'vue/no-unused-refs': 'error',
      'vue/no-empty-component-block': 'error',
      'vue/no-duplicate-attr-inheritance': 'error',
      'vue/no-template-target-blank': 'error',
      'vue/require-typed-ref': 'error',
      'vue/v-for-delimiter-style': ['error', 'in'],
      'vue/html-self-closing': [
        'error',
        {
          html: { void: 'never', normal: 'always', component: 'always' },
          svg: 'always',
          math: 'always'
        }
      ],
      'vue/max-attributes-per-line': ['error', { singleline: { max: 3 }, multiline: { max: 1 } }],
      // Pages (2026.vue, index.vue) are single-word by Nuxt convention
      'vue/multi-word-component-names': 'off'
    }
  },

  // ── Accessibility ──────────────────────────────────────────────────────
  {
    files: ['**/*.vue'],
    plugins: { 'vuejs-accessibility': vuejsAccessibility },
    rules: {
      ...vuejsAccessibility.configs.recommended.rules
    }
  },

  // ── Config files: default exports are required ─────────────────────────
  {
    files: ['*.config.{ts,mjs}'],
    rules: {
      'import/no-default-export': 'off',
      'no-console': 'off'
    }
  }
)
