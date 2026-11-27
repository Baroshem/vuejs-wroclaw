<script setup lang="ts">
defineProps<{
  name: string
  role: string
  logo?: string
}>()
</script>

<template>
  <li class="flex flex-col items-center gap-5 rounded-xl border border-white/10 bg-panel px-6 py-8">
    <p class="m-0 font-display text-[10px] uppercase tracking-[0.2em] text-slate-dim">
      {{ role }}
    </p>
    <div class="flex h-16 w-full items-center justify-center">
      <img
        v-if="logo"
        :src="logo"
        :alt="name"
        class="max-h-full max-w-[240px] object-contain"
      >
      <span
        v-else
        class="font-display text-2xl font-bold"
      >{{ name }}</span>
    </div>
  </li>
</template>
