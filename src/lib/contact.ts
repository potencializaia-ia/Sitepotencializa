export const WHATSAPP_NUMBER = "5554991412254";

export function whatsappLink(message = "Olá! Quero um orçamento para um site.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
