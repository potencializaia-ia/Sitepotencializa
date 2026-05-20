import { Header } from "@/components/Header";
import { DiagnosticForm } from "@/components/DiagnosticForm";

export function Diagnostico() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#001f3f] to-[#2D2D4A] text-white">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-center">
            Diagnóstico de Automação IA
          </h1>
          <p className="text-center text-white/70 mb-12">
            Descubra em minutos quais processos da sua empresa podem ser automatizados com IA e quanto você pode economizar.
          </p>
          <DiagnosticForm />
        </div>
      </div>
    </div>
  );
}

export default Diagnostico;
