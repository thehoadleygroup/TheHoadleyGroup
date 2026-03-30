"use client";

import Link from "next/link";

// ── DESIGN TOKENS ─────────────────────────────────────────────────────────────
const NAVY = "#06101a";
const CREAM = "#f0e6d0";
const GOLD = "#c9a96e";
const CREAM_BG = "#f5ede0";
const GOLD_DIM = "rgba(201,169,110,0.5)";
const GOLD_SUBTLE = "rgba(201,169,110,0.1)";
const CREAM_DIM = "rgba(240,230,208,0.6)";
const CREAM_FAINT = "rgba(240,230,208,0.45)";

// ── PROPERTY TYPES ─────────────────────────────────────────────────────────────
const PROPERTY_TYPES = [
  {
    title: "Waterfront Residential",
    note: "Single-family, estate, and deepwater dock properties in Palm Beach County and beyond.",
  },
  {
    title: "Commercial NNN",
    note: "Net-leased retail, medical, and industrial assets with stable, predictable cash flow.",
  },
  {
    title: "Multifamily",
    note: "Small portfolios to mid-size apartment buildings — acquisition, repositioning, and hold strategy.",
  },
  {
    title: "Mixed-Use",
    note: "Ground-floor retail with residential or commercial above — South Florida's most resilient asset class.",
  },
  {
    title: "Vacant Land / Development",
    note: "Entitled and unentitled parcels for development, hold, or assignment.",
  },
  {
    title: "DST / Fractional",
    note: "Delaware Statutory Trust interests for clients who need additional time or prefer portfolio diversification.",
  },
];

// ── EXCHANGE STEPS ─────────────────────────────────────────────────────────────
const STEPS = [
  { num: "01", title: "Close Relinquished Property", sub: "Day 0" },
  { num: "02", title: "QI Holds Proceeds", sub: "Day 0" },
  { num: "03", title: "Identify Replacement Property", sub: "Day 1 – 45" },
  { num: "04", title: "Close Replacement Property", sub: "Day 46 – 180" },
];

// ── WHERE WE COME IN ───────────────────────────────────────────────────────────
const ROLES = [
  {
    title: "Replacement Property Identification",
    body: "We know the South Florida inventory deeply — what's listed, what's not, and what's about to move. When your 45-day clock starts, we move immediately. Off-market relationships, active acquisition pipeline, waterfront estates, and commercial assets ready for assignment.",
  },
  {
    title: "Team Coordination",
    body: "We work directly with your Qualified Intermediary, CPA, and title attorney to keep the exchange on rails. The timelines are IRS-enforced. The deadlines don't move — and neither do we. We've structured these transactions before and know exactly where the friction points are.",
  },
  {
    title: "Deed & Title Guidance",
    body: "Chain of title requirements, arms-length transaction compliance, and ownership structure considerations — we coordinate with your CPA on deed preparation and entity planning well before the close. Getting the title right the first time is non-negotiable.",
  },
];

// ── EXCHANGE TEAM ──────────────────────────────────────────────────────────────
const TEAM_MEMBERS = [
  {
    role: "Qualified Intermediary (QI)",
    description:
      "Holds the proceeds between your relinquished and replacement property transactions — required by the IRS. You cannot touch the funds. We refer trusted, nationally recognized QI partners with South Florida experience.",
  },
  {
    role: "CPA / Tax Advisor",
    description:
      "Structures the ownership entity, calculates the adjusted basis, and advises on depreciation recapture. We work with your existing CPA or refer ours. This conversation should happen before you list the relinquished property.",
  },
  {
    role: "Real Estate Counsel",
    description:
      "Handles title search, deed preparation, chain of title review, and arms-length compliance for both transactions. We coordinate with your attorney directly — or refer trusted Florida title partners if you need one.",
  },
  {
    role: "The Hoadley Group",
    description:
      "We identify, underwrite, and close the replacement property. We are the acquisition engine — the team member who moves fastest when the clock is ticking and knows where the inventory is before it reaches the open market.",
    highlight: true,
  },
];

// ── COMPONENT ─────────────────────────────────────────────────────────────────
export default function Exchange1031Page() {
  return (
    <div style={{ backgroundColor: NAVY, color: CREAM, minHeight: "100vh", fontFamily: "var(--font-sans), Arial, sans-serif" }}>

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", padding: "120px 24px 100px", textAlign: "center", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 70% 55% at 50% 35%, rgba(201,169,110,0.07) 0%, transparent 70%)",
        }} />

        {/* Diamond */}
        <div style={{ position: "relative", zIndex: 1, marginBottom: "32px", display: "flex", justifyContent: "center" }}>
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect x="16" y="1" width="21" height="21" transform="rotate(45 16 16)" stroke={GOLD} strokeWidth="1" fill="none" opacity="0.6" />
            <rect x="16" y="6" width="14" height="14" transform="rotate(45 16 16)" stroke={GOLD} strokeWidth="0.5" fill="none" opacity="0.3" />
          </svg>
        </div>

        <p style={{
          position: "relative", zIndex: 1,
          fontFamily: "monospace", fontSize: "10px", letterSpacing: "0.35em",
          textTransform: "uppercase", color: GOLD_DIM, marginBottom: "24px",
        }}>
          Investment Services
        </p>

        <h1 style={{
          position: "relative", zIndex: 1,
          fontFamily: "var(--font-serif), Georgia, serif",
          fontSize: "clamp(38px, 6vw, 76px)", fontWeight: 300,
          color: CREAM, lineHeight: 1.05, marginBottom: "28px",
          maxWidth: "820px", marginLeft: "auto", marginRight: "auto",
        }}>
          The 1031 Exchange.<br />Executed Without Interruption.
        </h1>

        {/* Gold rule */}
        <div style={{
          position: "relative", zIndex: 1,
          width: "60px", height: "1px", margin: "0 auto 28px",
          background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
        }} />

        <p style={{
          position: "relative", zIndex: 1,
          fontFamily: "var(--font-serif), Georgia, serif",
          fontSize: "clamp(16px, 2.2vw, 20px)", fontWeight: 300,
          color: CREAM_FAINT, maxWidth: "540px",
          marginLeft: "auto", marginRight: "auto", marginBottom: "48px",
          lineHeight: 1.65,
        }}>
          Preserve equity. Defer capital gains. Scale the portfolio — without stopping to pay the tax bill first.
        </p>

        <div style={{ position: "relative", zIndex: 1, display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="mailto:invest@thehoadleygroup.com"
            style={{
              display: "inline-block",
              padding: "14px 32px",
              background: GOLD, color: NAVY,
              fontFamily: "monospace", fontSize: "11px",
              letterSpacing: "0.2em", textTransform: "uppercase",
              textDecoration: "none", fontWeight: 600,
            }}
          >
            Start a Conversation →
          </a>
          <Link
            href="/search"
            style={{
              display: "inline-block",
              padding: "14px 32px",
              border: `1px solid ${GOLD}`, color: GOLD,
              fontFamily: "monospace", fontSize: "11px",
              letterSpacing: "0.2em", textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Search Replacement Properties →
          </Link>
        </div>
      </section>

      {/* ── WHAT IS A 1031 EXCHANGE ────────────────────────────────────────── */}
      <section style={{ backgroundColor: CREAM_BG, color: NAVY, padding: "96px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "monospace", fontSize: "10px", letterSpacing: "0.3em",
            textTransform: "uppercase", color: "rgba(6,16,26,0.4)", marginBottom: "16px",
          }}>
            The Basics
          </p>
          <h2 style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 300,
            color: NAVY, marginBottom: "28px", lineHeight: 1.15,
          }}>
            What Is a 1031 Exchange?
          </h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "rgba(6,16,26,0.75)", marginBottom: "20px" }}>
            A 1031 exchange — named for Section 1031 of the Internal Revenue Code — allows a real estate investor to defer capital gains tax on the sale of an investment property, provided the proceeds are reinvested into a like-kind replacement property following strict IRS timelines.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "rgba(6,16,26,0.75)", marginBottom: "48px" }}>
            The result: instead of paying 15–20% (or more, with depreciation recapture) in capital gains tax at closing, that capital stays working in your portfolio. At scale, this is one of the most powerful wealth preservation tools in real estate.
          </p>

          {/* Timeline */}
          <div style={{ position: "relative", marginBottom: "40px" }}>
            {/* Connecting line */}
            <div style={{
              position: "absolute", top: "28px", left: "24px", right: "24px", height: "1px",
              background: `linear-gradient(90deg, transparent, rgba(201,169,110,0.35), rgba(201,169,110,0.35), transparent)`,
            }} />
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "0",
            }}>
              {STEPS.map((step) => (
                <div key={step.num} style={{ textAlign: "center", padding: "0 12px" }}>
                  <div style={{
                    width: "56px", height: "56px",
                    border: `1px solid ${GOLD}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 16px",
                    backgroundColor: CREAM_BG,
                    position: "relative", zIndex: 1,
                  }}>
                    <span style={{
                      fontFamily: "monospace", fontSize: "12px",
                      color: GOLD, letterSpacing: "0.1em",
                    }}>
                      {step.num}
                    </span>
                  </div>
                  <p style={{
                    fontFamily: "var(--font-serif), Georgia, serif",
                    fontSize: "14px", fontWeight: 400, color: NAVY,
                    marginBottom: "4px", lineHeight: 1.3,
                  }}>
                    {step.title}
                  </p>
                  <p style={{
                    fontFamily: "monospace", fontSize: "10px",
                    color: GOLD, letterSpacing: "0.1em",
                  }}>
                    {step.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p style={{
            fontFamily: "monospace", fontSize: "10px",
            color: "rgba(6,16,26,0.4)", letterSpacing: "0.05em",
            borderTop: "1px solid rgba(6,16,26,0.1)", paddingTop: "20px",
          }}>
            This is educational content. Consult your tax advisor and qualified intermediary before proceeding.
          </p>
        </div>
      </section>

      {/* ── WHERE WE COME IN ───────────────────────────────────────────────── */}
      <section style={{ backgroundColor: NAVY, padding: "96px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "monospace", fontSize: "10px", letterSpacing: "0.3em",
            textTransform: "uppercase", color: GOLD_DIM, marginBottom: "16px",
          }}>
            Our Role
          </p>
          <h2 style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 300,
            color: CREAM, marginBottom: "56px", lineHeight: 1.15,
          }}>
            Where We Come In
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1px", background: GOLD_SUBTLE }}>
            {ROLES.map((role) => (
              <div key={role.title} style={{ backgroundColor: NAVY, padding: "40px 36px" }}>
                <div style={{ width: "32px", height: "1px", background: GOLD, marginBottom: "24px" }} />
                <h3 style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: "20px", fontWeight: 400,
                  color: CREAM, marginBottom: "16px", lineHeight: 1.25,
                }}>
                  {role.title}
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.8, color: CREAM_DIM }}>
                  {role.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── YOUR EXCHANGE TEAM ─────────────────────────────────────────────── */}
      <section style={{ backgroundColor: CREAM_BG, color: NAVY, padding: "96px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "monospace", fontSize: "10px", letterSpacing: "0.3em",
            textTransform: "uppercase", color: "rgba(6,16,26,0.4)", marginBottom: "16px",
          }}>
            The Full Team
          </p>
          <h2 style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 300,
            color: NAVY, marginBottom: "16px", lineHeight: 1.15,
          }}>
            Your Exchange Team
          </h2>
          <p style={{ fontSize: "16px", lineHeight: 1.75, color: "rgba(6,16,26,0.65)", marginBottom: "52px", maxWidth: "640px" }}>
            A successful 1031 exchange requires four players working in sync. We know our role — and we know how to get the others in position.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.role}
                style={{
                  padding: "36px 32px",
                  border: member.highlight ? `1px solid ${GOLD}` : "1px solid rgba(6,16,26,0.12)",
                  backgroundColor: member.highlight ? "rgba(201,169,110,0.04)" : "transparent",
                  position: "relative",
                }}
              >
                {member.highlight && (
                  <div style={{
                    position: "absolute", top: "-1px", left: "32px", right: "32px",
                    height: "2px", background: GOLD,
                  }} />
                )}
                <p style={{
                  fontFamily: "monospace", fontSize: "9px", letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: member.highlight ? GOLD : "rgba(6,16,26,0.4)",
                  marginBottom: "12px",
                }}>
                  {member.highlight ? "Our Role" : "Referred / Coordinated"}
                </p>
                <h3 style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: "18px", fontWeight: 400,
                  color: member.highlight ? "#06101a" : NAVY,
                  marginBottom: "14px", lineHeight: 1.25,
                }}>
                  {member.role}
                </h3>
                <p style={{ fontSize: "13px", lineHeight: 1.75, color: "rgba(6,16,26,0.65)" }}>
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROPERTY TYPES ─────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: NAVY, padding: "96px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "monospace", fontSize: "10px", letterSpacing: "0.3em",
            textTransform: "uppercase", color: GOLD_DIM, marginBottom: "16px",
          }}>
            Replacement Property
          </p>
          <h2 style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 300,
            color: CREAM, marginBottom: "52px", lineHeight: 1.15,
          }}>
            Property Types We Work With
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1px", background: GOLD_SUBTLE }}>
            {PROPERTY_TYPES.map((pt) => (
              <div key={pt.title} style={{ backgroundColor: NAVY, padding: "36px 32px" }}>
                <h3 style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: "18px", fontWeight: 400,
                  color: CREAM, marginBottom: "12px",
                }}>
                  {pt.title}
                </h3>
                <p style={{ fontSize: "13px", lineHeight: 1.75, color: CREAM_DIM }}>
                  {pt.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INQUIRY CTA ────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: GOLD, color: NAVY, padding: "96px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "clamp(28px, 4.5vw, 48px)", fontWeight: 300,
            color: NAVY, lineHeight: 1.1, marginBottom: "20px",
          }}>
            Your 45 Days Start the Moment You Close.
          </h2>
          <p style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "clamp(15px, 2vw, 18px)", fontWeight: 300,
            color: "rgba(6,16,26,0.7)", marginBottom: "40px", lineHeight: 1.7,
          }}>
            When you're ready to exchange — or still deciding whether to sell — call us first. We need to be in position before the clock starts, not after.
          </p>
          <a
            href="mailto:invest@thehoadleygroup.com"
            style={{
              display: "inline-block",
              padding: "16px 40px",
              backgroundColor: NAVY, color: GOLD,
              fontFamily: "monospace", fontSize: "11px",
              letterSpacing: "0.2em", textTransform: "uppercase",
              textDecoration: "none", fontWeight: 600,
            }}
          >
            invest@thehoadleygroup.com →
          </a>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer style={{
        backgroundColor: NAVY,
        borderTop: "1px solid rgba(201,169,110,0.08)",
        padding: "40px 24px",
        textAlign: "center",
      }}>
        <p style={{
          fontFamily: "monospace", fontSize: "10px",
          letterSpacing: "0.08em", color: "rgba(240,230,208,0.25)",
          marginBottom: "16px", lineHeight: 1.8,
        }}>
          Barefoot Realty &amp; Investments LLC · FL BK3222885 · This page is for informational purposes only and does not constitute legal or tax advice.
        </p>
        <Link
          href="/"
          style={{
            fontFamily: "monospace", fontSize: "10px",
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: GOLD_DIM, textDecoration: "none",
          }}
        >
          ← The Hoadley Group
        </Link>
      </footer>
    </div>
  );
}
