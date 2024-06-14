import { api } from '@/lib/axios'
import { getInitials } from '@/utils/get-name-initials'

interface getUserInfosProps {
  userID: number | string | undefined
}

interface getUserInfosResponse {
  userID: string
  name: string
  nameInitials: string
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

interface apiResponse {
  idUsuario: string
  nome: string
  cpf: string
  email: string
  celular: string
  urlFoto: string
  dtNascimento: string
  logradouro: string
  numero: string
  bairro: string
  cep: string
  municipio: string
  estado: string
  status: string
}

function convertApiResponse(data: apiResponse): getUserInfosResponse {
  return {
    userID: data.idUsuario,
    name: data.nome,
    nameInitials: getInitials(data.nome),
    cpf: data.cpf,
    email: data.email,
    phone: data.celular,
    photoURL: data.urlFoto,
    dateOfBirth: data.dtNascimento,
    addressStreet: data.logradouro,
    addressNumber: data.numero,
    addressDistrict: data.bairro,
    addressCep: data.cep,
    addressCity: data.municipio,
    addressState: data.estado,
    status: data.status,
  }
}

export async function getUserInfos({
  userID,
}: getUserInfosProps): Promise<getUserInfosResponse> {
  const response = await api.get<apiResponse>(`/Usuarios/Usuario/${userID}`)

  const data: getUserInfosResponse = convertApiResponse(response.data)

  return data
}
