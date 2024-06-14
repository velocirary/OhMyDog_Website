import { PiggyBank } from 'lucide-react'

import { FormatCurrencyWithSuffix } from '@/utils/format-currency-with-suffix'

interface PostCardTriggerProps {
  title: string
  banner: string
  donationsType: string
  description: string
  donationGoal: number
  donationsRaised: number
  status: string
}

export function PostCardTrigger({
  title,
  banner,
  donationsType,
  description,
  donationGoal,
  donationsRaised,
  status,
}: PostCardTriggerProps) {
  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-[20px] bg-white shadow-lg data-[status=closed]:opacity-80"
      data-status={status === 'A' ? 'active' : 'closed'}
    >
      <span className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 rounded-md bg-green-700 px-4 py-2 group-data-[status=closed]:block">
        Publicação fechada
      </span>

      <img
        src={banner}
        alt={`Foto da doação para o(a) ${title}`}
        className="min-h-80 w-full bg-zinc-800 object-cover object-center"
      />

      <div className="flex flex-1 flex-col justify-between space-y-6 p-4">
        <div className="space-y-2">
          <div className="flex flex-col items-start">
            <h4 className="max-w-[380px] break-words text-left font-rubik text-lg font-semibold">
              {title}
            </h4>
            <span className="font-medium text-yellow-700">{donationsType}</span>
          </div>

          <p className="max-w-[380px] break-words text-left leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <PiggyBank className="h-8 w-8 text-green-700" />

            <span className="text-lg">
              {FormatCurrencyWithSuffix(donationsRaised)} /{' '}
              {FormatCurrencyWithSuffix(donationGoal)}
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}
