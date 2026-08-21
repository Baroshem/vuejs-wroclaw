<script setup lang="ts">
withDefaults(defineProps<{ id: string, deep?: boolean }>(), { deep: false })
</script>

<template>
  <section
    :id="id"
    class="px-5 py-16 md:px-16 md:py-24"
    :class="deep ? 'bg-bg-deep' : 'bg-bg'"
  >
    <div class="mx-auto max-w-280">
      <slot />
    </div>
  </section>
</template>
