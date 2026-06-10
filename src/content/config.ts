import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    category: z.string(),
    readTime: z.string(),
    image: z.string().optional(),
    cover: z.string().optional()
  })
});

const brinquedosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.string().optional(),
    icon: z.string(),
    image: z.string().optional(),
    popular: z.boolean().default(false),
    minAge: z.string().optional(),
    tags: z.array(z.string()).default([]),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string()
    })).optional()
  })
});

export const collections = {
  blog: blogCollection,
  brinquedos: brinquedosCollection
};
