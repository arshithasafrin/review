import { Link } from "react-router-dom"
import { Button, SampleBadge } from "../components/ui"
import { useLead } from "../components/LeadForm"
import { FeedbackList, MiniStats, PhoneMock, ReviewStand } from "../components/Mockups"
import { CtaBand, FaqBlock, FeatureTrio, TrustRow, useTitle } from "../wedge/Shell"

export default function Home() {
  useTitle("Restrosights for Restaurants | Google Review Growth & Guest Feedback System")
  const { openDemo } = useLead()

  return (
    <>
      <section className="relative overflow-hidden pb-8 pt-16 sm:pt-24">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 top-24" aria-hidden="true">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#d9d2ff] blur-3xl" />
          <div className="absolute -right-16 top-0 h-80 w-80 rounded-full bg-[#cdc4ff] blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-64 w-[70%] -translate-x-1/2 rounded-full bg-[#c9bfff]/80 blur-3xl" />
        </div>
        <div className="relative mx-auto w-[min(820px,calc(100%-2rem))] text-center">
          <h1 className="text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.05em] text-[#17192d] sm:text-6xl lg:text-[4.4rem]">
            Grow genuine reviews. Hear the guest first.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#5c6478] sm:text-lg">
            Restrosights helps restaurants collect guest feedback, grow genuine Google reviews, support local SEO, and understand what diners really think — before it shows up in public.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button onClick={() => openDemo("hero")}>Get Restrosights</Button>
            <Link to="/features" className="btn btn-secondary">
              Learn more
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <HeroCards />
        <div className="relative mx-auto mt-12 grid w-[min(420px,calc(100%-2rem))] gap-4 lg:hidden">
          <div className="float-card p-4">
            <SampleBadge />
            <div className="mt-3">
              <FeedbackList compact />
            </div>
          </div>
          <div className="float-card p-4">
            <MiniStats />
          </div>
        </div>
      </section>
      <TrustRow />
      <FeatureTrio />
      <Split
        kicker="The review stand"
        title="A prompt where guests already pause"
        body="The stand sits at the counter or the billing point. A guest rates the visit. A good rating continues to a genuine Google review. A poor rating opens a private note to the team."
        visual={<ReviewStand className="mx-auto max-w-sm" />}
      />
      <Split
        flip
        kicker="Ready for more than one outlet"
        title="See which location needs attention"
        body="Each restaurant can have its own stand, link, and monthly read. A group is not forced to treat every outlet as the same room."
        visual={
          <div className="wedge-card p-5">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold">Outlets</p>
              <SampleBadge />
            </div>
            <MiniStats />
            <div className="mt-4">
              <FeedbackList compact />
            </div>
          </div>
        }
      />
      <Split
        kicker="One place for the team"
        title="Reputation, in the owner’s pocket"
        body="Feedback, the outlets you run, and the themes guests keep mentioning live in one owner view. Figures in this preview are sample data, not a live restaurant."
        visual={
          <div className="mx-auto max-w-[280px]">
            <PhoneMock />
          </div>
        }
      />
      <Quotes />
      <FaqBlock />
      <CtaBand />
    </>
  )
}

function HeroCards() {
  return (
    <div className="relative mx-auto mt-16 hidden h-[420px] w-[min(1100px,calc(100%-2rem))] lg:block">
      <div className="bob float-card absolute left-[4%] top-[18%] w-[230px] p-4">
        <div className="flex -space-x-2">
          {["A", "R", "M", "S"].map((letter) => (
            <span key={letter} className="grid h-10 w-10 place-items-center rounded-full border-2 border-white bg-[#ece7ff] text-sm font-semibold text-[#3d348f]">
              {letter}
            </span>
          ))}
        </div>
        <p className="mt-3 text-xs font-semibold text-[#8b90a3]">Sample guests</p>
      </div>
      <div className="bob bob-2 float-card absolute left-[2%] top-[62%] w-[210px] px-5 py-4">
        <p className="text-xs font-medium text-[#8b90a3]">Sample label</p>
        <p className="text-[1.65rem] font-semibold leading-none tracking-tight">Outlets</p>
        <p className="mt-1 text-sm text-[#5c6478]">Shown on your account</p>
      </div>
      <div className="bob bob-3 float-card absolute left-1/2 top-[8%] w-[340px] -translate-x-1/2 p-4">
        <div className="mb-2 flex justify-end">
          <SampleBadge />
        </div>
        <FeedbackList compact />
      </div>
      <div className="bob float-card absolute right-[4%] top-[22%] w-[250px] p-4">
        <p className="text-sm font-semibold">What guests mention</p>
        <ul className="mt-3 space-y-2 text-sm text-[#5c6478]">
          {["Food", "Staff", "Waiting time"].map((item) => (
            <li key={item} className="flex items-center justify-between rounded-xl bg-[#f6f5fb] px-3 py-2">
              <span>{item}</span>
              <span className="text-xs font-semibold text-[#5346d4]">Sample</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Split({ kicker, title, body, visual, flip = false }) {
  return (
    <section className="mx-auto w-[min(1160px,calc(100%-2rem))] py-6">
      <div className="grid items-center gap-8 rounded-[28px] bg-white p-6 shadow-card lg:grid-cols-2 lg:gap-14 lg:p-12">
        <div className={flip ? "lg:order-2" : ""}>{visual}</div>
        <div>
          <p className="text-sm font-medium text-[#8b90a3]">{kicker}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-[#5c6478]">{body}</p>
        </div>
      </div>
    </section>
  )
}

function Quotes() {
  return (
    <section className="mx-auto w-[min(1160px,calc(100%-2rem))] py-20" aria-labelledby="quotes-heading">
      <h2 id="quotes-heading" className="text-center text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
        What restaurants say
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-center text-[#5c6478]">
        These cards are placeholders. A quote goes here only after a restaurant has agreed to be named.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {[1, 2, 3].map((n) => (
          <figure key={n} className="wedge-card p-6">
            <SampleBadge />
            <blockquote className="mt-4 text-sm leading-relaxed text-[#5c6478]">
              [Insert verified restaurant testimonial. No quote is published until the restaurant has approved the wording.]
            </blockquote>
            <figcaption className="mt-5 text-sm font-semibold">
              [Restaurant name]
              <span className="mt-1 block font-medium text-[#8b90a3]">[City]</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
