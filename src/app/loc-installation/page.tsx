import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE, CLIENT_IMAGES } from "@/data/siteContent";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Professional Loc Installation in Inglewood, CA — Starter Locs",
  description:
    "Start your loc journey right with expert loc installation in Inglewood, CA. Specializing in Microlocs, Sisterlocks™, and Traditional Starter Locs.",
  keywords: [
    "loc installation Inglewood CA",
    "starter locs Inglewood",
    "microlocs establishment",
    "sisterlocks installation near me",
    "how to start locs",
    "loctician Los Angeles",
    "professional loc starter",
  ],
  openGraph: {
    title: "Expert Loc Installation & Establishment in Inglewood, CA",
    description:
      "Begin your natural hair journey with a flawless foundation. Book your Microlocs or Sisterlocks™ installation with our expert stylist in Inglewood.",
  },
};

export default function LocInstallationPage() {
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
                  Begin Your Journey
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={100}>
                <h1 className="font-[family-name:var(--font-heading)] text-ivory text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-7">
                  Expert Loc Installation in{" "}
                  <span className="text-sage-light">Inglewood, CA</span>
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <div className="text-ivory/55 text-base lg:text-lg leading-relaxed max-w-xl space-y-4">
                  <p>
                    The foundation of every beautiful set of locs is a flawless installation. Starting locs requires vision, patience, and a deep understanding of hair density, curl pattern, and grid geometry.
                  </p>
                  <p>
                    Whether you are drawn to the delicate versatility of Microlocs, the premium structured grid of Sisterlocks™, or the organic grounding of Traditional Locs, our dedicated studio in Inglewood provides unparalleled expertise to ensure your journey starts on the right path.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Hero Image */}
            <div className="hidden lg:block">
              <AnimateOnScroll delay={150}>
                <div className="relative aspect-[4/5] max-w-sm ml-auto rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={CLIENT_IMAGES[11].src}
                    alt="Loc installation in progress showing expert grid parting"
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
                { step: "01", label: "Consultation", detail: "Assess texture & test locs" },
                { step: "02", label: "Preparation", detail: "Cleanse & prep the canvas" },
                { step: "03", label: "Establishment", detail: "The full installation process" },
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

      {/* ═══ SECTION 1: WHY PROFESSIONAL INSTALLATION ═══ */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Image */}
            <AnimateOnScroll>
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-lg max-w-md mx-auto lg:mx-0">
                <Image
                  src={CLIENT_IMAGES[4].src}
                  alt="Close up of freshly installed microloc grid"
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
                  The Foundation Matters
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={50}>
                <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-3xl lg:text-4xl font-bold leading-tight mb-6">
                  Why Choose Professional Installation?
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll delay={100}>
                <div className="space-y-4 text-charcoal/70 text-[15px] leading-relaxed">
                  <p>
                    It is entirely possible to start locs at home, but a professional <strong className="text-charcoal">loc installation</strong> provides a critical advantage: an analytically designed foundation. Every head of hair has varying densities, curl patterns, and problem areas (like thin edges or a sensitive crown). 
                  </p>
                  <p>
                    A master loctician takes all of these variables into account before making the very first part. The grid we create during your establishment dictates how your locs will fall, how beautifully they can be styled, and most importantly, how healthy the roots will remain as the locs gain weight over the years.
                  </p>
                  <p>
                    Trying to course-correct a poorly parted grid a year into your journey is extremely difficult and often requires cutting the locs or painful restructuring. By investing in an expert installation in Inglewood, you are securing peace of mind and guaranteeing that your locs will mature effortlessly to their full, stunning potential.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <div className="mt-8 bg-sage-muted rounded-2xl p-6 flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-sage/15 flex items-center justify-center mt-0.5">
                    <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.648-3.265a2.426 2.426 0 01-.867-3.32l4.15-7.184a2.426 2.426 0 013.32-.868l5.648 3.265a2.426 2.426 0 01.867 3.32l-4.15 7.184a2.426 2.426 0 01-3.32.868z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-charcoal font-semibold text-sm mb-1">Tailored for You</p>
                    <p className="text-charcoal/60 text-sm leading-relaxed">
                      We factor in your lifestyle, workout habits, and styling preferences to choose the best sizing and installation method—be it interlocking, two-strand twists, or coils.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2: THE ESTABLISHMENT PROCESS ═══ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Content — left on desktop */}
            <div className="order-2 lg:order-1">
              <AnimateOnScroll>
                <p className="text-sage text-xs tracking-[0.2em] uppercase font-semibold mb-3 font-[family-name:var(--font-accent)] text-sm">
                  The Big Day
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={50}>
                <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-3xl lg:text-4xl font-bold leading-tight mb-6">
                  What to Expect During Establishment
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll delay={100}>
                <div className="space-y-4 text-charcoal/70 text-[15px] leading-relaxed">
                  <p>
                    The establishment day (or days, depending on the loc size) is an exciting milestone. For Microlocs and Sisterlocks™, the process can take anywhere from 15 to 40 hours spread across multiple days. For traditional locs, it typically only takes a few hours. 
                  </p>
                  <p>
                    Before you sit in the chair, your hair must be deeply cleansed, free of all oils, conditioners, to ensure the hair fibers can grip properly during installation. The session begins with establishing an intentional, immaculate grid at the base of the neck, working methodically up to the crown. All installations use our 3 or 4-point rotation exclusively—we do not use the 2-point rotation, as it is more prone to slippage and uneven tension, which can lead to alopecia.
                  </p>
                  <p>
                    We prioritize your comfort throughout the establishment. We take breaks to stretch, hydrate, and relax. While it is a lengthy commitment, witnessing the transformation in the mirror is an unforgettable experience. This is the last time you will ever have to worry about detangling your loose natural hair. 
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Non-Refundable Fee Callout */}
              <AnimateOnScroll delay={200}>
                <div className="mt-8 bg-sage-muted rounded-2xl p-6 flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-sage/15 flex items-center justify-center mt-0.5">
                    <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-charcoal font-semibold text-sm mb-1">Installation Non-Refundable Fee</p>
                    <p className="text-charcoal/60 text-sm leading-relaxed">
                      Due to the immense time blocked out for new installations, a non-refundable <strong className="text-charcoal">$200 non-refundable fee</strong> is required. This guarantees your multi-day session without any scheduling interruptions.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Image — right on desktop */}
            <div className="order-1 lg:order-2">
              <AnimateOnScroll>
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-lg max-w-md mx-auto lg:ml-auto lg:mx-0">
                  <Image
                    src={CLIENT_IMAGES[1].src}
                    alt="Happy client showcasing brand new starter loc installation"
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

      {/* ═══ YOUR 3-STEP PROCESS ═══ */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimateOnScroll>
              <p className="text-sage text-xs tracking-[0.2em] uppercase font-semibold mb-3 font-[family-name:var(--font-accent)] text-sm">
                Your 3-Visit Journey
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={50}>
              <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-3xl lg:text-4xl font-bold leading-tight mb-4">
                The Installation Process
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <p className="text-charcoal/60 text-base leading-relaxed max-w-2xl mx-auto">
                Your journey to Microlocs or Sisterlocks™ begins with a simple 3-visit package — Consultation, Establishment, and your First Retightening.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <AnimateOnScroll delay={100}>
              <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-charcoal/5 h-full">
                <div className="w-12 h-12 rounded-xl bg-sage/15 flex items-center justify-center mb-6">
                  <span className="text-sage font-[family-name:var(--font-heading)] text-2xl font-bold">01</span>
                </div>
                <h3 className="text-charcoal font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Consultation Visit</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed mb-4">
                  We&apos;ll discuss your lifestyle and hair goals, assess your hair&apos;s texture and health, and establish 6&ndash;9 test locks to see how your hair responds over 2&ndash;4 weeks.
                </p>
                <p className="text-sage text-xs font-semibold tracking-wide uppercase">$50 consultation fee</p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-charcoal/5 h-full">
                <div className="w-12 h-12 rounded-xl bg-sage/15 flex items-center justify-center mb-6">
                  <span className="text-sage font-[family-name:var(--font-heading)] text-2xl font-bold">02</span>
                </div>
                <h3 className="text-charcoal font-[family-name:var(--font-heading)] text-xl font-bold mb-3">Establishment Session</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed mb-4">
                  Over the course of 20 to 40 hours, your Microlocs or Sisterlocks™ come to life. Every lock is meticulously crafted to suit your hair type and desired style.
                </p>
                <p className="text-sage text-xs font-semibold tracking-wide uppercase">$200 non-refundable fee to reserve</p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-charcoal/5 h-full">
                <div className="w-12 h-12 rounded-xl bg-sage/15 flex items-center justify-center mb-6">
                  <span className="text-sage font-[family-name:var(--font-heading)] text-2xl font-bold">03</span>
                </div>
                <h3 className="text-charcoal font-[family-name:var(--font-heading)] text-xl font-bold mb-3">First Retightening</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed mb-4">
                  Scheduled 4 weeks after your establishment, we&apos;ll tighten and perfect each lock, ensuring they&apos;re secure and on the right path to beautiful maturation.
                </p>
                <p className="text-sage text-xs font-semibold tracking-wide uppercase">Included in package</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══ INSTALLATION METHODS — BEFORE & AFTER ═══ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimateOnScroll>
              <p className="text-sage text-xs tracking-[0.2em] uppercase font-semibold mb-3 font-[family-name:var(--font-accent)] text-sm">
                Real Transformations
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={50}>
              <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-3xl lg:text-4xl font-bold leading-tight mb-4">
                Before &amp; After Installation
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <p className="text-charcoal/60 text-base leading-relaxed max-w-2xl mx-auto">
                See the transformation from natural hair to freshly installed locs across different installation methods.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Interlock Method */}
            <AnimateOnScroll delay={100}>
              <div>
                <h3 className="text-charcoal font-[family-name:var(--font-heading)] text-lg font-bold mb-4">Microlocs — Interlock Method</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
                      <Image src="/images/install-types/microloc-interlock-before.jpg" alt="Before microloc installation — interlock method" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                    </div>
                    <p className="text-center text-charcoal/50 text-xs font-semibold tracking-wide uppercase mt-2">Before</p>
                  </div>
                  <div>
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
                      <Image src="/images/install-types/microloc-interlock-after.jpg" alt="After microloc installation — interlock method" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                    </div>
                    <p className="text-center text-charcoal/50 text-xs font-semibold tracking-wide uppercase mt-2">After</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Two Strand Twist Method */}
            <AnimateOnScroll delay={200}>
              <div>
                <h3 className="text-charcoal font-[family-name:var(--font-heading)] text-lg font-bold mb-4">Microlocs — Two Strand Twist</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
                      <Image src="/images/install-types/microloc-two-strand-before.jpg" alt="Before microloc installation — two strand twist method" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                    </div>
                    <p className="text-center text-charcoal/50 text-xs font-semibold tracking-wide uppercase mt-2">Before</p>
                  </div>
                  <div>
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
                      <Image src="/images/install-types/microloc-two-strand-after.jpg" alt="After microloc installation — two strand twist method" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                    </div>
                    <p className="text-center text-charcoal/50 text-xs font-semibold tracking-wide uppercase mt-2">After</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Additional install examples */}
          <AnimateOnScroll delay={300}>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { src: "/images/install-types/sisterlocks-interlock-method.jpg", alt: "Sisterlocks™ installed using interlock method" },
                { src: "/images/install-types/consultation-two-strand.jpg", alt: "Consultation for two strand twist installation" },
                { src: "/images/install-types/install-type-01.jpg", alt: "Loc installation example — professional results" },
                { src: "/images/install-types/install-type-02.jpg", alt: "Loc installation showcase — expert grid parting" },
              ].map((img) => (
                <div key={img.src} className="relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 640px) 50vw, 25vw" />
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══ THE ROAD AHEAD ═══ */}
      <section className="py-20 lg:py-28 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(235,115,33,0.06),transparent_50%)]" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <AnimateOnScroll>
              <p className="text-sage-light/80 text-xs tracking-[0.2em] uppercase font-semibold mb-4 font-[family-name:var(--font-accent)] text-sm">
                Navigating the Stages
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={50}>
              <h2 className="font-[family-name:var(--font-heading)] text-ivory text-3xl lg:text-4xl font-bold leading-tight mb-6">
                Your Post-Install Timeline
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <p className="text-ivory/55 text-base leading-relaxed max-w-2xl mx-auto">
                Installation is only the beginning. Understanding the timeline of your new locs will help you navigate the beautiful changes ahead.
              </p>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={150}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Weeks 1-4 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-sage/15 flex items-center justify-center mb-5">
                  <span className="text-sage-light font-[family-name:var(--font-heading)] text-xl font-bold">1</span>
                </div>
                <h3 className="text-ivory font-semibold text-lg mb-2">The Starter Phase (Weeks 1-4)</h3>
                <p className="text-ivory/50 text-sm leading-relaxed">
                  Your locs will look very neat, much like small twists or coils. During this phase, keeping water exposure limited and practicing low-manipulation styling is critical.
                </p>
              </div>

              {/* Month 1 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-sage/15 flex items-center justify-center mb-5">
                  <span className="text-sage-light font-[family-name:var(--font-heading)] text-xl font-bold">2</span>
                </div>
                <h3 className="text-ivory font-semibold text-lg mb-2">The First Retie (4 Weeks)</h3>
                <p className="text-ivory/50 text-sm leading-relaxed">
                  Your very first retightening session is vital. We will check each loc to ensure there is no slippage or unraveling, reinforcing the roots based on your month&apos;s natural growth.
                </p>
              </div>

              {/* Months 3-12 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-sage/15 flex items-center justify-center mb-5">
                  <span className="text-sage-light font-[family-name:var(--font-heading)] text-xl font-bold">3</span>
                </div>
                <h3 className="text-ivory font-semibold text-lg mb-2">Budding to Maturation</h3>
                <p className="text-ivory/50 text-sm leading-relaxed">
                  Between months 3 and 12, your locs will begin to swell, frizz, and eventually compress into mature locs. This is the most transformative part of the beautiful journey.
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
              Ready to Commit?
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h2 className="font-[family-name:var(--font-heading)] text-ivory text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6">
              Schedule Your Loc Installation in Inglewood
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="text-ivory/55 text-base leading-relaxed max-w-xl mx-auto mb-10">
              The only regret clients ever express is wishing they had started sooner. Take the leap, invest in yourself, and schedule your starter loc consultation today.
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
                Book Consultation
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
