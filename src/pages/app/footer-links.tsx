import { ChevronsUp } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

export function FooterAppLinks() {
  return (
    <>
      <article>
        <div className="flex flex-col gap-2">
          <span className="font-rubik font-semibold text-zinc-50">Home</span>

          <div className="flex flex-col gap-2 text-sm text-zinc-400">
            <Link
              to={'/'}
              className="transition-colors hover:text-zinc-200 hover:underline hover:underline-offset-4"
            >
              Fazer uma doação
            </Link>
            <Link
              to={'/'}
              className="transition-colors hover:text-zinc-200 hover:underline hover:underline-offset-4"
            >
              Por que doar?
            </Link>
            <Link
              to={'/'}
              className="transition-colors hover:text-zinc-200 hover:underline hover:underline-offset-4"
            >
              Vantagens de fazer uma doação
            </Link>
            <Link
              to={'/'}
              className="transition-colors hover:text-zinc-200 hover:underline hover:underline-offset-4"
            >
              Dúvidas frequentes
            </Link>
          </div>
        </div>
      </article>

      <article>
        <div className="flex flex-col gap-2">
          <span className="font-rubik font-semibold text-zinc-50">
            Postagens
          </span>

          <div className="flex flex-col gap-2 text-sm text-zinc-400">
            <Link
              to={'/'}
              className="transition-colors hover:text-zinc-200 hover:underline hover:underline-offset-4"
            >
              Ver todas as postagens
            </Link>
          </div>
        </div>
      </article>

      <article>
        <div className="flex flex-col gap-2">
          <span className="font-rubik font-semibold text-zinc-50">FAQ</span>

          <div className="flex flex-col gap-2 text-sm text-zinc-400">
            <Link
              to={'/'}
              className="transition-colors hover:text-zinc-200 hover:underline hover:underline-offset-4"
            >
              Fazer uma doação
            </Link>
          </div>

          <div className="flex flex-col gap-2 text-sm text-zinc-400">
            <Link
              to={'/'}
              className="transition-colors hover:text-zinc-200 hover:underline hover:underline-offset-4"
            >
              Por que doar?
            </Link>
          </div>

          <div className="flex flex-col gap-2 text-sm text-zinc-400">
            <Link
              to={'/'}
              className="transition-colors hover:text-zinc-200 hover:underline hover:underline-offset-4"
            >
              Vantagens de fazer uma doação
            </Link>
          </div>

          <div className="flex flex-col gap-2 text-sm text-zinc-400">
            <Link
              to={'/'}
              className="transition-colors hover:text-zinc-200 hover:underline hover:underline-offset-4"
            >
              Dúvidas frequentes
            </Link>
          </div>
        </div>
      </article>

      <article>
        <div className="flex flex-col gap-2">
          <span className="font-rubik font-semibold text-zinc-50">
            Patrocinador
          </span>

          <div className="flex flex-col gap-2 text-sm text-zinc-400">
            <Link
              to={'/'}
              className="transition-colors hover:text-zinc-200 hover:underline hover:underline-offset-4"
            >
              Torna-se um patrocinador
            </Link>
          </div>

          <div className="flex flex-col gap-2 text-sm text-zinc-400">
            <Link
              to={'/'}
              className="transition-colors hover:text-zinc-200 hover:underline hover:underline-offset-4"
            >
              Por que ser um patrocinador?
            </Link>
          </div>

          <div className="flex flex-col gap-2 text-sm text-zinc-400">
            <Link
              to={'/'}
              className="transition-colors hover:text-zinc-200 hover:underline hover:underline-offset-4"
            >
              Vantagens de ser um patrocinador
            </Link>
          </div>

          <div className="flex flex-col gap-2 text-sm text-zinc-400">
            <Link
              to={'/'}
              className="transition-colors hover:text-zinc-200 hover:underline hover:underline-offset-4"
            >
              Dúvidas frequentes
            </Link>
          </div>
        </div>
      </article>

      <article>
        <div className="flex flex-col gap-2">
          <span className="font-rubik font-semibold text-zinc-50">Contato</span>

          <div className="flex flex-col gap-2 text-sm text-zinc-400">
            <Link
              to={'/'}
              className="transition-colors hover:text-zinc-200 hover:underline hover:underline-offset-4"
            >
              Entre em contato já
            </Link>
          </div>
        </div>
      </article>

      <article className="flex items-end justify-center">
        <div className="flex items-center gap-4">
          <span className="block font-rubik text-base font-medium text-zinc-200">
            Voltar ao topo
          </span>

          <Link to={'/'}>
            <Button className="h-12 w-12 rounded-full border-4 border-green-200  bg-green-500 p-0 hover:bg-green-200">
              <ChevronsUp className="h-6 w-6 text-zinc-600" />
            </Button>
          </Link>
        </div>
      </article>
    </>
  )
}
