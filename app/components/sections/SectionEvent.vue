<script setup lang="ts">
const talks = [
  { n: 1, range: '18:10–18:30', title: 'Vue UI Libraries Best Practices', by: 'Przemek Spaczek' },
  { n: 2, range: '18:35–18:55', title: 'Core Vue Vitals — Because Fast Apps Are More Than Just Fast Code', by: 'Jakub Andrzejewski' },
  { n: 3, range: '19:10–19:30', title: 'Temat X', by: 'Paweł Niedużak' },
  { n: 4, range: '19:35–19:55', title: 'Vue in Ecommerce', by: 'Filip Rakowski' }
]

const chips = [
  '18:00 Rozpoczęcie',
  '19:00–19:10 Break',
  '20:00–20:05 Zakończenie',
  '20:10–22:00 Networking'
]
</script>

<template>
  <SectionBand
    id="agenda"
    wide
  >
    <div class="mb-10 flex flex-wrap items-end justify-between gap-4">
      <div>
        <UiBadge class="mb-4.5">
          <UIcon
            name="i-lucide-calendar-clock"
            class="size-5"
          />
          Agenda
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

    <!-- md+: poziomy stepper -->
    <div class="hidden md:block">
      <div class="relative">
        <div class="absolute left-0 right-0 top-[26px] h-px bg-[repeating-linear-gradient(to_right,rgba(148,163,184,0.35)_0_8px,transparent_8px_16px)]" />
        <div class="grid grid-cols-4 gap-6">
          <div
            v-for="t in talks"
            :key="t.n"
            class="relative"
          >
            <D20Badge
              :value="t.n"
              class="relative z-1 mx-auto"
            />
            <p class="mt-4 text-center font-display text-[11px] tracking-[0.15em] text-accent-light">
              {{ t.range }}
            </p>
            <p class="mx-auto mt-2 mb-2 max-w-60 text-center font-display text-base font-bold">
              {{ t.title }}
            </p>
            <p class="m-0 text-center text-xs text-slate">
              {{ t.by }}
            </p>
          </div>
        </div>
      </div>
      <div class="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-5">
        <span
          v-for="c in chips"
          :key="c"
          class="font-display text-[11px] tracking-[0.12em] text-slate"
        >{{ c }}</span>
      </div>
    </div>

    <!-- mobile: pionowa wersja steppera -->
    <div class="md:hidden">
      <div class="relative">
        <div class="absolute bottom-6 left-5.75 top-6 w-px bg-[repeating-linear-gradient(to_bottom,rgba(148,163,184,0.35)_0_6px,transparent_6px_12px)]" />
        <div class="flex flex-col gap-5">
          <div
            v-for="t in talks"
            :key="t.n"
            class="relative z-1 grid grid-cols-[46px_1fr] items-center gap-4"
          >
            <D20Badge :value="t.n" />
            <div class="rounded-r-lg border border-white/10 border-l-2 border-l-accent bg-panel px-4 py-3">
              <p class="font-display text-[11px] tracking-[0.15em] text-accent-light">
                {{ t.range }}
              </p>
              <p class="mt-1 mb-1 font-display text-sm font-bold">
                {{ t.title }}
              </p>
              <p class="m-0 text-xs text-slate">
                {{ t.by }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 pt-4">
        <span
          v-for="c in chips"
          :key="c"
          class="font-display text-[11px] tracking-[0.12em] text-slate"
        >{{ c }}</span>
      </div>
    </div>
  </SectionBand>
</template>
