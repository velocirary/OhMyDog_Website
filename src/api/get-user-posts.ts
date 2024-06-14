import { api } from '@/lib/axios'

interface getUserPostsProps {
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

export interface getUserPostsResponse {
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

function convertApiResponse(
  data: apiResponse | apiResponse[],
): getUserPostsResponse[] {
  const dataArray = Array.isArray(data) ? data : [data]

  return dataArray.map((item) => ({
    postID: item.idPostagem,
    content: {
      title: item.titulo,
      description: item.conteudo,
      publishedAt: item.dtPublicacao,
      approvedAt: item.dtAprovacao,
      userID: item.idUsuario,
      administratorID: item.idAdminstrador,
      imagem: item.imagem,
      donationType: 'Remédio',
      pixKey: item.chavePix,
      status: item.status,
      donationGoal: 520,
      donationsRaised: 1000,
    },
  }))
}

export async function getUserPosts({
  userID,
}: getUserPostsProps): Promise<getUserPostsResponse[]> {
  const response = await api.get<apiResponse[]>(
    `/Doacao/DoacaoUsuario/${userID}`, // change route after
  )

  const data: getUserPostsResponse[] = convertApiResponse(response.data)

  return data
}
