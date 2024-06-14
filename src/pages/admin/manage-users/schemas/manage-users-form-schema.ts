import { z } from 'zod'

export const manageUserSchema = z.object({
  name: z
    .string({ required_error: 'Preencha o campo nome' })
    .min(1, { message: 'O campo Nome e obrigatório.' }),
  cpf: z
    .string({ required_error: 'Preencha o campo CPF' })
    .min(1, { message: 'O campo CPF e obrigatório' })
    .min(14, { message: 'Formato de CPF invalido' }),
  email: z
    .string({ required_error: 'Preencha o campo e-mail' })
    .min(1, { message: 'O campo e-mail e obrigatório' })
    .email({ message: 'Formato de e-mail invalido' }),
  phone: z
    .string({ required_error: 'Preencha o campo telefone' })
    .min(1, { message: 'O campo Telefone e obrigatório' })
    .regex(/^(\(\d{2}\)\s)?\d{4,5}-\d{4}$/, {
      message:
        'Telefone inválido, formato esperado: (XX) XXXXX-XXXX ou (XX) XXXX-XXXX',
    }),
  photoURL: z.string().optional(),
  dateOfBirth: z
    .string({
      required_error: 'Preencha o campo uma data de nascimento',
    })
    .min(1, { message: 'O campo data de nascimento e obrigatório' })
    .refine(
      (value) => {
        // Regex para permitir apenas números e barras
        const regex = /^\d{2}\/\d{2}\/\d{4}$/
        return regex.test(value)
      },
      { message: 'Insira a data de nascimento no formato dd/MMMM/yyyy' },
    ),
  addressStreet: z
    .string({ required_error: 'Preencha o campo endereço' })
    .min(1, { message: 'Endereço é um campo obrigatório' }),
  addressNumber: z
    .string({ required_error: 'Preencha o campo número' })
    .min(1, { message: 'Número é um campo obrigatório' }),
  addressDistrict: z
    .string({ required_error: 'Insira bairro' })
    .min(1, { message: 'Bairro é um campo obrigatório' }),
  addressCep: z
    .string({ required_error: 'Preencha o campo CEP' })
    .min(1, { message: 'O campo CEP e obrigatório' })
    .refine((value: string) => /^\d{5}-\d{3}$/.test(value), {
      message: 'CEP inválido',
    }),
  addressCity: z
    .string({ required_error: 'Preencha o campo cidade' })
    .min(1, { message: 'Cidade é um campo obrigatório' }),
  addressState: z
    .string({ required_error: 'Preencha o campo estado' })
    .min(1, { message: 'Estado é um campo obrigatório' }),
  status: z
    .string({ required_error: 'Preencha o campo status' })
    .min(1, { message: 'Status é um campo obrigatório' }),
})

export type manageUserFormSchema = z.infer<typeof manageUserSchema>
