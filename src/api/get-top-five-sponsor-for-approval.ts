import { api } from '@/lib/axios'

interface getTopFiveSponsorForApprovalResponse {
  sponsorID: string
  userID: number
  cnpj: string
  corporateName: string
  stateRegistration: string
  admMessage: string
  status: string
}

interface apiResponse {
  idPatrocinador: string
  idUsuario: number
  cnpj: string
  razaoSocial: string
  inscricaoEstadual: string
  observacao: string
  msgAdministrador: string
  status: string
}

function convertApiResponse(
  data: apiResponse | apiResponse[],
): getTopFiveSponsorForApprovalResponse[] {
  const dataArray = Array.isArray(data) ? data : [data]

  return dataArray.map((item) => ({
    sponsorID: item.idPatrocinador,
    userID: item.idUsuario,
    cnpj: item.cnpj,
    corporateName: item.razaoSocial,
    stateRegistration: item.inscricaoEstadual,
    admMessage: item.msgAdministrador,
    status: item.status,
  }))
}

export async function getTopFiveSponsorForApproval() {
  try {
    const response = await api.get<apiResponse>(
      '/Patrocinador/UltimosPatrocinadoresPendentesAprovacao',
    )

    const data: getTopFiveSponsorForApprovalResponse[] = convertApiResponse(
      response.data,
    )

    return data
  } catch {
    throw new Error('Erro ao trazer os últimos patrocinadores para aprovação')
  }
}
