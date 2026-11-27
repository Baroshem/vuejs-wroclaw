<script setup lang="ts">
// Call-to-action link: NuxtLink for internal paths (so the page transition runs), <a> for
// external ones, and an inert <span> while disabled ("wkrótce").
export interface CtaLinkData {
  label: string
  href?: string
  external?: boolean
  disabled?: boolean
}

defineProps<{ cta: CtaLinkData }>()

const NuxtLink = resolveComponent('NuxtLink')
</script>

<template>
  <component
    :is="cta.disabled ? 'span' : cta.href?.startsWith('/') && !cta.external ? NuxtLink : 'a'"
    v-bind="cta.disabled ? { 'aria-disabled': 'true' } : cta.href?.startsWith('/') && !cta.external ? { to: cta.href } : { href: cta.href }"
    :target="cta.external && !cta.disabled ? '_blank' : undefined"
    :rel="cta.external && !cta.disabled ? 'noopener' : undefined"
    :class="{ 'pointer-events-none opacity-50': cta.disabled }"
  >
    {{ cta.label }}
    <span
      v-if="cta.external && !cta.disabled"
      class="sr-only"
    >(otwiera się w nowej karcie)</span>
  </component>
</template>
