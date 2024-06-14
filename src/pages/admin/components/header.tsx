import { PawPrint } from 'lucide-react'

import { NavLink } from '@/components/nav-links'
import { UserMenu } from '@/pages/auth/components/user-menu'

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
          <NavLink to="/admin/">Home</NavLink>
          <NavLink to="/admin/postagem-aprovacao">
            Postagens para Aprovação
          </NavLink>
          <NavLink to="/admin/patrocinadores-aprovacao">Patrocinadores</NavLink>
          <NavLink to="/admin/gerenciar-usuarios">Usuários</NavLink>
          <NavLink to="/admin/denuncias">Denúncias</NavLink>
        </nav>

        <UserMenu />
      </div>
    </header>
  )
}
