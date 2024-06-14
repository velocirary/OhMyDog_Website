import { api } from '@/lib/axios'

export interface getAllDonationsResponse {
  donationID: string
  userDonatedID: number | null
  postID: string
  voucherID: string | null
  donationValue: string
  message: string
  pixProof: string
  donationType: string
  donatedAt: string
  status: string
}

interface apiResponse {
  idDoacao: string
  idUsuarioDoador: number | null
  idPostagem: string
  idVoucher: string
  valorDoacao: string
  mensagem: string
  comprovantePix: string
  idTipoDoacao: string
  dtDoacao: string
  status: string
}

function convertApiResponse(
  data: apiResponse | apiResponse[],
): getAllDonationsResponse[] {
  const dataArray = Array.isArray(data) ? data : [data]

  return dataArray.map((item) => ({
    donationID: item.idDoacao,
    userDonatedID: item.idUsuarioDoador,
    postID: item.idPostagem,
    voucherID: item.idVoucher,
    donationValue: item.valorDoacao,
    message: item.mensagem,
    pixProof: item.comprovantePix,
    donationType: item.idTipoDoacao,
    donatedAt: item.dtDoacao,
    status: item.status,
  }))
}

export async function getAllDonations(): Promise<getAllDonationsResponse[]> {
  const response = await api.get<apiResponse[]>('/Doacao/TodasDoacoes')

  const data: getAllDonationsResponse[] = convertApiResponse(response.data)

  return data
}
