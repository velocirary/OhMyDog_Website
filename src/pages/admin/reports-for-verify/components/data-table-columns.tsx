import { ColumnDef } from '@tanstack/react-table'

import { DataTableColumnHeader } from '@/components/data-table-column-header'

import { reportVerifyDataTableSchema } from '../schemas/report-verify-schema'
import { DataTableRowActions } from './data-table-row-action'

export const columns: ColumnDef<reportVerifyDataTableSchema>[] = [
  {
    accessorKey: 'postID',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID do Post" />
    ),
    cell: ({ row }) => (
      <div>
        <span className="font-medium">{row.getValue('postID')}</span>
      </div>
    ),
  },

  {
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Motivo da denúncia" />
    ),
    cell: ({ row }) => (
      <div className="truncate font-medium">
        <span>{row.getValue('title')}</span>
      </div>
    ),
  },

  {
    accessorKey: 'description',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Descrição" />
    ),
    cell: ({ row }) => (
      <div>
        <span className="font-medium">{row.getValue('description')}</span>
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
    id: 'userID',
    cell: ({ row }) => (
      <div className="sr-only">
        <span className="font-medium">{row.getValue('userID')}</span>
      </div>
    ),
  },

  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
