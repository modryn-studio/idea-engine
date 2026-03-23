# Roadmap — idea-engine
## From 7 to 10: The Staged Build Plan

_This is not a feature list. It's a sequence of product decisions, each one justified by data from the stage before it. Do not build stage N+1 until stage N has produced the signal that warrants it._

---

## Current State: The 7

**What exists after launch:**
- Single input → validation pipeline → score + reasoning + next-action queue (free)
- $9 PayGate → polished shareable build brief + context.md + brand.md
- No memory. No account. No return mechanism.
- One-time transaction. Every session is a cold re-acquisition.

**Why it's a 7 and not higher:**
- The output is genuinely useful — but only once per idea
- No compounding value. Session 2 is identical to session 1.
- The $9 model requires 556 new strangers/month to hit $5K. That's a treadmill, not a business.
- The next-action queue differentiates from every competitor — but competitors can copy it in a sprint

**What the 7 must prove before moving to stage 2:**
- [ ] 50 paying sessions ($450 gross) — proves cold traffic converts, not just warm
- [ ] 20%+ of paying users return within 30 days with a second idea — proves the behavior loop exists
- [ ] At least 3 unprompted shares or mentions in r/indiehackers — proves word-of-mouth potential
- [ ] Average score of input ideas: track distribution. If most ideas score 3–5, the free tier is doing its job (filtering). If most score 7+, users are self-selecting well.

_Do not build stage 2 until all four signals are green._

---

## Stage 2: The 8 — Memory + Subscription

**The single insight that unlocks this stage:**
The tool gets more valuable the more someone uses it. Right now it forgets everything. That's the ceiling. Memory earns the subscription.

**What changes:**

### Auth (minimal)
- Magic link only. No password. No OAuth complexity at launch.
- Auth exists solely to attach a persistent session history — not to gate features.
- Free tier stays free. Auth is optional until the user wants memory.

### Session memory
- Every run is stored: idea description, score, reasoning, next-action queue, outcome (did they build it? did it flop?)
- After session 3, the agent has context: "You've run 4 ideas. Three were developer tools, one was a consumer app. The developer tools scored higher and you seemed more certain about them."
- The agent uses this to calibrate future scores — not just generic validation, but pattern-matched to your builder profile.

### Outcome tracking (lightweight)
- After 30 days, a single-question follow-up: "Did you build this? If so, how did it go?"
- This data trains the scoring model over time. Your past outcomes become the scoring weight.
- This is the data flywheel — every user interaction makes the agent smarter for that user specifically.

### Monetization flip
- $9 one-time becomes the entry point, not the product
- $7/month subscription unlocks: full session history, pattern analysis, outcome tracking, and the "builder profile" score modifier
- $9 one-time buyers get a conversion email at day 7: "You've run one idea. Here's what your builder profile would look like after five."
- The one-time payment becomes a warm lead funnel for the subscription — not an endpoint

### New copy needed
- Subscription CTA: "The more you run, the sharper it gets."
- Builder profile card: "Based on 4 runs: you build best in developer tools, you underestimate distribution time, your last idea that shipped scored an 8."
- Outcome prompt: "Did you build it? One tap — yes, no, or still deciding."

**What stage 2 must prove before moving to stage 3:**
- [ ] 30%+ of one-time buyers convert to monthly within 60 days
- [ ] Subscribers run 3x more sessions than one-time buyers — proves memory is the hook, not just the pitch
- [ ] Churn under 15%/month — proves the recurring value is real
- [ ] At least one user explicitly attributes a build decision to their pattern history — qualitative signal, find it in support or DMs

---

## Stage 3: The 9 — Proactive Discovery

**The single insight that unlocks this stage:**
Right now the agent waits for you to bring an idea. The 9 flips that. The agent hunts for you.

**What changes:**

### Opportunity monitor
- The agent monitors a set of sources on a weekly cadence:
  - Top complaints in r/indiehackers, r/Entrepreneur, r/SaaS (via Reddit API)
  - 1-star and 2-star reviews of the tools in your competitive landscape (via scrape or review APIs)
  - "Is there a tool that does X?" threads — explicit unmet demand signals
- Every Monday morning, a digest lands in your email: "3 opportunities worth scoring this week."
- Each opportunity is pre-scored against your builder profile from stage 2 — not generic, personalized.

### Why this is a 9 and not the 10
The agent is still reacting to public signal — it doesn't yet know enough about *you specifically* to generate truly personalized opportunities. It knows your past scores and outcomes. It doesn't yet know your stack depth, your audience size, your available hours per week, or your distribution moat. That specificity is the 10.

### Weekly digest format
```
This week's top 3 opportunities — scored for you:

1. [Opportunity description] — Generic score: 7 | Your score: 9
   Why higher for you: next-task gives you a proof story, your boilerplate cuts build time.
   Top complaint source: 47 posts in r/indiehackers this month.
   → Run full discovery on this →

2. [Opportunity description] — Generic score: 6 | Your score: 6
   No significant modifier for your profile.
   → Run full discovery →

3. [Opportunity description] — Generic score: 8 | Your score: 5
   Why lower for you: requires mobile distribution. Your audience is web-first.
   → Skip or run anyway →
```

### Monetization
- Weekly digest is a subscription-only feature
- Positions the $7/month subscription as "your personal opportunity scout" — not just memory
- This is the retention mechanism that makes churn painful: unsubscribing means the scout goes quiet

### New copy needed
- Digest subject line: "3 opportunities scored for you this week."
- Digest header: "Here's what the internet complained about this week — and which ones are yours to build."
- Upgrade CTA from stage 2: "Stop waiting for ideas. Let the agent bring them to you."

**What stage 3 must prove before moving to stage 4:**
- [ ] Weekly digest open rate above 40% — proves the content is signal, not noise
- [ ] 25%+ of digest opportunities get clicked through to full discovery — proves the pre-scoring is trusted
- [ ] At least one shipped product that originated from a digest suggestion — the proof story for stage 4
- [ ] Subscriber LTV crosses $84 (12 months at $7) — proves the model sustains

---

## Stage 4: The 10 — Personalized Conviction Engine

**The single insight that unlocks this stage:**
Generic validation is commoditized. Every competitor can score an idea against market data. Nobody can score an idea against *your specific unfair advantages* — unless they know them. The 10 is the agent that knows you well enough to tell you not just "this idea scores a 7" but "this idea scores a 9 for you, and here's the exact sequence to ship it in your stack in 48 hours."

**What changes:**

### Builder profile — deep
Stage 2 built a thin profile from run history and outcomes. Stage 4 fills it deliberately:
- **Stack profile**: what you actually know how to build, how fast, at what quality level
- **Audience profile**: where you have distribution, how large, how warm (your r/indiehackers karma, X followers, email list size, Ship or Die presence)
- **Time profile**: hours/week available, build velocity from past projects
- **Distribution moat**: what proof stories you already own (next-task shipped in 48 hours is a permanent asset)
- **Pattern profile**: from stage 2 outcome data — what types of tools you finish vs. abandon, where you lose energy mid-build

This profile is built through a one-time onboarding conversation — not a form. The agent interviews you, extracts the profile, and stores it. Ten minutes, done once, referenced forever.

### Personalized scoring engine
Every idea now gets two scores side by side:
- **Generic score**: what this idea would score for any solo developer
- **Your score**: what this idea scores specifically for you, weighted by your profile

The delta between the two is the insight. A generic 6 that becomes a 9 for you is a stronger signal than a generic 8 that stays an 8 for you. The agent explains the delta in plain language.

### Build path generation
For ideas that score 7+ on your personal score, the agent generates a build path specific to your stack and boilerplate:
- Estimated build time based on your velocity
- Which parts of the boilerplate handle which pieces
- The exact money loop sequencing for your context
- The launch post draft for your highest-distribution channel

This is the output no competitor can replicate — because it requires knowing you, your stack, your audience, and your proof stories simultaneously.

### Pricing at the 10
- The $7/month subscription remains the base
- A one-time "Profile Setup" session ($29) covers the onboarding interview and profile build
- Or: profile setup is included free after 3 months of subscription — rewards loyalty, not impulse
- Long-term: the profile is the moat. Switching to a competitor means starting over from scratch.

### Why this is a 10
- The output is genuinely irreplaceable — no competitor has your data
- The value compounds with every session, every outcome, every week of digest usage
- Churn becomes painful: leaving means losing your builder profile, your history, your personalized scores
- The product earns its subscription every single week through the digest alone
- Distribution is owned: your audience built during stages 1–3 is the launch list for every new feature

---

## Stage Trigger Summary

| Move | Signal Required | Don't Build Without |
|---|---|---|
| 7 → 8 | 50 paid sessions + 20% return rate + 3 organic mentions | Real usage data proving the behavior loop |
| 8 → 9 | 30% one-time → subscription conversion + churn under 15% | Proof the subscription value is real |
| 9 → 10 | 40% digest open rate + 25% click-through + one shipped digest idea | Proof the scout is trusted, not just opened |

---

## What Never Changes

Regardless of stage:
- One input. Complexity behind the scenes. Always.
- The free tier must deliver real standalone value at every stage. The PayGate is an unlock, not a hostage situation.
- The next-action queue stays in the free tier — it's the differentiator, not the monetization mechanism.
- Dark mode. Amber accent. DM Serif + DM Mono. The visual language scales with the product.
- The boilerplate story (next-task shipped in 48 hours using this brief) is a permanent distribution asset. Reference it at every stage.

---

_Living document. Update signal thresholds after each stage based on what the data actually shows._
