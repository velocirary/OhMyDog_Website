import { api } from '@/lib/axios'
import { formatToFloat } from '@/utils/format-to-float'

interface postNewVoucherBody {
  sponsorID: number | undefined
  validateAt: string
  voucherName: string
  voucherValue: string
}

interface apiBody {
  idPatrocinador: number | undefined
  dtVencimento: string
  cupom: string
  valor: string
}

function convertApiBody(data: postNewVoucherBody): apiBody {
  console.log(data)
  console.log(data.voucherValue)
  const noThousandsSeparator = data.voucherValue.replace(/\./g, '')
  const floatString = noThousandsSeparator.replace(',', '.')
  console.log(floatString)

  return {
    idPatrocinador: data.sponsorID,
    dtVencimento: data.validateAt,
    cupom: data.voucherName,
    valor: formatToFloat(data.voucherValue),
  }
}

export async function postNewVoucher(body: postNewVoucherBody) {
  try {
    const apiBodyFormat = convertApiBody(body)

    await api.post('/Voucher/InserirNovoVoucher', apiBodyFormat)
  } catch (error) {
    throw new Error('Erro ao cadastrar um novo voucher')
  }
}
