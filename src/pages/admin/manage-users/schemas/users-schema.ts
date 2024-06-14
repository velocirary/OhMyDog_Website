import { z } from 'zod'

export const userSchema = z.object({
  userID: z.string(),
  status: z.string(),
  name: z.string(),
  email: z.string(),
  cpf: z.string(),
})

export type userDataTableSchema = z.infer<typeof userSchema>
