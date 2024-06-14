import { api } from '@/lib/axios'

export interface signUpBody {
  name: string
  cpf: string
  email: string
  phone: string
  dateOfBirth: string
  addressStreet: string
  addressNumber: string
  addressDistrict: string
  addressCep: string
  addressCity: string
  addressState: string
  password: string
}

export async function signUp(data: signUpBody) {
  await api.post('/Usuarios/InserirNovoUsuario', {
    nome: data.name,
    cpf: data.cpf,
    email: data.email,
    celular: data.phone,
    dtNascimento: data.dateOfBirth,
    logradouro: data.addressStreet,
    numero: data.addressNumber,
    bairro: data.addressDistrict,
    cep: data.addressCep,
    municipio: data.addressCity,
    estado: data.addressState,
    senha: data.password,
    idUsuario: '',
    status: 'A',
  })
}
