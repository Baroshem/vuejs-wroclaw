<template>
  <SectionBand
    id="speakers"
    deep
    wide
  >
    <!-- NOTE (placeholder reveal, implement when speakers are confirmed):
         These dashed cards are temporary. For each confirmed speaker, swap the
         placeholder content for the real speaker card (original layout lives at
         commit 07881cf) keeping the same card footprint. The swap must be a 3D
         flip animation: the ? placeholder card flips over to reveal the speaker
         card, triggered when this section first enters the viewport (so visitors
         notice newly added speakers). Constraints:
         - client-side only; the page is prerendered, cards must render fully
           without JS (flip is an enhancement, not a gate)
         - honor prefers-reduced-motion: show the speaker card directly, no flip
         - the BONUS strip below follows the same reveal pattern -->
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
    <div class="grid grid-cols-2 gap-3 md:gap-7 xl:grid-cols-4">
      <div
        v-for="i in 4"
        :key="i"
        class="flex flex-col items-center justify-center gap-5 rounded-xl border border-dashed border-white/15 bg-panel px-6 py-10"
      >
        <QuestionMarkBadge class="size-16 md:size-24" />
        <p class="m-0 text-center font-display text-[10px] uppercase tracking-[0.2em] text-slate-dim md:text-[11px]">
          Prelegent wkrótce
        </p>
      </div>
    </div>
    <BonusSlotCard
      class="mt-3 md:mt-7"
      :layered="false"
      label="Piąty slot"
      title="Prelegent spoza ekosystemu Vue"
      sub="Specjalna prelekcja bonusowa — szczegóły ogłosimy wkrótce."
    />
  </SectionBand>
</template>
