import { MessagesSquare, PenTool, Code2, Rocket, ShieldCheck } from "lucide-react";
import { SectionBadge } from "@/components/SectionBadge";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { useScrollHighlight } from "@/hooks/use-scroll-highlight";

const steps = [
  {
    number: "01",
    label: "Briefing",
    title: "Entendemos seu negócio",
    description: "Conversamos sobre seus objetivos, público, concorrentes e referências para definir a estrutura ideal do site.",
    icon: MessagesSquare,
  },
  {
    number: "02",
    label: "Design",
    title: "Criamos o visual",
    description: "Criamos o visual com a identidade da sua marca e mostramos uma prévia navegável do site para você aprovar e pedir ajustes.",
    icon: PenTool,
  },
  {
    number: "03",
    label: "Desenvolvimento",
    title: "Finalizamos cada detalhe",
    description: "Com o visual aprovado, deixamos o site rápido, perfeito no celular, seguro e com a estrutura pronta para o Google.",
    icon: Code2,
  },
  {
    number: "04",
    label: "Publicação",
    title: "Colocamos no ar",
    description: "Configuramos seu domínio, testamos tudo e publicamos. O primeiro mês de acompanhamento já está incluso.",
    icon: Rocket,
  },
  {
    number: "05",
    label: "Acompanhamento",
    tag: "Contratado à parte",
    title: "Cuidamos do seu site",
    description: "Depois do primeiro mês, seguimos com você no acompanhamento mensal: segurança, ajustes, atualizações e correções, sem dor de cabeça.",
    icon: ShieldCheck,
  },
];

function StepCard({ step }: { step: (typeof steps)[number] }) {
  const [ref, active] = useScrollHighlight<HTMLDivElement>();
  return (
                  <div ref={ref}
      className={`group relative flex gap-6 rounded-[24px] p-6 sm:p-7 border bg-white hover:border-[#ff851b]/30 hover:shadow-[0_24px_50px_-24px_rgba(45,45,74,0.3)] transition-all duration-500 ${
        active ? "border-[#ff851b]/30 shadow-[0_24px_50px_-24px_rgba(45,45,74,0.3)]" : "border-[#2D2D4A]/[0.07]"
      }`}>
                    <div className={`relative z-10 shrink-0 w-14 h-14 rounded-2xl group-hover:bg-[#ff851b] ${active ? "bg-[#ff851b]" : "bg-[#2D2D4A]"} flex items-center justify-center transition-colors duration-500 shadow-lg shadow-[#2D2D4A]/10`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-1.5">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#ff851b]">{step.label}</span>
                        <span className="text-xs font-bold text-[#2D2D4A]/25">{step.number}</span>
                        {"tag" in step && (
                          <span className="sm:ml-auto whitespace-nowrap rounded-full bg-[#7fdbff]/20 border border-[#7fdbff]/40 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#1f6f8f]">
                            {step.tag}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-[#2D2D4A] mb-2">{step.title}</h3>
                      <p className="text-[#2D2D4A]/60 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
  );
}

export function Methodology() {
  return (
    <section id="processo" className="py-16 md:py-20 bg-white relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-32 text-center lg:text-left">
            <SectionBadge text="Como funciona" className="mb-6" />
            <AnimatedSection>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#2D2D4A] mb-5">
                Do briefing ao <br />
                site <span className="text-[#ff851b]">no ar.</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-lg text-[#2D2D4A]/60 leading-relaxed mb-8">
                Um processo simples e transparente, em que você acompanha e aprova cada etapa. Sem surpresas, sem complicação técnica.
              </p>
              <div className="inline-flex items-center gap-3 rounded-2xl bg-[#F5F5F7] px-5 py-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7fdbff] animate-pulse" />
                <span className="text-sm font-semibold text-[#2D2D4A]/70">
                  Seu site no ar em até 2 semanas
                </span>
              </div>
            </AnimatedSection>
          </div>

          <StaggerContainer className="relative min-w-0">
            <div className="absolute left-7 top-8 bottom-8 w-px bg-gradient-to-b from-[#ff851b] via-[#7fdbff] to-transparent hidden sm:block" />
            <div className="space-y-5">
              {steps.map((step) => (
                <StaggerItem key={step.number}>
                  <StepCard step={step} />
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
