import { CFP_FORM_URL, RESERVE_URL } from '~/utils/links'
import type { Edition } from './types'

export const edition2026: Edition = {
  slug: '2026',
  hero: {
    badge: '23 listopada • Wrocław',
    audience: ['Dla developerów Vue i Nuxt', 'Pure Vue — zero AI', 'Case study i networking', 'Po polsku'],
    stats: [
      { num: '4', label: 'Speakerów' },
      { num: '1', label: 'Edycja' },
      { num: '0 zł', label: 'Wstęp' }
    ],
    ctas: [
      { label: 'Zarezerwuj miejsce', href: RESERVE_URL, external: true },
      { label: 'Zgłoś prelekcję', href: '#cfp', variant: 'ghost' },
      { label: 'Dodaj do kalendarza', href: '/event.ics', variant: 'ghost', download: true }
    ]
  },
  host: {
    name: 'Jakub Andrzejewski',
    meta: 'Senior Engineer @ Storyblok',
    desc: 'Poprowadzi cały wieczór.',
    photo: '/speakers/jakub-andrzejewski.jpg'
  },
  speakers: [
    {
      name: 'Przemysław Spaczek',
      meta: 'Senior Vue Developer w QIAGEN',
      desc: 'Senior Frontend Developer z wieloletnim doświadczeniem w pracy z Vue.js, TypeScriptem i tworzeniu Design Systemów open-source. Pracował w projektach związanych z eCommerce oraz medtech. Jako aktywny członek społeczności angażuje się w dzielenie się wiedzą oraz promowanie najlepszych praktyk w branży.',
      photo: '/speakers/przemyslaw-spaczek.jpg'
    },
    {
      name: 'Paweł Niedużak',
      meta: 'Vue Developer',
      desc: 'Product Developer i współorganizator Vue.js Wrocław. Pokaże, że aplikacje, które otwierają się bez internetu i działają tak szybko jak natywne, da się zbudować w Vue — bez osobnego zespołu mobilnego i bez czekania na akceptację sklepu.',
      photo: '/speakers/pawel-nieduzak.jpg'
    },
    {
      name: 'Filip Rakowski',
      meta: 'Co-founder & CTO @ Alokai',
      desc: 'Współtwórca Vue Storefront i współzałożyciel Alokai, gdzie zajmuje się architekturą dużych platform e-commerce. Opowie o tym, jak wykorzystać Domain Driven Design w aplikacjach Vue.',
      photo: '/speakers/filip-rakowski.jpg'
    },
    {
      name: 'Sebastian Wrzalek',
      meta: 'Senior Product Engineer @ Lette',
      desc: 'Senior Product Engineer w Lette, Vue.js Advocate i autor artykułów o Vue na DEV. Pokaże, jak zbudować aplikację na mikrofrontendach w Vue 3, połączyć niezależne aplikacje za pomocą Vite i Single-SPA, jak wygląda ich komunikacja i routing oraz na jakie problemy można się natknąć po drodze.',
      photo: '/speakers/sebastian-wrzalek.jpg'
    }
  ],
  speakersBonus: {
    label: 'Prelegentka bonusowa',
    title: 'Michalina Filimoniak',
    meta: 'Senior Talent Solutions Partner @ Monterail',
    sub: 'Prowadzi dział Staff Augmentation w Monterail, rekrutuje od ponad 7 lat i jest doradczynią zawodową oraz coachem kariery. Opowie, jak szukać sensu w świecie miliona możliwości.',
    photo: '/speakers/michalina-filimoniak.jpg'
  },
  agenda: {
    talks: [
      { title: 'Sztuka tworzenia UI\'a z Vue.js', speaker: 'Przemysław Spaczek' },
      { title: 'Vue offline-first: aplikacja, której nie ma w App Store', speaker: 'Paweł Niedużak' },
      { title: 'Domain Driven Design w Vue', speaker: 'Filip Rakowski' },
      { title: 'Microfrontendy w Vue 3 – od teorii do praktyki', speaker: 'Sebastian Wrzalek' }
    ],
    bonus: {
      label: 'Slot bonusowy',
      title: '„Odpowiedz sobie na jedno ważne pytanie…”',
      meta: 'O tym, jak szukać sensu w świecie miliona możliwości.',
      sub: 'Michalina Filimoniak'
    },
    schedule: [
      '18:00 Rozpoczęcie',
      '19:00–19:10 Break',
      '20:00–20:05 Zakończenie',
      '20:10–22:00 Networking'
    ],
    externalUrl: 'https://www.linkedin.com/events/7287746621629587456/'
  },
  sponsors: {
    // Only Storyblok funds free entry; Supabase and GDG are media partners.
    main: [{ name: 'Storyblok', role: 'Główny sponsor', logo: '/sponsors/storyblok.svg' }],
    media: [
      { name: 'Supabase', role: 'Partner medialny', logo: '/sponsors/supabase.svg' },
      { name: 'GDG Wrocław', role: 'Partner medialny', logo: '/sponsors/gdg-wroclaw.png' }
    ]
  },
  venue: {
    name: 'Klub Wędrówki',
    address: 'Podwale 37/38, 50-040 Wrocław',
    facts: [
      { k: 'Miejsce', v: 'Klimatyczny pub eventowy', sub: 'spotkania i prelekcje w sercu Wrocławia' },
      { k: 'Dojazd', v: 'Ścisłe centrum — Podwale', sub: 'ok. 10 minut pieszo od Rynku' },
      { k: 'Parking', v: 'Strefa płatnego parkowania', sub: 'w okolicy; wygodnie też komunikacją miejską' },
      { k: 'Po meetupie', v: 'Afterparty na miejscu', sub: 'rozmowy i networking do ok. 22:00' }
    ],
    navigateUrl: 'https://www.google.com/maps/search/?api=1&query=Klub+W%C4%99dr%C3%B3wki+Podwale+37%2F38+Wroc%C5%82aw',
    mapEmbedUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=17.0249%2C51.0992%2C17.0349%2C51.1092&layer=mapnik&marker=51.10419%2C17.02990',
    mapTitle: 'Mapa okolicy Klubu Wędrówki',
    coords: '51.1042 N • 17.0299 E'
  },
  cfp: {
    formUrl: CFP_FORM_URL,
    steps: [
      { title: 'Zgłoś temat', desc: 'Wyślij opis swojej prezentacji, kontekst i wnioski, które mogą pomóc innym deweloperom.' },
      { title: 'Wybierz format', desc: 'Lightning talk, case study lub głębszy workshop na temat Vue, DX, performance i architektury.' },
      { title: 'Dołącz do programu', desc: 'Po akceptacji otrzymasz szczegóły techniczne, harmonogram i wsparcie organizacyjne.' }
    ]
  },
  nav: {
    cta: { label: 'Rezerwuj miejsce', href: RESERVE_URL, external: true }
  },
  footer: {
    tagline: '23 listopada, Wrocław',
    linkedin: true
  }
}
