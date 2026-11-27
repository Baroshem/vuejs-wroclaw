<script setup lang="ts">
import type { Talk } from '~/data/editions/types'

// One agenda slot with the offset dashed layer behind it. null = topic not announced → ? card.
defineProps<{ talk: Talk | null }>()
</script>

<template>
  <div class="relative flex pb-1 pr-1 before:absolute before:bottom-0 before:left-1 before:right-0 before:top-1 before:z-0 before:rounded-xl before:border before:border-dashed before:border-white/15 before:bg-panel before:opacity-55 md:pb-1.5 md:pr-1.5 md:before:left-1.5 md:before:top-1.5">
    <div
      v-if="talk"
      class="relative flex flex-1 flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-white/10 bg-panel px-3 py-6 text-center md:gap-3 md:px-4 md:py-8"
    >
      <p class="m-0 font-display text-[9px] uppercase tracking-[0.18em] text-slate-dim md:text-[10px] md:tracking-[0.2em]">
        Prelekcja
      </p>
      <p class="m-0 font-display text-sm font-bold leading-snug md:text-lg">
        {{ talk.title }}
      </p>
      <p class="m-0 text-xs text-slate md:text-sm">
        {{ talk.speaker }}
      </p>
    </div>
    <div
      v-else
      class="relative flex flex-1 flex-col items-center justify-center gap-3 overflow-hidden rounded-xl border border-white/10 bg-panel px-4 py-6 md:gap-4 md:py-8"
    >
      <QuestionMarkBadge class="relative z-1 size-10 md:size-14" />
      <p class="m-0 text-center font-display text-[9px] uppercase tracking-[0.18em] text-slate-dim md:text-[10px] md:tracking-[0.2em]">
        Temat wkrótce
      </p>
    </div>
  </div>
</template>
