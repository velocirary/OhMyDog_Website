import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { postNewPost } from '@/api/post-new-post'
import { ErrorMessage } from '@/components/form-error-message'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { useAuth } from '@/context/auth-context'

import { newPostFormSchema, newPostSchema } from './schemas/new-post-schema'

const items = [
  {
    id: '1',
    label: 'Pix',
  },
  {
    id: '2',
    label: 'Ração',
  },
  {
    id: '3',
    label: 'Medicamento',
  },
  {
    id: '4',
    label: 'Outros',
  },
] as const

interface NewPostDialogProps {
  closeDialog: () => void
}

export function NewPostDialog({ closeDialog }: NewPostDialogProps) {
  const { user } = useAuth()

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<newPostFormSchema>({
    resolver: zodResolver(newPostSchema),
    defaultValues: {
      donationTypes: [],
    },
  })

  const { mutateAsync: postNewPostFn, isPending } = useMutation({
    mutationFn: postNewPost,
  })

  async function onFormSubmit(data: newPostFormSchema) {
    try {
      const formattedValues = {
        userID: user?.idUser,
        donationTypes: data.donationTypes,
        title: data.title,
        description: data.content,
        // urlPhoto: data.photoURL,
        urlPhoto: 'example.jpg',
        pixKey: data.pixKey,
        donationGoal: data.donationGoal,
      }

      await postNewPostFn(formattedValues)

      closeDialog()
      reset()
      toast.success('Postagem criada com sucesso!')
    } catch {
      toast.error('Ocorreu um erro ao criar uma nova postagem')
    }
  }

  return (
    <DialogContent>
      <DialogHeader className="pt-8">
        <DialogTitle className="font-rubik text-xl">Criar postagem</DialogTitle>
        <DialogDescription className="font-karla text-base leading-relaxed">
          Aqui você tem a oportunidade de compartilhar a história e as
          necessidades do seu animalzinho em busca de apoio e solidariedade.
        </DialogDescription>
      </DialogHeader>

      <Separator />

      <form
        className="max-h-[580px] overflow-y-auto"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <section className="space-y-4">
          <span className="mb-4 mt-8 block font-rubik font-semibold">
            Dados da postagem
          </span>

          <article className="mx-1 space-y-2">
            <Label htmlFor="photoURL">Foto da postagem</Label>
            <Input
              id="photoURL"
              type="file"
              accept="image/*"
              disabled={isSubmitting || isPending}
              {...register('photoURL')}
            />

            <ErrorMessage
              error={errors.photoURL}
              placeholder="Insira a foto da postagem aqui aqui."
            />
          </article>

          <article className="mx-1 space-y-2">
            <Label htmlFor="title">Titulo</Label>
            <Input
              id="title"
              type="text"
              {...register('title')}
              disabled={isSubmitting || isPending}
            />

            <ErrorMessage
              error={errors.title}
              placeholder="Insira o titulo da sua postagem aqui."
            />
          </article>

          <article className="mx-1 space-y-2">
            <Label htmlFor="content">Mensagem da doação</Label>
            <Controller
              name="content"
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

            <ErrorMessage
              error={errors.title}
              placeholder="Insira o titulo da sua postagem aqui."
            />
          </article>

          <Separator />

          <span className="mb-4 mt-8 block font-rubik font-semibold">
            Configuração da postagem
          </span>

          <article className="mx-1 space-y-2">
            <Label htmlFor="pixKey">Chave Pix</Label>
            <Input
              id="pixKey"
              type="text"
              {...register('pixKey')}
              disabled={isSubmitting || isPending}
            />

            <ErrorMessage
              error={errors.pixKey}
              placeholder="Insira a sua chave pix aqui."
            />
          </article>

          <article className="mx-1 space-y-2">
            <Label htmlFor="donationGoal">Meta de doação</Label>
            <Input
              id="donationGoal"
              type="text"
              {...register('donationGoal')}
              disabled={isSubmitting || isPending}
            />

            <ErrorMessage
              error={errors.donationGoal}
              placeholder="Insira a sua chave pix aqui."
            />
          </article>

          <article className="mx-1 space-y-2">
            <Label htmlFor="donationTypes">Tipos de doação</Label>
            <Controller
              name="donationTypes"
              control={control}
              // defaultValue=""
              disabled={isSubmitting || isPending}
              render={({ field }) => {
                const value = field.value || []
                return (
                  <>
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center">
                        <Checkbox
                          id={item.id}
                          checked={value.includes(item.id)}
                          onCheckedChange={(isChecked) => {
                            if (isChecked) {
                              field.onChange([...value, item.id])
                            } else {
                              field.onChange(
                                value.filter((val) => val !== item.id),
                              )
                            }
                          }}
                          disabled={isSubmitting || isPending}
                        />
                        <label htmlFor={item.id} className="ml-2">
                          {item.label}
                        </label>
                      </div>
                    ))}
                  </>
                )
              }}
            />

            <ErrorMessage
              error={errors.donationTypes}
              placeholder="Insira a sua chave pix aqui."
            />
          </article>
        </section>

        <div className=" flex items-center justify-end py-8">
          <Button
            type="submit"
            disabled={isSubmitting || isPending}
            className=" bg-green-600 text-zinc-900 hover:bg-green-700"
          >
            Enviar doação
          </Button>
        </div>
      </form>
    </DialogContent>
  )
}
