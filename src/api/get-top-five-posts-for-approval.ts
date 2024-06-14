import { api } from '@/lib/axios'

export interface getTopFivePostsForApprovalResponse {
  postID: string
  userID: number | undefined
  admID: string | null
  publishedAt: string | null
  approvalAt: string | null
  donationType: string[]
  title: string
  description: string
  photoURL: string
  pixKey: string
  donationGoal: string
  donationsRaised: string
  admMessage: string
  status: string
}

interface apiResponse {
  idPostagem: string
  idUsuario: number | undefined
  idAdministrador: string | null
  dtPublicacao: string | null
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

type StatusInput = 'N' | 'P' | 'A' | string
type StatusOutput = 'Pendente' | 'Rejeitado' | 'Aprovado' | string

const statusMap: { [key: string]: StatusOutput } = {
  N: 'Rejeitado',
  P: 'Pendente',
  A: 'Aprovado',
}

function getStatus(value: StatusInput): StatusOutput {
  return statusMap[value] || 'Pendente'
}

function getDonationTypes(item: apiResponse): string[] {
  const donationTypes = []

  if (item.doacaoPix === 'True') donationTypes.push('PIX')
  if (item.doacaoRacao === 'True') donationTypes.push('Ração')
  if (item.doacaoMedicamento === 'True') donationTypes.push('Medicamento')
  if (item.doacaoOutros === 'True') donationTypes.push('Outros')

  return donationTypes.length > 0 ? donationTypes : ['Desconhecido']
}

function convertApiResponse(
  data: apiResponse | apiResponse[],
): getTopFivePostsForApprovalResponse[] {
  const dataArray = Array.isArray(data) ? data : [data]

  return dataArray.map((item) => ({
    postID: item.idPostagem,
    userID: item.idUsuario,
    admID: item.idAdministrador,
    publishedAt: item.dtPublicacao,
    approvalAt: item.dtAprovacao === null ? 'Pendente' : item.dtAprovacao,
    donationType: getDonationTypes(item),
    title: item.titulo,
    description: item.conteudo,
    photoURL: item.urlFoto,
    pixKey: item.chavePix,
    donationGoal: item.metaDoacao,
    donationsRaised: item.valorArrecadado,
    admMessage: item.msgAdministrador,
    status: getStatus(item.status),
  }))
}

export async function getTopFivePostsForApproval() {
  try {
    const response = await api.get<apiResponse>(
      '/Postagem/UltimasPostagensPendentesAprovacao',
    )

    const data: getTopFivePostsForApprovalResponse[] = convertApiResponse(
      response.data,
    )

    return data
  } catch {
    throw new Error('Erro ao trazer os ultimas postagens para aprovação')
  }
}
