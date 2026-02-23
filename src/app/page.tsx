import { api } from "~/trpc/server";

// Badge icons as inline SVG components (no external icon deps needed)
function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="7" cy="7" r="7" fill="rgba(110,231,211,0.15)" />
      <path
        d="M4.5 7L6.2 8.7L9.5 5.3"
        stroke="#6ee7d3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="7" cy="7" r="7" fill="rgba(245,208,111,0.15)" />
      <path
        d="M7 4.5V7.5"
        stroke="#f5d06f"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="7" cy="9.5" r="0.75" fill="#f5d06f" />
    </svg>
  );
}

function TRPCBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-sc-border bg-white/5 px-3 py-1 text-xs text-sc-accent">
      <span
        className="h-1.5 w-1.5 rounded-full bg-sc-accent"
        aria-hidden="true"
      />
      Powered by tRPC
    </span>
  );
}

export default async function HomePage() {
  // Server-side tRPC call — data never touches the client in this path
  const { envs, fetchedAt } = await api.env.getPublic();

  return (
    <div className="bg-sc-gradient min-h-screen px-5 pb-16">
      <div className="mx-auto max-w-4xl animate-fade-in pt-9">
        {/* ── Header card ── */}
        <header
          className="rounded-sc border border-sc-border p-7 shadow-sc"
          style={{
            background:
              "linear-gradient(135deg, rgba(111,231,211,.16), rgba(127,183,255,.06)), #121c33",
          }}
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-sc-border bg-white/[.06] px-3 py-1.5 text-xs text-sc-muted">
              T3 Stack Demo &bull; Public envs only
            </span>
            <TRPCBadge />
          </div>

          <h1 className="mt-3 font-display text-3xl font-semibold leading-snug tracking-tight md:text-4xl">
            Server Compass{" "}
            <span className="text-sc-accent">Environment Variables</span>
          </h1>

          <p className="mt-2 max-w-2xl leading-relaxed text-sc-muted">
            This page surfaces the safe, public-facing environment variables
            your T3 stack app can share. Secrets stay server-side. Data is
            fetched via a{" "}
            <span className="text-sc-text">tRPC server-side caller</span> — no
            client round-trip required.
          </p>

          <div className="mt-4 flex flex-wrap gap-2.5">
            {[
              { label: "Next.js 15" },
              { label: "tRPC v11" },
              { label: "TypeScript" },
              { label: "Tailwind CSS 3" },
              { label: `JSON: /api/env` },
            ].map(({ label }) => (
              <span
                key={label}
                className="rounded-[10px] border border-sc-border bg-white/[.04] px-3 py-2 text-xs text-sc-muted"
              >
                {label}
              </span>
            ))}
          </div>
        </header>

        {/* ── Main content ── */}
        <main className="mt-7 grid gap-4">
          {/* Public env vars card */}
          <section className="rounded-sc border border-sc-border bg-sc-surface p-6 shadow-sc">
            <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-sc-border bg-white/[.06] px-3 py-1 text-xs text-sc-muted">
                  Public variables
                </span>
                <h2 className="mt-1.5 font-display text-xl font-semibold">
                  Visible to the browser
                </h2>
              </div>
              <span className="text-right text-xs text-sc-muted">
                Fetched via{" "}
                <code className="rounded bg-white/[.06] px-1.5 py-0.5 text-sc-text">
                  env.getPublic
                </code>{" "}
                tRPC procedure
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {envs.map(({ key, value, isSet }) => (
                <div
                  key={key}
                  className="rounded-sc-sm border border-sc-border bg-white/[.03] p-3.5"
                >
                  <div className="mb-1.5 flex items-center justify-between gap-2">
                    <span className="font-body text-xs font-medium uppercase tracking-wider text-sc-accent-2">
                      {key}
                    </span>
                    {isSet ? <CheckIcon /> : <WarningIcon />}
                  </div>
                  <p
                    className={`break-all text-base font-semibold ${isSet ? "text-sc-text" : "text-sc-warning"}`}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-3 text-right text-[11px] text-sc-muted/60">
              Fetched at {new Date(fetchedAt).toUTCString()}
            </p>
          </section>

          {/* Private vars card */}
          <section
            className="rounded-sc border border-sc-border p-6 shadow-sc"
            style={{ background: "#0f1729" }}
          >
            <div className="mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sc-border bg-white/[.06] px-3 py-1 text-xs text-sc-muted">
                Private variables
              </span>
              <h2 className="mt-1.5 font-display text-xl font-semibold">
                Kept on the server
              </h2>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-sc-muted">
              Database credentials and secret keys are loaded from the
              environment but are never included in the tRPC{" "}
              <code className="rounded bg-white/[.06] px-1.5 py-0.5 text-sc-text">
                env.getPublic
              </code>{" "}
              response and never sent to the browser.
            </p>
            <div className="flex flex-wrap gap-2">
              {["DATABASE_URL", "API_SECRET_KEY"].map((k) => (
                <span
                  key={k}
                  className="rounded-sc-pill border border-sc-border bg-white/[.04] px-3 py-2 text-sm text-sc-text"
                >
                  {k}
                </span>
              ))}
            </div>
          </section>

          {/* tRPC schema card */}
          <section className="rounded-sc border border-sc-border bg-sc-surface p-6 shadow-sc">
            <div className="mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sc-border bg-white/[.06] px-3 py-1 text-xs text-sc-muted">
                tRPC Procedures
              </span>
              <h2 className="mt-1.5 font-display text-xl font-semibold">
                Type-safe API
              </h2>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-sc-muted">
              All data fetching goes through tRPC procedures defined in the{" "}
              <code className="rounded bg-white/[.06] px-1.5 py-0.5 text-sc-text">
                env
              </code>{" "}
              router. The procedures are called server-side from this React
              Server Component via the tRPC caller, with zero client-side
              network requests needed for the initial render.
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                {
                  proc: "env.getPublic",
                  desc: "Returns all public env vars",
                  badge: "query",
                },
                {
                  proc: "env.getHealth",
                  desc: "Health check — returns status: ok",
                  badge: "query",
                },
                {
                  proc: "env.getOne",
                  desc: "Returns a single public env var by key",
                  badge: "query · input",
                },
              ].map(({ proc, desc, badge }) => (
                <div
                  key={proc}
                  className="rounded-[10px] border border-sc-border bg-white/[.03] p-3"
                >
                  <div className="mb-1 flex items-start justify-between gap-2">
                    <code className="text-xs text-sc-accent">{proc}</code>
                    <span className="shrink-0 rounded-full border border-sc-border bg-white/[.04] px-1.5 py-0.5 text-[10px] text-sc-muted">
                      {badge}
                    </span>
                  </div>
                  <p className="text-xs text-sc-muted">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Footer / Server Compass branding */}
          <footer className="mt-2 text-center text-xs text-sc-muted">
            Deployed with{" "}
            <a
              href="https://servercompass.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sc-accent-2 underline-offset-2 hover:underline"
            >
              Server Compass
            </a>{" "}
            &mdash; the modern way to self-host T3 stack applications on your
            own VPS.
          </footer>
        </main>
      </div>
    </div>
  );
}
