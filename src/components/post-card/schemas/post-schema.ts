import { z } from 'zod'

const donationTypeSchema = z
  .string({ required_error: 'E necessário ter um tipo de doação' })
  .min(1, { message: 'O campo Tipo da doação e obrigatório.' })

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

const MessageType = z
  .string({ required_error: 'E necessário ter uma mensagem de doação' })
  .min(1, { message: 'O campo Mensagem da doação e obrigatório.' })

export const postTabSchema = z.object({
  donationType: donationTypeSchema,
  value: valueSchema,
  proofPix: proofPixSchema,
  message: MessageType,
})

export type PostTabSchemaForm = z.infer<typeof postTabSchema>
