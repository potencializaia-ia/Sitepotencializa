import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const navLinks = [
  { title: 'Soluções', href: '#' },
  { title: 'Segmentos', href: '#' },
  { title: 'Planos', href: '#planos' },
  { title: 'Cases', href: '#cases' },
  { title: 'Blog', href: '#blog' },
  { title: 'Sobre', href: '#sobre' },
  { title: 'Contato', href: '#contato' },
];

const socialLinks = [
  { icon: MessageCircle, href: 'https://wa.me/555491412254', label: 'WhatsApp' },
  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61579244459239', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/potencializa.ia/', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/simplifique-ai-oficial', label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer id="contato" className="bg-footer-gradient pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 pb-12 border-b border-white/10">
          {/* Logo and Social */}
          <div className="space-y-6">
            <a href="#" className="inline-block">
              <span className="text-2xl font-bold text-white">
                Potencializa<span className="text-[#FF0066]">.</span>ia
              </span>
            </a>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
            <a
              href="#"
              className="inline-block text-sm text-white/70 hover:text-white transition-colors"
            >
              Política de Privacidade
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {link.title}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-white/50">
            © 2026 Potencializa
          </p>
          <div className="text-sm text-white/50">
            <p>Passo Fundo - Rio Grande do Sul</p>
            <p>Tel: +55 54 999141-2254</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
