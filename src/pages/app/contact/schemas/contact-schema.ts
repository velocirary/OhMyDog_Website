import { z } from 'zod'

const nameSchema = z.string().min(1, { message: 'O campo nome e obrigatório' })
const emailSchema = z
  .string()
  .min(1, { message: 'O campo email e obrigatório' })
  .email({ message: 'E-mail invalido, por favor revise' })
const phoneSchema = z
  .string()
  .min(1, { message: 'O campo Telefone e obrigatório' })
  .regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, {
    message: 'O telefone precisa seguir o padrão (xx) xxxxx-xxxx',
  })

const messageSchema = z
  .string()
  .min(1, { message: 'O campo Mensagem e obrigátorio' })
  .min(10, {
    message: 'A mensagem deve conter pelo menos 10 caracteres',
  })

export const contactSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  message: messageSchema,
})

export type ContactFormSchema = z.infer<typeof contactSchema>
