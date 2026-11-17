import { whatsappLink } from '@/lib/contact';
import { faqItems } from '@/data/faq';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SectionBadge } from '@/components/SectionBadge';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';


export function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Left Column - Header */}
          <div className="lg:sticky lg:top-24 lg:self-start text-center lg:text-left">
            <SectionBadge text="FAQ" className="mb-6" />
            <AnimatedSection>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#2D2D4A] mb-4">
                Perguntas frequentes
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-lg text-[#2D2D4A]/70 mb-8">
                Tudo o que você precisa saber antes de começar o seu site. Ficou alguma dúvida? Fale com a gente.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <a
                href={whatsappLink('Olá! Tenho uma dúvida sobre a criação de sites.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-14 px-8 rounded-2xl bg-[#2D2D4A] hover:bg-[#1a1a2e] text-white font-bold transition-all hover:-translate-y-0.5"
              >
                Falar no WhatsApp
              </a>
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
                      className="bg-[#F5F5F7] rounded-2xl px-5 sm:px-6 border border-transparent data-[state=open]:bg-white data-[state=open]:border-[#ff851b]/30 data-[state=open]:shadow-[0_20px_40px_-25px_rgba(45,45,74,0.35)] transition-all"
                    >
                      <AccordionTrigger className="text-left text-[#2D2D4A] text-base font-semibold hover:no-underline py-5">
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
