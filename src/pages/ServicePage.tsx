import { useParams } from "react-router-dom";
import { motion } from 'framer-motion';
import { ArrowRight } from "lucide-react";

import {
  MessageCircle,
  Clock,
  TrendingUp,
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
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ServicePage() {
  const { slug } = useParams();
  
  // 1. Localiza o serviço
  const service = services.find((s) => s.slug === slug);
  
  // 2. Calcula o índice para os nodos do Hero
  const serviceIndex = services.findIndex((s) => s.slug === slug);

  // 3. Verificação de segurança (se o serviço não existir)
  if (!service) {
    return (
      <>
        <Header />
        <section className="pb-20 bg-[#F5F5F7] pt-32">
          <div className="max-w-5xl mx-auto px-8">
            <h1 className="text-2xl font-bold text-[#2D2D4A]">Serviço não encontrado</h1>
            <a href="/" className="mt-4 inline-block text-[#ff851b] font-medium underline">Voltar para Home</a>
          </div>
        </section>
      </>
    );
  }

  // 4. DECLARAÇÃO DO FAQ
  const faqItems = service.faq ?? [];

  return (
    <>
      <Header />

      <ServiceHero
        badgeText={service.badge!} // O '!' diz ao TS que o valor não é undefined
        title={service.title!}
        subtitle={service.subtitle!}
        ctaText={service.cta!}
        activeService={serviceIndex}
      />

      <main className="bg-[#F5F5F7]">

        {/* ================= SEÇÃO DE DIAGNÓSTICO (PROBLEMA) ================= */}
        <section className="py-24 bg-[#F5F5F7] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Cabeçalho de Impacto */}
            <div className="text-center mb-20">
              <SectionBadge text="Diagnóstico de Perdas" className="mb-6" />
              <AnimatedSection>
                <h2 className="text-4xl md:text-6xl font-bold text-[#2D2D4A] tracking-tighter leading-[1.1]">
                  O custo invisível da <br />
                  <span className="text-[#ff851b]">ineficiência operacional.</span>
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="mt-6 text-xl text-[#2D2D4A]/50 max-w-3xl mx-auto font-medium">
                  No mercado atual, a velocidade de resposta não é um diferencial, é sobrevivência. 
                  Cada minuto de espera é uma porta aberta para o seu concorrente.
                </p>
              </AnimatedSection>
            </div>

            {/* Grid de Problemas Estruturados */}
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "O Lead que Esfria",
                  desc: "78% dos clientes compram de quem responde primeiro. Se você demora mais de 5 minutos, sua chance de conversão cai 10x.",
                  icon: <Clock className="w-6 h-6 text-red-500" />,
                  tag: "Vazamento de Vendas"
                },
                {
                  title: "Escala Impossível",
                  desc: "Equipes humanas não escalam sem aumentar custos fixos. Quando o volume sobe, a qualidade cai e o time sobrecarrega.",
                  icon: <TrendingUp className="w-6 h-6 text-red-500" />,
                  tag: "Gargalo de Crescimento"
                },
                {
                  title: "Inconsistência Fatal",
                  desc: "Respostas diferentes para o mesmo problema geram desconfiança. A falta de um padrão técnico mata a autoridade da sua marca.",
                  icon: <ShieldCheck className="w-6 h-6 text-red-500" />,
                  tag: "Risco de Branding"
                },
                {
                  title: "Ponto Cego de Dados",
                  desc: "Conversas humanas são difíceis de metrificar. Sem dados reais, você toma decisões baseadas em 'achismo', não em performance.",
                  icon: <Activity className="w-6 h-6 text-red-500" />,
                  tag: "Falta de Inteligência"
                },
                {
                  title: "Horário Limitado",
                  desc: "Seu cliente quer comprar às 22h, mas sua empresa só abre às 09h. Você está deixando dinheiro na mesa 16 horas por dia.",
                  icon: <MessageCircle className="w-6 h-6 text-red-500" />,
                  tag: "Oportunidade Perdida"
                },
                {
                  title: "Dreno Financeiro",
                  desc: "Custos altíssimos com suporte de primeiro nível que poderia ser resolvido instantaneamente por uma IA treinada.",
                  icon: <Wallet className="w-6 h-6 text-red-500" />,
                  tag: "Custo de Oportunidade"
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="group h-full bg-white rounded-[32px] p-8 border border-gray-200 hover:border-red-500/20 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                    {/* Indicador de "Atenção" sutil */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/[0.02] rounded-full -mr-16 -mt-16 group-hover:bg-red-500/[0.05] transition-colors" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center border border-red-100">
                          {item.icon}
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-red-500/50 bg-red-50 px-3 py-1 rounded-full">
                          {item.tag}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-[#2D2D4A] mb-3 group-hover:text-red-600 transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-[#2D2D4A]/60 text-sm leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Resumo de Impacto */}
            <AnimatedSection delay={0.3} className="mt-20 py-10 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-md">
                <h4 className="text-2xl font-bold text-[#2D2D4A]">O diagnóstico é claro:</h4>
                <p className="text-[#2D2D4A]/60 font-medium">
                  Sua empresa está operando abaixo do potencial tecnológico disponível.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm font-bold text-red-500 uppercase tracking-widest">Prejuízo Estimado</p>
                  <p className="text-3xl font-black text-[#2D2D4A]">Até 40% ao ano</p>
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-red-500/20 border-t-red-500 animate-spin" />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ================= O QUE FAZ (A ORQUESTRAÇÃO) ================= */}
        <section className="py-24 bg-hero-gradient text-white relative overflow-hidden">
          
          {/* Fundo com Glow de Orquestração */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff851b]/10 blur-[150px] rounded-full opacity-40 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#7fdbff]/5 blur-[120px] rounded-full opacity-20 pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* LADO ESQUERDO: O FLUXO DE INTELIGÊNCIA */}
              <div>
                <AnimatedSection>
                  <SectionBadge text="A Orquestração" className="mb-6 bg-white/5 border-white/10 text-[#ff851b]" />
                  <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-tight">
                    {service.whatItDoesTitle}
                    <span className="text-[#ff851b]">.</span>
                  </h2>
                  <p className="text-xl text-white/50 leading-relaxed mb-12 max-w-xl font-medium">
                    {service.whatItDoesIntro}
                  </p>
                </AnimatedSection>

                {/* Lista de Passos estilo "Workflow Nodes" */}
                <div className="relative space-y-8">
                  {/* Linha vertical conectando os passos (vibe n8n) */}
                  <div className="absolute left-[22px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-[#71d7ff]/50 via-[#71d7ff]/20 to-transparent" />

                  <StaggerContainer className="space-y-10">
                    {service.whatItDoesSteps.map((s, idx) => (
                      <StaggerItem key={idx}>
                        <div className="flex items-start gap-6 group">
                          <div className="relative z-10 w-11 h-11 bg-white/10 border border-[#ff851b]/30 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#ff851b] group-hover:border-[#ff851b] transition-all duration-500 shadow-[0_0_15px_rgba(255,133,27,0.1)] group-hover:shadow-[0_0_20px_rgba(255,133,27,0.4)]">
                            <span className="text-[#ff851b] font-black text-sm group-hover:text-white transition-colors">{s.n}</span>
                          </div>
                          <div>
                            <h4 className="text-xl font-bold mb-2 text-white group-hover:text-[#ff851b] transition-colors">
                              {s.title}
                            </h4>
                            <p className="text-white/40 leading-relaxed text-sm max-w-md">
                              {s.desc}
                            </p>
                          </div>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </div>

              {/* LADO DIREITO: O HUB CENTRAL DE CANAIS */}
              <AnimatedSection delay={0.3}>
                <div className="relative">
                  {/* Círculos concêntricos decorativos (Radar de IA) */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[120%] h-[120%] border border-white/[0.03] rounded-full animate-[spin_20s_linear_infinite]" />
                    <div className="w-[80%] h-[80%] border border-white/[0.05] rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                  </div>

                  <div className="relative bg-white/[0.02] backdrop-blur-3xl rounded-[40px] p-8 sm:p-10 border border-white/10 shadow-2xl overflow-hidden">
                    
                    {/* Grid de Canais */}
                    <div className="grid grid-cols-2 gap-5 mb-10">
                      {[
                        { icon: MessageCircle, title: "WhatsApp", desc: "Fluxo Oficial" },
                        { icon: Globe, title: "Web Widget", desc: "Inteligência On-site" },
                        { icon: Instagram, title: "Instagram", desc: "Direct Sales" },
                        { icon: Phone, title: "Voice Agent", desc: "Atendimento por Voz" },
                      ].map(({ icon: Icon, title, desc }, idx) => (
                        <div
                          key={idx}
                          className="group bg-white/5 rounded-3xl p-6 border border-white/10 hover:border-[#ff851b]/30 transition-all duration-500"
                        >
                          <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#ff851b]/10 transition-all">
                            <Icon className="w-6 h-6 text-[#ff851b]" />
                          </div>
                          <h4 className="font-bold text-white mb-1 tracking-tight">{title}</h4>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">{desc}</p>
                        </div>
                      ))}
                    </div>

                    {/* Dashboard Status (Premium) */}
                    <div className="p-6 bg-white/5 rounded-[24px] border border-white/5 relative overflow-hidden">
                      {/* Efeito de Scanline passando */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff851b]/5 to-transparent h-20 -top-20 animate-[scan_4s_linear_infinite] pointer-events-none" />
                      
                      <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-4">
                          <div className="relative w-12 h-12 flex items-center justify-center">
                            <div className="absolute inset-0 bg-[#71d7ff]/20 rounded-full animate-ping" />
                            <div className="w-10 h-10 bg-[#71d7ff]/10 rounded-full flex items-center justify-center border border-[#71d7ff]/30">
                              <Activity className="w-5 h-5 text-[#71d7ff]" />
                            </div>
                          </div>
                          <div>
                            <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] mb-1">Status Global</p>
                            <p className="text-sm font-bold text-white tracking-tight">Potencializa Agentic Mesh</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="inline-block px-3 py-1 bg-[#71d7ff]/10 border border-[#71d7ff]/20 rounded-lg text-[#71d7ff] text-[10px] font-black uppercase tracking-widest">
                            ● 100% Online
                          </span>
                          <p className="text-[9px] text-white/20 mt-2 font-mono">LATENCY: 0.2ms</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ================= COMO FUNCIONA (ROADMAP DE IMPLEMENTAÇÃO) ================= */}
        <section className="py-24 bg-[#F5F5F7] relative overflow-hidden">
          {/* Elemento Decorativo de Fundo: Número da Etapa Gigante que muda no Scroll ou Hover */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black text-[#2D2D4A]/[0.02] pointer-events-none select-none tracking-tighter">
            PROCESS
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Header com foco em Metodologia */}
            <div className="text-center mb-24">
              <SectionBadge text="Metodologia Ágil" className="mb-6" />
              <AnimatedSection>
                <h2 className="text-4xl md:text-6xl font-bold text-[#2D2D4A] tracking-tighter leading-tight">
                  A jornada para a sua <br />
                  <span className="text-[#ff851b]">autonomia tecnológica.</span>
                </h2>
              </AnimatedSection>
            </div>

            <div className="relative">
              {/* Linha Central Tech (Desktop) */}
              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#ff851b] via-[#d8d8e2] to-transparent hidden md:block -translate-x-1/2 opacity-30" />

              <StaggerContainer className="space-y-20 md:space-y-32">
                {service.timelineSteps.map((text, index) => {
                  const isLeft = index % 2 === 0;

                  return (
                    <StaggerItem key={index}>
                      <div className="relative flex flex-col md:flex-row items-center">
                        
                        {/* Indicador de Etapa (O "Nodo") */}
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
                          <motion.div 
                            whileHover={{ scale: 1.2, rotate: 90 }}
                            className="w-12 h-12 bg-white border-4 border-[#F5F5F7] rounded-2xl flex items-center justify-center shadow-xl shadow-orange-500/10 group"
                          >
                            <div className="w-2 h-2 rounded-full bg-[#ff851b] group-hover:scale-150 transition-transform" />
                          </motion.div>
                        </div>

                        {/* Conteúdo Esquerda */}
                        <div className={`w-full md:w-1/2 flex ${isLeft ? "md:justify-end md:pr-20" : "md:justify-start md:pl-20 md:order-2"}`}>
                          <div className={`relative p-8 rounded-[32px] bg-white shadow-sm border border-gray-100 hover:shadow-2xl hover:border-[#ff851b]/20 transition-all duration-500 group ${isLeft ? "text-right" : "text-left"}`}>
                            
                            {/* Badge do Número */}
                            <span className="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-[#ff851b] mb-4 bg-orange-50 px-3 py-1 rounded-full">
                              Fase 0{index + 1}
                            </span>

                            <p className="text-2xl md:text-3xl font-bold text-[#2D2D4A] leading-tight group-hover:text-[#ff851b] transition-colors duration-300">
                              {text}
                            </p>
                            
                            {/* Linha de progresso interna do card */}
                            <div className={`mt-6 h-1 w-12 bg-gray-100 rounded-full overflow-hidden ${isLeft ? "ml-auto" : "mr-auto"}`}>
                              <div className="h-full bg-[#ff851b] w-1/3 group-hover:w-full transition-all duration-700" />
                            </div>
                          </div>
                        </div>

                        {/* Espaçador Lado Oposto (Desktop) */}
                        <div className="hidden md:block md:w-1/2" />

                        {/* Mobile: Conexão Visual */}
                        <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-gray-200 -ml-4" />
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>

              {/* Botão de Fechamento da Timeline */}
              <div className="text-center mt-24 relative z-10">
                <AnimatedSection delay={0.2}>
                  <div className="inline-flex flex-col items-center">
                    <Button className="bg-[#2D2D4A] hover:bg-[#1a1a2e] text-white px-10 py-7 text-lg font-bold rounded-2xl transition-all hover:scale-105 shadow-2xl shadow-blue-900/10 group">
                      Iniciar meu setup agora
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <p className="mt-6 text-xs text-[#2D2D4A]/40 font-bold uppercase tracking-widest">
                      Garantia de implementação em contrato
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* ================= STATS (FAIXA DE PERFORMANCE) ================= */}
        <section className="py-16 bg-gradient-to-r from-[#F5F5F7] via-white to-[#F5F5F7] border-y border-gray-100 relative overflow-hidden">
          
          {/* Detalhe de luz sutil atravessando a faixa */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff851b]/5 to-transparent -skew-x-12 translate-x-[-100%] animate-[shimmer_8s_infinite]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-y-12 items-center">
              {[
                { value: "98%", label: "Satisfação" },
                { value: "3x", label: "Conversões" },
                { value: "-40%", label: "Custos" },
                { value: "< 1s", label: "Resposta" },
              ].map((s, idx) => (
                <StaggerItem key={s.label} className="relative">
                  <div className="flex flex-col items-center text-center px-4">
                    {/* Valor: Black Weight + Tight Tracking para look SaaS Premium */}
                    <p className="text-5xl md:text-6xl font-black text-[#ff851b] tracking-tighter mb-1 drop-shadow-sm">
                      {s.value}
                    </p>
                    
                    {/* Label: Limpo e com espaçamento elegante */}
                    <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#2D2D4A]/50">
                      {s.label}
                    </p>

                    {/* Divisores Verticais (Só aparecem no Desktop entre os itens) */}
                    {idx < 3 && (
                      <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 h-12 w-[1px] bg-gray-200" />
                    )}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ================= BENEFÍCIOS (MÓDULOS DE VALOR) ================= */}
        <section className="py-24 bg-[#F5F5F7] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Header */}
            <div className="text-center mb-20">
              <SectionBadge text="Vantagem Competitiva" className="mb-6" />
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D4A] tracking-tighter mb-4">
                  O que a IA <span className="text-[#ff851b]">potencializa</span> no seu negócio.
                </h2>
                <div className="w-16 h-1 bg-[#71d7ff] mx-auto rounded-full opacity-70" />
              </AnimatedSection>
            </div>

            {/* A SOLUÇÃO: Envolver o StaggerContainer em um AnimatedSection funcional */}
            <AnimatedSection delay={0.2}>
              <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { 
                    icon: Wallet, 
                    title: "Redução de Custos", 
                    desc: "Substitua processos manuais lentos por automações que rodam com custo fixo e escalabilidade infinita." 
                  },
                  { 
                    icon: CalendarCheck, 
                    title: "Conversão 24/7", 
                    desc: "Sua empresa nunca dorme. Capture leads e feche agendamentos enquanto sua equipe descansa." 
                  },
                  { 
                    icon: ShieldCheck, 
                    title: "Padronização Total", 
                    desc: "Elimine o erro humano e garanta que cada cliente receba o atendimento perfeito, todas as vezes." 
                  },
                  { 
                    icon: Users, 
                    title: "Foco Estratégico", 
                    desc: "Liberte seus talentos de tarefas repetitivas para que eles foquem no que realmente traz faturamento." 
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <StaggerItem key={title}>
                    <div className="group h-full bg-white rounded-[40px] p-10 border border-gray-100 shadow-sm hover:shadow-2xl hover:border-[#ff851b]/20 transition-all duration-500 flex flex-col items-start text-left">
                      
                      {/* Icon Container Style "SaaS" */}
                      <div className="w-16 h-16 bg-[#F5F5F7] group-hover:bg-[#ff851b] rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 shadow-inner">
                        <Icon className="w-7 h-7 text-[#2D2D4A] group-hover:text-white transition-colors duration-500" />
                      </div>

                      <h3 className="text-xl font-bold text-[#2D2D4A] mb-4 group-hover:text-[#ff851b] transition-colors">
                        {title}
                      </h3>
                      
                      <p className="text-[#2D2D4A]/50 text-sm leading-relaxed font-medium">
                        {desc}
                      </p>

                      {/* Detalhe Decorativo */}
                      <div className="mt-auto pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          <div className="w-8 h-1 bg-[#ff851b] rounded-full" />
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </AnimatedSection>

            {/* Rodapé da Seção */}
            <div className="mt-20 text-center">
              <AnimatedSection delay={0.4}>
                  <p className="text-[#2D2D4A]/30 text-xs font-black uppercase tracking-[0.2em]">
                    Tecnologia proprietária <span className="text-[#71d7ff]">•</span> Integração Nativa <span className="text-[#71d7ff]">•</span> Segurança LGPD
                  </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ================= CTA + FAQ (O FECHAMENTO) ================= */}
        <section className="py-24 bg-hero-gradient text-white relative overflow-hidden">

          {/* Glows de Consistência com o Hero */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#ff851b]/10 blur-[120px] rounded-full opacity-40" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#7fdbff]/5 blur-[100px] rounded-full opacity-20" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* ================= CTA: MANIFESTO DE CONVERSÃO ================= */}
            <div className="text-center max-w-4xl mx-auto mb-32">
              <AnimatedSection>
                <SectionBadge
                  text="Vamos Conversar"
                  className="mb-8 bg-white/5 border-white/10 text-[#ff851b]"
                />
                <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight leading-[1.1]">
                  Sua operação está pronta para a <span className="text-[#ff851b]">escala da IA?</span>
                </h2>
                <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                  Não deixe sua empresa no passado. Implemente hoje os agentes que vão trabalhar por você 24/7.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button className="bg-[#ff851b] hover:bg-[#e07316] text-white px-12 py-8 rounded-2xl text-lg font-bold transition-all hover:scale-105 shadow-[0_20px_50px_rgba(255,133,27,0.3)] group">
                    Solicitar Diagnóstico Gratuito
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" className="bg-white/5 border-white/10 text-white hover:bg-white/10 px-12 py-8 rounded-2xl text-lg font-bold transition-all">
                    Falar com Engenheiro
                  </Button>
                </div>
                
                <div className="mt-10 flex items-center justify-center gap-2 text-white/30 text-xs font-black uppercase tracking-[0.2em]">
                   <ShieldCheck className="w-4 h-4 text-[#71d7ff]" />
                   Setup em tempo recorde • Sem fidelidade
                </div>
              </AnimatedSection>
            </div>

            {/* ================= FAQ ================= */}
            {faqItems.length > 0 && (
              <AnimatedSection delay={0.1} className="max-w-4xl mx-auto">
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

                <StaggerContainer>
                  <Accordion type="single" collapsible className="space-y-3">
                    {faqItems.map((item) => (
                      <StaggerItem key={item.q}>
                        <AccordionItem
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
                      </StaggerItem>
                    ))}
                  </Accordion>
                </StaggerContainer>
              </AnimatedSection>
            )}

          </div>
        </section>
        
      </main>
    </>
  );
}