import Image from "next/image";
import { CLIENT_IMAGES } from "@/data/siteContent";
import AnimateOnScroll from "./AnimateOnScroll";

export default function BrandPromise() {
  return (
    <section className="py-24 lg:py-32 bg-ivory" id="welcome">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <AnimateOnScroll>
              <p className="text-sage text-xs tracking-[0.25em] uppercase font-semibold mb-4 font-[family-name:var(--font-accent)] text-base">
                Our Philosophy
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-8">
                More Than Hair Maintenance—
                <span className="block text-navy">Your Loctician in Inglewood</span>
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="space-y-5 text-charcoal/70 text-base lg:text-lg leading-relaxed">
                <p>
                  At Locs By Steph B, your hair journey becomes a healing
                  journey. We believe that locking your hair is an act of
                  returning to yourself—a powerful decision to honor your natural
                  texture with intention and care.
                </p>
                <p>
                  This is <strong className="text-charcoal font-semibold">Rooted Maintenance</strong>—a
                  philosophy built on the belief that high-performing women
                  deserve to slow down without losing momentum. We support you
                  through every stage of your loc journey with the expertise,
                  patience, and artistry your hair deserves.
                </p>
                <p>
                  Whether you&apos;re starting fresh with your first set of locs or
                  seeking a loctician who truly understands your hair, you&apos;ve
                  found your home.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-[1px] bg-sage" />
                <p className="text-sage font-[family-name:var(--font-accent)] italic text-lg">
                  Rooted in Care. Elevated by Craft.
                </p>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Image Stack */}
          <div className="relative">
            <AnimateOnScroll delay={150}>
              <div className="relative">
                {/* Background accent */}
                <div className="absolute -inset-4 bg-sage-muted rounded-[2rem] -rotate-2" />

                {/* Main image */}
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/hero/rooted-in-care.jpg"
                    alt="Rooted in Care, Elevated by Craft — Locs By Steph B"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Overlapping smaller image */}
                <div className="absolute -bottom-8 -right-4 lg:-right-8 w-40 lg:w-48 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-4 border-ivory">
                  <Image
                    src="/images/hero/rooted-in-care-sm.jpg"
                    alt="Rooted in Care, Elevated by Craft — Locs By Steph B"
                    fill
                    className="object-cover"
                    sizes="192px"
                  />
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
