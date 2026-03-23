// Single source of truth for all site-wide metadata.
// /init fills this in from context.md + brand.md.
// Every other file imports from here — never hardcode site metadata elsewhere.
export const site = {
  name: 'idea-engine',
  shortName: 'idea-engine',
  url: 'https://modrynstudio.com/tools/idea-engine',
  // Base description — used in <meta description>, manifest, JSON-LD
  description:
    'Type an idea or frustration. Get a buildability score, reasoning, and three concrete tasks for this week. Free. The full brief is $9.',
  // Used as the <title> tag (homepage + fallback) AND social card title.
  // MUST be 50–60 chars — site.name alone is too short for SEO and will be
  // flagged by Bing/Google as a non-compliant title tag.
  // Pattern: '[Site Name] — [5–7 word tagline describing the tool]'
  ogTitle: 'idea-engine — Type the Idea. Get the Verdict.',
  ogDescription:
    'One input. Score, reasoning, and three things to do this week. Ready to build or kill. Full brief unlocked for $9.',
  cta: 'Run the discovery →',
  founder: 'Luke Hanner',
  email: 'hello@modrynstudio.com',
  // Waitlist section copy — shown in the EmailSignup component on the landing page.
  waitlist: {
    headline: 'Get notified when scoring criteria update.',
    subheadline:
      'The validation criteria evolve as more ideas run through the engine. Sign up to hear when the scoring model changes and what to re-run.',
    success:
      "You're in. You'll hear when the scoring model updates — and which ideas are worth re-running.",
  },
  // Brand colors — used in manifest theme_color / background_color
  accent: '#E8C547',
  bg: '#111110',
  // Social profiles — used in footer links and Twitter card metadata.
  social: {
    twitter: 'https://x.com/lukehanner',
    twitterHandle: '@lukehanner',
    github: 'https://github.com/modryn-studio/idea-engine',
    devto: 'https://dev.to/lukehanner',
    shipordie: 'https://shipordie.club/lukehanner',
  },
} as const;
