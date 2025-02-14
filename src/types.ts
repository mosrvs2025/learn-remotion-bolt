import { z } from 'zod';

export const TimelineSchema = z.object({
  title: z.string(),
  description: z.string(),
  events: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      year: z.string(),
      image: z.string().url().optional(),
    })
  ),
  voiceover: z.string(),
  musicUrl: z.string().url(),
});

export type Timeline = z.infer<typeof TimelineSchema>;