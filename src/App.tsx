import { Routes, Route } from "react-router-dom";
import {Login} from "@/pages/Login";
import {SignUp} from "@/pages/SignUp";
import { ServicePage } from "@/pages/ServicePage";
import { Perfil } from "@/pages/Perfil";
import { ScrollToTop } from "@/components/ScrollToTop";

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
      <ScrollToTop />
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<Home />} />

        {/* Página dos produtos */}
        <Route path="/servicos/:slug" element={<ServicePage />} />

        {/* Página de login */}
        <Route path="/login" element={<Login />} />

        {/* Página de cadastro */}
        <Route path="/signup" element={<SignUp />} />

        {/* Página de perfil */}
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </>
  );
}
