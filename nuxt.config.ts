// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/a11y',
    '@nuxtjs/i18n'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css', '~/assets/css/transitions.css'],

  runtimeConfig: {
    public: {
      siteUrl: 'https://vuejs-wroclaw.vercel.app'
    }
  },

  routeRules: {
    '/': { prerender: true },
    '/2026': { prerender: true },
    '/2027': { prerender: true },
    '/en': { prerender: true },
    '/en/2026': { prerender: true },
    '/en/2027': { prerender: true }
  },

  experimental: {
    viewTransition: true
  },

  compatibilityDate: '2026-06-30',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  // Polish stays at the root (/2026, /2027 keep their URLs); other locales live under a prefix (/en/2026).
  // Files are lazy-loaded from i18n/locales; edition copy lives under `editions.<slug>.*`.
  i18n: {
    defaultLocale: 'pl',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'pl', language: 'pl-PL', name: 'Polski', file: 'pl.json' },
      { code: 'en', language: 'en-GB', name: 'English', file: 'en.json' }
    ],
    detectBrowserLanguage: false,
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://vuejs-wroclaw.vercel.app'
  }
})
