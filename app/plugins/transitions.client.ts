/**
 * Context for the "planet change" page transition (styles: assets/css/transitions.css).
 *  - data-vt-move on <html>   zoom-in | zoom-out (home <-> edition), fly-fwd | fly-back (edition <-> edition)
 *  - --moon-x / --moon-y      position of the clicked year pill ("moon") relative to the sigil centre
 *  - starfield camera move    started when the transition animations start (see useSpaceTravel), so the
 *                             background, the planet and the copy share one timeline
 */
const EDITIONS = ['/2026', '/2027']

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter()
  const space = useSpaceTravel()
  const root = document.documentElement
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
  const moonVec = { x: 0, y: 1 }

  // Any link that leads to a place a moon (year pill) points to — the pill itself, the hero buttons,
  // the nav / mobile CTA — launches the transition from that moon.
  document.addEventListener('click', (event) => {
    const link = (event.target as Element | null)?.closest('a[href]')
    const sigil = document.querySelector('[data-sigil]')
    if (!link || !sigil) {
      return
    }
    const href = link.getAttribute('href')
    const moon = link.hasAttribute('data-moon') ? link : document.querySelector(`[data-moon][href="${href}"]`)
    if (!moon) {
      // no moon on this page (e.g. /2026 hero buttons) — fall back to a default direction
      moonVec.x = 0
      moonVec.y = 1
      root.style.setProperty('--moon-x', '0px')
      root.style.setProperty('--moon-y', `${(s0 => s0 ? s0.getBoundingClientRect().height / 2 : 0)(sigil)}px`)
      return
    }
    const m = moon.getBoundingClientRect()
    const s = sigil.getBoundingClientRect()
    moonVec.x = m.left + m.width / 2 - (s.left + s.width / 2)
    moonVec.y = m.top + m.height / 2 - (s.top + s.height / 2)
    root.style.setProperty('--moon-x', `${moonVec.x}px`)
    root.style.setProperty('--moon-y', `${moonVec.y}px`)
  }, true)

  router.beforeEach((to, from) => {
    if (to.path === from.path) {
      return
    }
    const toEdition = EDITIONS.indexOf(to.path)
    const fromEdition = EDITIONS.indexOf(from.path)
    let move = 'none'
    if (fromEdition === -1 && toEdition !== -1) {
      move = 'zoom-in'
    } else if (fromEdition !== -1 && toEdition === -1) {
      move = 'zoom-out'
    } else if (fromEdition !== -1 && toEdition !== -1) {
      move = toEdition > fromEdition ? 'fly-fwd' : 'fly-back'
    }
    root.dataset.vtMove = move
  })

  // The transition's animations start when `ready` resolves — start the camera move on the same frame.
  nuxtApp.hook('page:view-transition:start', (transition: ViewTransition) => {
    if (reduced.matches) {
      return
    }
    const move = root.dataset.vtMove
    transition.ready.then(() => {
      const len = Math.hypot(moonVec.x, moonVec.y) || 1
      const toward = { x: moonVec.x / len, y: moonVec.y / len }
      // camera flies towards the moon / next planet, so the stars stream the opposite way
      const dirs: Record<string, [number, number, number]> = {
        'fly-fwd': [-1, 0, 3.4],
        'fly-back': [1, 0, 3.4],
        'zoom-in': [-toward.x, -toward.y, 2.8],
        'zoom-out': [toward.x, toward.y, 2.8]
      }
      const d = move ? dirs[move] : undefined
      if (d) {
        space.travel = { t0: performance.now(), dur: 1300, dx: d[0], dy: d[1], dist: d[2] }
      }
    }).catch(() => {})
  })
})
