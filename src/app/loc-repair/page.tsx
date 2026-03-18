import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE, CLIENT_IMAGES } from "@/data/siteContent";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Professional Loc Repair in Inglewood, CA — Fix Damaged, Thinning Locs",
  description:
    "Expert loc repair and restoration services in Inglewood, CA. Specializing in fixing thinning, broken, or damaged Microlocs and Sisterlocks. Save your locs today.",
  keywords: [
    "loc repair Inglewood CA",
    "fix damaged locs",
    "loc restoration",
    "loc reattachment",
    "microlocs repair",
    "sisterlocks repair",
    "thinning locs fix",
    "loc maintenance CA",
  ],
  openGraph: {
    title: "Expert Loc Repair & Restoration in Inglewood, CA",
    description:
      "Don't cut your damaged locs. Discover our professional loc repair services to fix thinning, breakage, and unraveling in Inglewood, CA.",
  },
};

export default function LocRepairPage() {
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
                  Restore Your Crown
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={100}>
                <h1 className="font-[family-name:var(--font-heading)] text-ivory text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-7">
                  Expert Loc Repair in{" "}
                  <span className="text-sage-light">Inglewood, CA</span>
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <div className="text-ivory/55 text-base lg:text-lg leading-relaxed max-w-xl space-y-4">
                  <p>
                    Damaged, thinning, or breaking locs can be deeply discouraging, but they rarely mean the end of your locking journey. Many locs that appear beyond saving simply need professional structural reinforcement. 
                  </p>
                  <p>
                    Whether your locs are suffering due to postpartum shedding, excessive tension, accidental pulling, color damage, or improper retightening techniques, we specialize in meticulously restoring the integrity of Microlocs, Sisterlocks, and Traditional Locs right here in Inglewood.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Hero Image */}
            <div className="hidden lg:block">
              <AnimateOnScroll delay={150}>
                <div className="relative aspect-[4/5] max-w-sm ml-auto rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={CLIENT_IMAGES[8].src}
                    alt="Healthy restored locs after professional loc repair"
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
                { step: "01", label: "Consultation", detail: "Damage assessment & plan" },
                { step: "02", label: "Reconstruction", detail: "Strengthening weak points" },
                { step: "03", label: "Aftercare", detail: "Regimen for healthy growth" },
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

      {/* ═══ SECTION 1: COMMON CAUSES OF DAMAGE ═══ */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Image */}
            <AnimateOnScroll>
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-lg max-w-md mx-auto lg:mx-0">
                <Image
                  src={CLIENT_IMAGES[3].src}
                  alt="Beautiful healthy locs showcasing strong roots and full density"
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
                  Understanding Loc Damage
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={50}>
                <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-3xl lg:text-4xl font-bold leading-tight mb-6">
                  Why Do Locs Thin and Break?
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll delay={100}>
                <div className="space-y-4 text-charcoal/70 text-[15px] leading-relaxed">
                  <p>
                    Locs are incredibly resilient, but they are not exempt from wear and tear. One of the most common issues clients face in their loc journey is thinning at the roots or along the shaft. This can happen for various structural, environmental, or physiological reasons.
                  </p>
                  <p>
                    <strong className="text-charcoal">Tension and styling</strong> are two leading culprits. Consistently styling the hair too tightly puts massive strain on the follicles at the scalp, leading to traction alopecia and severe thinning at the root base. When the root is weak, it can no longer support the weight of the growing loc, inevitably leading to snapping.
                  </p>
                  <p>
                    <strong className="text-charcoal">Improper retightening techniques</strong> also cause issues. Waiting too long between reties (causing locs to tangle and thin out at the base) or interlocking too tightly can permanently compromise the cylindrical structure of the loc, leaving behind thin gaps or holes in the lock shaft. Furthermore, internal changes such as hormone fluctuations, medication side-effects, and postpartum shedding can cause sudden density loss. No matter the cause, rapid professional intervention is critical.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <div className="mt-8 bg-sage-muted rounded-2xl p-6 flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-sage/15 flex items-center justify-center mt-0.5">
                    <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-charcoal font-semibold text-sm mb-1">Do Not Wait</p>
                    <p className="text-charcoal/60 text-sm leading-relaxed">
                      If you notice a loc hanging by a thread or thinning intensely in the middle, wrap it loosely or leave it completely untouched, and schedule a repair consultation immediately. Attempting to DIY fix it can sometimes cause irreparable harm.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2: THE REPAIR PROCESS ═══ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Content — left on desktop */}
            <div className="order-2 lg:order-1">
              <AnimateOnScroll>
                <p className="text-sage text-xs tracking-[0.2em] uppercase font-semibold mb-3 font-[family-name:var(--font-accent)] text-sm">
                  The Restoration
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll delay={50}>
                <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-3xl lg:text-4xl font-bold leading-tight mb-6">
                  Meticulous Reconstruction Techniques
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll delay={100}>
                <div className="space-y-4 text-charcoal/70 text-[15px] leading-relaxed">
                  <p>
                    Repairing locs requires the steady hand of an experienced loctician. Our approach to <strong className="text-charcoal">loc restoration</strong> near Los Angeles relies heavily on precision, using tools and methods that mimic the natural locking process without introducing unnatural, stiff bulges.
                  </p>
                  <p>
                    Depending on the severity of the damage, we might use a specialized crochet hook method. This involves carefully wrapping and pulling the broken fibers back into a cohesive, solid cylinder. If the damage involves missing hair mass—such as a large thinning gap—we can seamlessly weave in 100% human afro-kinky hair (or your own saved shed natural hair) to bridge the gap and reinforce weak points until your own root grows out strong enough to sustain itself.
                  </p>
                  <p>
                    For locs that have snapped off entirely, <strong className="text-charcoal">loc reattachment</strong> is an incredibly effective service. As long as you have saved the broken locs, we can invisibly splice them back onto your healthy new growth at the root. Clients are often amazed that the point of repair is entirely undetectable once reconstructed by a master stylist.
                  </p>
                  <p>
                    Every single repair service is completely bespoke. I carefully examine the tension, density, and natural rotation of your unique locks so that the repairs blend flawlessly over time.
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Consultation callout */}
              <AnimateOnScroll delay={200}>
                <div className="mt-8 bg-sage-muted rounded-2xl p-6 flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-sage/15 flex items-center justify-center mt-0.5">
                    <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-charcoal font-semibold text-sm mb-1">Required Consultation Form</p>
                    <p className="text-charcoal/60 text-sm leading-relaxed">
                      Because loc damage is highly individual, an in-person assessment is absolutely mandatory prior to quoting a price for extensive repairs. A $50 consultation fee applies.
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
                    src={CLIENT_IMAGES[5].src}
                    alt="Precision interlocking loc repair technique on damaged hair"
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

      {/* ═══ ONGOING MAINTENANCE AFTER REPAIR ═══ */}
      <section className="py-20 lg:py-28 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(235,115,33,0.06),transparent_50%)]" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <AnimateOnScroll>
              <p className="text-sage-light/80 text-xs tracking-[0.2em] uppercase font-semibold mb-4 font-[family-name:var(--font-accent)] text-sm">
                Future Proofing
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={50}>
              <h2 className="font-[family-name:var(--font-heading)] text-ivory text-3xl lg:text-4xl font-bold leading-tight mb-6">
                Protecting Your Locs After Repair
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <p className="text-ivory/55 text-base leading-relaxed max-w-2xl mx-auto">
                After undergoing loc reconstruction or reattachment, following a strict aftercare routine is vital for maintaining the physical integrity of the repaired segments.
              </p>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={150}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Wash Carefully */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-sage/15 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-sage-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-ivory font-semibold text-lg mb-2">Gentle Washing</h3>
                <p className="text-ivory/50 text-sm leading-relaxed">
                  Avoid aggressive scrubbing directly over the newly repaired sections. Opt for a gentle massaging technique and consider braiding and banding thin areas during the first few washes.
                </p>
              </div>

              {/* Keep Tension Low */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-sage/15 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-sage-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-ivory font-semibold text-lg mb-2">Zero Tension Styling</h3>
                <p className="text-ivory/50 text-sm leading-relaxed">
                  Steer clear of high ponytails, tight up-do styles, and tight barrel rolls. Give the repaired roots plenty of time to thicken up before adding any stressful tension.
                </p>
              </div>

              {/* Maintenance Schedule */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-sage/15 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-sage-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>
                <h3 className="text-ivory font-semibold text-lg mb-2">Strict Re-tie Schedule</h3>
                <p className="text-ivory/50 text-sm leading-relaxed">
                  Do not exceed your recommended retightening timeframe. Depending on growth, reties are needed every 4 to 8 weeks to prevent matting and recurring weak spots.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══ REPAIR SERVICES SUMMARY ═══ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-3xl lg:text-4xl font-bold leading-tight mb-4">
                Our Specialized Repair Offerings
              </h2>
              <p className="text-charcoal/60 text-base leading-relaxed max-w-2xl mx-auto">
                All repairs are individually quoted based on the severity of the damage and time required. We focus entirely on structural longevity rather than quick fixes.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="bg-ivory rounded-3xl p-8 lg:p-12 shadow-sm">
              <div className="space-y-6">
                {[
                  {
                    icon: "🔍",
                    title: "In-Depth Consultation Assessment",
                    detail: "Detailed root-to-tip evaluation to identify weak spots, evaluate density, and define a comprehensive restoration strategy tailored solely to your unique hair matrix.",
                  },
                  {
                    icon: "🧶",
                    title: "Crochet & Interlock Consolidation",
                    detail: "Expertly combining multiple thinning locs into one stronger, thoroughly reinforced foundational loc using precision crochet techniques, maintaining an organic and aesthetically pleasing look.",
                  },
                  {
                    icon: "🔗",
                    title: "Extension Integration & Reattachment",
                    detail: "Splicing naturally shed locs or high-quality afro-kinky human hair fibers into severely weakened spots to bridge gaps without using any harmful adhensives or glues.",
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
              Ready to Recover?
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h2 className="font-[family-name:var(--font-heading)] text-ivory text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6">
              Schedule Your Repair Consultation in Inglewood
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="text-ivory/55 text-base leading-relaxed max-w-xl mx-auto mb-10">
              Don&apos;t wait until a thinned loc snaps off entirely. Secure your loc&apos;s future health by booking professional structural repair with Locs By Steph B.
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
