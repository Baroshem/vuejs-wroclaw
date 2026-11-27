import { CFP_FORM_URL, RESERVE_URL } from '~/utils/links'
import { galleryPhotos } from '../gallery'
import { createCfpSteps, list } from './shared'
import type { Edition, Translate } from './types'

// Names, photos, logos and links live here; every visible sentence comes from i18n/locales
// under `editions.2026.*`.
export const createEdition2026 = (t: Translate, locale = 'pl'): Edition => {
  const k = (path: string) => t(`editions.2026.${path}`)
  const person = (id: string, name: string, photo: string) => ({
    name,
    photo,
    meta: k(`speakers.${id}.meta`),
    desc: k(`speakers.${id}.desc`)
  })
  const talk = (id: string, speaker: string) => ({ title: k(`talks.${id}`), speaker })

  return {
    slug: '2026',
    hero: {
      badge: k('hero.badge'),
      description: k('hero.description'),
      audience: list(t, 'editions.2026.hero.audience', 4),
      stats: [0, 1, 2].map(i => ({ num: k(`hero.stats.${i}.num`), label: k(`hero.stats.${i}.label`) })),
      ctas: [
        { label: t('cta.reserveHero'), href: RESERVE_URL, external: true },
        { label: t('cta.submitTalk'), href: '#cfp', variant: 'ghost' },
        { label: t('cta.addToCalendar'), href: locale === 'pl' ? '/event.ics' : `/event.${locale}.ics`, variant: 'ghost', download: true }
      ]
    },
    host: {
      name: 'Jakub Andrzejewski',
      meta: k('host.meta'),
      desc: k('host.desc'),
      photo: '/speakers/jakub-andrzejewski.jpg'
    },
    speakers: [
      person('spaczek', 'Przemysław Spaczek', '/speakers/przemyslaw-spaczek.jpg'),
      person('nieduzak', 'Paweł Niedużak', '/speakers/pawel-nieduzak.jpg'),
      person('rakowski', 'Filip Rakowski', '/speakers/filip-rakowski.jpg'),
      person('wrzalek', 'Sebastian Wrzalek', '/speakers/sebastian-wrzalek.jpg')
    ],
    speakersBonus: {
      label: k('bonusSpeaker.label'),
      title: 'Michalina Filimoniak',
      meta: k('bonusSpeaker.meta'),
      sub: k('bonusSpeaker.sub'),
      photo: '/speakers/michalina-filimoniak.jpg'
    },
    agenda: {
      talks: [
        talk('spaczek', 'Przemysław Spaczek'),
        talk('nieduzak', 'Paweł Niedużak'),
        talk('rakowski', 'Filip Rakowski'),
        talk('wrzalek', 'Sebastian Wrzalek')
      ],
      bonus: {
        label: k('bonusSlot.label'),
        title: k('bonusSlot.title'),
        meta: k('bonusSlot.meta'),
        sub: 'Michalina Filimoniak'
      },
      schedule: list(t, 'editions.2026.schedule', 4),
      externalUrl: 'https://www.linkedin.com/events/7287746621629587456/'
    },
    sponsors: {
      title: k('sponsors.title'),
      description: k('sponsors.description'),
      mediaTitle: k('sponsors.mediaTitle'),
      mediaDescription: k('sponsors.mediaDescription'),
      // Only Storyblok funds free entry; Supabase and GDG are media partners.
      main: [{ name: 'Storyblok', role: k('sponsors.mainRole'), logo: '/sponsors/storyblok.svg' }],
      media: [
        { name: 'Supabase', role: k('sponsors.mediaRole'), logo: '/sponsors/supabase.svg' },
        { name: 'GDG Wrocław', role: k('sponsors.mediaRole'), logo: '/sponsors/gdg-wroclaw.png' }
      ]
    },
    venue: {
      name: 'Klub Wędrówki',
      address: 'Podwale 37/38, 50-040 Wrocław',
      facts: [0, 1, 2, 3].map(i => ({
        k: k(`venue.facts.${i}.k`),
        v: k(`venue.facts.${i}.v`),
        sub: k(`venue.facts.${i}.sub`)
      })),
      navigateUrl: 'https://www.google.com/maps/search/?api=1&query=Klub+W%C4%99dr%C3%B3wki+Podwale+37%2F38+Wroc%C5%82aw',
      mapEmbedUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=17.0249%2C51.0992%2C17.0349%2C51.1092&layer=mapnik&marker=51.10419%2C17.02990',
      mapTitle: k('venue.mapTitle'),
      coords: '51.1042 N • 17.0299 E'
    },
    gallery: galleryPhotos,
    cfp: {
      formUrl: CFP_FORM_URL,
      steps: createCfpSteps(t)
    },
    nav: {
      cta: { label: t('cta.reserve'), href: RESERVE_URL, external: true }
    },
    footer: {
      tagline: k('footer.tagline'),
      linkedin: true
    }
  }
}
