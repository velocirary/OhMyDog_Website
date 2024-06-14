import { Handshake, Heart, LineChart, Send } from 'lucide-react'

export function ReasonsSponsor() {
  return (
    <section className="flex flex-col items-center justify-center gap-20 pb-32 pt-10">
      <div className="max-w-5xl text-center">
        <h1 className="font-rubik text-7xl font-semibold">
          Por que usar o<span className="text-yellow-600"> Oh My Dog</span>?
        </h1>
        <p className="block py-8 text-lg font-medium leading-relaxed text-zinc-500">
          Acreditamos que cada animal merece amor, cuidado e uma chance justa na
          vida. Com o apoio de pessoas como você, podemos transformar essa
          crença em realidade todos os dias.
        </p>
      </div>

      <div className="flex w-full items-center justify-between">
        <article className="min-h-[356px] max-w-80 space-y-5 rounded-[20px] rounded-tl-[60px] border-4 border-green-300 bg-green-200 p-7">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-yellow-400">
            <Heart className="h-10 w-10" />
          </div>

          <h4 className="text-center font-rubik text-lg font-semibold">
            Ajude Animais Necessitados
          </h4>
          <p className="text-center font-medium leading-relaxed">
            Cada doação ajuda a fornecer cuidados, alimentação e medicamentos e
            entre outras formas de cuidados, assim fazendo a diferença.
          </p>
        </article>

        <article className="min-h-[356px] max-w-80 space-y-5 rounded-[20px] border-4 border-green-300 bg-green-200 p-7">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-yellow-400">
            <Send className="h-10 w-10" />
          </div>

          <h4 className="text-center font-rubik text-lg font-semibold">
            Apoio direto
          </h4>
          <p className="text-center font-medium leading-relaxed">
            Ao fazer uma doação, você está apoiando diretamente o bem-estar e a
            segurança dos animais necessitados, fazendo a diferença.
          </p>
        </article>

        <article className="min-h-[356px] max-w-80 space-y-5 rounded-[20px] border-4 border-green-300 bg-green-200 p-7">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-yellow-400">
            <Handshake className="h-10 w-10" />
          </div>

          <h4 className="text-center font-rubik text-lg font-semibold">
            Transparência total
          </h4>
          <p className="text-center font-medium leading-relaxed">
            Valorizamos a confiança e a transparência. Sua doação é usada com
            responsabilidade diretamente para ajudar animais necessitados.
          </p>
        </article>

        <article className="min-h-[356px] max-w-80 space-y-5 rounded-[20px] rounded-br-[60px] border-4 border-green-300 bg-green-200 p-7">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-yellow-400">
            <LineChart className="h-10 w-10" />
          </div>

          <h4 className="text-center font-rubik text-lg font-semibold">
            Acompanhamento
          </h4>
          <p className="text-center font-medium leading-relaxed">
            Com o Oh My Dog, você pode acompanhar o progresso de cada animal que
            ajudou, desde o momento da doação até a adoção final, garantindo
            transparência e impacto direto.
          </p>
        </article>
      </div>
    </section>
  )
}
