import { api } from '@/lib/axios'

interface getPostInfosProps {
  userID: number | undefined
}

interface postContent {
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

interface getPostInfosResponse {
  postID: string
  content: postContent
}

interface apiResponse {
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

function convertApiResponse(data: apiResponse): getPostInfosResponse {
  return {
    postID: data.idPostagem,
    content: {
      title: data.titulo,
      description: data.conteudo,
      publishedAt: data.dtPublicacao,
      approvedAt: data.dtAprovacao,
      userID: data.idUsuario,
      administratorID: data.idAdminstrador,
      imagem: data.imagem,
      donationType: 'Remédio',
      pixKey: data.chavePix,
      status: data.status,
      donationGoal: 520,
      donationsRaised: 1000,
    },
  }
}

export async function getPostInfos({
  userID,
}: getPostInfosProps): Promise<getPostInfosResponse> {
  const response = await api.get<apiResponse>(`Postagem/Postagem/${userID}`)

  const data: getPostInfosResponse = convertApiResponse(response.data)

  return data
}
