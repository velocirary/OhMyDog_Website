import { Table } from '@tanstack/react-table'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'

const valuesRowsPerPage = [10, 20, 30, 40, 50]

interface DataTableRowsPeerPageProps<TData> {
  table: Table<TData>
}

export function DataTableRowsPeerPage<TData>({
  table,
}: DataTableRowsPeerPageProps<TData>) {
  return (
    <div className="flex items-center space-x-2">
      <p className="text-sm font-medium">Linhas por página</p>

      <Select
        value={`${table.getState().pagination.pageSize}`}
        onValueChange={(value) => {
          table.setPageSize(Number(value))
        }}
      >
        <SelectTrigger className="h-10 w-20">
          <SelectValue placeholder={table.getState().pagination.pageSize} />
        </SelectTrigger>

        <SelectContent side="top" align="end">
          {valuesRowsPerPage.map((pageSize) => (
            <SelectItem key={pageSize} value={`${pageSize}`}>
              {pageSize}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
