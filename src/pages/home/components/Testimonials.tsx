import { testimonials } from '@/mocks/fashionData';

export default function Testimonials() {
  return (
    <section className="bg-background-100 py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14" data-reveal>
          <p className="font-script text-primary-700 text-2xl md:text-3xl mb-3">Kind Words</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground-950 mb-4">
            She felt like a queen. So will you.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div key={t.name} data-reveal data-reveal-delay={index * 80} className="bg-background-50 rounded-lg p-7 border border-background-200/70 flex flex-col">
              <div className="flex gap-1 text-accent-600 mb-5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <i key={i} className="ri-star-fill" aria-hidden="true"></i>
                ))}
              </div>
              <p className="text-foreground-700 leading-relaxed text-sm flex-1 mb-5 italic">"{t.quote}"</p>
              <div>
                <p className="font-heading font-semibold text-foreground-950">{t.name}</p>
                <p className="text-xs text-primary-700">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}