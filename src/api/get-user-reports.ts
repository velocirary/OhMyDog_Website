import { api } from '@/lib/axios'

interface getUserReportsProps {
  userID: number
}

interface getUserReportsResponse {
  // reportID: number
  // userID: number
  postID: number
  reportedTitle: string
  reportedDescription: string
  reportedAt: string
}

interface apiResponse {
  // idDenuncia: number
  // idUsuario: number
  idPostagem: number
  tituloDenuncia: string
  descricaoDenuncia: string
  dataDenuncia: string
}

function convertApiResponse(
  data: apiResponse | apiResponse[],
): getUserReportsResponse[] {
  const dataArray = Array.isArray(data) ? data : [data]

  return dataArray.map((item) => ({
    // reportID: item.idDenuncia,
    // userID: item.idUsuario,
    postID: item.idPostagem,
    reportedTitle: item.tituloDenuncia,
    reportedDescription: item.descricaoDenuncia,
    reportedAt: item.dataDenuncia,
  }))
}

export async function getUserReports({
  userID,
}: getUserReportsProps): Promise<getUserReportsResponse[]> {
  const response = await api.get<apiResponse[]>(
    `/Doacao/DoacaoUsuario/${userID}`, // change route after
  )

  const data: getUserReportsResponse[] = convertApiResponse(response.data)

  return data
}
