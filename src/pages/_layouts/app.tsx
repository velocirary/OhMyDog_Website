import { Outlet } from 'react-router-dom'

import { Footer } from '../app/footer'
import { Header } from '../app/header'

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-yellow-50">
      <Header />

      <Outlet />

      <Footer />
    </div>
  )
}
