// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// Define the allowed tag values using an enum
// These should be unique enough so you can use them as CSS classes
export enum Tag {
  LOGIC = "logic",
  PRODUCING = "producing",
  SONGWRITING = "songwriting",
  GUITAR = "guitar",
}

// Define schemas for each collection we'd like to validate.
// We could define more content collections below if we'd like
const blog = defineCollection({
  type: "content",
  schema: z.object({
    fileName: z.string(),
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    duration: z.number(),
    draft: z.boolean().optional(),
    tags: z.array(z.nativeEnum(Tag)).optional(),
    image: z.string().optional().default("/whisper-music.webp"), // default music image for og
    resources: z
      .array(
        z.object({
          title: z.string(),
          url: z.string(),
          description: z.string().optional(),
        })
      )
      .optional(),
  }),
});

const music = defineCollection({
  type: "data",
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date(),
    link: z.string().url(),
    image: image(),
    imageAlt: z.string(),
    featured: z.boolean().default(false),
  }),
});

// Export a single `collections` object to register our collection(s)
// This key should match your collection directory name in "src/content"
export const collections = {
  blog: blog,
  music: music,
};
