import { ColumnDef } from '@tanstack/react-table'

import { DataTableColumnHeader } from '@/components/data-table-column-header'

import { ReportsDataTableSchema } from '../schemas/data-table-reports-schema'
import { DataTableRowActions } from './data-table-row-actions'

export const columns: ColumnDef<ReportsDataTableSchema>[] = [
  {
    accessorKey: 'reportedTitle',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Título" />
    ),
    cell: ({ row }) => (
      <div className="w-full max-w-[400px] truncate font-medium">
        <span>{row.getValue('reportedTitle')}</span>
      </div>
    ),
  },

  {
    accessorKey: 'reportedDescription',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Motivo da denúncia" />
    ),
    cell: ({ row }) => (
      <div className="truncate font-medium">
        <span>{row.getValue('reportedDescription')}</span>
      </div>
    ),
  },

  {
    accessorKey: 'reportedAt',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Data da denúncia" />
    ),
    cell: ({ row }) => (
      <div>
        <span className="font-medium">{row.getValue('reportedAt')}</span>
      </div>
    ),
  },

  {
    id: 'postID',
    cell: ({ row }) => (
      <div className="sr-only">
        <span className="font-medium">{row.getValue('postID')}</span>
      </div>
    ),
  },

  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
