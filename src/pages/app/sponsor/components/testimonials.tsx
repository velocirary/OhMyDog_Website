import { Quote } from 'lucide-react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function Testimonials() {
  return (
    <div className="flex flex-col items-center justify-center gap-20 pb-8">
      <div className="max-w-[1000px] text-center">
        <h2 className="font-rubik text-7xl font-semibold">
          O que nossos
          <span className="text-yellow-600"> Patrocinadores dizem</span>
        </h2>
        <p className="block py-8 text-lg font-medium leading-relaxed text-zinc-500">
          Veja o que nossos patrocinadores têm a dizer sobre sua experiência em
          apoiar a causa animal através da nossa comunidade de apoiadores.
        </p>
      </div>

      <Carousel
        opts={{
          align: 'start',
        }}
        className="relative w-full"
      >
        <CarouselContent className="ml-0 flex items-center gap-12">
          <CarouselItem className="h-[332px] max-w-[424px] overflow-hidden rounded-lg border-[4px] border-yellow-400 px-6 py-8">
            <div className="flex flex-col gap-4">
              <span className="flex items-center gap-4">
                <Quote />
                <span className="font-rubik text-lg font-semibold">
                  Ana Rodrigues (Rações especiais)
                </span>
              </span>
              <span className="text-zinc-800">
                Desde que me tornei patrocinador deste site dedicado à causa
                animal, minha visão sobre o impacto que podemos ter na vida dos
                animais mudou profundamente. Ao contribuir regularmente,
                sinto-me parte de algo maior, algo que transcende meu dia a dia.
                Ver o progresso, os resgates realizados e as histórias de
                sucesso de animais salvos enche meu coração de gratidão e
                esperança.
              </span>
            </div>
          </CarouselItem>

          <CarouselItem className="h-[332px] max-w-[424px] overflow-hidden rounded-lg border-[4px] border-yellow-400 px-6 py-8">
            <div className="flex flex-col gap-4">
              <span className="flex items-center gap-4">
                <Quote />
                <span className="font-rubik text-lg font-semibold">
                  Marco Flores (PetNosso)
                </span>
              </span>
              <span className="text-zinc-800">
                Como patrocinador do Oh My Dog, testemunhei em primeira mão o
                poder da comunidade unida em prol de uma causa nobre. Cada
                contribuição, por menor que seja, faz a diferença na vida dos
                animais necessitados. É uma honra fazer parte dessa rede de
                apoio e ver o impacto positivo que podemos alcançar juntos.
              </span>
            </div>
          </CarouselItem>

          <CarouselItem className="h-[332px] max-w-[424px] overflow-hidden rounded-lg border-[4px] border-yellow-400 px-6 py-8">
            <div className="flex flex-col gap-4">
              <span className="flex items-center gap-4">
                <Quote />
                <span className="font-rubik text-lg font-semibold">
                  Jessica Campos (Banho & Pets)
                </span>
              </span>
              <span className="text-zinc-800">
                Ser um patrocinador do Oh My Dog tem sido uma jornada
                emocionante e gratificante. Ao apoiar financeiramente as
                iniciativas em prol dos animais, sinto-me conectado a uma
                comunidade comprometida com a compaixão e o cuidado com os seres
                mais vulneráveis. Cada doação é um ato de amor que contribui
                para um mundo melhor para nossos amigos de quatro patas.
              </span>
            </div>
          </CarouselItem>

          <CarouselItem className="h-[332px] max-w-[424px] overflow-hidden rounded-lg border-[4px] border-yellow-400 px-6 py-8">
            <div className="flex flex-col gap-4">
              <span className="flex items-center gap-4">
                <Quote />
                <span className="font-rubik text-lg font-semibold">
                  Bruna Ramos (Pet & Pets)
                </span>
              </span>
              <span className="text-zinc-800">
                Minha experiência como patrocinador dedicado à causa animal tem
                sido enriquecedora em muitos aspectos. Além de proporcionar
                recursos financeiros para resgates e tratamentos veterinários,
                essa jornada me ensinou sobre empatia, solidariedade e
                responsabilidade social. Estou orgulhoso de fazer parte dessa
                missão de proteger e cuidar dos animais em situação de risco
              </span>
            </div>
          </CarouselItem>

          <CarouselItem className="h-[332px] max-w-[424px] overflow-hidden rounded-lg border-[4px] border-yellow-400 px-6 py-8">
            <div className="flex flex-col gap-4">
              <span className="flex items-center gap-4">
                <Quote />
                <span className="font-rubik text-lg font-semibold">
                  Ramon Garcia (PetShop sim)
                </span>
              </span>
              <span className="text-zinc-800">
                Como patrocinador deste site de doações para a causa animal,
                tenho testemunhado o poder transformador da generosidade humana.
                Cada contribuição que faço é um investimento no bem-estar dos
                animais e na construção de um mundo mais compassivo e justo. É
                uma experiência gratificante saber que estou fazendo a diferença
                na vida de tantos seres indefesos.
              </span>
            </div>
          </CarouselItem>
        </CarouselContent>

        <div className="absolute -bottom-12 right-12 w-6">
          <CarouselPrevious className="h-12 w-12" />
          <CarouselNext className="h-12 w-12" />
        </div>
      </Carousel>
    </div>
  )
}
