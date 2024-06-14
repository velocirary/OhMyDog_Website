import { z } from 'zod'

export const newPostSchema = z.object({
  donationTypes: z
    .array(
      z.string({ required_error: 'E necessário pelo menos um tipo de doação' }),
    )
    .min(1, {
      message: 'O campo Tipo de doação precisa de pelo menos um selecionando.',
    })
    .refine((value) => value.some((item) => item), {
      message: 'O campo Tipo de doação precisa de pelo menos um selecionando.',
    }),

  title: z
    .string({ required_error: 'E necessário ter um titulo.' })
    .min(1, { message: 'O campo titulo e obrigatório' }),

  content: z
    .string({ required_error: 'E necessário ter um conteúdo.' })
    .min(1, { message: 'O campo conteúdo e obrigatório' })
    .min(10, {
      message: 'A conteúdo deve conter pelo menos 10 caracteres',
    }),

  photoURL: z.instanceof(FileList).refine((file) => file?.length === 1, {
    message: 'O campo Foto da postagem e obrigatório',
  }),

  pixKey: z
    .string({ required_error: 'E necessário ter uma chave PIX' })
    .min(1, { message: 'O campo Chave PIX e obrigatório' }),

  donationGoal: z
    .string({ required_error: 'E necessário o ter uma meta de doação' })
    .min(1, { message: 'O campo Meta de doação e obrigatório.' })
    .regex(/^(?:\d{1,3}(?:\.\d{3})*|\d+),\d{2}$/, {
      message: 'Formato de valor invalido, por favor revise. ex: (1.000,00)',
    }),
})

export type newPostFormSchema = z.infer<typeof newPostSchema>
