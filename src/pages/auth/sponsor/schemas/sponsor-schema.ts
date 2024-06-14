import { z } from 'zod'

const corporateNameSchema = z
  .string()
  .min(1, { message: 'O campo Razão social e obrigatório' })

const fantasyNameSchema = z
  .string()
  .min(1, { message: 'O campo Nome fantasia e obrigatório' })

const cnpjSchema = z
  .string()
  .min(1, { message: 'O campo CNPJ e obrigatório' })
  .regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, {
    message: 'O cnpj precisa seguir o padrão: xx.xxx.xxx/xxxx-xx',
  })

const stateRegistrationSchema = z
  .string()
  .min(1, { message: 'O campo Inscrição estadual e obrigatório' })
  .regex(/^\d{3}\.\d{3}\.\d{3}\.\d{3}$/, {
    message: 'A inscrição estadual precisa seguir o padrão: xxx.xxx.xxx.xxx',
  })

const descriptionSchema = z
  .string()
  .min(1, { message: 'O campo Descrição e obrigatório' })

export const sponsorSchema = z.object({
  corporateName: corporateNameSchema,
  fantasyName: fantasyNameSchema,
  cnpj: cnpjSchema,
  stateRegistration: stateRegistrationSchema,
  description: descriptionSchema,
})

export type SponsorFormSchema = z.infer<typeof sponsorSchema>
