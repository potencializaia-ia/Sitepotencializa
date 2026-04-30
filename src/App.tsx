import { Routes, Route } from "react-router-dom";

// Pages
import { Login } from "@/pages/Login";
import { SignUp } from "@/pages/SignUp";
import { ServicePage } from "@/pages/ServicePage";
import { Perfil } from "@/pages/Perfil";
import { EsqueciSenha } from "@/pages/EsqueciSenha";
import { RedefinirSenha } from "@/pages/RedefinirSenha";
import { SaaS } from "@/pages/SaaS"; // Nova página para o produto SaaS
import AuthCallback from "@/pages/AuthCallback"; // O elo perdido do login social

// Components & Sections
import { ScrollToTop } from "@/components/ScrollToTop";
import { FloatingSupport } from "@/components/FloatingSupport"; // O componente neural
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/sections/Hero';
import { ClientLogos } from '@/sections/ClientLogos';
import { Products } from '@/sections/Products';
import { Benefits } from '@/sections/Benefits';
import { Testimonials } from '@/sections/Testimonials';
import { Methodology } from '@/sections/Methodology';
import { Pricing } from '@/sections/Pricing';
import { FAQ } from '@/sections/FAQ';
import { Blog } from '@/sections/Blog';
import { Marquee } from '@/sections/Marquee';
import { FinalCTA } from '@/sections/FinalCTA';

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClientLogos />
        <Products />
        <Benefits />
        <Testimonials />
        <Methodology />
        <Pricing />
        <FAQ />
        <Blog />
        <Marquee />
        <FinalCTA />
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
      
      <Routes>
        {/* Landing Page Central */}
        <Route path="/" element={<Home />} />

        {/* Vertical de Serviços Dinâmica */}
        <Route path="/servicos/:slug" element={<ServicePage />} />

        {/* Fluxo de Autenticação Deep Dark */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        
        {/* Gestão de Credenciais */}
        <Route path="/esqueci-senha" element={<EsqueciSenha />} />
        <Route path="/redefinir-senha" element={<RedefinirSenha />} />

        {/* Command Center (Perfil) */}
        <Route path="/perfil" element={<Perfil />} />

        {/* Nova Rota para o SaaS */}
        <Route path="/saas" element={<SaaS />} />
      </Routes>

      {/* Interface de Suporte Neural Pulsante */}
      <FloatingSupport />
    </>
  );
}