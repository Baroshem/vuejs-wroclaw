<script setup lang="ts">
import type { LocaleObject } from '@nuxtjs/i18n'

// One link per locale pointing at the same page in that language (switchLocalePath keeps the route).
const { t, locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const items = computed(() => (locales.value as LocaleObject[]).map(l => ({
  code: l.code,
  name: l.name ?? l.code,
  language: l.language ?? l.code,
  to: switchLocalePath(l.code)
})))
</script>

<template>
  <nav
    :aria-label="t('a11y.language')"
    class="flex items-center gap-3 text-xs uppercase tracking-[0.14em] md:border-l md:border-white/15 md:pl-6"
  >
    <NuxtLink
      v-for="l in items"
      :key="l.code"
      :to="l.to"
      :hreflang="l.language"
      :lang="l.code"
      :title="l.name"
      class="pb-0.75 transition-colors"
      :class="locale === l.code ? 'text-accent-light' : 'text-slate hover:text-accent-light'"
      :aria-current="locale === l.code ? 'true' : undefined"
    >
      {{ l.code }}
    </NuxtLink>
  </nav>
</template>
