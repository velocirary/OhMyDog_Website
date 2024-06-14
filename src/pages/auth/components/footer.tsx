import { ChevronsUp, PawPrint } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="bg-zinc-800 py-12">
      <div className="container flex max-w-screen-2xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-3">
            <PawPrint className="h-8 w-8 text-yellow-500" />
            <span className="font-rubik text-2xl font-semibold text-zinc-50">
              Oh My Dog.
            </span>
          </div>

          <span className="font-normal text-zinc-100">
            Todos os direitos reservados, 2024
          </span>
        </div>

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
      </div>
    </footer>
  )
}
