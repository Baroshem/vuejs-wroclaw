export function useScrollFx() {
  if (import.meta.server) {
    return
  }

  let raf = 0

  const update = () => {
    raf = 0
    document.documentElement.style.setProperty('--scroll-y', String(window.scrollY))
  }

  const onScroll = () => {
    if (!raf) {
      raf = requestAnimationFrame(update)
    }
  }

  onMounted(() => {
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
    if (raf) {
      cancelAnimationFrame(raf)
    }
  })
}
