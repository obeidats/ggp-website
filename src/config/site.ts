import type { L } from '@/i18n/ui';

/** Company facts used across the site. Change them here and every page updates. */
export const site = {
  name: { en: 'Global Gulf Pulse', ar: 'نبض الخليج العالمية' } satisfies L,
  shortName: 'GGP',
  tagline: { en: 'Connecting Opportunity Across the Gulf', ar: 'نربط الفرص عبر الخليج' } satisfies L,
  url: 'https://ggp-oman.com',
  domain: 'ggp-oman.com',
  founded: 2012,
  cr: '1133144',
  mailingAddress: '767 / 132',

  phone: '+968 97280130',
  phoneHref: 'tel:+96897280130',
  whatsappHref: 'https://wa.me/96897280130',
  email: 'info@ggp-oman.com',

  address: {
    en: ['PO Box 767, PC 132', 'Al Khoudh, Seeb', 'Muscat, Sultanate of Oman'],
    ar: ['ص.ب 767، الرمز البريدي 132', 'الخوض، السيب', 'مسقط، سلطنة عُمان'],
  },
  location: { en: 'Muscat · Sultanate of Oman', ar: 'مسقط · سلطنة عُمان' } satisfies L,
  hours: { en: '8:00 AM – 4:00 PM', ar: '8:00 صباحاً – 4:00 مساءً' } satisfies L,

  /** Office pin (from the company's shared Google Maps link). */
  geo: { lat: 23.6208375, lng: 58.2120156 },
  mapEmbed: 'https://www.google.com/maps?q=23.6208375,58.2120156&z=16&output=embed',
  mapLink: 'https://maps.app.goo.gl/J4gTxcC4TXq8GLSu8',

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
