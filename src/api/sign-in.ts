import { api } from '@/lib/axios'

export interface signInBody {
  email: string
  password: string
}

export interface signInResponse {
  idUsuario: number
  idPatrocinador?: number
  nome: string
  tipoUsuario: string
}

export async function signIn({ email, password }: signInBody) {
  const response = await api.post<signInResponse>('/Usuarios/LoginUsuario', {
    email,
    senha: password,
  })

  return response.data
}
