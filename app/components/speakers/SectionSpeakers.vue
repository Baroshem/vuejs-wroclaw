<script setup lang="ts">
import PlaceholderCard from '~/components/PlaceholderCard.vue'
import BonusSlotCard from '~/components/agenda/BonusSlotCard.vue'
import SectionBand from '~/components/layout/SectionBand.vue'
import SectionHeader from '~/components/layout/SectionHeader.vue'
import PersonCard from '~/components/speakers/PersonCard.vue'
import type { BonusSlot, Person } from '~/data/editions/types'

const props = defineProps<{
  host?: Person
  /** null = slot without a speaker yet; an empty list shows four ? slots */
  speakers: (Person | null)[]
  bonus?: BonusSlot
}>()

const { t } = useI18n()

const speakerSlots = computed(() => props.speakers.length ? props.speakers : Array.from({ length: 4 }, () => null))

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
      :badge="t('sections.speakers.hostBadge')"
      :title="t('sections.speakers.hostTitle')"
    />
    <PersonCard
      v-if="host"
      class="mx-auto mb-16 max-w-160"
      v-bind="host"
    />
    <PlaceholderCard
      v-else
      class="mx-auto mb-16 max-w-160"
      :label="t('sections.speakers.hostSoon')"
    />
    <SectionHeader
      class="mb-11"
      icon="i-lucide-users"
      :badge="t('sections.speakers.badge')"
      :title="t('sections.speakers.title')"
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
              :label="t('sections.speakers.speakerSoon')"
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
          :label="t('sections.speakers.speakerSoon')"
        />
      </template>
    </div>
    <BonusSlotCard
      v-if="bonus"
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
