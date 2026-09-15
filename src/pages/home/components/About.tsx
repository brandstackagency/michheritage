export default function About() {
  return (
    <section id="about" className="bg-background-50 py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2 flex justify-center" data-reveal>
            <img
              src="https://public.readdy.ai/ai/img_res/edited_5eeca2404ed3d5437dda6e0af4af80ec_3b24d757.jpg"
              alt="Michelle Young, founder of Mich Heritage"
              title="Mich Heritage Founder"
              className="w-full max-w-md rounded-lg object-cover object-top"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-2 mb-3" data-reveal>
              <div className="w-6 h-px bg-accent-400"></div>
              <i className="ri-flower-line text-primary-700 text-base" aria-hidden="true"></i>
              <div className="w-6 h-px bg-accent-400"></div>
            </div>
            <p className="text-foreground-600 text-xs tracking-[0.3em] uppercase mb-4" data-reveal>
              Heritage is our foundation.
            </p>

            <p className="font-script text-primary-700 text-2xl md:text-3xl mb-3" data-reveal>Our Heritage</p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground-950 mb-5 leading-tight" data-reveal>
              For the woman who loves to look timeless and elegant
            </h2>
            <p className="text-foreground-700 leading-relaxed mb-4" data-reveal>
              The expression of African identity through beautifully crafted, contemporary ceremonial fashion. Mich Heritage is a Nigerian-owned atelier dedicated to crafting bespoke asoebi and custom pieces for the modern woman who refuses to compromise on style.
            </p>
            <p className="text-foreground-700 leading-relaxed mb-6" data-reveal>
              Rooted in tradition and refined by contemporary elegance, every garment is a love letter to the woman who values heritage and modern sophistication. From intricate asoebi ensembles for your best friend's wedding to show-stopping reception gowns that turn every head in the room, we create pieces that fit not just your body, but your essence.
            </p>

            <div className="flex items-center gap-4 mb-7" data-reveal>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-700 text-background-50">
                <i className="ri-vip-crown-line text-xl" aria-hidden="true"></i>
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground-950">Michelle Young</p>
                <p className="text-xs text-foreground-600">Founder &middot; Award-winning fashion entrepreneur</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4" data-reveal>
              <div className="bg-background-100 rounded-lg p-4 text-center">
                <p className="font-heading text-3xl font-semibold text-primary-700">12+</p>
                <p className="text-xs text-foreground-600 mt-1">Years of Craft</p>
              </div>
              <div className="bg-background-100 rounded-lg p-4 text-center">
                <p className="font-heading text-3xl font-semibold text-primary-700">500+</p>
                <p className="text-xs text-foreground-600 mt-1">Bespoke Pieces</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}