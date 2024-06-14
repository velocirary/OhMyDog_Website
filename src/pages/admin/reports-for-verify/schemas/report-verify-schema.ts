import { z } from 'zod'

export const reportVerifySchema = z.object({
  title: z.string(),
  description: z.string(),
  reportedAt: z.string(),
  userID: z.number(),
  postID: z.number(),
})

export type reportVerifyDataTableSchema = z.infer<typeof reportVerifySchema>
