import { api } from '@/lib/axios'
import { formatToFloat } from '@/utils/format-to-float'

export interface postNewPostResponse {
  userID: number | undefined
  donationTypes: string[]
  title: string
  description: string
  urlPhoto: string
  pixKey: string
  donationGoal: string
}

interface apiBody {
  idUsuario: number | undefined
  doacaoPix: string
  doacaoRacao: string
  doacaoMedicamento: string
  doacaoOutros: string
  titulo: string
  conteudo: string
  urlFoto: string
  chavePix: string
  metaDoacao: string

  idAdministrador: string
  valorArrecadado: string
}

function convertApiBody(data: postNewPostResponse): apiBody {
  return {
    idUsuario: data.userID,
    doacaoPix: data.donationTypes.includes('1') ? 'True' : 'False',
    doacaoRacao: data.donationTypes.includes('2') ? 'True' : 'False',
    doacaoMedicamento: data.donationTypes.includes('3') ? 'True' : 'False',
    doacaoOutros: data.donationTypes.includes('4') ? 'True' : 'False',
    titulo: data.title,
    conteudo: data.description,
    urlFoto: data.urlPhoto,
    chavePix: data.pixKey,
    metaDoacao: formatToFloat(data.donationGoal),

    idAdministrador: '0',
    valorArrecadado: '0',
  }
}

export async function postNewPost(body: postNewPostResponse) {
  try {
    const apiBodyFormat = convertApiBody(body)

    console.log(apiBodyFormat)

    await api.post('/Postagem/InserirNovapostagem', apiBodyFormat)
  } catch (error) {
    throw new Error('Erro ao cadastrar uma nova postagem')
  }
}
