import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE, CLIENT_IMAGES } from "@/data/siteContent";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Client Reviews & A Day in the Life | Locs By Steph B",
  description:
    "Read 5-star reviews from our amazing clients in Inglewood, CA. Discover what a day in the life of locs looks like.",
  keywords: [
    "locs stylist reviews",
    "steph b reviews",
    "loctician recommendations Inglewood",
    "best loctician Los Angeles",
    "day in the life of locs",
  ],
};

const REVIEWS = [
  { initials: "LL", name: "Lindsay L", date: "Dec 20, 2025", text: "Steph B is truly a gem. My experience has exceeded my expectations and I am grateful to say I have found a safe space for my crown and my soul. The time that I spend is truly a moment for me to refill, refuel and leave looking and feeling better than I came." },
  { initials: "TS", name: "Tolu S", date: "Feb 03, 2025", text: "I live in the Valley in CA, and its almost impossible to find a loctician within an hours drive of me. So I was really excited to see Stephanie... I went to have a consultation with her, and I was EDUCATED! She is so learned in hair and scalp health, very informative, and thoughtful. She seems to manage prioritizing hair health AND mental health for her clients. I had no notes!" },
  { initials: "FE", name: "Faith E", date: "Jan 16, 2025", text: "Steph is such a professional and so sweet. It was a consultation like no other. She understands that not only does the ingredients in your hair products matter, but what you put in your body, the food you eat and vitamins you take also do! I love her wholistic approach to scalp health." },
  { initials: "YH", name: "Yashica H", date: "Feb 06, 2025", text: "Steph was so great I recently got my locs retied and she made me feel super comfortable and relaxed during the process. She let me know all of her tips and tricks to keep my locs healthy and thriving and she was super quick! It had been almost 3 months since my last retie and she still finished in 3.5 hours." },
  { initials: "DC", name: "Dominique C", date: "Apr 24, 2025", text: "Steph is the absolute best! Exceptionally meticulous, informed, and dedicated to what she does. Entire experience was a 10/10 - super excited to have such a supportive loctician start my loc journey!" },
  { initials: "ML", name: "Micole Lawrence L", date: "Dec 30, 2025", text: "Very professional, knowledgeable and welcoming. I was traveling for work and she took amazing care of my locs. Even had reading materials and a sweet treats GREAT EXPERIENCE." },
  { initials: "DL", name: "Deborah L", date: "Jul 02, 2025", text: "Steph is amazing She is very knowledgeable about her craft and how to take care of your locs. I have followed all her instructions and my hair is already starting to plump up" },
  { initials: "JC", name: "Jasmine C", date: "Mar 10, 2026", text: "She’s a wonderful loctician!!!! She has a forever client with me!!!" },
  { initials: "WB", name: "Washona B", date: "Feb 14, 2026", text: "Had a good time talking with Stephanie and learning about how to take care of my locs. The vibe was awesome in the shop. I look forward for my next appointment." },
  { initials: "OE", name: "Ogadimma E", date: "Dec 17, 2025", text: "Finally found a reliable and talented person to do my hair consistently! So relieved!" },
  { initials: "SB", name: "Syamber B", date: "Mar 13, 2025", text: "I had a great consultation with Steph She really cares about hair care and making sure her clients get the outcome desired." },
  { initials: "SB", name: "Shauna B", date: "Jun 29, 2025", text: "Steph is amazing Super attentive, has a great vibe, and genuinely cares about the health of your hair. So glad I found her my locs are in good hands" },
  { initials: "YA", name: "Yamrot A", date: "Nov 06, 2025", text: "Loved the hair! Great work loved every minute of getting my hair done with Steph." },
  { initials: "JC", name: "Jasmine C", date: "Jan 17, 2025", text: "Steph is AMAZING Im glad I chose her to start my microlocs! Always good vibes when I get my hair done. Steph is amazing and quick. Love her down" },
  { initials: "RR", name: "Rochonne R", date: "Jan 24, 2026", text: "Outstanding as always!" }
];

// Helper to render 5 stars
const FiveStars = () => (
  <div className="flex gap-1 text-sage">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function ReviewsPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative bg-charcoal overflow-hidden pt-36 lg:pt-44 pb-16 lg:pb-24">
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
              Client Testimonials
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h1 className="font-[family-name:var(--font-heading)] text-ivory text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-7">
              Real Love from <br className="hidden md:block" />
              <span className="text-sage-light">Real Clients</span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-ivory/70 text-lg leading-relaxed max-w-2xl mx-auto">
              We take pride in providing a holistic, educating, and elevated salon experience. See what the community has to say.
            </p>
          </AnimateOnScroll>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-px bg-sage/15" />
      </section>

      {/* ═══ REVIEWS GRID ═══ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {REVIEWS.map((review, i) => (
              <AnimateOnScroll key={i} delay={(i % 3) * 50}>
                <div className="h-full bg-ivory/50 rounded-3xl p-8 border border-charcoal/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  {/* Top: Avatar, Name, Stars */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      {/* Initials Avatar */}
                      <div className="w-12 h-12 rounded-full bg-charcoal text-ivory flex items-center justify-center font-[family-name:var(--font-heading)] text-lg font-bold">
                        {review.initials}
                      </div>
                      <div>
                        <h3 className="text-charcoal font-bold text-sm tracking-wide">{review.name}</h3>
                        <p className="text-charcoal/50 text-xs mt-0.5">{review.date}</p>
                      </div>
                    </div>
                    <div>
                      <FiveStars />
                    </div>
                  </div>

                  {/* Body: Review Text */}
                  <div className="flex-1">
                    <p className="text-charcoal/75 text-sm leading-relaxed relative z-10">
                      <span className="text-sage-light/30 text-4xl font-serif absolute -top-3 -left-2 -z-10 leading-none">"</span>
                      {review.text}
                    </p>
                  </div>
                  
                  {/* Footer: Verified */}
                  <div className="mt-6 flex items-center gap-1.5 text-sage text-xs font-semibold uppercase tracking-wider">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                    Verified Customer
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ A DAY IN THE LIFE OF LOCS ═══ */}
      <section className="py-24 lg:py-32 bg-ivory border-t border-charcoal/5 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sage-light/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-charcoal/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <AnimateOnScroll>
              <p className="text-sage text-xs tracking-[0.2em] uppercase font-semibold mb-4 font-[family-name:var(--font-accent)]">
                The Lifestyle
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-4xl lg:text-5xl font-bold leading-tight mb-6">
                A Day in the Life of Locs
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <p className="text-charcoal/60 text-lg leading-relaxed">
                Choosing locs isn’t just about the aesthetic—it’s about reclaiming your time, embracing your natural rhythm, and stepping into total hair freedom. Here is what effortless daily beauty looks like.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Morning */}
            <AnimateOnScroll delay={100}>
              <div className="group relative rounded-3xl overflow-hidden aspect-[4/5]">
                <Image
                  src={CLIENT_IMAGES[7].src} // Relaxing in chair
                  alt="Client relaxing representing morning peace"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <div className="bg-sage/90 text-charcoal text-[11px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full inline-block mb-3">
                    7:00 AM
                  </div>
                  <h3 className="text-ivory text-2xl font-[family-name:var(--font-heading)] font-bold mb-2">The Wake & Go</h3>
                  <p className="text-ivory/80 text-sm leading-relaxed">
                    No more 1-hour morning routines. Remove your satin bonnet, do a light rosewater mist, shake, and you are completely ready to conquer the day.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Afternoon */}
            <AnimateOnScroll delay={200}>
              <div className="group relative rounded-3xl overflow-hidden aspect-[4/5] md:-translate-y-8">
                <Image
                  src={CLIENT_IMAGES[2].src} // active movement
                  alt="Locs showing movement and versatility for active living"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <div className="bg-sage/90 text-charcoal text-[11px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full inline-block mb-3">
                    2:00 PM
                  </div>
                  <h3 className="text-ivory text-2xl font-[family-name:var(--font-heading)] font-bold mb-2">Active Freedom</h3>
                  <p className="text-ivory/80 text-sm leading-relaxed">
                    Going to the gym or caught in the rain? Locs thrive in moisture. Without the fear of your hair "reverting" or getting ruined, you live with zero restrictions.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Evening */}
            <AnimateOnScroll delay={300}>
              <div className="group relative rounded-3xl overflow-hidden aspect-[4/5]">
                <Image
                  src={CLIENT_IMAGES[10].src} // elegant evening lookup
                  alt="Elegant dark locs representing evening wear styling"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <div className="bg-sage/90 text-charcoal text-[11px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full inline-block mb-3">
                    8:00 PM
                  </div>
                  <h3 className="text-ivory text-2xl font-[family-name:var(--font-heading)] font-bold mb-2">Effortless Elegance</h3>
                  <p className="text-ivory/80 text-sm leading-relaxed">
                    Sweep them into an elegant updo, or let them fall beautifully down your shoulders. Your locs easily transition from casual daywear to luxury evening statements.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20 lg:py-28 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(235,115,33,0.06),transparent_60%)]" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <p className="text-sage-light/80 text-xs tracking-[0.2em] uppercase font-semibold mb-5 font-[family-name:var(--font-accent)]">
              Join the Community
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h2 className="font-[family-name:var(--font-heading)] text-ivory text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6">
              Ready to start your journey?
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="text-ivory/55 text-base leading-relaxed max-w-xl mx-auto mb-10">
              Transform your look and step into hair freedom. Reserve your spot with Locs By Steph B.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300}>
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-sage text-charcoal rounded-full text-sm font-semibold tracking-[0.08em] uppercase hover:bg-sage-light transition-all duration-300 hover:shadow-lg hover:shadow-sage/20"
            >
              Start Your Loc Journey
            </a>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
