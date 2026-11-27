<script setup lang="ts">
import type { GalleryPhoto } from '~/data/gallery'
import { PHOTOGRAPHER_URL } from '~/utils/links'

const props = defineProps<{ photos: GalleryPhoto[] }>()
const { t } = useI18n()
const alt = (p: GalleryPhoto) => t(`gallery.alts.${p.id}`)

// Two featured tiles (see data/gallery.ts) span 2x2 on desktop; with 16 singles that fills six full rows of four.
const isWide = (i: number) => i === 0 || i === 9

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))

const current = ref<number | null>(null)
const dialog = ref<HTMLDialogElement | null>(null)

function open(i: number) {
  current.value = i
  dialog.value?.showModal()
}
function close() {
  dialog.value?.close()
}
function step(d: number) {
  if (current.value === null) return
  current.value = (current.value + d + props.photos.length) % props.photos.length
}
function onKey(e: KeyboardEvent) {
  if (current.value === null) return
  if (e.key === 'ArrowRight') step(1)
  else if (e.key === 'ArrowLeft') step(-1)
}
</script>

<template>
  <SectionBand
    id="gallery"
    wide
  >
    <UiBadge class="mb-4.5">
      <UIcon
        name="i-lucide-camera"
        class="size-5"
      />
      {{ t('sections.gallery.badge') }}
    </UiBadge>
    <div class="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div>
        <h2 class="mb-3 font-display text-[26px] font-bold md:text-[34px]">
          {{ t('sections.gallery.title') }}
        </h2>
        <p class="m-0 max-w-160 text-[15px] leading-[1.75] text-slate">
          {{ t('sections.gallery.description') }}
        </p>
      </div>
      <a
        :href="PHOTOGRAPHER_URL"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex shrink-0 items-center gap-2.5 self-start rounded-full border border-white/10 bg-panel px-4 py-2.5 text-[13px] text-slate transition-colors hover:border-accent/50 hover:text-white md:self-auto"
      >
        <UIcon
          name="i-lucide-camera"
          class="size-4 text-accent-light"
        />
        <span>
          {{ t('sections.gallery.photoBy') }} <strong class="font-bold text-white">Daniel Kasperczyk</strong>
        </span>
        <UIcon
          name="i-simple-icons-instagram"
          class="size-4"
        />
        <span class="sr-only">{{ t('sections.gallery.instagram') }}</span>
      </a>
    </div>

    <ul class="m-0 grid list-none grid-flow-dense auto-rows-[140px] grid-cols-2 gap-2 p-0 sm:auto-rows-[180px] md:auto-rows-[220px] md:grid-cols-4 md:gap-3 lg:auto-rows-[260px]">
      <li
        v-for="(p, i) in photos"
        :key="p.src"
        :class="isWide(i) ? 'col-span-2 md:row-span-2' : ''"
      >
        <button
          type="button"
          class="group relative block size-full cursor-zoom-in overflow-hidden rounded-xl border border-white/10 bg-panel p-0"
          :aria-label="t('sections.gallery.zoom', { n: i + 1, total: photos.length })"
          @click="() => open(i)"
        >
          <img
            :src="p.src"
            :alt="alt(p)"
            :width="p.width"
            :height="p.height"
            :style="{ backgroundImage: `url(${p.blur})` }"
            loading="lazy"
            decoding="async"
            class="size-full bg-cover bg-center object-cover transition-transform duration-500 group-hover:scale-105"
          >
          <span class="pointer-events-none absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        </button>
      </li>
    </ul>

    <p class="mb-0 mt-6 text-xs text-slate-dim">
      {{ t('sections.gallery.allPhotosBy') }}
      <a
        :href="PHOTOGRAPHER_URL"
        target="_blank"
        rel="noopener noreferrer"
        class="underline underline-offset-4 hover:text-accent-light"
      >@daniel.kasperczyk</a>
    </p>

    <dialog
      ref="dialog"
      class="m-0 size-full max-h-none max-w-none bg-black/95 p-0 text-white backdrop:bg-black"
      :aria-label="t('sections.gallery.preview')"
      @close="current = null"
    >
      <div
        v-if="current !== null"
        class="flex size-full items-center justify-center p-4 md:p-12"
      >
        <img
          :src="photos[current]!.src"
          :alt="alt(photos[current]!)"
          :width="photos[current]!.width"
          :height="photos[current]!.height"
          class="max-h-full max-w-full rounded-lg object-contain"
        >
        <button
          type="button"
          class="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-white/10 hover:bg-white/20"
          :aria-label="t('sections.gallery.close')"
          @click="close"
        >
          <UIcon
            name="i-lucide-x"
            class="size-5"
          />
        </button>
        <button
          type="button"
          class="absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 hover:bg-white/20"
          :aria-label="t('sections.gallery.previous')"
          @click="step(-1)"
        >
          <UIcon
            name="i-lucide-chevron-left"
            class="size-6"
          />
        </button>
        <button
          type="button"
          class="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 hover:bg-white/20"
          :aria-label="t('sections.gallery.next')"
          @click="step(1)"
        >
          <UIcon
            name="i-lucide-chevron-right"
            class="size-6"
          />
        </button>
        <p class="absolute inset-x-0 bottom-4 m-0 text-center text-xs text-slate">
          {{ t('sections.gallery.caption', { n: current + 1, total: photos.length }) }}
        </p>
      </div>
    </dialog>
  </SectionBand>
</template>
