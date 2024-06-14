import { z } from 'zod'

export const DonationsDataTable = z.object({
  status: z.string(),
  message: z.string(),
  donationValue: z.string(),
  donatedAt: z.string(),
})

export type DonationsTableSchema = z.infer<typeof DonationsDataTable>
