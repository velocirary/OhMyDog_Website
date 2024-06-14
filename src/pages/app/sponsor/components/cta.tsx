export function Cta() {
  return (
    <div className="min-h-[940px] bg-accent-foreground bg-[url(src/assets/app/sponsor/cta.jpg)] bg-cover bg-no-repeat">
      <div className="container flex min-h-[940px] max-w-[1060px] flex-col items-center justify-center px-6 text-center">
        <h1 className="font-rubik text-8xl font-semibold text-zinc-100">
          Seja um patrocinador
          <span className="text-yellow-600"> Agora mesmo!</span>
        </h1>
        <p className="block py-8 text-lg font-medium leading-relaxed text-zinc-100">
          Nós nos dedicamos em oferecer oportunidades de conectarmos pessoas que
          apoiam a causa animal e ajudar animais necessitados, Junte-se a nós e
          faça parte desta jornada.
        </p>
      </div>
    </div>
  )
}
