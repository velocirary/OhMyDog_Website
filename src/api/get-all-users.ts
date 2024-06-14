import { api } from '@/lib/axios'

export interface getAllUsersResponse {
  userID: string
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

export interface apiResponse {
  idUsuario: string
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

function convertApiResponse(
  data: apiResponse | apiResponse[],
): getAllUsersResponse[] {
  const dataArray = Array.isArray(data) ? data : [data]

  return dataArray.map((item) => ({
    userID: item.idUsuario,
    name: item.nome,
    cpf: item.cpf,
    email: item.email,
    phone: item.celular,
    photoURL: item.urlFoto,
    dateOfBirth: item.dataNasc,
    addressStreet: item.logradouro,
    addressNumber: item.numero,
    addressDistrict: item.bairro,
    addressCep: item.cep,
    addressCity: item.municipio,
    addressState: item.estado,
    status: item.status,
  }))
}

export async function getAllUsers() {
  try {
    const response = await api.get<apiResponse>('/Usuarios/TodosUsuarios')

    const data: getAllUsersResponse[] = convertApiResponse(response.data)

    return data
  } catch {
    throw new Error('Erro ao atualizar as informações do usuário')
  }
}
