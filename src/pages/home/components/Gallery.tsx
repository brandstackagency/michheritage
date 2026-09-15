import { galleryItems } from '@/mocks/fashionData';

export default function Gallery() {
  return (
    <section id="gallery" className="bg-background-50 py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14" data-reveal>
          <p className="font-script text-primary-700 text-2xl md:text-3xl mb-3">The Collection</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground-950 mb-4">Recent Creations</h2>
          <p className="text-foreground-700 leading-relaxed">
            A glimpse of the bespoke asoebi, bridal ensembles, and custom pieces crafted for women who show up beautifully.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {galleryItems.map((item, index) => (
            <figure key={item.id} data-reveal data-reveal-delay={index * 80} className="group relative overflow-hidden rounded-lg cursor-pointer">
              <img
                src={item.image}
                alt={item.title}
                title={`${item.title}, Mich Heritage bespoke fashion`}
                className="w-full h-64 sm:h-80 object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-primary-950/80 via-primary-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-accent-300 text-xs uppercase tracking-wider mb-1">{item.category}</span>
                <span className="text-background-50 font-heading text-lg font-semibold">{item.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Instagram teaser */}
        <div data-reveal className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 py-8 px-6 rounded-lg border border-background-200 bg-background-100/60">
          <div className="flex items-center justify-center w-11 h-11 rounded-full bg-primary-100/60 text-primary-700">
            <i className="ri-instagram-line text-xl" aria-hidden="true"></i>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-foreground-950 font-heading text-lg font-semibold leading-snug">Follow us on Instagram</p>
            <p className="text-foreground-600 text-sm mt-0.5">Behind-the-scenes, new creations &amp; client moments, updated regularly.</p>
          </div>
          <a
            href="https://www.instagram.com/michheritage_"
            target="_blank"
            rel="noreferrer nofollow"
            className="sm:ml-auto flex items-center gap-2 bg-primary-700 hover:bg-primary-800 text-background-50 text-sm font-medium px-5 py-2.5 rounded-full whitespace-nowrap cursor-pointer transition-colors"
          >
            <span>@michheritage_</span>
            <i className="ri-arrow-right-line" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>
  );
}