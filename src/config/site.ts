import type { L } from '@/i18n/ui';

/** Company facts used across the site. Change them here and every page updates. */
export const site = {
  name: { en: 'Global Gulf Pulse', ar: 'نبض الخليج العالمية' } satisfies L,
  shortName: 'GGP',
  tagline: { en: 'Connecting Opportunity Across the Gulf', ar: 'نربط الفرص عبر الخليج' } satisfies L,
  url: 'https://ggp-oman.com',
  domain: 'ggp-oman.com',
  founded: 2014,

  phone: '+968 97280130',
  phoneHref: 'tel:+96897280130',
  email: 'info@ggp-oman.com',

  address: {
    en: ['PO Box 767, PC 132', 'Al Khoudh, Seeb', 'Muscat, Sultanate of Oman'],
    ar: ['ص.ب 767، الرمز البريدي 132', 'الخوض، السيب', 'مسقط، سلطنة عُمان'],
  },
  location: { en: 'Muscat · Sultanate of Oman', ar: 'مسقط · سلطنة عُمان' } satisfies L,

  mapEmbed: 'https://www.google.com/maps?q=Al+Khoudh,+Seeb,+Muscat,+Oman&z=13&output=embed',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=Al+Khoudh,+Seeb,+Muscat,+Oman',

  /** Contact-form endpoint (see .env.example). Empty = mailto fallback. */
  formEndpoint: (import.meta.env.PUBLIC_FORM_ENDPOINT as string | undefined) ?? '',
} as const;

/** Main navigation, in display order. */
export const nav = [
  { key: 'nav.home', path: '' },
  { key: 'nav.services', path: 'services' },
  { key: 'nav.projects', path: 'projects' },
  { key: 'nav.about', path: 'about' },
  { key: 'nav.contact', path: 'contact' },
] as const;
