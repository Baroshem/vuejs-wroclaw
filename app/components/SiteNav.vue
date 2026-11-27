<script setup lang="ts">
import { RESERVE_URL } from '~/utils/links'

const NuxtLink = resolveComponent('NuxtLink')
const route = useRoute()
const pages = [
  { label: 'Start', to: '/' },
  { label: 'Edycja 1', to: '/2026' },
  { label: 'Edycja 2', to: '/2027' }
]

withDefaults(defineProps<{
  active: string | null
  links?: { id: string, label: string }[]
  cta?: { label: string, href?: string, external?: boolean, disabled?: boolean } | null
}>(), {
  links: () => [
    { id: 'speakers', label: 'Prelegenci' },
    { id: 'sponsors', label: 'Sponsorzy' },
    { id: 'agenda', label: 'Agenda' },
    { id: 'venue', label: 'Miejsce' },
    { id: 'gallery', label: 'Galeria' },
    { id: 'cfp', label: 'CFP' }
  ],
  cta: () => ({ label: 'Rezerwuj miejsce', href: RESERVE_URL, external: true })
})
</script>

<template>
  <nav
    data-site-nav
    aria-label="Nawigacja główna"
    class="sticky top-0 z-20 flex items-center justify-between border-b border-white/7 bg-[rgba(6,8,11,0.9)] px-5 py-3.5 backdrop-blur-md md:px-16 md:py-5"
  >
    <a
      href="#"
      class="flex items-center gap-3 font-display text-[13px] font-bold md:text-base"
    >
      <img
        src="/vuejs-wroclaw.svg"
        alt=""
        class="block w-6.5"
      >
      Vue.js Wrocław
    </a>
    <span class="mr-auto ml-8 hidden gap-6.5 border-l border-white/15 pl-8 text-xs uppercase tracking-[0.14em] md:flex">
      <NuxtLink
        v-for="p in pages"
        :key="p.to"
        :to="p.to"
        class="pb-0.75 transition-colors"
        :class="route.path === p.to ? 'text-accent-light' : 'text-slate hover:text-accent-light'"
        :aria-current="route.path === p.to ? 'page' : undefined"
      >
        {{ p.label }}
      </NuxtLink>
    </span>
    <span class="flex items-center gap-5.5">
      <span class="hidden gap-6.5 text-xs uppercase tracking-[0.14em] md:flex">
        <a
          v-for="l in links"
          :key="l.id"
          :href="`#${l.id}`"
          class="relative pb-0.75 transition-colors"
          :class="active === l.id
            ? 'text-accent-light after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-accent after:content-[\'\']'
            : 'text-slate hover:text-accent-light'"
          :aria-current="active === l.id ? 'true' : undefined"
        >
          {{ l.label }}
        </a>
      </span>
      <component
        :is="cta.disabled ? 'span' : cta.href?.startsWith('/') && !cta.external ? NuxtLink : 'a'"
        v-if="cta"
        v-bind="cta.disabled ? { 'aria-disabled': 'true' } : cta.href?.startsWith('/') && !cta.external ? { to: cta.href } : { href: cta.href }"
        :target="cta.external && !cta.disabled ? '_blank' : undefined"
        :rel="cta.external && !cta.disabled ? 'noopener' : undefined"
        :class="{ 'pointer-events-none opacity-50': cta.disabled }"
        class="hidden whitespace-nowrap rounded-md bg-accent px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-primary-600 hover:text-white md:inline-block"
      >
        {{ cta.label }}
        <span
          v-if="cta.external && !cta.disabled"
          class="sr-only"
        >(otwiera się w nowej karcie)</span>
      </component>
    </span>
  </nav>
</template>
