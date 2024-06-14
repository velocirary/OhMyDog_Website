import { z } from 'zod'

export const postUserSchema = z.object({
  status: z.string(),
  title: z.string(),
  sponsorName: z.string(),
  donatedValue: z.string(),
  donationStatus: z.string(),
})

export type PostUserDataTableSchema = z.infer<typeof postUserSchema>
