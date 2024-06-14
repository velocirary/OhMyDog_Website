import { PiggyBank } from 'lucide-react'

import userExample from '@/assets/app/home/user-example.jpg'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

import { CardTabs } from './components/card-tabs'

export function DialogPost() {
  return (
    <Dialog>
      <DialogTrigger>
        <article className="overflow-hidden rounded-[20px] bg-white shadow-lg">
          <img src="" alt="" className="min-h-80 bg-zinc-600 object-cover" />

          <div className="space-y-6 p-7">
            <div className="flex items-center justify-start gap-4">
              <img
                src={userExample}
                alt=""
                className="w-15 h-15 overflow-hidden rounded-full bg-zinc-600 object-cover"
              />
              <div className="flex flex-col items-start">
                <h4 className="font-rubik text-lg font-semibold">
                  Simon o gatinho de rua
                </h4>
                <span className="font-medium text-yellow-700">Medicamento</span>
              </div>
            </div>

            <p className="max-w-[380px] text-left leading-relaxed">
              Encontrei um gatinho perdido em minha vizinhança e o acolhi em
              minha casa. Batizei-o de Simon e ele se tornou parte da minha
              família. No entanto, devido a dificuldades financeiras, estou....
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <PiggyBank className="h-8 w-8 text-green-700" />

                <span className="text-lg">800 / 1k</span>
              </div>
            </div>
          </div>
        </article>
      </DialogTrigger>

      <DialogContent className="max-h-[80vh] overflow-auto p-4">
        <CardTabs />
      </DialogContent>
    </Dialog>
  )
}
