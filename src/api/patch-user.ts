import { api } from '@/lib/axios'

export interface patchUserBody {
  userID: number | undefined
  name: string
  cpf: string
  email: string
  phone: string
  photoURL: string
  dateOfBirth: string
  addressStreet: string
  addressNumber: string
  addressDistrict: string
  addressCep: string
  addressCity: string
  addressState: string
  status: string
}

interface apiBody {
  idUsuario: number | undefined
  nome: string
  cpf: string
  email: string
  celular: string
  urlFoto: string
  dataNasc: string
  logradouro: string
  numero: string
  bairro: string
  cep: string
  municipio: string
  estado: string
  status: string
}

function convertApiBody(data: patchUserBody): apiBody {
  return {
    idUsuario: data.userID,
    nome: data.name,
    cpf: data.cpf,
    email: data.email,
    celular: data.phone,
    urlFoto: data.photoURL,
    dataNasc: data.dateOfBirth,
    logradouro: data.addressStreet,
    numero: data.addressNumber,
    bairro: data.addressDistrict,
    cep: data.addressCep,
    municipio: data.addressCity,
    estado: data.addressState,
    status: data.status === '' ? 'A' : data.status,
  }
}

export async function patchUser(body: patchUserBody) {
  try {
    const apiBodyFormat = convertApiBody(body)
    console.log(apiBodyFormat)

    await api.patch(`/Usuarios/AtualizarUsuario`, apiBodyFormat)
  } catch {
    throw new Error('Erro ao atualizar as informações do usuário')
  }
}
