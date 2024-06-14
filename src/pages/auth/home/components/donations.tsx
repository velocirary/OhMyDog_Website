import { useQuery } from '@tanstack/react-query'

import { getTopFiveDonations } from '@/api/get-top-five-donations'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/context/auth-context'

import jsonData from '../fake-data.json'
import { DataTable } from './data-table'
import { columns } from './data-table-columns'

export function Donations() {
  const { user } = useAuth()

  const { data: topFiveDonations, isPending } = useQuery({
    queryFn: () => getTopFiveDonations({ userID: user?.idUser }),
    queryKey: ['getTopFiveDonations', 'donations'],
  })

  console.log(topFiveDonations)

  return (
    <section className="flex w-full flex-col items-center justify-center">
      <div className="max-w-5xl text-center">
        <h1 className="font-rubik text-7xl font-semibold">
          Doações que <span className="text-yellow-600"> contribuiu</span>
        </h1>
        <p className="block py-8 text-lg font-medium leading-relaxed text-zinc-500">
          Explore a seção de contribuições, onde você pode encontrar todas as
          postagens de doações que você já contribuiu.
        </p>
      </div>

      {isPending ? (
        <div>carregando...</div>
      ) : (
        <DataTable columns={columns} data={topFiveDonations} />
      )}
      <Button className="mt-16 rounded-full bg-green-500 px-12 py-6 text-base font-medium text-black hover:bg-green-600">
        Ver minhas doações
      </Button>
    </section>
  )
}
