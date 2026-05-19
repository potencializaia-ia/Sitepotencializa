import { Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

const navLinks = [
  { title: 'Soluções', href: '#produtos' },
  { title: 'Planos', href: '#planos' },
  { title: 'Cases', href: '#cases' },
  { title: 'SaaS', href: '#saas' },
  { title: 'Contato', href: '#contato' },
];

const socialLinks = [
  { icon: WhatsAppIcon, href: 'https://wa.me/555491412254', label: 'WhatsApp' },
  { icon: Instagram, href: 'https://www.instagram.com/potencializa.ia/', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/potencializa-ia', label: 'LinkedIn' },
];

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#0a0a0a] bg-hero-gradient pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Glow Azul sutil no canto inferior para espelhar o Hero */}
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#7fdbff]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-16">
          {/* Logo Col */}
          <div className="lg:col-span-5 space-y-8">
            <a href="#" className="text-2xl font-bold text-white tracking-tighter">
              Potencializa<span className="text-[#ff851b]">.</span>ia
            </a>
            <p className="text-white/40 text-sm max-w-xs leading-relaxed">
              Transformando empresas com IA: soluções personalizadas, implementação ágil e treinamento especializado para resultados reais.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/50 hover:bg-[#ff851b] hover:text-white hover:border-[#ff851b] transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Col */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em] opacity-30">Navegação</h4>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a key={link.title} href={link.href} className="text-sm text-white/50 hover:text-[#ff851b] transition-colors">
                    {link.title}
                  </a>
                ))}
              </nav>
            </div>
            <div className="space-y-6">
              <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em] opacity-30">Legal</h4>
              <nav className="flex flex-col gap-4">
                <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Privacidade</a>
                <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Termos</a>
              </nav>
            </div>
          </div>

          {/* Location Col */}
          <div className="lg:col-span-3 space-y-6 text-right lg:text-left">
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em] opacity-30">Contato</h4>
            <div className="text-sm text-white/50 space-y-2">
              <p>Passo Fundo - RS</p>
              <p className="pt-4 text-white font-bold">+55 54 99141-2254</p>
              <p className="pt-4 text-white/80"> Potencializa.ia@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-white/20 font-bold uppercase tracking-widest">
            © 2026 Potencializa IA • Todos os direitos reservados
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