import { ColumnDef } from '@tanstack/react-table'

import { DataTableColumnHeader } from '@/components/data-table-column-header'

import { sponsorDataTableSchema } from '../../sponsor-for-approval/schemas/sponsor-table-schema'

// import { DataTableRowActions } from './data-table-row-action'

type StatusInput = 'N' | 'A' | string
type StatusOutput = 'Desativado' | 'Ativado' | string

const statusMap: { [key: string]: StatusOutput } = {
  N: 'Desativado',
  A: 'Ativado',
}

function getStatus(value: StatusInput): StatusOutput {
  return statusMap[value]
}

export const columns: ColumnDef<sponsorDataTableSchema>[] = [
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
    accessorKey: 'corporateName',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nome fantasia" />
    ),
    cell: ({ row }) => (
      <div className="truncate font-medium">
        <span>{row.getValue('corporateName')}</span>
      </div>
    ),
  },

  {
    accessorKey: 'cnpj',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="CNPJ" />
    ),
    cell: ({ row }) => (
      <div>
        <span className="font-medium">{row.getValue('cnpj')}</span>
      </div>
    ),
  },

  {
    accessorKey: 'stateRegistration',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Inscrição estadual" />
    ),
    cell: ({ row }) => (
      <div>
        <span className="font-medium">{row.getValue('stateRegistration')}</span>
      </div>
    ),
  },

  // {
  //   id: 'actions',
  //   cell: ({ row }) => <DataTableRowActions row={row} />,
  // },
]
