import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
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
import { TabsContent } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'

import { reporTabSchema, ReportTabSchemaForm } from '../schemas/report-schema'

export function ReportTab() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<ReportTabSchemaForm>({
    resolver: zodResolver(reporTabSchema),
  })

  function onFormSubmit(data: ReportTabSchemaForm) {
    try {
      console.log(data)
      reset()
      toast.success('Sua doação foi enviado com sucesso!')
    } catch {
      toast.error('Erro ao enviar sua doação! Por favor tente novamente.')
    }
  }

  return (
    <TabsContent value="report">
      <div className="space-y-8 divide-y divide-zinc-300">
        <article className="space-y-4">
          <h4 className="font-rubik text-xl font-semibold">
            Denúnciar postagem
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
                Descrição da postagem
              </span>
              <span className="block overflow-hidden rounded-md border-2 border-border px-4 py-2 font-karla text-sm font-medium leading-relaxed text-zinc-700">
                Simon, Gatinho de rua
              </span>
            </div>

            <div className="space-y-2">
              <span className="font-rubik text-sm font-medium text-zinc-900">
                Nome da postagem
              </span>
              <span className="block overflow-hidden rounded-md border-2 border-border px-4 py-2 font-karla text-sm font-medium leading-relaxed text-zinc-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis, pariatur fugit dolores omnis deleniti quo modi dolor
                enim doloribus, sed blanditiis in perspiciatis exercitationem
                repellendus tempora voluptatem a officia delectus!
                <br />
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis, pariatur fugit dolores omnis deleniti quo modi dolor
                enim doloribus, sed blanditiis in perspiciatis exercitationem
                repellendus tempora voluptatem a officia delectus!
                <br />
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis, pariatur fugit dolores omnis deleniti quo modi dolor
                enim doloribus, sed blanditiis in perspiciatis exercitationem
                repellendus tempora voluptatem a officia delectus!
              </span>
            </div>
          </div>
        </article>

        <article className="space-y-4 pt-8">
          <div className="space-y-2">
            <span className="block font-rubik text-sm font-medium text-zinc-900">
              Descrição da postagem
            </span>

            <span className="font-karla text-sm font-medium leading-relaxed text-zinc-500">
              Aqui você irá nós contar por que está denunciando essa postagem,
              ah e uma observação
              <span className="text-yellow-800">
                se você fazer denuncias sem sentido sua conta irá receber uma
                penalização então cuidado.
              </span>
            </span>
          </div>

          <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
            <article className="space-y-2">
              <Label htmlFor="reason">Por que está denunciando?</Label>
              <Controller
                name="reason"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um motivo de denuncia " />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Motivos para denuncia</SelectLabel>
                        <SelectItem value="spam">Spam</SelectItem>
                        <SelectItem value="ofensivo">
                          Conteúdo ofensivo
                        </SelectItem>
                        <SelectItem value="plagio">Plágio</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />

              {errors.reason && (
                <span className="mt-4 block text-sm font-medium text-red-500">
                  {errors.reason.message}
                </span>
              )}
            </article>

            <article className="space-y-2">
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

              {errors.message && (
                <span className="mt-4 block text-sm font-medium text-red-500">
                  {errors.message.message}
                </span>
              )}
            </article>

            <div className="flex items-center justify-end pt-8">
              <Button type="submit" disabled={isSubmitting}>
                Enviar doação
              </Button>
            </div>
          </form>
        </article>
      </div>
    </TabsContent>
  )
}
