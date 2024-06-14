import { PawPrint } from 'lucide-react'

import { FooterAppLinks } from './footer-links'

export function Footer() {
  return (
    <footer className="bg-zinc-800 py-12">
      <div className="container flex max-w-screen-2xl items-start justify-between px-6">
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

        {/* Links */}
        <section>
          <nav className="grid grid-cols-3 gap-10">
            <FooterAppLinks />
          </nav>
        </section>
      </div>
    </footer>
  )
}
