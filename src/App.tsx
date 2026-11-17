import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Páginas secundárias: só são baixadas quando alguém abre a página.
// Assim a página inicial carrega mais rápido.
const ServicePage = lazy(() => import("@/pages/ServicePage").then((m) => ({ default: m.ServicePage })));
const SaaS = lazy(() => import("@/pages/SaaS").then((m) => ({ default: m.SaaS })));
const Diagnostico = lazy(() => import("@/pages/Diagnostico").then((m) => ({ default: m.Diagnostico })));
const Resultado = lazy(() => import("@/pages/Resultado").then((m) => ({ default: m.Resultado })));

// Components & Sections
import { ScrollToTop } from "@/components/ScrollToTop";
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/sections/Hero';
import { Portfolio } from '@/sections/Portfolio';
import { Services } from '@/sections/Services';
import { Benefits } from '@/sections/Benefits';
import { Methodology } from '@/sections/Methodology';
import { Pricing } from '@/sections/Pricing';
import { FAQ } from '@/sections/FAQ';

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <Benefits />
        <Methodology />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      {/* Garante que a troca de rota sempre resete o scroll */}
      <ScrollToTop />
      
      <Suspense fallback={<div className="min-h-screen bg-[#0F172A]" />}>
      <Routes>
        {/* Landing Page Central */}
        <Route path="/" element={<Home />} />

        {/* Vertical de Serviços Dinâmica */}
        <Route path="/servicos/:slug" element={<ServicePage />} />

        {/* Nova Rota para o SaaS */}
        <Route path="/saas" element={<SaaS />} />

        {/* SaaS - Diagnóstico */}
        <Route path="/diagnostico" element={<Diagnostico />} />
        <Route path="/resultado" element={<Resultado />} />
      </Routes>
      </Suspense>
    </>
  );
}