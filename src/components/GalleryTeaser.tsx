import Image from "next/image";
import { GALLERY_IMAGES } from "@/data/siteContent";
import AnimateOnScroll from "./AnimateOnScroll";

export default function GalleryTeaser() {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimateOnScroll>
            <p className="text-sage text-xs tracking-[0.25em] uppercase font-semibold mb-4 font-[family-name:var(--font-accent)] text-base">
              Our Work
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h2 className="font-[family-name:var(--font-heading)] text-charcoal text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Loc Results from Our{" "}
              <span className="text-navy">Inglewood Studio</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="text-charcoal/60 text-lg leading-relaxed">
              Every set of locs tells a story. Here&apos;s a glimpse of the artistry
              and care behind every appointment.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Masonry-style Grid — first 6 prominent, remaining in tighter grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {GALLERY_IMAGES.slice(0, 6).map((image, i) => (
            <AnimateOnScroll
              key={image.src}
              delay={i * 80}
              className={i % 3 === 1 ? "mt-8" : ""}
            >
              <div className="group relative aspect-[3/4] rounded-2xl lg:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                  <p className="text-ivory text-xs lg:text-sm leading-relaxed">
                    {image.alt}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Additional results — compact grid */}
        {GALLERY_IMAGES.length > 6 && (
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mt-6">
            {GALLERY_IMAGES.slice(6).map((image, i) => (
              <AnimateOnScroll key={image.src} delay={500 + i * 60}>
                <div className="group relative aspect-square rounded-xl lg:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 33vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
