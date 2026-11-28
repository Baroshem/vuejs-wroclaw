import type { KnipConfig } from 'knip'

const config: KnipConfig = {
  // Nuxt plugin auto-detects nuxt.config.ts, app/pages, app/plugins, etc.
  // Components, composables and utils are imported explicitly, so Knip follows them from the entries.
  entry: ['app/pages/**/*.vue', 'app/plugins/**/*.ts', 'app/assets/css/*.css'],
  project: ['app/**/*.{ts,vue,css}', '*.{ts,mjs}'],
  ignoreDependencies: [
    // Icon sets are resolved at runtime by @nuxt/ui / Iconify via `i-lucide-*`, `i-simple-icons-*`
    '@iconify-json/lucide',
    '@iconify-json/simple-icons',
    // Peer/runtime deps not imported directly (axe-core: @nuxt/a11y; vue-tsc: `nuxt typecheck`)
    'axe-core',
    'vue-tsc'
  ],
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
