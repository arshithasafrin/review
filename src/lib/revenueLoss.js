/** Published anchors. Everything else in the calculator is an owner-set assumption. */
export const LUCA_PER_STAR_MIN = 0.05
export const LUCA_PER_STAR_MAX = 0.09
/** Proserpio & Zervas, Marketing Science 2017: hotels that started replying gained 0.12 stars. */
export const RESPONSE_STAR_GAIN = 0.12

export const DEFAULTS = {
  covers: 1200,
  bill: 800,
  rating: 4.1,
  fakePct: 8,
  fakeStars: 1,
  unansweredPct: 70,
  nakedPct: 35,
  infoGap: 0.1,
  perStarPct: 7,
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

export function computeLoss(input) {
  const covers = Math.max(0, Number(input.covers) || 0)
  const bill = Math.max(0, Number(input.bill) || 0)
  const rating = clamp(Number(input.rating) || 1, 1, 5)
  const fakeShare = clamp((Number(input.fakePct) || 0) / 100, 0, 0.6)
  const fakeStars = clamp(Number(input.fakeStars) || 1, 1, 5)
  const unansweredShare = clamp((Number(input.unansweredPct) || 0) / 100, 0, 1)
  const nakedShare = clamp((Number(input.nakedPct) || 0) / 100, 0, 1)
  const infoGap = clamp(Number(input.infoGap) || 0, 0, 0.25)
  const perStar = clamp((Number(input.perStarPct) || 7) / 100, LUCA_PER_STAR_MIN, LUCA_PER_STAR_MAX)

  const monthly = covers * bill
  const kept = 1 - fakeShare
  const withoutFakes = kept > 0 ? clamp((rating - fakeShare * fakeStars) / kept, 1, 5) : rating
  const fakeGap = Math.max(0, withoutFakes - rating)
  const responseGap = RESPONSE_STAR_GAIN * unansweredShare
  const nakedGap = nakedShare * infoGap

  const fake = monthly * fakeGap * perStar
  const unanswered = monthly * responseGap * perStar
  const naked = monthly * nakedGap * perStar

  return {
    monthly,
    fakeGap,
    responseGap,
    nakedGap,
    withoutFakes,
    perStar,
    scenarios: {
      fake,
      unanswered,
      naked,
      combined: fake + unanswered + naked,
    },
  }
}

export function formatInr(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.round(Number(value) || 0))
}
