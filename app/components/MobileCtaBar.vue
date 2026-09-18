<script setup lang="ts">
import { RESERVE_URL } from '~/utils/links'
</script>

<template>
  <div class="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[rgba(6,8,11,0.96)] px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-lg md:hidden">
    <a
      :href="RESERVE_URL"
      target="_blank"
      rel="noopener"
      class="flex min-h-12 w-full items-center justify-center rounded-md bg-accent text-sm font-bold text-white"
    >
      Rezerwuj miejsce
      <span class="sr-only">(otwiera się w nowej karcie)</span>
    </a>
  </div>
</template>
