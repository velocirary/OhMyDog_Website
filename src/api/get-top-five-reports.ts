import { api } from '@/lib/axios'

export interface getTopFiveReportsResponse {
  reportID: string | null
  userID: number | undefined
  postID: string | null
  title: string
  description: string
  reportedAt: string
}

interface apiResponse {
  idDenuncia: string | null
  idUsuario: number | undefined
  idPostagem: string | null
  tituloDenuncia: string
  descricaoDenuncia: string
  dataDenuncia: string
}

function convertApiResponse(
  data: apiResponse | apiResponse[],
): getTopFiveReportsResponse[] {
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

export async function getTopFiveReports() {
  try {
    const response = await api.get<apiResponse>(
      '/Denuncia/UltimasDenunciasParaAnalise',
    )

    const data: getTopFiveReportsResponse[] = convertApiResponse(response.data)

    return data
  } catch {
    throw new Error('Erro ao atualizar as informações do usuário')
  }
}
