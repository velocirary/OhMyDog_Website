import { Globe, LineChart, Send, ShieldCheck } from 'lucide-react'

export function ReasonForTurnSponsor() {
  return (
    <section className="flex flex-col items-center justify-center gap-20">
      <div className="max-w-5xl text-center">
        <h2 className="font-rubik text-7xl font-semibold">
          Por que usar o<span className="text-yellow-600"> Oh My Dog</span>?
        </h2>
        <p className="block py-8 text-lg font-medium leading-relaxed text-zinc-500">
          Acreditamos que cada animal merece amor, cuidado e uma chance justa na
          vida. Com o apoio de pessoas como você, podemos transformar essa
          crença em realidade todos os dias.
        </p>
      </div>

      <div className="flex w-full items-center justify-between">
        <article className="min-h-[356px] max-w-80 space-y-5 rounded-[20px] rounded-tl-[60px] border-4 border-green-300 bg-green-200 p-7">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-yellow-400">
            <Send className="h-10 w-10" />
          </div>

          <h4 className="text-center font-rubik text-lg font-semibold">
            Impacto direto
          </h4>
          <p className="text-center font-medium leading-relaxed">
            Sua empresa terá um impacto direto na vida de animais que precisam
            de ajuda, além de estar ajudando a causa animal.
          </p>
        </article>

        <article className="min-h-[356px] max-w-80 space-y-5 rounded-[20px] border-4 border-green-300 bg-green-200 p-7">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-yellow-400">
            <Globe className="h-10 w-10" />
          </div>

          <h4 className="text-center font-rubik text-lg font-semibold">
            Conexão comunitária
          </h4>
          <p className="text-center font-medium leading-relaxed">
            Ao se tornar um patrocinador, sua empresa se conecta com uma
            comunidade dedicada a promover a causa animal.
          </p>
        </article>

        <article className="min-h-[356px] max-w-80 space-y-5 rounded-[20px] border-4 border-green-300 bg-green-200 p-7">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-yellow-400">
            <ShieldCheck className="h-10 w-10" />
          </div>

          <h4 className="text-center font-rubik text-lg font-semibold">
            Responsabilidade social
          </h4>
          <p className="text-center font-medium leading-relaxed">
            Demonstre o compromisso da sua empresa com a responsabilidade social
            e o bem estar dos animaizinhos, ao se tornar um patrocinador
          </p>
        </article>

        <article className="min-h-[356px] max-w-80 space-y-5 rounded-[20px] rounded-br-[60px] border-4 border-green-300 bg-green-200 p-7">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-yellow-400">
            <LineChart className="h-10 w-10" />
          </div>

          <h4 className="text-center font-rubik text-lg font-semibold">
            Visibilidade crescente
          </h4>
          <p className="text-center font-medium leading-relaxed">
            Aumente a visibilidade de sua marca, ou empresa além de ajudar nessa
            causa estará alcançando mais clientes e parceiros.
          </p>
        </article>
      </div>
    </section>
  )
}
