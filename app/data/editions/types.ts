// Shape of one meetup edition. Presentational components never import edition data
// themselves — the edition page passes slices of this object down as props.
// Empty / missing data means "not announced yet" → the section renders ? placeholder cards.

import type { GalleryPhoto } from '../gallery'

export interface Person {
  name: string
  meta: string
  desc: string
  photo: string
}

export interface Talk {
  title: string
  speaker: string
}

export interface Sponsor {
  name: string
  role: string
  logo?: string
}

export interface Fact {
  k: string
  v: string
  sub: string
}

export interface Step {
  title: string
  desc: string
}

export interface Stat {
  num: string
  label: string
}

export interface Cta {
  label: string
  href?: string
  variant?: 'primary' | 'ghost'
  external?: boolean
  download?: boolean
  disabled?: boolean
}

export interface BonusSlot {
  label: string
  title: string
  meta?: string
  sub?: string
  photo?: string
}

export interface Venue {
  name: string
  address: string
  facts: Fact[]
  navigateUrl: string
  mapEmbedUrl: string
  mapTitle: string
  coords: string
}

export interface Edition {
  slug: '2026' | '2027'
  hero: {
    badge: string
    description: string
    audience: string[]
    stats: Stat[]
    ctas: Cta[]
  }
  host?: Person
  /** null = confirmed slot without a speaker yet → ? card */
  speakers: (Person | null)[]
  speakersBonus?: BonusSlot
  agenda: {
    /** null = topic not announced → ? card */
    talks: (Talk | null)[]
    bonus?: BonusSlot
    schedule: string[]
    externalUrl?: string
  }
  sponsors: {
    title: string
    description: string
    mediaTitle: string
    mediaDescription: string
    main: Sponsor[]
    media: Sponsor[]
  }
  venue?: Venue
  /** Omit to hide the gallery section (no photos for this edition yet). */
  gallery?: GalleryPhoto[]
  cfp: {
    formUrl?: string
    steps: Step[]
  }
  nav: {
    cta?: { label: string, href?: string, external?: boolean, disabled?: boolean }
  }
  footer: {
    tagline: string
    linkedin: boolean
  }
}
