import { Outlet } from 'react-router-dom'

import { Footer } from '../auth/components/footer'
import { Header } from '../auth/components/header'

export function AuthLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-yellow-50">
      <Header />

      <div className="flex-1">
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}
