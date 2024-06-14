import { zodResolver } from '@hookform/resolvers/zod'
import { Separator } from '@radix-ui/react-dropdown-menu'
import { useQuery } from '@tanstack/react-query'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { getUserInfos } from '@/api/get-user-infos'
import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

import {
  sponsorInfoFormSchema,
  sponsorInfoSchema,
} from '../schemas/sponfor-infos-form-schema'
import { sponsorDataTableSchema } from '../schemas/sponsor-table-schema'

interface SponsorInfosForApprovalDialogProps {
  content: sponsorDataTableSchema
  closeDialog: () => void
}

export function SponsorInfosForApprovalDialog({
  content,
  closeDialog,
}: SponsorInfosForApprovalDialogProps) {
  const { data: userInfos } = useQuery({
    queryFn: () => getUserInfos({ userID: content.userID }),
    queryKey: ['get-user-infos'],
  })

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<sponsorInfoFormSchema>({
    resolver: zodResolver(sponsorInfoSchema),
  })

  function onFormSubmit(data: sponsorInfoFormSchema) {
    try {
      console.log(data)
      closeDialog()
      reset()
      toast.success('Atualização do patrocinador feita com sucesso!')
    } catch {
      toast.error(
        'Erro ao atualizar o patrocinador! Por favor tente novamente.',
      )
    }
  }

  return (
    <DialogContent className="h-[85vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="font-rubik text-xl">
          Patrocinador para aprovação
        </DialogTitle>
        <DialogDescription className="font-karla text-base leading-relaxed">
          Abaixo toda as informações do usuário que se quer tonar um novo
          patrocinador.
        </DialogDescription>
      </DialogHeader>

      <article>
        <div className="space-y-4">
          <h4 className="font-rubik text-lg font-semibold">
            Perfil do usuário
          </h4>

          <div className="space-y-2">
            <span className="font-rubik text-sm font-medium text-zinc-900">
              Nome completo
            </span>

            <span className="block overflow-hidden rounded-md border-2 border-border px-4 py-2 font-karla text-sm font-medium leading-relaxed text-zinc-700">
              {userInfos?.name}
            </span>
          </div>

          <div className="space-y-2">
            <span className="font-rubik text-sm font-medium text-zinc-900">
              Email
            </span>

            <span className="block overflow-hidden rounded-md border-2 border-border px-4 py-2 font-karla text-sm font-medium leading-relaxed text-zinc-700">
              {userInfos?.email}
            </span>
          </div>

          <div className="space-y-2">
            <span className="font-rubik text-sm font-medium text-zinc-900">
              CPF
            </span>

            <span className="block overflow-hidden rounded-md border-2 border-border px-4 py-2 font-karla text-sm font-medium leading-relaxed text-zinc-700">
              {userInfos?.cpf}
            </span>
          </div>

          <div className="space-y-2">
            <span className="font-rubik text-sm font-medium text-zinc-900">
              Telefone
            </span>

            <span className="block overflow-hidden rounded-md border-2 border-border px-4 py-2 font-karla text-sm font-medium leading-relaxed text-zinc-700">
              {userInfos?.phone}
            </span>
          </div>

          <div className="space-y-2">
            <span className="font-rubik text-sm font-medium text-zinc-900">
              Data de nascimento
            </span>

            <span className="block overflow-hidden rounded-md border-2 border-border px-4 py-2 font-karla text-sm font-medium leading-relaxed text-zinc-700">
              {userInfos?.dateOfBirth}
            </span>
          </div>

          <div className="space-y-2">
            <span className="font-rubik text-sm font-medium text-zinc-900">
              Endereço
            </span>

            <span className="block overflow-hidden rounded-md border-2 border-border px-4 py-2 font-karla text-sm font-medium leading-relaxed text-zinc-700">
              {userInfos?.addressStreet}
            </span>
          </div>

          <div className="space-y-2">
            <span className="font-rubik text-sm font-medium text-zinc-900">
              Cidade
            </span>

            <span className="block overflow-hidden rounded-md border-2 border-border px-4 py-2 font-karla text-sm font-medium leading-relaxed text-zinc-700">
              {userInfos?.addressCity}
            </span>
          </div>

          <div className="space-y-2">
            <span className="font-rubik text-sm font-medium text-zinc-900">
              Estado
            </span>

            <span className="block overflow-hidden rounded-md border-2 border-border px-4 py-2 font-karla text-sm font-medium leading-relaxed text-zinc-700">
              {userInfos?.addressState}
            </span>
          </div>

          <div className="space-y-2">
            <span className="font-rubik text-sm font-medium text-zinc-900">
              Bairro
            </span>

            <span className="block overflow-hidden rounded-md border-2 border-border px-4 py-2 font-karla text-sm font-medium leading-relaxed text-zinc-700">
              {userInfos?.addressDistrict}
            </span>
          </div>

          <div className="space-y-2">
            <span className="font-rubik text-sm font-medium text-zinc-900">
              Numero
            </span>

            <span className="block overflow-hidden rounded-md border-2 border-border px-4 py-2 font-karla text-sm font-medium leading-relaxed text-zinc-700">
              {userInfos?.addressNumber}
            </span>
          </div>

          <div className="space-y-2">
            <span className="font-rubik text-sm font-medium text-zinc-900">
              CEP
            </span>

            <span className="block overflow-hidden rounded-md border-2 border-border px-4 py-2 font-karla text-sm font-medium leading-relaxed text-zinc-700">
              {userInfos?.addressCep}
            </span>
          </div>
        </div>
      </article>

      <Separator />

      <article>
        <div className="space-y-4">
          <h4 className="font-rubik text-lg font-semibold">
            Dados patrocinador
          </h4>

          <div className="space-y-2">
            <span className="font-rubik text-sm font-medium text-zinc-900">
              Nome fantasia
            </span>

            <span className="block overflow-hidden rounded-md border-2 border-border px-4 py-2 font-karla text-sm font-medium leading-relaxed text-zinc-700">
              {content.corporateName}
            </span>
          </div>

          <div className="space-y-2">
            <span className="font-rubik text-sm font-medium text-zinc-900">
              CNPJ
            </span>

            <span className="block overflow-hidden rounded-md border-2 border-border px-4 py-2 font-karla text-sm font-medium leading-relaxed text-zinc-700">
              {content.cnpj}
            </span>
          </div>

          <div className="space-y-2">
            <span className="font-rubik text-sm font-medium text-zinc-900">
              Inscrição estadual
            </span>

            <span className="block overflow-hidden rounded-md border-2 border-border px-4 py-2 font-karla text-sm font-medium leading-relaxed text-zinc-700">
              {content.stateRegistration}
            </span>
          </div>
        </div>
      </article>

      <Separator />

      <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
        <h4 className="font-rubik text-lg font-semibold">
          Ação do administrador
        </h4>

        <article className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Controller
            name="status"
            control={control}
            defaultValue=""
            disabled={isSubmitting}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um motivo de denúncia " />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Status para denúncia</SelectLabel>
                    <SelectItem value="A">Aprovada</SelectItem>
                    <SelectItem value="N">Rejeitada</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />

          {errors.status && (
            <span className="mt-4 block text-sm font-medium text-red-500">
              {errors.status.message}
            </span>
          )}
        </article>

        <article className="space-y-2">
          <Label htmlFor="message">Mensagem do administrador</Label>
          <Controller
            name="message"
            control={control}
            defaultValue=""
            disabled={isSubmitting}
            render={({ field }) => (
              <Textarea
                placeholder="Sua mensagem aqui"
                className="resize-y"
                {...field}
              />
            )}
          />

          {errors.message && (
            <span className="mt-4 block text-sm font-medium text-red-500">
              {errors.message.message}
            </span>
          )}
        </article>

        <div className="flex items-center justify-end pt-8">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="mb-1 ml-auto mr-1 bg-green-500 text-zinc-800 hover:bg-green-600"
          >
            Enviar doação
          </Button>
        </div>
      </form>
    </DialogContent>
  )
}
