import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'

import { getAllUsers } from '@/api/get-all-users'

import { DataTable } from './components/data-table'
import { columns } from './components/data-table-columns'

export function AdminManageUsers() {
  const { data: allUsers, isPending } = useQuery({
    queryFn: getAllUsers,
    queryKey: ['allUsers'],
  })

  return (
    <main>
      <Helmet title="Postagens para Aprovação" />

      <div className="container flex max-w-screen-2xl flex-col items-center justify-center space-y-8 px-6 py-32">
        <div className="max-w-4xl text-center">
          <h1 className="font-rubik text-7xl font-semibold">
            Gerenciar todos os
            <span className="text-yellow-600"> usuários</span>
          </h1>
          <p className="block py-8 text-lg font-medium leading-relaxed text-zinc-500">
            Gerencie abaixo todas os usuários.
          </p>
        </div>

        {isPending ? (
          <div>carregando...</div>
        ) : (
          <DataTable columns={columns} data={allUsers} />
        )}
      </div>
    </main>
  )
}
