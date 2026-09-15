const pillars = [
  { icon: 'ri-seedling-line', label: 'ROOTED', desc: 'Inspired by our heritage' },
  { icon: 'ri-vip-crown-line', label: 'REGAL', desc: 'Crafted with excellence' },
  { icon: 'ri-hourglass-line', label: 'TIMELESS', desc: 'Designed for the modern woman' },
  { icon: 'ri-leaf-line', label: 'FEMININE', desc: 'Preserving culture, creating legacy' },
];

export default function BrandPillars() {
  return (
    <section className="bg-background-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16" data-reveal>
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-px bg-accent-400"></div>
            <i className="ri-flower-line text-primary-700 text-lg" aria-hidden="true"></i>
            <div className="w-8 h-px bg-accent-400"></div>
          </div>
          <p className="text-foreground-600 text-xs tracking-[0.3em] uppercase mb-3">
            Heritage is our foundation.
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground-950 leading-tight">
            The expression of African identity
          </h2>
          <p className="text-foreground-600 text-sm md:text-base mt-3 max-w-xl mx-auto">
            through beautifully crafted, contemporary ceremonial fashion.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {pillars.map((p, index) => (
            <div key={p.label} data-reveal data-reveal-delay={index * 80} className="text-center group">
              <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full border border-accent-400/50 bg-accent-100/40 text-accent-700 mx-auto mb-4 transition-all duration-300 group-hover:bg-accent-200/50 group-hover:border-accent-500/60">
                <i className={`${p.icon} text-2xl md:text-3xl`} aria-hidden="true"></i>
              </div>
              <p className="text-xs tracking-[0.25em] uppercase text-accent-700 font-medium mb-2">
                {p.label}
              </p>
              <p className="text-xs text-foreground-600 leading-relaxed max-w-[140px] mx-auto">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}