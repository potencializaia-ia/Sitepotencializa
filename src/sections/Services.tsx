import { Building2, LayoutTemplate, RefreshCcw, Bot, Check, Target, MessageCircle, Sparkles, ArrowRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { SectionBadge } from "@/components/SectionBadge";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { BrowserFrame, MockSite } from "@/components/BrowserFrame";
import { whatsappLink } from "@/lib/contact";
import { useScrollHighlight } from "@/hooks/use-scroll-highlight";

interface TypeCardProps {
  icon: typeof Building2;
  eyebrow: string;
  title: string;
  description: string;
  idealFor: string;
  bullets: string[];
  mock: { accent: string; variant: number; url: string; title: string };
}

function TypeCard({ icon: Icon, eyebrow, title, description, idealFor, bullets, mock }: TypeCardProps) {
  const [ref, active] = useScrollHighlight<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`group relative h-full flex flex-col rounded-[28px] border bg-white overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_rgba(45,45,74,0.25)] hover:border-[#ff851b]/30 ${
        active ? "-translate-y-1 shadow-[0_30px_60px_-20px_rgba(45,45,74,0.25)] border-[#ff851b]/30" : "border-[#2D2D4A]/[0.07]"
      }`}
    >
      <div className="relative px-8 pt-8 pb-0 bg-gradient-to-b from-[#F5F5F7] to-white">
        <div className="absolute inset-x-10 top-10 h-40 bg-[#ff851b]/10 blur-3xl rounded-full" />
        <BrowserFrame
          url={mock.url}
          className={`relative shadow-[0_20px_40px_-20px_rgba(45,45,74,0.35)] group-hover:translate-y-0 transition-transform duration-700 ${active ? "translate-y-0" : "translate-y-3"}`}
        >
          <MockSite accent={mock.accent} variant={mock.variant} title={mock.title} />
        </BrowserFrame>
      </div>

      <div className="flex-1 flex flex-col p-8 pt-9">
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-11 h-11 rounded-2xl flex items-center justify-center group-hover:bg-[#ff851b] transition-colors duration-500 ${active ? "bg-[#ff851b]" : "bg-[#ff851b]/10"}`}>
            <Icon className={`w-5 h-5 group-hover:text-white transition-colors duration-500 ${active ? "text-white" : "text-[#ff851b]"}`} />
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#ff851b]">{eyebrow}</p>
            <h3 className="text-2xl font-bold text-[#2D2D4A] leading-tight">{title}</h3>
          </div>
        </div>
        <p className="text-[#2D2D4A]/60 leading-relaxed mb-5">{description}</p>
        <ul className="space-y-2 mb-6 flex-1">
          {bullets.map((t) => (
            <li key={t} className="flex items-start gap-2 text-sm font-medium text-[#2D2D4A]/70">
              <Check className="w-4 h-4 text-[#7fdbff] shrink-0 mt-0.5" /> {t}
            </li>
          ))}
        </ul>
        <div className="flex items-start gap-3 rounded-2xl bg-[#F5F5F7] px-4 py-3">
          <Target className="w-4 h-4 text-[#ff851b] shrink-0 mt-0.5" />
          <p className="text-sm text-[#2D2D4A]/70">
            <span className="font-bold text-[#2D2D4A]">Ideal para </span>
            {idealFor}
          </p>
        </div>
      </div>
    </div>
  );
}

const aiSteps = [
  { title: "O visitante pergunta", text: "Preço, horário, como funciona: ele tira a dúvida na hora, sem esperar." },
  { title: "A IA responde", text: "Com as informações do seu negócio, no tom da sua marca, a qualquer hora." },
  { title: "O cliente chega no WhatsApp", text: "Quem está pronto para comprar é encaminhado direto para você fechar." },
];

function ChatMock() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="absolute inset-6 bg-[#ff851b]/25 blur-3xl rounded-full" />
      <div className="relative rounded-[24px] bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3 bg-[#2D2D4A]">
          <div className="w-9 h-9 rounded-full bg-[#ff851b] flex items-center justify-center">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-bold text-white">Assistente virtual</p>
            <p className="text-[11px] text-[#7fdbff] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#28c840]" /> Online agora
            </p>
          </div>
        </div>
        <div className="p-4 space-y-3 bg-[#F5F5F7] text-sm">
          <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-[#2D2D4A] text-white px-3.5 py-2.5">
            Vocês atendem aos sábados?
          </div>
          <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-white text-[#2D2D4A] px-3.5 py-2.5 shadow-sm">
            Sim! Aos sábados atendemos das 8h às 12h. Quer que eu reserve um horário para você?
          </div>
          <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-[#2D2D4A] text-white px-3.5 py-2.5">Quero sim!</div>
          <div className="flex items-center gap-2 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 px-3.5 py-2.5 text-[#128C4B] font-semibold">
            <SiWhatsapp className="w-4 h-4 shrink-0" />
            Te levando para o WhatsApp da equipe...
          </div>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="servicos" className="py-16 md:py-20 bg-[#F5F5F7] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-light mask-fade-y pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-10 md:mb-12 mx-auto md:mx-0 text-center md:text-left">
          <SectionBadge text="O que construímos" className="mb-6" />
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#2D2D4A] mb-5">
              Um site para cada <span className="text-[#ff851b]">momento do seu negócio.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-[#2D2D4A]/60 leading-relaxed">
              Site profissional ou landing page? A diferença não está no tamanho, e sim no objetivo. Entenda qual combina com o que você
              precisa agora.
            </p>
          </AnimatedSection>
        </div>

        {/* 1. COMPARAÇÃO LADO A LADO */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <StaggerItem>
            <TypeCard
              icon={Building2}
              eyebrow="Presença completa"
              title="Site Profissional"
              description="O endereço oficial da sua empresa na internet. Mostra quem você é, o que oferece, onde está e por que escolher você."
              bullets={[
                "Sua empresa apresentada com credibilidade",
                "Serviços, diferenciais, fotos e localização",
                "Vários caminhos para o visitante explorar",
              ]}
              idealFor="ter a vitrine oficial do seu negócio e ser encontrado no Google."
              mock={{ accent: "#ff851b", variant: 0, url: "suaempresa.com.br", title: "Sua Empresa" }}
            />
          </StaggerItem>
          <StaggerItem>
            <TypeCard
              icon={LayoutTemplate}
              eyebrow="Foco em uma ação"
              title="Landing Page"
              description="Uma página com um único objetivo: fazer o visitante agir. Sem distrações, todo o conteúdo leva a um clique no WhatsApp, um agendamento ou uma compra."
              bullets={["Uma oferta, uma mensagem, um botão", "Perfeita para anúncios e campanhas", "Pronta em até 1 semana"]}
              idealFor="divulgar um serviço, uma promoção ou um lançamento e receber quem chega pelos anúncios."
              mock={{ accent: "#7fdbff", variant: 1, url: "promocao.suaempresa.com.br", title: "Oferta" }}
            />
          </StaggerItem>
        </StaggerContainer>

        {/* 2. DIFERENCIAL: AGENTE DE IA */}
        <AnimatedSection delay={0.1} className="mt-5">
          <div className="relative overflow-hidden rounded-[28px] bg-[#0F172A] bg-section-gradient border border-white/10 p-8 sm:p-12 grid lg:grid-cols-[1.25fr_1fr] gap-12 items-center">
            <div className="absolute inset-0 bg-grid-dark mask-fade-y pointer-events-none" />
            <div className="absolute -top-24 right-1/3 w-80 h-80 bg-[#ff851b]/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ff851b] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  <Sparkles className="w-3.5 h-3.5" /> Nosso diferencial
                </span>
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/75">
                  Para Site Profissional e Landing Page
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Um atendente no seu site, <span className="text-gradient-brand">24 horas por dia.</span>
              </h3>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Adicione um agente de IA treinado com as informações do seu negócio. Ele conversa com quem visita o seu site, tira dúvidas
                na hora e não deixa nenhum interessado ir embora sem resposta, mesmo de madrugada ou no fim de semana.
              </p>

              <ol className="grid sm:grid-cols-3 gap-4">
                {aiSteps.map((step, i) => (
                  <li key={step.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <span className="inline-flex w-7 h-7 rounded-lg bg-[#ff851b]/15 text-[#ff851b] text-sm font-extrabold items-center justify-center mb-3">
                      {i + 1}
                    </span>
                    <p className="font-bold text-white text-sm mb-1">{step.title}</p>
                    <p className="text-xs text-white/50 leading-relaxed">{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="relative">
              <ChatMock />
            </div>
          </div>
        </AnimatedSection>

        {/* 3. NOTA: REDESIGN */}
        <AnimatedSection delay={0.1} className="mt-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-[24px] border border-dashed border-[#2D2D4A]/20 bg-white/60 px-6 py-5">
            <div className="shrink-0 w-10 h-10 rounded-xl bg-[#ff851b]/10 flex items-center justify-center">
              <RefreshCcw className="w-5 h-5 text-[#ff851b]" />
            </div>
            <p className="flex-1 text-sm sm:text-base text-[#2D2D4A]/70 leading-relaxed">
              <span className="font-bold text-[#2D2D4A]">Já tem um site? </span>
              Também fazemos <span className="font-semibold text-[#2D2D4A]">redesign</span>: modernizamos o visual, a velocidade e a
              experiência, sem perder o que já funciona.
            </p>
            <a
              href={whatsappLink("Olá! Já tenho um site e quero modernizar.")}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-1.5 text-sm font-bold text-[#ff851b] hover:gap-2.5 transition-all"
            >
              <MessageCircle className="w-4 h-4" /> Quero modernizar <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
