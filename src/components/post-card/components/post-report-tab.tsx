import { zodResolver } from '@hookform/resolvers/zod'
import { TabsContent } from '@radix-ui/react-tabs'
import { useMutation } from '@tanstack/react-query'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { postContent } from '@/api/get-all-posts'
import { postNewReport } from '@/api/post-new-report'
import { ErrorMessage } from '@/components/form-error-message'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useAuth } from '@/context/auth-context'

import { reporTabSchema, ReportTabSchemaForm } from '../schemas/report-schema'

interface PostReportTabProps {
  postID: string
  content: postContent
  closeDialog: () => void
}

export function PostReportTab({
  postID,
  content,
  closeDialog,
}: PostReportTabProps) {
  const { user } = useAuth()

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<ReportTabSchemaForm>({
    resolver: zodResolver(reporTabSchema),
  })

  const { mutateAsync: postNewReportFn, isPending } = useMutation({
    mutationFn: postNewReport,
  })

  async function onFormSubmit(data: ReportTabSchemaForm) {
    try {
      console.log(data)
      const formattedValues = {
        userID: user?.idUser,
        postID,
        reason: data.reason,
        message: data.message,
      }

      await postNewReportFn(formattedValues)
      closeDialog()
      reset()
      toast.success('Sua doação foi enviado com sucesso!')
    } catch {
      toast.error('Erro ao enviar sua doação! Por favor tente novamente.')
    }
  }

  return (
    <TabsContent value="report">
      <div className="max-h-[580px] space-y-8 divide-y divide-zinc-300  overflow-y-auto">
        <article className="space-y-4">
          <h4 className="font-rubik text-xl font-semibold">
            Denunciar postagem
          </h4>

          <span className="font-karla text-sm font-medium leading-relaxed text-zinc-500">
            Por favor, descreva a razão da sua denúncia. Sua contribuição é
            crucial para mantermos nossa comunidade segura e respeitosa.
            Agradecemos sua cooperação.
          </span>
        </article>

        <article className="space-y-6 pt-8">
          <div className="space-y-4">
            <h4 className="font-rubik text-lg font-semibold">
              Conteúdo da postagem
            </h4>

            <div className="space-y-2">
              <span className="font-rubik text-sm font-medium text-zinc-900">
                Nome da postagem
              </span>
              <span className="block overflow-hidden rounded-md border-2 border-border px-4 py-2 font-karla text-sm font-medium leading-relaxed text-zinc-700">
                {content?.title}
              </span>
            </div>

            <div className="space-y-2">
              <span className="font-rubik text-sm font-medium text-zinc-900">
                Descrição da postagem
              </span>
              <span className="block overflow-hidden rounded-md border-2 border-border px-4 py-2 font-karla text-sm font-medium leading-relaxed text-zinc-700">
                {content?.description}
              </span>
            </div>
          </div>
        </article>

        <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
          <article className="mx-1 space-y-2">
            <Label>Motivo da denuncia</Label>
            <Input
              type="text"
              id="reason"
              {...register('reason')}
              disabled={isSubmitting || isPending}
            />

            <ErrorMessage
              error={errors.reason}
              placeholder="Insira o motivo da sua denuncia aqui."
            />
          </article>

          <article className="mx-1 space-y-2">
            <Label htmlFor="message">Descrição da denúncia</Label>
            <Controller
              name="message"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Textarea
                  placeholder="Sua mensagem aqui"
                  className="resize-y"
                  {...field}
                />
              )}
            />

            <ErrorMessage
              error={errors.message}
              placeholder="Insira a mensagem da sua denuncia aqui."
            />
          </article>

          <div className="flex items-center justify-end pt-8">
            <Button
              type="submit"
              disabled={isSubmitting || isPending}
              className="mb-8 bg-green-600 text-zinc-900 hover:bg-green-700"
            >
              Enviar denuncia
            </Button>
          </div>
        </form>
      </div>
    </TabsContent>
  )
}
