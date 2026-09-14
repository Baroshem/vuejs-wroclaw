<script setup lang="ts">
import { CFP_FORM_URL } from '~/utils/links'

const steps = [
  { title: 'Zgłoś temat', desc: 'Wyślij opis swojej prezentacji, kontekst i wnioski, które mogą pomóc innym deweloperom.' },
  { title: 'Wybierz format', desc: 'Lightning talk, case study lub głębszy workshop na temat Vue, DX, performance i architektury.' },
  { title: 'Dołącz do programu', desc: 'Po akceptacji otrzymasz szczegóły techniczne, harmonogram i wsparcie organizacyjne.' }
]
</script>

<template>
  <SectionBand id="cfp">
    <div class="relative rounded-xl border border-white/10 bg-linear-to-br from-accent/10 to-panel to-55% p-7 md:p-12">
      <UiBadge class="mb-5">
        <UIcon
          name="i-lucide-mic"
          class="size-5"
        />
        Call for Papers
      </UiBadge>
      <h2 class="mb-3.5 font-display text-[28px] font-bold md:text-[40px]">
        Zgłoś swój temat
      </h2>
      <p class="mb-8 max-w-120 leading-[1.7] text-slate">
        Szukamy praktycznych historii, pomysłów i doświadczeń, które realnie wspierają ludzi
        tworzących aplikacje w Vue.js.
      </p>
      <UiButton
        :href="CFP_FORM_URL"
        external
        class="mb-11"
      >
        Aplikuj przez Google Forms
      </UiButton>

      <div class="grid md:grid-cols-3">
        <div
          v-for="(s, i) in steps"
          :key="s.title"
          class="relative z-1 px-0 py-4 md:px-4 md:py-0"
          :class="i < steps.length - 1
            ? 'md:after:absolute md:after:top-5.5 md:after:left-[calc(50%+29px)] md:after:right-[calc(-50%+29px)] md:after:h-px md:after:bg-white/15 md:after:content-[\'\']'
            : ''"
        >
          <D20Badge
            :value="i + 1"
            class="mx-auto mb-3.5"
          />
          <p class="mb-1.5 font-display text-[15px] font-bold text-white">
            {{ s.title }}
          </p>
          <p class="m-0 text-xs leading-relaxed text-slate">
            {{ s.desc }}
          </p>
        </div>
      </div>
    </div>
  </SectionBand>
</template>
