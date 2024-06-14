import { AlertTriangle, Files, PiggyBank, Users } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function AdminQuickLinks() {
  return (
    <section className="flex flex-col items-center justify-start space-y-24 pb-32">
      <div className="mr-auto max-w-[900px] space-y-8">
        <h1 className="font-rubik text-8xl font-semibold">Acesso rápido</h1>
        <p className="block py-0 text-lg font-medium leading-relaxed text-zinc-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis totam
          eaque adipisci modi natus esse, omnis nobis quo. Laudantium non labore
          fugit aliquid quo harum facilis consequuntur! Ex, qui tempora.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-x-[130px] gap-y-12">
        <article className="overflow-hidden rounded-md">
          <Button
            variant={'ghost'}
            className="group h-20 whitespace-normal p-0 hover:bg-green-50"
          >
            <div className="flex h-20 w-[80px] items-center justify-center rounded-md bg-green-100">
              <Files className="h-8 w-8" />
            </div>

            <span className="flex h-full flex-col items-start justify-start gap-1 px-4 pt-2 text-left">
              <h4 className="font-rubik font-semibold group-hover:underline group-hover:underline-offset-2">
                Gerenciar Postagens
              </h4>
              <span className="w-[290px] text-xs">
                Veja uma lista com todas as postagens e as opções para
                gerenciar.
              </span>
            </span>
          </Button>
        </article>

        <article className="rounded-md">
          <Button
            variant={'ghost'}
            className="group h-20 whitespace-normal p-0 hover:bg-green-50"
          >
            <div className="flex h-20 w-[80px] items-center justify-center rounded-md bg-green-100">
              <PiggyBank className="h-8 w-8" />
            </div>

            <span className="flex h-full flex-col items-start justify-start gap-1 px-4 pt-2 text-left">
              <h4 className="font-rubik font-semibold group-hover:underline group-hover:underline-offset-2">
                Gerenciar Patrocinadores
              </h4>
              <span className="max-w-[260px] text-xs">
                Veja uma lista com todos os patrocinadores e as opções para
                gerenciar.
              </span>
            </span>
          </Button>
        </article>

        <article className="rounded-md">
          <Button
            variant={'ghost'}
            className="group h-20 whitespace-normal p-0 hover:bg-green-50"
          >
            <div className="flex h-20 w-[80px] items-center justify-center rounded-md bg-green-100">
              <Users className="h-8 w-8" />
            </div>

            <span className="flex h-full flex-col items-start justify-start gap-1 px-4 pt-2 text-left">
              <h4 className="font-rubik font-semibold group-hover:underline group-hover:underline-offset-2">
                Gerenciar Usuários
              </h4>
              <span className="max-w-[260px] text-xs">
                Veja uma lista com todos os usuários e as opções para gerenciar.
              </span>
            </span>
          </Button>
        </article>

        <article className="rounded-md">
          <Button
            variant={'ghost'}
            className="group h-20 whitespace-normal p-0 hover:bg-green-50"
          >
            <div className="flex h-20 w-[80px] items-center justify-center rounded-md bg-green-100">
              <AlertTriangle className="h-8 w-8" />
            </div>

            <span className="flex h-full flex-col items-start justify-start gap-1 px-4 pt-2 text-left">
              <h4 className="font-rubik font-semibold group-hover:underline group-hover:underline-offset-2">
                Gerenciar Denúncias
              </h4>
              <span className="max-w-[260px] text-xs">
                Veja uma lista com todas as denúncias e as opções para
                gerenciar.
              </span>
            </span>
          </Button>
        </article>
      </div>
    </section>
  )
}
