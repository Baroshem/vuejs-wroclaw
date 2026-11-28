<script setup lang="ts">
// Call-to-action link: NuxtLink for internal paths (so the page transition runs), <a> for
// external ones, and an inert <span> while disabled ("coming soon").
export interface CtaLinkData {
  label: string
  href?: string
  external?: boolean
  disabled?: boolean
}

defineProps<{ cta: CtaLinkData }>()

const NuxtLink = resolveComponent('NuxtLink')
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <component
    :is="cta.disabled ? 'span' : cta.href?.startsWith('/') && !cta.external ? NuxtLink : 'a'"
    v-bind="cta.disabled ? { 'aria-disabled': 'true' } : cta.href?.startsWith('/') && !cta.external ? { to: localePath(cta.href!) } : { href: cta.href }"
    :target="cta.external && !cta.disabled ? '_blank' : undefined"
    :rel="cta.external && !cta.disabled ? 'noopener' : undefined"
    :class="{ 'pointer-events-none opacity-50': cta.disabled }"
  >
    {{ cta.label }}
    <span
      v-if="cta.external && !cta.disabled"
      class="sr-only"
    >{{ t('common.newTab') }}</span>
  </component>
</template>
