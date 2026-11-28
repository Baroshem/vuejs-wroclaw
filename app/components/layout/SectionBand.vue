<script setup lang="ts">
withDefaults(defineProps<{ id: string, deep?: boolean, wide?: boolean }>(), { deep: false, wide: false })
</script>

<template>
  <section
    :id="id"
    :data-id="id"
    class="px-5 py-16 md:px-16 md:py-24"
    :class="deep ? 'bg-bg-deep' : 'bg-bg'"
  >
    <div
      class="mx-auto"
      :class="wide ? 'max-w-360' : 'max-w-280'"
    >
      <slot />
    </div>
  </section>
</template>
