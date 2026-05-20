import { Header } from "@/components/Header";
import { ResultadoClient } from "@/components/ResultadoClient";

export function Resultado() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001f3f] to-[#2D2D4A] text-white">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <ResultadoClient />
      </div>
    </div>
  );
}

export default Resultado;
