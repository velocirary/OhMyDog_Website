import { Helmet } from 'react-helmet-async'

import { DataTable } from './components/data-table'
import { columns } from './components/data-table-columns'
import data from './fake-data.json'

export function UserPosts() {
  return (
    <main className="flex-1 font-karla">
      <Helmet title="Postagens" />

      <div className="container max-w-screen-2xl space-y-4 px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-rubik text-7xl font-semibold">
            Todas as suas
            <span className="text-yellow-600"> Postagens</span>
          </h1>
          <p className="block py-8 text-lg font-medium leading-relaxed text-zinc-500">
            Veja todas as suas postagens e doações que você recebeu em nosso
            site.
          </p>
        </div>

        <DataTable columns={columns} data={data} />
      </div>
    </main>
  )
}
