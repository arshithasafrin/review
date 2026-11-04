import { SampleBadge } from "../components/ui"
import { CtaBand, FaqBlock, PageIntro, TrustRow, useTitle } from "../wedge/Shell"
import { SilkFill } from "../wedge/SilkFill"

export default function Features() {
  useTitle("Features · Restrosights")
  return (
    <>
      <PageIntro title="The guest loop, without a pile of tools">
        Restaurants already have enough systems. Restrosights covers the stand, the private note, the Google review prompt, and the monthly read.
      </PageIntro>
      <div className="flex justify-center bg-[#f6f5ff] pb-16">
        <a href="#stand" className="btn btn-primary">
          See the stand <span aria-hidden="true">→</span>
        </a>
      </div>
      <TrustRow />
      <Band
        id="stand"
        kicker="Easy for the floor"
        title="Take the awkward ask off the team"
        body="Staff should not have to chase a review at the table. The stand does the asking at the counter, with a QR code and one short line of copy."
        visual={
        <Panel>
          <p className="display text-lg">At the counter</p>
          <p className="mt-2 text-sm leading-6 text-[#455366]">A QR prompt. A rating from 1 to 5. No reward for posting.</p>
        </Panel>
      }
      />
      <Band
        flip
        kicker="Ready as you add outlets"
        title="The same loop at every location"
        body="A second or a fifteenth restaurant gets its own stand and its own link. Feedback stays attached to the outlet it came from."
        visual={
        <Panel>
          <SampleBadge />
          <p className="display mt-3 text-lg">Per outlet</p>
          <p className="mt-2 text-sm leading-6 text-[#455366]">Each location keeps its own stand, link, and monthly read.</p>
        </Panel>
      }
      />
      <Band
        kicker="One view for the owner"
        title="Praise, complaints, and what to fix"
        body="The monthly report is a short read for the team meeting. It does not promise a Google ranking, and the figures in this preview are sample data."
        visual={
        <Panel>
          <SampleBadge />
          <p className="display mt-3 text-lg">Monthly read</p>
          <p className="mt-2 text-sm leading-6 text-[#455366]">Praise, complaints, and what to fix. No ranking promise.</p>
        </Panel>
      }
      />
      <Band
        flip
        kicker="You’re in control"
        title="Private feedback stays private"
        body="A low rating opens a note to the restaurant. Restrosights does not delete public reviews, and it does not pay anyone to post one."
        visual={
          <ul className="divide-y divide-[#ebebeb] rounded-[20px] bg-[#f7f7f7] p-2">
            {[
              ["1–3 stars", "A private note to the team"],
              ["4–5 stars", "A path to a genuine Google review"],
              ["No reward", "Guests are not paid to post"],
              ["Google decides", "A suspended profile is not guaranteed back"],
            ].map(([title, body]) => (
              <li key={title} className="px-4 py-4">
                <p className="font-semibold">{title}</p>
                <p className="mt-1 text-sm text-[#5c6478]">{body}</p>
              </li>
            ))}
          </ul>
        }
      />
      <FaqBlock />
      <CtaBand />
    </>
  )
}

function Band({ id, kicker, title, body, visual, flip = false }) {
  return (
    <section id={id} className="bg-white">
      <div className="mx-auto grid w-[min(1280px,calc(100%-2rem))] items-center gap-12 px-2 py-16 lg:grid-cols-2 lg:py-24">
        <div className={flip ? "lg:order-2" : ""}>
          <p className="font-display text-[16px] font-medium text-[#463fa6]">{kicker}</p>
          <h2 className="display mt-4 text-[36px] leading-[1.1] lg:text-[52px] lg:leading-[57px]">{title}</h2>
          <p className="mt-5 max-w-[451px] text-base leading-6 tracking-[-0.01em] text-[#455366]">{body}</p>
        </div>
        <div className={flip ? "lg:order-1" : ""}>{visual}</div>
      </div>
    </section>
  )
}

function Panel({ children }) {
  return (
    <SilkFill fade="card" className="grid min-h-[360px] place-items-center rounded-[28px] p-8">
      <div className="w-full max-w-[380px] rounded-[20px] bg-white p-5 shadow-[0_18px_40px_rgba(70,63,166,0.12)]">{children}</div>
    </SilkFill>
  )
}
