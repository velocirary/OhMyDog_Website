import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Controller, useForm } from 'react-hook-form'
import { Link, useLocation } from 'react-router-dom'
import { toast } from 'sonner'

import { postContent } from '@/api/get-all-posts'
import { postNewDonation } from '@/api/post-new-donation'
import { ErrorMessage } from '@/components/form-error-message'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { TabsContent } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { useAuth } from '@/context/auth-context'
import { calculatePercentage } from '@/utils/calculate-percentage'
import { formatToFloat } from '@/utils/format-to-float'

import { postTabSchema, PostTabSchemaForm } from '../schemas/post-schema'

interface PostContentTabProps {
  postID: string
  content: postContent
  closeDialog: () => void
}

export function PostContentTab({
  postID,
  content,
  closeDialog,
}: PostContentTabProps) {
  const { user } = useAuth()
  const location = useLocation()

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<PostTabSchemaForm>({
    resolver: zodResolver(postTabSchema),
  })

  const { mutateAsync: postNewDonationFn, isPending } = useMutation({
    mutationFn: postNewDonation,
  })

  async function onFormSubmit(data: PostTabSchemaForm) {
    try {
      const formattedData = {
        userDonatedID: user?.idUser,
        postID,
        donationValue: formatToFloat(data.value),
        donationMessage: data.message,
        proofPix: 'URL AI MEU',
        donationType: data.donationType,
      }

      await postNewDonationFn(formattedData)
      closeDialog()
      reset()
      toast.success('Sua doação foi enviado com sucesso!')
    } catch {
      toast.error('Erro ao enviar sua doação! Por favor tente novamente.')
    }
  }

  return (
    <TabsContent value="post">
      <div className="max-h-[580px] space-y-8 overflow-y-auto">
        <article>
          <div className="flex items-center gap-4 pb-8">
            <span>
              <h4 className="font-rubik text-lg font-semibold">
                {content.title}
              </h4>
              <span className="font-medium text-yellow-700">
                {content.donationType[0]}
              </span>
            </span>
          </div>

          <img
            src={content.photoURL}
            alt={`Foto da doação para o(a) ${content.title}`}
            className="min-h-64 w-full rounded-md bg-zinc-600 object-cover"
          />

          <span className="block pt-8 font-karla text-sm font-medium leading-relaxed text-zinc-500">
            {content.description}
          </span>
        </article>

        <article className="space-y-4">
          <h4 className="font-rubik text-lg font-semibold">
            Total já arrecadado
          </h4>

          {content && content.donationType.includes('PIX') && (
            <Progress
              value={calculatePercentage(
                content.donationGoal,
                content.donationsRaised,
              )}
              className="w-full bg-zinc-200"
            />
          )}

          <span className="flex items-center justify-between font-karla">
            <span className="text-zinc-500">
              Já conseguimos arrecadar{' '}
              <span className="font-semibold text-zinc-700">
                {calculatePercentage(
                  content.donationGoal,
                  content.donationsRaised,
                )}
                %
              </span>
            </span>
            <span className="font-semibold text-zinc-700">
              R${content.donationsRaised} / {content.donationGoal}
            </span>
          </span>
        </article>

        {user && location.pathname === '/postagens' && (
          <div className="flex items-center justify-center">
            <Link to={'/login'} className="mx-auto block pt-4">
              <Button className="bg-green-500 text-zinc-900 hover:bg-green-600">
                Fazer login para ver mais
              </Button>
            </Link>
          </div>
        )}

        {user && location.pathname !== '/postagens' && (
          <article className="space-y-4">
            <h4 className="font-rubik text-lg font-semibold">
              Realizar doação
            </h4>
            <span className="font-karla leading-relaxed text-zinc-500">
              Por favor, para realizar uma doação é necessário preencher todos
              os campos abaixo e após isso aguardar a confirmação da sua doação
              para receber o voucher.
            </span>

            <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
              <article className="mx-1 space-y-2">
                <Label htmlFor="donationType">Tipo de doação</Label>
                <Controller
                  name="donationType"
                  control={control}
                  defaultValue=""
                  disabled={isSubmitting || isPending}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecionar" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectGroup>
                          {content && content.donationType.includes('PIX') && (
                            <SelectItem value="1">PIX</SelectItem>
                          )}
                          {content &&
                            content.donationType.includes('Ração') && (
                              <SelectItem value="2">Ração</SelectItem>
                            )}
                          {content &&
                            content.donationType.includes('Medicamento') && (
                              <SelectItem value="3">Medicamento</SelectItem>
                            )}
                          {content &&
                            content.donationType.includes('Outros') && (
                              <SelectItem value="4">Outros</SelectItem>
                            )}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />

                <ErrorMessage
                  error={errors.value}
                  placeholder="Selecione o tipo da doação aqui."
                />
              </article>

              <article className="mx-1 space-y-2">
                <Label htmlFor="value">Valor</Label>
                <Input
                  id="value"
                  type="text"
                  {...register('value')}
                  disabled={isSubmitting || isPending}
                />

                <ErrorMessage
                  error={errors.value}
                  placeholder="Insira o valor que deseja doar aqui."
                />
              </article>

              <article className="mx-1 space-y-2">
                <Label htmlFor="proofPix">Comprovante Pix</Label>
                <Input
                  id="proofPix"
                  type="file"
                  accept="image/*"
                  disabled={isSubmitting || isPending}
                  {...register('proofPix')}
                />

                <ErrorMessage
                  error={errors.proofPix}
                  placeholder="Insira seu comprovante pix aqui."
                />
              </article>

              <article className="mx-1 space-y-2">
                <Label htmlFor="message">Mensagem da doação</Label>
                <Controller
                  name="message"
                  control={control}
                  defaultValue=""
                  disabled={isSubmitting || isPending}
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

              <div className="mb-16 flex items-center justify-end py-8">
                <Button
                  type="submit"
                  disabled={isSubmitting || isPending}
                  className="mb-8 bg-green-600 text-zinc-900 hover:bg-green-700"
                >
                  Enviar doação
                </Button>
              </div>
            </form>
          </article>
        )}
      </div>
    </TabsContent>
  )
}
