import { api } from '@/lib/axios'

interface getDonationInfosProps {
  postID: string
}

export interface getDonationInfos {
  donationID: string
  admID: string | null
  postID: string
  voucherID: string | null
  donationValue: string
  message: string
  pixProof: string
  donatedAt: string
  status: string
}

interface apiResponse {
  idDoacao: string
  idAdminstrador: string | null
  idUsuarioDoador: string
  idPostagem: string
  idVoucher: string
  valorDoacao: string
  mensagem: string
  comprovantePix: string
  dtDoacao: string
  status: string
}

function convertApiResponse(data: apiResponse): getDonationInfos {
  return {
    donationID: data.idDoacao,
    admID: data.idAdminstrador,
    postID: data.idPostagem,
    voucherID: data.idVoucher,
    donationValue: data.valorDoacao,
    message: data.mensagem,
    pixProof: data.comprovantePix,
    donatedAt: data.dtDoacao,
    status: data.status,
  }
}

export async function getDonationInfos({
  postID,
}: getDonationInfosProps): Promise<getDonationInfos> {
  const response = await api.get<apiResponse>(
    `/Doacao/DoacaoPostagem/${postID}`,
  )

  const data: getDonationInfos = convertApiResponse(response.data)

  return data
}
