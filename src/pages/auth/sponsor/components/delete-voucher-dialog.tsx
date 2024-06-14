import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { deleteVoucher } from '@/api/delete-voucher'
import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'

interface deleteVoucherDialogProps {
  voucherID: string | undefined
  closeDialog: () => void
}

export function DeleteVoucherDialog({
  voucherID,
  closeDialog,
}: deleteVoucherDialogProps) {
  const { mutateAsync: deleteVoucherFn } = useMutation({
    mutationFn: deleteVoucher,
  })

  async function handleSubmit() {
    try {
      deleteVoucherFn({ voucherID })
      closeDialog()
      toast.success('Voucher excluído com sucesso!')
    } catch {
      toast.error('Ocorreu um erro ao excluir o voucher')
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="font-rubik text-xl">Editar Voucher</DialogTitle>
        <DialogDescription className="font-karla text-base leading-relaxed">
          Atenção essa
          <span className="font-medium text-red-700"> ação e irreversível</span>
          , pense muito bem antes de excluir este voucher.
        </DialogDescription>
      </DialogHeader>

      <DialogFooter className="pt-4">
        <Button
          onClick={handleSubmit}
          className="mb-1 ml-auto mr-1 bg-red-500 text-zinc-100 hover:bg-red-600"
        >
          Excluir voucher
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}
