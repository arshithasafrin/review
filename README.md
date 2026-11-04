# Restrosights

Live preview (no login): https://rawcdn.githack.com/arshithasafrin/review/ce762f48b49c8840505d6bb2d68156da74bacdce/index.html

The first visit shows a one-step notice from the host. Choose **Open the page**. The site itself then loads with no account.

GitHub Pages at https://arshithasafrin.github.io/review/ is not on yet. The Actions workflow builds, then deploy fails with “Ensure GitHub Pages has been enabled” because this repository’s Pages setting is still off. Turning on Pages (Settings → Pages → Source: GitHub Actions) lets the next run publish that URL. The credentials on this run cannot change that setting.

Marketing site for Restrosights, a restaurant reputation and guest-feedback system. One static page: genuine Google review growth, private capture of lower-rated feedback, and a monthly read of what diners are saying.

The visual language follows the soft lavender-to-indigo silk gradient the client chose, with white cards floating on it. Copy follows the sales-page brief. The product name is Restrosights throughout.

## Run locally

Requirements: Node.js 20 or newer.

```bash
npm install
npm run dev
```

The dev server prints a local URL, usually http://localhost:5173/.

## Build

```bash
npm run build
npm run preview
```

`npm run build` writes a static site to `dist/`. Asset paths are relative, so the same folder can be hosted at a domain root or in a subpath such as GitHub Pages.

## Deploy

### GitHub Pages

This repo includes `.github/workflows/pages.yml`. On a push to `main` (and on `cursor/**` branches) it builds `dist/` and deploys with GitHub Actions.

The public URL for this repository is:

https://arshithasafrin.github.io/review/

The repository setting **Pages → Build and deployment → Source** must be **GitHub Actions**. The workflow requests `pages: write` and `id-token: write`.

### Any other static host

Upload the contents of `dist/` to the host. No server runtime is required.

## Before launch

1. Replace the WhatsApp placeholder in `src/lib/config.js` (`WHATSAPP_E164`, digits only, country code, no plus). Set `WHATSAPP_IS_PLACEHOLDER` to `false`. WhatsApp links keep UTM parameters and the landing source in the prefilled message.
2. To deliver demo requests, set `VITE_LEAD_ENDPOINT` to a URL that accepts `POST` JSON. Without it, the form stores the payload in `localStorage` under `restrosights-leads` and says so on screen. Nothing is sent to a server.
3. Update the canonical URL, Open Graph URL and `public/sitemap.xml` if the public domain is not the GitHub Pages URL above.

## Analytics hooks

`src/lib/analytics.js` pushes every event to `window.dataLayer`, to `gtag` when it exists, and as a `rs:analytics` custom event.

| Event | When |
| --- | --- |
| `book_demo_click` | Book a Demo opens the form |
| `whatsapp_click` | A WhatsApp link is used |
| `pricing_cta` | A pricing button opens the form |
| `form_submit` | The demo form is submitted |
| `get_restrosights_click` | Get Restrosights |
| `watch_video` | A film preview is opened |
| `pricing_view` | The pricing section is in view |
| `faq_open` | An FAQ answer is opened |
| `scroll_depth` | 25, 50, 75 and 90 percent |

The form keeps `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `gclid` and `fbclid` for the session and submits them with the lead.

## Page checklist

1. Hero
2. Pain
3. How it works
4. Review Stand
5. App / dashboard
6. Reviews and local SEO
7. Negative feedback filtration
8. Monthly insights
9. Reputation support
10. Brand services
11. Multi-location
12. Value stack
13. Pricing, with Growth emphasised
14. Proof placeholders only
15. FAQ
16. Final call to action and demo form

Also covered: sticky mobile Book Demo / WhatsApp bar, 48px controls, sample-data labels on the phone, dashboard and monthly report, no invented testimonials or results, and no claims about blocking reviews or guaranteed rankings, removal or reinstatement.

## Stack

Vite, React and Tailwind CSS. The logo is an SVG used in the navigation, footer and favicon.
