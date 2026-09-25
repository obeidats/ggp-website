/**
 * Language setup and shared helpers.
 * Every visible string lives either here (interface text) or in src/data (content),
 * always as a { en, ar } pair so both languages are edited side by side.
 */

export const languages = { en: 'English', ar: 'العربية' } as const;
export type Lang = keyof typeof languages;
export const langs = Object.keys(languages) as Lang[];
export const defaultLang: Lang = 'en';

/** A string translated into every supported language. */
export type L = Record<Lang, string>;

export const isLang = (value: unknown): value is Lang =>
  typeof value === 'string' && value in languages;

export const dirOf = (lang: Lang) => (lang === 'ar' ? 'rtl' : 'ltr');

/** Pick the right translation (plain strings pass through untouched). */
export const tr = (value: L | string, lang: Lang) => (typeof value === 'string' ? value : value[lang]);

/** Static paths for every `[lang]` route. */
export const langPaths = () => langs.map((lang) => ({ params: { lang } }));

/** Build an internal link: href('ar', 'services') -> /ar/services/ */
export function href(lang: Lang, path = '') {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean ? `/${lang}/${clean}/` : `/${lang}/`;
}

/** Same page, other language: /en/about/ -> /ar/about/ */
export function swapLang(pathname: string, target: Lang) {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length && isLang(parts[0])) parts.shift();
  return href(target, parts.join('/'));
}

export const otherLang = (lang: Lang): Lang => (lang === 'en' ? 'ar' : 'en');

/** Format numbers with Western digits in both languages (standard for business figures in Oman). */
export const formatNumber = (n: number, opts: Intl.NumberFormatOptions = {}) =>
  new Intl.NumberFormat('en-US', opts).format(n);

/** Interface text (navigation, buttons, labels). */
export const ui = {
  skip: { en: 'Skip to content', ar: 'تخطَّ إلى المحتوى' },
  'nav.home': { en: 'Home', ar: 'الرئيسية' },
  'nav.services': { en: 'Services', ar: 'خدماتنا' },
  'nav.projects': { en: 'Projects', ar: 'مشاريعنا' },
  'nav.about': { en: 'About Us', ar: 'من نحن' },
  'nav.contact': { en: 'Contact', ar: 'تواصل معنا' },
  'nav.menu': { en: 'Menu', ar: 'القائمة' },
  'nav.close': { en: 'Close menu', ar: 'إغلاق القائمة' },
  'nav.main': { en: 'Main navigation', ar: 'التنقل الرئيسي' },
  'lang.switch': { en: 'العربية', ar: 'English' },
  'lang.switchLabel': { en: 'View this page in Arabic', ar: 'عرض هذه الصفحة بالإنجليزية' },

  'cta.services': { en: 'Explore our services', ar: 'استكشف خدماتنا' },
  'cta.contact': { en: 'Get in touch', ar: 'تواصل معنا' },
  'cta.projects': { en: 'View our projects', ar: 'استعرض مشاريعنا' },
  'cta.about': { en: 'More about GGP', ar: 'المزيد عن الشركة' },
  'cta.learnMore': { en: 'Learn more', ar: 'اعرف المزيد' },
  'cta.call': { en: 'Call us', ar: 'اتصل بنا' },

  'footer.quickLinks': { en: 'Quick links', ar: 'روابط سريعة' },
  'footer.services': { en: 'Services', ar: 'الخدمات' },
  'footer.contact': { en: 'Contact', ar: 'التواصل' },
  'footer.rights': { en: 'All rights reserved.', ar: 'جميع الحقوق محفوظة.' },
  'footer.credits': { en: 'Photo credits', ar: 'حقوق الصور' },

  'label.phone': { en: 'Phone', ar: 'الهاتف' },
  'label.email': { en: 'Email', ar: 'البريد الإلكتروني' },
  'label.address': { en: 'Address', ar: 'العنوان' },
  'label.website': { en: 'Website', ar: 'الموقع الإلكتروني' },
  'label.omr': { en: 'OMR', ar: 'ريال عماني' },
} satisfies Record<string, L>;

export type UiKey = keyof typeof ui;

/** Returns a translator bound to one language: const t = useT(lang); t('nav.home') */
export const useT = (lang: Lang) => (key: UiKey) => ui[key][lang];
