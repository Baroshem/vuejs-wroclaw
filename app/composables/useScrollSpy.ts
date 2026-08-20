/**
 * Highlights the nav link of the section crossing 40% of the viewport.
 * Scroll-position based (rAF-throttled) — an IntersectionObserver band
 * proved unreliable for tall sections.
 */
export function useScrollSpy(ids: readonly string[]) {
  const active = ref<string | null>(null)

  onMounted(() => {
    let queued = false

    const sync = () => {
      queued = false
      const line = window.innerHeight * 0.4
      let current: string | null = null
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      active.value = current
    }

    const onScroll = () => {
      if (queued) return
      queued = true
      requestAnimationFrame(sync)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    sync()

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    })
  })

  return { active }
}
