import { api } from '@/lib/axios'

interface deleteVoucherProps {
  voucherID: string | undefined
}

export async function deleteVoucher({ voucherID }: deleteVoucherProps) {
  try {
    await api.delete(`/Voucher/DeletarVoucher/${voucherID}`)
  } catch (error) {
    throw new Error('Erro ao excluir um voucher')
  }
}
