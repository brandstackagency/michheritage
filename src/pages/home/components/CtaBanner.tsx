import { WHATSAPP_LINK } from '@/mocks/fashionData';

export default function CtaBanner() {
  return (
    <section className="relative bg-primary-800 py-20 md:py-28 overflow-hidden">
      <img
        src="https://readdy.ai/api/search-image?query=Close%20up%20detail%20of%20luxurious%20wine%20burgundy%20aso-oke%20fabric%20with%20gold%20thread%20embroidery%20and%20intricate%20handwoven%20patterns%2C%20Nigerian%20textile%20craftsmanship%2C%20dark%20moody%20background%2C%20editorial%20still%20life%20photography%2C%20macro%20fabric%20texture%2C%20rich%20deep%20tones%2C%20artisan%20detail%2C%20beautiful%20craftsmanship&width=1600&height=600&seq=cta-banner-01&orientation=landscape&nocache=true"
        alt="Bespoke asoebi fabric"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-primary-950/80"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 text-center" data-reveal>
        <p className="text-accent-300 text-[10px] md:text-xs tracking-[0.3em] uppercase mb-4">
          Culture. Craftsmanship. Legacy.
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-semibold text-background-50 leading-tight mb-6">
          Woven into every piece.
        </h2>
        <p className="text-background-100/80 text-base leading-relaxed mb-8 max-w-xl mx-auto">
          Every Mich Heritage piece is crafted with intention, care, and an unwavering commitment to making you feel seen, celebrated, and effortlessly elegant.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#book"
            className="w-full sm:w-auto bg-background-50 hover:bg-background-100 text-primary-950 font-medium px-8 py-4 rounded-full whitespace-nowrap cursor-pointer transition-colors"
          >
            Book Your Appointment
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer nofollow"
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-background-50/50 text-background-50 hover:bg-background-50/10 font-medium px-8 py-4 rounded-full whitespace-nowrap cursor-pointer transition-colors"
          >
            <i className="ri-whatsapp-line" aria-hidden="true"></i>
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}