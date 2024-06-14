import { api } from '@/lib/axios'

interface getUserDonationsProps {
  userID: number
}

interface getUserDonationsResponse {
  donationID: string
  donationUserID: string
  postID: string
  voucherID: string
  donationValue: string
  message: string
  pixProof: string
  donatedAt: string
  status: string
}

interface apiResponse {
  idDoacao: string
  idUsuarioDoador: string
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
): getUserDonationsResponse[] {
  const dataArray = Array.isArray(data) ? data : [data]

  return dataArray.map((item) => ({
    donationID: item.idDoacao,
    donationUserID: item.idUsuarioDoador,
    postID: item.idPostagem,
    voucherID: item.idVoucher,
    donationValue: item.valorDoacao,
    message: item.mensagem,
    pixProof: item.comprovantePix,
    donatedAt: item.dtDoacao,
    status: item.status,
  }))
}

export async function getUserDonations({
  userID,
}: getUserDonationsProps): Promise<getUserDonationsResponse[]> {
  const response = await api.get<apiResponse[]>(
    `/Doacao/TodasDoacoesUsuarioDoador/${userID}`,
  )

  const data: getUserDonationsResponse[] = convertApiResponse(response.data)

  console.log(data)

  return data
}
