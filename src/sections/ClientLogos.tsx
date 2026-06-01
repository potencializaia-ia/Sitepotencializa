import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/AnimatedSection';
import {
  SiWhatsapp, SiInstagram, SiFacebook, SiTelegram,
  SiGmail, SiGooglesheets, SiGoogledrive,
  SiHubspot, SiSalesforce, SiStripe, SiShopify,
  SiNotion, SiZoom, SiOpenai, SiAnthropic,
  SiGooglegemini, SiPerplexity, SiChatwoot,
  SiGoogle,
} from 'react-icons/si';
import type { IconType } from 'react-icons';
import googleagendaLogo from '@/images/googleagenda.svg';
import mercadopagoLogo from '@/images/mercadopago.svg';
import microsoftLogo from '@/images/microsoft.svg';
import pipedriveLogo from '@/images/pipedrive.svg';
import rdstationLogo from '@/images/rdstation.svg';

type Technology = {
  name: string;
  color: string;
  icon?: IconType;
  initials?: string;
  image?: string;
};

const technologies: Technology[] = [
  { name: 'WhatsApp',        color: 'bg-[#3A3A4A]', icon: SiWhatsapp },
  { name: 'WhatsApp Business', color: 'bg-[#3A3A4A]', icon: SiWhatsapp },
  { name: 'Instagram',       color: 'bg-[#3A3A4A]', icon: SiInstagram },
  { name: 'Facebook',        color: 'bg-[#3A3A4A]', icon: SiFacebook },
  { name: 'Telegram',        color: 'bg-[#3A3A4A]', icon: SiTelegram },
  { name: 'Gmail',           color: 'bg-[#3A3A4A]', icon: SiGmail },
  { name: 'Google Sheets',   color: 'bg-[#3A3A4A]', icon: SiGooglesheets },
  { name: 'Google Drive',    color: 'bg-[#3A3A4A]', icon: SiGoogledrive },
  { name: 'Google Calendar', color: 'bg-[#3A3A4A]', image: googleagendaLogo },
  { name: 'HubSpot',         color: 'bg-[#3A3A4A]', icon: SiHubspot },
  { name: 'RD Station',      color: 'bg-[#3A3A4A]', image: rdstationLogo },
  { name: 'Pipedrive',       color: 'bg-[#3A3A4A]', image: pipedriveLogo },
  { name: 'Salesforce',      color: 'bg-[#3A3A4A]', icon: SiSalesforce },
  { name: 'Chatwoot',        color: 'bg-[#3A3A4A]', icon: SiChatwoot },
  { name: 'ChatGPT',         color: 'bg-[#3A3A4A]', icon: SiOpenai },
  { name: 'Claude',          color: 'bg-[#3A3A4A]', icon: SiAnthropic },
  { name: 'Gemini',          color: 'bg-[#3A3A4A]', icon: SiGooglegemini },
  { name: 'Perplexity',      color: 'bg-[#3A3A4A]', icon: SiPerplexity },
  { name: 'Google',          color: 'bg-[#3A3A4A]', icon: SiGoogle },
  { name: 'Mercado Pago',    color: 'bg-[#3A3A4A]', image: mercadopagoLogo },
  { name: 'Stripe',          color: 'bg-[#3A3A4A]', icon: SiStripe },
  { name: 'Shopify',         color: 'bg-[#3A3A4A]', icon: SiShopify },
  { name: 'Notion',          color: 'bg-[#3A3A4A]', icon: SiNotion },
  { name: 'Microsoft 365',   color: 'bg-[#3A3A4A]', image: microsoftLogo },
  { name: 'Zoom',            color: 'bg-[#3A3A4A]', icon: SiZoom },
];

export function ClientLogos() {
  return (
    <section className="py-20 bg-white overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
            Conectamos com as ferramentas que você já usa
          </p>
        </AnimatedSection>
      </div>

      <div className="relative flex items-center">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="flex gap-8 items-center"
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <div key={`${tech.name}-${index}`} className="flex-shrink-0 group">
              <div className="flex items-center gap-4 px-6 py-3 bg-[#F9F9FB] rounded-2xl border border-gray-100 group-hover:border-[#ff851b]/30 group-hover:bg-white group-hover:shadow-xl group-hover:shadow-orange-500/5 transition-all duration-500">
                <div className={`w-10 h-10 ${tech.color} rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 flex-shrink-0 overflow-hidden`}>
                  {tech.image ? (
                    <img src={tech.image} alt={tech.name} className="w-8 h-8 object-contain brightness-0 invert" />
                  ) : tech.icon ? (
                    <tech.icon className="w-6 h-6 text-white" />
                  ) : (
                    <span className="text-xs font-bold text-white">
                      {tech.initials}
                    </span>
                  )}
                </div>
                <span className="text-sm font-semibold text-[#2D2D4A] whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
