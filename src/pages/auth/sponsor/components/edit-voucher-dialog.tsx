import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { getVoucherWithID } from '@/api/get-voucher-with-id'
import { patchVoucher } from '@/api/patch-voucher'
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

interface editVoucherDialogProps {
  voucherID: string | undefined
  closeDialog: () => void
}

export function EditVoucherDialog({
  voucherID,
  closeDialog,
}: editVoucherDialogProps) {
  const { user } = useAuth()

  // Fazer a rota pra puxar as infos do voucher
  const {
    data: voucherInfos,
    isFetching: isVoucherInfosFetching,
    refetch: refetchVoucherInfos,
  } = useQuery({
    queryFn: () => getVoucherWithID({ voucherID }),
    queryKey: ['get-voucher-infos'],
  })

  console.log(voucherInfos)

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<newVoucherFormSchema>({
    resolver: zodResolver(newVoucherSchema),
  })

  const { mutateAsync: patchVoucherFn, isPending } = useMutation({
    mutationFn: patchVoucher,
  })

  async function onFormSubmit(data: newVoucherFormSchema) {
    try {
      const formattedData = {
        voucherID: user?.idSponsor,
        validateAt: data.validateAt,
        voucherName: data.voucherName,
        voucherValue: data.voucherValue,
        status: 'A',
      }

      patchVoucherFn(formattedData)

      closeDialog()
      reset()

      await refetchVoucherInfos()
      toast.error('Voucher atualizado com sucesso!')
    } catch {
      toast.error('Ocorreu um erro ao atualizar o voucher')
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="font-rubik text-xl">Editar Voucher</DialogTitle>
        <DialogDescription className="font-karla text-base leading-relaxed">
          Por favor, valide as informações e salve caso queira editar
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
              defaultValue={voucherInfos?.voucherName}
              {...register('voucherName')}
              disabled={isSubmitting || isPending || isVoucherInfosFetching}
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
              defaultValue={voucherInfos?.value}
              {...register('voucherValue')}
              disabled={isSubmitting || isPending || isVoucherInfosFetching}
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
              defaultValue={voucherInfos?.validateAt}
              {...register('validateAt')}
              disabled={isSubmitting || isPending || isVoucherInfosFetching}
            />
            <ErrorMessage
              error={errors.validateAt}
              placeholder="Insira a data de validade do seu voucher aqui."
            />
          </article>
        </section>

        <DialogFooter className="pt-8">
          <Button className="mb-1 ml-auto mr-1 bg-green-500 text-zinc-800 hover:bg-green-600">
            Atualizar voucher
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
