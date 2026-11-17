import type { ReactNode } from "react";
import { Lock, ShieldCheck, Eye, Wrench, Smartphone, Monitor, Search, CalendarCheck } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { SectionBadge } from "@/components/SectionBadge";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

function Tile({ title, text, children, className = "" }: { title: string; text: string; children: ReactNode; className?: string }) {
  return (
    <div
      className={`group relative h-full flex flex-col rounded-[28px] border border-white/10 bg-white/[0.04] overflow-hidden hover:border-[#ff851b]/30 hover:bg-white/[0.06] transition-colors duration-500 ${className}`}
    >
      <div className="relative flex-1 flex items-center justify-center p-6 sm:p-8 min-h-[170px]">{children}</div>
      <div className="relative px-6 sm:px-8 pb-7">
        <h3 className="text-xl font-bold text-white mb-1.5">{title}</h3>
        <p className="text-sm text-white/55 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

export function Benefits() {
  return (
    <section className="py-16 md:py-20 bg-[#0a0a0a] bg-section-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark mask-fade-y pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <SectionBadge text="Incluso em todo projeto" className="mb-6 bg-white/5 border-white/10 text-white/80" />
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
              Tudo o que seu site precisa, <span className="text-[#ff851b]">já incluso.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-white/55 leading-relaxed">
              Os detalhes técnicos que fazem um site funcionar de verdade, sem custo extra e sem você precisar entender de tecnologia.
            </p>
          </AnimatedSection>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-6 gap-5">
          {/* SEGURANÇA, destaque */}
          <StaggerItem className="md:col-span-4">
            <Tile
              title="Seguro desde o primeiro dia"
              text="Conexão protegida, o famoso cadeado no navegador, e boas práticas para proteger seu site e os dados dos seus clientes."
            >
              <div className="w-full max-w-md space-y-4">
                <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)]">
                  <span className="w-8 h-8 rounded-lg bg-[#28c840]/15 flex items-center justify-center">
                    <Lock className="w-4 h-4 text-[#1a9e35]" />
                  </span>
                  <span className="text-sm font-semibold text-[#2D2D4A]">
                    <span className="text-[#1a9e35]">https://</span>suaempresa.com.br
                  </span>
                  <span className="ml-auto text-[10px] font-bold uppercase tracking-wider text-[#1a9e35] bg-[#28c840]/10 rounded-full px-2 py-1">
                    Seguro
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { icon: ShieldCheck, label: "SSL ativo" },
                    { icon: Eye, label: "Monitorado" },
                    { icon: Wrench, label: "Correções rápidas" },
                  ].map((c) => (
                    <div key={c.label} className="flex flex-col items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] py-3">
                      <c.icon className="w-4 h-4 text-[#7fdbff]" />
                      <span className="text-[11px] font-semibold text-white/70 text-center">{c.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Tile>
          </StaggerItem>

          {/* WHATSAPP */}
          <StaggerItem className="md:col-span-2">
            <Tile title="Direto no WhatsApp" text="Um toque e o visitante já está conversando com você, com a mensagem pronta.">
              <div className="w-full max-w-[240px] space-y-2">
                <div className="flex items-center gap-2 text-[11px] font-semibold text-white/50">
                  <SiWhatsapp className="w-3.5 h-3.5 text-[#25D366]" /> Nova mensagem
                </div>
                <div className="rounded-2xl rounded-tl-md bg-[#25D366] px-4 py-3 text-sm font-medium text-white shadow-lg shadow-[#25D366]/20">
                  Olá! Vim pelo site e quero um orçamento 😊
                </div>
              </div>
            </Tile>
          </StaggerItem>

          {/* RESPONSIVO */}
          <StaggerItem className="md:col-span-2">
            <Tile title="Perfeito em qualquer tela" text="No celular, no tablet ou no computador, seu site fica bonito e fácil de usar.">
              <div className="flex items-end gap-3">
                <div className="w-28 h-20 rounded-lg border-2 border-white/25 bg-white/[0.06] p-1.5 flex flex-col gap-1">
                  <span className="h-1.5 w-1/2 rounded bg-[#ff851b]" />
                  <span className="flex-1 rounded bg-white/10" />
                </div>
                <div className="w-11 h-20 rounded-lg border-2 border-white/25 bg-white/[0.06] p-1 flex flex-col gap-1">
                  <span className="h-1.5 w-2/3 rounded bg-[#ff851b]" />
                  <span className="flex-1 rounded bg-white/10" />
                </div>
                <div className="flex flex-col gap-2 ml-1 text-white/40">
                  <Monitor className="w-4 h-4" />
                  <Smartphone className="w-4 h-4" />
                </div>
              </div>
            </Tile>
          </StaggerItem>

          {/* GOOGLE */}
          <StaggerItem className="md:col-span-2">
            <Tile title="Pronto para o Google" text="Estrutura otimizada e carregamento rápido para o seu negócio ser encontrado.">
              <div className="w-full max-w-[260px] rounded-2xl bg-white p-4 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)]">
                <div className="flex items-center gap-2 rounded-full border border-[#2D2D4A]/10 px-3 py-1.5 mb-3">
                  <Search className="w-3.5 h-3.5 text-[#2D2D4A]/40" />
                  <span className="text-[11px] text-[#2D2D4A]/60">sua empresa perto de mim</span>
                </div>
                <p className="text-[10px] text-[#2D2D4A]/45">suaempresa.com.br</p>
                <p className="text-sm font-semibold text-[#1a56db] leading-tight">Sua Empresa | Site oficial</p>
                <span className="mt-1.5 block h-1.5 w-[85%] rounded bg-[#2D2D4A]/10" />
              </div>
            </Tile>
          </StaggerItem>

          {/* ACOMPANHAMENTO */}
          <StaggerItem className="md:col-span-2">
            <Tile title="1º mês de acompanhamento" text="Depois da entrega, seguimos por perto um mês inteiro, sem custo, resolvendo o que precisar.">
              <div className="relative">
                <div className="absolute inset-0 bg-[#ff851b]/30 blur-2xl rounded-full" />
                <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-[#ff851b] to-[#e07316] flex flex-col items-center justify-center shadow-[0_20px_40px_rgba(255,133,27,0.35)]">
                  <CalendarCheck className="w-6 h-6 text-white mb-1" />
                  <span className="font-display text-2xl font-extrabold text-white leading-none">30</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/85">dias</span>
                </div>
              </div>
            </Tile>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
