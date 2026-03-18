import { INVESTMENT_CONTENT } from "@/data/siteContent";
import AnimateOnScroll from "./AnimateOnScroll";

export default function InvestmentSection() {
  return (
    <section className="py-24 lg:py-32 bg-ivory-warm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <AnimateOnScroll>
            <p className="text-sage text-xs tracking-[0.25em] uppercase font-semibold mb-4 font-[family-name:var(--font-accent)] text-base">
              Transparent Pricing
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Loc Maintenance Cost &amp;{" "}
              <span className="text-navy">Investment Guide</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="text-charcoal/60 text-lg leading-relaxed">
              {INVESTMENT_CONTENT.intro}
            </p>
          </AnimateOnScroll>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 lg:mb-20">
          {INVESTMENT_CONTENT.cards.map((card, i) => (
            <AnimateOnScroll key={card.title} delay={i * 120}>
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                {/* Badge */}
                <span className="inline-flex self-start px-4 py-1.5 bg-sage-muted text-sage text-[11px] font-semibold tracking-[0.1em] uppercase rounded-full mb-6">
                  {card.badge}
                </span>

                <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-2xl font-bold mb-4">
                  {card.title}
                </h3>

                <p className="text-charcoal/60 text-sm leading-relaxed flex-1">
                  {card.description}
                </p>

                <div className="mt-6 w-full h-[1px] bg-charcoal/5" />
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Transparency Points */}
        <AnimateOnScroll delay={200}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
              <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-xl font-semibold mb-8 text-center">
                What Goes Into Your Investment
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {INVESTMENT_CONTENT.transparency.map((point, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="w-5 h-5 text-sage"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-charcoal/70 text-sm leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
