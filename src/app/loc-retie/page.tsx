import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE, CLIENT_IMAGES } from "@/data/siteContent";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Loc Retie & Retightening in Inglewood, CA — Microlocs Maintenance",
  description:
    "Expert loc retie and retightening services in Inglewood, CA. Keep your Microlocs and Sisterlocks™ neat, strong, and healthy with regular professional maintenance.",
  keywords: [
    "loc retie Inglewood CA",
    "loc retightening near me",
    "microlocs maintenance",
    "sisterlocks retie",
    "interlocking locs",
    "loc maintenance Los Angeles",
    "professional loctician",
  ],
  openGraph: {
    title: "Professional Loc Retightening Services in Inglewood, CA",
    description:
      "Maintain the integrity and beauty of your locs with skilled retightening sessions designed around your unique hair growth pattern.",
  },
};

export default function LocRetiePage() {
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
                  Maintain Your Crown
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={100}>
                <h1 className="font-[family-name:var(--font-heading)] text-ivory text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-7">
                  Professional Loc Retie in{" "}
                  <span className="text-sage-light">Inglewood, CA</span>
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <div className="text-ivory/55 text-base lg:text-lg leading-relaxed max-w-xl space-y-4">
                  <p>
                    A consistent retie schedule is the single most important factor in the long-term health, strength, and appearance of your locs. Regular maintenance prevents thinning and keeps your grid immaculate.
                  </p>
                  <p>
                    Specializing in Microlocs, Sisterlocks™, and traditional loc interlocking, we provide meticulous retightening services in Inglewood, CA. Experience a comfortable, tension-sensitive session that ensures your new growth is properly incorporated into your flourishing locs.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Hero Image */}
            <div className="hidden lg:block">
              <AnimateOnScroll delay={150}>
                <div className="relative aspect-[4/5] max-w-sm ml-auto rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={CLIENT_IMAGES[6].src}
                    alt="Full and voluminous dark locs after a professional retightening session"
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
                { step: "01", label: "Assessment", detail: "Checking grid & loc health" },
                { step: "02", label: "Cleansing", detail: "Optional detox & wash" },
                { step: "03", label: "Retightening", detail: "Precision root interlocking" },
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

      {/* ═══ SECTION 1: THE IMPORTANCE OF MAINTENANCE ═══ */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Image */}
            <AnimateOnScroll>
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-lg max-w-md mx-auto lg:mx-0">
                <Image
                  src={CLIENT_IMAGES[12].src}
                  alt="Beautifully maintained microlocs from behind showing neat parting"
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
                  Protect Your Investment
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={50}>
                <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-3xl lg:text-4xl font-bold leading-tight mb-6">
                  Why Regular Reties Matter
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll delay={100}>
                <div className="space-y-4 text-charcoal/70 text-[15px] leading-relaxed">
                  <p>
                    Locs are famed for being a low-maintenance hairstyle, but &quot;low-maintenance&quot; does not mean &quot;no-maintenance.&quot; The new hair growing from your scalp must be routinely guided into your existing loc shaft to maintain structural integrity. 
                  </p>
                  <p>
                    When you skip your retightening appointments, your loose new growth begins to intertwine with neighboring locs. Over time, this causes severe matting at the roots, which destroys your clean parting grid. Unraveling this matting is painful, time-consuming, and can cause immense breakage and thinning at the follicle.
                  </p>
                  <p>
                    By coming in for a <strong className="text-charcoal">professional loc retie in Inglewood</strong> on a steady schedule, you eliminate the risk of loc snapping, prevent product buildup inside the matted roots, and keep your hair looking incredibly neat, polished, and ready for any professional or casual setting without daily styling efforts.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <div className="mt-8 bg-sage-muted rounded-2xl p-6 flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-sage/15 flex items-center justify-center mt-0.5">
                    <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-charcoal font-semibold text-sm mb-1">Time Sensitive</p>
                    <p className="text-charcoal/60 text-sm leading-relaxed">
                      Retightening appointments are generally booked in 2-to-3 hour blocks. If a client goes far beyond their recommended retie window, the appointment will require significantly more time and incur additional fees for reconstruction.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MAINTENANCE RESULTS OVER TIME ═══ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimateOnScroll>
              <p className="text-sage text-xs tracking-[0.2em] uppercase font-semibold mb-3 font-[family-name:var(--font-accent)] text-sm">
                Consistency Pays Off
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={50}>
              <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-3xl lg:text-4xl font-bold leading-tight mb-4">
                Maintenance Results Over Time
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <p className="text-charcoal/60 text-base leading-relaxed max-w-2xl mx-auto">
                Regular retie appointments are the key to healthy, beautiful locs. See how consistent maintenance transforms locs over months and years.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Cynthia — Maintenance Journey */}
            <AnimateOnScroll delay={100}>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-xl font-bold mb-2">Cynthia&apos;s Maintenance Journey</h3>
                <p className="text-charcoal/50 text-sm mb-6">Softer texture &mdash; consistent interlock maintenance</p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { src: "/images/textures/cynthia-before-install.jpg", label: "Start", alt: "Cynthia before microloc installation" },
                    { src: "/images/textures/cynthia-interlock-maintenance.jpg", label: "Maintenance", alt: "Cynthia after interlock maintenance" },
                    { src: "/images/textures/cynthia-1yr-later.jpg", label: "1+ Year", alt: "Cynthia 1+ year of consistent maintenance" },
                  ].map((img) => (
                    <div key={img.src}>
                      <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md">
                        <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 33vw, 16vw" />
                      </div>
                      <p className="text-center text-charcoal/50 text-[10px] font-semibold tracking-wide uppercase mt-2">{img.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Robin — Before/After */}
            <AnimateOnScroll delay={200}>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-xl font-bold mb-2">Robin&apos;s Transformation</h3>
                <p className="text-charcoal/50 text-sm mb-6">Microlocs &mdash; interlock method</p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { src: "/images/textures/robin-before-install.jpg", label: "Before", alt: "Robin before microlocs installation" },
                    { src: "/images/textures/robin-after-install.jpg", label: "After Install", alt: "Robin after microlocs installation" },
                  ].map((img) => (
                    <div key={img.src}>
                      <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md">
                        <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                      </div>
                      <p className="text-center text-charcoal/50 text-[10px] font-semibold tracking-wide uppercase mt-2">{img.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2: OUR METHOD ═══ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Content — left on desktop */}
            <div className="order-2 lg:order-1">
              <AnimateOnScroll>
                <p className="text-sage text-xs tracking-[0.2em] uppercase font-semibold mb-3 font-[family-name:var(--font-accent)] text-sm">
                  The Technique
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={50}>
                <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-3xl lg:text-4xl font-bold leading-tight mb-6">
                  Precision Interlocking for Longevity
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll delay={100}>
                <div className="space-y-4 text-charcoal/70 text-[15px] leading-relaxed">
                  <p>
                    We specialize in the <strong className="text-charcoal">interlocking method</strong> for retightening. Unlike palm-rolling, which relies heavily on gels, waxes, and continued palm friction to hold the hair together until the next wash, interlocking physically weaves the new growth back through the root base.
                  </p>
                  <p>
                    This technique creates a secure, instantly locked base that will not unravel when you wash your hair or go swimming. It is the absolute required standard for Sisterlocks™ and Microlocs, and many clients with Traditional Locs are converting to interlocking for the superior durability and sweat-resistance it offers active lifestyles.
                  </p>
                  <p>
                    We use specialized, snag-free interlocking tools to weave the hair in a specific rotational pattern. We are highly trained to ensure that the lock is tightened securely <em className="italic">without</em> causing excessive tension on the scalp. A properly executed retighten should feel snug and secure, never painful or headache-inducing.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <div className="mt-8 bg-sage-muted rounded-2xl p-6 flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-sage/15 flex items-center justify-center mt-0.5">
                    <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-charcoal font-semibold text-sm mb-1">Product-Free Methodology</p>
                    <p className="text-charcoal/60 text-sm leading-relaxed">
                      Because interlocking operates on hair structure rather than holding products, you avoid the heavy build-up of waxes and gels that often plague other maintenance methods. 
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
                    src={CLIENT_IMAGES[4].src}
                    alt="Close up of a freshly interlocked grid showing neat roots"
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

      {/* ═══ RECOMMENDED FREQUENCY ═══ */}
      <section className="py-20 lg:py-28 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(235,115,33,0.06),transparent_50%)]" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <AnimateOnScroll>
              <p className="text-sage-light/80 text-xs tracking-[0.2em] uppercase font-semibold mb-4 font-[family-name:var(--font-accent)] text-sm">
                The Schedule
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={50}>
              <h2 className="font-[family-name:var(--font-heading)] text-ivory text-3xl lg:text-4xl font-bold leading-tight mb-6">
                How Often Should You Retie?
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <p className="text-ivory/55 text-base leading-relaxed max-w-2xl mx-auto">
                Your maintenance frequency depends on your hair texture, growth rate, and loc size. Adhering to these generally recommended windows keeps costs predictable and hair healthy.
              </p>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={150}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Microlocs */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-sage/15 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-sage-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>
                <h3 className="text-ivory font-semibold text-lg mb-2">4 to 6 Weeks</h3>
                <p className="text-ivory/50 text-sm leading-relaxed">
                  Ideal for Sisterlocks™ and Microlocs with high loc counts. Keeping the roots tight prevents the tiny grid from shifting or breaking due to friction.
                </p>
              </div>

              {/* Medium Locs */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-sage/15 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-sage-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-ivory font-semibold text-lg mb-2">6 to 8 Weeks</h3>
                <p className="text-ivory/50 text-sm leading-relaxed">
                  Ideal for thicker Microlocs or Traditional-sized interlocking locs. Because the roots cover a larger area of the scalp, slightly longer resting periods are safe.
                </p>
              </div>

              {/* Signs you waited too long */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-sage/15 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-sage-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-ivory font-semibold text-lg mb-2">Beyond 8 Weeks</h3>
                <p className="text-ivory/50 text-sm leading-relaxed">
                  Going over 8 weeks causes severe stretching and marrying. If you are past due, book immediately as grid reconstruction fees will be applied to repair the neglected roots.
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
              Keep Them Pristine
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h2 className="font-[family-name:var(--font-heading)] text-ivory text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6">
              Book Your Retightening in Inglewood
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="text-ivory/55 text-base leading-relaxed max-w-xl mx-auto mb-10">
              Stay on track with your loc journey. Secure your maintenance appointment and leave the studio with perfectly neat, beautiful, tension-free locs.
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
                Book Retie Appointment
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
