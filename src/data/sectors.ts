import type { L } from '@/i18n/ui';
import type { PhotoKey } from './photos';

/** "Sectors We Support" — the industries GGP serves. */
export const supportedSectors: { icon: string; title: L }[] = [
  { icon: 'Building2', title: { en: 'Commercial Development', ar: 'التطوير التجاري' } },
  { icon: 'Cpu', title: { en: 'Technology', ar: 'التكنولوجيا' } },
  { icon: 'RadioTower', title: { en: 'Telecommunications', ar: 'الاتصالات' } },
  { icon: 'Fuel', title: { en: 'Oil & Gas', ar: 'النفط والغاز' } },
  { icon: 'Construction', title: { en: 'Construction', ar: 'الإنشاءات' } },
  { icon: 'Factory', title: { en: 'Industrial Services', ar: 'الخدمات الصناعية' } },
  { icon: 'Zap', title: { en: 'Energy & Utilities', ar: 'الطاقة والمرافق' } },
  { icon: 'Landmark', title: { en: 'Infrastructure', ar: 'البنية التحتية' } },
];

/**
 * Portfolio sectors: projects and contracts under GGP management.
 * Totals on every page are calculated from these rows, so only edit the rows.
 * The `id` is also what individual project files use in their `sector` field.
 */
export const portfolioSectors = [
  {
    id: 'civil-infrastructure',
    icon: 'Construction',
    photo: 'buildingConstruction',
    title: { en: 'Civil & Infrastructure', ar: 'الأعمال المدنية والبنية التحتية' },
    projects: 3, completed: 1, ongoing: 2, valueOMR: 2_026_097,
  },
  {
    id: 'electrical-power',
    icon: 'UtilityPole',
    photo: 'transmissionTower',
    title: { en: 'Electrical & Power Infrastructure', ar: 'البنية التحتية للكهرباء والطاقة' },
    projects: 13, completed: 7, ongoing: 6, valueOMR: 9_752_365,
  },
  {
    id: 'electrical-power-telecom',
    icon: 'Zap',
    photo: 'powerLinesSunset',
    title: { en: 'Electrical, Power & Telecom', ar: 'الكهرباء والطاقة والاتصالات' },
    projects: 1, completed: 0, ongoing: 1, valueOMR: 2_480_000,
  },
  {
    id: 'roads-civil-infrastructure',
    icon: 'Route',
    photo: 'craneSunset',
    title: { en: 'Roads, Civil & Infrastructure', ar: 'الطرق والأعمال المدنية والبنية التحتية' },
    projects: 1, completed: 0, ongoing: 1, valueOMR: 670_000,
  },
  {
    id: 'telecom-network',
    icon: 'RadioTower',
    photo: 'telecomAntennas',
    title: { en: 'Telecom & Network Infrastructure', ar: 'البنية التحتية للاتصالات والشبكات' },
    projects: 5, completed: 1, ongoing: 4, valueOMR: 2_135_000,
  },
  {
    id: 'utilities-infrastructure',
    icon: 'Factory',
    photo: 'industrialPlant',
    title: { en: 'Utilities & Infrastructure', ar: 'المرافق والبنية التحتية' },
    projects: 6, completed: 1, ongoing: 5, valueOMR: 5_217_505,
  },
  {
    id: 'water-utility-networks',
    icon: 'Droplets',
    photo: 'pipeline',
    title: { en: 'Water & Utility Networks', ar: 'شبكات المياه والمرافق' },
    projects: 2, completed: 1, ongoing: 1, valueOMR: 1_430_257,
  },
] as const satisfies readonly {
  id: string; icon: string; photo: PhotoKey; title: L;
  projects: number; completed: number; ongoing: number; valueOMR: number;
}[];

export type PortfolioSectorId = (typeof portfolioSectors)[number]['id'];
export const portfolioSectorIds = portfolioSectors.map((s) => s.id) as [PortfolioSectorId, ...PortfolioSectorId[]];

export const portfolioTotals = portfolioSectors.reduce(
  (t, s) => ({
    projects: t.projects + s.projects,
    completed: t.completed + s.completed,
    ongoing: t.ongoing + s.ongoing,
    valueOMR: t.valueOMR + s.valueOMR,
  }),
  { projects: 0, completed: 0, ongoing: 0, valueOMR: 0 },
);

export const getPortfolioSector = (id: string) => portfolioSectors.find((s) => s.id === id);
