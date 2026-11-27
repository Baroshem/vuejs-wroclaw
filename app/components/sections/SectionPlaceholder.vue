<script setup lang="ts">
withDefaults(defineProps<{
  id: string
  title: string
  description: string
  icon: string
  deep?: boolean
}>(), { deep: false })
</script>

<template>
  <SectionBand
    :id="id"
    :deep="deep"
  >
    <h2 class="mb-3.5 font-display text-[28px] font-bold md:text-[40px]">
      {{ title }}
    </h2>
    <div class="flex flex-col items-center gap-3 rounded-xl border border-dashed border-white/15 px-6 py-14 text-center">
      <UIcon
        :name="icon"
        class="size-8 text-accent"
      />
      <UiBadge>Wkrótce</UiBadge>
      <p class="m-0 max-w-120 leading-[1.7] text-slate">
        {{ description }}
      </p>
    </div>
  </SectionBand>
</template>
