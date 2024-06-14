import { ColumnDef } from '@tanstack/react-table'

import { DataTableColumnHeader } from '@/components/data-table-column-header'

import { postApprovalDataTableSchema } from '../../posts-for-approval/schemas/post-approval-schema'

export const columns: ColumnDef<postApprovalDataTableSchema>[] = [
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
    accessorKey: 'donationGoal',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Meta de doação" />
    ),
    cell: ({ row }) => (
      <div>
        <span className="font-medium">R$ {row.getValue('donationGoal')}</span>
      </div>
    ),
  },

  {
    accessorKey: 'approvalAt',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Data de aprovação pedido" />
    ),
    cell: ({ row }) => (
      <div>
        <span className="font-medium">{row.getValue('approvalAt')}</span>
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

  // {
  //   id: 'actions',
  //   cell: ({ row }) => <DataTableRowActions row={row} />,
  // },
]
