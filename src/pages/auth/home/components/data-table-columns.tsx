import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns'

import { DataTableColumnHeader } from '@/components/data-table-column-header'

import { DonationsTableSchema } from '../schemas/data-table-donations-schema'

export const columns: ColumnDef<DonationsTableSchema>[] = [
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
      <div>
        <span className="max-w-[640px] truncate font-medium">
          {row.getValue('message')}
        </span>
      </div>
    ),
  },

  {
    accessorKey: 'donationValue',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Valor" />
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
        <span className="font-medium">
          {/* {format(new Date(row.getValue('string')), 'dd/MM/yyyy')} */}
          {row.getValue('donatedAt')}
        </span>
      </div>
    ),
  },
]
