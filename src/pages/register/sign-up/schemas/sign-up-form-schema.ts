import { z } from 'zod'

const nameSchema = z
  .string({ required_error: 'Preencha o campo nome' })
  .min(1, { message: 'Nome é um campo obrigatório' })

const cpfSchema = z
  .string({ required_error: 'Preencha o campo CPF' })
  .min(1, { message: 'O campo CPF e obrigatório' })
  .min(14, { message: 'CPF deve conter 11 números' })
  .refine((value) => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value), {
    message: 'CPF inválido',
  })

const emailSchema = z
  .string({ required_error: 'Preencha o campo e-mail' })
  .min(1, { message: 'E-mail é um campo obrigatório' })
  .email({
    message: 'Formato de e-mail inválido, por favor insira um e-mail válido',
  })

const phoneSchema = z
  .string({ required_error: 'Preencha o campo telefone' })
  .min(1, { message: 'O campo Telefone e obrigatório' })
  .regex(/^(\(\d{2}\)\s)?\d{4,5}-\d{4}$/, {
    message:
      'Telefone inválido, formato esperado: (XX) XXXXX-XXXX ou (XX) XXXX-XXXX',
  })

const dateOfBirthSchema = z
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
  )

const addressSchema = z
  .string({ required_error: 'Preencha o campo endereço' })
  .min(1, { message: 'Endereço é um campo obrigatório' })

const citySchema = z
  .string({ required_error: 'Preencha o campo cidade' })
  .min(1, { message: 'Cidade é um campo obrigatório' })

const stateSchema = z
  .string({ required_error: 'Preencha o campo estado' })
  .min(1, { message: 'Estado é um campo obrigatório' })

const neighborhoodSchema = z
  .string({ required_error: 'Insira bairro' })
  .min(1, { message: 'Bairro é um campo obrigatório' })

const numberSchema = z
  .string({ required_error: 'Preencha o campo número' })
  .min(1, { message: 'Número é um campo obrigatório' })

// const streetSchema = z
//   .string({ required_error: 'Preencha o campo Logadouro' })
//   .min(1, { message: 'Rua é um campo obrigatório' })

const cepSchema = z
  .string({ required_error: 'Preencha o campo CEP' })
  .min(1, { message: 'O campo CEP e obrigatório' })
  .refine((value: string) => /^\d{5}-\d{3}$/.test(value), {
    message: 'CEP inválido',
  })

const passwordSchema = z
  .string({ required_error: 'Insira uma senha' })
  .min(1, { message: 'Senha é um campo obrigatório' })
  .min(8, { message: 'Senha deve ter no mínimo 8 caracteres' })

// const confirmPasswordSchema = z
//   .string({ required_error: 'Insira uma confirmação de senha' })
//   .min(1, { message: 'Por favor confirme sua senha' })
//   .min(8, { message: 'Senha deve ter no mínimo 8 caracteres' })

export const SignUpSchema = z.object({
  name: nameSchema,
  cpf: cpfSchema,
  email: emailSchema,
  phone: phoneSchema,
  dateOfBirth: dateOfBirthSchema,
  addressStreet: addressSchema,
  addressNumber: numberSchema,
  addressDistrict: neighborhoodSchema,
  addressCep: cepSchema,
  addressCity: citySchema,
  addressState: stateSchema,
  password: passwordSchema,
  // street: streetSchema,
  // confirmPassword: confirmPasswordSchema,
})
// .refine((data) => data.confirmPassword !== data.password, {
//   path: ['confirmPassword'],
//   message: 'Senhas não coincidem',
// })

export type SignUpFormSchema = z.infer<typeof SignUpSchema>
