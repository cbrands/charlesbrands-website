import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const projectCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    slug: z.string(),
    tags: z.array(z.string()),
    cover: image(),
    publishDate: z.date(),
    description: z.string(),
    codeLink: z.string().optional(),
    demoLink: z.string().optional(),
  }),
});

export const collections = {
  projects: projectCollection,
};