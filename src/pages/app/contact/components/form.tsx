import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

import { ContactFormSchema, contactSchema } from '../schemas/contact-schema'

export function Form() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactSchema),
  })

  function onFormSubmit(data: ContactFormSchema) {
    try {
      console.log(data)
      reset()
      toast.success('Seu e-mail foi enviado com sucesso!')
    } catch {
      toast.error('Erro ao enviar o e-mail! Por favor tente novamente.')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="flex min-w-[600px] flex-col items-center gap-8 rounded-[20px] bg-green-100 px-8 py-12"
    >
      <article className="w-full space-y-2">
        <Label htmlFor="name" className="font-rubik">
          Nome
        </Label>
        <Input
          type="text"
          id="name"
          disabled={isSubmitting}
          placeholder="Seu nome aqui"
          {...register('name')}
        />

        {errors.name && (
          <span className="mt-4 block text-sm font-medium text-red-500">
            {errors.name.message}
          </span>
        )}
      </article>

      <article className="w-full space-y-2">
        <Label htmlFor="email" className="font-rubik">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          disabled={isSubmitting}
          placeholder="seuEmail@email.com"
          {...register('email')}
        />

        {errors.email && (
          <span className="mt-4 block text-sm font-medium text-red-500">
            {errors.email.message}
          </span>
        )}
      </article>

      <article className="w-full space-y-2">
        <Label htmlFor="phone" className="font-rubik">
          Telefone
        </Label>
        <Input
          type="tel"
          id="phone"
          disabled={isSubmitting}
          placeholder="(15) 99123-4567"
          {...register('phone')}
        />

        {errors.phone && (
          <span className="mt-4 block text-sm font-medium text-red-500">
            {errors.phone.message}
          </span>
        )}
      </article>

      <article className="w-full space-y-2">
        <Label htmlFor="message" className="font-rubik">
          Mensagem
        </Label>
        <Controller
          name="message"
          defaultValue=""
          control={control}
          disabled={isSubmitting}
          render={({ field }) => (
            <Textarea
              placeholder="Sua mensagem aqui..."
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

      <Button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-green-600 px-6 py-4 text-black hover:bg-green-500"
      >
        Enviar dúvida
      </Button>
    </form>
  )
}
