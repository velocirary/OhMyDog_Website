import { ColumnDef } from '@tanstack/react-table'

import { DataTableColumnHeader } from '@/components/data-table-column-header'

import { PostUserDataTableSchema } from '../schemas/post-user-schema'
import { DataTableRowActions } from './data-table-row-action'

export const columns: ColumnDef<PostUserDataTableSchema>[] = [
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => (
      <div className="w-full truncate font-medium">
        <span>{row.getValue('status')}</span>
      </div>
    ),
  },

  {
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Titulo" />
    ),
    cell: ({ row }) => (
      <div className="truncate font-medium">
        <span>{row.getValue('title')}</span>
      </div>
    ),
  },

  {
    accessorKey: 'sponsorName',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nome do doador" />
    ),
    cell: ({ row }) => (
      <div>
        <span className="font-medium">{row.getValue('sponsorName')}</span>
      </div>
    ),
  },

  {
    accessorKey: 'donatedValue',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Valor doado" />
    ),
    cell: ({ row }) => (
      <div>
        <span className="font-medium">R$ {row.getValue('donatedValue')}</span>
      </div>
    ),
  },

  {
    accessorKey: 'donationStatus',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Status da doação recebida"
      />
    ),
    cell: ({ row }) => (
      <div>
        <span className="font-medium">{row.getValue('donationStatus')}</span>
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
    id: 'postID',
    cell: ({ row }) => (
      <div className="sr-only">
        <span className="font-medium">{row.getValue('postID')}</span>
      </div>
    ),
  },

  {
    id: 'sponsorID',
    cell: ({ row }) => (
      <div className="sr-only">
        <span className="font-medium">{row.getValue('sponsorID')}</span>
      </div>
    ),
  },

  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
