import { Table } from '@tanstack/react-table'
import { X } from 'lucide-react'

import { DataTableToolbarInput } from '@/components/data-table-toolbar-input'
import { Button } from '@/components/ui/button'

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <DataTableToolbarInput
          table={table}
          columnFilter="corporateName"
          placeholder="Filtrar por Nome Fantasia"
        />

        {/* Reset all filters button */}
        {isFiltered && (
          <Button
            variant={'ghost'}
            className="h-8 px-2 lg:px-3"
            onClick={() => table.resetColumnFilters()}
          >
            Resetar filtros
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  )
}
