import { api } from '@/lib/axios'

export interface postContent {
  title: string
  description: string
  publishedAt: string
  approvedAt: string
  userID: string
  administratorID: string
  imagem: string
  donationType: string
  pixKey: string
  status: string
  donationGoal: number
  donationsRaised: number
}

export interface patchPostBody {
  postID: string
  content: postContent
}

interface apiBody {
  idPostagem: string
  titulo: string
  conteudo: string
  dtPublicacao: string
  dtAprovacao: string
  idUsuario: string
  idAdminstrador: string
  imagem: string
  chavePix: string
  status: string
}

function convertApiBody(data: patchPostBody): apiBody {
  return {
    idPostagem: data.postID,
    titulo: data.content.title,
    conteudo: data.content.description,
    dtPublicacao: data.content.publishedAt,
    dtAprovacao: data.content.approvedAt,
    idUsuario: data.content.userID,
    idAdminstrador: data.content.administratorID,
    imagem: data.content.imagem,
    chavePix: data.content.pixKey,
    status: data.content.status,
  }
}

export async function patchPost(body: patchPostBody) {
  try {
    const apiBodyFormat = convertApiBody(body)

    await api.patch('/AtualizarPostagem', apiBodyFormat)
  } catch {}
}
