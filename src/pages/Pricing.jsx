import { Button } from "../components/ui"
import { useLead } from "../components/LeadForm"
import { FaqBlock, PageIntro, TrustRow, useTitle } from "../wedge/Shell"
import { PLANS } from "../wedge/content"

export default function Pricing() {
  useTitle("Pricing · Restrosights")
  const { openDemo } = useLead()

  return (
    <>
      <PageIntro title="Transparent pricing for you and your restaurant">
        Clear monthly plans. No setup fee. No contract. Cancel anytime. A group plan is quoted after a conversation.
      </PageIntro>
      <section className="mx-auto grid w-[min(1100px,calc(100%-2rem))] items-stretch gap-5 py-10 lg:grid-cols-3">
        {PLANS.map((plan) => (
          <article
            key={plan.name}
            className={`flex flex-col rounded-[28px] p-7 ${plan.featured ? "bg-[#e6e1ff] shadow-float" : "wedge-card"}`}
          >
            <h2 className="text-lg font-semibold">{plan.name}</h2>
            {plan.featured ? <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#3d348f]">Most chosen</p> : <p className="mt-2 text-xs text-transparent">.</p>}
            <p className="mt-6 flex items-end gap-1">
              <span className="text-5xl font-semibold tracking-[-0.04em]">{plan.price}</span>
              <span className="mb-1 text-sm text-[#5c6478]">{plan.period}</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#5c6478]">{plan.note}</p>
            <ul className="mt-6 grid flex-1 gap-3 text-sm">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="mt-0.5 text-[#5346d4]" aria-hidden="true">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              variant={plan.featured ? "primary" : "secondary"}
              className="mt-8 w-full"
              onClick={() => openDemo(`pricing-${plan.name}`, plan.name)}
            >
              Choose plan
            </Button>
          </article>
        ))}
      </section>
      <TrustRow />
      <FaqBlock />
    </>
  )
}
