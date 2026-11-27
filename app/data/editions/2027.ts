import { createCfpSteps, list } from './shared'
import type { Edition, Translate } from './types'

// Next edition — mostly unannounced. Empty arrays render ? placeholder cards;
// fill these in once date, venue and line-up are confirmed.
export const createEdition2027 = (t: Translate): Edition => {
  const k = (path: string) => t(`editions.2027.${path}`)
  const soon = (key: string) => `${t(key)} · ${t('common.soon')}`

  return {
    slug: '2027',
    hero: {
      badge: k('hero.badge'),
      description: k('hero.description'),
      audience: list(t, 'editions.2027.hero.audience', 3),
      stats: [0, 1, 2].map(i => ({ num: k(`hero.stats.${i}.num`), label: k(`hero.stats.${i}.label`) })),
      ctas: [
        { label: soon('cta.submitTalk'), disabled: true },
        { label: soon('cta.reserve'), variant: 'ghost', disabled: true },
        { label: soon('cta.addToCalendar'), variant: 'ghost', disabled: true }
      ]
    },
    speakers: [],
    agenda: {
      talks: [],
      schedule: []
    },
    sponsors: {
      title: k('sponsors.title'),
      description: k('sponsors.description'),
      mediaTitle: k('sponsors.mediaTitle'),
      mediaDescription: '',
      main: [],
      media: []
    },
    cfp: {
      steps: createCfpSteps(t)
    },
    nav: {
      cta: { label: soon('cta.submitTalk'), disabled: true }
    },
    footer: {
      tagline: k('footer.tagline'),
      linkedin: false
    }
  }
}
