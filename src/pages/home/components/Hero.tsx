import { WHATSAPP_LINK } from '@/mocks/fashionData';

export default function Hero() {
  return (
    <section id="top" className="relative w-full h-[480px] sm:h-[520px] md:h-[700px] flex items-center justify-center text-center overflow-hidden">
      <img
        src="https://public.readdy.ai/ai/img_res/edited_72f72768d37d34df84d05d262221f868_00b3af78.jpg"
        alt="Mich Heritage bespoke asoebi fashion"
        title="Mich Heritage Bespoke & Custom Pieces"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950/70 via-primary-900/60 to-primary-950/80"></div>

      <div className="relative z-10 w-full px-5 md:px-6 max-w-3xl mx-auto" data-reveal>
        <p className="font-bold text-background-50 tracking-[0.3em] uppercase text-xs sm:text-sm mb-4 md:mb-5" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Mich Heritage
        </p>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-background-50 leading-tight mb-4 md:mb-5">
          Rooted in Culture.
          <span className="block mt-1">Refined for the Modern Woman.</span>
        </h1>
        <p className="font-script text-accent-300 text-2xl sm:text-3xl md:text-4xl mb-8 md:mb-10">
          By Appointment Only
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
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