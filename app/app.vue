<script setup>
useScrollFx()

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/vuejs-wroclaw.svg' },
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
  ],
  htmlAttrs: {
    lang: 'pl'
  }
})

const title = 'Vue.js Wrocław • Meetup'
const description = 'Lokalny meetup Vue.js Wrocław z 4 speakerami, networkingiem i nowoczesną techniczną atmosferą.'

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
  ogImageAlt: 'Prelegenci i organizatorzy meetupu Vue.js Wrocław na scenie przed slajdem z logo',
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
