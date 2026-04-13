import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/data/siteContent";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Loc Stages Guide — Microlocs & Sisterlocks™ Progression | Locs By Steph B",
  description:
    "Learn about the 4 loc stages: starter, budding, teenage, and mature. Understand how your unique hair characteristics shape your microlocs or Sisterlocks™ journey.",
  keywords: [
    "loc stages",
    "starter locs phase",
    "budding locs phase",
    "teenage locs phase",
    "mature locs phase",
    "microlocs progression",
    "sisterlocks stages",
    "how locs form",
  ],
  openGraph: {
    title: "The Loc Stages — Microlocs Progression Guide",
    description:
      "Understand the beautiful stages your locs will go through as they mature and evolve with Locs By Steph B.",
  },
};

export default function LocStagesPage() {
  const stageImages = [
    { src: "/images/loc-stages/stage1.webp", alt: "Stage 1 - Starter Phase (0 to 3 months) infographic showing characteristics of newly installed locs" },
    { src: "/images/loc-stages/stage2.webp", alt: "Stage 2 - Budding Phase (3 to 6 months) infographic showing how locs start to swell and tangle" },
    { src: "/images/loc-stages/stage3.webp", alt: "Stage 3 - Teenage Phase (6 to 18 months) infographic detailing the loc expansion and maturation process" },
    { src: "/images/loc-stages/stage4.webp", alt: "Stage 4 - Mature Phase (18+ months) infographic showing fully compressed and sealed locs" },
  ];

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-navy/70 to-charcoal" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 pt-36 lg:pt-44 pb-16 lg:pb-24 text-center">
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
              Your Evolution
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h1 className="font-[family-name:var(--font-heading)] text-ivory text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-7">
              What Are The Loc Stages and Will Your Locs Look Like Your{" "}
              <span className="text-sage-light italic">Loc Crush?</span>
            </h1>
          </AnimateOnScroll>
        </div>
        <div className="h-px bg-sage/15" />
      </section>

      {/* ═══ INTRODUCTION COPY ═══ */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="prose prose-lg lg:prose-xl prose-p:text-charcoal/70 prose-p:leading-relaxed prose-strong:text-charcoal max-w-none">
              <p className="first-letter:font-[family-name:var(--font-heading)] first-letter:text-6xl first-letter:font-bold first-letter:text-navy first-letter:mr-3 first-letter:float-left">
                Many people fall in love with a loc crush—someone whose locs look full,
                uniform, or perfectly styled—and assume they can walk into a salon
                and ask for that exact look. The truth is, locs don&apos;t work that way.
              </p>
              
              <p>
                Your final result is shaped by your own unique hair characteristics: 
                <strong> your curl pattern, density, porosity, and even how you care for your scalp and body</strong>. 
                No two heads of hair will loc the same, and that&apos;s what makes each journey personal and powerful.
              </p>

              <p>
                The locking process unfolds in stages—<strong className="text-charcoal">starter, budding, teenage, and mature</strong>—and how quickly you move through them depends on your hair type, health, lifestyle, water quality, and product choices. Tight curls or coils tend to loc faster, while looser or smoother strands take more time to mesh and compact. Using the right shampoo and filtered water can make a big difference, helping your hair transition through each phase cleanly and evenly.
              </p>
              
              <div className="bg-sage-muted border-l-4 border-sage p-6 rounded-r-2xl mt-8">
                <p className="m-0 text-charcoal/80 font-medium italic">
                  Scroll through the slides below to see what these stages can look like—and remember, your loc journey is meant to look like you, not your loc crush.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══ INFOGRAPHICS DISPLAY ═══ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="space-y-12 lg:space-y-20">
            {stageImages.map((image, i) => (
              <AnimateOnScroll key={image.src} delay={i * 100}>
                <div className="relative w-full rounded-2xl lg:rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1600}
                    height={900}
                    className="w-full h-auto object-contain bg-charcoal"
                    style={{ maxHeight: '80vh' }}
                  />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ REAL CLIENT PROGRESSIONS ═══ */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimateOnScroll>
              <p className="text-sage text-xs tracking-[0.25em] uppercase font-semibold mb-4 font-[family-name:var(--font-accent)] text-base">
                Real Results
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                How Different Hair Textures{" "}
                <span className="text-navy">Progress Over Time</span>
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <p className="text-charcoal/60 text-lg leading-relaxed max-w-2xl mx-auto">
                Every texture locs differently. Here are real client journeys showing how different hair types transform from installation through 1+ years of maturation.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Client Timeline: Cynthia */}
          <AnimateOnScroll delay={100}>
            <div className="mb-16">
              <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-xl font-bold mb-2">Cynthia</h3>
              <p className="text-charcoal/50 text-sm mb-6">Softer texture all over &mdash; Microlocs with Interlock Maintenance</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
                {[
                  { src: "/images/textures/cynthia-before-install.jpg", label: "Before Install", alt: "Cynthia — softer texture before microloc installation" },
                  { src: "/images/textures/cynthia-interlock-maintenance.jpg", label: "Interlock Maintenance", alt: "Cynthia — after interlock maintenance session" },
                  { src: "/images/textures/cynthia-1yr-later.jpg", label: "1+ Year Later", alt: "Cynthia — softer texture microlocs after 1+ year of maturation" },
                ].map((img) => (
                  <div key={img.src} className="relative">
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
                      <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
                    </div>
                    <p className="text-center text-charcoal/60 text-xs font-semibold tracking-wide uppercase mt-3">{img.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Client Timeline: Jasmine */}
          <AnimateOnScroll delay={150}>
            <div className="mb-16">
              <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-xl font-bold mb-2">Jasmine</h3>
              <p className="text-charcoal/50 text-sm mb-6">Tighter curl pattern + high density hair &mdash; Microlocs (Interlocking Method)</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
                {[
                  { src: "/images/textures/jasmine-before.jpg", label: "Before Install", alt: "Jasmine — tighter curl pattern and high density hair before microlocs" },
                  { src: "/images/textures/jasmine-microlocs-interlock.jpg", label: "Microlocs Installed", alt: "Jasmine — microlocs installed using interlocking method" },
                  { src: "/images/textures/jasmine-1yr-later.jpg", label: "1+ Year Later", alt: "Jasmine — tighter curl pattern microlocs after 1+ year" },
                ].map((img) => (
                  <div key={img.src} className="relative">
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
                      <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
                    </div>
                    <p className="text-center text-charcoal/60 text-xs font-semibold tracking-wide uppercase mt-3">{img.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Client Timeline: Tia */}
          <AnimateOnScroll delay={200}>
            <div className="mb-16">
              <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-xl font-bold mb-2">Tia</h3>
              <p className="text-charcoal/50 text-sm mb-6">Tighter curl pattern, high density &mdash; Sisterlocks™ (Interlock Method Only)</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
                {[
                  { src: "/images/textures/tia-before-sisterlocks.jpg", label: "Before Install", alt: "Tia — tighter curl pattern before Sisterlocks™ installation" },
                  { src: "/images/textures/tia-during-sisterlocks.jpg", label: "During Install", alt: "Tia — during Sisterlocks™ installation using interlock method" },
                  { src: "/images/textures/tia-1yr-later.jpg", label: "1+ Year Later", alt: "Tia — Sisterlocks™ after 1+ year of beautiful maturation" },
                ].map((img) => (
                  <div key={img.src} className="relative">
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
                      <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
                    </div>
                    <p className="text-center text-charcoal/60 text-xs font-semibold tracking-wide uppercase mt-3">{img.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Robin Before/After */}
          <AnimateOnScroll delay={250}>
            <div className="mb-16">
              <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-xl font-bold mb-2">Robin</h3>
              <p className="text-charcoal/50 text-sm mb-6">Microlocs &mdash; Interlock Method</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 max-w-2xl mx-auto">
                {[
                  { src: "/images/textures/robin-before-install.jpg", label: "Before Install", alt: "Robin — before microlocs installation" },
                  { src: "/images/textures/robin-after-install.jpg", label: "After Install", alt: "Robin — after microlocs installation using interlock method" },
                ].map((img) => (
                  <div key={img.src} className="relative">
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
                      <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
                    </div>
                    <p className="text-center text-charcoal/60 text-xs font-semibold tracking-wide uppercase mt-3">{img.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Additional Texture Progressions */}
          <AnimateOnScroll delay={300}>
            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-xl font-bold mb-6 text-center">More Texture Progressions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 max-w-2xl mx-auto">
                {[
                  { src: "/images/textures/texture-progression-01.jpg", alt: "Loc texture progression — showing how locs develop and mature over time" },
                  { src: "/images/textures/texture-progression-02.jpg", alt: "Loc texture progression — different hair types at various maturation stages" },
                ].map((img) => (
                  <div key={img.src} className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
                    <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══ CTA CTA ═══ */}
      <section className="py-20 lg:py-28 bg-charcoal relative overflow-hidden mt-12">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-sage/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(235,115,33,0.06),transparent_60%)]" />
        
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <p className="text-sage-light text-xs tracking-[0.25em] uppercase font-semibold mb-6 font-[family-name:var(--font-accent)] text-lg">
              Embrace Your Own Journey
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="font-[family-name:var(--font-heading)] text-ivory text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-8">
              Start Your Loc Evolution
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-ivory/60 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
              Every phase of locking brings new beauty and freedom. Book a consultation today to map out your personalized loc journey with expert care.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 bg-sage text-charcoal rounded-full text-sm font-semibold tracking-[0.08em] uppercase hover:bg-sage-light transition-all duration-300 hover:shadow-lg hover:shadow-sage/20"
              >
                Schedule My Consultation
              </a>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-3 text-ivory/70 hover:text-ivory transition-colors text-sm tracking-wide"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
