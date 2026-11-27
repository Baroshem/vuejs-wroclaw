<script setup lang="ts">
import { SITE_PAGES } from '~/utils/editions'

const route = useRoute()
const { t } = useI18n()
const localePath = useLocalePath()
const baseName = useRouteBaseName()
const isCurrent = (name: string) => baseName(route) === name
</script>

<template>
  <nav
    data-tab-bar
    :aria-label="t('a11y.editionsNav')"
    class="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-[rgba(6,8,11,0.96)] pb-[env(safe-area-inset-bottom)] backdrop-blur-lg md:hidden"
  >
    <NuxtLink
      v-for="p in SITE_PAGES"
      :key="p.to"
      :to="localePath(p.to)"
      class="relative flex min-h-14 flex-col items-center justify-center gap-1 text-[11px] font-bold uppercase tracking-[0.1em] transition-colors"
      :class="isCurrent(p.name)
        ? 'text-accent-light before:absolute before:inset-x-6 before:top-0 before:h-0.5 before:bg-accent before:content-[\'\']'
        : 'text-slate'"
      :aria-current="isCurrent(p.name) ? 'page' : undefined"
    >
      <UIcon
        :name="p.icon"
        class="size-5"
      />
      {{ t(p.label) }}
    </NuxtLink>
  </nav>
</template>
