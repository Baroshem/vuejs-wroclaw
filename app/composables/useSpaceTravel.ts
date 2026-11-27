/**
 * Shared state of the persistent starfield (components/SpaceBackground.vue).
 * Transitions "move the camera" through it: a travel is a displacement along (dx, dy) over dur ms,
 * eased in/out; when it ends the displacement is kept (base), so the sky never snaps back.
 */
export interface SpaceTravel {
  t0: number
  dur: number
  dx: number
  dy: number
  dist: number
}

const state = {
  base: { x: 0, y: 0 },
  travel: null as SpaceTravel | null
}

export function useSpaceTravel() {
  return state
}
