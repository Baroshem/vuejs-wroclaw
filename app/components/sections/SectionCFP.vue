<script setup lang="ts">
import { CFP_FORM_URL } from '~/utils/links'

const steps = [
  { title: 'Zgłoś temat', desc: 'Wyślij opis swojej prezentacji, kontekst i wnioski, które mogą pomóc innym deweloperom.', locked: false },
  { title: 'Wybierz format', desc: 'Lightning talk, case study lub głębszy workshop na temat Vue, DX, performance i architektury.', locked: true },
  { title: 'Dołącz do programu', desc: 'Po akceptacji otrzymasz szczegóły techniczne, harmonogram i wsparcie organizacyjne.', locked: true }
]
</script>

<template>
  <SectionBand id="cfp">
    <div class="bracket-frame relative bg-linear-to-br from-crimson/10 to-panel to-55% p-7 md:p-12">
      <span class="bl" /><span class="br" />

      <UiBadge class="mb-5">
        <UIcon
          name="i-lucide-swords"
          class="size-5"
        />
        Rekrutacja do drużyny
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
            ? 'md:after:absolute md:after:top-5.5 md:after:left-[calc(50%+29px)] md:after:right-[calc(-50%+29px)] md:after:h-px md:after:bg-[repeating-linear-gradient(to_right,rgba(201,162,39,0.35)_0_8px,transparent_8px_16px)] md:after:content-[\'\']'
            : ''"
        >
          <D20Badge
            :value="i + 1"
            :locked="s.locked"
            class="mx-auto mb-3.5"
          />
          <p
            class="mb-1.5 font-display text-[15px] font-bold"
            :class="s.locked ? 'text-slate-dim' : 'text-white'"
          >
            {{ s.title }}
          </p>
          <p
            class="m-0 text-xs leading-relaxed"
            :class="s.locked ? 'text-slate-dim' : 'text-slate'"
          >
            {{ s.desc }}
          </p>
        </div>
      </div>
    </div>
  </SectionBand>
</template>
