import { useQuery } from '@tanstack/react-query'

import { getPostInfos } from '@/api/get-post-infos'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'

import { ReportsDataTableSchema } from '../schemas/data-table-reports-schema'

interface ReportedPostDialogProps {
  voucherID: string | undefined
  reportContent: ReportsDataTableSchema | undefined
}

export function ReportedPostDialog({
  voucherID,
  reportContent,
}: ReportedPostDialogProps) {
  const { data: postInfo, isFetching } = useQuery({
    queryFn: () => getPostInfos({ userID: voucherID }),
    queryKey: ['get-posts-infos', 'posts'],
  })

  return (
    <DialogContent className="h-[85vh]">
      <DialogHeader>
        <DialogTitle className="font-rubik text-xl">
          Postagem denunciada
        </DialogTitle>
        <DialogDescription className="font-karla text-base leading-relaxed">
          Abaixo está todas as informações da postagem e sua denuncia.
        </DialogDescription>
      </DialogHeader>

      <article className="max-h-[580px] overflow-y-auto">
        <div className="space-y-4">
          <h4 className="font-rubik text-lg font-semibold">
            Conteúdo da postagem
          </h4>

          <div className="space-y-2">
            <span className="font-rubik text-sm font-medium text-zinc-900">
              Imagem da postagem
            </span>
            <img
              src={postInfo?.content.imagem}
              alt={`Foto da doação para o(a) ${postInfo?.content.title}`}
              className="min-h-64 w-full rounded-md bg-zinc-600 object-cover"
            />
          </div>

          <div className="space-y-2">
            <span className="font-rubik text-sm font-medium text-zinc-900">
              Nome da postagem
            </span>
            <span className="block overflow-hidden rounded-md border-2 border-border px-4 py-2 font-karla text-sm font-medium leading-relaxed text-zinc-700">
              {postInfo?.content.title}
            </span>
          </div>

          <div className="space-y-2">
            <span className="font-rubik text-sm font-medium text-zinc-900">
              Descrição da postagem
            </span>
            <span className="block overflow-hidden rounded-md border-2 border-border px-4 py-2 font-karla text-sm font-medium leading-relaxed text-zinc-700">
              {postInfo?.content.description}
            </span>
          </div>

          <div className="space-y-2">
            <span className="font-rubik text-sm font-medium text-zinc-900">
              Descrição da postagem
            </span>
            <span className="block overflow-hidden rounded-md border-2 border-border px-4 py-2 font-karla text-sm font-medium leading-relaxed text-zinc-700">
              {postInfo?.content.description}
            </span>
          </div>
        </div>
      </article>

      <Separator />

      <article>
        <div className="space-y-4">
          <h4 className="font-rubik text-lg font-semibold">
            Conteúdo da denuncia
          </h4>

          <div className="space-y-2">
            <span className="font-rubik text-sm font-medium text-zinc-900">
              Titulo da denuncia
            </span>
            <span className="order block overflow-hidden rounded-md border-2 border-b px-4 py-2 font-karla text-sm font-medium leading-relaxed text-zinc-700">
              {reportContent?.reportedTitle}
            </span>
          </div>

          <div className="space-y-2">
            <span className="font-rubik text-sm font-medium text-zinc-900">
              Motivo da denuncia
            </span>
            <span className="order block overflow-hidden rounded-md border-2 border-b px-4 py-2 font-karla text-sm font-medium leading-relaxed text-zinc-700">
              {reportContent?.reportedDescription}
            </span>
          </div>

          <div className="space-y-2">
            <span className="font-rubik text-sm font-medium text-zinc-900">
              Data da denuncia
            </span>
            <span className="order block overflow-hidden rounded-md border-2 border-b px-4 py-2 font-karla text-sm font-medium leading-relaxed text-zinc-700">
              {reportContent?.reportedAt}
            </span>
          </div>
        </div>
      </article>
    </DialogContent>
  )
}
