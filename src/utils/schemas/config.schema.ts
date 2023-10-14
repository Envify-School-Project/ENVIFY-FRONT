import { z } from 'zod';

export const ConfigSchema = z.object({
  id: z.number(),
  userId: z.number(),
  name: z.string(),
  description: z.string().nullable().optional(),
  operatingSystemId: z.number(),
  operatingSystemName: z.string(),
  created_at: z.string().optional(),
  scripts: z
    .array(
      z.object({
        comment: z.string(),
        script: z.string(),
      })
    )
    .optional(),
  packages: z
    .array(
      z.object({
        name: z.string(),
        version: z.array(z.string()),
        alias: z.string(),
        logo: z.string().optional(),
      })
    )
    .optional(),
});

export const ConfigArraySchema = z.array(ConfigSchema);
