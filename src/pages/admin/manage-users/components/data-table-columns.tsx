import { ColumnDef } from '@tanstack/react-table'

import { DataTableColumnHeader } from '@/components/data-table-column-header'

import { userDataTableSchema } from '../schemas/users-schema'
import { DataTableRowActions } from './data-table-row-action'

type StatusInput = 'N' | 'A' | string
type StatusOutput = 'Desativado' | 'Ativado' | string

const statusMap: { [key: string]: StatusOutput } = {
  N: 'Desativado',
  A: 'Ativado',
}

function getStatus(value: StatusInput): StatusOutput {
  return statusMap[value]
}

export const columns: ColumnDef<userDataTableSchema>[] = [
  {
    accessorKey: 'userID',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => (
      <div className="w-full truncate font-medium">
        <span>{row.getValue('userID')}</span>
      </div>
    ),
  },

  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => (
      <div className="w-full truncate font-medium">
        <span>{getStatus(row.getValue('status'))}</span>
      </div>
    ),
  },

  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nome do usuário" />
    ),
    cell: ({ row }) => (
      <div className="truncate font-medium">
        <span>{row.getValue('name')}</span>
      </div>
    ),
  },

  {
    accessorKey: 'email',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => (
      <div>
        <span className="font-medium">{row.getValue('email')}</span>
      </div>
    ),
  },

  {
    accessorKey: 'cpf',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="CPF" />
    ),
    cell: ({ row }) => (
      <div>
        <span className="font-medium">{row.getValue('cpf')}</span>
      </div>
    ),
  },

  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
