import { WHATSAPP_LINK } from '@/mocks/fashionData';

const whiteLogo = 'https://storage.helloreaddy.io/project_files/fadfed30-83fe-436c-8b18-5e231c9b888a/eab36918-27f3-4151-a6c3-221d34484cac_compressed_Reviews---2.webp';

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-background-100 border-t border-primary-800/40">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src={whiteLogo}
                alt="Mich Heritage"
                className="h-10 w-10 rounded-full object-cover flex-shrink-0"
              />
              <span
                className="font-bold uppercase tracking-[0.28em] text-xs text-background-50 whitespace-nowrap"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Mich Heritage
              </span>
            </div>
            <p className="text-sm text-background-100/70 leading-relaxed max-w-xs mb-4">
              Rooted in Culture. Refined for the Modern Woman.
            </p>
            <p className="text-background-100/50 text-[10px] tracking-[0.25em] uppercase">
              By Appointment Only
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-background-50 mb-4">
              <a href="#top" className="cursor-pointer">Quick Links</a>
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="text-background-100/70 hover:text-background-50 cursor-pointer transition-colors">About</a></li>
              <li><a href="#services" className="text-background-100/70 hover:text-background-50 cursor-pointer transition-colors">Bespoke Services</a></li>
              <li><a href="#gallery" className="text-background-100/70 hover:text-background-50 cursor-pointer transition-colors">Gallery</a></li>
              <li><a href="#book" className="text-background-100/70 hover:text-background-50 cursor-pointer transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-background-50 mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer nofollow" className="flex items-center gap-2 text-background-100/70 hover:text-background-50 cursor-pointer transition-colors">
                  <i className="ri-whatsapp-line" aria-hidden="true"></i>
                  <span>Enquire on WhatsApp</span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@michheritage.com" className="flex items-center gap-2 text-background-100/70 hover:text-background-50 cursor-pointer transition-colors">
                  <i className="ri-mail-line" aria-hidden="true"></i>
                  <span>hello@michheritage.com</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/michheritage_" target="_blank" rel="noreferrer nofollow" className="flex items-center gap-2 text-background-100/70 hover:text-background-50 cursor-pointer transition-colors">
                  <i className="ri-instagram-line" aria-hidden="true"></i>
                  <span>@michheritage_</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-background-100/70">
                <i className="ri-map-pin-line" aria-hidden="true"></i>
                <span>Lagos, Nigeria &middot; Serving clients worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-800/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-background-100/50">
          <p>&copy; {new Date().getFullYear()} Mich Heritage. All rights reserved.</p>
          <p>Bespoke Asoebi &amp; Custom Pieces &middot; Lagos, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}