import { useQuery } from '@tanstack/react-query'

import { getTopFiveSponsorForApproval } from '@/api/get-top-five-sponsor-for-approval'

import { DataTable } from './data-table'
import { columns } from './sponsor-columns'

export function SponsorForApprove() {
  const { data: topFiveSponsorForApproval, isPending } = useQuery({
    queryFn: getTopFiveSponsorForApproval,
    queryKey: ['top-five-sponsor-for-approval', 'sponsor-for-approval'],
  })

  return (
    <div className="container flex max-w-screen-2xl flex-col items-center justify-center space-y-8 px-6 py-32">
      <div className="max-w-4xl text-center">
        <h1 className="font-rubik text-7xl font-semibold">
          Patrocinadores para
          <span className="text-yellow-600"> aprovação</span>
        </h1>
        <p className="block py-8 text-lg font-medium leading-relaxed text-zinc-500">
          Gerencie abaixo os últimos patrocinadores que estão no aguardo da
          aprovação.
        </p>
      </div>

      {isPending ? (
        <div>carregando...</div>
      ) : (
        <DataTable columns={columns} data={topFiveSponsorForApproval} />
      )}
    </div>
  )
}
