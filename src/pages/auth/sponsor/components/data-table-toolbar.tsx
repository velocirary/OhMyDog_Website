import { Table } from '@tanstack/react-table'
import { X } from 'lucide-react'
import { useState } from 'react'

import { DataTableToolbarInput } from '@/components/data-table-toolbar-input'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

import { NewVoucherDialog } from './new-voucher-dialog'

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const isFiltered = table.getState().columnFilters.length > 0

  function handleCloseDialog() {
    setIsDialogOpen(false)
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <DataTableToolbarInput
          table={table}
          columnFilter="voucherName"
          placeholder="Filtrar por Título"
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button variant={'outline'}>Adicionar novo Voucher</Button>
        </DialogTrigger>

        <NewVoucherDialog closeDialog={handleCloseDialog} />
      </Dialog>
    </div>
  )
}
