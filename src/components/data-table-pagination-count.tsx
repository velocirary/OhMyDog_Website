import { Table } from '@tanstack/react-table'

interface DataTablePaginationCountProps<TData> {
  table: Table<TData>
}

export function DataTablePaginationCount<TData>({
  table,
}: DataTablePaginationCountProps<TData>) {
  return (
    <>
      Páginas {table.getState().pagination.pageIndex + 1} de{' '}
      {table.getPageCount()}
    </>
  )
}
