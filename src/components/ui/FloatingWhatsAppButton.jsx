import { MessageCircle } from 'lucide-react';
import { siteData } from '../../data/siteData';

/**
 * FloatingWhatsAppButton — fixed bottom-right FAB visible on all screen sizes.
 * Opens WhatsApp with a pre-filled greeting message.
 */
export default function FloatingWhatsAppButton() {
  const number = siteData.whatsapp.replace(/\D/g, '');
  const message = encodeURIComponent(
    "Hi Minhaj! I found your portfolio and I'm interested in a website for my business."
  );
  const href = `https://wa.me/${number}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with me on WhatsApp"
      className="fab-whatsapp"
    >
      <MessageCircle size={24} />
    </a>
  );
}
