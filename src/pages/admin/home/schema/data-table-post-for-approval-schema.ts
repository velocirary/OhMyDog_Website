import { z } from 'zod'

export const PostForApprovalDataTable = z.object({
  status: z.string(),
  title: z.string(),
  donationType: z.string(),
  donationGoal: z.string(),
  publishedAt: z.string(),
})

export type PostForApprovalTableSchema = z.infer<
  typeof PostForApprovalDataTable
>
