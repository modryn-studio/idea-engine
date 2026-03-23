# idea-engine — Copilot Context

## Who I Am

Luke Hanner is a solo developer and indie builder (modryn-studio) who ships AI-assisted tools fast and documents the process publicly. idea-engine is a single-input product discovery engine: describe an idea or frustration in plain language, and the agent runs a full validation pipeline — market research, competition analysis, differentiation angle, buildability score 1–10, and a concrete next-action queue — then hands back a polished, shareable build brief. The target user is a solo developer with three ideas open in tabs who can't decide which one is worth building — they want a verdict and a to-do list, not another framework to think through.

## Deployment

<!-- Filled in by /setup from context.md.
     Read this before touching next.config.ts, BASE_PATH, site.ts, or any hardcoded URL.
     If mode is modryn-app:         basePath must stay set in next.config.ts.
     If mode is standalone-*:       basePath must be absent from next.config.ts. -->

mode: modryn-app
url: https://modrynstudio.com/tools/idea-engine
basePath: /tools/idea-engine

## Stack

- Next.js 16 (App Router) with TypeScript
- Tailwind CSS for styling
- Vercel for deployment
- Vercel Analytics `<Analytics />` in `layout.tsx` — zero-config pageview tracking, no env vars needed
- `@/lib/analytics.ts` — no-op stub with named methods; wire in a real provider here if needed
- Anthropic API (`claude-sonnet-4-20250514`) — discovery and validation agent; streaming pipeline: market read → competition scan → differentiation angle → buildability score → brief generation (installed: `@anthropic-ai/sdk`)
- Resend — email capture (installed: `resend@6.9.3`)
- Stripe Payment Links — one-time $9 payment, no server-side code at launch (installed: `stripe@20.4.0`)

## Project Structure

```
/app                    → Next.js App Router pages
/components             → Reusable UI components
/lib                    → Utilities, helpers, data fetching
/lib/prompts/           → Agent system prompts for each pipeline stage (score, reasoning, next-action queue, brief)
/content/tools/         → Tool entry JSON for modryn-studio-v2 landing page
```

## Route Map

- `/` → Landing page — headline, live example output (next-task brief as proof), email capture, single CTA into the tool
- `/discover` → Main tool — single text input → streaming agent pipeline → score + reasoning + next-action queue (free) → PayGate ($9) → full build brief unlock
- `/privacy` → Privacy policy
- `/terms` → Terms of service

## Brand & Voice

**Voice rules:** Delivers judgment, not enthusiasm. Precise over clever — give numbers, names, mechanisms, specific to-dos. Confident but not bossy. Never use: "powerful," "seamless," "supercharge," "game-changer," "revolutionary," "unlock your potential," "streamline your workflow," "next-level," "effortless," "insights."

**Target User:** A solo developer with three ideas open in tabs and no system for deciding which one is real. Not stuck because they can't build — stuck because they can't decide. They want a verdict and a to-do list, not another framework to think through.

**Visual Rules:**

- Color mode: Dark mode base, system toggle
- Fonts: DM Serif Display (`--font-display`) for score reveal, output headlines, hero; DM Mono (`--font-mono`) for input field, score number, next-action queue, labels
- Motion: Minimal. Streaming text reveal on agent output. Single staggered fade when score card loads. Nothing celebratory.
- Avoid: No fake testimonials, no stock photos, no confetti, no popups, no spinners longer than 1s without streaming output visible

**Colors:**
| Token | Hex | Role |
|---|---|---|
| `accent` | #E8C547 | Score badge, CTAs, next-action queue labels — warm amber |
| `secondary` | #4ECBA0 | High-score confirmation, "brief ready" indicator |
| `bg` | #111110 | Page background — near-black, warm undertone |
| `text` | #E8E6DF | Body text — warm off-white, never pure white |
| `muted` | #5A5955 | Secondary text, input placeholders |
| `surface` | #1C1C1A | Elevated surfaces — cards, input containers, PayGate panel |
| `border` | #2A2A26 | Dividers, input outlines, section separators |

**Emotional Arc:** Land → "Someone finally automated the part I hate." / Read → "This is exactly where I get stuck." / Scroll → "Wait — it tells me what to do this week?" / Convert → "Just take my $9."

**Copy Reference:**

- Hero: "Type the idea. Get the verdict."
- Sub-headline: "One input. Score, reasoning, and three things to do this week. Ready to build or kill."
- CTA: "Run the discovery →"
- Score reveal: "Here's the read."
- Next-action header: "What to do this week."
- PayGate header: "Your build brief is ready."
- PayGate sub: "Get the full brief for $9 — one time, no subscription. Shareable one-pager with market positioning, brand direction, and route plan. Includes context.md + brand.md if you're on the Modryn boilerplate."
- Error: "Something broke mid-run. Your input is still here — try again."
- Low score: "This one scores a 3. Here's why — and the one thing that would change it."
- Empty state: "Describe a frustration, a gap you keep noticing, or an idea you can't stop thinking about."

## README Standard

Every project README follows this exact structure — no more, no less:

```markdown
![Project Name](public/brand/banner.png)

# Project Name

One-line tagline. Outcome-focused — lead with what the user gets, not the technology.

→ [domain.com](https://domain.com)

---

Next.js · TypeScript · Tailwind CSS · Vercel
```

Rules:

- **Banner image** — always first. Path is `public/brand/banner.png`.
- **H1 title** — product name only, no subtitle.
- **Tagline** — one sentence. What the user gets. No buzzwords ("powerful", "seamless", "AI-powered").
- **Live link** — `→ [domain.com](https://domain.com)` format. Always present if live.
- **Divider** — `---` separator before the stack line.
- **Stack line** — `·`-separated list of core tech only. No version numbers, no descriptions.
- **Nothing else.** No install instructions, no contributing section, no architecture diagrams, no screenshots beyond the banner. Real docs go in `/docs` or on the live site.

When adding a badge row (optional, for open source tools/libraries only):

- Place it between the H1 and the tagline
- Use shields.io format: `[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)`
- Keep it to 3 badges max: typically license + CI status + live site
- Apps (not libraries) should skip badges entirely

## Tailwind v4

This project uses Tailwind CSS v4. The rules are different from v3 — follow these exactly.

**Design tokens live in `@theme`, not `:root`:**

```css
/* ✅ correct — generates text-accent, bg-surface, border-border, etc. */
@theme {
  --color-accent: #e8c547; /* Amber — score badge, CTAs, next-action queue labels */
  --color-secondary: #4ecba0; /* Teal — high-score states, brief ready indicator */
  --color-bg: #111110; /* Near-black warm — page background */
  --color-text: #e8e6df; /* Warm off-white — body text */
  --color-muted: #5a5955; /* Muted warm gray — placeholders, secondary text */
  --color-surface: #1c1c1a; /* Elevated surfaces — cards, input containers */
  --color-border: #2a2a26; /* Dividers, input outlines */
  --font-heading: var(--font-display); /* DM Serif Display — score reveals, hero */
  --font-mono: var(--font-mono); /* DM Mono — input field, score number, labels */
}

/* ❌ wrong — :root creates CSS variables but NO utility classes */
:root {
  --color-accent: #e8c547;
}
```

**Use `(--color-*)` shorthand in class strings — never `[var(--color-*)]`:**

```tsx
// ✅ correct — TW v4 native shorthand
<div className="border-(--color-border) bg-(--color-surface) text-(--color-muted)" />

// ❌ wrong — v3 bracket notation, verbose and unnecessary in v4
<div className="border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)]" />
```

If tokens are defined in `@theme`, you can also use the short utility names directly:

```tsx
// ✅ also correct when @theme is properly set up
<div className="border-border bg-surface text-muted text-accent" />
```

Never add `tailwind.config.*` — v4 has no config file. All theme customization goes in `globals.css` under `@theme`.

## API Route Logging

Every new API route (`app/api/**/route.ts`) MUST use `createRouteLogger` from `@/lib/route-logger`.

```typescript
import { createRouteLogger } from '@/lib/route-logger';
const log = createRouteLogger('my-route');

export async function POST(req: Request): Promise<Response> {
  const ctx = log.begin();
  try {
    log.info(ctx.reqId, 'Request received', {
      /* key fields */
    });
    // ... handler body ...
    return log.end(ctx, Response.json(result), {
      /* key result fields */
    });
  } catch (error) {
    log.err(ctx, error);
    return Response.json({ error: 'Internal error' }, { status: 500 });
  }
}
```

- `begin()` prints the `─` separator + START line with a 5-char `reqId`
- `info()` / `warn()` log mid-request milestones
- `end()` logs ✅ with elapsed ms and returns the response
- `err()` logs ❌ with elapsed ms
- Never use raw `console.log` in routes — always go through the logger

## Analytics

Vercel Analytics (`<Analytics />` in `layout.tsx`) handles pageviews automatically — no config needed.

`@/lib/analytics.ts` is a no-op stub with named methods. Add a named method for each distinct user action — keeps events typed and discoverable. Wire in a real provider (PostHog, Mixpanel, etc.) inside `analytics.ts` if custom event tracking is needed later.

```typescript
import { analytics } from '@/lib/analytics';
analytics.track('event_name', { prop: value });
```

**Vercel plan check required before adding custom events.** Custom events require Vercel Pro ($20/mo) — they do not appear in the Vercel Analytics dashboard on Hobby. Adding real event calls without an upgraded plan creates dead code that misleads future readers. Before instrumenting scroll depth, click events, conversion tracking, screenshot views, or any custom event: confirm the plan. If on Hobby, keep `analytics.ts` as a no-op stub until the plan is upgraded or a different provider is explicitly wired in. Do not add GA4 or PostHog without explicit instruction — keep it simple.

## Dev Server

Start with `Ctrl+Shift+B` (default build task). This runs:

```
npm run dev -- --port 3000 2>&1 | Tee-Object -FilePath dev.log
```

Tell Copilot **"check logs"** at any point — it reads `dev.log` and flags errors or slow requests.

## Code Style

- Write as a senior engineer: minimal surface area, obvious naming, no abstractions before they're needed
- Comments explain WHY, not what
- One file = one responsibility
- Prefer early returns for error handling
- Never break existing functionality when adding new features
- Leave TODO comments for post-launch polish items

## Core Rules

- Every page earns its place — no pages for businesses not yet running
- Ship fast, stay honest — empty is better than fake
- Ugly is acceptable, broken is not — polish the core action ruthlessly
- Ship one killer feature, not ten mediocre ones
- Instrument analytics before features — data from day one
- Onboard users to value in under 2 minutes
- **Local-first by default** — no accounts, no data stored server-side, pay only when you use it. This is a brand-level commitment across every product, not a feature toggle.

## Positioning Decision: AI

Do NOT lead with "AI" in copy or headlines. The backlash is real and targets AI hype, not useful tools. Lead with outcomes and the user's problem. AI is an implementation detail, not a selling point.

- ✅ "Tools for people who don't have time for bad software"
- ✅ "I did the research so you don't have to"
- ❌ "AI-powered", "AI-first", "built with AI"
  Products use AI internally. The marketing never needs to say so.
