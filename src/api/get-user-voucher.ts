import { api } from '@/lib/axios'

interface getUserVoucherProps {
  userID: string
}

interface getUserVoucherResponse {
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

function convertApiResponse(
  data: apiResponse | apiResponse[],
): getUserVoucherResponse[] {
  const dataArray = Array.isArray(data) ? data : [data]

  return dataArray.map((item) => ({
    voucherID: item.idVoucher,
    validateAt: item.dtVencimento,
    voucherName: item.cupom,
    value: item.valor,
    status: item.status,
  }))
}

export async function getUserVouchers({
  userID,
}: getUserVoucherProps): Promise<getUserVoucherResponse[]> {
  const response = await api.get<apiResponse>(
    `/Voucher/VoucherPatronicador/${userID}`,
  )

  const data: getUserVoucherResponse[] = convertApiResponse(response.data)

  return data
}
