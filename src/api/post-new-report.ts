import { api } from '@/lib/axios'

interface postNewReportBody {
  userID: number | undefined
  postID: string
  reason: string
  message: string
}

interface apiBody {
  idUsuario: number | undefined
  idPostagem: string
  tituloDenuncia: string
  descricaoDenuncia: string
}

function convertApiBody(data: postNewReportBody): apiBody {
  return {
    idUsuario: data.userID,
    idPostagem: data.postID,
    tituloDenuncia: data.reason,
    descricaoDenuncia: data.message,
  }
}

export async function postNewReport(body: postNewReportBody) {
  try {
    const apiBodyFormat = convertApiBody(body)

    await api.post('/Denuncia/InserirNovaDenuncia', apiBodyFormat)
  } catch (error) {
    throw new Error('Erro ao cadastrar uma nova denúncia')
  }
}
