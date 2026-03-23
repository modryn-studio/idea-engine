import EmailSignup from '@/components/email-signup';

export default function Home() {
  return (
    <main className="bg-bg text-text min-h-screen">
      {/* Hero */}
      <section className="mx-auto max-w-2xl px-6 pt-24 pb-16">
        <p className="text-muted mb-6 font-mono text-xs tracking-widest uppercase">
          Product discovery engine
        </p>
        <h1 className="font-heading mb-6 text-5xl leading-tight">
          Type the idea. <span className="text-accent">Get the verdict.</span>
        </h1>
        <p className="text-muted mb-10 text-lg leading-relaxed">
          One input. Score, reasoning, and three things to do this week. Ready to build or kill.
        </p>
        <a
          href="/discover"
          className="bg-accent text-bg inline-block px-6 py-3 font-mono text-sm transition-opacity hover:opacity-90"
        >
          Run the discovery &rarr;
        </a>
      </section>

      {/* Proof — example output */}
      <section className="mx-auto max-w-2xl px-6 pb-16">
        <div className="border-border bg-surface border p-6">
          <p className="text-muted mb-4 font-mono text-xs tracking-widest uppercase">
            Example output — next-task
          </p>
          <div className="mb-4 flex items-baseline gap-3">
            <span className="font-heading text-accent text-5xl">8</span>
            <span className="text-muted font-mono text-sm">/10 buildability score</span>
          </div>
          <p className="text-muted mb-6 text-sm leading-relaxed">
            Strong pain signal in r/indiehackers. No dominant tool in the solo-dev task
            prioritization space. Build time under 48 hours with the boilerplate. The distribution
            story writes itself.
          </p>
          <p className="text-accent mb-3 font-mono text-xs tracking-widest uppercase">
            What to do this week
          </p>
          <ol className="text-muted space-y-2 font-mono text-sm">
            <li>
              1. Post in r/indiehackers: “I built a task prioritizer that only shows you what to do
              today. No backlog.”
            </li>
            <li>2. Check Todoist and TickTick reviews on G2 — look for the top complaint.</li>
            <li>3. Wire the Stripe Payment Link before building anything else.</li>
          </ol>
        </div>
      </section>

      {/* Email capture */}
      <section className="mx-auto max-w-2xl px-6 pb-24">
        <EmailSignup />
      </section>
    </main>
  );
}
