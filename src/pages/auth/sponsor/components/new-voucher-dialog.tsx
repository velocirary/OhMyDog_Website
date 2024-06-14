import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { postNewVoucher } from '@/api/post-new-voucher'
import { ErrorMessage } from '@/components/form-error-message'
import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { useAuth } from '@/context/auth-context'

import {
  newVoucherFormSchema,
  newVoucherSchema,
} from '../schemas/new-voucher-schema'

interface newVoucherDialogProps {
  closeDialog: () => void
}

export function NewVoucherDialog({ closeDialog }: newVoucherDialogProps) {
  const { user } = useAuth()

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<newVoucherFormSchema>({
    resolver: zodResolver(newVoucherSchema),
  })

  const { mutateAsync: postNewVoucherFn, isPending } = useMutation({
    mutationFn: postNewVoucher,
  })

  async function onFormSubmit(data: newVoucherFormSchema) {
    try {
      const formattedData = {
        sponsorID: user?.idSponsor,
        validateAt: data.validateAt,
        voucherName: data.voucherName,
        voucherValue: data.voucherValue,
      }

      postNewVoucherFn(formattedData)

      closeDialog()
      reset()
      toast.error('Voucher cadastrado com sucesso!')
    } catch {
      toast.error('Ocorreu um erro ao criar um novo voucher')
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="font-rubik text-xl">Criar Voucher</DialogTitle>
        <DialogDescription className="font-karla text-base leading-relaxed">
          Por favor, insira as informações abaixo para que possa ser possível
          criar um voucher.
        </DialogDescription>
      </DialogHeader>

      <Separator />

      <form className="overflow-y-auto" onSubmit={handleSubmit(onFormSubmit)}>
        <section className="mt-2">
          <span className="mb-6 block font-rubik font-semibold">
            Dados do voucher
          </span>

          <article className="mx-1 space-y-2">
            <Label htmlFor="voucherName">Nome completo</Label>
            <Input
              type="text"
              id="voucherName"
              {...register('voucherName')}
              disabled={isSubmitting || isPending}
            />
            <ErrorMessage
              error={errors.voucherName}
              placeholder="Insira o nome do seu voucher aqui."
            />
          </article>

          <article className="mx-1 space-y-2">
            <Label htmlFor="voucherValue">Valor</Label>
            <Input
              type="text"
              id="voucherValue"
              {...register('voucherValue')}
              disabled={isSubmitting || isPending}
            />
            <ErrorMessage
              error={errors.voucherValue}
              placeholder="Insira o valor do seu voucher aqui."
            />
          </article>

          <article className="mx-1 space-y-2">
            <Label htmlFor="validateAt">Data de vencimento</Label>
            <Input
              type="text"
              id="validateAt"
              {...register('validateAt')}
              disabled={isSubmitting || isPending}
            />
            <ErrorMessage
              error={errors.validateAt}
              placeholder="Insira a data de validade do seu voucher aqui."
            />
          </article>
        </section>

        <DialogFooter className="pt-8">
          <Button className="mb-1 ml-auto mr-1 bg-green-500 text-zinc-800 hover:bg-green-600">
            Criar voucher
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
