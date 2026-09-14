<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: 'primary' | 'ghost'
  href?: string
  external?: boolean
}>(), { variant: 'primary' })

const tag = computed(() => (props.href ? 'a' : 'button'))
const classes = computed(() => [
  'inline-block cursor-pointer rounded-md px-6.5 py-3.5 text-sm transition-colors',
  props.variant === 'primary'
    ? 'bg-accent font-bold text-white hover:bg-accent-light hover:text-white'
    : 'rounded-md border border-white/25 bg-transparent text-white hover:border-accent hover:text-accent'
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
