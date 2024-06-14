import { z } from 'zod'

export const ReportsSchema = z.object({
  reportedTitle: z.string(),
  reportedDescription: z.string(),
  reportedAt: z.string(),
  postID: z.string(),
})

export type ReportsDataTableSchema = z.infer<typeof ReportsSchema>
