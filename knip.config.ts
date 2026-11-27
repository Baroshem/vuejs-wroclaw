import type { KnipConfig } from 'knip'

const config: KnipConfig = {
  // Nuxt plugin auto-detects nuxt.config.ts, app/pages, app/plugins, app/composables, app/utils, etc.
  // Nuxt auto-imports components/composables/utils, so Knip cannot see their usage from imports alone.
  entry: [
    'app/pages/**/*.vue',
    'app/plugins/**/*.ts',
    'app/composables/**/*.ts',
    'app/utils/**/*.ts',
    'app/components/**/*.vue',
    'app/assets/css/*.css'
  ],
  project: ['app/**/*.{ts,vue,css}', '*.{ts,mjs}'],
  ignoreDependencies: [
    // Icon sets are resolved at runtime by @nuxt/ui / Iconify via `i-lucide-*`, `i-simple-icons-*`
    '@iconify-json/lucide',
    '@iconify-json/simple-icons',
    // Peer/runtime deps not imported directly (axe-core: @nuxt/a11y; vue-tsc: `nuxt typecheck`)
    'axe-core',
    'vue-tsc'
  ],
  // Auto-imported components/composables are used without import statements,
  // so unused-export detection would yield false positives for them.
  ignoreExportsUsedInFile: true,
  rules: {
    files: 'error',
    dependencies: 'error',
    devDependencies: 'error',
    unlisted: 'error',
    binaries: 'error',
    unresolved: 'error',
    exports: 'warn',
    types: 'warn',
    duplicates: 'error'
  }
}

export default config
