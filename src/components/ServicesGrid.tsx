import { SERVICES } from "@/data/siteContent";
import AnimateOnScroll from "./AnimateOnScroll";

function ServiceIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    seedling: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c0-6 4-10 9-10-5 0-9-4-9-10 0 6-4 10-9 10 5 0 9 4 9 10z" />
      </svg>
    ),
    grid: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    sparkle: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    refresh: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M21.015 4.356v4.992" />
      </svg>
    ),
    twist: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
      </svg>
    ),
    link: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    heal: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.648-3.265a2.426 2.426 0 01-.867-3.32l4.15-7.184a2.426 2.426 0 013.32-.868l5.648 3.265a2.426 2.426 0 01.867 3.32l-4.15 7.184a2.426 2.426 0 01-3.32.868zM12 9v.01M12 12v.01M12 15v.01M9 12v.01M15 12v.01" />
      </svg>
    ),
    leaf: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  };

  return icons[icon] || icons.seedling;
}

export default function ServicesGrid() {
  return (
    <section className="py-24 lg:py-32 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <AnimateOnScroll>
            <p className="text-sage text-xs tracking-[0.25em] uppercase font-semibold mb-4 font-[family-name:var(--font-accent)] text-base">
              Our Services
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Microlocs, Sisterlocks™ &amp;{" "}
              <span className="text-navy">Loc Services in Inglewood</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="text-charcoal/60 text-lg leading-relaxed">
              From starter locs to advanced loc repair, every service is rooted
              in skill, care, and a deep understanding of natural hair. Your
              trusted loc stylist near Inglewood, CA.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <AnimateOnScroll key={service.title} delay={i * 80}>
              <div className="group relative bg-ivory rounded-2xl p-8 hover:bg-sage-muted transition-all duration-500 hover:shadow-lg hover:-translate-y-1 h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-sage/15 text-sage flex items-center justify-center mb-6 group-hover:bg-sage group-hover:text-ivory transition-all duration-500">
                  <ServiceIcon icon={service.icon} />
                </div>

                {/* Content */}
                <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Subtle accent line */}
                <div className="mt-6 w-8 h-[2px] bg-sage/30 group-hover:w-12 group-hover:bg-sage transition-all duration-500" />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
