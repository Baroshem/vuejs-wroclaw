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

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/vuejs-wroclaw-hero.svg',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
