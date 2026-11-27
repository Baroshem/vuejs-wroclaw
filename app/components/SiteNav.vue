<script setup lang="ts">
import { SITE_PAGES as pages } from '~/utils/editions'
import type { CtaLinkData } from './CtaLink.vue'

const props = defineProps<{
  active: string | null
  links: { id: string, label: string }[]
  cta: CtaLinkData | null
}>()
const NuxtLink = resolveComponent('NuxtLink')
const route = useRoute()
const { t } = useI18n()
const localePath = useLocalePath()
const baseName = useRouteBaseName()
const isCurrent = (name: string) => baseName(route) === name

// Mobile menu: section links + CTA. Closes on navigation, Escape and viewport growth.
const open = ref(false)
const hasMenu = computed(() => props.links.length > 0 || !!props.cta)
watch(() => route.fullPath, () => {
  open.value = false
})
let mq: MediaQueryList | null = null
const onKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    open.value = false
  }
}
const onMq = () => {
  if (mq?.matches) {
    open.value = false
  }
}
onMounted(() => {
  mq = window.matchMedia('(min-width: 1440px)')
  window.addEventListener('keydown', onKey)
  mq.addEventListener('change', onMq)
})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  mq?.removeEventListener('change', onMq)
})
</script>

<template>
  <nav
    data-site-nav
    :aria-label="t('a11y.mainNav')"
    class="sticky top-0 z-20 flex items-center justify-between border-b border-white/7 bg-[rgba(6,8,11,0.9)] px-5 py-3.5 backdrop-blur-md md:px-16 md:py-5"
  >
    <NuxtLink
      :to="localePath('/')"
      class="flex items-center gap-3 font-display text-[13px] font-bold md:text-base"
    >
      <img
        src="/vuejs-wroclaw.svg"
        alt=""
        class="block w-6.5"
      >
      Vue.js Wrocław
    </NuxtLink>
    <span class="mr-auto ml-8 hidden gap-6.5 border-l border-white/15 pl-8 text-xs uppercase tracking-[0.14em] md:flex">
      <NuxtLink
        v-for="p in pages"
        :key="p.to"
        :to="localePath(p.to)"
        class="pb-0.75 transition-colors"
        :class="isCurrent(p.name) ? 'text-accent-light' : 'text-slate hover:text-accent-light'"
        :aria-current="isCurrent(p.name) ? 'page' : undefined"
      >
        {{ t(p.label) }}
      </NuxtLink>
    </span>
    <span class="flex items-center gap-3 md:gap-5.5">
      <span class="hidden gap-6.5 text-xs uppercase tracking-[0.14em] min-[1440px]:flex">
        <a
          v-for="l in links"
          :key="l.id"
          :href="`#${l.id}`"
          class="relative pb-0.75 transition-colors"
          :class="active === l.id
            ? 'text-accent-light after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:bg-accent after:content-[\'\']'
            : 'text-slate hover:text-accent-light'"
          :aria-current="active === l.id ? 'true' : undefined"
        >
          {{ l.label }}
        </a>
      </span>
      <LocaleSwitcher />
      <CtaLink
        v-if="cta"
        :cta="cta"
        class="hidden whitespace-nowrap rounded-md bg-accent px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-primary-600 hover:text-white min-[1440px]:inline-flex min-[1440px]:items-center min-[1440px]:justify-center"
      />
      <button
        v-if="hasMenu"
        type="button"
        class="-mr-2 grid size-11 cursor-pointer place-items-center rounded-md text-white min-[1440px]:hidden"
        :aria-expanded="open"
        aria-controls="mobile-menu"
        :aria-label="open ? t('a11y.closeMenu') : t('a11y.openMenu')"
        @click="open = !open"
      >
        <UIcon
          :name="open ? 'i-lucide-x' : 'i-lucide-menu'"
          class="size-6"
        />
      </button>
    </span>
    <div
      v-if="open && hasMenu"
      id="mobile-menu"
      class="absolute inset-x-0 top-full flex max-h-[calc(100dvh-4rem)] flex-col gap-1 overflow-y-auto border-b border-white/10 bg-[rgba(6,8,11,0.97)] px-5 py-4 backdrop-blur-lg min-[1440px]:hidden"
    >
      <a
        v-for="l in links"
        :key="l.id"
        :href="`#${l.id}`"
        class="rounded-md px-3 py-3 text-sm uppercase tracking-[0.14em]"
        :class="active === l.id ? 'bg-white/5 text-accent-light' : 'text-slate'"
        :aria-current="active === l.id ? 'true' : undefined"
        @click="open = false"
      >
        {{ l.label }}
      </a>
      <CtaLink
        v-if="cta"
        :cta="cta"
        class="mt-3 flex min-h-12 items-center justify-center rounded-md bg-accent text-sm font-bold text-white"
        @click="open = false"
      />
    </div>
  </nav>
</template>
