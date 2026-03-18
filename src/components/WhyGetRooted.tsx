import Image from "next/image";
import { WHY_ROOTED, CLIENT_IMAGES } from "@/data/siteContent";
import AnimateOnScroll from "./AnimateOnScroll";

export default function WhyGetRooted() {
  return (
    <section className="py-24 lg:py-32 bg-navy relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(163,177,138,0.06),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <AnimateOnScroll>
              <div className="relative aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={CLIENT_IMAGES[10].src}
                  alt={CLIENT_IMAGES[10].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 448px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              </div>

              {/* Accent frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-sage/20 rounded-3xl max-w-md mx-auto" />
            </AnimateOnScroll>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <AnimateOnScroll>
              <p className="text-sage-light text-xs tracking-[0.25em] uppercase font-semibold mb-4 font-[family-name:var(--font-accent)] text-base">
                The Rooted Philosophy
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h2 className="font-[family-name:var(--font-heading)] text-ivory text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                {WHY_ROOTED.headline}
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={150}>
              <p className="text-ivory/60 text-lg leading-relaxed mb-12 font-[family-name:var(--font-accent)] italic">
                {WHY_ROOTED.subtitle}
              </p>
            </AnimateOnScroll>

            <div className="space-y-8">
              {WHY_ROOTED.points.map((point, i) => (
                <AnimateOnScroll key={point.title} delay={200 + i * 100}>
                  <div className="flex gap-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-sage/15 flex items-center justify-center mt-1">
                      <span className="text-sage-light font-[family-name:var(--font-heading)] text-lg font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-ivory font-semibold text-lg mb-2">
                        {point.title}
                      </h3>
                      <p className="text-ivory/60 text-sm leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
