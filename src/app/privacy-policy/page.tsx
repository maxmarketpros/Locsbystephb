import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Privacy Policy | Locs By Steph B",
  description:
    "How Locs By Steph B LLC collects, uses, and protects your personal information in California and Maryland.",
};

export default function PrivacyPolicyPage() {
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
              Data protection
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <h1 className="font-[family-name:var(--font-heading)] text-ivory text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-7">
              Privacy <span className="text-sage-light">Policy</span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <p className="text-ivory/70 text-lg leading-relaxed max-w-2xl mx-auto">
              How we collect, use, and protect your personal data in California and Maryland.
            </p>
          </AnimateOnScroll>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-px bg-sage/15" />
      </section>

      <section className="py-20 lg:py-28 bg-ivory">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="bg-white rounded-3xl p-8 lg:p-16 border border-charcoal/5 shadow-sm space-y-12 text-charcoal/80 leading-relaxed text-[15px] lg:text-base">
              
              {/* Intro */}
              <div className="text-center pb-8 border-b border-charcoal/10">
                <p className="mb-4 text-lg text-charcoal/90">
                  At <strong>Locs By Steph B LLC</strong>, we’re committed to respecting your privacy and protecting your personal information. This Privacy Policy outlines how we collect, use, and protect your data when you interact with us through services, consultations, classes, or coaching—whether online or in person.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-semibold text-charcoal/60 uppercase tracking-widest mt-8">
                  <span>Effective Date: July 24, 2025</span>
                  <span className="hidden sm:inline">•</span>
                  <span>California & Maryland</span>
                </div>
              </div>

              {/* 1. Information We Collect */}
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-4">
                  1. Information We Collect
                </h2>
                <p className="mb-4">
                  We collect information you voluntarily provide when booking a service, submitting a form, participating in a class, or applying for an opportunity. This may include:
                </p>
                <ul className="list-disc pl-5 space-y-3">
                  <li><strong>Contact Info:</strong> Name, email, phone number, mailing address</li>
                  <li><strong>Client Service Info:</strong> Appointment history, hair photos, service preferences, form submissions, notes from consultations</li>
                  <li><strong>Health or Scalp Info:</strong> Shared voluntarily for safe and customized service delivery</li>
                  <li><strong>Payment Info:</strong> Transaction details (we do not store full card numbers)</li>
                  <li><strong>Marketing Preferences:</strong> Opt-in status for newsletters, promos, and event alerts</li>
                  <li><strong>Professional Info:</strong> If you apply to work with us or inquire about partnership or educational opportunities, we may collect resumes, social handles, and licensing details.</li>
                </ul>
              </div>

              {/* 2. How We Use Your Information */}
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="mb-4">We use your information to:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Book and manage appointments</li>
                  <li>Deliver safe, personalized services and support</li>
                  <li>Respond to questions and concerns</li>
                  <li>Send confirmations, reminders, and follow-ups</li>
                  <li>Offer hair education and care resources</li>
                  <li>Promote special offers, classes, and updates (only if you opt in)</li>
                  <li>Evaluate applicants and collaborators for employment or business opportunities</li>
                  <li>Comply with legal, safety, or regulatory obligations</li>
                </ul>
                <div className="bg-sage-muted/30 p-4 rounded-xl border border-sage/20 text-charcoal text-sm mt-4 inline-block font-semibold">
                  We do not sell or share your data with third parties for external marketing.
                </div>
              </div>

              {/* 3. Marketing & Education */}
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-4">
                  3. Marketing & Education
                </h2>
                <p className="mb-4">If you opt in, we may use your email or phone number to send:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Retie or maintenance reminders</li>
                  <li>Scalp health or care tips</li>
                  <li>Promotions, updates, or giveaways</li>
                  <li>Invitations to live trainings, classes, or online programs</li>
                  <li>Opportunities to work with or learn from Steph B and her team</li>
                </ul>
                <p className="text-sm italic">
                  You can unsubscribe from marketing emails or texts at any time by clicking the unsubscribe link or texting STOP.
                </p>
              </div>

              {/* 4. Hiring & Collaboration */}
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-4">
                  4. Hiring & Collaboration
                </h2>
                <p className="mb-4">
                  If you submit information as a potential employee, mentee, or collaborative partner, we may use it to:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Review your qualifications</li>
                  <li>Contact you about roles, partnerships, or projects</li>
                  <li>Maintain communication about upcoming opportunities or class launches</li>
                  <li>Store your info for future consideration (unless you request deletion)</li>
                </ul>
              </div>

              {/* 5. Your Privacy Rights */}
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-4">
                  5. Your Privacy Rights
                </h2>
                <p className="mb-4">If you reside in California or Maryland, you have the right to:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Request a copy of your data</li>
                  <li>Ask us to delete your data (unless legally required to retain it)</li>
                  <li>Opt out of marketing at any time</li>
                  <li>Correct any outdated or inaccurate information</li>
                </ul>
                <p className="flex items-center gap-2">
                  <strong>To exercise your rights:</strong>
                  <a href="mailto:locsbystephb@gmail.com" className="text-sage font-semibold hover:underline">
                    locsbystephb@gmail.com
                  </a>
                </p>
              </div>

              {/* 6. Data Storage & Security */}
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-4">
                  6. Data Storage & Security
                </h2>
                <p>
                  Your information is stored using secure third-party platforms (e.g., Vagaro, Google, Notion, Beacon). Access is restricted to authorized team members only. We take appropriate steps to protect against unauthorized access or disclosure.
                </p>
              </div>

              {/* 7. Children's Privacy */}
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-4">
                  7. Children&apos;s Privacy
                </h2>
                <p>
                  Our services are intended for individuals 16 and older. We do not knowingly collect information from children under 13 without parental or legal guardian consent.
                </p>
              </div>

              {/* 8. Policy Changes */}
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal mb-4">
                  8. Policy Changes
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. Changes will be posted here with the updated effective date.
                </p>
              </div>

              {/* 9. Contact */}
              <div className="bg-charcoal text-ivory p-8 rounded-2xl">
                <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-6">
                  9. Contact Us
                </h2>
                <p className="mb-6 text-ivory/80">
                  If you have any questions or wish to update or delete your information, please reach out to us:
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">📍</span>
                    <span className="font-semibold tracking-wide">California & Maryland</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">📧</span>
                    <a href="mailto:locsbystephb@gmail.com" className="hover:text-sage-light transition-colors hover:underline">
                      locsbystephb@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🌐</span>
                    <a href="https://website.beacons.ai/locsbystephb" target="_blank" rel="noopener noreferrer" className="hover:text-sage-light transition-colors hover:underline">
                      Beacons Link
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Agreement section */}
            <div className="mt-12 text-center max-w-2xl mx-auto">
              <h3 className="text-charcoal font-[family-name:var(--font-heading)] text-xl font-bold mb-3">
                Agreement & Acceptance of Policies
              </h3>
              <p className="text-charcoal/60 text-sm">
                By scheduling an appointment at Locs By Steph B LLC, you are indicating a formal acceptance of all terms listed above.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
