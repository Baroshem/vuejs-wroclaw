<script setup lang="ts">
import SpaceBackground from '~/components/hero/SpaceBackground.vue'
import { useScrollFx } from '~/composables/useScrollFx'

useScrollFx()

const { t } = useI18n()
const i18nHead = useLocaleHead({ dir: true, lang: true, seo: true })

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/vuejs-wroclaw.svg' },
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
  ]
})

// lang/dir on <html>, hreflang alternates, canonical and og:locale for the current route.
useHead(() => ({
  htmlAttrs: i18nHead.value.htmlAttrs,
  link: i18nHead.value.link,
  meta: i18nHead.value.meta
}))

const title = computed(() => t('meta.title'))
const description = computed(() => t('meta.description'))

// Open Graph crawlers need an absolute URL; override with NUXT_PUBLIC_SITE_URL if the domain changes.
const { siteUrl } = useRuntimeConfig().public
const ogImage = `${siteUrl}/og-image.jpg`

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: computed(() => t('meta.ogImageAlt')),
  twitterImage: ogImage,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <ClientOnly>
      <SpaceBackground />
    </ClientOnly>
    <NuxtPage />
  </UApp>
</template>
