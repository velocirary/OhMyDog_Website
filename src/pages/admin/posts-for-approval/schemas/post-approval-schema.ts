import { z } from 'zod'

export const postApprovalSchema = z.object({
  status: z.string(),
  title: z.string(),
  description: z.string(),
  donationGoal: z.string(),
  approvalAt: z.string(),
  postID: z.string(),
})

export type postApprovalDataTableSchema = z.infer<typeof postApprovalSchema>
