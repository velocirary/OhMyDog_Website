import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Row } from '@tanstack/react-table'
import { Eye } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { reportVerifySchema } from '../schemas/report-verify-schema'
import { VerifyDialog } from './verify-dialog'

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const [isReportDialog, setIsReportDialog] = useState(false)

  console.log(row)
  const link = reportVerifySchema.parse(row.original)
  console.log('Output of link on DataTableRowActions component: ', link)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="">
        <DropdownMenuItem
          onClick={() => setIsReportDialog(true)}
          className="flex items-center justify-start gap-2"
        >
          <Eye className="h-4 w-4" /> Ver mais informações
        </DropdownMenuItem>
      </DropdownMenuContent>

      <Dialog open={isReportDialog} onOpenChange={setIsReportDialog}>
        <VerifyDialog
          content={link}
          closeDialog={() => setIsReportDialog(false)}
        />
      </Dialog>
    </DropdownMenu>
  )
}
