<script setup lang="ts">
interface Speaker {
  name: string
  meta: string
  desc: string
  photo: string
}

// null = still-unconfirmed slot → dashed placeholder card
const speakerSlots: (Speaker | null)[] = [
  {
    name: 'Przemysław Spaczek',
    meta: 'Senior Vue Developer w QIAGEN',
    desc: 'Senior Frontend Developer z wieloletnim doświadczeniem w pracy z Vue.js, TypeScriptem i tworzeniu Design Systemów open-source. Pracował w projektach związanych z eCommerce oraz medtech. Jako aktywny członek społeczności angażuje się w dzielenie się wiedzą oraz promowanie najlepszych praktyk w branży.',
    photo: '/speakers/przemyslaw-spaczek.jpg'
  },
  null,
  null,
  null
]

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
      class="grid grid-cols-2 gap-3 md:gap-7 xl:grid-cols-4"
      :class="{ 'is-revealed': revealed }"
    >
      <template
        v-for="(speaker, i) in speakerSlots"
        :key="speaker?.name ?? `tbd-${i}`"
      >
        <!-- Confirmed speaker: ? card flips over to reveal the speaker card -->
        <div
          v-if="speaker"
          class="flip-card"
        >
          <div class="flip-inner">
            <div class="flip-face flex flex-col items-center justify-center gap-5 rounded-xl border border-dashed border-white/15 bg-panel px-6 py-10">
              <QuestionMarkBadge class="size-16 md:size-24" />
              <p class="m-0 text-center font-display text-[10px] uppercase tracking-[0.2em] text-slate-dim md:text-[11px]">
                Prelegent wkrótce
              </p>
            </div>
            <article class="flip-face flip-face--back flex flex-col rounded-xl border border-white/10 bg-panel p-8">
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
          class="flex flex-col items-center justify-center gap-5 rounded-xl border border-dashed border-white/15 bg-panel px-6 py-10"
        >
          <QuestionMarkBadge class="size-16 md:size-24" />
          <p class="m-0 text-center font-display text-[10px] uppercase tracking-[0.2em] text-slate-dim md:text-[11px]">
            Prelegent wkrótce
          </p>
        </div>
      </template>
    </div>
    <BonusSlotCard
      class="mt-3 md:mt-7"
      :layered="false"
      label="Piąty slot"
      title="Prelegent spoza ekosystemu Vue"
    />
  </SectionBand>
</template>

<style scoped>
.flip-card {
  display: grid;
  perspective: 1400px;
}

.flip-inner {
  display: grid;
  transform-style: preserve-3d;
  transition: transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
}

.flip-face {
  grid-area: 1 / 1;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
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
