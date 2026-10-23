<script setup lang="ts">
// Bonus talk placeholder card — "hidden slot" treatment: offset dashed layer
// behind the panel + BONUS corner ribbon. The only card allowed to use the
// ribbon, so "bonus" stays unambiguous vs regular slots.
withDefaults(defineProps<{ label: string, title: string, sub?: string, layered?: boolean }>(), { layered: true, sub: '' })
</script>

<template>
  <div
    class="relative mx-auto max-w-160"
    :class="layered
      ? 'pb-2.5 pr-2.5 before:absolute before:bottom-0 before:left-2.5 before:right-0 before:top-2.5 before:z-0 before:rounded-xl before:border before:border-dashed before:border-white/15 before:bg-panel before:opacity-55'
      : ''"
  >
    <div
      class="relative flex flex-col items-start gap-4 overflow-hidden rounded-xl bg-panel px-6 py-7 transition-[border-color,box-shadow] duration-300 before:pointer-events-none before:absolute before:-bottom-[70px] before:-left-5 before:z-0 before:size-[230px] before:rounded-full before:bg-[radial-gradient(circle,rgba(220,20,60,0.09),transparent_66%)] hover:border-accent/30 hover:shadow-[0_18px_48px_-26px_rgba(220,20,60,0.5)] md:flex-row md:items-center md:gap-7 md:px-8 motion-reduce:transition-none"
      :class="layered ? 'border border-white/10' : 'border border-dashed border-white/15'"
    >
      <div class="pointer-events-none absolute right-0 top-0 size-[124px] overflow-hidden max-md:size-[100px]">
        <span class="absolute right-[-44px] top-[30px] w-[180px] rotate-45 border-y border-accent/45 bg-accent/15 py-[5px] text-center font-display text-[10px] uppercase tracking-[0.2em] text-primary-300 indent-[0.2em] max-md:top-[24px] max-md:w-[160px]">
          Bonus
        </span>
      </div>
      <QuestionMarkBadge class="relative z-1 size-15 md:size-24" />
      <div class="relative z-1 flex flex-col gap-2">
        <p class="m-0 font-display text-[9px] uppercase tracking-[0.2em] text-slate-dim">
          {{ label }}
        </p>
        <p class="m-0 font-display text-[15px] font-bold md:text-base">
          {{ title }}
        </p>
        <p
          v-if="sub"
          class="m-0 text-xs leading-[1.55] text-slate md:text-[13px]"
        >
          {{ sub }}
        </p>
      </div>
    </div>
  </div>
</template>
