// import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'

// import { getUserDonations } from '@/api/get-user-donations'
// import { useAuth } from '@/context/auth-context'
import { DataTable } from './components/data-table'
import { columns } from './components/data-table-columns'
import jsonData from './fake-data.json'

export function DonationsAuth() {
  // const { user } = useAuth()

  // const { data: userDonations, isPending } = useQuery({
  //   queryFn: () => getUserDonations({ userID: user?.idUser }),
  //   queryKey: ['userDonations', 'donations'],
  // })

  // console.log(userDonations)

  return (
    <main className="flex-1 font-karla">
      <Helmet title="Patrocinador" />

      <div className="container flex max-w-screen-2xl flex-col items-center justify-center space-y-8 px-6 py-32">
        <div className="max-w-5xl text-center">
          <h1 className="font-rubik text-7xl font-semibold">
            Todas as doações
            <span className="text-yellow-600"> contribuídas</span>
          </h1>
          <p className="block py-8 text-lg font-medium leading-relaxed text-zinc-500">
            Veja em abaixo na tabela todas as doações que você em prol da causa
            animal, possível ver status da postagem, valor doado, quando foi
            dado e muito mais.
          </p>
        </div>

        {/* {isPending ? (
          <div>carregando...</div>
        ) : (
          } />
        )} */}

        <DataTable columns={columns} data={jsonData} />
      </div>
    </main>
  )
}
