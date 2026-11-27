<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const audience = computed(() => [0, 1, 2].map(i => t(`home.audience.${i}`)))
</script>

<template>
  <section
    data-id="hero"
    class="relative isolate grid flex-1 items-center gap-10 overflow-x-clip px-5 pt-10 pb-14 md:px-16 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-0"
  >
    <div data-copy>
      <UiBadge class="mb-7">
        <UIcon
          name="i-lucide-sparkle"
          class="size-5"
        />
        {{ t('home.badge') }}
      </UiBadge>

      <h1 class="mb-6 font-display text-[44px] leading-none font-bold tracking-tight md:text-[min(76px,9vh)]">
        <span class="block text-white">Vue.js</span>
        <span class="block bg-linear-to-r from-accent to-accent-light bg-clip-text text-transparent">Wrocław</span>
      </h1>

      <p class="mb-6 max-w-130 leading-relaxed text-slate">
        {{ t('home.description') }}
      </p>

      <div class="mb-6.5 flex flex-wrap gap-2.5">
        <span
          v-for="a in audience"
          :key="a"
          class="inline-flex items-center gap-2 border border-white/12 px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-slate"
        >
          <UIcon
            name="i-lucide-dot"
            class="size-6 text-accent"
          />
          {{ a }}
        </span>
      </div>

      <div class="mb-12 flex flex-wrap gap-4">
        <UiButton
          href="/2027"
          class="max-md:flex-1 max-md:text-center"
        >
          {{ t('pages.edition2') }}
        </UiButton>
        <UiButton
          variant="ghost"
          href="/2026"
          class="max-md:flex-1 max-md:text-center"
        >
          {{ t('pages.edition1') }}
        </UiButton>
      </div>
    </div>

    <HeroSigil class="max-lg:order-first">
      <template #ring1>
        <div class="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <NuxtLink
            :to="localePath('/2026')"
            data-moon
            :aria-label="t('home.edition1Moon')"
            class="block animate-[spin_26s_linear_infinite_reverse] rounded-full px-3 py-1 font-display text-xs font-bold whitespace-nowrap text-white transition-[filter] hover:brightness-110 bg-[#dc143c] shadow-[0_0_14px_#dc143c]"
          >
            {{ t('pages.edition1') }}
          </NuxtLink>
        </div>
        <div class="absolute -bottom-3.5 left-1/2 -translate-x-1/2">
          <NuxtLink
            :to="localePath('/2027')"
            data-moon
            :aria-label="t('home.edition2Moon')"
            class="block animate-[spin_26s_linear_infinite_reverse] rounded-full px-3 py-1 font-display text-xs font-bold whitespace-nowrap text-white transition-[filter] hover:brightness-110 bg-[#00dc82] shadow-[0_0_14px_#00dc82]"
          >
            {{ t('pages.edition2') }}
          </NuxtLink>
        </div>
      </template>
      <template #ring2>
        <span class="sr-only" />
      </template>
      <template #ring3>
        <span class="sr-only" />
      </template>
    </HeroSigil>
  </section>
</template>
