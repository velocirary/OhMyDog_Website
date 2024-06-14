import { z } from 'zod'

export const newVoucherSchema = z.object({
  voucherName: z
    .string({ required_error: 'Preencha o campo Nome do voucher' })
    .min(1, { message: 'O campo Nome do voucher e obrigatório.' }),

  voucherValue: z
    .string({ required_error: 'E necessário o voucher ter um valor' })
    .min(1, { message: 'O campo Valor e obrigatório.' })
    .regex(/^(?:\d{1,3}(?:\.\d{3})*|\d+),\d{2}$/, {
      message: 'Formato de valor invalido, por favor revise. ex: (1.000,00)',
    }),

  validateAt: z
    .string({
      required_error: 'Preencha o campo uma data de validade',
    })
    .min(1, { message: 'O campo data de validade e obrigatório' })
    .refine(
      (value) => {
        // Regex para permitir apenas números e barras
        const regex = /^\d{2}\/\d{2}\/\d{4}$/
        return regex.test(value)
      },
      { message: 'Insira a data de validade no formato dd/MMMM/yyyy' },
    ),
})

export type newVoucherFormSchema = z.infer<typeof newVoucherSchema>
