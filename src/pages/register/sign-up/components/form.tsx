import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { signUp } from '@/api/sign-up'
import { ErrorMessage } from '@/components/form-error-message'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { SignUpFormSchema, SignUpSchema } from '../schemas/sign-up-form-schema'

export function Form() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<SignUpFormSchema>({
    resolver: zodResolver(SignUpSchema),
  })

  const { mutateAsync: signUpFn } = useMutation({
    mutationFn: signUp,
  })

  async function onFormSubmit(data: SignUpFormSchema) {
    try {
      console.log(data)
      await signUpFn(data)
      reset()
      toast.success('Usuário cadastrado com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => {
            navigate(`/login?email=${data.email}`)
          },
        },
      })
    } catch {
      toast.error('Erro ao cadastrar usuário.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-10">
      <div className='<div className="h-full p-2">  max-h-[450px] space-y-6 overflow-y-auto'>
        <article className="mx-1 space-y-2">
          <Label htmlFor="name">Seu nome</Label>
          <Input
            type="text"
            id="name"
            {...register('name')}
            disabled={isSubmitting}
          />
          <ErrorMessage
            error={errors.name}
            placeholder="Insira o seu nome aqui."
          />
        </article>

        <article className="mx-1 space-y-2">
          <Label htmlFor="email">Seu e-mail</Label>
          <Input
            type="email"
            id="email"
            {...register('email')}
            disabled={isSubmitting}
          />
          <ErrorMessage
            error={errors.email}
            placeholder="Insira o seu e-mail aqui."
          />
        </article>

        <article className="mx-1 space-y-2">
          <Label htmlFor="cpf">Seu CPF</Label>
          <Input
            type="text"
            id="cpf"
            {...register('cpf')}
            disabled={isSubmitting}
          />
          <ErrorMessage error={errors.cpf} placeholder="Insira seu CPF aqui." />
        </article>

        <article className="mx-1 space-y-2">
          <Label htmlFor="dateOfBirth">Data de nascimento</Label>
          <Input
            type="text"
            id="dateOfBirth"
            {...register('dateOfBirth')}
            disabled={isSubmitting}
          />

          <ErrorMessage
            error={errors.dateOfBirth}
            placeholder="Insira sua Data de nascimento aqui."
          />
        </article>

        <article className="mx-1 space-y-2">
          <Label htmlFor="phone">Telefone</Label>
          <Input
            type="text"
            id="phone"
            {...register('phone')}
            disabled={isSubmitting}
          />
          <ErrorMessage
            error={errors.phone}
            placeholder="Insira seu telefone aqui."
          />
        </article>

        <article className="mx-1 space-y-2">
          <Label htmlFor="addressCep">CEP</Label>
          <Input
            type="text"
            id="addressCep"
            {...register('addressCep')}
            disabled={isSubmitting}
          />
          <ErrorMessage
            error={errors.addressCep}
            placeholder="Insira seu CEP aqui."
          />
        </article>

        <article className="mx-1 space-y-2">
          <Label htmlFor="addressStreet">Rua</Label>
          <Input
            type="text"
            id="addressStreet"
            {...register('addressStreet')}
            disabled={isSubmitting}
          />
          <ErrorMessage
            error={errors.addressStreet}
            placeholder="Insira seu Rua aqui."
          />
        </article>

        <article className="mx-1 space-y-2">
          <Label htmlFor="addressDistrict">Bairro</Label>
          <Input
            type="text"
            id="addressDistrict"
            {...register('addressDistrict')}
            disabled={isSubmitting}
          />
          <ErrorMessage
            error={errors.addressDistrict}
            placeholder="Insira seu bairro aqui."
          />
        </article>

        <article className="mx-1 space-y-2">
          <Label htmlFor="addressNumber">Número</Label>
          <Input
            type="text"
            id="addressNumber"
            {...register('addressNumber')}
            disabled={isSubmitting}
          />
          <ErrorMessage
            error={errors.addressNumber}
            placeholder="Insira o número aqui."
          />
        </article>

        <div className="grid grid-cols-2">
          <article className="mx-1 space-y-2">
            <Label htmlFor="addressCity">Cidade</Label>
            <Input
              type="text"
              id="addressCity"
              {...register('addressCity')}
              disabled={isSubmitting}
            />
            <ErrorMessage
              error={errors.addressCity}
              placeholder="Insira sua cidade aqui."
            />
          </article>

          <article className="mx-1 space-y-2">
            <Label htmlFor="addressState">Estado</Label>
            <Input
              type="text"
              id="addressState"
              {...register('addressState')}
              disabled={isSubmitting}
            />
            <ErrorMessage
              error={errors.addressState}
              placeholder="Insira seu estado aqui."
            />
          </article>
        </div>

        <article className="mx-1 space-y-2">
          <Label htmlFor="password">Seu senha</Label>
          <Input
            id="password"
            type="password"
            {...register('password')}
            disabled={isSubmitting}
          />
          <ErrorMessage
            error={errors.password}
            placeholder="Insira sua senha aqui."
          />
        </article>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-800 hover:bg-blue-700"
      >
        Criar conta
      </Button>
    </form>
  )
}
