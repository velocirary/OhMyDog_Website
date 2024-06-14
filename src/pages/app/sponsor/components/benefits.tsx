import { Check } from 'lucide-react'

import benefitsPhoto from '@/assets/app/sponsor/benefits.jpg'

export function Benefits() {
  return (
    <section className="flex items-start justify-between ">
      <div className="max-w-[660px]">
        <h1 className="font-rubik text-8xl font-semibold leading-relaxed">
          Vantagens do
          <span className="text-yellow-600"> Patrocinador</span>
        </h1>
        <p className="block py-8 text-lg font-medium leading-relaxed text-zinc-500">
          Descubra as vantagens de se tornar um patrocinador e apoiar nossa
          causa.
        </p>

        <div className="space-y-8">
          <article className="flex items-center gap-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-green-800">
              <Check />
            </span>
            <span>Ajuda a causa animal.</span>
          </article>

          <article className="flex items-center gap-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-green-800">
              <Check />
            </span>
            <span>Impacto na vida dos animais.</span>
          </article>

          <article className="flex items-center gap-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-green-800">
              <Check />
            </span>
            <span>
              Compromisso com a responsabilidade sociais e valores éticos.
            </span>
          </article>
        </div>
      </div>

      <img
        src={benefitsPhoto}
        alt=""
        className="max-w-xl overflow-hidden rounded-bl-[320px] rounded-tr-[120px] border-[6px] border-yellow-400 object-cover"
      />
    </section>
  )
}
