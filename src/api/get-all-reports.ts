import { api } from '@/lib/axios'

export interface getAllReportsResponse {
  reportID: string
  userID: string
  postID: string
  title: string
  description: string
  reportedAt: string
}

interface apiResponse {
  idDenuncia: string
  idUsuario: string
  idPostagem: string
  tituloDenuncia: string
  descricaoDenuncia: string
  dataDenuncia: string
}

function convertApiResponse(
  data: apiResponse | apiResponse[],
): getAllReportsResponse[] {
  const dataArray = Array.isArray(data) ? data : [data]

  return dataArray.map((item) => ({
    reportID: item.idDenuncia,
    userID: item.idUsuario,
    postID: item.idPostagem,
    title: item.tituloDenuncia,
    description: item.descricaoDenuncia,
    reportedAt: item.dataDenuncia,
  }))
}

export async function getAllReports() {
  try {
    const response = await api.get<apiResponse>('/Denuncia/TodasDenuncias')

    const data: getAllReportsResponse[] = convertApiResponse(response.data)

    return data
  } catch {
    throw new Error('Erro ao atualizar as informações do usuário')
  }
}
