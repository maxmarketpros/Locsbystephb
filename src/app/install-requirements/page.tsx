import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE, CLIENT_IMAGES } from "@/data/siteContent";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Install Requirements & FAQs | Locs By Steph B — Inglewood, CA",
  description:
    "Review our requirements for loc installation and read frequently asked questions about Microlocs and Sisterlocks™. We prioritize scalp health first and locs second.",
  keywords: [
    "loc install requirements",
    "microlocs faq",
    "sisterlocks faq",
    "scalp health locs",
    "loc maintenance cost",
    "locs questions",
    "loctician Inglewood CA",
  ],
};

const faqs = [
  {
    question: "Do you add extensions?",
    answer:
      "No. We do not offer loc extensions. Loc extensions are a high-risk service with a significant scam presence in the market, and they tend to create more problems than they solve — including slowing down the locking process and being costly to maintain. This is an intentional decision to protect our clients.",
  },
  {
    question: "Do you offer services to men?",
    answer: "At this time I only serve women.",
  },
  {
    question: "What are Microlocs and Sisterlocks™?",
    answer:
      "Microlocs and Sisterlocks™ are both types of small, uniform locks that offer versatility and flexibility in styling. Sisterlocks™ are installed using a patented grid and tool by a certified consultant, while Microlocs can be installed using various techniques such as two-strand twists, braids, or interlocking.",
  },
  {
    question: "What is the difference between Microlocs and Sisterlocks™?",
    answer:
      "The main differences lie in the installation method and size. Sisterlocks™ are generally smaller and installed using a specific patented tool and grid system by a certified consultant. Microlocs can be slightly larger and can be installed with more flexible methods, allowing for more variation in size and technique.",
  },
  {
    question: "How are Microlocs and Sisterlocks™ established?",
    answer:
      "Sisterlocks™ are installed by parting the hair into a specific grid pattern and locking it with a patented tool, a process that can take 20-40 hours or more. Microlocs, on the other hand, can be installed using different methods like twisting, braiding, or interlocking and may take several hours to days depending on hair length and density. *Please note that Locs By Steph B LLC only offers the interlocking method for Microlocs.",
  },
  {
    question: "What is the maintenance schedule for Microlocs and Sisterlocks™?",
    answer:
      "Both Microlocs and Sisterlocks™ require regular retightening every 4-8 weeks, depending on hair growth. The first retightening for Sisterlocks™ is usually scheduled 4-6 weeks after installation, similar to Microlocs. Your unique hair texture is what determines your retie timing. For example 4C hair can get matted faster and so shorter retie times (usually within the 4-5 week timeline) are required to maintain the grid. Whereas someone with a wavy curl pattern may only need to come in for a retie 6-7 weeks at a time.",
  },
  {
    question: "How much does it cost to establish Microlocs and Sisterlocks™?",
    answer:
      "Because the difference between Sisterlocks™ and Microlocs has become quite skewed, installation costs for both can fall within the same range. Generally, both of these loc installs can start around $1500-$1900 for the first 4 inches of hair to over $4000, depending on your unique hair characteristics, length, density, and the loctician's expertise. Those with silkier hair require much more maintenance than those with predominantly 4C hair. This will make their 4-8 week maintenance more expensive and more frequent. Also note that pricing can vary greatly as the cost of living is different for each loctician.",
  },
  {
    question: "How long does it take for Microlocs and Sisterlocks™ to mature?",
    answer:
      "Both Microlocs and Sisterlocks™ typically take 2+ years to fully mature, depending on your lifestyle, unique hair characteristics, attending your regular maintenance routine on time, and environmental factors such as drier climate or hard water conditions.",
  },
  {
    question: "Can Microlocs and Sisterlocks™ be undone?",
    answer:
      "Microlocs and Sisterlocks™ are a permanent hairstyle. If this is one of the questions you are considering, we suggest you stick with braids. However, we also realize that locking your hair can be scary. Yes, both locking methods can be undone, but the process is time-consuming and should ideally be done by a professional to minimize hair damage.",
  },
  {
    question: "Can I color my Microlocs or Sisterlocks™?",
    answer:
      "Yes, you can color both, but it’s recommended to wait until your locks have matured to avoid affecting the locking process. Hair colored too soon softens the hair and oftentimes delays or destroys the entire locking process. Coloring your hair will change the texture of your hair. When your loctician locs your hair, they are considering the best pattern and technique based on your current hair characteristics. Always consult your loctician before applying chemical treatments.",
  },
  {
    question: "How often should I wash my Microlocs or Sisterlocks™?",
    answer:
      "It is generally recommended to wash Microlocs and Sisterlocks™ every 10-14 Days. Initially, you may need to follow a specific Dry Washing technique to avoid unraveling until cleared to use a braid and band method to wash.",
  },
  {
    question: "Can I swim with Microlocs or Sisterlocks™?",
    answer:
      "Yes, you can swim with both, and it’s important to braid and band before swimming and purchase a swim cap to protect your locs. Braiding and banding your locs helps to minimize slippage in your locs, which are costly to repair.",
  },
  {
    question: "Is it true that I cannot use oils or creams on my hair while locking?",
    answer:
      "Yes! Your hair produces its own sebum (or oil). Which is where your scalp health comes into play. If you are feeding your scalp all the things it needs, you won't need oils or creams.",
  },
];

export default function InstallRequirementsPage() {
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
              Before You Book in Inglewood, CA
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h1 className="font-[family-name:var(--font-heading)] text-ivory text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-7">
              Requirements &amp; <span className="text-sage-light">FAQ&apos;s</span>
            </h1>
          </AnimateOnScroll>
        </div>
        
        {/* Clean edge */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-sage/15" />
      </section>

      {/* ═══ SCALP HEALTH SECTION ═══ */}
      <section className="py-20 lg:py-28 bg-ivory overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            
            {/* Image Side */}
            <div className="order-2 lg:order-1 relative">
              <AnimateOnScroll>
                <div className="relative aspect-[3/4] max-w-md mx-auto rounded-[2rem] overflow-hidden shadow-2xl">
                  <Image
                    src={CLIENT_IMAGES[7].src} // A gorgeous healthy loc photo
                    alt="Healthy scalp and beautiful locs"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 448px"
                  />
                </div>
                {/* Decorative border */}
                <div className="absolute -bottom-6 -right-6 w-full h-full border border-sage/30 rounded-[2rem] max-w-md mx-auto -z-10 hidden sm:block" />
              </AnimateOnScroll>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <AnimateOnScroll>
                <p className="text-sage font-[family-name:var(--font-accent)] tracking-[0.2em] uppercase font-semibold text-sm mb-4">
                  The Foundation
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll delay={100}>
                <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-4xl lg:text-5xl font-bold leading-tight mb-8">
                  Scalp Health First, <br />
                  <span className="text-navy">Locs Second</span>
                </h2>
              </AnimateOnScroll>

              <AnimateOnScroll delay={200}>
                <div className="prose prose-lg prose-p:text-charcoal/70 prose-p:leading-relaxed prose-strong:text-charcoal mb-8">
                  <p>
                    Healthy locs begin with a healthy scalp. That&apos;s why I don&apos;t establish locs on a scalp that needs some TLC—a critical part of your consultation is assessing scalp health. <strong>When your scalp thrives, so will your locs.</strong>
                  </p>
                  <p>
                    In the first year of your loc journey, focusing on scalp health and maintaining regular appointments is essential for your locs to flourish. I highly recommend doing extensive research and securing a dermatologist and a trichologist. 
                  </p>
                  <p>
                    Let&apos;s be real: women experience hormonal changes 24/7, whether it&apos;s our monthly cycles, pregnancy, menopause (peri and pre), or dealing with autoimmune conditions like thyroid imbalances. These factors significantly impact scalp health, so let&apos;s stay ahead of the curve to keep your crown in top shape.
                  </p>
                  <p>
                    Remember, the leading cause of baldness in the African American community is alopecia. Let&apos;s prioritize scalp health to ensure your locs are strong and beautiful from root to tip.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={300}>
                <div className="bg-sage-muted border-l-4 border-sage p-6 rounded-r-2xl">
                  <p className="m-0 text-charcoal/80 text-sm leading-relaxed">
                    Please note that your diet, water quality (for hair washing and consumption), stressors, sleep quality and supplements all play a part in the health of your scalp and hair. All of these elements must be addressed in order to maintain a healthy scalp and head of locs. So in essence, <strong>creating healthy locs is more of a wellness journey :-)</strong>
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ INFOGRAPHIC SECTION ═══ */}
      <section className="py-20 lg:py-24 bg-white border-t border-charcoal/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="relative w-full rounded-3xl overflow-hidden shadow-xl drop-shadow-sm border border-charcoal/5">
              <Image
                src="/images/installrequirements/image.png"
                alt="Infographic detailing loc installation requirements"
                width={1920}
                height={1080}
                className="w-full h-auto object-contain"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══ FAQ SECTION ═══ */}
      <section className="py-20 lg:py-28 bg-ivory-warm">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <p className="text-sage font-[family-name:var(--font-accent)] tracking-[0.2em] uppercase font-semibold text-sm mb-4">
                Get Your Answers
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Most Frequently Asked <span className="text-navy">Questions</span>
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimateOnScroll key={i} delay={i * 50}>
                {/* Native details/summary for an elegant, JS-free accordion */}
                <details className="group bg-white rounded-2xl border border-charcoal/5 shadow-sm overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 lg:p-8 font-[family-name:var(--font-heading)] text-charcoal font-semibold text-xl xl:text-2xl transition-colors hover:bg-sage-muted/30">
                    <span className="pr-8">{faq.question}</span>
                    <span className="relative flex-shrink-0 ml-1.5 w-6 h-6">
                      <svg
                        className="absolute inset-0 w-6 h-6 text-sage transition-transform duration-300 transform group-open:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                    <div className="h-px bg-charcoal/5 mb-6" />
                    <p className="text-charcoal/70 text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA SECTION ═══ */}
      <section className="py-24 lg:py-32 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(235,115,33,0.06),transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-navy/20 blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="font-[family-name:var(--font-heading)] text-ivory text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight mb-8">
              Ready to Prioritize Your <span className="text-sage-light">Scalp Health?</span>
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <p className="text-ivory/60 text-lg lg:text-xl leading-relaxed mx-auto mb-12">
              Secure your consultation today to begin a wellness journey that puts the health of your scalp first.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 bg-sage text-charcoal rounded-full text-sm font-semibold tracking-[0.08em] uppercase hover:bg-sage-light transition-all duration-300 hover:shadow-lg hover:shadow-sage/20"
              >
                Book Consultation
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
