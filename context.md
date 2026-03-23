# Project Context

## Core Framework

Market: Solo developers and indie builders who have ideas competing for their attention and no system for deciding which one is worth building — before writing a line of code.

Reference product (what people pay for): WorthBuild ($5/report), IdeaProof (€19.99–€99.99 credit packs), ValidateMySaaS ($19–$29/month, competitor landscape reports), and ProductGapHunt (free tier with sign-in, paid tier) — all confirmed active with paying users in 2026. Top complaint across all four: "I get a report, but I still don't know what to actually do next." Every competitor hands you an analysis: competitor features, pricing, market gaps, revenue estimates. None of them hand you a this-week action list. ValidateMySaaS is pure competitor analysis. ProductGapHunt adds market gap and risk assessment but no execution path. IdeaProof becomes expensive quickly with credit packs. WorthBuild includes customer discovery leads but no action queue.

Your angle: Same job (validate the idea), but the output ends with a next-action queue, not a report to decode. Score, reasoning, and three concrete tasks for this week: which subreddit to post in with exact framing, which two competitors to check for top complaints, which piece of the money loop to wire first. Type what's on your mind, get back whether it's worth building and exactly what to do next.

---

## Product

A single-input product discovery engine: describe a frustration or idea in plain language, and the agent runs the full validation pipeline — market research, competition analysis, differentiation angle, buildability score 1–10, and a concrete next-action queue — then hands back a polished, shareable build brief ready to act on or hand off. The filled `context.md` + `brand.md` files are a bonus unlock for Modryn Studio boilerplate users.

## Target User

A solo developer with three ideas open in tabs and no system for deciding which one is real. They're not stuck because they can't build — they're stuck because they can't decide. They've tried filling out validation frameworks manually and abandoned them halfway. They want a verdict and a to-do list, not another framework to think through.

## Deployment

mode: modryn-app

modrynstudio.com has a verified **Domain property** in Google Search Console. All tools under that domain are covered automatically. Never walk through domain verification steps — just submit the tool sitemap to the existing property.

url: https://modrynstudio.com/tools/idea-engine
basePath: /tools/idea-engine

## Minimum Money Loop

Landing page (proof: next-task brief as live example output) → Single text input → Agent runs discovery pipeline → Free output: buildability score + reasoning + next-action queue → PayGate ($9 one-time) → Stripe Payment Link → localStorage receipt → Full polished build brief unlocked (shareable one-pager + context.md + brand.md for boilerplate users)

Rule: do not polish any one piece until this loop has run once with a real order.

Session note: localStorage must cache the last pipeline output. Closing the tab before paying is the primary drop point — wire this during the build, not after.

## Stack Additions

- Anthropic API (claude-sonnet-4-20250514) — the discovery and validation agent; handles scoring, reasoning, next-action queue, and brief generation in a single streaming pipeline call
- Resend — email capture ("get notified when scoring criteria update")
- Stripe Payment Links — one-time $9 payment, no server-side code needed at launch

## Pipeline Stages

1. Market Read — Reddit community size/activity, search signal, adjacent paid products
2. Competition Scan — Tier 1 (full-suite incumbents) + Tier 2 (indie/lightweight tools) → gap statement
3. Differentiation Angle — one named mechanism the tool owns that no competitor delivers
4. Buildability Score — 1–10 integer + three-sentence rationale
5. Brief Generation — shareable one-pager (market, user, angle, money loop, stack, subreddits) gated behind PayGate; context.md + brand.md as bonus for Modryn Studio boilerplate users

## Env Vars

- `ANTHROPIC_API_KEY` — Anthropic API for the discovery and validation pipeline
- `RESEND_API_KEY` — email capture
- `NEXT_PUBLIC_STRIPE_PAYMENT_LINK` — one-time $9 Stripe Payment Link URL

## Project Structure Additions

- `/content/tools/idea-engine.json` — tool entry for modryn-studio-v2 landing page
- `/lib/prompts/` — agent system prompts for each pipeline stage (score, reasoning, next-action queue, brief)

## Route Map

- `/` → Landing page: headline, live example output using next-task as proof, email capture, one CTA into the tool
- `/discover` → Main tool: single text input → streaming agent output → score + reasoning + next-action queue → PayGate for full build brief

## Monetization

one-time-payment — $9 sweet spot. Free tier: buildability score + reasoning + next-action queue. The verdict and the to-do list are free — they deliver real standalone value. PayGate: full polished build brief (shareable one-pager + context.md + brand.md for boilerplate users).

Free tier must be genuinely useful on its own. The brief is the unlock, not the only valuable output.

Fast path: Stripe Payment Link → `<PayGate>` component → localStorage receipt.

## Target Subreddits

- r/indiehackers (primary — "built the wrong thing" pain lives loudest here)
- r/Entrepreneur
- r/EntrepreneurRideAlong
- r/SideProject

## Launch Hook

Post in r/indiehackers before announcing the product: "I built this tool, ran next-task through it, and shipped next-task in 48 hours. Here's the brief it generated." The before/after is the distribution — no competitor can replicate it because it's tied to a working product that already shipped. This is the launch post, not a feature announcement.

## Social Profiles

- X/Twitter: https://x.com/lukehanner
- GitHub: https://github.com/modryn-studio/idea-engine
- Dev.to: https://dev.to/lukehanner
- Ship or Die: https://shipordie.club/lukehanner
