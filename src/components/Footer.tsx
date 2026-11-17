import { ArrowUp } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { whatsappLink } from '@/lib/contact';

const navLinks = [
  { title: 'Portfólio', href: '/#portfolio' },
  { title: 'Serviços', href: '/#servicos' },
  { title: 'Como funciona', href: '/#processo' },
  { title: 'Planos', href: '/#planos' },
  { title: 'FAQ', href: '/#faq' },
];

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#0a0a0a] bg-hero-gradient pt-16 pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#7fdbff]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-12 text-center lg:text-left">
          {/* Marca */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start gap-6">
            <a href="/" className="font-display text-2xl font-extrabold text-white tracking-tighter">
              Potencializa<span className="text-[#ff851b]">.</span>ia
            </a>
            <p className="text-white/40 text-sm max-w-xs leading-relaxed">
              Criamos sites profissionais para empresas, com design sob medida, segurança e acompanhamento depois da entrega.
            </p>
            <a
              href={whatsappLink('Olá! Vim pelo site da Potencializa.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold text-white/80 hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all duration-300"
            >
              <SiWhatsapp className="w-4 h-4" />
              Fale com a gente
            </a>
          </div>

          {/* Navegação */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em] opacity-30">Navegação</h4>
            <nav className="grid grid-cols-2 gap-x-6 gap-y-4 max-w-xs mx-auto lg:mx-0">
              {navLinks.map((link) => (
                <a key={link.title} href={link.href} className="text-sm text-white/50 hover:text-[#ff851b] transition-colors">
                  {link.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Contato */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em] opacity-30">Contato</h4>
            <div className="text-sm text-white/50 space-y-3">
              <p>Passo Fundo, RS</p>
              <a
                href={whatsappLink('Olá! Vim pelo site da Potencializa.')}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white font-bold hover:text-[#ff851b] transition-colors"
              >
                (54) 99141-2254
              </a>
              <a href="mailto:potencializa.ia@gmail.com" className="block text-white/80 hover:text-[#ff851b] transition-colors break-all">
                potencializa.ia@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-white/20 font-bold uppercase tracking-widest text-center">
            © {new Date().getFullYear()} Potencializa IA • Todos os direitos reservados
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-white/30 hover:text-white transition-colors"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest">Voltar ao topo</span>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#ff851b] transition-colors">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
