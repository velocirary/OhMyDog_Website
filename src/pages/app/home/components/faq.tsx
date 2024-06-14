import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function Faq() {
  return (
    <section className="flex flex-col items-center justify-center gap-20 pb-32 pt-10">
      <div className="text-center">
        <h1 className="font-rubik text-7xl font-semibold">
          Duvidas frequentes
        </h1>
        <p className="mx-auto block max-w-5xl py-8 text-lg font-medium leading-relaxed text-zinc-500">
          Veja abaixo as dúvidas frequentes que algumas pessoas tiveram que
          podem ser provavelmente a sua também, mas não deixe de ajudar a causa
          animal.
        </p>
      </div>

      <div className="flex w-full flex-col gap-6">
        <Accordion type="single" collapsible className="w-full space-y-12">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-rubik text-2xl text-zinc-800">
              Fazer uma doação
            </AccordionTrigger>
            <AccordionContent className="py-8 text-lg font-medium leading-relaxed text-zinc-500">
              Para fazer uma doação, basta criar uma conta acessar a área de
              postagens e escolher uma para realizar a postagem e fazer uma
              doação do valor que quiser, toda doação sempre será bem vinda para
              nossa causa e você estará ajudando diretamente o animal escolhido
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="font-rubik text-2xl text-zinc-800">
              O que e o Oh My Dog?
            </AccordionTrigger>
            <AccordionContent className="py-8 text-lg font-medium leading-relaxed text-zinc-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, quia? Voluptate beatae voluptatum a qui dolor
              quisquam id perspiciatis? Error voluptate odit molestiae quis
              alias earum a consequuntur. Quia, id!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="font-rubik text-2xl text-zinc-800">
              Por que doar?
            </AccordionTrigger>
            <AccordionContent className="py-8 text-lg font-medium leading-relaxed text-zinc-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, quia? Voluptate beatae voluptatum a qui dolor
              quisquam id perspiciatis? Error voluptate odit molestiae quis
              alias earum a consequuntur. Quia, id!
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="font-rubik text-2xl text-zinc-800">
              Vantagens de fazer uma doação
            </AccordionTrigger>
            <AccordionContent className="py-8 text-lg font-medium leading-relaxed text-zinc-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, quia? Voluptate beatae voluptatum a qui dolor
              quisquam id perspiciatis? Error voluptate odit molestiae quis
              alias earum a consequuntur. Quia, id!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
