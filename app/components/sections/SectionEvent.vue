<script setup lang="ts">
const nodes = [
  { time: '18:30', title: 'Powitanie i networking', desc: 'Rozgrzewka, pierwsze rozmowy i integracja społeczności.' },
  { time: '19:00', title: 'Prezentacje', desc: 'Cztery krótkie, praktyczne wystąpienia ekspertów.' },
  { time: '20:15', title: 'Q&A i dyskusja', desc: 'Pytania od społeczności oraz live conversation.' },
  { time: '20:45', title: 'Afterparty', desc: 'Kontynuacja rozmów i nawiązywanie nowych relacji.' }
]
</script>

<template>
  <SectionBand id="agenda">
    <div class="max-w-[680px]">
      <div class="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <UiBadge class="mb-4.5">
            Event &bull; Quest Log
          </UiBadge>
          <h2 class="font-display text-[26px] font-bold md:text-[34px]">
            Co czeka na uczestników?
          </h2>
        </div>
        <UiButton
          variant="ghost"
          href="https://www.linkedin.com/events/7287746621629587456/"
          external
        >
          Zobacz na LinkedIn
        </UiButton>
      </div>

      <ol class="relative m-0 list-none p-0 md:pl-13">
        <li
          v-for="(n, i) in nodes"
          :key="n.time"
          class="relative pb-9 last:pb-0 md:before:absolute md:before:-left-[29px] md:before:top-12 md:before:bottom-1 md:before:w-px md:before:bg-[repeating-linear-gradient(to_bottom,rgba(201,162,39,0.35)_0_6px,transparent_6px_12px)] md:before:content-[''] md:last:before:hidden"
        >
          <D20Badge
            :value="i + 1"
            class="mb-2 md:absolute md:-left-13 md:top-3 md:mb-0"
          />
          <div class="border-l-2 border-crimson bg-panel px-4.5 py-3.5">
            <p class="font-display text-[11px] tracking-[0.1em] text-slate-dim">
              {{ n.time }}
            </p>
            <p class="mt-1 mb-1.5 font-display text-base font-bold">
              {{ n.title }}
            </p>
            <p class="m-0 text-xs leading-relaxed text-slate">
              {{ n.desc }}
            </p>
          </div>
        </li>
      </ol>
    </div>
  </SectionBand>
</template>
