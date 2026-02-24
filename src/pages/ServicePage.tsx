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

        <section className="pt-24 pb-20 bg-[#F5F5F7]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-[#2D2D4A]">
              Serviço não encontrado
            </h1>

            <a
              href="/"
              className="mt-4 inline-block text-[#FF0066] font-medium underline"
            >
              Voltar para Home
            </a>
          </div>
        </section>
      </>
    );
  }

  // FAQ específico (Bloco 1 por enquanto)
  const faqItems =
    slug === "atendimento-inteligente"
      ? [
        {
          q: "Preciso trocar meus sistemas atuais?",
          a: "Não. Integramos com o que você já usa sempre que houver API disponível.",
        },
        {
          q: "E quando o cliente precisa de um humano?",
          a: "A IA transfere com todo o contexto para sua equipe.",
        },
        {
          q: "Funciona fora do horário comercial?",
          a: "Sim. A operação é 24/7.",
        },
      ]
      : [];

  return (
    <>
      {/* Header fixo */}
      <Header />

      {/* Conteúdo */}
      <section className="pt-24 pb-20 bg-[#F5F5F7]">

        <ServiceHero
          badgeText={service.badge}
          title={service.title}
          subtitle={service.subtitle}
          ctaText={service.cta}
          ctaHref={service.ctaHref}
          imageSrc={service.image}
          imageAlt={service.title}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ================= PROBLEMA ================= */}
          <div className="text-center mb-12">

            <SectionBadge text="o problema" className="mb-6" />

            <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2D4A]">
              Oportunidades perdidas todos os dias
              <span className="text-[#FF0066]">.</span>
            </h2>

            <p className="mt-3 text-lg text-[#2D2D4A]/70">
              Pequenos atrasos viram grandes perdas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
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
                className="bg-white rounded-2xl p-6 shadow-card border border-gray-100"
              >
                <div className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#FF0066]/10">
                    <Check className="h-4 w-4 text-[#FF0066]" />
                  </span>

                  <p className="text-[#2D2D4A] font-medium">{t}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ================= O QUE FAZ ================= */}
          <div className="text-center mb-12">

            <SectionBadge text="o que faz" className="mb-6" />

            <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2D4A]">
              Atendimento automático e inteligente
              <span className="text-[#FF0066]">.</span>
            </h2>

            <p className="mt-3 text-lg text-[#2D2D4A]/70">
              Um fluxo único que resolve e organiza.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              "WhatsApp, Instagram e site",
              "Base personalizada",
              "Triagem inteligente",
              "Redirecionamento humano",
              "Registro automático",
              "Operação 24/7",
            ].map((t) => (
              <div
                key={t}
                className="bg-white rounded-2xl p-6 shadow-card border border-gray-100"
              >
                <div className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#FF0066]/10">
                    <Check className="h-4 w-4 text-[#FF0066]" />
                  </span>

                  <p className="text-[#2D2D4A]/80">{t}</p>
                </div>
              </div>
            ))}
          </div>

          {/* BENEFÍCIOS */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <SectionBadge text="benefícios" className="mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D4A] mb-4">
                  O que oferece<span className="text-[#fc7500]">.</span>
                </h2>
                <div className="w-24 h-1 bg-[#fc7500] mx-auto rounded-full" />
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
                    className="bg-[#F5F5F7] rounded-2xl p-8 border border-slate-100 hover:border-[#fc7500]/40 transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="w-14 h-14 bg-[#fc7500]/10 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-[#fc7500]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2D2D4A] mb-3">{title}</h3>
                    <p className="text-[#2D2D4A]/70 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* COMO FUNCIONA */}
          <section className="py-24 bg-[#2D2D4A] text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-500/40 via-[#2D2D4A] to-[#2D2D4A]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <SectionBadge text="como funciona" className="mb-6" />
                  <h2 className="text-4xl md:text-5xl font-bold mb-8">
                    Como funciona<span className="text-[#fc7500]">.</span>
                  </h2>

                  <p className="text-xl text-white/80 leading-relaxed mb-6">
                    Seu atendimento pode ser ótimo no horário comercial, mas muita gente procura contato fora desse período.
                  </p>
                  <p className="text-lg text-white/70 leading-relaxed mb-10">
                    Nossa IA não substitui sua equipe — <span className="text-white font-semibold">potencializa seu alcance</span> e garante que nenhuma oportunidade seja perdida.
                  </p>

                  <div className="space-y-6">
                    {[
                      { n: "1", title: "Integração simples", desc: "Conecte com WhatsApp, site ou CRM." },
                      { n: "2", title: "Treinamento personalizado", desc: "A IA aprende seus serviços e tom de voz." },
                      { n: "3", title: "Atendimento autônomo", desc: "Responde, qualifica e agenda automaticamente." },
                    ].map((s) => (
                      <div key={s.n} className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                          <span className="text-[#fc7500] font-bold">{s.n}</span>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-1">{s.title}</h4>
                          <p className="text-white/70">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-[#fc7500] rounded-3xl blur-3xl opacity-15" />
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
                          <Icon className="w-8 h-8 text-[#fc7500] mb-4" />
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

          {/* STATS */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { value: "98%", label: "Satisfação" },
                  { value: "3x", label: "Conversões" },
                  { value: "-40%", label: "Custos" },
                  { value: "< 1s", label: "Resposta" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-4xl md:text-5xl font-bold text-[#fc7500] mb-2">{s.value}</p>
                    <p className="text-[#2D2D4A]/70 font-medium">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#001f3f] via-sky-600 to-[#fc7500]" />
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_20%_10%,white,transparent_45%)]" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
              <SectionBadge text="vamos conversar" className="mb-6" />
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Pronto para automatizar seu atendimento<span className="text-white">?</span>
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Descubra como transformar conversas em resultados com IA treinada para seu negócio.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-[#001f3f] hover:bg-white/90 px-10 py-6 rounded-full text-base font-bold">
                  Solicitar diagnóstico
                </Button>
                <Button
                  variant="outline"
                  className="border-white/70 text-white hover:bg-white/10 px-10 py-6 rounded-full text-base font-bold"
                >
                  Falar com especialista
                </Button>
              </div>

              <p className="text-white/70 text-sm mt-6">
                Setup rápido • Sem compromisso • Personalizado para sua marca
              </p>
            </div>
          </section>

          {/* ================= FAQ ================= */}
          <div className="mb-24">

            <div className="text-center mb-12">

              <SectionBadge text="FAQ" className="mb-6" />

              <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2D4A]">
                Perguntas frequentes
                <span className="text-[#FF0066]">.</span>
              </h2>

              <p className="mt-3 text-lg text-[#2D2D4A]/70">
                Tire suas dúvidas sobre atendimento com IA.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">

              <Accordion type="single" collapsible className="space-y-3">

                {faqItems.map((item) => (
                  <AccordionItem
                    key={item.q}
                    value={item.q}
                    className="bg-white rounded-2xl px-6 shadow-card border border-gray-100"
                  >
                    <AccordionTrigger className="text-left text-[#2D2D4A] font-medium">
                      {item.q}
                    </AccordionTrigger>

                    <AccordionContent className="text-[#2D2D4A]/70">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}

              </Accordion>
            </div>
          </div>
        </div>
      </section >
    </>
  );
}
                