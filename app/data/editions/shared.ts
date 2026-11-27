import type { Step } from './types'

// The CFP process is the same for every edition.
export const cfpSteps: Step[] = [
  { title: 'Zgłoś temat', desc: 'Wyślij opis swojej prezentacji, kontekst i wnioski, które mogą pomóc innym deweloperom.' },
  { title: 'Wybierz format', desc: 'Lightning talk, case study lub głębszy workshop na temat Vue, DX, performance i architektury.' },
  { title: 'Dołącz do programu', desc: 'Po akceptacji otrzymasz szczegóły techniczne, harmonogram i wsparcie organizacyjne.' }
]
