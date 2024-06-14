import { Helmet } from 'react-helmet-async'

import { DataTable } from './components/data-table'
import { columns } from './components/data-table-columns'
import jsonData from './fake-data.json'

export function ReportAuth() {
  return (
    <main className="flex-1 font-karla">
      <Helmet title="Denúncias" />

      <div className="container flex max-w-screen-2xl flex-col items-center justify-center space-y-8 px-6 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-rubik text-7xl font-semibold">
            Todas as suas
            <span className="text-yellow-600"> Denúncias</span>
          </h1>
          <p className="block py-8 text-lg font-medium leading-relaxed text-zinc-500">
            Veja em abaixo na tabela todas as suas denúncias.
          </p>
        </div>

        <DataTable columns={columns} data={jsonData} />
      </div>
    </main>
  )
}
