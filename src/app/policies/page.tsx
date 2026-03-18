import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/siteContent";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Salon Policies & Etiquette | Locs By Steph B",
  description:
    "Review our salon policies, cancellation terms, consultation requirements, and booking fees to ensure a seamless loc experience at Locs By Steph B.",
  keywords: [
    "salon policies",
    "locs by steph b rules",
    "loctician cancellation policy",
    "appointment guidelines",
    "salon etiquette",
  ],
};

const policies = [
  {
    icon: (
      <svg className="w-6 h-6 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    title: "Booking Fees",
    content: (
      <>
        <p className="mb-4">
          Appointments are reserved exclusively for you and require a non-refundable fee to confirm. This fee is deducted from the total service cost, with the balance due at the time of your appointment.
        </p>
        <p className="font-semibold text-charcoal">Fee Amounts:</p>
        <p>
          20%–50% for most regular hair services. For longer services or special requests, a higher fee may be required. <strong>All services require a card on file to reserve.</strong>
        </p>
      </>
    ),
  },
  {
    icon: (
      <svg className="w-6 h-6 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
      </svg>
    ),
    title: "Consultations",
    content: (
      <>
        <p className="mb-6">
          Consultations are a valuable opportunity to explore our services and get answers to your hair care questions. Requirements vary depending on the type of consultation:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-sage-muted/40 p-5 rounded-2xl">
            <h4 className="font-bold text-charcoal mb-3">Transfer Consultations</h4>
            <ul className="list-disc pl-5 space-y-2 mb-4 text-charcoal/80">
              <li>Meet &amp; Greet</li>
              <li>Scalp analysis</li>
              <li>Hair analysis</li>
              <li>Haircare plan</li>
              <li>Schedule Retie or Repair Session(s)</li>
            </ul>
            <p className="text-sm font-semibold text-sage">No need to wash, we WASH HERE.</p>
          </div>

          <div className="bg-sage-muted/40 p-5 rounded-2xl">
            <h4 className="font-bold text-charcoal mb-3">Establishment Consults</h4>
            <ul className="list-disc pl-5 space-y-2 mb-4 text-charcoal/80">
              <li>Arrive with freshly washed (within 24 hours) completely dry hair.</li>
              <li>Allow hair to air dry in twists or flat twists/cornrows.</li>
              <li><strong>DO NOT FLAT IRON or BLOW DRY YOUR HAIR.</strong></li>
            </ul>
            <p className="text-sm text-charcoal/80">
              This helps us observe your natural curl pattern. If your hair isn&apos;t prepared as required, the consultation will be canceled and you will need to reschedule.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    icon: (
      <svg className="w-6 h-6 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    title: "Cancellations",
    content: (
      <>
        <div className="space-y-6">
          <div className="border-l-4 border-navy pl-4">
            <h4 className="font-bold text-navy mb-2">Los Angeles, CA Location ONLY</h4>
            <p className="mb-4">
              We understand that life happens, and we ask for 48 hours&apos; notice for any cancellations, modifications, or rescheduling.
            </p>
            <ul className="space-y-3">
              <li>
                <strong className="text-charcoal block">48-Hour Notice:</strong>
                If you cancel with at least 48 hours&apos; notice, your deposit will be forfeited, but no further charges will apply.
              </li>
              <li>
                <strong className="text-charcoal block">Less than 48-Hour Notice:</strong>
                Cancellations made less than 48 hours in advance will require payment of <strong>50% of the appointment cost.</strong>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-sage pl-4">
            <h4 className="font-bold text-charcoal mb-2">Maryland Location</h4>
            <p>Maryland Travel Loctician terms require <strong>14 days notice</strong> to cancel.</p>
          </div>

          <div className="bg-red-50 p-5 rounded-2xl border border-red-100">
            <h4 className="font-bold text-red-700 mb-2">Same Day No-Shows</h4>
            <p className="text-red-900/80 text-sm mb-3">
              These cancellations will incur a charge of <strong>100% of the appointment cost.</strong>
            </p>
            <p className="text-red-900/80 text-sm">
              <strong className="text-red-900">Rescheduling:</strong> You may reschedule once within the same month of your original appointment with 48 hours&apos; notice. If not rescheduled within this timeframe, it will be treated as a cancellation.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    icon: (
      <svg className="w-6 h-6 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Tardiness & Lateness",
    content: (
      <>
        <p className="mb-4">
          Punctuality is crucial. Please notify me if you expect to be late. Arriving more than <strong>10 minutes late</strong> may result in rescheduling, with the original appointment time still charged. Late minutes will be added to your service time.
        </p>
        <p className="mb-4">
          If your appointment cannot be accommodated due to lateness, this will result in a <strong>Same Day cancellation fee (100% of the service)</strong> being assessed to the card on file or sent by Zelle on the same day. 
        </p>
        <p>
          The payment must be made in order to reserve any future bookings. If already on the calendar, your current booked appointments will be removed within 24 hours if payment is not made, and you will be banned from booking future appointments.
        </p>
      </>
    ),
  },
  {
    icon: (
      <svg className="w-6 h-6 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a1.5 1.5 0 01-1.5 1.5H8.25m3.75 14.125c1.243 0 2.25-.84 2.25-1.875 0-.369-.128-.713-.349-1.003-.215-.283-.401-.604-.401-.959V11.25c0-.828.672-1.5 1.5-1.5H18" />
      </svg>
    ),
    title: "Split Appointments",
    content: (
      <p>
        I do not allow split appointments for reties. For example, you cannot schedule for 3 hours here and 1 hour there. Sessions must be completed in their scheduled block.
      </p>
    ),
  },
  {
    icon: (
      <svg className="w-6 h-6 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Atmosphere & Plus Ones",
    content: (
      <p>
        Your time at Locs by Steph B should be a peaceful, rejuvenating experience. Please refrain from bringing children or additional guests unless they are receiving services.
      </p>
    ),
  },
  {
    icon: (
      <svg className="w-6 h-6 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: "Before & After Hours Services",
    content: (
      <>
        <p className="mb-4">
          Services scheduled outside of regular hours will incur additional charges, excluding Sisterlocks/Brotherlocks &amp; Microlocs Installations.
        </p>
        <p className="font-semibold text-charcoal mb-2">After Hours Charges:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>$25/hour</strong> up to 2 hours.</li>
          <li>Beyond 2 hours, a flat rate of <strong>$50</strong> applies.</li>
          <li>After-hours service on non-work days or holidays is an additional <strong>$25+</strong>.</li>
        </ul>
      </>
    ),
  },
  {
    icon: (
      <svg className="w-6 h-6 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    title: "Payment",
    content: (
      <ul className="space-y-3">
        <li>
          I accept various payment methods, including cash, <strong>Zelle</strong>, and all major credit/debit cards.
        </li>
        <li className="text-sage border p-3 border-sage/30 bg-sage-muted/30 rounded-lg">
          <strong>All establishment payments must be made via Zelle.</strong>
        </li>
      </ul>
    ),
  },
];

export default function PoliciesPage() {
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
              Etiquette &amp; Guidelines
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h1 className="font-[family-name:var(--font-heading)] text-ivory text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-7">
              Salon <span className="text-sage-light">Policies</span>
            </h1>
          </AnimateOnScroll>
        </div>
        
        {/* Clean edge */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-sage/15" />
      </section>

      {/* ═══ MISSION STATEMENT ═══ */}
      <section className="py-16 lg:py-20 bg-ivory border-b border-charcoal/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <p className="text-charcoal/80 text-lg lg:text-xl leading-relaxed italic font-light">
              At Locs by Steph B LLC, we are committed to providing exceptional service, personalized hair care, and empowering beauty education. We serve professional women who value their time and prioritize self-care. <br className="hidden lg:block"/>
              <strong>Please adhere to the following policies to ensure a seamless and enjoyable experience.</strong>
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══ POLICIES LIST ═══ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 lg:space-y-12">
            {policies.map((policy, i) => (
              <AnimateOnScroll key={policy.title} delay={i * 50}>
                <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 p-8 lg:p-10 rounded-3xl bg-ivory border border-charcoal/5 hover:border-sage/20 transition-colors shadow-sm">
                  {/* Icon Column */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-sage-muted flex items-center justify-center">
                      {policy.icon}
                    </div>
                  </div>
                  
                  {/* Content Column */}
                  <div className="flex-1">
                    <h3 className="font-[family-name:var(--font-heading)] text-charcoal text-2xl lg:text-3xl font-bold leading-tight mb-4">
                      {policy.title}
                    </h3>
                    <div className="text-charcoal/70 text-[15px] lg:text-base leading-relaxed">
                      {policy.content}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AGREEMENT FOOTER ═══ */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(235,115,33,0.1),transparent_70%)]" />
        
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimateOnScroll>
             <div className="w-16 h-16 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                <svg className="w-8 h-8 text-sage-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
             </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h2 className="font-[family-name:var(--font-heading)] text-ivory text-3xl lg:text-4xl font-bold leading-tight mb-6">
              Agreement &amp; Acceptance
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-ivory/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              By scheduling an appointment at Locs By Steph B. LLC, you are indicating a formal acceptance of all terms and policies listed above.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={300}>
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-sage text-charcoal rounded-full text-base font-semibold tracking-[0.08em] uppercase hover:bg-sage-light transition-all duration-300 hover:shadow-lg hover:shadow-sage/20"
            >
              I Understand — Book Now
            </a>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
