import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuth } from '@/context/auth-context'

import { SignInFormSchema, SignInSchema } from '../schemas/sign-in-form-schema'

export function Form() {
  const { login, isLogin, user } = useAuth()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignInFormSchema>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: searchParams.get('email') ?? '',
    },
  })

  async function onFormSubmit({ email, password }: SignInFormSchema) {
    try {
      await login({ email, password })
      user?.userType === 'A'
        ? navigate('/admin/', { replace: true })
        : navigate('/app/', { replace: true })
      toast.success('Login efetuado com sucesso!')
    } catch {
      toast.error(
        'Ocorreu um erro ao efetuar o login, por favor tente novamente.',
      )
    }
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
      <article className="space-y-2">
        <Label htmlFor="email" className="font-rubik">
          Seu e-mail
        </Label>
        <Input
          id="email"
          type="email"
          disabled={isSubmitting || isLogin}
          {...register('email')}
        />

        {errors.email && (
          <span className="mt-4 block text-sm font-medium text-red-500">
            {errors.email.message}
          </span>
        )}
      </article>

      <article className="space-y-2">
        <Label htmlFor="password" className="font-rubik">
          Seu senha
        </Label>
        <Input
          id="password"
          type="password"
          disabled={isSubmitting || isLogin}
          {...register('password')}
        />

        {errors.password && (
          <span className="mt-4 block text-sm font-medium text-red-500">
            {errors.password.message}
          </span>
        )}
      </article>

      <Button
        disabled={isSubmitting || isLogin}
        className="w-full bg-blue-800 hover:bg-blue-700"
      >
        Fazer login
      </Button>
    </form>
  )
}
