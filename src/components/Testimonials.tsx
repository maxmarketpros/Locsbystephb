import { TESTIMONIALS } from "@/data/siteContent";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Testimonials() {
  const featured = TESTIMONIALS.find((t) => t.featured);
  const others = TESTIMONIALS.filter((t) => !t.featured);

  return (
    <section className="py-24 lg:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimateOnScroll>
            <p className="text-sage text-xs tracking-[0.25em] uppercase font-semibold mb-4 font-[family-name:var(--font-accent)] text-base">
              Client Stories
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              What Clients Say About Their{" "}
              <span className="text-navy">Loc Specialist</span>
            </h2>
          </AnimateOnScroll>
        </div>

        {/* Featured Testimonial */}
        {featured && (
          <AnimateOnScroll delay={150}>
            <div className="relative max-w-4xl mx-auto mb-16">
              <div className="bg-white rounded-3xl p-10 lg:p-14 shadow-sm relative overflow-hidden">
                {/* Decorative quote mark */}
                <div className="absolute top-6 left-8 text-sage/10 font-[family-name:var(--font-heading)] text-[120px] lg:text-[160px] leading-none select-none pointer-events-none">
                  &ldquo;
                </div>

                <div className="relative">
                  <blockquote className="font-[family-name:var(--font-heading)] text-charcoal text-xl sm:text-2xl lg:text-3xl leading-relaxed italic mb-8">
                    &ldquo;{featured.quote}&rdquo;
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-[1px] bg-sage" />
                    <div>
                      <p className="text-charcoal font-semibold text-sm tracking-wide">
                        {featured.name}
                      </p>
                      <p className="text-charcoal/40 text-xs tracking-wider">
                        {featured.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        )}

        {/* Other Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {others.map((testimonial, i) => (
            <AnimateOnScroll key={testimonial.name} delay={200 + i * 100}>
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className="w-4 h-4 text-gold"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-charcoal/70 text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 pt-4 border-t border-charcoal/5">
                  <div className="w-8 h-8 rounded-full bg-sage-muted flex items-center justify-center">
                    <span className="text-sage text-xs font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-charcoal text-xs font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-charcoal/40 text-[11px]">
                      {testimonial.date}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
