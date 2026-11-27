<script setup lang="ts">
import { RESERVE_URL } from '~/utils/links'

withDefaults(defineProps<{
  active: string | null
  links?: { id: string, label: string }[]
  cta?: { label: string, href: string, external?: boolean }
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
      <a
        :href="cta.href"
        :target="cta.external ? '_blank' : undefined"
        :rel="cta.external ? 'noopener' : undefined"
        class="hidden whitespace-nowrap rounded-md bg-accent px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-primary-600 hover:text-white md:inline-block"
      >
        {{ cta.label }}
        <span
          v-if="cta.external"
          class="sr-only"
        >(otwiera się w nowej karcie)</span>
      </a>
    </span>
  </nav>
</template>
