import { Form } from './form'

export function Cta() {
  return (
    <section className="flex items-start justify-between pb-32 pt-10">
      <div className="max-w-[600px]">
        <h1 className="font-rubik text-8xl font-semibold">
          Transformes vidas,
          <span className="text-yellow-600"> apoie nossa causa</span>
        </h1>
        <p className="block py-8 text-lg font-medium leading-relaxed text-zinc-500">
          Nós nos dedicamos em oferecer oportunidades de conectarmos pessoas que
          apoiam a causa animal e ajudar animais necessitados, Junte-se a nós e
          faça parte desta jornada.
        </p>
      </div>

      <Form />
    </section>
  )
}
