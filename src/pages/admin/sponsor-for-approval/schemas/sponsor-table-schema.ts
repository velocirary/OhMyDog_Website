import { z } from 'zod'

export const sponsorSchema = z.object({
  sponsorID: z.string(),
  userID: z.string(),
  status: z.string(),
  cnpj: z.string(),
  corporateName: z.string(),
  stateRegistration: z.string(),
})

export type sponsorDataTableSchema = z.infer<typeof sponsorSchema>
