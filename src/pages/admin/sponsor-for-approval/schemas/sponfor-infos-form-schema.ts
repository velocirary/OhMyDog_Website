import { z } from 'zod'

export const sponsorInfoSchema = z.object({
  status: z.string().min(1, { message: 'O campo Status e obrigatório' }),
  message: z
    .string({ required_error: 'Preencha o campo mensagem' })
    .min(1, { message: 'Mensagem é um campo obrigatório' }),
})

export type sponsorInfoFormSchema = z.infer<typeof sponsorInfoSchema>
