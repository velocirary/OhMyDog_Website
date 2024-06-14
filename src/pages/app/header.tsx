import { PawPrint } from 'lucide-react'
import { Link } from 'react-router-dom'

import { NavLink } from '@/components/nav-links'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-border/60 bg-yellow-50/95 font-rubik backdrop-blur supports-[backdrop-filter]:bg-yellow-50/80">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-6 py-12">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <PawPrint className="h-8 w-8 text-yellow-500" />
          <span className="text-2xl font-semibold">Oh My Dog.</span>
        </div>

        <nav className="relative flex items-center space-x-12">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/postagens">Postagens</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/patrocinador">Patrocinador</NavLink>
          <NavLink to="/contato">Contato</NavLink>
        </nav>

        <Link to="/login">
          <Button className="rounded-full border-4 border-yellow-200 bg-yellow-500 px-8 py-5 text-base font-medium text-zinc-800 hover:bg-yellow-200">
            Login
          </Button>
        </Link>
      </div>
    </header>
  )
}
