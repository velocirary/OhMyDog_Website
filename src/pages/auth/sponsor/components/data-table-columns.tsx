import { ColumnDef } from '@tanstack/react-table'

import { DataTableColumnHeader } from '@/components/data-table-column-header'

import { VouchersDataTableSchema } from '../schemas/vouchers-schema'
import { DataTableRowActions } from './data-table-row-action'

export const columns: ColumnDef<VouchersDataTableSchema>[] = [
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => (
      <div>
        <span className="font-medium">{row.getValue('status')}</span>
      </div>
    ),
  },

  {
    accessorKey: 'voucherName',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nome" />
    ),
    cell: ({ row }) => (
      <div className="flex-1 truncate font-medium">
        <span>{row.getValue('voucherName')}</span>
      </div>
    ),
  },

  {
    accessorKey: 'validateAt',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Data da criação" />
    ),
    cell: ({ row }) => (
      <div>
        <span className="font-medium">{row.getValue('validateAt')}</span>
      </div>
    ),
  },

  {
    accessorKey: 'value',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Valor" />
    ),
    cell: ({ row }) => (
      <div>
        <span className="font-medium">
          R$ {''}
          {row.getValue('value')}
        </span>
      </div>
    ),
  },

  {
    id: 'voucherID',
    cell: ({ row }) => (
      <div className="sr-only">
        <span className="font-medium">{row.getValue('voucherID')}</span>
      </div>
    ),
  },

  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
