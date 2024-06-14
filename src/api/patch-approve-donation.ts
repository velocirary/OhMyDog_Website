import { api } from '@/lib/axios'

export interface patchApproveDonationProps {
  donationID: string
  status: string
}

export async function patchApproveDonation({
  donationID,
  status,
}: patchApproveDonationProps) {
  try {
    await api.post(`/Doacao/AprovarDoacao/${donationID}/${status}`)
  } catch {
    throw new Error('Erro ao alterar o status da doação')
  }
}
