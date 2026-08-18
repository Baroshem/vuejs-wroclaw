<script setup lang="ts">
const primaryActions = [
  {
    label: 'Zarezerwuj miejsce',
    to: 'https://www.linkedin.com/events/7287746621629587456/',
    target: '_blank',
    color: 'primary' as const,
    size: 'lg' as const
  },
  {
    label: 'CFP',
    to: 'https://forms.gle/7z8xx8L2F5JKxv3M6',
    target: '_blank',
    color: 'neutral' as const,
    variant: 'outline' as const,
    size: 'lg' as const
  }
]

const stats = [
  { value: '4', label: 'speakerów' },
  { value: '1', label: 'wieczór' },
  { value: '150+', label: 'uczestników' }
]
</script>

<template>
  <section
    id="event"
    class="relative overflow-hidden border-b border-white/10 bg-[#0F172B]"
  >
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(220,20,60,0.2),_transparent_42%)]" />

    <UContainer class="relative py-16 md:py-24">
      <div class="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div class="space-y-8">
          <UBadge
            class="border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
            color="primary"
            variant="soft"
          >
            18 października • Wrocław
          </UBadge>

          <div class="space-y-5">
            <h1 class="text-5xl font-black tracking-[-0.06em] text-white md:text-6xl xl:text-7xl">
              Vue.js<br>
              <span class="bg-gradient-to-r from-primary-400 to-red-200 bg-clip-text text-transparent">Wrocław</span>
            </h1>

            <p class="max-w-xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Lokalny meetup dla frontend developerów, architektów aplikacji i osób, które chcą budować lepszy web z Vue.js.
              Wieczór pełen praktycznych case study, świeżych pomysłów i networkingu.
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-4">
            <UButton
              v-for="action in primaryActions"
              :key="action.label"
              :label="action.label"
              :to="action.to"
              :target="action.target"
              :color="action.color"
              :variant="action.variant"
              :size="action.size"
            />
          </div>

          <div class="grid max-w-xl grid-cols-3 gap-4 pt-2">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition hover:border-primary/50 hover:bg-primary/5"
            >
              <div class="text-2xl font-black text-white">
                {{ stat.value }}
              </div>
              <div class="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">
                {{ stat.label }}
              </div>
            </div>
          </div>
        </div>

        <div class="relative">
          <!-- <div class="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary-500/25 via-primary-500/5 to-transparent blur-2xl" /> -->
          <img
            src="/vuejs-wroclaw.svg"
            alt="Vue.js Wrocław event illustration"
            class="h-full w-full object-cover"
          >
        </div>
      </div>
    </UContainer>
  </section>
</template>
