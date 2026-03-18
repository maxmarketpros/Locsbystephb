import Image from "next/image";
import { SITE, CLIENT_IMAGES } from "@/data/siteContent";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Hero() {
  return (
    <section className="relative bg-charcoal overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-navy/70 to-charcoal" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Top spacing to clear fixed header + top bar */}
        <div className="pt-36 lg:pt-44" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
          {/* Text Content — left side */}
          <div className="lg:col-span-5 pb-12 lg:pb-20">
            <AnimateOnScroll>
              <p className="text-sage-light/80 text-[13px] tracking-[0.2em] uppercase font-medium mb-5 font-[family-name:var(--font-accent)]">
                Microlocs &amp; Sisterlocks Specialist
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h1 className="font-[family-name:var(--font-heading)] text-ivory text-[2.5rem] sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-bold leading-[1.12] mb-7">
                Premier Loc Stylist in{" "}
                <span className="text-sage-light">Inglewood,&nbsp;CA</span>
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="text-ivory/55 text-[15px] lg:text-base leading-[1.75] max-w-[28rem] mb-9">
                Experience Rooted Maintenance—expert Microlocs installation,
                Sisterlocks, and loc care built on beauty, empowerment, and
                intention. Your hair journey becomes a healing journey.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="flex flex-col sm:flex-row gap-3.5">
                <a
                  href={SITE.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-sage text-charcoal rounded-full text-[13px] font-semibold tracking-[0.08em] uppercase hover:bg-sage-light transition-all duration-300 hover:shadow-lg hover:shadow-sage/20"
                >
                  Book Consultation
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-7 py-3.5 border border-ivory/20 text-ivory rounded-full text-[13px] font-semibold tracking-[0.08em] uppercase hover:bg-ivory/10 transition-all duration-300"
                >
                  Explore Services
                </a>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Images — right side */}
          <div className="lg:col-span-7 pb-10 lg:pb-16">
            <AnimateOnScroll delay={100}>
              <div className="flex gap-4 lg:gap-5 justify-end items-end">
                {/* Primary image */}
                <div className="relative w-[52%] lg:w-[50%] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={CLIENT_IMAGES[1].src}
                    alt={CLIENT_IMAGES[1].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 52vw, 35vw"
                    priority
                  />
                </div>

                {/* Secondary image — offset shorter */}
                <div className="relative w-[44%] lg:w-[44%] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl mt-10 lg:mt-16">
                  <Image
                    src={CLIENT_IMAGES[5].src}
                    alt={CLIENT_IMAGES[5].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 44vw, 30vw"
                    priority
                  />
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>

      {/* Clean edge */}
      <div className="h-px bg-sage/15" />
    </section>
  );
}
