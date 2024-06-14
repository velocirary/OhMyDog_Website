import { Cat, HandHeart, Sparkles, TicketPercent } from 'lucide-react'

export function Benefits() {
  return (
    <section className="flex flex-col items-center justify-center gap-20 pb-32 pt-10">
      <div className="text-center">
        <h1 className="font-rubik text-7xl font-semibold">
          <span className="text-yellow-600">Vantagens </span> em doar no Oh My
          Dog?
        </h1>
        <p className="mx-auto block max-w-5xl py-8 text-lg font-medium leading-relaxed text-zinc-500">
          Acreditamos que cada animal merece amor, cuidado e uma chance justa na
          vida. Com o apoio de pessoas como você, podemos transformar essa
          crença em realidade todos os dias.
        </p>
      </div>

      <div className="grid w-full grid-cols-2 gap-x-24 gap-y-20">
        <article className="flex items-start gap-6">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-jeans-100 bg-jeans-600">
            <Cat className="h-12 w-12 text-zinc-200" />
          </div>

          <div className="max-w-[460px] space-y-4">
            <h4 className="font-rubik text-3xl font-semibold">
              Doar diretamente{' '}
            </h4>
            <p className="font-medium leading-relaxed">
              No Oh My Dog, você não precisa fazer coisas complicadas para
              ajudar um animal, e toda a sua doação vai diretamente para ele.
            </p>
          </div>
        </article>

        <article className="flex items-start gap-6">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-jeans-100 bg-jeans-600">
            <Sparkles className="h-12 w-12 text-zinc-200" />
          </div>

          <div className="max-w-[460px] space-y-4">
            <h4 className="font-rubik text-3xl font-semibold">
              Torne-se um patrocinador
            </h4>
            <p className="font-medium leading-relaxed">
              Tornando-se um patrocinador você pode divulgar seu negocio e
              incentivar a doação voltada a causa animal além de ajudar
              animaizinhos que precisam de ajuda.
            </p>
          </div>
        </article>

        <article className="flex items-start gap-6">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-jeans-100 bg-jeans-600">
            <HandHeart className="h-12 w-12 text-zinc-200" />
          </div>

          <div className="max-w-[460px] space-y-4">
            <h4 className="font-rubik text-3xl font-semibold">
              Ajuda da causa animal
            </h4>
            <p className="font-medium leading-relaxed">
              Não deixe de doar, doe e ajude a causa animal o pouco que seja
              estará fazendo a diferença para um animalzinho.
            </p>
          </div>
        </article>

        <article className="flex items-start gap-6">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-jeans-100 bg-jeans-600">
            <TicketPercent className="h-12 w-12 text-zinc-200" />
          </div>

          <div className="max-w-[460px] space-y-4">
            <h4 className="font-rubik text-3xl font-semibold">
              Ganhe vouchers
            </h4>
            <p className="font-medium leading-relaxed">
              Ao realizar uma doação você ganhará vouchers de nossos
              patrocinadores com um respectivo valor para gastarem como
              quiserem.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
