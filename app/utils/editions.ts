// Top-level pages shared by the desktop nav and the mobile tab bar.
// `name` is the route base name (without the locale suffix); `label` is a key in the locale files.
export const SITE_PAGES = [
  { name: 'index', label: 'pages.start', to: '/', icon: 'i-lucide-orbit' },
  { name: '2026', label: 'pages.edition1', to: '/2026', icon: 'i-lucide-calendar-check' },
  { name: '2027', label: 'pages.edition2', to: '/2027', icon: 'i-lucide-calendar-clock' }
] as const
