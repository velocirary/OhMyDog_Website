import { api } from '@/lib/axios'

export interface postNewDonationBody {
  userDonatedID: number | undefined
  postID: string
  donationValue: string
  donationMessage: string
  proofPix: string
  donationType: string
}

interface apiBody {
  idUsuarioDoador: number | undefined
  idPostagem: string
  valorDoacao: string
  mensagem: string
  comprovantePix: string
  idTipoDoacao: string
}

function convertApiBody(data: postNewDonationBody): apiBody {
  return {
    idUsuarioDoador: data.userDonatedID,
    idPostagem: data.postID,
    valorDoacao: data.donationValue,
    mensagem: data.donationMessage,
    comprovantePix: data.proofPix,
    idTipoDoacao: data.donationType,
  }
}

export async function postNewDonation(body: postNewDonationBody) {
  try {
    const apiBodyFormat = convertApiBody(body)
    console.log(apiBodyFormat)

    await api.post('/Doacao/InserirNovaDoacao', apiBodyFormat)
  } catch (error) {
    throw new Error('Erro ao fazer uma nova doação')
  }
}
