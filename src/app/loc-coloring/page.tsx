import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE, CLIENT_IMAGES } from "@/data/siteContent";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Professional Loc Coloring in Inglewood, CA — Safe Color for Locs",
  description:
    "Expert loc coloring and bleaching services in Inglewood, CA. Safely dye your Microlocs, Sisterlocks, or Traditional Locs while protecting their structural integrity.",
  keywords: [
    "loc coloring Inglewood CA",
    "dyeing locs near me",
    "safe color for locs",
    "bleaching microlocs",
    "loc color specialist",
    "custom loc color",
    "healthy loc color Los Angeles",
  ],
  openGraph: {
    title: "Expert Loc Coloring Services in Inglewood, CA",
    description:
      "Transform your locs with stunning, vibrant color without sacrificing their health. Book a safe, professional color session with Locs By Steph B.",
  },
};

export default function LocColoringPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-navy/70 to-charcoal" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-36 lg:pt-44 pb-16 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div>
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
                  Express Yourself
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={100}>
                <h1 className="font-[family-name:var(--font-heading)] text-ivory text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-7">
                  Safe Loc Coloring in{" "}
                  <span className="text-sage-light">Inglewood, CA</span>
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <div className="text-ivory/55 text-base lg:text-lg leading-relaxed max-w-xl space-y-4">
                  <p>
                    Vibrant honey blondes, deep auburn cherry tones, and dimensional highlights can elevate your loc journey to an entirely new level. But introducing chemicals to locked hair requires advanced scientific understanding.
                  </p>
                  <p>
                    Because locs act like sponges, processing methods that work on loose hair can be disastrous for locs. We provide specialized, deeply conscious color services for Microlocs, Sisterlocks, and Traditional Locs in Inglewood, ensuring that your vibrant new color never comes at the cost of your hair&apos;s health.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Hero Image */}
            <div className="hidden lg:block">
              <AnimateOnScroll delay={150}>
                <div className="relative aspect-[4/5] max-w-sm ml-auto rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={CLIENT_IMAGES[2].src}
                    alt="Shoulder-length golden-brown colored locs styled with natural movement"
                    fill
                    className="object-cover"
                    sizes="384px"
                    priority
                  />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
        <div className="h-px bg-sage/15" />
      </section>

      {/* ═══ OVERVIEW BAR ═══ */}
      <section className="py-12 lg:py-16 bg-white border-b border-charcoal/5">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {[
                { step: "01", label: "Consultation", detail: "Strand test & porosity check" },
                { step: "02", label: "Color Process", detail: "Safe lifting & depositing" },
                { step: "03", label: "Moisture Restoration", detail: "Intense hydration bath" },
              ].map((item) => (
                <div key={item.step} className="flex flex-col items-center gap-2">
                  <span className="text-sage font-[family-name:var(--font-heading)] text-3xl font-bold">
                    {item.step}
                  </span>
                  <p className="text-charcoal font-semibold text-sm tracking-wide">
                    {item.label}
                  </p>
                  <p className="text-charcoal/50 text-xs">{item.detail}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══ SECTION 1: THE DANGERS OF DIY ═══ */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Image */}
            <AnimateOnScroll>
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-lg max-w-md mx-auto lg:mx-0">
                <Image
                  src={CLIENT_IMAGES[9].src}
                  alt="Warm honey-toned locs with professional seamless color application"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 448px"
                />
              </div>
            </AnimateOnScroll>

            {/* Content */}
            <div>
              <AnimateOnScroll>
                <p className="text-sage text-xs tracking-[0.2em] uppercase font-semibold mb-3 font-[family-name:var(--font-accent)] text-sm">
                  Protecting Integrity
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={50}>
                <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-3xl lg:text-4xl font-bold leading-tight mb-6">
                  Why Professional Color is Non-Negotiable
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll delay={100}>
                <div className="space-y-4 text-charcoal/70 text-[15px] leading-relaxed">
                  <p>
                    Dyeing locs requires an entirely different skill set than dyeing loose natural hair. Because a loc is composed of thousands of intertwined hairs tightly compacted together, it acts as a highly absorbent sponge. 
                  </p>
                  <p>
                    When chemical lighteners (bleach) or permanent dyes are applied, they immediately soak deep into the core of the loc. If these chemicals are not thoroughly neutralized and rinsed out—a process much more difficult than rinsing loose hair—they will continue to slowly process from the inside out. Weeks later, this trapped chemical residue literally eats away at the hair fibers, causing the locs to snap in half like dry twigs. 
                  </p>
                  <p>
                    As an expert <strong className="text-charcoal">loc color specialist in Inglewood</strong>, I utilize specific liquid and cream color formulations designed to penetrate carefully and rinse cleanly. We also heavily factor in your loc&apos;s current porosity, previous color history, and moisture levels before opening the cuticles with developers.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <div className="mt-8 bg-sage-muted rounded-2xl p-6 flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-sage/15 flex items-center justify-center mt-0.5">
                    <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-charcoal font-semibold text-sm mb-1">Warning: Henna</p>
                    <p className="text-charcoal/60 text-sm leading-relaxed">
                      If you have previously used Henna or metallic home box-dyes on your locs, you must disclose this during consultation. Applying professional lightener over Henna can cause severe chemical reactions resulting in immediate loc destruction.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2: THE COLOR PROCESS ═══ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Content — left on desktop */}
            <div className="order-2 lg:order-1">
              <AnimateOnScroll>
                <p className="text-sage text-xs tracking-[0.2em] uppercase font-semibold mb-3 font-[family-name:var(--font-accent)] text-sm">
                  Our Methodology
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={50}>
                <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-3xl lg:text-4xl font-bold leading-tight mb-6">
                  Steps to Vibrant, Healthy Locs
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll delay={100}>
                <div className="space-y-4 text-charcoal/70 text-[15px] leading-relaxed">
                  <p>
                    Before committing to a color service, a consultation is mandatory. We will perform a strand test on a hidden loc to verify how quickly your hair lifts, the underlying pigment we are working against, and how well the hair retains its elasticity.
                  </p>
                  <p>
                    On the day of the color session, we apply the developer and lightener with meticulous care, focusing on achieving an even lift without compromising the bonds of the hair. Processing times are strictly monitored. Once the desired level is reached, the locs undergo an extensive, multi-step rinsing and neutralizing protocol to ensure absolutely zero active agents remain inside the loc barrel.
                  </p>
                  <p>
                    Finally, the color relies just as much on the finish as the chemistry. Because coloring strips the hair of its natural lipids, an intensive hydration recovery and pH-balancing bath is performed. This closes the hair cuticle smoothly over the new color molecules, locking in the vibrancy and ensuring your locs remain soft and pliable rather than dry and brittle.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Image — right on desktop */}
            <div className="order-1 lg:order-2">
              <AnimateOnScroll>
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-lg max-w-md mx-auto lg:ml-auto lg:mx-0">
                  <Image
                    src={CLIENT_IMAGES[3].src}
                    alt="Client with rich dark colored locs demonstrating healthy definition"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 448px"
                  />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ POST-COLOR CARE ═══ */}
      <section className="py-20 lg:py-28 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(235,115,33,0.06),transparent_50%)]" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <AnimateOnScroll>
              <p className="text-sage-light/80 text-xs tracking-[0.2em] uppercase font-semibold mb-4 font-[family-name:var(--font-accent)] text-sm">
                Preserve the Shade
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={50}>
              <h2 className="font-[family-name:var(--font-heading)] text-ivory text-3xl lg:text-4xl font-bold leading-tight mb-6">
                Caring for Colored Locs
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <p className="text-ivory/55 text-base leading-relaxed max-w-2xl mx-auto">
                Once you shift to color-treated locs, your at-home regimen must upgrade to match. Colored locs demand dedication to moisture.
              </p>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={150}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Wash Regimen */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-sage/15 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-sage-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-ivory font-semibold text-lg mb-2">Color-Safe Shampoos</h3>
                <p className="text-ivory/50 text-sm leading-relaxed">
                  Harsh clarifying shampoos with high sulfate contents will rapidly strip the deposited color. Switch exclusively to high-quality, sulfate-free, color-safe cleansers.
                </p>
              </div>

              {/* Water Temp */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-sage/15 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-sage-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-ivory font-semibold text-lg mb-2">Cool Water Rinses</h3>
                <p className="text-ivory/50 text-sm leading-relaxed">
                  Hot water opens the hair cuticle, allowing color to bleed out of the loc down the drain. Wash and rinse your hair in cool to lukewarm water to lock the cuticle shut.
                </p>
              </div>

              {/* Deep Conditioning */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-sage/15 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-sage-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-2.773l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                </div>
                <h3 className="text-ivory font-semibold text-lg mb-2">Moisture is Mandatory</h3>
                <p className="text-ivory/50 text-sm leading-relaxed">
                  Lightweight leave-in conditioners and rosewater sprays become your best friend. Colored locs are infinitely more susceptible to dryness and brittleness. Keep them hydrated.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20 lg:py-28 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(235,115,33,0.06),transparent_60%)]" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <p className="text-sage-light/80 text-xs tracking-[0.2em] uppercase font-semibold mb-5 font-[family-name:var(--font-accent)] text-sm">
              Ready for a Change?
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h2 className="font-[family-name:var(--font-heading)] text-ivory text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6">
              Schedule Your Color Consultation
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="text-ivory/55 text-base leading-relaxed max-w-xl mx-auto mb-10">
              Transform your look with colors tailored specifically to enhance your complexion and perfectly complement your loc set, right here in Inglewood.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-sage text-charcoal rounded-full text-sm font-semibold tracking-[0.08em] uppercase hover:bg-sage-light transition-all duration-300 hover:shadow-lg hover:shadow-sage/20"
              >
                Book Color Consultation
              </a>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 text-ivory/60 hover:text-ivory transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {SITE.phone}
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
