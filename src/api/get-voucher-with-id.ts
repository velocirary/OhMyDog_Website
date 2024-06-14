import { api } from '@/lib/axios'

interface getVoucherWithIDProps {
  voucherID: string | undefined
}

interface getVoucherWithIDResponse {
  voucherID: string
  validateAt: string
  voucherName: string
  value: string
  status: string
}

interface apiResponse {
  idVoucher: string
  dtVencimento: string
  cupom: string
  valor: string
  status: string
}

function convertApiResponse(data: apiResponse): getVoucherWithIDResponse {
  return {
    voucherID: data.idVoucher,
    validateAt: data.dtVencimento,
    voucherName: data.cupom,
    value: data.valor,
    status: data.status,
  }
}

export async function getVoucherWithID({ voucherID }: getVoucherWithIDProps) {
  const response = await api.get<apiResponse>(`/Voucher/${voucherID}`)

  const data: getVoucherWithIDResponse = convertApiResponse(response.data)

  return data
}
