import { useParams } from "react-router-dom";
import { Check } from "lucide-react";

import { services } from "../data/services";

// Componentes do seu projeto
import { Header } from "@/components/Header";
import { SectionBadge } from "@/components/SectionBadge";
import { Button } from "@/components/ui/button";
import { ServiceHero } from "@/components/ServiceHero";

// FAQ padrão (shadcn)
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
            badgeText="atendimento inteligente"
            title="Atendimento inteligente 24/7"
            subtitle="O agente de IA que responde, agenda e encanta seus clientes sem pausas."
            ctaText="Solicitar diagnóstico gratuito"
            ctaHref="/#contato"
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

          {/* ================= CTA ================= */}
          <div className="text-center mb-24">

            <SectionBadge text="próximo passo" className="mb-6" />

            <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2D4A]">
              Pronto para automatizar seu atendimento
              <span className="text-[#FF0066]">?</span>
            </h2>

            <p className="mt-3 text-lg text-[#2D2D4A]/70">
              Transforme conversas em resultados.
            </p>

            <div className="mt-8">
              <Button className="bg-[#2D2D4A] hover:bg-[#3D3D5A] text-white px-8 py-6 text-base font-medium rounded-lg transition-all hover:scale-105">
                Falar com um especialista
              </Button>
            </div>
          </div>

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
      </section>
    </>
  );
}
