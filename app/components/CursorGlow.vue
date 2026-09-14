<script setup lang="ts">
/** Ambient crimson glow that trails the cursor; pointer-fine devices only. */
const el = ref<HTMLElement | null>(null)
// Keep in sync with size-120 (480px) in the template.
const SIZE = 480
let targetX = 0
let targetY = 0
let x = 0
let y = 0
let raf = 0
let shown = false

function tick() {
  x += (targetX - x) * 0.14
  y += (targetY - y) * 0.14
  if (el.value) {
    el.value.style.transform = `translate3d(${x - SIZE / 2}px, ${y - SIZE / 2}px, 0)`
  }
  if (Math.abs(targetX - x) + Math.abs(targetY - y) < 0.5) {
    raf = 0
    return
  }
  raf = requestAnimationFrame(tick)
}

function onMove(e: PointerEvent) {
  targetX = e.clientX
  targetY = e.clientY
  if (!shown) {
    shown = true
    x = targetX
    y = targetY
    if (el.value) {
      el.value.style.opacity = '1'
    }
  }
  if (!raf) {
    raf = requestAnimationFrame(tick)
  }
}

function onLeave() {
  shown = false
  if (el.value) {
    el.value.style.opacity = '0'
  }
}

onMounted(() => {
  const finePointer = window.matchMedia('(pointer: fine)').matches
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!finePointer || reducedMotion) {
    return
  }
  window.addEventListener('pointermove', onMove, { passive: true })
  document.documentElement.addEventListener('pointerleave', onLeave)
})

onBeforeUnmount(() => {
  window.removeEventListener('pointermove', onMove)
  document.documentElement.removeEventListener('pointerleave', onLeave)
  if (raf) {
    cancelAnimationFrame(raf)
  }
})
</script>

<template>
  <div
    ref="el"
    aria-hidden="true"
    class="pointer-events-none fixed left-0 top-0 z-50 size-120 rounded-full opacity-0 mix-blend-plus-lighter will-change-transform transition-opacity duration-700"
    style="background: radial-gradient(circle, rgba(220, 20, 60, 0.12), transparent 70%); filter: blur(48px);"
  />
</template>
