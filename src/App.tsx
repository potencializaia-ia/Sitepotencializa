import { Routes, Route } from "react-router-dom";
import { ServicePage } from "./pages/ServicePage";

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
    <Routes>
      {/* Página principal */}
      <Route path="/" element={<Home />} />

      {/* Página dos produtos */}
      <Route path="/servicos/:slug" element={<ServicePage />} />
    </Routes>
  );
}
