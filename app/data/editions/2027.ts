import { cfpSteps } from './shared'
import type { Edition } from './types'

// Next edition — mostly unannounced. Empty arrays render ? placeholder cards;
// fill these in once date, venue and line-up are confirmed.
export const edition2027: Edition = {
  slug: '2027',
  hero: {
    badge: 'Wkrótce • Wrocław',
    description: 'Lokalny meetup dla frontend developerów, architektów aplikacji i osób, które chcą budować lepszy web z Vue.js. Kolejna edycja już w przygotowaniu — szczegóły wkrótce.',
    audience: ['Dla developerów Vue i Nuxt', 'Case study i networking', 'Po polsku'],
    stats: [
      { num: '2', label: 'Edycje' },
      { num: 'TBA', label: 'Speakerzy' },
      { num: 'TBA', label: 'Data' }
    ],
    ctas: [
      { label: 'Zgłoś prelekcję · wkrótce', disabled: true },
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
    title: 'Sponsorzy',
    description: 'Chcesz wesprzeć kolejną edycję? Odezwij się do organizatorów.',
    mediaTitle: 'Partnerzy medialni',
    mediaDescription: '',
    main: [],
    media: []
  },
  cfp: {
    steps: cfpSteps
  },
  nav: {
    cta: { label: 'Zgłoś prelekcję · wkrótce', disabled: true }
  },
  footer: {
    tagline: 'Kolejna edycja',
    linkedin: false
  }
}
