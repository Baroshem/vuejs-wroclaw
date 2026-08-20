<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: 'primary' | 'ghost'
  href?: string
  external?: boolean
}>(), { variant: 'primary' })

const tag = computed(() => (props.href ? 'a' : 'button'))
const classes = computed(() => [
  'inline-block cursor-pointer border-none px-6.5 py-3.5 text-sm uppercase tracking-[0.05em] transition-colors',
  props.variant === 'primary'
    ? 'bg-crimson font-bold text-white hover:bg-crimson-light hover:text-white'
    : 'border border-white/25 bg-transparent text-white hover:border-crimson hover:text-crimson-light'
])
</script>

<template>
  <component
    :is="tag"
    :class="classes"
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener' : undefined"
  >
    <slot />
  </component>
</template>
