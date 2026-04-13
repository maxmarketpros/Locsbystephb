import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/data/siteContent";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Location & Parking | Locs By Steph B — Inglewood, CA",
  description:
    "Find our Inglewood, CA salon location. Get parking instructions, view entrance photos, and review our NO WALK-INS policy before your loc appointment.",
  keywords: [
    "Locs By Steph B location",
    "Inglewood loctician address",
    "Naturally You Salon Inglewood",
    "loc consultation parking",
  ],
};

export default function LocationAndParkingPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative bg-charcoal overflow-hidden pt-36 lg:pt-44 pb-16 lg:pb-24">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-navy/70 to-charcoal" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(235,115,33,0.06),transparent_50%)]" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sage-light/50 text-xs tracking-[0.15em] uppercase hover:text-sage-light transition-colors mb-8"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Home
            </Link>
          </AnimateOnScroll>

          <AnimateOnScroll delay={50}>
            <p className="text-sage-light/80 text-[13px] tracking-[0.2em] uppercase font-medium mb-5 font-[family-name:var(--font-accent)]">
              Where to Find Us
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h1 className="font-[family-name:var(--font-heading)] text-ivory text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-7">
              Inglewood, CA <br className="hidden sm:block" />
              <span className="text-sage-light">Location &amp; Parking</span>
            </h1>
          </AnimateOnScroll>
        </div>
        
        {/* Clean edge */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-sage/15" />
      </section>

      {/* ═══ ADDRESS & ENTRANCES ═══ */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-3xl lg:text-4xl font-bold mb-4">
                Naturally You Salon
              </h2>
              <a 
                href="https://maps.google.com/?q=8464+Crenshaw+Blvd,+Inglewood,+CA+90305" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-navy hover:text-sage transition-colors text-lg lg:text-xl border-b border-navy/20 hover:border-sage pb-1"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                8464 Crenshaw Blvd, Inglewood, CA 90305
              </a>
            </div>
          </AnimateOnScroll>

          {/* Entrance Images Side by Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            <AnimateOnScroll delay={100}>
               <div className="flex flex-col gap-4 text-center">
                 <div className="relative aspect-square w-full rounded-3xl overflow-hidden shadow-lg border border-charcoal/5">
                   <Image
                     src="/images/Parking%20images/Front-entry.png"
                     alt="Front entry of Naturally You Salon"
                     fill
                     className="object-cover"
                     sizes="(max-width: 640px) 100vw, 50vw"
                   />
                 </div>
                 <p className="font-[family-name:var(--font-heading)] text-charcoal text-xl font-bold tracking-wide">
                   Front Entrance
                 </p>
               </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
               <div className="flex flex-col gap-4 text-center">
                 <div className="relative aspect-square w-full rounded-3xl overflow-hidden shadow-lg border border-charcoal/5">
                   <Image
                     src="/images/Parking%20images/Back-entry.png"
                     alt="Back entry of Naturally You Salon"
                     fill
                     className="object-cover"
                     sizes="(max-width: 640px) 100vw, 50vw"
                   />
                 </div>
                 <p className="font-[family-name:var(--font-heading)] text-charcoal text-xl font-bold tracking-wide">
                   Back Entrance
                 </p>
               </div>
            </AnimateOnScroll>
          </div>

        </div>
      </section>

      {/* ═══ PARKING DIAGRAM & INSTRUCTIONS ═══ */}
      <section className="py-20 lg:py-28 bg-white border-t border-charcoal/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Context */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <AnimateOnScroll>
                <p className="text-sage font-[family-name:var(--font-accent)] tracking-[0.2em] uppercase font-semibold text-sm mb-4">
                  Arrival Instructions
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={100}>
                <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-4xl lg:text-5xl font-bold leading-tight mb-8">
                  Inglewood, CA <span className="text-navy">Parking</span>
                </h2>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <div className="space-y-6 text-charcoal/80 text-lg leading-relaxed">
                  <p>
                    Street parking is available along <strong>85th and 86th street</strong>.
                  </p>
                  
                  <div className="bg-sage-muted border-l-4 border-sage p-6 rounded-r-2xl shadow-sm mt-8">
                    <p className="font-semibold text-charcoal mb-2">Important Note on Parking</p>
                    <p className="text-charcoal/80 text-base m-0">
                      Street parking is available, but please note that parking is extremely tight at this location. <strong>You will need to allow a little extra buffer time</strong> before your appointment to find parking.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Diagram */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <AnimateOnScroll delay={150}>
                <div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl border border-charcoal/10 bg-ivory p-2">
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
                    <Image
                      src="/images/Parking%20images/Parking-diagram.png"
                      alt="Map diagram showing available parking around the salon"
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

          </div>

        </div>
      </section>

      {/* ═══ POLICIES & CTA ═══ */}
      <section className="py-24 lg:py-32 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(235,115,33,0.08),transparent_70%)]" />
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          
          <AnimateOnScroll>
             <div className="bg-charcoal/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-12 text-center mb-16 shadow-2xl">
                <div className="w-16 h-16 mx-auto rounded-full bg-red-500/10 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h2 className="font-[family-name:var(--font-heading)] text-ivory text-3xl font-bold uppercase tracking-widest mb-4">
                  No Walk-Ins
                </h2>
                <p className="text-ivory/80 text-lg lg:text-xl max-w-2xl mx-auto">
                  To ensure the highest quality of service and dedicated time for every client, all services <strong>must be scheduled in advance</strong> via the booking site. No exceptions.
                </p>
             </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="text-center">
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 bg-sage text-charcoal rounded-full text-base font-semibold tracking-[0.08em] uppercase hover:bg-sage-light transition-all duration-300 hover:shadow-lg hover:shadow-sage/20"
              >
                Start Your Loc Journey
              </a>
            </div>
          </AnimateOnScroll>

        </div>
      </section>
    </>
  );
}
