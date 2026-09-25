import { getCollection, type CollectionEntry } from 'astro:content';
import type { L } from '@/i18n/ui';

export type Project = CollectionEntry<'projects'>;

export const statusLabel = {
  completed: { en: 'Completed', ar: 'منجز' },
  ongoing: { en: 'Ongoing', ar: 'قيد التنفيذ' },
} satisfies Record<Project['data']['status'], L>;

/** All individual projects, featured first, then by `order`, then by English title. */
export async function getProjects() {
  const all = await getCollection('projects');
  return all.sort(
    (a, b) =>
      Number(b.data.featured) - Number(a.data.featured) ||
      a.data.order - b.data.order ||
      a.data.title.en.localeCompare(b.data.title.en),
  );
}
