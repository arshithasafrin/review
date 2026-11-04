import { LeadForm } from "../components/LeadForm"
import { CtaBand, FaqBlock, FeatureTrio, PageIntro, useTitle } from "../wedge/Shell"

export default function Contact() {
  useTitle("Contact · Restrosights")
  return (
    <>
      <PageIntro title="We would love to hear from you">
        Tell us the restaurant, the city, a phone number, and how many outlets you run. Or email hello@restrosights.com.
      </PageIntro>
      <div className="mx-auto w-[min(720px,calc(100%-2rem))] py-6">
        <LeadForm idPrefix="contact-lead" source="contact" />
      </div>
      <FeatureTrio />
      <FaqBlock />
      <CtaBand />
    </>
  )
}
