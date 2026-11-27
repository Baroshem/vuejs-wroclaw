import { CFP_FORM_URL } from '~/utils/links'
import type { Edition } from './types'

// Next edition — mostly unannounced. Empty arrays render ? placeholder cards;
// fill these in once date, venue and line-up are confirmed.
export const edition2027: Edition = {
  slug: '2027',
  hero: {
    badge: 'Wkrótce • Wrocław',
    audience: ['Dla developerów Vue i Nuxt', 'Case study i networking', 'Po polsku'],
    stats: [
      { num: '2', label: 'Edycje' },
      { num: 'TBA', label: 'Speakerzy' },
      { num: 'TBA', label: 'Data' }
    ],
    ctas: [
      { label: 'Zgłoś prelekcję', href: CFP_FORM_URL, external: true },
      { label: 'Rezerwuj miejsce · wkrótce', variant: 'ghost', disabled: true },
      { label: 'Dodaj do kalendarza · wkrótce', variant: 'ghost', disabled: true }
    ]
  },
  speakers: [],
  agenda: {
    talks: [],
    schedule: []
  },
  sponsors: {
    main: [],
    media: []
  },
  cfp: {
    formUrl: CFP_FORM_URL,
    steps: []
  },
  nav: {
    cta: { label: 'Zgłoś prelekcję', href: CFP_FORM_URL, external: true }
  },
  footer: {
    tagline: 'Kolejna edycja',
    linkedin: false
  }
}
