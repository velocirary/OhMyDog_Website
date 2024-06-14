import { z } from 'zod'

const statusSchema = z
  .string({
    required_error: 'E necessário o motivo da denúncia.',
  })
  .min(1, { message: 'O campo Motivo da denuncia e obrigatório' })

const messageSchema = z
  .string({ required_error: 'E necessário ter uma mensagem.' })
  .min(1, { message: 'O campo Mensagem e obrigatório' })
  .min(10, {
    message: 'A mensagem deve conter pelo menos 10 caracteres',
  })

export const reportSchema = z.object({
  status: statusSchema,
  message: messageSchema,
})

export type ReportFormSchema = z.infer<typeof reportSchema>
