import { useEffect, useState } from 'react';
import { WHATSAPP_LINK } from '@/mocks/fashionData';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Bespoke', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Book Now', href: '#book' },
];

const darkLogo = 'https://storage.helloreaddy.io/project_files/fadfed30-83fe-436c-8b18-5e231c9b888a/43b73214-1581-4b45-b1c7-14ed1a8321aa_compressed_eb8a2f96-1ad9-4456-8d66-08f49d7b56df.webp';
const whiteLogo = 'https://storage.helloreaddy.io/project_files/fadfed30-83fe-436c-8b18-5e231c9b888a/eab36918-27f3-4151-a6c3-221d34484cac_compressed_Reviews---2.webp';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background-50/96 backdrop-blur border-b border-background-200' : 'bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between px-4 md:px-6 h-16 md:h-20">
        <a href="#top" className="flex items-center gap-2.5 cursor-pointer">
          <img
            src={scrolled ? darkLogo : whiteLogo}
            alt="Mich Heritage"
            className="h-11 w-11 md:h-12 md:w-12 rounded-full object-cover"
          />
          <span
            className={`font-bold uppercase tracking-[0.28em] text-xs md:text-sm whitespace-nowrap ${scrolled ? 'text-foreground-900' : 'text-background-50'}`}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Mich Heritage
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium whitespace-nowrap cursor-pointer transition-colors ${
                scrolled ? 'text-foreground-700 hover:text-primary-700' : 'text-background-50/90 hover:text-background-50'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/michheritage_"
            target="_blank"
            rel="noreferrer nofollow"
            aria-label="Mich Heritage on Instagram"
            className={`flex items-center justify-center w-9 h-9 rounded-full whitespace-nowrap cursor-pointer transition-colors ${
              scrolled
                ? 'text-foreground-700 hover:text-primary-700'
                : 'text-background-50/90 hover:text-background-50'
            }`}
          >
            <i className="ri-instagram-line text-lg" aria-hidden="true"></i>
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer nofollow"
            className={`flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-full whitespace-nowrap cursor-pointer transition-colors ${
              scrolled
                ? 'bg-primary-700 hover:bg-primary-800 text-background-50'
                : 'border border-background-50/60 text-background-50 hover:bg-background-50/10'
            }`}
          >
            <i className="ri-whatsapp-line" aria-hidden="true"></i>
            Enquire
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full cursor-pointer"
          aria-label="Toggle menu"
        >
          <i className={`text-2xl ${scrolled ? 'text-foreground-900' : 'text-background-50'} ${open ? 'ri-close-line' : 'ri-menu-line'}`} aria-hidden="true"></i>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background-50 border-b border-background-200 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-foreground-800 text-sm font-medium py-2 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/michheritage_"
            target="_blank"
            rel="noreferrer nofollow"
            className="flex items-center gap-2 text-foreground-700 hover:text-primary-700 text-sm font-medium py-2 cursor-pointer transition-colors"
          >
            <i className="ri-instagram-line" aria-hidden="true"></i>
            @michheritage_
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer nofollow"
            className="flex items-center justify-center gap-2 bg-primary-700 text-background-50 text-sm font-medium px-4 py-2.5 rounded-full cursor-pointer"
          >
            <i className="ri-whatsapp-line" aria-hidden="true"></i>
            Enquire on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}