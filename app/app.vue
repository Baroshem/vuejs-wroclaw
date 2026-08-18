<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
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

const menuItems = [
  { label: 'Event', href: '#event' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Venue', href: '#venue' },
  { label: 'CFP', href: '#cfp' }
]
</script>

<template>
  <UApp>
    <UHeader class="border-b border-white/10 bg-[#0F172B]/80 backdrop-blur-xl" :toggle="{ class: 'md:hidden' }">
      <template #left>
        <NuxtLink to="#event" class="flex items-center gap-3 text-white transition hover:text-primary">
          <AppLogo class="h-8 w-auto shrink-0" />
          <span class="hidden text-sm font-semibold uppercase tracking-[0.2em] text-slate-200 md:inline">
            Vue.js Wrocław
          </span>
        </NuxtLink>
      </template>

      <nav class="hidden items-center gap-2 md:flex">
        <UButton
          v-for="item in menuItems"
          :key="item.href"
          :label="item.label"
          :to="item.href"
          color="neutral"
          variant="ghost"
          size="sm"
          class="rounded-full text-sm font-medium text-slate-200 hover:text-white"
        />
      </nav>

      <template #body>
        <div class="flex flex-col gap-2 p-2">
          <UButton
            v-for="item in menuItems"
            :key="item.href"
            :label="item.label"
            :to="item.href"
            color="neutral"
            variant="ghost"
            size="lg"
            class="justify-start text-left"
          />
        </div>
      </template>

      <template #right>
        <UButton
          label="LinkedIn"
          to="https://www.linkedin.com/events/7287746621629587456/"
          target="_blank"
          color="primary"
          variant="soft"
          size="sm"
          class="rounded-full"
        />
      </template>
    </UHeader>

    <UMain class="bg-[#0F172B]">
      <NuxtPage />
    </UMain>

    <UFooter class="border-t border-white/10 bg-[#0F172B]">
      <template #left>
        <div>
          <p class="text-sm font-medium text-white">
            Vue.js Wrocław
          </p>
          <p class="mt-1 text-sm text-slate-400">
            Meetup • Wrocław • {{ new Date().getFullYear() }}
          </p>
        </div>
      </template>

      <template #right>
        <div class="flex items-center gap-3">
          <UButton
            v-for="item in menuItems"
            :key="item.href"
            :label="item.label"
            :to="item.href"
            color="neutral"
            variant="ghost"
            size="sm"
          />
        </div>
      </template>
    </UFooter>
  </UApp>
</template>
