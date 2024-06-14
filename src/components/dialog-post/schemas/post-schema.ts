import { z } from 'zod'

const valueSchema = z
  .string({ required_error: 'E necessário ter um valor' })
  .min(1, { message: 'O campo Valor e obrigatório.' })
  .regex(/^(?:\d{1,3}(?:\.\d{3})*|\d+),\d{2}$/, {
    message: 'Formato de valor invalido, por favor revise. ex: (1.000,00)',
  })

const proofPixSchema = z
  .instanceof(FileList)
  .refine((file) => file?.length === 1, {
    message: 'O campo comprovante e obrigatório',
  })

export const postTabSchema = z.object({
  value: valueSchema,
  proofPix: proofPixSchema,
})

export type PostTabSchemaForm = z.infer<typeof postTabSchema>
