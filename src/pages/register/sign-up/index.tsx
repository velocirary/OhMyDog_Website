import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import { Form } from './components/form'

export function SignUp() {
  return (
    <>
      <Helmet title="Login" />

      <main className="p-8">
        <div className="flex w-[380px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="font-rubik text-2xl font-semibold tracking-tighter">
              Fazer seu cadastro
            </h1>
            <span className="font-karla text-sm text-muted-foreground">
              Faça login o seu cadastro para acessar nossa plataforma.
            </span>
          </div>

          <Form />

          <Separator />

          <Button
            variant={'secondary'}
            className="group font-karla font-semibold"
          >
            <Link to="/login" className="px-4 py-2">
              Já tem conta?{' '}
              <span className="text-blue-700 group-hover:underline group-hover:underline-offset-2">
                Faça login
              </span>
            </Link>
          </Button>
        </div>
      </main>
    </>
  )
}
