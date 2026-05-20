import { Header } from "@/components/Header";
import { ResultadoClient } from "@/components/ResultadoClient";

export function Resultado() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] bg-hero-gradient">
      <Header />
      <div className="pt-32 pb-24 relative overflow-hidden">
        {/* Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#ff851b]/15 blur-[120px] rounded-full opacity-40" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#7fdbff]/10 blur-[100px] rounded-full opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ResultadoClient />
        </div>
      </div>
    </div>
  );
}

export default Resultado;
