<script setup lang="ts">
const steps = [
  {
    title: 'Zgłoś temat',
    text: 'Wyślij opis swojej prezentacji, kontekst i wnioski, które mogą pomóc innym deweloperom.'
  },
  {
    title: 'Wybierz format',
    text: 'Lightning talk, case study lub głębszy workshop na temat Vue, DX, performance i architektury.'
  },
  {
    title: 'Dołącz do programu',
    text: 'Po akceptacji otrzymasz szczegóły techniczne, harmonogram i wsparcie organizacyjne.'
  }
]
</script>

<template>
  <section
    id="cfp"
    class="scroll-mt-24 py-20 md:py-24"
  >
    <UContainer>
      <div class="rounded-[2rem] border border-white/10 bg-gradient-to-br from-primary/10 via-slate-900 to-slate-950 p-6 md:p-10">
        <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div class="space-y-6">
            <UBadge
              color="primary"
              variant="soft"
              class="border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
            >
              CFP
            </UBadge>

            <h2 class="text-3xl font-black tracking-tighter text-white md:text-5xl">
              Zgłoś swój temat
            </h2>

            <p class="text-base leading-relaxed text-slate-300">
              Szukamy praktycznych historii, pomysłów i doświadczeń, które realnie wspierają ludzi tworzących aplikacje w Vue.js.
            </p>

            <UButton
              label="Aplikuj przez Google Forms"
              to="https://forms.gle/7z8xx8L2F5JKxv3M6"
              target="_blank"
              color="primary"
              size="lg"
              icon="i-lucide-arrow-up-right"
              class="transition-transform duration-200 hover:-translate-y-0.5"
            />
          </div>

          <div class="grid gap-4">
            <div
              v-for="step in steps"
              :key="step.title"
              class="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-primary/40 hover:bg-primary/5"
            >
              <div class="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 font-bold text-primary">
                {{ steps.indexOf(step) + 1 }}
              </div>
              <h3 class="text-xl font-bold text-white">
                {{ step.title }}
              </h3>
              <p class="mt-2 text-sm leading-relaxed text-slate-300">
                {{ step.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
