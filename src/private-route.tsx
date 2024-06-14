import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

import { useAuth } from './context/auth-context'

interface PrivateRoutesProps {
  element: ReactNode
  routeType: string[]
}

export function PrivateRoute({ element, routeType }: PrivateRoutesProps) {
  const { user } = useAuth()

  return user && routeType.includes(user.userType) ? (
    element
  ) : (
    <Navigate to={'/login'} />
  )
}
