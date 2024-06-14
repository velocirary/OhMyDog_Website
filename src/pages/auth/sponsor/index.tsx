import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'

import { getUserVouchers } from '@/api/get-user-voucher'
import { useAuth } from '@/context/auth-context'

import { Cta } from './components/cta'
import { DataTable } from './components/data-table'
import { columns } from './components/data-table-columns'
import { Faq } from './components/faq'
import { Form } from './components/form'

export function SponsorAuth() {
  const { user } = useAuth()

  const {
    data: userVouchers,
    isPending,
    refetch: refetchuserVouchers,
  } = useQuery({
    queryFn: () => getUserVouchers({ userID: user?.idUser }),
    queryKey: ['get-user-vouchers', 'vouchers'],
  })

  console.log(userVouchers)

  return (
    <main className="flex-1 font-karla">
      <Helmet title="Patrocinador" />

      {user?.userType === 'U' ? (
        <>
          <Cta />

          <div className="container max-w-screen-2xl space-y-32 px-6 py-32">
            <Form />
            <Faq />
          </div>
        </>
      ) : (
        <>
          <div className="container flex max-w-screen-2xl flex-col items-center justify-center space-y-8 px-6 py-32">
            <div className="max-w-3xl text-center">
              <h1 className="font-rubik text-7xl font-semibold">
                Todas os meus
                <span className="text-yellow-600"> vouchers</span>
              </h1>
              <p className="block py-8 text-lg font-medium leading-relaxed text-zinc-500">
                Veja em abaixo na tabela todas as doações que você em prol da
                causa animal, possível ver status da postagem, valor doado,
                quando foi dado e muito mais.
              </p>
            </div>

            {isPending ? (
              <div>carregando...</div>
            ) : (
              <DataTable columns={columns} data={userVouchers} />
            )}
          </div>
        </>
      )}
    </main>
  )
}
