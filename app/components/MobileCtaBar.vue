<script setup lang="ts">
import { RESERVE_URL } from '~/utils/links'
</script>

<template>
  <div class="fixed inset-x-0 bottom-0 z-40 border-t border-crimson/35 bg-[rgba(10,7,8,0.96)] px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-lg md:hidden">
    <a
      :href="RESERVE_URL"
      target="_blank"
      rel="noopener"
      class="flex min-h-12 w-full items-center justify-center bg-crimson text-sm font-bold uppercase tracking-[0.08em] text-white hover:text-white"
    >
      Rezerwuj miejsce
    </a>
  </div>
</template>
