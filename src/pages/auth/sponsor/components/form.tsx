import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { SponsorFormSchema, sponsorSchema } from '../schemas/sponsor-schema'

export function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<SponsorFormSchema>({
    resolver: zodResolver(sponsorSchema),
  })

  function onFormSubmit(data: SponsorFormSchema) {
    try {
      console.log(data)
      reset()
      toast.success('Seu cadastro foi enviado com sucesso!')
    } catch {
      toast.error('Erro ao enviar o seu cadastro! Por favor tente novamente.')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="flex min-w-[600px] flex-col items-center gap-8 rounded-[20px] bg-green-100 px-8 py-12"
    >
      <article className="w-full space-y-2">
        <Label htmlFor="corporateName" className="font-rubik">
          Razão social
        </Label>
        <Input
          type="text"
          id="corporateName"
          disabled={isSubmitting}
          placeholder="EX:  Exemplo ltda"
          {...register('corporateName')}
        />

        {errors.corporateName && (
          <span className="mt-4 block text-sm font-medium text-red-500">
            {errors.corporateName.message}
          </span>
        )}
      </article>

      <article className="w-full space-y-2">
        <Label htmlFor="fantasyName" className="font-rubik">
          Nome fantasia
        </Label>
        <Input
          type="text"
          id="fantasyName"
          disabled={isSubmitting}
          placeholder="EX: Exemplo"
          {...register('fantasyName')}
        />

        {errors.fantasyName && (
          <span className="mt-4 block text-sm font-medium text-red-500">
            {errors.fantasyName.message}
          </span>
        )}
      </article>

      <article className="w-full space-y-2">
        <Label htmlFor="cnpj" className="font-rubik">
          CNPJ
        </Label>
        <Input
          type="text"
          id="cnpj"
          disabled={isSubmitting}
          placeholder="EX: 12.345.567/1234-99"
          {...register('cnpj')}
        />

        {errors.cnpj && (
          <span className="mt-4 block text-sm font-medium text-red-500">
            {errors.cnpj.message}
          </span>
        )}
      </article>

      <article className="w-full space-y-2">
        <Label htmlFor="stateRegistration" className="font-rubik">
          Inscrição estadual
        </Label>
        <Input
          type="text"
          id="stateRegistration"
          disabled={isSubmitting}
          placeholder="EX: 123.432.542.764"
          {...register('stateRegistration')}
        />

        {errors.stateRegistration && (
          <span className="mt-4 block text-sm font-medium text-red-500">
            {errors.stateRegistration.message}
          </span>
        )}
      </article>

      <article className="w-full space-y-2">
        <Label htmlFor="description" className="font-rubik">
          Inscrição estadual
        </Label>
        <Input
          type="text"
          id="description"
          disabled={isSubmitting}
          placeholder="Sua mensagem aqui..."
          {...register('description')}
        />

        {errors.description && (
          <span className="mt-4 block text-sm font-medium text-red-500">
            {errors.description.message}
          </span>
        )}
      </article>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-green-600 px-6 py-4 text-black hover:bg-green-500"
      >
        Enviar inscrição
      </Button>
    </form>
  )
}
