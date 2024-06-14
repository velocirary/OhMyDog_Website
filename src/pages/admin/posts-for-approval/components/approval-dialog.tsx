import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { getPostInfos } from '@/api/get-post-infos'
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
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'

import {
  ApprovalFormSchema,
  approvalSchema,
} from '../schemas/approval-form-schema'

interface ApprovalDialogProps {
  postID: string
}

export function ApprovalDialog({ postID }: ApprovalDialogProps) {
  const { data: postInfo } = useQuery({
    queryFn: () => getPostInfos({ userID: postID }),
    queryKey: ['get-posts-infos', 'posts'],
  })

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<ApprovalFormSchema>({
    resolver: zodResolver(approvalSchema),
  })

  function onFormSubmit(data: ApprovalFormSchema) {
    try {
      console.log(data)
      reset()
      toast.success('Atualização da postagem feita com sucesso!')
    } catch {
      toast.error('Erro ao atualizar a postagem! Por favor tente novamente.')
    }
  }

  return (
    <DialogContent className="h-[85vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="font-rubik text-xl">
          Postagem para aprovação
        </DialogTitle>
        <DialogDescription className="font-karla text-base leading-relaxed">
          Abaixo toda as informações da postagem para aprovação e opções para o
          administrador selecionar.
        </DialogDescription>
      </DialogHeader>

      <article>
        <div className="space-y-4">
          <h4 className="font-rubik text-lg font-semibold">
            Conteúdo da postagem
          </h4>

          <div className="space-y-2">
            <span className="font-rubik text-sm font-medium text-zinc-900">
              Imagem da postagem
            </span>

            <img
              src={postInfo?.content.imagem}
              alt={`Foto da doação para o(a) ${postInfo?.content.title}`}
              className="min-h-64 w-full rounded-md bg-zinc-600 object-cover"
            />
          </div>

          <div className="space-y-2">
            <span className="font-rubik text-sm font-medium text-zinc-900">
              Nome da postagem
            </span>

            <span className="block overflow-hidden rounded-md border-2 border-border px-4 py-2 font-karla text-sm font-medium leading-relaxed text-zinc-700">
              {postInfo?.content.title}
            </span>
          </div>

          <div className="space-y-2">
            <span className="font-rubik text-sm font-medium text-zinc-900">
              Descrição da postagem
            </span>

            <span className="block overflow-hidden rounded-md border-2 border-border px-4 py-2 font-karla text-sm font-medium leading-relaxed text-zinc-700">
              {postInfo?.content.description}
            </span>
          </div>

          <div className="space-y-2">
            <span className="font-rubik text-sm font-medium text-zinc-900">
              Tipos de doação
            </span>

            <span className="block overflow-hidden rounded-md border-2 border-border px-4 py-2 font-karla text-sm font-medium leading-relaxed text-zinc-700">
              {postInfo?.content.donationType}
            </span>
          </div>

          <div className="space-y-2">
            <span className="font-rubik text-sm font-medium text-zinc-900">
              Meta de doação
            </span>

            <span className="block overflow-hidden rounded-md border-2 border-border px-4 py-2 font-karla text-sm font-medium leading-relaxed text-zinc-700">
              {postInfo?.content.donationGoal}
            </span>
          </div>
        </div>
      </article>

      <Separator />

      <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
        <article className="space-y-2">
          <Label htmlFor="status">Por que está denunciando?</Label>
          <Controller
            name="status"
            control={control}
            defaultValue=""
            disabled={isSubmitting}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um motivo de denuncia " />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Status para postagem</SelectLabel>
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
          <Label htmlFor="message">Descrição da denúncia</Label>
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
