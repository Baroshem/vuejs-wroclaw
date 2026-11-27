<script setup lang="ts">
// "Not announced yet" card: dashed panel with the ? badge. Sizing / grid placement
// comes from the caller through `class`.
defineProps<{ label: string }>()
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-5 rounded-xl border border-dashed border-white/15 bg-panel px-6 py-10">
    <QuestionMarkBadge class="size-16 md:size-24" />
    <p class="m-0 text-center font-display text-[10px] uppercase tracking-[0.2em] text-slate-dim md:text-[11px]">
      {{ label }}
    </p>
  </div>
</template>
