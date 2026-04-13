import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/data/siteContent";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title:
    "Loc Services in Inglewood, CA — Installations, Maintenance, Repair & More",
  description:
    "Comprehensive loc services in Inglewood, CA. Sisterlocks™, Microlocs, Traditional Loc installs, interlock maintenance, loc repair, wash services, and trichology assessments by Locs By Steph B.",
  keywords: [
    "loc services Inglewood CA",
    "sisterlocks™ installation",
    "microlocs installation",
    "loc maintenance",
    "interlock retie",
    "loc repair near me",
    "loc detox wash",
    "trichology hair assessment",
    "loc color services",
    "loctician Inglewood",
  ],
  openGraph: {
    title: "Full Loc Services — Installations, Maintenance & Repair | Locs By Steph B",
    description:
      "From new installations to precision repairs, explore every loc service we offer at our Inglewood, CA studio.",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-navy/70 to-charcoal" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-36 lg:pt-44 pb-16 lg:pb-24">
          <div className="max-w-3xl">
            <AnimateOnScroll>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sage-light/50 text-xs tracking-[0.15em] uppercase hover:text-sage-light transition-colors mb-8"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
                Back to Home
              </Link>
            </AnimateOnScroll>

            <AnimateOnScroll delay={50}>
              <p className="text-sage-light/80 text-[13px] tracking-[0.2em] uppercase font-medium mb-5 font-[family-name:var(--font-accent)]">
                Everything We Offer
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h1 className="font-[family-name:var(--font-heading)] text-ivory text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-7">
                Our{" "}
                <span className="text-sage-light">Services</span>
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="text-ivory/55 text-base lg:text-lg leading-relaxed max-w-xl space-y-4">
                <p>
                  From brand-new installations to meticulous maintenance, structural repairs, and deep-cleansing treatments, Locs By Steph B provides a complete range of professional loc services at our Inglewood, CA studio.
                </p>
                <p>
                  Every service is rooted in precision, education, and genuine care for the long-term health of your hair.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
        <div className="h-px bg-sage/15" />
      </section>

      {/* ═══ LOC INSTALLATIONS ═══ */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <AnimateOnScroll>
              <p className="text-sage text-xs tracking-[0.2em] uppercase font-semibold mb-3 font-[family-name:var(--font-accent)] text-sm">
                Begin Your Journey
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={50}>
              <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-3xl lg:text-4xl font-bold leading-tight mb-6">
                Loc Installations
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <p className="text-charcoal/60 text-base leading-relaxed max-w-2xl mx-auto">
                We offer three distinct installation paths, each tailored to your hair texture, density, lifestyle, and aesthetic goals. Every install begins with a thorough consultation.
              </p>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={150}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Sisterlocks */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-charcoal/5">
                <div className="w-12 h-12 rounded-full bg-sage/15 flex items-center justify-center mb-5">
                  <svg
                    className="w-6 h-6 text-sage"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
                    />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-xl font-bold mb-3">
                  Sisterlocks&#8482; Install
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed mb-4">
                  The premier patented small-loc system, installed exclusively using the interlock method. Lightweight, refined, and incredibly versatile.
                </p>
                <p className="text-charcoal/50 text-xs font-medium uppercase tracking-wider">
                  Interlock Only &mdash; 3 or 4-Point Rotation
                </p>
              </div>

              {/* Microlocs */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-charcoal/5">
                <div className="w-12 h-12 rounded-full bg-sage/15 flex items-center justify-center mb-5">
                  <svg
                    className="w-6 h-6 text-sage"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                    />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-xl font-bold mb-3">
                  Microlocs Install
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed mb-4">
                  Ultra-fine locs offering the versatility of loose hair with the permanence of a locked style. Available via braided, two strand twist, or interlock starting methods.
                </p>
                <p className="text-charcoal/50 text-xs font-medium uppercase tracking-wider">
                  Braided, Two Strand Twist, or Interlock &mdash; 3 or 4-Point Rotation
                </p>
              </div>

              {/* Traditional */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-charcoal/5">
                <div className="w-12 h-12 rounded-full bg-sage/15 flex items-center justify-center mb-5">
                  <svg
                    className="w-6 h-6 text-sage"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-xl font-bold mb-3">
                  Traditional Loc Install
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed mb-4">
                  The most accessible entry into the loc lifestyle. Timeless, low-maintenance, and beautifully organic as they mature through every stage.
                </p>
                <p className="text-charcoal/50 text-xs font-medium uppercase tracking-wider">
                  Multiple Starting Methods Available
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══ PROCESS OVERVIEW ═══ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <AnimateOnScroll>
              <p className="text-sage text-xs tracking-[0.2em] uppercase font-semibold mb-3 font-[family-name:var(--font-accent)] text-sm">
                What to Expect
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={50}>
              <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-3xl lg:text-4xl font-bold leading-tight mb-6">
                The Installation Process
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <p className="text-charcoal/60 text-base leading-relaxed max-w-2xl mx-auto">
                Every loc journey begins with three foundational milestones. Here is what to expect from consultation through your first retie.
              </p>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={150}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg mb-6">
                  <Image
                    src="/images/install-types/consultation-interlock-4-point.jpg"
                    alt="Consultation session assessing hair texture and discussing interlock 4-point rotation technique"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <span className="text-sage font-[family-name:var(--font-heading)] text-3xl font-bold">
                  01
                </span>
                <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-xl font-bold mt-2 mb-2">
                  Consultation
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed max-w-xs mx-auto">
                  We assess your hair texture, scalp health, density, and lifestyle to determine the ideal loc type, parting grid, and starting method for your unique hair.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg mb-6">
                  <Image
                    src="/images/install-types/microloc-interlock-after.jpg"
                    alt="Completed microloc interlock installation showing neat grid pattern"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <span className="text-sage font-[family-name:var(--font-heading)] text-3xl font-bold">
                  02
                </span>
                <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-xl font-bold mt-2 mb-2">
                  Install Day
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed max-w-xs mx-auto">
                  Your locs are installed with precision and care over the course of a full session. Depending on loc type, installs may be scheduled across multiple days.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg mb-6">
                  <Image
                    src="/images/install-types/microloc-two-strand-after.jpg"
                    alt="Microlocs after first retie showing settling and early maturation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <span className="text-sage font-[family-name:var(--font-heading)] text-3xl font-bold">
                  03
                </span>
                <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-xl font-bold mt-2 mb-2">
                  First Retie
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed max-w-xs mx-auto">
                  Your first retightening session typically occurs 4 to 6 weeks after install. This critical appointment sets the foundation for healthy long-term loc growth.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══ LOC MAINTENANCE ═══ */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <AnimateOnScroll>
              <p className="text-sage text-xs tracking-[0.2em] uppercase font-semibold mb-3 font-[family-name:var(--font-accent)] text-sm">
                Keep Them Healthy
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={50}>
              <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-3xl lg:text-4xl font-bold leading-tight mb-6">
                Loc Maintenance
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <p className="text-charcoal/60 text-base leading-relaxed max-w-2xl mx-auto">
                Regular maintenance is the backbone of healthy, beautiful locs. We offer multiple retightening methods to suit your loc type and personal preferences.
              </p>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={150}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Interlock */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-charcoal/5">
                <div className="w-12 h-12 rounded-full bg-sage/15 flex items-center justify-center mb-5">
                  <svg
                    className="w-6 h-6 text-sage"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                    />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-xl font-bold mb-3">
                  Interlock Maintenance
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed mb-4">
                  Our primary maintenance method. New growth is physically woven back through the root base using specialized interlocking tools, creating a secure hold that withstands washing and active lifestyles.
                </p>
                <p className="text-red-600 font-semibold text-sm bg-red-50 border border-red-200 rounded-xl p-4">
                  We use a 3 or 4-point rotation for interlocking. We do not use the 2-point rotation as it is more prone to slippage and uneven tension, which can cause alopecia symptoms.
                </p>
              </div>

              {/* Palm Roll */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-charcoal/5">
                <div className="w-12 h-12 rounded-full bg-sage/15 flex items-center justify-center mb-5">
                  <svg
                    className="w-6 h-6 text-sage"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075-5.925v3m0-3a1.575 1.575 0 013.15 0v3m-3.15 0l.075 5.925M14.1 7.575v3m0-3a1.575 1.575 0 013.15 0v3.15M17.25 10.725a1.575 1.575 0 013.15 0v1.538c0 1.37-.456 2.702-1.293 3.79l-.834 1.087c-.564.735-.864 1.638-.864 2.567v.168a1.575 1.575 0 01-1.575 1.575H9.375A3.375 3.375 0 016 18.075V14.1"
                    />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-xl font-bold mb-3">
                  Palm Roll Maintenance
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">
                  A traditional maintenance technique where new growth is rolled between the palms to encourage the hair to continue its natural locking pattern. Best suited for traditional-sized locs and certain hair textures.
                </p>
              </div>

              {/* Crochet */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-charcoal/5">
                <div className="w-12 h-12 rounded-full bg-sage/15 flex items-center justify-center mb-5">
                  <svg
                    className="w-6 h-6 text-sage"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.42 15.17l-5.384 3.18c-.67.396-1.536-.172-1.536-.964V6.814c0-.792.866-1.36 1.536-.964l5.384 3.18m0 0l5.384 3.18c.67.396.67 1.368 0 1.764l-5.384 3.18m0-8.124v8.124"
                    />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-xl font-bold mb-3">
                  Crochet Maintenance
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">
                  A crochet hook is used to pull loose new growth back into the body of each loc. This method is effective for reinforcing weak areas and maintaining a clean, smooth cylindrical shape throughout the shaft.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══ LOC REPAIR SERVICES ═══ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <AnimateOnScroll>
              <p className="text-sage text-xs tracking-[0.2em] uppercase font-semibold mb-3 font-[family-name:var(--font-accent)] text-sm">
                Restore &amp; Rebuild
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={50}>
              <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-3xl lg:text-4xl font-bold leading-tight mb-6">
                Loc Repair Services
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <p className="text-charcoal/60 text-base leading-relaxed max-w-2xl mx-auto">
                Damaged, thinning, or unraveling locs rarely mean the end of your journey. Our structural repair services are designed to restore integrity and extend the life of your locs.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Repair service list */}
          <AnimateOnScroll delay={150}>
            <div className="bg-ivory rounded-3xl p-8 lg:p-12 shadow-sm mb-14">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Slippage Repair",
                    detail:
                      "Correcting locs that have slipped out of their rotational pattern or loosened at the root due to improper retightening or excessive tension.",
                  },
                  {
                    title: "Hole Repair",
                    detail:
                      "Filling and reinforcing gaps within the loc shaft caused by over-interlocking, pulling, or chemical damage to restore a solid cylindrical structure.",
                  },
                  {
                    title: "Grid Reconstruction",
                    detail:
                      "Rebuilding and correcting parting patterns that have shifted, merged, or become irregular due to prolonged neglect or improper maintenance.",
                  },
                  {
                    title: "Loc Combining",
                    detail:
                      "Merging two or more severely thinned locs into one stronger, reinforced loc to prevent further breakage and restore density.",
                  },
                  {
                    title: "Loc Grooming",
                    detail:
                      "Cleaning up frizz, loose hairs, and lint from the shaft and root area to restore a polished, well-maintained appearance.",
                  },
                ].map((item, i) => (
                  <div
                    key={item.title}
                    className={`flex items-start gap-4 ${
                      i < 5 ? "pb-4" : ""
                    }`}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-sage/15 flex items-center justify-center mt-0.5">
                      <svg
                        className="w-4 h-4 text-sage"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.42 15.17l-5.384 3.18c-.67.396-1.536-.172-1.536-.964V6.814c0-.792.866-1.36 1.536-.964l5.384 3.18m0 0l5.384 3.18c.67.396.67 1.368 0 1.764l-5.384 3.18m0-8.124v8.124"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-charcoal font-semibold text-base mb-1">
                        {item.title}
                      </h3>
                      <p className="text-charcoal/60 text-sm leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Before & After Gallery */}
          <AnimateOnScroll delay={200}>
            <div className="text-center mb-8">
              <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-2xl font-bold">
                Before &amp; After
              </h3>
              <p className="text-charcoal/50 text-sm mt-2">
                Real results from our loc repair services
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={250}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Hole Repair */}
              <div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="/images/repairs/hole-repair-before.jpg"
                      alt="Loc with visible hole damage before repair"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 16vw"
                    />
                    <span className="absolute bottom-2 left-2 bg-charcoal/70 text-ivory text-xs px-2 py-1 rounded-md">
                      Before
                    </span>
                  </div>
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="/images/repairs/hole-repair-after.jpg"
                      alt="Loc fully restored after professional hole repair"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 16vw"
                    />
                    <span className="absolute bottom-2 left-2 bg-sage/80 text-charcoal text-xs px-2 py-1 rounded-md font-medium">
                      After
                    </span>
                  </div>
                </div>
                <p className="text-charcoal/60 text-sm text-center mt-3 font-medium">
                  Hole Repair
                </p>
              </div>

              {/* Slippage Repair */}
              <div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="/images/repairs/slippage-before.jpg"
                      alt="Loc showing slippage and loosening before repair"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 16vw"
                    />
                    <span className="absolute bottom-2 left-2 bg-charcoal/70 text-ivory text-xs px-2 py-1 rounded-md">
                      Before
                    </span>
                  </div>
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="/images/repairs/slippage-repaired.jpg"
                      alt="Loc fully corrected after professional slippage repair"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 16vw"
                    />
                    <span className="absolute bottom-2 left-2 bg-sage/80 text-charcoal text-xs px-2 py-1 rounded-md font-medium">
                      After
                    </span>
                  </div>
                </div>
                <p className="text-charcoal/60 text-sm text-center mt-3 font-medium">
                  Slippage Repair
                </p>
              </div>

              {/* Grid Reconstruction */}
              <div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="/images/repairs/grid-before-repair.jpg"
                      alt="Irregular and shifted grid pattern before reconstruction"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 16vw"
                    />
                    <span className="absolute bottom-2 left-2 bg-charcoal/70 text-ivory text-xs px-2 py-1 rounded-md">
                      Before
                    </span>
                  </div>
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="/images/repairs/grid-after-repair.jpg"
                      alt="Clean and uniform grid after professional reconstruction"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 16vw"
                    />
                    <span className="absolute bottom-2 left-2 bg-sage/80 text-charcoal text-xs px-2 py-1 rounded-md font-medium">
                      After
                    </span>
                  </div>
                </div>
                <p className="text-charcoal/60 text-sm text-center mt-3 font-medium">
                  Grid Reconstruction
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══ WASH SERVICES ═══ */}
      <section className="py-20 lg:py-28 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(235,115,33,0.06),transparent_50%)]" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <AnimateOnScroll>
              <p className="text-sage-light/80 text-xs tracking-[0.2em] uppercase font-semibold mb-4 font-[family-name:var(--font-accent)] text-sm">
                Cleanse &amp; Nourish
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={50}>
              <h2 className="font-[family-name:var(--font-heading)] text-ivory text-3xl lg:text-4xl font-bold leading-tight mb-6">
                Wash Services
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <p className="text-ivory/55 text-base leading-relaxed max-w-2xl mx-auto">
                A clean scalp is the foundation of healthy locs. Our wash services range from deep detoxifying treatments to gentle hydration sessions tailored to your specific needs.
              </p>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={150}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Detox */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-sage/15 flex items-center justify-center mb-5">
                  <svg
                    className="w-6 h-6 text-sage-light"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                    />
                  </svg>
                </div>
                <h3 className="text-ivory font-semibold text-lg mb-2">Detox</h3>
                <p className="text-ivory/50 text-sm leading-relaxed">
                  A deep-cleansing treatment that removes product buildup, environmental residue, and impurities from inside and outside the loc. Ideal before maintenance or as a quarterly refresh.
                </p>
              </div>

              {/* Hydration Wash */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-sage/15 flex items-center justify-center mb-5">
                  <svg
                    className="w-6 h-6 text-sage-light"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-ivory font-semibold text-lg mb-2">
                  Hydration Wash
                </h3>
                <p className="text-ivory/50 text-sm leading-relaxed">
                  A gentle, moisture-focused wash that cleanses without stripping essential oils. Leaves your scalp balanced and your locs soft, refreshed, and hydrated.
                </p>
              </div>

              {/* Deep Conditioner */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-sage/15 flex items-center justify-center mb-5">
                  <svg
                    className="w-6 h-6 text-sage-light"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                    />
                  </svg>
                </div>
                <h3 className="text-ivory font-semibold text-lg mb-2">
                  Deep Conditioner
                </h3>
                <p className="text-ivory/50 text-sm leading-relaxed">
                  An intensive conditioning treatment that penetrates the hair shaft to restore moisture, strengthen, and improve elasticity. Recommended for dry, brittle, or color-treated locs.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══ OTHER SERVICES ═══ */}
      <section className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <AnimateOnScroll>
              <p className="text-sage text-xs tracking-[0.2em] uppercase font-semibold mb-3 font-[family-name:var(--font-accent)] text-sm">
                Specialized Care
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={50}>
              <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-3xl lg:text-4xl font-bold leading-tight mb-6">
                Other Services
              </h2>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Loc Color */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-charcoal/5">
                <div className="w-12 h-12 rounded-full bg-sage/15 flex items-center justify-center mb-5">
                  <svg
                    className="w-6 h-6 text-sage"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
                    />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-xl font-bold mb-3">
                  Loc Color
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed mb-4">
                  We coordinate professional color services for clients who want to add dimension, warmth, or a bold transformation to their locs.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="text-amber-800 font-semibold text-sm">
                    Outsourced to a licensed professional &mdash; Locs By Steph B is not licensed to offer color services directly.
                  </p>
                </div>
              </div>

              {/* Hair & Scalp Assessment */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-charcoal/5">
                <div className="w-12 h-12 rounded-full bg-sage/15 flex items-center justify-center mb-5">
                  <svg
                    className="w-6 h-6 text-sage"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-xl font-bold mb-3">
                  Hair &amp; Scalp Assessment
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed mb-4">
                  A trichology-informed evaluation of your hair and scalp health. We examine texture, density, elasticity, scalp condition, and growth patterns to build a personalized care plan.
                </p>
                <p className="text-charcoal/50 text-xs font-medium uppercase tracking-wider">
                  Trichology-Based Analysis
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══ LOC EXTENSIONS DISCLAIMER ═══ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="bg-charcoal/5 border border-charcoal/10 rounded-2xl p-8 lg:p-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-charcoal/10 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-5 h-5 text-charcoal/70"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-xl font-bold mb-3">
                    We Do Not Offer Loc Extensions
                  </h3>
                  <p className="text-charcoal/70 text-[15px] leading-relaxed">
                    We do not offer loc extensions. In a market full of shortcuts, we protect our clients by only offering services that serve their long-term health.
                  </p>
                </div>
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
              Book Your Consultation
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="text-ivory/55 text-base leading-relaxed max-w-xl mx-auto mb-10">
              Whether you are starting a brand-new set, maintaining your existing locs, or seeking repair for damaged hair, your journey begins with a consultation.
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
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
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
