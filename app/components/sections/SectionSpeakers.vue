<script setup lang="ts">
import { edition2026 } from '~/data/editions/2026'

const host = edition2026.host!
const speakerSlots = edition2026.speakers
const bonus = edition2026.speakersBonus!

// Reveal flip: SSR ships the grid revealed (works without JS). On mount, if the
// grid sits below the fold and motion is allowed, hide speaker cards behind the
// ? faces; when the section first enters the viewport, all cards flip over.
const gridEl = ref<HTMLElement | null>(null)
const revealed = ref(true)
let observer: IntersectionObserver | null = null

onBeforeUnmount(() => observer?.disconnect())

onMounted(() => {
  if (!gridEl.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    return
  if (gridEl.value.getBoundingClientRect().top <= window.innerHeight)
    return // already visible at load → keep speaker cards, no flip
  revealed.value = false
  observer = new IntersectionObserver((entries) => {
    if (entries.some(entry => entry.isIntersecting)) {
      revealed.value = true
      observer?.disconnect()
    }
  }, { threshold: 0.1 })
  observer.observe(gridEl.value)
})
</script>

<template>
  <SectionBand
    id="speakers"
    deep
    wide
  >
    <div class="mb-6">
      <UiBadge>
        <UIcon
          name="i-lucide-mic"
          class="size-5"
        />
        Prowadzenie
      </UiBadge>
      <h2 class="mt-3.5 font-display text-[26px] font-bold md:text-[34px]">
        Kto poprowadzi
      </h2>
    </div>
    <article class="mx-auto mb-16 max-w-160 rounded-xl border border-white/10 bg-panel p-8">
      <div class="mb-5 flex min-h-20 items-center gap-5">
        <div class="size-20 shrink-0 rounded-full border border-white/15 p-0.5">
          <img
            :src="host.photo"
            :alt="host.name"
            class="size-full rounded-full object-cover"
          >
        </div>
        <div class="min-w-0">
          <p class="break-words font-display text-xl font-bold">
            {{ host.name }}
          </p>
          <p class="mt-1 text-sm leading-relaxed tracking-[0.03em] text-slate">
            {{ host.meta }}
          </p>
        </div>
      </div>
      <p class="m-0 border-t border-white/8 pt-4 text-[15px] leading-[1.75] text-slate">
        {{ host.desc }}
      </p>
    </article>
    <div class="mb-11">
      <UiBadge>
        <UIcon
          name="i-lucide-users"
          class="size-5"
        />
        Prelegenci
      </UiBadge>
      <h2 class="mt-3.5 font-display text-[26px] font-bold md:text-[34px]">
        Kto wystąpi
      </h2>
    </div>
    <div
      ref="gridEl"
      class="grid grid-cols-1 gap-x-3 md:grid-cols-2 md:gap-x-7 xl:grid-cols-4"
      :class="{ 'is-revealed': revealed }"
    >
      <template
        v-for="(speaker, i) in speakerSlots"
        :key="speaker?.name ?? `tbd-${i}`"
      >
        <!-- Confirmed speaker: ? card flips over to reveal the speaker card -->
        <div
          v-if="speaker"
          class="flip-card mb-3 md:mb-7"
        >
          <div class="flip-inner">
            <div class="flip-face flex flex-col items-center justify-center gap-5 rounded-xl border border-dashed border-white/15 bg-panel px-6 py-10">
              <QuestionMarkBadge class="size-16 md:size-24" />
              <p class="m-0 text-center font-display text-[10px] uppercase tracking-[0.2em] text-slate-dim md:text-[11px]">
                Prelegent wkrótce
              </p>
            </div>
            <article class="flip-face flip-face--back flip-face--rows rounded-xl border border-white/10 bg-panel p-8">
              <div class="mb-5 flex min-h-20 items-center gap-5">
                <div class="size-20 shrink-0 rounded-full border border-white/15 p-0.5">
                  <img
                    :src="speaker.photo"
                    :alt="speaker.name"
                    class="size-full rounded-full object-cover"
                  >
                </div>
                <div class="min-w-0">
                  <p class="break-words font-display text-xl font-bold">
                    {{ speaker.name }}
                  </p>
                  <p
                    v-if="speaker.meta"
                    class="mt-1 text-sm leading-relaxed tracking-[0.03em] text-slate"
                  >
                    {{ speaker.meta }}
                  </p>
                </div>
              </div>
              <p class="m-0 border-t border-white/8 pt-4 text-[15px] leading-[1.75] text-slate">
                {{ speaker.desc }}
              </p>
            </article>
          </div>
        </div>
        <!-- Open slot -->
        <div
          v-else
          class="row-span-2 mb-3 flex flex-col items-center justify-center gap-5 rounded-xl border border-dashed border-white/15 bg-panel px-6 py-10"
        >
          <QuestionMarkBadge class="size-16 md:size-24" />
          <p class="m-0 text-center font-display text-[10px] uppercase tracking-[0.2em] text-slate-dim md:text-[11px]">
            Prelegent wkrótce
          </p>
        </div>
      </template>
    </div>
    <BonusSlotCard
      class="mt-0"
      :layered="false"
      :label="bonus.label"
      :title="bonus.title"
      :meta="bonus.meta"
      :sub="bonus.sub"
      :photo="bonus.photo"
    />
  </SectionBand>
</template>

<style scoped>
/* Each card spans two rows of the parent grid (header + description) and passes
   them down via subgrid, so the header height and the divider line match across
   all cards without a fixed height. */
.flip-card {
  display: grid;
  grid-row: span 2;
  grid-template-rows: subgrid;
  perspective: 1400px;
}

.flip-inner {
  display: grid;
  grid-row: 1 / span 2;
  grid-template-rows: subgrid;
  transform-style: preserve-3d;
  transition: transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
}

.flip-face {
  grid-area: 1 / 1 / 3 / 2;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.flip-face--rows {
  display: grid;
  grid-template-rows: subgrid;
}

.flip-face--back {
  transform: rotateY(180deg);
}

.is-revealed .flip-inner {
  transform: rotateY(180deg);
}

@media (prefers-reduced-motion: reduce) {
  .flip-inner {
    transition: none;
  }
}
</style>
