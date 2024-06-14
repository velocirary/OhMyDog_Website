import { Table } from '@tanstack/react-table'

import { DataTablePaginationCount } from '@/components/data-table-pagination-count'
import { DataTablePaginationSimple } from '@/components/data-table-pagination-simple'
import { DataTableRowsPeerPage } from '@/components/data-table-rows-peer-page'

interface DataTableFooterProps<TData> {
  table: Table<TData>
}

export function DataTableFooter<TData>({ table }: DataTableFooterProps<TData>) {
  return (
    <div className="flex items-center justify-between px-2">
      <DataTableRowsPeerPage table={table} />
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          <DataTablePaginationCount table={table} />
        </div>
        <DataTablePaginationSimple table={table} />
      </div>
    </div>
  )
}
