"use client";

// ── BRAND ARMS ────────────────────────────────────────────────────────────────
const BRANDS = [
  {
    name: "FindYourDock",
    url: "https://findyourdock.com",
    tagline: "Waterfront homes matched to your vessel.",
    description:
      "Tell us your boat's draft, beam, and bridge clearance — we show you every South Florida waterfront property where it can actually live. Filtered by vessel specs, not guesswork.",
    cta: "Find My Dock →",
    label: "Buyer Lead Funnel",
    external: true,
  },
  {
    name: "SaltwaterEstates",
    url: "https://saltwaterestates.com",
    tagline: "South Florida waterfront property search.",
    description:
      "IDX-powered waterfront property search for Palm Beach County and beyond. Nautical chart overlay, vessel-matched filters, and every active listing updated in real time.",
    cta: "Search Listings →",
    label: "IDX Search Portal",
    external: true,
  },
  {
    name: "Family Advisory",
    url: "https://saltwaterestates.com/onboarding/buyer",
    tagline: "One relationship. Every property decision.",
    description:
      "We serve a select number of South Florida families across the full spectrum of their real estate life — waterfront acquisition, investment strategy, Florida domicile planning, construction, and legacy coordination.",
    cta: "Request a Conversation →",
    label: "UHNW Advisory",
    external: true,
  },
  {
    name: "QuickDisposition",
    url: "https://quickdisposition.com",
    tagline: "Distressed assets. Fast, fair, certain.",
    description:
      "We acquire distressed residential and commercial properties across South Florida — off-market, as-is, cash close. If you need to sell quickly and cleanly, we are your buyer.",
    cta: "Get an Offer →",
    label: "Distressed Acquisitions",
    external: true,
  },
  {
    name: "Hoadley Construction",
    url: "https://hoadleyconstruction.com",
    tagline: "From permit to completion — one team.",
    description:
      "Residential and commercial construction, renovation, and repositioning across Palm Beach County. We manage the build from permit acquisition to final walk-through — coordinated with every real estate decision.",
    cta: "Start a Project →",
    label: "Construction & Renovation",
    external: true,
  },
  {
    name: "Sterling Route",
    url: "https://sterlingroute.com",
    tagline: "Luxury Sprinter van service. Your crew, your route.",
    description:
      "A custom Mercedes-Benz Sprinter Daycruiser for property tours, client entertainment, golf weekends, and family travel. 10 seats, private suite, white-glove pickup from West Palm Beach. Circle members receive preferred rates.",
    cta: "Book a Van →",
    label: "Luxury Transportation",
    external: true,
  },
  {
    name: "Hoadley Stays",
    url: "https://lakesidelandingflx.com",
    tagline: "Short-term rental properties. Boutique hospitality.",
    description:
      "Our own portfolio of vacation properties — Lakeside Landing and Smooth Sailing on Seneca Lake, Finger Lakes NY. Direct booking, concierge-level guest experience, and case studies for our STR advisory practice.",
    cta: "View Properties →",
    label: "Hospitality Portfolio",
    external: true,
  },
];

// ── CREDENTIALS ───────────────────────────────────────────────────────────────
const CREDENTIALS = [
  { label: "License", value: "FL BK3222885" },
  { label: "Brokerage", value: "Barefoot Realty & Investments" },
  { label: "Market", value: "Palm Beach County · South Florida" },
  { label: "Focus", value: "Waterfront · Commercial · Distressed" },
];

// ── COMPONENT ─────────────────────────────────────────────────────────────────
export default function HoadleyGroupHome() {
  return (
    <div style={{ backgroundColor: "#06101a", color: "#f0e6d0", minHeight: "100vh" }}>

      {/* ── SKIP NAV ────────────────────────────────────────────────────── */}
      <a
        href="#platforms"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:text-sm"
        style={{ background: "#c9a96e", color: "#06101a" }}
      >
        Skip to platforms
      </a>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-32 sm:py-44 overflow-hidden">

        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,169,110,0.06) 0%, transparent 70%)"
        }} />

        {/* Diamond mark */}
        <div className="relative z-10 mb-10">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect x="16" y="1" width="21" height="21" transform="rotate(45 16 16)"
              stroke="#c9a96e" strokeWidth="1" fill="none" opacity="0.6"/>
            <rect x="16" y="6" width="14" height="14" transform="rotate(45 16 16)"
              stroke="#c9a96e" strokeWidth="0.5" fill="none" opacity="0.3"/>
          </svg>
        </div>

        <p className="relative z-10 font-mono text-xs tracking-[0.35em] uppercase mb-6"
          style={{ color: "rgba(201,169,110,0.55)" }}>
          Barefoot Realty &amp; Investments
        </p>

        <h1 className="relative z-10 font-serif leading-none mb-5"
          style={{ fontSize: "clamp(48px, 8vw, 100px)", fontWeight: 300, color: "#f0e6d0" }}>
          The Hoadley Group
        </h1>

        <div className="relative z-10 mb-8" style={{
          width: "80px", height: "1px",
          background: "linear-gradient(90deg, transparent, #c9a96e, transparent)"
        }} />

        <p className="relative z-10 font-serif leading-relaxed"
          style={{
            fontSize: "clamp(16px, 2.5vw, 22px)",
            fontWeight: 300,
            color: "rgba(240,230,208,0.55)",
            maxWidth: "600px",
          }}>
          A South Florida real estate platform built for waterfront buyers,
          serious investors, and families who expect more from their advisor.
        </p>

        {/* Scroll */}
        <p className="absolute bottom-8 font-mono text-xs tracking-widest uppercase animate-pulse"
          style={{ color: "rgba(240,230,208,0.12)" }}>
          scroll
        </p>
      </section>

      {/* ── CREDENTIALS BAR ─────────────────────────────────────────────── */}
      <div
        className="px-6 sm:px-12 py-6"
        style={{
          borderTop: "1px solid rgba(201,169,110,0.1)",
          borderBottom: "1px solid rgba(201,169,110,0.1)",
          background: "rgba(201,169,110,0.03)"
        }}
      >
        <div className="max-w-5xl mx-auto flex flex-wrap gap-8 justify-center sm:justify-start">
          {CREDENTIALS.map((c) => (
            <div key={c.label}>
              <p className="font-mono text-xs tracking-[0.2em] uppercase mb-0.5"
                style={{ color: "rgba(201,169,110,0.45)", fontSize: "9px" }}>
                {c.label}
              </p>
              <p className="font-sans text-sm" style={{ color: "rgba(240,230,208,0.6)" }}>
                {c.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── PLATFORMS ───────────────────────────────────────────────────── */}
      <section id="platforms" className="px-6 sm:px-12 py-20 sm:py-28">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "rgba(201,169,110,0.5)" }}>
            Our Platforms
          </p>
          <h2 className="font-serif mb-14"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, color: "#f0e6d0" }}>
            Seven platforms. One advisor.
          </h2>

          <div className="flex flex-col gap-px"
            style={{ border: "1px solid rgba(201,169,110,0.1)", background: "rgba(201,169,110,0.1)" }}>
            {BRANDS.map((brand, i) => (
              <div
                key={brand.name}
                className="flex flex-col sm:flex-row gap-6 sm:gap-10 p-8 sm:p-10 group transition-colors"
                style={{
                  background: "#06101a",
                  cursor: "default",
                }}
              >
                {/* Number */}
                <div className="flex-shrink-0 w-8">
                  <p className="font-mono"
                    style={{ fontSize: "11px", color: "rgba(201,169,110,0.25)", letterSpacing: "0.2em" }}>
                    {String(i + 1).padStart(2, "0")}
                  </p>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <h3 className="font-serif"
                      style={{ fontSize: "24px", fontWeight: 300, color: "#f0e6d0" }}>
                      {brand.name}
                    </h3>
                    <span className="font-mono text-xs px-2 py-0.5"
                      style={{
                        border: "1px solid rgba(201,169,110,0.2)",
                        color: "rgba(201,169,110,0.5)",
                        letterSpacing: "0.15em",
                        fontSize: "9px",
                      }}>
                      {brand.label}
                    </span>
                  </div>
                  <p className="font-serif mb-3"
                    style={{ fontSize: "16px", fontStyle: "italic", color: "#c9a96e", fontWeight: 300 }}>
                    {brand.tagline}
                  </p>
                  <p className="text-sm leading-relaxed"
                    style={{ color: "rgba(240,230,208,0.45)", maxWidth: "560px" }}>
                    {brand.description}
                  </p>
                </div>

                {/* CTA */}
                <div className="flex-shrink-0 flex items-start pt-1">
                  <a
                    href={brand.url}
                    target={brand.external ? "_blank" : undefined}
                    rel={brand.external ? "noopener noreferrer" : undefined}
                    className="font-mono text-xs tracking-widest uppercase px-5 py-3 transition-all hover:opacity-80 active:scale-95 whitespace-nowrap"
                    style={{
                      border: "1px solid rgba(201,169,110,0.3)",
                      color: "#c9a96e",
                    }}
                  >
                    {brand.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT BEN ───────────────────────────────────────────────────── */}
      <section
        className="px-6 sm:px-12 py-20 sm:py-28"
        style={{
          borderTop: "1px solid rgba(240,230,208,0.06)",
          background: "rgba(201,169,110,0.02)"
        }}
      >
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-xs tracking-[0.3em] uppercase mb-5"
            style={{ color: "rgba(201,169,110,0.5)" }}>
            Principal
          </p>
          <div style={{ width: "40px", height: "1px", background: "#c9a96e", opacity: 0.4, marginBottom: "24px" }} />
          <h2 className="font-serif mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, color: "#f0e6d0" }}>
            Benjamin Hoadley
          </h2>
          <p className="font-mono text-xs tracking-[0.2em] uppercase mb-8"
            style={{ color: "#c9a96e" }}>
            Licensed Real Estate Broker · FL #BK3222885
          </p>
          <p className="font-serif leading-relaxed mb-5"
            style={{ fontSize: "clamp(16px, 2vw, 20px)", fontWeight: 300, color: "rgba(240,230,208,0.55)" }}>
            Ben built The Hoadley Group to serve clients whose real estate needs don&apos;t fit a
            single category. A South Florida broker with deep roots in waterfront residential,
            income-producing commercial assets, and distressed property acquisition — he
            approaches every client relationship as a long-term advisory partnership.
          </p>
          <p className="font-serif leading-relaxed"
            style={{ fontSize: "clamp(16px, 2vw, 20px)", fontWeight: 300, color: "rgba(240,230,208,0.55)" }}>
            The Hoadley Group brings together five specialized platforms under one broker
            of record — so that every real estate decision you make is informed by the
            complete picture of your portfolio, your vessel, your family, and your goals.
          </p>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10">
            <a href="tel:+15616766659"
              className="font-mono text-xs tracking-wider transition-opacity hover:opacity-70"
              style={{ color: "rgba(201,169,110,0.65)" }}>
              (561) 676-6659
            </a>
            <span className="hidden sm:inline" style={{ color: "rgba(240,230,208,0.12)" }}>·</span>
            <a href="mailto:ben@thehoadleygroup.com"
              className="font-mono text-xs tracking-wider transition-opacity hover:opacity-70"
              style={{ color: "rgba(201,169,110,0.65)" }}>
              ben@thehoadleygroup.com
            </a>
            <span className="hidden sm:inline" style={{ color: "rgba(240,230,208,0.12)" }}>·</span>
            <a
              href="https://saltwaterestates.com/onboarding/buyer"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-widest uppercase px-5 py-3 transition-all hover:opacity-80"
              style={{
                background: "#c9a96e",
                color: "#06101a",
              }}
            >
              Work With Ben →
            </a>
          </div>
        </div>
      </section>

      {/* ── MARKET COVERAGE ─────────────────────────────────────────────── */}
      <section
        className="px-6 sm:px-12 py-16 sm:py-20"
        style={{ borderTop: "1px solid rgba(240,230,208,0.06)" }}
      >
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs tracking-[0.3em] uppercase mb-6"
            style={{ color: "rgba(201,169,110,0.5)" }}>
            Market Coverage · Palm Beach County
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "Palm Beach","Manalapan","Jupiter","Juno Beach","West Palm Beach",
              "Palm Beach Gardens","North Palm Beach","Gulf Stream","Highland Beach",
              "Delray Beach","Boca Raton","Wellington"
            ].map((m) => (
              <span key={m}
                className="font-mono text-xs px-3 py-1.5 tracking-wide"
                style={{
                  border: "1px solid rgba(240,230,208,0.08)",
                  color: "rgba(240,230,208,0.35)",
                }}>
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE CIRCLE ─��──────────────────────────────────────────────── */}
      <section
        className="px-6 sm:px-12 py-20 sm:py-28"
        style={{ borderTop: "1px solid rgba(201,169,110,0.15)", background: "rgba(201,169,110,0.04)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <circle cx="20" cy="20" r="18" stroke="#c9a96e" strokeWidth="1" fill="none" opacity="0.4"/>
              <circle cx="20" cy="20" r="12" stroke="#c9a96e" strokeWidth="0.5" fill="none" opacity="0.2"/>
              <circle cx="20" cy="20" r="3" fill="#c9a96e" opacity="0.6"/>
            </svg>
          </div>
          <p className="font-mono text-xs tracking-[0.35em] uppercase mb-4"
            style={{ color: "rgba(201,169,110,0.55)" }}>
            Client Program
          </p>
          <h2 className="font-serif mb-6"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 300, color: "#f0e6d0" }}>
            The Circle
          </h2>
          <p className="font-serif leading-relaxed mb-8"
            style={{ fontSize: "clamp(15px, 2vw, 18px)", fontWeight: 300, color: "rgba(240,230,208,0.5)", maxWidth: "520px", margin: "0 auto" }}>
            Signed Barefoot Realty clients unlock preferred rates and priority access
            across every Hoadley Group entity — Sterling Route transportation,
            Hoadley Construction projects, Hoadley Stays properties, and off-market
            acquisition opportunities.
          </p>
          <p className="font-mono text-xs tracking-[0.2em] uppercase"
            style={{ color: "rgba(201,169,110,0.35)" }}>
            One relationship. Every advantage.
          </p>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer
        className="px-6 py-12 text-center"
        style={{ borderTop: "1px solid rgba(240,230,208,0.06)" }}
        role="contentinfo"
      >
        {/* EHO */}
        <div className="flex justify-center mb-6" aria-label="Equal Housing Opportunity">
          <svg width="32" height="32" viewBox="0 0 36 36" fill="none"
            xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <path d="M18 5L4 16h3v13h8v-8h6v8h8V16h3L18 5z"
              stroke="rgba(240,230,208,0.2)" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
            <line x1="12" y1="24" x2="24" y2="24"
              stroke="rgba(240,230,208,0.2)" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="12" y1="27.5" x2="24" y2="27.5"
              stroke="rgba(240,230,208,0.2)" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <p className="font-serif text-sm mb-1" style={{ color: "rgba(240,230,208,0.35)" }}>
          Benjamin Hoadley · Licensed Real Estate Broker · FL #BK3222885
        </p>
        <p className="font-serif text-sm mb-4" style={{ color: "rgba(240,230,208,0.25)" }}>
          Barefoot Realty &amp; Investments · The Hoadley Group
        </p>
        <p className="font-mono text-xs mb-1" style={{ color: "rgba(240,230,208,0.12)" }}>
          Equal Housing Opportunity · All listings subject to availability and change.
        </p>
        <p className="font-mono text-xs" style={{ color: "rgba(240,230,208,0.08)" }}>
          © {new Date().getFullYear()} Barefoot Realty &amp; Investments · thehoadleygroup.com
        </p>
      </footer>
    </div>
  );
}
