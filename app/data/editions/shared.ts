import type { Step, Translate } from './types'

const CFP_STEP_COUNT = 3

// The CFP process is the same for every edition.
export const createCfpSteps = (t: Translate): Step[] => Array.from({ length: CFP_STEP_COUNT }, (_, i) => ({
  title: t(`sections.cfp.steps.${i}.title`),
  desc: t(`sections.cfp.steps.${i}.desc`)
}))

/** Resolves a message array stored as `key.0`, `key.1`, … */
export const list = (t: Translate, key: string, length: number): string[] => Array.from({ length }, (_, i) => t(`${key}.${i}`))
