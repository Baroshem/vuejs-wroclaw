<script setup lang="ts">
import { RESERVE_URL } from '~/utils/links'

const NuxtLink = resolveComponent('NuxtLink')

withDefaults(defineProps<{
  cta?: { label: string, href: string, external?: boolean }
}>(), {
  cta: () => ({ label: 'Rezerwuj miejsce', href: RESERVE_URL, external: true })
})
</script>

<template>
  <div class="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[rgba(6,8,11,0.96)] px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-lg md:hidden">
    <component
      :is="cta.href.startsWith('/') && !cta.external ? NuxtLink : 'a'"
      v-bind="cta.href.startsWith('/') && !cta.external ? { to: cta.href } : { href: cta.href }"
      :target="cta.external ? '_blank' : undefined"
      :rel="cta.external ? 'noopener' : undefined"
      class="flex min-h-12 w-full items-center justify-center rounded-md bg-accent text-sm font-bold text-white"
    >
      {{ cta.label }}
      <span
        v-if="cta.external"
        class="sr-only"
      >(otwiera się w nowej karcie)</span>
    </component>
  </div>
</template>
