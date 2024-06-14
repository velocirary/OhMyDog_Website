import { api } from '@/lib/axios'

interface deleteUserProps {
  userID: number
}

export async function deleteUser({ userID }: deleteUserProps) {
  try {
    await api.delete(`/Usuarios/DeletarUsuario/${userID}`)
  } catch (error) {
    throw new Error('Erro ao excluir um voucher')
  }
}
