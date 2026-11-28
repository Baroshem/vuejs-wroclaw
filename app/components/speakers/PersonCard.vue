<script setup lang="ts">
// Photo + name + role, with a divider and description below. The two blocks are
// direct children of the root so a parent grid can subgrid them (see speakers).
defineProps<{
  name: string
  meta?: string
  desc: string
  photo: string
}>()
</script>

<template>
  <article class="rounded-xl border border-white/10 bg-panel p-8">
    <div class="mb-5 flex min-h-20 items-center gap-5">
      <div class="size-20 shrink-0 rounded-full border border-white/15 p-0.5">
        <img
          :src="photo"
          :alt="name"
          class="size-full rounded-full object-cover"
        >
      </div>
      <div class="min-w-0">
        <p class="break-words font-display text-xl font-bold">
          {{ name }}
        </p>
        <p
          v-if="meta"
          class="mt-1 text-sm leading-relaxed tracking-[0.03em] text-slate"
        >
          {{ meta }}
        </p>
      </div>
    </div>
    <p class="m-0 border-t border-white/8 pt-4 text-[15px] leading-[1.75] text-slate">
      {{ desc }}
    </p>
  </article>
</template>
