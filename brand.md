# Brand

---

## Voice

How the product sounds in UI copy, headings, CTAs, and error messages.

- Delivers judgment, not enthusiasm. "Here's the score and why" beats "Discover your next big idea!" The tool already knows what to do — write like that's obvious.
- Precise over clever. The user is a builder — give them numbers, names, mechanisms, and a specific to-do. Skip the inspiration.
- Confident but not bossy. It tells you what to do next and why — it doesn't lecture you about validation theory.
- Never use: "powerful," "seamless," "supercharge," "game-changer," "revolutionary," "unlock your potential," "streamline your workflow," "next-level," "effortless," "insights"

---

## The User

A solo developer with three ideas open in tabs and no system for deciding which one is real. They're not stuck because they can't build — they're stuck because they can't decide. They don't want a report to interpret. They want a verdict and a to-do list.

---

## Visual Rules

- Color mode: Dark mode base, system toggle
- Fonts: DM Serif Display (`--font-display`) for score reveal, output headlines, hero + DM Mono (`--font-mono`) for input field, score number, next-action queue, labels — the serif signals weight and judgment; the mono signals machine output and precision
- Motion: Minimal. Streaming text reveal on agent output. Single staggered fade when score card loads. Nothing celebratory — the user wants signal, not spectacle.
- Avoid: No fake testimonials. No stock photos. No confetti or celebration states. No popups. No loading spinners longer than 1 second without streaming output already visible.

---

## Color System

| Name       | Hex     | Role                                                                                                                         |
| ---------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Accent     | #E8C547 | Primary — score badge, CTAs, next-action queue labels, key output moments. Warm amber: decisiveness, signal, forward motion. |
| Secondary  | #4ECBA0 | Supporting — high-score confirmation states, "brief ready" indicator                                                         |
| Background | #111110 | Page background — near-black with a warm undertone, not cold or clinical                                                     |
| Text       | #E8E6DF | Body text — warm off-white. Never pure white.                                                                                |
| Muted      | #5A5955 | Secondary text, input placeholders                                                                                           |
| Surface    | #1C1C1A | Elevated surfaces — cards, input containers, PayGate panel                                                                   |
| Border     | #2A2A26 | Dividers, input outlines, section separators                                                                                 |

Color rules:

- WorthBuild and IdeaProof both use light-mode, report-style layouts. Dark background is an immediate visual differentiator.
- Notion owns neutral purple-gray. Linear owns blue. Avoid both entirely.
- No cool grays. No pure white. No neon. No gradients of any kind.
- Amber is the signal color — use it only on the score, the primary CTA, and the next-action queue headers. Overuse kills it.

---

## Logomark

Direction: Abstract mark — a single downward-pointing chevron or arrow, implying "next decision" and forward motion. Echoes the same mark logic as the next-task tool — same studio, scalable system.

Primary color: Accent #E8C547

Background: Transparent — no container

Future-proofing: The mark must not be tied to "ideas" specifically. A chevron works whether the product expands to validating blog topics, hiring decisions, or build-vs-buy calls.

Competitor exclusions: Notion owns the stacked-block icon. Linear owns the circle-arc. WorthBuild and IdeaProof use generic report/document iconography. Avoid: stacked shapes, circles with motion arcs, lightbulb icons, document icons, gradient wordmarks.

Anti-patterns: No lightbulbs, no gears, no checkmarks, no chat bubbles, no brain icons, no "spark" iconography, no magnifying glasses

---

## Emotional Arc

- Land: "Someone finally automated the part I hate."
- Read: "This is exactly where I get stuck."
- Scroll: "Wait — it tells me what to do this week?"
- Convert: "Just take my $9."

---

## Copy Examples

- Hero: "Type the idea. Get the verdict."
- Sub-headline: "One input. Score, reasoning, and three things to do this week. Ready to build or kill."
- CTA: "Run the discovery →"
- Score reveal header: "Here's the read."
- Next-action queue header: "What to do this week."
- Next-action queue example format: "1. Post in r/indiehackers with this framing: [exact copy]. 2. Check Todoist and TickTick reviews on G2 — look for the top complaint. 3. Wire the Stripe Payment Link before building anything else."
- PayGate header: "Your build brief is ready."
- PayGate sub: "Get the full brief for $9 — one time, no subscription. Shareable one-pager with market positioning, brand direction, and route plan. Includes context.md + brand.md if you're on the Modryn boilerplate."
- Email capture: "Get notified when scoring criteria update."
- Error: "Something broke mid-run. Your input is still here — try again."
- Low score state: "This one scores a 3. Here's why — and the one thing that would change it."
- Empty state: "Describe a frustration, a gap you keep noticing, or an idea you can't stop thinking about."
