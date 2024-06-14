import { z } from 'zod'

const emailSchema = z
  .string({ required_error: 'Preencha o campo e-mail' })
  .min(1, { message: 'O campo e-mail e obrigatório' })
  .email({
    message: 'Formato de e-mail inválido, por favor insira um e-mail válido',
  })

const passwordSchema = z
  .string({ required_error: 'Preencha o campo senha' })
  .min(1, { message: 'O campo senha e obrigatório' })
  .min(6, { message: 'O campo senha precisa de pelo menos 6 caracteres' })

export const SignInSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
})

export type SignInFormSchema = z.infer<typeof SignInSchema>
