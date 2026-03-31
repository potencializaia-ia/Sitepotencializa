import { useParams } from "react-router-dom";

import {
  Check,
  MessageCircle,
  Globe,
  Instagram,
  Phone,
  Wallet,
  CalendarCheck,
  ShieldCheck,
  Users,
  Activity,
} from "lucide-react";

import { services } from "../data/services";

import { Header } from "@/components/Header";
import { SectionBadge } from "@/components/SectionBadge";
import { Button } from "@/components/ui/button";
import { ServiceHero } from "@/components/ServiceHero";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ServicePage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <>
        <Header />

        <section className="pb-20 bg-[#F5F5F7]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
            <h1 className="text-2xl font-bold text-[#2D2D4A]">
              Serviço não encontrado
            </h1>

            <a
              href="/"
              className="mt-4 inline-block text-[#7fdbff] font-medium underline"
            >
              Voltar para Home
            </a>
          </div>
        </section>
      </>
    );
  }

  const faqItems = service.faq ?? [];

  return (
    <>
      <Header />

      <ServiceHero
        badgeText={service.badge}
        title={service.title}
        subtitle={service.subtitle}
        ctaText={service.cta}
        ctaHref={service.ctaHref}
        imageSrc={service.image}
        imageAlt={service.title}
        messageUser={service.messageUser}
        messageBot={service.messageBot}
      />

      <main className="bg-[#F5F5F7]">

        {/* ================= PROBLEMA ================= */}
        <section className="py-20 bg-[#F5F5F7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <SectionBadge text="o problema" className="mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D4A]">
                Oportunidades se perdem
                <br className="hidden sm:block" />
                em pequenos atrasos<span className="text-[#ff851b]">.</span>
              </h2>
              <p className="mt-4 text-lg text-[#2D2D4A]/70 max-w-2xl mx-auto">
                Quando o atendimento demora, falha ou depende demais da disponibilidade do time, o cliente sente — e o negócio também.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Demora no atendimento",
                "Filas no WhatsApp",
                "Equipes sobrecarregadas",
                "Respostas inconsistentes",
                "Atendimento fora do horário",
                "Vendas perdidas",
              ].map((t) => (
                <div
                  key={t}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:border-[#ff851b]/35 hover:shadow-md transition-all"
                >
                  <div className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#ff851b]/10">
                      <Check className="h-4 w-4 text-[#ff851b]" />
                    </span>
                    <p className="text-[#2D2D4A] font-medium leading-relaxed">{t}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= O QUE FAZ ================= */}
        <section className="py-20 bg-footer-gradient text-white relative overflow-hidden">

          {/* Glow */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#ff851b]/20 via-transparent to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* LEFT */}
              <div>
                <SectionBadge text="o que faz" className="mb-6 bg-white/10 border-white/20 text-white" />

                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  {service.whatItDoesTitle}
                  <span className="text-[#ff851b]">.</span>
                </h2>

                <p className="text-xl text-white/80 leading-relaxed mb-6">
                  {service.whatItDoesIntro}
                </p>

                <p className="text-lg text-white/70 leading-relaxed mb-10">
                  {service.whatItDoesHighlight}
                </p>

                <div className="space-y-5">
                  {service.whatItDoesSteps.map((s) => (
                    <div key={s.n} className="flex items-start gap-4">
                      <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                        <span className="text-[#ff851b] font-bold">{s.n}</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">{s.title}</h4>
                        <p className="text-white/70 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT */}
              <div className="relative">
                <div className="absolute inset-0 bg-[#ff851b] rounded-3xl blur-3xl opacity-10" />

                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: MessageCircle, title: "WhatsApp", desc: "Integração oficial" },
                      { icon: Globe, title: "Website", desc: "Widget no seu site" },
                      { icon: Instagram, title: "Instagram", desc: "Respostas no Direct" },
                      { icon: Phone, title: "Telefone", desc: "Atendimento por voz" },
                    ].map(({ icon: Icon, title, desc }) => (
                      <div
                        key={title}
                        className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors"
                      >
                        <Icon className="w-8 h-8 text-[#ff851b] mb-4" />
                        <h4 className="font-semibold mb-2">{title}</h4>
                        <p className="text-sm text-white/70">{desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-500/15 rounded-full flex items-center justify-center">
                          <Activity className="w-5 h-5 text-green-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Status do sistema</p>
                          <p className="text-xs text-white/70">100% Operacional</p>
                        </div>
                      </div>
                      <span className="text-green-400 text-sm font-semibold">● Online</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= COMO FUNCIONA ================= */}
        <section className="py-20 bg-[#F5F5F7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <SectionBadge text="passo a passo" className="mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D4A]">
                Como funciona<span className="text-[#ff851b]">.</span>
              </h2>
            </div>

            <div className="relative">
              {/* linha mobile */}
              <div className="absolute left-5 top-0 bottom-0 w-px bg-[#d8d8e2] md:hidden" />

              {/* linha desktop */}
              <div className="absolute left-1/2 top-0 bottom-36 hidden md:block w-px bg-[#d8d8e2] -translate-x-1/2" />

              <div className="space-y-12 md:space-y-4">
                {service.timelineSteps.map((text, index) => {
                  const isLeft = index % 2 === 0;

                  return (
                    <div key={text} className="relative md:grid md:grid-cols-2 md:items-center">
                      {/* ponto central desktop */}
                      <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#ff851b]" />

                      {/* mobile */}
                      <div className="md:hidden relative pl-16">
                        <div className="absolute left-[0.35rem] top-2 w-3 h-3 rounded-full bg-[#ff851b]" />
                        <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#ff851b] text-white text-lg font-bold mb-3 shadow-md">
                          {index + 1}.
                        </div>
                        <p className="text-[1.65rem] sm:text-[1.8rem] leading-tight font-semibold text-[#2D2D4A] max-w-sm">
                          {text}
                        </p>
                      </div>

                      {/* desktop esquerda */}
                      <div className={`hidden md:flex ${isLeft ? "justify-end pr-12" : "justify-end pr-16"}`}>
                        {isLeft && (
                          <div className="max-w-sm text-right">
                            <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#ff851b] text-white text-lg font-bold mb-3 shadow-md">
                              {index + 1}.
                            </div>
                            <p className="text-[1.9rem] leading-tight font-semibold text-[#2D2D4A]">
                              {text}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* desktop direita */}
                      <div className={`hidden md:flex ${!isLeft ? "justify-start pl-12" : "justify-start pl-16"}`}>
                        {!isLeft && (
                          <div className="max-w-sm text-left">
                            <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#ff851b] text-white text-lg font-bold mb-3 shadow-md">
                              {index + 1}.
                            </div>
                            <p className="text-[1.9rem] leading-tight font-semibold text-[#2D2D4A]">
                              {text}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="text-center mt-24 md:mt-28">
                <Button className="bg-[#2D2D4A] hover:bg-[#3D3D5A] text-white px-8 py-6 text-base font-medium rounded-lg transition-all hover:scale-105">
                  Fale com um consultor
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-20 bg-gradient-to-r from-[#F5F5F7] via-white to-[#F5F5F7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "98%", label: "Satisfação" },
                { value: "3x", label: "Conversões" },
                { value: "-40%", label: "Custos" },
                { value: "< 1s", label: "Resposta" },
              ].map((s) => (
                <div key={s.label} className="relative">
                  
                  {/* Glow sutil */}
                  <div className="absolute inset-0 bg-[#ff851b]/10 blur-2xl opacity-30" />

                  <p className="relative text-4xl md:text-5xl font-bold text-[#ff851b] mb-2">
                    {s.value}
                  </p>

                  <p className="text-[#2D2D4A]/70 font-medium">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFÍCIOS */}
        <section className="py-20 bg-[#F5F5F7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <SectionBadge text="benefícios" className="mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D4A] mb-4">
                O que oferece<span className="text-[#ff851b]">.</span>
              </h2>
              <div className="w-24 h-1 bg-[#ff851b] mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Wallet, title: "Redução de custos", desc: "Automatize tarefas repetitivas e reduza esforço operacional sem perder qualidade." },
                { icon: CalendarCheck, title: "Mais conversões", desc: "Atendimento instantâneo que aumenta agendamentos e oportunidades." },
                { icon: ShieldCheck, title: "24/7 sem pausas", desc: "Nunca perca uma chance fora do horário comercial." },
                { icon: Users, title: "Time focado", desc: "Sua equipe foca em estratégia e relacionamento de alto nível." },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#ff851b]/40 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="w-14 h-14 bg-[#ff851b]/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#ff851b]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2D4A] mb-3">{title}</h3>
                  <p className="text-[#2D2D4A]/70 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA + FAQ ================= */}
        <section className="py-20 bg-footer-gradient text-white relative overflow-hidden">

          {/* Glow */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.15),transparent_45%)]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* ================= CTA ================= */}
            <div className="text-center max-w-4xl mx-auto mb-20">

              <SectionBadge
                text="vamos conversar"
                className="mb-6 bg-white/10 border-white/20 text-white"
              />

              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Pronto para automatizar seu atendimento?
              </h2>

              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Descubra como transformar conversas em resultados com IA treinada para seu negócio.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#ff851b] hover:bg-[#e07316] text-white px-10 py-6 rounded-full text-base font-bold transition-all hover:scale-105">
                  Solicitar diagnóstico
                </Button>

                <Button
                  className="bg-white/10 border border-white/40 text-white hover:bg-white/20 hover:text-white px-10 py-6 rounded-full text-base font-bold transition-all"
                >
                  Falar com especialista
                </Button>
              </div>

              <p className="text-white/60 text-sm mt-6">
                Setup rápido • Sem compromisso • Personalizado para sua marca
              </p>
            </div>

            {/* ================= FAQ ================= */}
            {faqItems.length > 0 && (
              <div className="max-w-4xl mx-auto">

                <div className="text-center mb-12">
                  <SectionBadge
                    text="FAQ"
                    className="mb-6 bg-white/10 border-white/20 text-white"
                  />

                  <h2 className="text-3xl sm:text-4xl font-bold text-white">
                    Perguntas frequentes
                    <span className="text-[#ff851b]">.</span>
                  </h2>

                  <p className="mt-3 text-lg text-white/70">
                    Tire suas dúvidas sobre atendimento com IA.
                  </p>
                </div>

                <Accordion type="single" collapsible className="space-y-3">
                  {faqItems.map((item) => (
                    <AccordionItem
                      key={item.q}
                      value={item.q}
                      className="bg-white/5 backdrop-blur-md px-6 border border-white/10 first:rounded-t-2xl last:rounded-b-2xl"
                    >
                      <AccordionTrigger className="text-left text-white font-medium">
                        {item.q}
                      </AccordionTrigger>

                      <AccordionContent className="text-white/70">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}

          </div>
        </section>
        
      </main>
    </>
  );
}