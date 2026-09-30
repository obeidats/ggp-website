import type { ImageMetadata } from 'astro';
import type { L } from '@/i18n/ui';

/**
 * "Our Team" section on the About page.
 *
 * While this list is empty the page shows placeholder cards with a "Coming soon" badge.
 * To add a person: put a square-ish photo in src/assets/team/, import it here, and add an entry:
 *
 *   import ahmed from '@/assets/team/ahmed.jpg';
 *   { name: { en: 'Ahmed Al Balushi', ar: 'أحمد البلوشي' }, role: { en: 'General Manager', ar: 'المدير العام' }, photo: ahmed },
 *
 * `photo` is optional; without it the card shows the person icon.
 */
export type TeamMember = { name: L; role: L; photo?: ImageMetadata };

export const team: TeamMember[] = [];
