import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import userExample from '@/assets/app/home/user-example.jpg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { TabsContent } from '@/components/ui/tabs'

import { postTabSchema, PostTabSchemaForm } from '../schemas/post-schema'

export function PostTab() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<PostTabSchemaForm>({
    resolver: zodResolver(postTabSchema),
  })

  function onFormSubmit(data: PostTabSchemaForm) {
    try {
      console.log(data)
      reset()
      toast.success('Sua doação foi enviado com sucesso!')
    } catch {
      toast.error('Erro ao enviar sua doação! Por favor tente novamente.')
    }
  }

  return (
    <TabsContent value="post">
      <div className="space-y-8">
        <article>
          <div className="flex items-center gap-4 pb-8">
            <img
              src={userExample}
              alt=""
              className="w-15 h-15 overflow-hidden rounded-full bg-zinc-600 object-cover"
            />

            <span>
              <h4 className="font-rubik text-lg font-semibold">
                Simon o gatinho de rua
              </h4>
              <span className="font-medium text-yellow-700">Medicamento</span>
            </span>
          </div>

          <img
            src=""
            alt=""
            className="min-h-64 w-full rounded-md bg-zinc-600 object-cover"
          />

          <span className="block pt-8 font-karla text-sm font-medium leading-relaxed text-zinc-500">
            Encontrei um gatinho perdido em minha vizinhança e o acolhi em minha
            casa. Batizei-o de Simon e ele se tornou parte da minha família. No
            entanto, devido a dificuldades financeiras, estou lutando para
            custear todas as vacinas e remédios necessários para o Simon. Farei
            tudo que estiver ao meu alcance, mas preciso da sua ajuda para
            garantir que ele receba o cuidado completo que merece. Sua doação
            fará uma diferença significativa e permitirá que o Simon tenha uma
            vida saudável e feliz. Conto com sua generosidade para ajudar nessa
            jornada de cuidado e amor pelo Simon.
          </span>
        </article>

        <article className="space-y-4">
          <h4 className="font-rubik text-lg font-semibold">
            Simon o gatinho de rua
          </h4>

          <Progress value={69} className="w-full bg-zinc-200" />

          <span className="flex items-center justify-between font-karla">
            <span className="text-zinc-500">
              Já conseguimos arrecadar{' '}
              <span className="font-semibold text-zinc-700">69%</span>
            </span>
            <span className="font-semibold text-zinc-700">R$690 / 1000</span>
          </span>
        </article>

        <article className="space-y-4">
          <h4 className="font-rubik text-lg font-semibold">Realizar doação</h4>
          <span className="font-karla leading-relaxed text-zinc-500">
            Por favor, para realizar uma doação é necessário preencher todos os
            campos abaixo e após isso aguardar a confirmação da sua doação para
            receber o voucher.
          </span>

          <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
            <article className="space-y-2">
              <Label htmlFor="value">Valor</Label>
              <Input id="value" type="text" {...register('value')} />

              {errors.value && (
                <span className="mt-4 block text-sm font-medium text-red-500">
                  {errors.value.message}
                </span>
              )}
            </article>

            <article className="space-y-2">
              <Label htmlFor="pixKey">Chave Pix</Label>
              <Input id="pixKey" type="text" {...register('pixKey')} />

              {errors.pixKey && (
                <span className="mt-4 block text-sm font-medium text-red-500">
                  {errors.pixKey.message}
                </span>
              )}
            </article>

            <article className="space-y-2">
              <Label htmlFor="proofPix">Comprovante Pix</Label>
              <Input
                id="proofPix"
                type="file"
                accept="image/*"
                {...register('proofPix')}
              />

              {errors.proofPix && (
                <span className="mt-4 block text-sm font-medium text-red-500">
                  {errors.proofPix.message}
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
