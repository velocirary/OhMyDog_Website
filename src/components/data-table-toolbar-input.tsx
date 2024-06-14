import { Table } from '@tanstack/react-table'

import { Input } from './ui/input'

interface DataTableToolbarInputProps<TData> {
  table: Table<TData>
  columnFilter: string
  placeholder: string
}

export function DataTableToolbarInput<TData>({
  table,
  columnFilter,
  placeholder,
}: DataTableToolbarInputProps<TData>) {
  return (
    <Input
      placeholder={placeholder}
      value={(table.getColumn(columnFilter)?.getFilterValue() as string) ?? ''}
      onChange={(event) =>
        table.getColumn(columnFilter)?.setFilterValue(event.target.value)
      }
      className="h-10 w-[150px] lg:w-[250px]"
    />
  )
}
