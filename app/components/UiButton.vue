<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: 'primary' | 'ghost'
  href?: string
  external?: boolean
  disabled?: boolean
}>(), { variant: 'primary' })

const internal = computed(() => !!props.href && !props.external && props.href.startsWith('/') && !/\.\w+$/.test(props.href))
const tag = computed(() => (internal.value ? resolveComponent('NuxtLink') : props.href ? 'a' : 'button'))
const type = computed(() => (props.href ? undefined : 'button'))
const classes = computed(() => [
  props.disabled && 'pointer-events-none opacity-50',
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
    v-bind="internal ? { to: href } : { href }"
    :type="type"
    :disabled="disabled && !href ? true : undefined"
    :aria-disabled="disabled ? 'true' : undefined"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener' : undefined"
  >
    <slot />
    <span
      v-if="external"
      class="sr-only"
    >(otwiera się w nowej karcie)</span>
  </component>
</template>
