import React from "react";
import Link from "next/link";

export const metadata = {
  title: "About — SNAR",
  description: "The story behind SNAR — premium sportswear engineered for champions.",
};

const FOUNDERS = [
  // { name: "", role: "", bio: "", initials: "" },
];

const VALUES = [
  // { num: "01", title: "", desc: "", icon: "" },
];

const MILESTONES = [
  // { year: "", event: "" },
];

const STATS = [
  { num: "", label: "Founded" },
  { num: "", label: "Athletes" },
  { num: "", label: "Products" },
  { num: "", label: "Rating" },
];

export default function AboutPage() {
  return (
    <div style={{ background: "var(--bg)", color: "#fff", minHeight: "100svh" }}>

      {/* HERO */}
      <section style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "calc(34px + 5rem) 6vw 6vw",
        position: "relative",
        overflow: "hidden",
      }}>
        <div aria-hidden="true" style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "55%",
          height: "100%",
          background: "linear-gradient(135deg, transparent 40%, rgba(0,196,212,0.06) 100%)",
          pointerEvents: "none",
        }} />
        <div aria-hidden="true" style={{
          position: "absolute",
          top: "15%",
          right: "10%",
          width: "400px",
          height: "400px",
          border: "1px solid rgba(0,196,212,0.08)",
          borderRadius: "50%",
          pointerEvents: "none",
        }} />
        <div aria-hidden="true" style={{
          position: "absolute",
          top: "20%",
          right: "15%",
          width: "280px",
          height: "280px",
          border: "1px solid rgba(0,196,212,0.05)",
          borderRadius: "50%",
          pointerEvents: "none",
        }} />

        <Link href="/" style={{
          position: "absolute",
          top: "calc(34px + 2rem)",
          left: "6vw",
          display: "inline-flex",
          alignItems: "center",
          gap: ".4rem",
          color: "rgba(255,255,255,0.4)",
          fontSize: ".72rem",
          fontWeight: 600,
          letterSpacing: ".12em",
          textDecoration: "none",
          textTransform: "uppercase",
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12,5 5,12 12,19"/>
          </svg>
          Home
        </Link>

        <div style={{ position: "relative", zIndex: 2 }}>
          <p style={{
            fontSize: ".72rem",
            fontWeight: 700,
            letterSpacing: ".2em",
            textTransform: "uppercase",
            color: "var(--ac)",
            marginBottom: "1.5rem",
          }}>Our Story</p>

          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(4.5rem, 14vw, 13rem)",
            lineHeight: 0.85,
            letterSpacing: ".02em",
            textTransform: "uppercase",
            marginBottom: "3rem",
          }}>
            {/* TODO: Hero heading line 1 */}<br />
            {/* TODO: Hero heading line 2 */}<br />
            <span style={{ color: "var(--ac)" }}>{/* TODO: accent word */}</span>
          </h1>

          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "3rem",
            maxWidth: "900px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "2.5rem",
          }}>
            <p style={{
              flex: "1 1 300px",
              fontSize: "clamp(1rem, 1.8vw, 1.3rem)",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.6)",
              fontWeight: 300,
            }}>
              {/* TODO: Hero paragraph 1 */}
            </p>
            <p style={{
              flex: "1 1 300px",
              fontSize: "clamp(1rem, 1.8vw, 1.3rem)",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.6)",
              fontWeight: 300,
            }}>
              {/* TODO: Hero paragraph 2 */}
            </p>
          </div>
        </div>
      </section>

      {/* STATS ROW */}
      <section style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
      }}>
        {STATS.map((s, i) => (
          <div key={i} style={{
            padding: "2.5rem 4vw",
            borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
            textAlign: "center",
          }}>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "var(--ac)",
              lineHeight: 1,
              marginBottom: ".4rem",
              minHeight: "3rem",
            }}>{s.num}</div>
            <div style={{
              fontSize: ".7rem",
              fontWeight: 600,
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
            }}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* VALUES */}
      <section style={{ padding: "7rem 6vw" }}>
        <div style={{ marginBottom: "4rem" }}>
          <p style={{
            fontSize: ".72rem",
            fontWeight: 700,
            letterSpacing: ".2em",
            textTransform: "uppercase",
            color: "var(--ac)",
            marginBottom: ".75rem",
          }}>What We Stand For</p>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(2.5rem, 7vw, 6rem)",
            lineHeight: 0.9,
            letterSpacing: ".02em",
          }}>OUR VALUES</h2>
        </div>

        {VALUES.length > 0 && (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "16px",
            overflow: "hidden",
          }}>
            {VALUES.map((v, i) => (
              <div key={i} style={{
                background: "var(--bg)",
                padding: "2.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "10px",
                    background: "rgba(0,196,212,0.08)",
                    border: "1px solid rgba(0,196,212,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ac)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d={v.icon}/>
                    </svg>
                  </div>
                  <span style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "3rem",
                    color: "rgba(255,255,255,0.06)",
                    lineHeight: 1,
                    marginLeft: "auto",
                  }}>{v.num}</span>
                </div>
                <h3 style={{
                  fontSize: ".8rem",
                  fontWeight: 700,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "#fff",
                }}>{v.title}</h3>
                <p style={{
                  fontSize: ".9rem",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.45)",
                  fontWeight: 300,
                }}>{v.desc}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* VISION */}
      <section style={{
        margin: "0 6vw",
        padding: "5rem",
        background: "rgba(0,196,212,0.04)",
        border: "1px solid rgba(0,196,212,0.1)",
        borderRadius: "20px",
        marginBottom: "7rem",
        position: "relative",
        overflow: "hidden",
      }}>
        <div aria-hidden="true" style={{
          position: "absolute",
          top: "-60px",
          right: "-60px",
          width: "300px",
          height: "300px",
          border: "1px solid rgba(0,196,212,0.08)",
          borderRadius: "50%",
          pointerEvents: "none",
        }} />
        <p style={{
          fontSize: ".72rem",
          fontWeight: 700,
          letterSpacing: ".2em",
          textTransform: "uppercase",
          color: "var(--ac)",
          marginBottom: "1.5rem",
        }}>The Vision</p>
        <h2 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(2rem, 5vw, 5rem)",
          lineHeight: 0.9,
          letterSpacing: ".02em",
          maxWidth: "18ch",
          marginBottom: "2.5rem",
        }}>
          {/* TODO: Vision heading */}
        </h2>
        <p style={{
          maxWidth: "60ch",
          fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
          lineHeight: 1.8,
          color: "rgba(255,255,255,0.55)",
          fontWeight: 300,
          marginBottom: "2rem",
        }}>
          {/* TODO: Vision paragraph 1 */}
        </p>
        <p style={{
          maxWidth: "60ch",
          fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
          lineHeight: 1.8,
          color: "rgba(255,255,255,0.55)",
          fontWeight: 300,
        }}>
          {/* TODO: Vision paragraph 2 */}
        </p>
      </section>

      {/* FOUNDERS */}
      <section style={{ padding: "0 6vw 7rem" }}>
        <div style={{ marginBottom: "4rem" }}>
          <p style={{
            fontSize: ".72rem",
            fontWeight: 700,
            letterSpacing: ".2em",
            textTransform: "uppercase",
            color: "var(--ac)",
            marginBottom: ".75rem",
          }}>The People Behind It</p>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(2.5rem, 7vw, 6rem)",
            lineHeight: 0.9,
            letterSpacing: ".02em",
          }}>FOUNDERS</h2>
        </div>

        {FOUNDERS.length > 0 && (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}>
            {FOUNDERS.map((f, i) => (
              <div key={i} style={{
                padding: "2.5rem",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "16px",
              }}>
                <div style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "rgba(0,196,212,0.1)",
                  border: "1.5px solid rgba(0,196,212,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.5rem",
                  color: "var(--ac)",
                  letterSpacing: ".08em",
                  marginBottom: "1.5rem",
                }}>{f.initials}</div>
                <h3 style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: ".3rem",
                  letterSpacing: ".01em",
                }}>{f.name}</h3>
                <p style={{
                  fontSize: ".72rem",
                  fontWeight: 600,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "var(--ac)",
                  marginBottom: "1.25rem",
                }}>{f.role}</p>
                <p style={{
                  fontSize: ".9rem",
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.45)",
                  fontWeight: 300,
                }}>{f.bio}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* TIMELINE */}
      <section style={{
        padding: "7rem 6vw",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}>
        <div style={{ marginBottom: "4rem" }}>
          <p style={{
            fontSize: ".72rem",
            fontWeight: 700,
            letterSpacing: ".2em",
            textTransform: "uppercase",
            color: "var(--ac)",
            marginBottom: ".75rem",
          }}>The Journey</p>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(2.5rem, 7vw, 6rem)",
            lineHeight: 0.9,
            letterSpacing: ".02em",
          }}>MILESTONES</h2>
        </div>

        {MILESTONES.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 0, maxWidth: "700px" }}>
            {MILESTONES.map((m, i) => (
              <div key={i} style={{
                display: "grid",
                gridTemplateColumns: "80px 1px 1fr",
                gap: "0 2rem",
                paddingBottom: i < MILESTONES.length - 1 ? "2.5rem" : 0,
              }}>
                <div style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.4rem",
                  color: "var(--ac)",
                  letterSpacing: ".06em",
                  paddingTop: ".2rem",
                  textAlign: "right",
                }}>{m.year}</div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "var(--ac)",
                    flexShrink: 0,
                    marginTop: ".35rem",
                    boxShadow: "0 0 12px rgba(0,196,212,0.4)",
                  }} />
                  {i < MILESTONES.length - 1 && (
                    <div style={{
                      flex: 1,
                      width: "1px",
                      background: "rgba(0,196,212,0.15)",
                      marginTop: ".4rem",
                    }} />
                  )}
                </div>
                <p style={{
                  fontSize: "clamp(.9rem, 1.4vw, 1.05rem)",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.5)",
                  fontWeight: 300,
                  paddingTop: ".1rem",
                }}>{m.event}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section style={{
        margin: "0 6vw 8rem",
        padding: "5rem",
        background: "linear-gradient(135deg, #0A1520 0%, #091218 100%)",
        border: "1px solid rgba(0,196,212,0.12)",
        borderRadius: "20px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div aria-hidden="true" style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, rgba(0,196,212,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        <p style={{
          fontSize: ".72rem",
          fontWeight: 700,
          letterSpacing: ".2em",
          textTransform: "uppercase",
          color: "var(--ac)",
          marginBottom: "1rem",
          position: "relative",
        }}>Join The Movement</p>
        <h2 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(2.5rem, 7vw, 6rem)",
          lineHeight: 0.9,
          letterSpacing: ".02em",
          marginBottom: "1.5rem",
          position: "relative",
        }}>
          {/* TODO: CTA heading */}
        </h2>
        <p style={{
          maxWidth: "40ch",
          margin: "0 auto 2.5rem",
          fontSize: "clamp(.9rem, 1.4vw, 1.05rem)",
          lineHeight: 1.7,
          color: "rgba(255,255,255,0.45)",
          fontWeight: 300,
          position: "relative",
        }}>
          {/* TODO: CTA subtext */}
        </p>
        <Link href="/" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: ".6rem",
          padding: ".9rem 2.5rem",
          background: "var(--ac)",
          color: "#05050A",
          borderRadius: "10px",
          fontSize: ".8rem",
          fontWeight: 800,
          letterSpacing: ".1em",
          textTransform: "uppercase",
          textDecoration: "none",
          position: "relative",
        }}>
          EXPLORE THE SITE
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/>
          </svg>
        </Link>
      </section>

    </div>
  );
}