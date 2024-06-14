import { PawPrint } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'

export function RegisterLayout() {
  return (
    <div className="grid min-h-screen grid-cols-3 antialiased">
      <div className="col-span-2 flex h-full w-full flex-col justify-between border-r border-foreground/5 bg-[url('/src/assets/auth.jpg')] bg-cover bg-no-repeat p-10 text-muted-foreground">
        <Link
          className="flex items-center gap-3 text-lg font-medium text-foreground"
          to={'/'}
        >
          <PawPrint className="h-5 w-5 " />
          <span className="font-semibold">OhMyDog.</span>
        </Link>

        <footer className="text-sm">
          OhMyDog. - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
