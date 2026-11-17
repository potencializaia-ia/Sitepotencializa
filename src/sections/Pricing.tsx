import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Clock, Check, LayoutTemplate, Globe, Bot, ArrowRight, ShieldCheck, Gift, BadgePercent, Hand } from "lucide-react";
import { SiWix } from "react-icons/si";
import { SectionBadge } from "@/components/SectionBadge";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { whatsappLink } from "@/lib/contact";

const plans = [
  {
    badge: "Mais escolhido",
    name: "Site Profissional",
    price: "R$ 300",
    description: "O endereço oficial da sua empresa na internet, com a cara da sua marca.",
    time: "Até 2 semanas",
    icon: Globe,
    highlighted: true,
    cta: "Quero meu site",
    message: "Olá! Quero criar o site profissional da minha empresa.",
    features: [
      "Design personalizado e responsivo",
      "Visitante levado direto ao seu WhatsApp, com mensagem pronta",
      "Vários caminhos: sobre, serviços, fotos e localização",
      "Estrutura pronta para o Google",
      "Segurança configurada (HTTPS)",
      "1º mês de acompanhamento incluso",
    ],
  },
  {
    badge: "Para divulgar",
    name: "Landing Page",
    price: "R$ 150",
    description: "Uma página com um único objetivo: levar o visitante a agir, sem distrações.",
    time: "Até 1 semana",
    icon: LayoutTemplate,
    highlighted: false,
    cta: "Quero uma landing page",
    message: "Olá! Quero uma landing page para o meu negócio.",
    features: [
      "Página única focada em uma ação",
      "Design personalizado e responsivo",
      "Visitante levado direto ao seu WhatsApp",
      "Estrutura pronta para o Google",
      "1º mês de acompanhamento incluso",
    ],
  },
];

const wixFeatures = [
  "Seu endereço próprio na internet (ex.: suaempresa.com.br) por 1 ano",
  "Desconto exclusivo pelo nosso link de parceiro",
  "Registrado no seu nome, o domínio é seu",
  "A gente configura tudo e conecta ao seu site",
];

const careItems = [
  {
    icon: ShieldCheck,
    name: "Acompanhamento mensal",
    price: "R$ 100",
    period: "/mês",
    features: ["Segurança e monitoramento", "Microajustes e edições de conteúdo", "Correção de problemas", "Suporte direto pelo WhatsApp"],
  },
  {
    icon: Bot,
    name: "Agente de IA",
    price: "+ R$ 50",
    period: "/mês",
    features: ["Atendimento no site 24 horas", "Respostas sobre o seu negócio", "Interessados enviados ao WhatsApp", "Ajustes inclusos no acompanhamento"],
  },
];

type Plan = (typeof plans)[number];

function PlanCard({ plan, compact = false }: { plan: Plan; compact?: boolean }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className={`relative flex flex-col h-full rounded-[28px] ${compact ? "p-5" : "p-6 sm:p-8 md:p-10"} border transition-shadow duration-500 ${
        plan.highlighted
          ? `bg-[#0F172A] bg-section-gradient border-white/10 ${
              compact ? "shadow-[0_18px_36px_-16px_rgba(15,23,42,0.5)]" : "shadow-[0_40px_80px_-30px_rgba(15,23,42,0.6)]"
            }`
          : "bg-white border-[#2D2D4A]/[0.07] hover:shadow-[0_30px_60px_-30px_rgba(45,45,74,0.3)]"
      }`}
    >
      <div className={`flex items-center justify-between ${compact ? "mb-4" : "mb-6"}`}>
        <div className={`${compact ? "w-10 h-10 rounded-xl" : "w-12 h-12 rounded-2xl"} flex items-center justify-center ${plan.highlighted ? "bg-[#ff851b]" : "bg-[#ff851b]/10"}`}>
          <plan.icon className={`${compact ? "w-5 h-5" : "w-6 h-6"} ${plan.highlighted ? "text-white" : "text-[#ff851b]"}`} />
        </div>
        <span
          className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${
            plan.highlighted ? "bg-[#ff851b] text-white" : "bg-[#F5F5F7] text-[#2D2D4A]/60"
          }`}
        >
          {plan.badge}
        </span>
      </div>

      <h3 className={`${compact ? "text-xl mb-1" : "text-2xl mb-3"} font-bold ${plan.highlighted ? "text-white" : "text-[#2D2D4A]"}`}>{plan.name}</h3>
      {!compact && (
        <p className={`text-sm leading-relaxed mb-6 ${plan.highlighted ? "text-white/60" : "text-[#2D2D4A]/60"}`}>
          {plan.description}
        </p>
      )}

      <div className={compact ? "mb-4" : "mb-6"}>
        <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${plan.highlighted ? "text-white/50" : "text-[#2D2D4A]/45"}`}>
          a partir de
        </p>
        <span className={`font-display ${compact ? "text-3xl" : "text-4xl"} font-extrabold tracking-tight ${plan.highlighted ? "text-white" : "text-[#2D2D4A]"}`}>
          {plan.price}
        </span>
        <p className={`${compact ? "mt-1 text-[11px]" : "mt-2 text-xs"} leading-relaxed ${plan.highlighted ? "text-white/55" : "text-[#2D2D4A]/50"}`}>
          Desenvolvimento do site. Domínio à parte.
        </p>
      </div>

      <div className={`flex items-center gap-2 ${compact ? "px-3 py-2 mb-4" : "px-4 py-2.5 mb-8"} rounded-xl w-fit ${plan.highlighted ? "bg-white/10" : "bg-[#F5F5F7]"}`}>
        <Clock className="w-4 h-4 text-[#ff851b]" />
        <span className={`text-sm font-bold ${plan.highlighted ? "text-white" : "text-[#2D2D4A]"}`}>{plan.time}</span>
      </div>

      <ul className={`flex-1 ${compact ? "space-y-2 mb-5" : "space-y-3 mb-10"}`}>
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span
              className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                plan.highlighted ? "bg-[#ff851b]/20" : "bg-[#7fdbff]/25"
              }`}
            >
              <Check className={`w-3 h-3 ${plan.highlighted ? "text-[#ff851b]" : "text-[#2D2D4A]"}`} />
            </span>
            <span className={`${compact ? "text-[13px] leading-snug" : "text-sm"} font-medium ${plan.highlighted ? "text-white/85" : "text-[#2D2D4A]/75"}`}>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={whatsappLink(plan.message)}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full ${compact ? "h-12 text-sm" : "h-14"} rounded-2xl font-bold flex items-center justify-center gap-2 group transition-all ${
          plan.highlighted
            ? "bg-[#ff851b] hover:bg-[#e07316] text-white shadow-lg shadow-orange-500/25"
            : "bg-[#F5F5F7] hover:bg-[#2D2D4A] text-[#2D2D4A] hover:text-white"
        }`}
      >
        {plan.cta}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </motion.div>
  );
}

function WixCard({ compact = false }: { compact?: boolean }) {
  // O link de parceiro da Wix é gerado na hora para cada cliente, então o botão pede pelo WhatsApp.
  const href = whatsappLink("Olá! Quero o link de parceiro para comprar meu domínio na Wix com desconto.");
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className={`relative flex flex-col h-full rounded-[28px] ${compact ? "p-5" : "p-6 sm:p-8 md:p-10"} border-2 border-[#ff851b]/40 bg-white overflow-hidden transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(255,133,27,0.45)]`}
    >
      <div className="absolute -top-20 -right-20 w-56 h-56 bg-[#ff851b]/15 blur-3xl rounded-full pointer-events-none" />

      <div className={`relative flex items-center justify-between ${compact ? "mb-4" : "mb-6"}`}>
        <div className={`${compact ? "h-10 rounded-xl" : "h-12 rounded-2xl"} px-3 sm:px-4 bg-[#0F172A] flex items-center justify-center`}>
          <SiWix className={`${compact ? "w-10 h-10" : "w-12 h-12"} text-white`} aria-label="Wix" />
        </div>
        <span className="whitespace-nowrap text-[10px] font-bold uppercase tracking-wider sm:tracking-widest px-2.5 sm:px-3 py-1.5 rounded-full bg-[#ff851b]/10 text-[#e07316]">
          Parceiros Wix
        </span>
      </div>

      <h3 className={`relative ${compact ? "text-xl mb-1" : "text-2xl mb-3"} font-bold text-[#2D2D4A]`}>Domínio na Wix</h3>
      {!compact && (
        <p className="relative text-sm leading-relaxed mb-6 text-[#2D2D4A]/60">
          O endereço do seu site. Como somos parceiros da Wix, você compra o domínio pela metade do preço com o nosso link.
        </p>
      )}

      <div className={`relative ${compact ? "mb-4" : "mb-6"}`}>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-base font-semibold text-[#2D2D4A]/40 line-through decoration-2 decoration-[#ff851b]/70">R$ 384</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-[#ff851b] px-2.5 py-0.5 text-xs font-extrabold text-white shadow-md shadow-orange-500/30">
            <BadgePercent className="w-3.5 h-3.5" />
            50% OFF
          </span>
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className={`font-display ${compact ? "text-3xl" : "text-4xl"} font-extrabold tracking-tight text-[#2D2D4A]`}>R$ 192</span>
          <span className="text-sm font-semibold text-[#2D2D4A]/45">/ano</span>
        </div>
      </div>

      <div className={`relative flex items-center gap-2 ${compact ? "px-3 py-2 mb-4" : "px-4 py-2.5 mb-8"} rounded-xl w-fit bg-[#ff851b]/10`}>
        <Gift className="w-4 h-4 text-[#ff851b]" />
        <span className="text-sm font-bold text-[#2D2D4A]">Você economiza R$ 192</span>
      </div>

      <ul className={`relative flex-1 ${compact ? "space-y-2 mb-5" : "space-y-3 mb-10"}`}>
        {wixFeatures.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-[#ff851b]/15">
              <Check className="w-3 h-3 text-[#ff851b]" />
            </span>
            <span className={`${compact ? "text-[13px] leading-snug" : "text-sm"} font-medium text-[#2D2D4A]/75`}>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative w-full ${compact ? "h-12 text-sm" : "h-14 text-sm sm:text-base"} px-4 rounded-2xl font-bold whitespace-nowrap flex items-center justify-center gap-2 group transition-all bg-[#2D2D4A] hover:bg-[#1a1a2e] text-white`}
      >
        Garantir meu desconto
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </motion.div>
  );
}

/**
 * Celular e tablet: os planos viram um carrossel de cartas. A carta do centro fica
 * em destaque; as outras ficam menores e mais claras conforme se afastam do centro. O efeito
 * acompanha o dedo em tempo real, então a troca entre cartas é contínua e suave.
 */
const FAN_CARD_WIDTH = "min(68vw, 300px)";

function PlanFan() {
  const ref = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const frame = useRef(0);
  const cards: { key: string; node: ReactNode }[] = [
    { key: "landing", node: <PlanCard plan={plans[1]} compact /> },
    { key: "site", node: <PlanCard plan={plans[0]} compact /> },
    { key: "wix", node: <WixCard compact /> },
  ];
  const [active, setActive] = useState(1);

  const centerOf = (i: number) => {
    const el = ref.current;
    const child = el?.children[i] as HTMLElement | undefined;
    if (!el || !child) return 0;
    return child.offsetLeft - (el.clientWidth - child.offsetWidth) / 2;
  };

  const update = () => {
    const el = ref.current;
    if (!el) return;
    const mid = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    Array.from(el.children).forEach((child, i) => {
      const c = child as HTMLElement;
      const d = (c.offsetLeft + c.offsetWidth / 2 - mid) / c.offsetWidth; // 0 = centro, ±1 = vizinha
      const a = Math.min(Math.abs(d), 1.2);
      const inner = cardRefs.current[i];
      if (inner) {
        // cartas retas, com espaço entre elas: as vizinhas só ficam um pouco menores
        inner.style.transform = `scale(${1 - Math.min(a, 1) * 0.06})`;
        inner.style.transformOrigin = "center center";
        inner.style.opacity = String(1 - Math.min(a, 1) * 0.25);
        c.style.zIndex = String(10 - Math.round(a * 5));
      }
      if (Math.abs(d) < bestDist) {
        bestDist = Math.abs(d);
        best = i;
      }
    });
    setActive(best);
  };

  const onScroll = () => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(update);
  };

  // Começa na carta do meio (Site Profissional) e recalcula ao girar a tela
  useEffect(() => {
    const el = ref.current;
    if (el) el.scrollLeft = centerOf(1);
    onScroll();
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps -- só ao montar
  }, []);

  const goTo = (i: number) => ref.current?.scrollTo({ left: centerOf(i), behavior: "smooth" });

  return (
    <div>
      <div
        ref={ref}
        onScroll={onScroll}
        className="no-scrollbar flex items-center gap-4 overflow-x-auto snap-x snap-mandatory -mx-4 sm:-mx-6 pt-6 pb-20 -mb-8"
        style={{ paddingInline: `calc(50% - ${FAN_CARD_WIDTH} / 2)` }}
      >
        {cards.map((c, i) => (
          <div
            key={c.key}
            onClick={() => i !== active && goTo(i)}
            className={`relative snap-center shrink-0 ${i !== active ? "cursor-pointer" : ""}`}
            style={{ width: FAN_CARD_WIDTH }}
          >
            <div
              ref={(node) => {
                cardRefs.current[i] = node;
              }}
              className="will-change-transform"
            >
              {c.node}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-3">
        <div className="flex justify-center gap-2">
          {cards.map((c, i) => (
            <button
              key={c.key}
              onClick={() => goTo(i)}
              aria-label={`Ver plano ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-[#ff851b]" : "w-2 bg-[#2D2D4A]/15"}`}
            />
          ))}
        </div>
        <p className="flex items-center gap-1.5 text-xs font-medium text-[#2D2D4A]/40">
          <Hand className="w-3.5 h-3.5" /> Arraste para o lado para ver os outros planos
        </p>
      </div>
    </div>
  );
}

export function Pricing() {
  return (
    <section id="planos" className="py-16 md:py-20 bg-[#F5F5F7] relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <SectionBadge text="Planos" className="mb-6" />
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#2D2D4A] mb-5">
              Escolha o site ideal <span className="text-[#ff851b]">para o seu negócio.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-[#2D2D4A]/60">
              Você investe uma vez na criação e conta com a gente para manter tudo seguro e funcionando. O primeiro mês de acompanhamento já vem incluso.
            </p>
          </AnimatedSection>
        </div>

        {/* Computador: 3 cards lado a lado */}
        <StaggerContainer className="hidden lg:grid grid-cols-3 gap-6 items-stretch">
          <StaggerItem className="h-full">
            <WixCard />
          </StaggerItem>
          {plans.map((plan) => (
            <StaggerItem key={plan.name} className="h-full">
              <PlanCard plan={plan} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Celular e tablet: cartas em leque, arrastando para o lado */}
        <AnimatedSection className="lg:hidden">
          <PlanFan />
        </AnimatedSection>

        {/* ACOMPANHAMENTO E IA */}
        <AnimatedSection delay={0.1} className="mt-6">
          <div className="rounded-[32px] bg-white border border-[#2D2D4A]/[0.07] p-6 sm:p-8 md:p-10 grid lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-10 items-center text-center lg:text-left">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#ff851b] mb-3">Depois da entrega</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#2D2D4A] mb-4">Seu site sempre seguro e funcionando.</h3>
              <p className="text-[#2D2D4A]/60 leading-relaxed mb-6">
                Um site precisa de cuidado constante, como qualquer ferramenta importante do seu negócio. Atualizações, ajustes de
                conteúdo e pequenos problemas acontecem, e com o acompanhamento você não precisa se preocupar com nenhum deles.
              </p>
              <div className="inline-flex items-center gap-3 rounded-2xl bg-[#ff851b]/10 px-4 py-3">
                <Gift className="w-5 h-5 text-[#ff851b] shrink-0" />
                <span className="text-sm font-semibold text-[#2D2D4A]">O 1º mês de acompanhamento após a entrega é por nossa conta.</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {careItems.map((item) => (
                <div key={item.name} className="rounded-[24px] bg-[#F5F5F7] p-6 text-left">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-[#ff851b]" />
                    </div>
                    <p className="font-bold text-[#2D2D4A]">{item.name}</p>
                  </div>
                  <div className="flex items-baseline gap-1 mb-5">
                    <span className="font-display text-3xl font-extrabold text-[#2D2D4A]">{item.price}</span>
                    <span className="text-sm font-semibold text-[#2D2D4A]/45">{item.period}</span>
                  </div>
                  <ul className="space-y-2.5">
                    {item.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm font-medium text-[#2D2D4A]/70">
                        <Check className="w-4 h-4 text-[#ff851b] shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
