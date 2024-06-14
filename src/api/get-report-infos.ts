import { api } from '@/lib/axios'

interface getReportInfosProps {
  postID: string
}

export interface getReportInfosResponse {
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

function convertApiResponse(data: apiResponse): getReportInfosResponse {
  return {
    reportID: data.idDenuncia,
    userID: data.idUsuario,
    postID: data.idPostagem,
    title: data.tituloDenuncia,
    description: data.descricaoDenuncia,
    reportedAt: data.dataDenuncia,
  }
}

export async function getReportInfos({
  postID,
}: getReportInfosProps): Promise<getReportInfosResponse> {
  const response = await api.get<apiResponse>(
    `/Denuncia/DenunciaPostagem/${postID}`,
  )

  const data: getReportInfosResponse = convertApiResponse(response.data)

  return data
}
