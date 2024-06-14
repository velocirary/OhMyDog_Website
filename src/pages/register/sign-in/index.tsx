import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import { Form } from './components/form'

export function SignIn() {
  return (
    <>
      <Helmet title="Login" />

      <main className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="font-rubik text-2xl font-semibold tracking-tighter">
              Acessar seu cadastro
            </h1>
            <span className="text-sm text-muted-foreground">
              Faça login e acesse todos os nossos conteúdos.
            </span>
          </div>

          <Form />

          <Separator />

          <Button variant={'secondary'} className="group font-semibold">
            <Link to="/cadastro" className="px-4 py-2">
              Não tem conta?{' '}
              <span className="text-blue-700 group-hover:underline group-hover:underline-offset-2">
                Crie agora!
              </span>
            </Link>
          </Button>
        </div>
      </main>
    </>
  )
}
