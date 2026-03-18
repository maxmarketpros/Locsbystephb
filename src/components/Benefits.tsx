import { BENEFITS } from "@/data/siteContent";
import AnimateOnScroll from "./AnimateOnScroll";

function BenefitIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    circle: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
      </svg>
    ),
    heart: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    sun: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    clock: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    crown: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l3-9 4 4 2-8 2 8 4-4 3 9H3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17h18v2H3v-2z" />
      </svg>
    ),
  };

  return icons[icon] || icons.circle;
}

export default function Benefits() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <AnimateOnScroll>
            <p className="text-sage text-xs tracking-[0.25em] uppercase font-semibold mb-4 font-[family-name:var(--font-accent)] text-base">
              The Benefits
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Why Start Your{" "}
              <span className="text-navy">Loc Journey</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="text-charcoal/60 text-lg leading-relaxed">
              Locking your hair isn&apos;t just a style choice—it&apos;s a lifestyle shift
              that touches everything from your morning routine to your sense of
              self.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {BENEFITS.map((benefit, i) => (
            <AnimateOnScroll key={benefit.title} delay={i * 100}>
              <div className="group bg-ivory rounded-2xl p-8 hover:bg-sage-muted transition-all duration-500 text-center h-full flex flex-col items-center">
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-sage/10 text-sage flex items-center justify-center mb-6 group-hover:bg-sage group-hover:text-ivory transition-all duration-500">
                  <BenefitIcon icon={benefit.icon} />
                </div>

                {/* Content */}
                <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-lg font-semibold mb-3">
                  {benefit.title}
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
