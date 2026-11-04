import { SampleBadge } from "../components/ui"
import { DashboardMock, ReportMock, ReviewStand } from "../components/Mockups"
import { CtaBand, FaqBlock, PageIntro, TrustRow, useTitle } from "../wedge/Shell"

export default function Features() {
  useTitle("Features · Restrosights")
  return (
    <>
      <PageIntro title="The guest loop, without a pile of tools">
        Restaurants already have enough systems. Restrosights covers the stand, the private note, the Google review prompt, and the monthly read.
      </PageIntro>
      <div className="flex justify-center pb-4">
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
        visual={<ReviewStand className="mx-auto max-w-sm" />}
      />
      <Band
        flip
        kicker="Ready as you add outlets"
        title="The same loop at every location"
        body="A second or a fifteenth restaurant gets its own stand and its own link. Feedback stays attached to the outlet it came from."
        visual={<DashboardMock />}
      />
      <Band
        kicker="One view for the owner"
        title="Praise, complaints, and what to fix"
        body="The monthly report is a short read for the team meeting. It does not promise a Google ranking, and the figures in this preview are sample data."
        visual={
          <div>
            <div className="mb-3">
              <SampleBadge />
            </div>
            <ReportMock />
          </div>
        }
      />
      <Band
        flip
        kicker="You’re in control"
        title="Private feedback stays private"
        body="A low rating opens a note to the restaurant. Restrosights does not delete public reviews, and it does not pay anyone to post one."
        visual={
          <ul className="wedge-card divide-y divide-[#f0eef6] p-2">
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
    <section id={id} className="mx-auto w-[min(1160px,calc(100%-2rem))] py-6">
      <div className="grid items-center gap-8 rounded-[28px] bg-white p-6 shadow-card lg:grid-cols-2 lg:gap-14 lg:p-12">
        <div className={flip ? "lg:order-2" : ""}>{visual}</div>
        <div>
          <p className="text-sm font-medium text-[#8b90a3]">{kicker}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-[2.6rem] sm:leading-[1.1]">{title}</h2>
          <p className="mt-4 leading-relaxed text-[#5c6478]">{body}</p>
        </div>
      </div>
    </section>
  )
}
