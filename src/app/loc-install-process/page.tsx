import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE, CLIENT_IMAGES } from "@/data/siteContent";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Loc Install Process — Microlocs & Sisterlocks Installation in Inglewood, CA",
  description:
    "Learn the 3-step loc installation process at Locs By Steph B in Inglewood, CA. From consultation to establishment to your first retightening—experience expert Microlocs and Sisterlocks installation.",
  keywords: [
    "loc install process",
    "microlocs installation",
    "sisterlocks installation",
    "loc consultation",
    "starter locs near me",
    "loctician Inglewood CA",
    "loc retightening",
    "how to get locs",
  ],
  openGraph: {
    title: "Loc Install Process — Microlocs & Sisterlocks Installation",
    description:
      "Your 3-step guide to getting Microlocs or Sisterlocks installed by a premier loc stylist in Inglewood, CA.",
  },
};

export default function LocInstallProcessPage() {
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
                  Your Locking Journey
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={100}>
                <h1 className="font-[family-name:var(--font-heading)] text-ivory text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-7">
                  Loc Installation Process in{" "}
                  <span className="text-sage-light">Inglewood, CA</span>
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <p className="text-ivory/55 text-base lg:text-lg leading-relaxed max-w-xl">
                  Your journey to Microlocs or Sisterlocks begins with a simple
                  3-visit package—Consultation, Establishment, and your First
                  Retightening. Here&apos;s exactly what to expect at every step.
                </p>
              </AnimateOnScroll>
            </div>

            {/* Hero Image */}
            <div className="hidden lg:block">
              <AnimateOnScroll delay={150}>
                <div className="relative aspect-[4/5] max-w-sm ml-auto rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={CLIENT_IMAGES[0].src}
                    alt={CLIENT_IMAGES[0].alt}
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
                { step: "01", label: "Consultation", detail: "Hair assessment & test locs" },
                { step: "02", label: "Establishment", detail: "Full loc installation" },
                { step: "03", label: "First Retightening", detail: "4 weeks post-install" },
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

      {/* ═══ STEP 1: CONSULTATION ═══ */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Image */}
            <AnimateOnScroll>
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-lg max-w-md mx-auto lg:mx-0">
                <Image
                  src={CLIENT_IMAGES[3].src}
                  alt="Loc consultation — assessing hair texture and planning your installation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 448px"
                />
                {/* Step badge */}
                <div className="absolute top-6 left-6 bg-charcoal/90 backdrop-blur-sm text-ivory px-4 py-2 rounded-full">
                  <span className="text-xs font-semibold tracking-[0.1em] uppercase">Step 01</span>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Content */}
            <div>
              <AnimateOnScroll>
                <p className="text-sage text-xs tracking-[0.2em] uppercase font-semibold mb-3 font-[family-name:var(--font-accent)] text-sm">
                  Step One
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={50}>
                <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-3xl lg:text-4xl font-bold leading-tight mb-6">
                  The Loc Consultation Visit
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll delay={100}>
                <div className="space-y-4 text-charcoal/70 text-[15px] leading-relaxed">
                  <p>
                    Our journey together starts with a personalized consultation.
                    During this visit, we&apos;ll sit down to discuss your lifestyle,
                    hair goals, and how <strong className="text-charcoal">Microlocs or Sisterlocks®</strong> can
                    help you achieve the hair freedom you desire.
                  </p>
                  <p>
                    I&apos;ll carefully assess your hair&apos;s texture and health, and
                    we&apos;ll decide on the size and style that best suits you. To
                    ensure we&apos;re on the right path, I&apos;ll establish{" "}
                    <strong className="text-charcoal">6–9 test locks</strong> during this session.
                  </p>
                  <p>
                    This test allows us to see how your hair responds over two wash
                    cycles—typically 2–4 weeks, with washing either weekly or
                    bi-monthly. By the end of this visit, you&apos;ll have a clear plan
                    in place and be well on your way to your locking journey.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Fee callout */}
              <AnimateOnScroll delay={200}>
                <div className="mt-8 bg-sage-muted rounded-2xl p-6 flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-sage/15 flex items-center justify-center mt-0.5">
                    <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-charcoal font-semibold text-sm mb-1">Consultation Fee</p>
                    <p className="text-charcoal/60 text-sm leading-relaxed">
                      There is a non-refundable <strong className="text-charcoal">$50 consultation fee</strong> for
                      this visit. This covers your hair assessment, test locks, and
                      personalized installation plan.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STEP 2: ESTABLISHMENT ═══ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Content — left on desktop */}
            <div className="order-2 lg:order-1">
              <AnimateOnScroll>
                <p className="text-sage text-xs tracking-[0.2em] uppercase font-semibold mb-3 font-[family-name:var(--font-accent)] text-sm">
                  Step Two
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={50}>
                <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-3xl lg:text-4xl font-bold leading-tight mb-6">
                  The Loc Establishment Session
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll delay={100}>
                <div className="space-y-4 text-charcoal/70 text-[15px] leading-relaxed">
                  <p className="bg-sage-muted border-l-4 border-sage rounded-r-xl px-5 py-3 text-charcoal/80 text-sm italic">
                    A consultation is required before booking this service.
                  </p>
                  <p>
                    The second visit is your Establishment session—where your{" "}
                    <strong className="text-charcoal">Microlocs or Sisterlocks®</strong> come to life. Over
                    the course of <strong className="text-charcoal">20 to 40 hours</strong>, I&apos;ll meticulously
                    create each lock, ensuring they&apos;re perfectly tailored to your
                    hair type and desired style.
                  </p>
                  <p>
                    Many women feel a bit nervous during this time—it&apos;s a
                    significant commitment—but as you relax and let me handle
                    everything, you&apos;ll begin to feel the excitement of embracing a
                    new, low-maintenance lifestyle.
                  </p>
                  <p>
                    This session isn&apos;t just about creating beautiful locks. It&apos;s
                    about giving you back your time and offering significant cost
                    savings in the long run. Imagine waking up with your hair ready
                    to go, day after day, without the hassle of daily styling.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Deposit callout */}
              <AnimateOnScroll delay={200}>
                <div className="mt-8 bg-sage-muted rounded-2xl p-6 flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-sage/15 flex items-center justify-center mt-0.5">
                    <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-charcoal font-semibold text-sm mb-1">Deposit Required</p>
                    <p className="text-charcoal/60 text-sm leading-relaxed">
                      A <strong className="text-charcoal">$200 deposit</strong> is required to hold your
                      establishment dates. This secures your multi-day session and
                      ensures dedicated time for your installation.
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
                    src={CLIENT_IMAGES[11].src}
                    alt="Loc establishment session — expert Microlocs installation in progress"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 448px"
                  />
                  <div className="absolute top-6 left-6 bg-charcoal/90 backdrop-blur-sm text-ivory px-4 py-2 rounded-full">
                    <span className="text-xs font-semibold tracking-[0.1em] uppercase">Step 02</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STEP 3: FIRST RETIGHTENING ═══ */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Image */}
            <AnimateOnScroll>
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-lg max-w-md mx-auto lg:mx-0">
                <Image
                  src={CLIENT_IMAGES[12].src}
                  alt="First loc retightening session — well-maintained locs after initial installation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 448px"
                />
                <div className="absolute top-6 left-6 bg-charcoal/90 backdrop-blur-sm text-ivory px-4 py-2 rounded-full">
                  <span className="text-xs font-semibold tracking-[0.1em] uppercase">Step 03</span>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Content */}
            <div>
              <AnimateOnScroll>
                <p className="text-sage text-xs tracking-[0.2em] uppercase font-semibold mb-3 font-[family-name:var(--font-accent)] text-sm">
                  Step Three
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={50}>
                <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-3xl lg:text-4xl font-bold leading-tight mb-6">
                  Your First Retightening Session
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll delay={100}>
                <div className="space-y-4 text-charcoal/70 text-[15px] leading-relaxed">
                  <p>
                    Your third visit is scheduled{" "}
                    <strong className="text-charcoal">4 weeks after your establishment</strong>. This
                    session is crucial for ensuring that your locks are forming
                    correctly and are strong enough to continue maturing beautifully.
                  </p>
                  <p>
                    During this visit, I&apos;ll tighten and perfect each lock, making
                    sure they&apos;re secure and on the right path. I&apos;ll also provide
                    you with simple, time-saving tips for maintaining your locks at
                    home—helping you keep your hands out of your hair and letting
                    your locks thrive with minimal effort.
                  </p>
                  <p>
                    By the end of this session, you&apos;ll feel confident that your
                    hair is in excellent shape and that you&apos;re truly experiencing
                    the freedom, time savings, and convenience that Microlocs or
                    Sisterlocks® offer.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ONGOING MAINTENANCE ═══ */}
      <section className="py-20 lg:py-28 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(235,115,33,0.06),transparent_50%)]" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <AnimateOnScroll>
              <p className="text-sage-light/80 text-xs tracking-[0.2em] uppercase font-semibold mb-4 font-[family-name:var(--font-accent)] text-sm">
                After Installation
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={50}>
              <h2 className="font-[family-name:var(--font-heading)] text-ivory text-3xl lg:text-4xl font-bold leading-tight mb-6">
                Ongoing Loc Retightening &amp; Maintenance
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <p className="text-ivory/55 text-base leading-relaxed max-w-2xl mx-auto">
                After your first retightening, regular sessions keep your locs
                healthy, structured, and beautiful as they mature.
              </p>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={150}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Frequency */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-sage/15 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-sage-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>
                <h3 className="text-ivory font-semibold text-lg mb-2">Every 5–8 Weeks</h3>
                <p className="text-ivory/50 text-sm leading-relaxed">
                  Regular retightening sessions are scheduled based on your
                  hair&apos;s unique growth rate and texture. Finer or softer hair
                  may need shorter intervals.
                </p>
              </div>

              {/* Duration */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-sage/15 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-sage-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-ivory font-semibold text-lg mb-2">2–3 Hours Average</h3>
                <p className="text-ivory/50 text-sm leading-relaxed">
                  Average retightening time for loc counts of 350 or less,
                  for clients who maintain their regularly scheduled appointments.
                </p>
              </div>

              {/* Health */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-sage/15 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-sage-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-ivory font-semibold text-lg mb-2">Healthy Maturation</h3>
                <p className="text-ivory/50 text-sm leading-relaxed">
                  Regular retightening is vital for maintaining the structure
                  and health of your locs as they continue to mature and
                  strengthen over time.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══ PACKAGE SUMMARY ═══ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-3xl lg:text-4xl font-bold leading-tight mb-4">
                Your Establishment Package Includes
              </h2>
              <p className="text-charcoal/60 text-base leading-relaxed max-w-2xl mx-auto">
                Everything you need to begin your loc journey with confidence
                and clarity, from your first consultation through your initial
                retightening session.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="bg-ivory rounded-3xl p-8 lg:p-12 shadow-sm">
              <div className="space-y-6">
                {[
                  {
                    icon: "💬",
                    title: "Consultation Visit",
                    detail: "Hair assessment, lifestyle discussion, 6–9 test locks, and personalized installation plan",
                    price: "$50 consultation fee",
                  },
                  {
                    icon: "✨",
                    title: "Establishment Session",
                    detail: "Full Microlocs or Sisterlocks® installation over 20–40 hours, tailored to your hair",
                    price: "$200 deposit to reserve",
                  },
                  {
                    icon: "🔄",
                    title: "First Retightening",
                    detail: "Scheduled 4 weeks post-install to secure, perfect, and strengthen your new locs",
                    price: "Included in package",
                  },
                ].map((item, i) => (
                  <div
                    key={item.title}
                    className={`flex items-start gap-5 ${
                      i < 2 ? "pb-6 border-b border-charcoal/5" : ""
                    }`}
                  >
                    <span className="text-2xl mt-1">{item.icon}</span>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1.5">
                        <h3 className="text-charcoal font-semibold text-base">
                          {item.title}
                        </h3>
                        <span className="text-sage text-xs font-semibold tracking-wide uppercase">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-charcoal/60 text-sm leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
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
              Ready to Begin?
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h2 className="font-[family-name:var(--font-heading)] text-ivory text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6">
              Schedule Your Loc Consultation in Inglewood
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="text-ivory/55 text-base leading-relaxed max-w-xl mx-auto mb-10">
              Your locking journey starts with a single conversation. Book your
              consultation today and take the first step toward hair freedom
              with an experienced loctician near you.
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
                Schedule My Consultation
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
