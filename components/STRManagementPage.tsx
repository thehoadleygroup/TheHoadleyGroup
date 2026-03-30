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

// ── THE STANDARD ───────────────────────────────────────────────────────────────
const QUALIFICATIONS = [
  {
    criterion: "Location",
    description:
      "Waterfront, destination, or uniquely positioned. Seneca Lake. South Florida coast. Properties that guests plan a trip specifically to reach — not a stopover.",
  },
  {
    criterion: "Performance",
    description:
      "Demonstrated revenue history or strong comparable market data. We model the opportunity before we commit. If the numbers don't support it, we'll tell you.",
  },
  {
    criterion: "Condition",
    description:
      "Guest-ready or renovation-ready. We coordinate staging, photography, and onboarding from day one. If the property needs work — our construction team is in-house.",
  },
];

// ── SERVICES ──────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    title: "Dynamic Pricing & Revenue Management",
    description:
      "Daily rate optimization across seasons, events, and comp market shifts. We don't set a rate and leave it. Revenue management is an active, ongoing process.",
  },
  {
    title: "Professional Photography & Listing Optimization",
    description:
      "Architectural photography, floor plans, and listing copy written for conversion. A great property with weak photos is a revenue problem — we solve it before launch.",
  },
  {
    title: "Multi-Platform Distribution",
    description:
      "Airbnb, VRBO, direct booking site — all synchronized. We distribute widely and direct strategically, capturing guests at every point in the booking funnel.",
  },
  {
    title: "Guest Communication & Concierge",
    description:
      "Pre-arrival coordination, check-in guidance, and in-stay support handled professionally. Guest experience at this level is not an afterthought — it drives your reviews.",
  },
  {
    title: "Maintenance Coordination & Vendor Management",
    description:
      "Trusted vendor relationships across cleaning, landscaping, HVAC, pool, and emergency repair. Properties are inspected between every stay. Nothing slips through.",
  },
  {
    title: "Monthly Owner Reporting & Performance Analytics",
    description:
      "Clear monthly reporting: revenue, occupancy rate, ADR, platform breakdown, and forward-looking pace data. You always know exactly how your asset is performing.",
  },
];

// ── PORTFOLIO ─────────────────────────────────────────────────────────────────
const PORTFOLIO = [
  {
    name: "Lakeside Landing FLX",
    location: "Burdett, NY · Seneca Lake",
    sleeps: "Sleeps 12",
    url: "https://lakesidelandingflx.com",
  },
  {
    name: "Smooth Sailing FLX",
    location: "Burdett, NY · Seneca Lake",
    sleeps: "Sleeps 2",
    url: "https://lakesidelandingflx.com/smooth-sailing",
  },
];

// ── COMPONENT ─────────────────────────────────────────────────────────────────
export default function STRManagementPage() {
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
          Short-Term Rental Management
        </p>

        <h1 style={{
          position: "relative", zIndex: 1,
          fontFamily: "var(--font-serif), Georgia, serif",
          fontSize: "clamp(38px, 6vw, 76px)", fontWeight: 300,
          color: CREAM, lineHeight: 1.05, marginBottom: "28px",
          maxWidth: "820px", marginLeft: "auto", marginRight: "auto",
        }}>
          We Manage the Exceptional.<br />Nothing Less.
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
          color: CREAM_FAINT, maxWidth: "560px",
          marginLeft: "auto", marginRight: "auto", marginBottom: "48px",
          lineHeight: 1.65,
        }}>
          Elite destination properties only. Managed for maximum revenue, flawless guest experience, and long-term asset value.
        </p>

        <div style={{ position: "relative", zIndex: 1 }}>
          <a
            href="#inquiry"
            style={{
              display: "inline-block",
              padding: "14px 36px",
              background: GOLD, color: NAVY,
              fontFamily: "monospace", fontSize: "11px",
              letterSpacing: "0.2em", textTransform: "uppercase",
              textDecoration: "none", fontWeight: 600,
            }}
          >
            Submit Your Property →
          </a>
        </div>
      </section>

      {/* ── THE STANDARD ───────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: CREAM_BG, color: NAVY, padding: "96px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "monospace", fontSize: "10px", letterSpacing: "0.3em",
            textTransform: "uppercase", color: "rgba(6,16,26,0.4)", marginBottom: "16px",
          }}>
            Our Criteria
          </p>
          <h2 style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 300,
            color: NAVY, marginBottom: "20px", lineHeight: 1.15,
          }}>
            The Standard
          </h2>
          <p style={{
            fontSize: "16px", lineHeight: 1.8, color: "rgba(6,16,26,0.7)",
            maxWidth: "660px", marginBottom: "56px",
          }}>
            We are not a volume management company. We work with a deliberately small portfolio of elite destination properties — waterfront, architecturally significant, or destination-unique. Every property we take on receives the full weight of our attention.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1px", background: "rgba(6,16,26,0.08)" }}>
            {QUALIFICATIONS.map((q) => (
              <div key={q.criterion} style={{ backgroundColor: CREAM_BG, padding: "40px 32px" }}>
                <div style={{ width: "28px", height: "1px", background: GOLD, marginBottom: "20px" }} />
                <h3 style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: "20px", fontWeight: 400,
                  color: NAVY, marginBottom: "14px",
                }}>
                  {q.criterion}
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.8, color: "rgba(6,16,26,0.65)" }}>
                  {q.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ─────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: NAVY, padding: "96px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "monospace", fontSize: "10px", letterSpacing: "0.3em",
            textTransform: "uppercase", color: GOLD_DIM, marginBottom: "16px",
          }}>
            Management Services
          </p>
          <h2 style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 300,
            color: CREAM, marginBottom: "52px", lineHeight: 1.15,
          }}>
            What We Do
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1px", background: GOLD_SUBTLE }}>
            {SERVICES.map((svc) => (
              <div key={svc.title} style={{ backgroundColor: NAVY, padding: "40px 36px" }}>
                <div style={{ width: "28px", height: "1px", background: GOLD, marginBottom: "20px" }} />
                <h3 style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: "18px", fontWeight: 400,
                  color: CREAM, marginBottom: "14px", lineHeight: 1.3,
                }}>
                  {svc.title}
                </h3>
                <p style={{ fontSize: "13px", lineHeight: 1.8, color: CREAM_DIM }}>
                  {svc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIRECT BOOKING ADVANTAGE ───────────────────────────────────────── */}
      <section style={{ backgroundColor: CREAM_BG, color: NAVY, padding: "96px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "monospace", fontSize: "10px", letterSpacing: "0.3em",
            textTransform: "uppercase", color: "rgba(6,16,26,0.4)", marginBottom: "16px",
          }}>
            The Platform Strategy
          </p>
          <h2 style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 300,
            color: NAVY, marginBottom: "28px", lineHeight: 1.15,
          }}>
            The Direct Booking Advantage
          </h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "rgba(6,16,26,0.72)", marginBottom: "20px" }}>
            Airbnb and VRBO charge guests 12–16% service fees on top of your nightly rate. For a property earning $80,000 a year, that's real money your guests are paying to a platform — money that erodes your competitive position and your guests' willingness to rebook.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "rgba(6,16,26,0.72)", marginBottom: "20px" }}>
            Every property we manage gets its own direct booking presence — a dedicated booking site that captures returning guests and referrals before they ever reach a platform. We call it the hub-and-spoke model: platforms drive discovery, direct booking captures loyalty.
          </p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "rgba(6,16,26,0.72)", marginBottom: "36px" }}>
            Our own portfolio property on Seneca Lake — Lakeside Landing FLX — operates this model live. Direct bookings now represent a meaningful share of total revenue and grow each season.
          </p>

          <div style={{
            padding: "28px 32px",
            border: `1px solid ${GOLD}`,
            borderLeft: `3px solid ${GOLD}`,
            backgroundColor: "rgba(201,169,110,0.04)",
          }}>
            <p style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "18px", fontWeight: 300,
              color: NAVY, lineHeight: 1.65,
            }}>
              "We don't just put you on Airbnb. We build the asset's brand — so the next guest books directly, and the one after that pays no platform fee at all."
            </p>
          </div>
        </div>
      </section>

      {/* ── CURRENT PORTFOLIO ──────────────────────────────────────────────── */}
      <section style={{ backgroundColor: NAVY, padding: "96px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "monospace", fontSize: "10px", letterSpacing: "0.3em",
            textTransform: "uppercase", color: GOLD_DIM, marginBottom: "16px",
          }}>
            Current Portfolio
          </p>
          <h2 style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 300,
            color: CREAM, marginBottom: "52px", lineHeight: 1.15,
          }}>
            Properties Under Management
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginBottom: "48px" }}>
            {PORTFOLIO.map((prop) => (
              <div
                key={prop.name}
                style={{
                  border: `1px solid rgba(201,169,110,0.2)`,
                  padding: "40px 36px",
                  position: "relative",
                }}
              >
                <div style={{
                  position: "absolute", top: 0, left: "36px", right: "36px",
                  height: "1px", background: `linear-gradient(90deg, ${GOLD}, transparent)`,
                }} />
                <h3 style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: "22px", fontWeight: 300,
                  color: CREAM, marginBottom: "8px",
                }}>
                  {prop.name}
                </h3>
                <p style={{
                  fontFamily: "monospace", fontSize: "10px",
                  color: GOLD_DIM, letterSpacing: "0.12em",
                  textTransform: "uppercase", marginBottom: "6px",
                }}>
                  {prop.location}
                </p>
                <p style={{
                  fontFamily: "monospace", fontSize: "10px",
                  color: CREAM_DIM, letterSpacing: "0.08em",
                  marginBottom: "28px",
                }}>
                  {prop.sleeps}
                </p>
                <a
                  href={prop.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "monospace", fontSize: "10px",
                    letterSpacing: "0.2em", textTransform: "uppercase",
                    color: GOLD, textDecoration: "none",
                    borderBottom: `1px solid rgba(201,169,110,0.3)`,
                    paddingBottom: "2px",
                  }}
                >
                  View Property →
                </a>
              </div>
            ))}
          </div>

          <div style={{
            padding: "24px 32px",
            border: "1px solid rgba(201,169,110,0.12)",
            background: "rgba(201,169,110,0.03)",
          }}>
            <p style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "16px", fontWeight: 300,
              color: CREAM_DIM, lineHeight: 1.6, textAlign: "center",
            }}>
              Accepting applications for 2 additional properties in South Florida and Finger Lakes.
            </p>
          </div>
        </div>
      </section>

      {/* ── INQUIRY FORM ───────────────────────────────────────────────────── */}
      <section id="inquiry" style={{ backgroundColor: GOLD, color: NAVY, padding: "96px 24px" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "monospace", fontSize: "10px", letterSpacing: "0.3em",
            textTransform: "uppercase", color: "rgba(6,16,26,0.45)", marginBottom: "16px",
          }}>
            Property Application
          </p>
          <h2 style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 300,
            color: NAVY, marginBottom: "14px", lineHeight: 1.1,
          }}>
            Think Your Property Qualifies?
          </h2>
          <p style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "clamp(15px, 2vw, 18px)", fontWeight: 300,
            color: "rgba(6,16,26,0.65)", marginBottom: "48px", lineHeight: 1.7,
          }}>
            We review every submission. If it's a fit, you'll hear from us within 48 hours.
          </p>

          <form
            action="mailto:manage@thehoadleygroup.com"
            method="get"
            encType="text/plain"
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {/* Property Address */}
            <div>
              <label style={{
                display: "block", fontFamily: "monospace",
                fontSize: "9px", letterSpacing: "0.25em",
                textTransform: "uppercase", color: "rgba(6,16,26,0.55)",
                marginBottom: "8px",
              }}>
                Property Address
              </label>
              <input
                type="text"
                name="address"
                placeholder="123 Lakeshore Drive, Burdett NY"
                style={{
                  width: "100%", padding: "14px 16px",
                  backgroundColor: "rgba(6,16,26,0.06)",
                  border: "1px solid rgba(6,16,26,0.2)",
                  color: NAVY, fontSize: "14px",
                  fontFamily: "var(--font-sans), Arial, sans-serif",
                  outline: "none", boxSizing: "border-box",
                }}
              />
            </div>

            {/* Bedrooms / Bathrooms */}
            <div>
              <label style={{
                display: "block", fontFamily: "monospace",
                fontSize: "9px", letterSpacing: "0.25em",
                textTransform: "uppercase", color: "rgba(6,16,26,0.55)",
                marginBottom: "8px",
              }}>
                Bedrooms / Bathrooms
              </label>
              <input
                type="text"
                name="bed_bath"
                placeholder="4 beds / 3 baths"
                style={{
                  width: "100%", padding: "14px 16px",
                  backgroundColor: "rgba(6,16,26,0.06)",
                  border: "1px solid rgba(6,16,26,0.2)",
                  color: NAVY, fontSize: "14px",
                  fontFamily: "var(--font-sans), Arial, sans-serif",
                  outline: "none", boxSizing: "border-box",
                }}
              />
            </div>

            {/* Waterfront */}
            <div>
              <label style={{
                display: "block", fontFamily: "monospace",
                fontSize: "9px", letterSpacing: "0.25em",
                textTransform: "uppercase", color: "rgba(6,16,26,0.55)",
                marginBottom: "8px",
              }}>
                Waterfront?
              </label>
              <select
                name="waterfront"
                style={{
                  width: "100%", padding: "14px 16px",
                  backgroundColor: "rgba(6,16,26,0.06)",
                  border: "1px solid rgba(6,16,26,0.2)",
                  color: NAVY, fontSize: "14px",
                  fontFamily: "var(--font-sans), Arial, sans-serif",
                  outline: "none", boxSizing: "border-box",
                  appearance: "none",
                }}
              >
                <option value="">Select one</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="other">Other / Near Water</option>
              </select>
            </div>

            {/* Annual Revenue */}
            <div>
              <label style={{
                display: "block", fontFamily: "monospace",
                fontSize: "9px", letterSpacing: "0.25em",
                textTransform: "uppercase", color: "rgba(6,16,26,0.55)",
                marginBottom: "8px",
              }}>
                Current Annual Revenue
              </label>
              <input
                type="text"
                name="revenue"
                placeholder="$85,000 / year — or — Not yet listed"
                style={{
                  width: "100%", padding: "14px 16px",
                  backgroundColor: "rgba(6,16,26,0.06)",
                  border: "1px solid rgba(6,16,26,0.2)",
                  color: NAVY, fontSize: "14px",
                  fontFamily: "var(--font-sans), Arial, sans-serif",
                  outline: "none", boxSizing: "border-box",
                }}
              />
            </div>

            {/* Name + Email row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div>
                <label style={{
                  display: "block", fontFamily: "monospace",
                  fontSize: "9px", letterSpacing: "0.25em",
                  textTransform: "uppercase", color: "rgba(6,16,26,0.55)",
                  marginBottom: "8px",
                }}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="First Last"
                  style={{
                    width: "100%", padding: "14px 16px",
                    backgroundColor: "rgba(6,16,26,0.06)",
                    border: "1px solid rgba(6,16,26,0.2)",
                    color: NAVY, fontSize: "14px",
                    fontFamily: "var(--font-sans), Arial, sans-serif",
                    outline: "none", boxSizing: "border-box",
                  }}
                />
              </div>
              <div>
                <label style={{
                  display: "block", fontFamily: "monospace",
                  fontSize: "9px", letterSpacing: "0.25em",
                  textTransform: "uppercase", color: "rgba(6,16,26,0.55)",
                  marginBottom: "8px",
                }}>
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  style={{
                    width: "100%", padding: "14px 16px",
                    backgroundColor: "rgba(6,16,26,0.06)",
                    border: "1px solid rgba(6,16,26,0.2)",
                    color: NAVY, fontSize: "14px",
                    fontFamily: "var(--font-sans), Arial, sans-serif",
                    outline: "none", boxSizing: "border-box",
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              style={{
                marginTop: "8px",
                padding: "16px 40px",
                backgroundColor: NAVY, color: GOLD,
                border: "none", cursor: "pointer",
                fontFamily: "monospace", fontSize: "11px",
                letterSpacing: "0.2em", textTransform: "uppercase",
                fontWeight: 600, alignSelf: "flex-start",
              }}
            >
              Submit for Review →
            </button>
          </form>

          <p style={{
            fontFamily: "monospace", fontSize: "10px",
            letterSpacing: "0.05em", color: "rgba(6,16,26,0.45)",
            marginTop: "24px",
          }}>
            We accept a limited number of new properties each quarter.
          </p>
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
          marginBottom: "16px",
        }}>
          Barefoot Realty &amp; Investments LLC · FL BK3222885
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
