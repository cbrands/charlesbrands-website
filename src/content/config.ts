import { z, defineCollection } from 'astro:content';

const projectCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    tags: z.array(z.string()),
    // image: z.object({ alt: z.string(), src: z.string() }),
    cover: image().refine((img) => img.width >= 1000, {
      message: "Cover image must be at least 1000 pixels wide!",
    }),
    publishDate: z.date().or(z.string()),
    description: z.string(),
    codeLink: z.string().optional(),
    demoLink: z.string().optional(),
  }),
});

export const collections = {
  projects: projectCollection,
};