import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { portfolioSectorIds } from './data/sectors';

/** A text field written in both languages. */
const bilingual = z.object({ en: z.string().min(1), ar: z.string().min(1) });

/**
 * Individual projects: one JSON file per project in src/content/projects/.
 * Files starting with "_" are ignored (see _template.json for every field).
 */
const projects = defineCollection({
  loader: glob({ pattern: ['**/*.json', '!**/_*.json'], base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: bilingual,
      sector: z.enum(portfolioSectorIds),
      status: z.enum(['completed', 'ongoing']),
      summary: bilingual,
      client: bilingual.optional(),
      location: bilingual.optional(),
      startYear: z.number().int().optional(),
      endYear: z.number().int().optional(),
      valueOMR: z.number().nonnegative().optional(),
      scope: z.array(bilingual).default([]),
      cover: image().optional(),
      gallery: z.array(image()).default([]),
      featured: z.boolean().default(false),
      order: z.number().default(100),
    }),
});

export const collections = { projects };
