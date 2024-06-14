import { useMutation } from '@tanstack/react-query'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

import { signIn, signInBody, signInResponse } from '@/api/sign-in'

interface User {
  idUser: number
  idSponsor?: number
  name: string
  userType: string
}

interface AuthContextType {
  user: User | undefined
  login: (data: signInBody) => Promise<void>
  isLogin: boolean
  signOut: () => void
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextType)

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('You need an AuthContext to use this Context')
  }
  return context
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | undefined>(undefined)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false) // Indica que a verificação de autenticação foi concluída
  }, [])

  const { mutateAsync: signInFn, isPending: isLogin } = useMutation({
    mutationFn: signIn,
    onSuccess(data: signInResponse) {
      console.log(data)
      const userData = {
        idUser: data.idUsuario,
        idSponsor: data.idPatrocinador,
        name: data.nome,
        userType: data.tipoUsuario,
      }

      setUser(userData)
      localStorage.setItem('user', JSON.stringify(userData))
    },
  })

  async function login({ email, password }: signInBody) {
    await signInFn({
      email,
      password,
    })
  }

  function signOut() {
    setUser(undefined)
    localStorage.removeItem('user')
  }

  // Se a verificação ainda estiver em andamento, mostra um indicador de carregamento
  if (loading) {
    return <div></div>
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        isLogin,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
