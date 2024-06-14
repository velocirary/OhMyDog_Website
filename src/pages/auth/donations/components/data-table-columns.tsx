import { ColumnDef } from '@tanstack/react-table'

// import { format } from 'date-fns'
import { DataTableColumnHeader } from '@/components/data-table-column-header'

import { DonationsDataTableSchema } from '../schemas/data-donations-schema'
import { DataTableRowActions } from './data-table-row-actions'

export const columns: ColumnDef<DonationsDataTableSchema>[] = [
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
    accessorKey: 'message',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Título" />
    ),
    cell: ({ row }) => (
      <div className="min-w-96 truncate font-medium">
        <span>{row.getValue('message')}</span>
      </div>
    ),
  },

  {
    accessorKey: 'donationValue',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Valor da doação" />
    ),
    cell: ({ row }) => (
      <div>
        <span className="font-medium">
          R$ {''}
          {row.getValue('donationValue')}
        </span>
      </div>
    ),
  },

  {
    accessorKey: 'donatedAt',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Data da doação" />
    ),
    cell: ({ row }) => (
      <div>
        <span className="font-medium">{row.getValue('donatedAt')}</span>
      </div>
    ),
  },

  {
    accessorKey: 'voucher',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Cupom do voucher" />
    ),
    cell: ({ row }) => (
      <div>
        <span className="font-medium">{row.getValue('voucher')}</span>
      </div>
    ),
  },

  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
