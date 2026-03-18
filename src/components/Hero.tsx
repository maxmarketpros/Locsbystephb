import Image from "next/image";
import { SITE, CLIENT_IMAGES } from "@/data/siteContent";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Hero() {
  return (
    <section className="relative bg-charcoal overflow-hidden border-b border-ivory/5">
      {/* Luxury Editorial Background Layering */}
      <div className="absolute inset-0 bg-charcoal" />
      {/* Subtle deep navy glow behind text */}
      <div className="absolute top-0 left-0 w-full lg:w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_30%_40%,rgba(27,42,74,0.4),transparent_60%)] pointer-events-none" />
      {/* Soft warm sage accent glow behind images */}
      <div className="absolute top-[-10%] right-[-10%] w-[80%] lg:w-[60%] h-[80%] lg:h-[100%] bg-[radial-gradient(circle_at_70%_30%,rgba(235,115,33,0.06),transparent_50%)] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Top spacing to clear fixed header + top bar */}
        <div className="pt-32 lg:pt-40" />

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-4 xl:gap-0 pb-16 lg:pb-28 relative">
          {/* Unifying center glow/haze to visually connect text to images */}
          <div className="hidden lg:block absolute top-[40%] left-[45%] w-[40%] h-[60%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(235,115,33,0.06),transparent_60%)] blur-[80px] -z-10 pointer-events-none" />
          <div className="hidden lg:block absolute top-[50%] left-[50%] w-[30%] h-[50%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent_60%)] blur-[60px] -z-10 pointer-events-none" />

          {/* Text Content — left side */}
          <div className="w-full lg:w-5/12 z-10 lg:pr-6 xl:pr-10">
            <AnimateOnScroll>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-10 bg-sage/60" />
                <p className="text-sage-light/90 text-[11px] md:text-xs tracking-[0.25em] uppercase font-semibold font-[family-name:var(--font-accent)]">
                  Microlocs &amp; Sisterlocks Specialist
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h1 className="font-[family-name:var(--font-heading)] text-ivory text-5xl md:text-[4rem] lg:text-[4.25rem] xl:text-[4.75rem] font-normal leading-[1.05] tracking-tight mb-8">
                Premier Loc Stylist in <br className="hidden md:block lg:pb-2" />
                <span className="text-sage italic font-light whitespace-wrap md:whitespace-nowrap text-4xl md:text-[3.75rem] lg:text-[4rem] xl:text-[4.5rem]">Inglewood, CA</span>
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="text-ivory/60 text-[15px] lg:text-[17px] leading-relaxed max-w-[26rem] mb-12 font-[family-name:var(--font-body)] font-light">
                Experience Rooted Maintenance—expert Microlocs installation and Sisterlocks care. A holistic hair journey built on beauty, empowerment, and intentional healing.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-14">
                <a
                  href={SITE.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 bg-sage text-charcoal rounded-full text-xs font-bold tracking-[0.1em] uppercase hover:bg-sage-light transition-all duration-500 hover:shadow-[0_0_24px_rgba(235,115,33,0.25)]"
                >
                  Book Consultation
                </a>
                <a
                  href="#services"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 border border-ivory/20 text-ivory rounded-full text-xs font-bold tracking-[0.1em] uppercase hover:border-ivory/60 hover:bg-ivory/5 transition-all duration-500"
                >
                  Explore Services
                </a>
              </div>
              
              {/* Trust Row / Micro Details */}
              <div className="flex flex-col sm:flex-row flex-wrap sm:items-center gap-x-6 gap-y-3 pt-8 border-t border-ivory/10">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-sage/80" />
                  <span className="text-ivory/40 text-[10px] md:text-[11px] uppercase tracking-widest font-semibold">Weekend appointments</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-sage/80" />
                  <span className="text-ivory/40 text-[10px] md:text-[11px] uppercase tracking-widest font-semibold">Microlocs &amp; Sisterlocks</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-sage/80" />
                  <span className="text-ivory/40 text-[10px] md:text-[11px] uppercase tracking-widest font-semibold">Call (202) 744-8419</span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Editorial Images — right side */}
          <div className="w-full lg:w-7/12 relative mt-8 lg:mt-0 xl:pl-4">
            <AnimateOnScroll delay={100}>
              <div className="relative w-full max-w-[32rem] lg:max-w-none mx-auto aspect-[4/5] sm:aspect-square lg:aspect-[6/5] flex items-center justify-center lg:justify-end">
                
                {/* Soft Ambient Glow */}
                <div className="absolute top-1/2 left-[50%] lg:left-[45%] -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-sage-light/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
                <div className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-navy-light/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

                {/* Primary dominant image */}
                <div className="relative w-[85%] sm:w-[75%] lg:w-[75%] xl:w-[78%] aspect-[3/4] rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] z-20 translate-x-4 lg:translate-x-0">
                  <Image
                    src={CLIENT_IMAGES[1].src}
                    alt={CLIENT_IMAGES[1].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 85vw, 68vw"
                    priority
                  />
                  {/* Softest possible inner shadow offset */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-charcoal/10 rounded-[2rem] lg:rounded-[2.5rem] pointer-events-none" />
                </div>
                
                {/* Secondary tucked/overlapping accent image */}
                <div className="absolute bottom-[-10%] lg:bottom-[-5%] xl:bottom-[-2%] left-[-5%] lg:left-[8%] xl:left-[10%] w-[42%] sm:w-[38%] lg:w-[38%] xl:w-[40%] aspect-[5/6] rounded-[1.5rem] lg:rounded-[2rem] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.9)] z-30 transform hover:-translate-y-2 transition-transform duration-700 bg-charcoal/40 p-1 md:p-1.5 border-[0.5px] border-ivory/20 backdrop-blur-sm">
                  <div className="relative w-full h-full rounded-[1.25rem] lg:rounded-[1.75rem] overflow-hidden">
                    <Image
                      src={CLIENT_IMAGES[5].src}
                      alt={CLIENT_IMAGES[5].alt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 42vw, 35vw"
                      priority
                    />
                  </div>
                </div>

                {/* Micro / Luxury Details (Badge) */}
                <div className="absolute top-[18%] lg:top-[20%] right-[-5%] sm:right-[-2%] lg:right-[-4%] z-40 bg-charcoal/90 backdrop-blur-xl border border-ivory/15 rounded-full px-5 py-2.5 shadow-2xl hidden sm:flex items-center gap-2 transform hover:scale-105 transition-transform duration-500">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-sage"></span>
                  </span>
                  <span className="text-sage-light text-[9px] lg:text-[10px] uppercase tracking-[0.2em] font-medium leading-none">Accepting Appointments</span>
                </div>
                
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
