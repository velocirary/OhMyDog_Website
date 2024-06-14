import { api } from '@/lib/axios'

interface deletePostProps {
  postID: number
}

export async function deletePost({ postID }: deletePostProps) {
  try {
    await api.delete(`/Postagem/DeletarPostagem/${postID}`)
  } catch (error) {
    throw new Error('Erro ao excluir uma postagem')
  }
}
