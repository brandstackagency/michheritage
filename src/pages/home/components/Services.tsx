import { services } from '@/mocks/fashionData';

export default function Services() {
  return (
    <section id="services" className="bg-primary-950 py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14" data-reveal>
          <p className="font-script text-accent-300 text-2xl md:text-3xl mb-3">What We Create</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-background-50 mb-4">Bespoke Services</h2>
          <p className="text-background-100/80 leading-relaxed">
            Every piece begins with a conversation and ends with a garment that feels like it was made just for you. Because it was.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={service.title} data-reveal data-reveal-delay={index * 80} className="bg-primary-900/40 rounded-lg p-6 md:p-7 border border-primary-800/40">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent-500/20 text-accent-400 mb-5">
                <i className={`${service.icon} text-2xl`} aria-hidden="true"></i>
              </div>
              <h3 className="font-heading text-xl font-semibold text-background-50 mb-2">{service.title}</h3>
              <p className="text-sm text-background-100/70 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}