import {
  ChevronDown,
  Files,
  Flag,
  HandHeart,
  Handshake,
  LogOut,
  Pencil,
  Plus,
  TicketPercent,
} from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useAuth } from '@/context/auth-context'

import { NewPostDialog } from './new-post-dialog'
import { UserEditInfosDialog } from './user-edit-infos-dialog'

export function UserMenu() {
  const [isEditUserPerfilDialog, setIsEditUserPerfilDialog] = useState(false)
  const [isNewPostDialog, setIsNewPostDialog] = useState(false)

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  function handleLogOut() {
    signOut()
    navigate('/login', { replace: true })
    toast.success('Logout efetuado com sucesso!')
  }

  function handleOpenEditUserPerfilDialog() {
    setIsDropdownOpen(false)
    setIsEditUserPerfilDialog(true)
  }

  function handleOpenNewPostDialog() {
    setIsDropdownOpen(false)
    setIsNewPostDialog(true)
  }

  return (
    <>
      <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant={'outline'} className="group space-x-4 bg-background">
            <span className="font-rubik text-base">Olá {user?.name}</span>

            <ChevronDown className="duration-50000 transition-transform group-data-[state=open]:rotate-180" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-[200px] bg-yellow-50">
          <DropdownMenuLabel>Ações</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem
            className="cursor-pointer space-x-3 focus:bg-green-100"
            onClick={handleOpenNewPostDialog}
          >
            <Plus className="h-4 w-4" />
            <span>Criar Postagem</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            className="cursor-pointer space-x-3 focus:bg-green-100"
            onClick={handleOpenEditUserPerfilDialog}
          >
            <Pencil className="h-4 w-4" />
            <span>Editar perfil</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />
          <DropdownMenuLabel>Navegação</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <Link to={'/app/meus-posts'}>
            <DropdownMenuItem className="cursor-pointer space-x-3 focus:bg-green-100">
              <Files className="h-4 w-4" />
              <span>Meus Posts</span>
            </DropdownMenuItem>
          </Link>

          <Link to={'/app/postagens'}>
            <DropdownMenuItem className="cursor-pointer space-x-3 focus:bg-green-100">
              <HandHeart className="h-4 w-4" />
              <span>Fazer doação</span>
            </DropdownMenuItem>
          </Link>

          <Link to={'/app/doacoes'}>
            <DropdownMenuItem className="cursor-pointer space-x-3 focus:bg-green-100">
              <Handshake className="h-4 w-4" />
              <span>Contribuições</span>
            </DropdownMenuItem>
          </Link>

          <Link to={'/app/denuncia'}>
            <DropdownMenuItem className="cursor-pointer space-x-3 focus:bg-green-100">
              <Flag className="h-4 w-4" />
              <span>Denúncias</span>
            </DropdownMenuItem>
          </Link>

          <DropdownMenuSeparator />
          <DropdownMenuLabel>Patrocinador</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <Link to={'/app/patrocinador'}>
            <DropdownMenuItem className="cursor-pointer space-x-3 focus:bg-green-100">
              <TicketPercent className="h-4 w-4" />
              <span>Gerenciar vouchers</span>
            </DropdownMenuItem>
          </Link>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            className="cursor-pointer space-x-3 focus:bg-green-100"
            onClick={handleLogOut}
          >
            <LogOut className="h-4 w-4" />
            <span>Sair</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog
        open={isEditUserPerfilDialog}
        onOpenChange={setIsEditUserPerfilDialog}
      >
        <UserEditInfosDialog
          closeDialog={() => setIsEditUserPerfilDialog(false)}
        />
      </Dialog>

      <Dialog open={isNewPostDialog} onOpenChange={setIsNewPostDialog}>
        <NewPostDialog closeDialog={() => setIsNewPostDialog(false)} />
      </Dialog>
    </>
  )
}
