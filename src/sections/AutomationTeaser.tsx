import { Link } from "react-router-dom";
import { ArrowUpRight, Cpu, MessageSquare, Settings } from "lucide-react";
import { SectionBadge } from "@/components/SectionBadge";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const items = [
  {
    icon: MessageSquare,
    title: "Automação Comercial",
    desc: "Agentes de IA que atendem, qualificam e fazem follow-up dos leads que chegam pelo site e pelo WhatsApp, 24h por dia.",
    href: "/servicos/automacao-comercial",
  },
  {
    icon: Cpu,
    title: "Imersão Potencializa",
    desc: "Mapeamos seus processos e treinamos sua equipe para trabalhar com mais clareza, produtividade e tecnologia.",
    href: "/servicos/imersao-potencializa",
  },
  {
    icon: Settings,
    title: "Hiperautomação Empresarial",
    desc: "Sistemas sob medida que conectam áreas, integram ferramentas e centralizam os dados da sua gestão.",
    href: "/servicos/hiperautomacao-personalizada",
  },
];

export function AutomationTeaser() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
          <div>
            <SectionBadge text="Além de sites" className="mb-6" />
            <AnimatedSection>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#2D2D4A] mb-5">
                Seu site é só o <span className="text-[#ff851b]">começo.</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-lg text-[#2D2D4A]/60 leading-relaxed">
                Nascemos da automação e da inteligência artificial. Quando sua empresa estiver pronta para o próximo passo,
                conectamos o site a uma operação mais inteligente.
              </p>
            </AnimatedSection>
          </div>

          <StaggerContainer className="grid gap-4">
            {items.map((item) => (
              <StaggerItem key={item.title}>
                <Link
                  to={item.href}
                  className="group flex items-start sm:items-center gap-5 rounded-[24px] border border-[#2D2D4A]/[0.07] p-6 sm:p-7 hover:border-[#ff851b]/30 hover:bg-[#F9F9FB] transition-all duration-500"
                >
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-[#2D2D4A] group-hover:bg-[#ff851b] flex items-center justify-center transition-colors duration-500">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#2D2D4A] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#2D2D4A]/60 leading-relaxed">{item.desc}</p>
                  </div>
                  <ArrowUpRight className="hidden sm:block shrink-0 w-5 h-5 text-[#2D2D4A]/25 group-hover:text-[#ff851b] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
