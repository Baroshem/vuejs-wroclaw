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
    <SectionHeader
      class="mb-6"
      icon="i-lucide-mic"
      badge="Prowadzenie"
      title="Kto poprowadzi"
    />
    <PersonCard
      class="mx-auto mb-16 max-w-160"
      v-bind="host"
    />
    <SectionHeader
      class="mb-11"
      icon="i-lucide-users"
      badge="Prelegenci"
      title="Kto wystąpi"
    />
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
            <PlaceholderCard
              class="flip-face"
              label="Prelegent wkrótce"
            />
            <PersonCard
              class="flip-face flip-face--back flip-face--rows"
              v-bind="speaker"
            />
          </div>
        </div>
        <!-- Open slot -->
        <PlaceholderCard
          v-else
          class="row-span-2 mb-3"
          label="Prelegent wkrótce"
        />
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
