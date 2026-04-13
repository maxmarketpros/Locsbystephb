import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/data/siteContent";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "My Loc Story | Locs By Steph B",
  description:
    "Read the personal loc journey and professional story of your loctician. Discover how 25 years in marketing transitioned into a passion for natural hair, microlocs, and scalp health.",
  keywords: [
    "loc journey",
    "loctician story",
    "black women locs",
    "microlocs journey",
    "sisterlocks journey",
    "scalp health and locs",
  ],
};

// Ordered to match original Beacons site — chronological loc progression
const galleryImages = [
  { src: "/images/my-loc-journey/img9.webp", alt: "Natural afro texture before locs — the very beginning of the journey" },
  { src: "/images/my-loc-journey/img6.webp", alt: "Bantu knots and grid pattern — installation day preparation" },
  { src: "/images/my-loc-journey/img3.webp", alt: "Short TWA in the early days — embracing the big chop" },
  { src: "/images/my-loc-journey/img2.webp", alt: "Excited selfie with short curly starter locs — the joy of beginning" },
  { src: "/images/my-loc-journey/img1.webp", alt: "Back of head showing budding locs — the teenage phase" },
  { src: "/images/my-loc-journey/img5.webp", alt: "Short curly locs outdoors — growing into the journey" },
  { src: "/images/my-loc-journey/img4.webp", alt: "Long flowing mature locs with honey-brown tones — full maturation" },
  { src: "/images/my-loc-journey/img8.webp", alt: "Mature dark locs styled confidently — owning the crown" },
  { src: "/images/my-loc-journey/img7.webp", alt: "Beautiful blonde-golden colored locs — the latest evolution" },
];

export default function MyLocJourneyPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative bg-charcoal overflow-hidden pt-36 lg:pt-44 pb-16 lg:pb-24">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-navy/70 to-charcoal" />

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
              Fostering healthy Locs, from root to tip.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h1 className="font-[family-name:var(--font-heading)] text-ivory text-5xl sm:text-6xl lg:text-[4.5rem] font-bold leading-[1.1] mb-10">
              My Loc Story
            </h1>
          </AnimateOnScroll>

           <AnimateOnScroll delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-sage text-charcoal rounded-full text-sm font-semibold tracking-[0.08em] uppercase hover:bg-sage-light transition-all duration-300 hover:shadow-lg hover:shadow-sage/20"
              >
                Book @Inglewood, CA
              </a>
            </div>
          </AnimateOnScroll>
        </div>
        
        {/* Clean edge */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-sage/15" />
      </section>

      {/* ═══ INTRODUCTION & GALLERY ═══ */}
      <section className="pt-20 lg:pt-28 pb-12 bg-ivory">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          
          <AnimateOnScroll>
            <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-4xl lg:text-5xl font-bold leading-tight mb-12 text-center">
              Started from the bottom<br/>
              <span className="text-sage">now I&apos;m here..</span>
            </h2>
          </AnimateOnScroll>

          {/* Scrolling Gallery */}
          <AnimateOnScroll delay={100}>
            <div className="relative mb-20 -mx-6 lg:mx-0 px-6 lg:px-0">
               {/* Fade edges */}
               <div className="pointer-events-none absolute inset-y-0 left-0 w-8 lg:w-16 bg-gradient-to-r from-ivory to-transparent z-10 hidden sm:block" />
               <div className="pointer-events-none absolute inset-y-0 right-0 w-8 lg:w-16 bg-gradient-to-l from-ivory to-transparent z-10 hidden sm:block" />
               
               <div className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
                  {galleryImages.map((image, i) => (
                    <div 
                      key={i} 
                      className="relative flex-none w-[280px] sm:w-[320px] aspect-[4/5] rounded-3xl overflow-hidden shadow-lg snap-center bg-charcoal/5"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 280px, 320px"
                      />
                    </div>
                  ))}
               </div>
            </div>
          </AnimateOnScroll>

        </div>
      </section>

      {/* ═══ THE STORY TEXT ═══ */}
      <section className="py-12 lg:py-20 bg-ivory">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          
          <AnimateOnScroll>
            <div className="prose prose-lg lg:prose-xl prose-p:text-charcoal/75 prose-p:leading-relaxed prose-strong:text-charcoal max-w-none">
              <p className="first-letter:font-[family-name:var(--font-heading)] first-letter:text-7xl first-letter:font-bold first-letter:text-navy first-letter:mr-3 first-letter:float-left">
                My loc journey began in July 2017. Like many women of color navigating corporate America, I was exhausted from trying to make my hair fit into environments that were never designed with us in mind. Beyond the politics, the time cost was unsustainable. Hours spent flat-ironing, wrapping, preserving styles, and planning my life around my hair didn&apos;t align with how I actually lived or worked.
              </p>

              <p>
                At the time, my mother had been locked for over two decades, and my roommate wore Sisterlocks™—both women deeply rooted in their choice and visibly freer because of it. I admired that freedom, but I was also hesitant. I worried about versatility. I worried about permanence. Most of all, I worried about losing control. Still, I knew something had to change. I wanted to work out without hesitation, swim without calculation, and move through life without constantly negotiating with my hair.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            {/* Callout quote style */}
            <div className="my-12 py-8 px-6 lg:px-10 bg-sage-muted rounded-3xl border-l-4 border-sage">
              <p className="font-[family-name:var(--font-heading)] text-charcoal text-2xl lg:text-3xl font-bold leading-snug m-0 italic">
                &ldquo;What followed was not just a cosmetic shift, but a lesson in patience, identity, and self-trust.&rdquo;
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <div className="prose prose-lg lg:prose-xl prose-p:text-charcoal/75 prose-p:leading-relaxed prose-strong:text-charcoal max-w-none">
              <p>
                When I booked my installation, I didn&apos;t fully understand the locking process, the biology of my hair, or what long-term commitment actually meant. The first five months felt affirming. Between months six and twelve, doubt set in hard. I questioned my decision, my appearance, and whether I had misunderstood the process entirely. But I stayed the course.
              </p>
              
              <p>
                What the photos don&apos;t always show is that this journey was earned. No wigs. No extensions. No shortcuts. Just time, consistency, and learning how my hair behaves under tension, moisture, manipulation, and neglect. Over the years, I learned that locs are not about perfection or uniformity—they are about structure, balance, and respect for the hair&apos;s natural tendencies.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="my-16 flex items-center justify-center gap-4 text-sage/30">
              <span className="w-2 h-2 rounded-full bg-current" />
              <span className="w-2 h-2 rounded-full bg-current" />
              <span className="w-2 h-2 rounded-full bg-current" />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={250}>
            <div className="prose prose-lg lg:prose-xl prose-p:text-charcoal/75 prose-p:leading-relaxed prose-strong:text-charcoal max-w-none">
              <p>
                Professionally, I am a high performer—and statistically, that matters. High performers tend to value efficiency, autonomy, and systems that reduce decision fatigue. We are often time-constrained, goal-oriented, and intolerant of processes that create unnecessary friction. 
              </p>
              
              <p>
                My loc journey forced me to confront how poorly traditional haircare systems serve women like me. It also showed me why locs, when installed and maintained correctly, are one of the most time-efficient, cost-effective, and sustainable hair choices available—especially for women with demanding lives.
              </p>

              <p>
                After 25 years in marketing, I transitioned into loctician work during a period of burnout, looking for something tactile, creative, and restorative. What I didn&apos;t expect was that this path would lead me back to marketing—this time through the lens of beauty, education, and personal development. Today, I combine lived experience, professional strategy, and technical training. I am currently studying at IAT Trichology School as a Hair Practitioner Trainee, deepening my understanding of scalp health, hair biology, and evidence-based care for textured hair.
              </p>
            </div>
          </AnimateOnScroll>

        </div>
      </section>

      {/* ═══ CLOSING PHILOSOPHY ═══ */}
      <section className="py-20 lg:py-28 bg-navy text-ivory text-center px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(235,115,33,0.1),transparent_70%)]" />
        <div className="max-w-4xl mx-auto relative">
          <AnimateOnScroll>
            <h3 className="font-[family-name:var(--font-heading)] text-sage-light text-2xl lg:text-3xl font-bold mb-6 italic">
              My work is grounded in this truth:
            </h3>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="text-2xl lg:text-4xl font-light leading-snug mb-8">
              Healthy locs are not accidental. They are the result of informed decisions, proper technique, realistic expectations, and consistent care.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="text-ivory/60 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              My goal is not just to create beautiful locs, but to help clients develop a healthier, more honest relationship with their hair—one rooted in knowledge rather than myths, fear, or comparison.
            </p>
            <p className="text-white font-bold text-xl lg:text-2xl mt-8">
              Your hair is not a problem to be solved. It is whole, complete, and worthy of care as it is.
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
