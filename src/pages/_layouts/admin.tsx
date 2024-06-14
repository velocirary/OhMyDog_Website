import { Outlet } from 'react-router-dom'

import { Header } from '../admin/components/header'
import { Footer } from '../auth/components/footer'

export function AdminLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div className="flex-1">
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}
