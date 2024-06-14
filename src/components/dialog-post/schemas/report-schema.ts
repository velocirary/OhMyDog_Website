import { z } from 'zod'

const reasonReportSchema = z
  .string({
    required_error: 'E necessário o motivo da denúncia.',
  })
  .min(1, { message: 'O campo Motivo da denuncia e obrigatório' })

const messageReportSchema = z
  .string({ required_error: 'E necessário ter uma mensagem.' })
  .min(1, { message: 'O campo Mensagem e obrigatório' })
  .min(10, {
    message: 'A mensagem deve conter pelo menos 10 caracteres',
  })

export const reporTabSchema = z.object({
  reason: reasonReportSchema,
  message: messageReportSchema,
})

export type ReportTabSchemaForm = z.infer<typeof reporTabSchema>
