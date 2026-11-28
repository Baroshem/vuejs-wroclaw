<script setup lang="ts">
import UiBadge from '~/components/primitives/UiBadge.vue'
// Badge (optional) + h2 + description (optional). No spacing around itself —
// the caller adds margins through `class`.
defineProps<{
  title: string
  badge?: string
  icon?: string
  description?: string
}>()
</script>

<template>
  <div>
    <UiBadge
      v-if="badge"
      class="mb-4.5"
    >
      <UIcon
        v-if="icon"
        :name="icon"
        class="size-5"
      />
      {{ badge }}
    </UiBadge>
    <h2 class="font-display text-[26px] font-bold md:text-[34px]">
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="mt-3 max-w-160 text-[15px] leading-[1.75] text-slate"
    >
      {{ description }}
    </p>
  </div>
</template>
