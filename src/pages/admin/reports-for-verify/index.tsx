import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'

import { getTopFiveReports } from '@/api/get-top-five-reports'

import { DataTable } from './components/data-table'
import { columns } from './components/data-table-columns'

export function AdminReportsForVerify() {
  const { data: reportsForAnalytic, isPending } = useQuery({
    queryFn: getTopFiveReports,
    queryKey: ['top-five-reports-for-approval', 'reports-for-approval'],
  })

  return (
    <main>
      <Helmet title="Postagens para Aprovação" />

      <div className="container flex max-w-screen-2xl flex-col items-center justify-center space-y-8 px-6 py-32">
        <div className="max-w-4xl text-center">
          <h1 className="font-rubik text-7xl font-semibold">
            Denúncias para
            <span className="text-yellow-600"> análise</span>
          </h1>
          <p className="block py-8 text-lg font-medium leading-relaxed text-zinc-500">
            Gerencie abaixo todas as denúncias.
          </p>
        </div>

        {isPending ? (
          <div>carregando...</div>
        ) : (
          <DataTable columns={columns} data={reportsForAnalytic} />
        )}
      </div>
    </main>
  )
}
