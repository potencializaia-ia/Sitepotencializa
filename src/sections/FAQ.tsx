import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const faqItems = [
  {
    question: 'O que é a Potencializa?',
    answer: 'A Potencializa é uma agência especializada em inteligência artificial e automação, que transforma atendimento, vendas e processos internos em sistemas inteligentes integrados ao WhatsApp, Instagram, CRM e outras plataformas.',
  },
  {
    question: 'Como a IA da Potencializa funciona na prática?',
    answer: 'Desenvolvemos agentes de IA treinados com dados do seu negócio, capazes de atender clientes, qualificar leads, responder dúvidas, registrar informações, agendar serviços e fazer sua empresa operar automaticamente 24 horas por dia, 7 dias por semana.',
  },
  {
    question: 'A IA pode vender e converter clientes?',
    answer: 'Sim. Nossas soluções conduzem o lead pelo funil, identificam necessidades, apresentam ofertas, realizam agendamentos automáticos e direcionam o cliente para o fechamento ou para o time comercial.',
  },
  {
    question: 'A Potencializa trabalha apenas com atendimento?',
    answer: 'Não. Desenvolvemos soluções de IA para diversas áreas, como vendas, marketing, suporte, RH, financeiro, operações, análise de dados e processos internos, entre outras.',
  },
  {
    question: 'Preciso trocar meus sistemas atuais?',
    answer: 'Não. Integramos a IA aos sistemas que você já utiliza, desde que eles possuam API disponível para integração, como CRMs, ERPs, plataformas de marketing, sistemas internos e ferramentas personalizadas.',
  },
  {
    question: 'A IA é personalizada para o meu negócio?',
    answer: 'Sim. Todas as soluções são desenvolvidas sob medida, com fluxos, linguagem, regras e processos adaptados à realidade da sua empresa.',
  },
];

export function FAQ() {
  return (
    <section className="pt-20 pb-20 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Header */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <SectionBadge text="FAQ" className="mb-6" />
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2D4A] mb-4">
                Perguntas frequentes
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-lg text-[#2D2D4A]/70 mb-8">
                Esclareça suas dúvidas e descubra como a Potencializa pode transformar seu negócio.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <Button
                size="lg"
                className="bg-[#2D2D4A] hover:bg-[#3D3D5A] text-white px-8 py-6 text-base font-medium rounded-lg transition-all hover:scale-105"
              >
                Fale com um consultor
              </Button>
            </AnimatedSection>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:col-span-2">
            <StaggerContainer>
              <Accordion type="single" collapsible className="space-y-3">
                {faqItems.map((item, index) => (
                  <StaggerItem key={index}>
                    <AccordionItem
                      value={`item-${index}`}
                      className="bg-white rounded-xl px-6 border-none shadow-sm"
                    >
                      <AccordionTrigger className="text-left text-[#2D2D4A] font-medium hover:no-underline py-5">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-[#2D2D4A]/70 pb-5 leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </StaggerItem>
                ))}
              </Accordion>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
