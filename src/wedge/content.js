export const NAV = [
  { to: "/features", label: "Features" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
]

export const FAQS = [
  {
    q: "Can Restrosights remove negative Google reviews?",
    a: "No. Restrosights does not delete Google reviews. If a guest is unhappy, the Review Stand routes that feedback privately so the team can respond before the guest decides to post publicly.",
  },
  {
    q: "Can Restrosights guarantee a higher Google rating?",
    a: "No. The stand makes it easier for happy guests to leave a genuine review. Ratings still depend on the experience you serve.",
  },
  {
    q: "Does Restrosights offer incentives for reviews?",
    a: "No. Guests are not paid, discounted, or rewarded for leaving a review.",
  },
  {
    q: "What happens when a guest is unhappy?",
    a: "Low ratings open a private feedback form. The team is notified so someone can follow up while the guest is still in the restaurant.",
  },
  {
    q: "Will every guest leave a Google review?",
    a: "No. The stand invites guests who had a good visit. Plenty of people will still walk past it.",
  },
  {
    q: "Can Restrosights guarantee a Google Business Profile will be reinstated?",
    a: "No. The team can help with a suspended profile. Google makes the decision.",
  },
  {
    q: "Is this only for a single restaurant?",
    a: "No. One outlet or a group: each location can have its own stand, link, and report.",
  },
  {
    q: "How do restaurants get started?",
    a: "Share your restaurant name, city, phone number, and how many outlets you run. The team sets up the stand and the owner app with you.",
  },
]

export const PLANS = [
  {
    name: "Starter",
    price: "₹2,499",
    period: "/ month",
    note: "For a smaller restaurant that wants a professional feedback and review system.",
    featured: false,
    features: [
      "Review Stand for one outlet",
      "Private feedback when a guest is unhappy",
      "Genuine Google review prompt",
      "Owner app",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "₹4,999",
    period: "/ month",
    note: "For a restaurant that is serious about reputation and brand growth.",
    featured: true,
    features: [
      "Everything in Starter",
      "Monthly guest intelligence report",
      "Google Business Profile support",
      "Fake review assistance",
      "Priority support",
    ],
  },
  {
    name: "Restaurant Group",
    price: "Custom",
    period: "",
    note: "For groups that need every location on one system.",
    featured: false,
    features: [
      "Stands and links per outlet",
      "Group-level view of feedback",
      "Monthly reports per location",
      "A setup conversation before pricing",
    ],
  },
]

export const POSTS = [
  {
    slug: "how-the-review-stand-works",
    category: "How it works",
    title: "How the Review Stand asks for a genuine Google review",
    excerpt: "Where the stand sits, what the guest sees, and why happy guests are pointed to Google while unhappy guests are not.",
    body: [
      "The Restrosights Review Stand is a small counter or billing-point prompt. It holds a QR code and a short line of copy. Guests who already paused to pay are the people most likely to notice it.",
      "A guest opens the link and rates the visit from 1 to 5. There is no reward, discount, or incentive for leaving a review.",
      "A high rating continues toward the restaurant’s genuine Google review page. A low rating opens a private note to the team instead. The guest is not pushed to post a public complaint from the stand.",
      "Not every guest will scan it. The stand is a prompt at a natural pause, not a promise that every table will review you.",
    ],
  },
  {
    slug: "when-a-guest-is-unhappy",
    category: "Guest feedback",
    title: "What happens when a guest rates the visit poorly",
    excerpt: "Low ratings stay private, the team is notified, and nobody is told the system can delete a Google review.",
    body: [
      "If a guest taps a low rating, Restrosights asks what went wrong and sends that note to the restaurant. The point is to hear it while the guest may still be on the premises.",
      "The team can follow up about the food, the wait, or the service. That conversation is private. It is not a tool for removing reviews that are already on Google.",
      "Restrosights does not block bad reviews, and it does not guarantee a rating. A guest who wants to post publicly can still do that on their own.",
    ],
  },
  {
    slug: "what-the-monthly-report-includes",
    category: "Reports",
    title: "What is inside the monthly guest report",
    excerpt: "Praise, complaints, and a short read on what to fix. No invented scores, and no promise of a ranking.",
    body: [
      "Once a month, restaurants on the Growth plan get a short report built from the feedback collected that month.",
      "It groups what guests praised, what they complained about, and which themes showed up more than once. The idea is a read the owner can use in a team meeting.",
      "The report describes what guests said. It does not promise a Google ranking, a rating increase, or a change in search results.",
    ],
  },
]

export function postBySlug(slug) {
  return POSTS.find((post) => post.slug === slug)
}
