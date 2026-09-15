import { WHATSAPP_LINK } from '@/mocks/fashionData';

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer nofollow"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary-700 text-background-50 text-xl sm:text-2xl cursor-pointer transition-transform hover:scale-110"
    >
      <i className="ri-whatsapp-line" aria-hidden="true"></i>
    </a>
  );
}