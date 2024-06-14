import { api } from '@/lib/axios'

export interface postContent {
  publishedAt: string
  approvedAt: string
  donationType: string[]
  title: string
  description: string
  photoURL: string
  pixKey: string
  donationGoal: number
  donationsRaised: number
}

export interface getAllPostsResponse {
  postID: string
  userID: string
  admID: string
  admMessage: string
  status: string
  content: postContent
}

interface ApiResponse {
  idPostagem: string
  idUsuario: string
  idAdministrador: string
  dtPublicacao: string
  dtAprovacao: string
  doacaoPix: string
  doacaoRacao: string
  doacaoMedicamento: string
  doacaoOutros: string
  titulo: string
  conteudo: string
  urlFoto: string
  chavePix: string
  metaDoacao: string
  valorArrecadado: string
  msgAdministrador: string
  status: string
}

function getDonationTypes(item: ApiResponse): string[] {
  const donationTypes = []

  if (item.doacaoPix === 'True') donationTypes.push('PIX')
  if (item.doacaoRacao === 'True') donationTypes.push('Ração')
  if (item.doacaoMedicamento === 'True') donationTypes.push('Medicamento')
  if (item.doacaoOutros === 'True') donationTypes.push('Outros')

  return donationTypes.length > 0 ? donationTypes : ['Desconhecido']
}

export async function getAllPosts(): Promise<getAllPostsResponse[]> {
  const response = await api.get<ApiResponse[]>('/Postagem/TodasPostagens')

  const data: getAllPostsResponse[] = response.data.map((item) => ({
    postID: item.idPostagem,
    userID: item.idUsuario,
    admID: item.idAdministrador,
    admMessage: item.msgAdministrador,
    status: item.status,
    content: {
      publishedAt: item.dtPublicacao,
      approvedAt: item.dtAprovacao,
      donationType: getDonationTypes(item),
      title: item.titulo,
      description: item.conteudo,
      photoURL: item.urlFoto,
      pixKey: item.chavePix,
      donationGoal: Number(item.metaDoacao),
      donationsRaised: Number(item.valorArrecadado),
    },
  }))

  return data
}
