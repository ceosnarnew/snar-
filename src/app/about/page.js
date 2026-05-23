import React from "react";
import Link from "next/link";
import { GlobePulse } from "@/components/ui/cobe-globe-pulse";

export const metadata = {
  title: "About — SNAR",
  description: "The story behind SNAR — premium sportswear engineered for champions.",
};

const VALUES = [
  {
    num: "01",
    title: "Performance Without Compromise",
    desc: "Every design supports movement, comfort, and confidence. Functional fabrics, precise fit, and construction that improves real results for real activity.",
    icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  },
  {
    num: "02",
    title: "Integrity",
    desc: "Honest product claims, thorough quality testing, and standing behind every item we make. No shortcuts.",
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  },
  {
    num: "03",
    title: "Sustainability",
    desc: "Mindful sourcing, longer-lasting designs, and responsible packaging — reducing waste at every step.",
    icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
  },
  {
    num: "04",
    title: "Inclusivity",
    desc: "Sizes, styles, and design choices crafted to empower diverse bodies and skill levels. SNAR is built for everyone who moves.",
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  },
  {
    num: "05",
    title: "Community",
    desc: "We support local athletes, trainers, and fitness groups — building a movement that shares knowledge, ambition, and motivation.",
    icon: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
  },
];

const STATS = [
  { num: "2024", label: "Founded" },
  { num: "100+", label: "Athletes" },
  { num: "20+", label: "Products" },
  { num: "4.9★", label: "Rating" },
];

const CRAFT_POINTS = [
  { label: "Premium Fabrics", desc: "Technical materials engineered for breathability, stretch, and durability under load." },
  { label: "Sharp Silhouettes", desc: "Modern cuts designed for movement — not just the gym, but the street and beyond." },
  { label: "Precision Construction", desc: "Flatlock seams, reinforced stress points, and finishes that hold through every session." },
];

export default function AboutPage() {
  return (
    <div style={{ background: "var(--bg)", color: "#fff", minHeight: "100svh", overflowX: "hidden" }}>

      {/* ─── HERO ─── */}
      <section style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "calc(34px + 5rem) 6vw 6vw",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* bg glow */}
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 70% 60% at 75% 50%, rgba(0,196,212,0.07) 0%, transparent 70%)",
        }} />
        {/* grid lines */}
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(0,196,212,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,196,212,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 80% at 70% 50%, black 30%, transparent 80%)",
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
          zIndex: 10,
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12,5 5,12 12,19"/>
          </svg>
          Home
        </Link>

        <div style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", gap: "4vw", width: "100%" }}>
          {/* Left */}
          <div style={{ flex: "1 1 0", minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.75rem" }}>
              <div style={{ width: "2rem", height: "2px", background: "var(--ac)" }} />
              <p style={{
                fontSize: ".72rem", fontWeight: 700, letterSpacing: ".2em",
                textTransform: "uppercase", color: "var(--ac)", margin: 0,
              }}>Our Story</p>
            </div>

            <h1 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(4rem, 10vw, 10.5rem)",
              lineHeight: 0.85,
              letterSpacing: ".02em",
              textTransform: "uppercase",
              marginBottom: "3rem",
            }}>
              Ignite<br />
              Your<br />
              <span style={{
                color: "var(--ac)",
                textShadow: "0 0 60px rgba(0,196,212,0.4)",
              }}>Edge</span>
            </h1>

            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              borderLeft: "2px solid rgba(0,196,212,0.2)",
              paddingLeft: "1.5rem",
            }}>
              <p style={{
                fontSize: "clamp(.9rem, 1.3vw, 1.05rem)",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.6)",
                fontWeight: 300,
                maxWidth: "48ch",
              }}>
                SNAR was born from a vision to create sportswear that feels elevated, performs relentlessly, and speaks to a new generation of ambition. Built in Kolkata, the brand reflects a mindset shaped by discipline, self-belief, and the desire to move with purpose.
              </p>
              <p style={{
                fontSize: "clamp(.9rem, 1.3vw, 1.05rem)",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.6)",
                fontWeight: 300,
                maxWidth: "48ch",
              }}>
                SNAR is for those who want more from what they wear: sharper design, premium quality, and a presence that stands out without saying too much.
              </p>
              <p style={{
                fontSize: ".78rem",
                fontWeight: 700,
                letterSpacing: ".15em",
                textTransform: "uppercase",
                color: "var(--ac)",
                marginTop: ".5rem",
              }}>
                Ignite Your Edge — Move Sharper. Train Harder. Look Stronger.
              </p>
            </div>
          </div>

          {/* Right: globe */}
          <div style={{
            flex: "0 0 clamp(280px, 40vw, 580px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}>
            {/* glow ring behind globe */}
            <div aria-hidden="true" style={{
              position: "absolute",
              width: "85%", height: "85%",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,196,212,0.08) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <GlobePulse style={{ width: "100%" }} />
          </div>
        </div>

        {/* scroll indicator */}
        <div aria-hidden="true" style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: ".5rem",
          opacity: 0.3,
        }}>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, transparent, var(--ac))" }} />
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--ac)" strokeWidth="2.5">
            <polyline points="6,9 12,15 18,9" />
          </svg>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        background: "rgba(255,255,255,0.01)",
      }}>
        {STATS.map((s, i) => (
          <div key={i} style={{
            padding: "2.5rem 2vw",
            borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
            textAlign: "center",
            position: "relative",
          }}>
            <div aria-hidden="true" style={{
              position: "absolute", inset: 0,
              background: "radial-gradient(ellipse at center, rgba(0,196,212,0.04) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              color: "var(--ac)",
              lineHeight: 1,
              marginBottom: ".5rem",
              textShadow: "0 0 30px rgba(0,196,212,0.35)",
            }}>{s.num}</div>
            <div style={{
              fontSize: ".68rem",
              fontWeight: 600,
              letterSpacing: ".16em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
            }}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* ─── VALUES ─── */}
      <section style={{ padding: "8rem 6vw" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "4rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: ".75rem" }}>
              <div style={{ width: "2rem", height: "2px", background: "var(--ac)" }} />
              <p style={{ fontSize: ".72rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--ac)", margin: 0 }}>
                What We Stand For
              </p>
            </div>
            <h2 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 7vw, 6rem)",
              lineHeight: 0.9,
              letterSpacing: ".02em",
            }}>OUR VALUES</h2>
          </div>
          <p style={{ fontSize: ".9rem", color: "rgba(255,255,255,0.35)", maxWidth: "30ch", lineHeight: 1.6, fontWeight: 300 }}>
            Five principles that guide every decision — from design to delivery.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.05)",
          borderRadius: "20px",
          overflow: "hidden",
        }}>
          {VALUES.map((v, i) => (
            <div key={i} style={{
              background: "var(--bg)",
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* accent top border */}
              <div style={{
                position: "absolute",
                top: 0, left: 0, right: 0,
                height: "2px",
                background: "linear-gradient(90deg, var(--ac), transparent)",
                opacity: 0.5,
              }} />
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                <div style={{
                  width: "44px", height: "44px",
                  borderRadius: "12px",
                  background: "rgba(0,196,212,0.07)",
                  border: "1px solid rgba(0,196,212,0.18)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ac)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={v.icon}/>
                  </svg>
                </div>
                <span style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "3.5rem",
                  color: "rgba(255,255,255,0.04)",
                  lineHeight: 1,
                }}>{v.num}</span>
              </div>
              <h3 style={{
                fontSize: ".78rem", fontWeight: 700, letterSpacing: ".1em",
                textTransform: "uppercase", color: "#fff",
              }}>{v.title}</h3>
              <p style={{
                fontSize: ".88rem", lineHeight: 1.75,
                color: "rgba(255,255,255,0.4)", fontWeight: 300,
              }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── OUR CRAFT ─── */}
      <section style={{ padding: "0 6vw 8rem" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6vw",
          alignItems: "center",
          padding: "5rem",
          background: "rgba(255,255,255,0.015)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "24px",
          position: "relative",
          overflow: "hidden",
        }}>
          <div aria-hidden="true" style={{
            position: "absolute", bottom: "-80px", right: "-80px",
            width: "350px", height: "350px",
            borderRadius: "50%",
            border: "1px solid rgba(0,196,212,0.06)",
            pointerEvents: "none",
          }} />
          <div aria-hidden="true" style={{
            position: "absolute", bottom: "-40px", right: "-40px",
            width: "220px", height: "220px",
            borderRadius: "50%",
            border: "1px solid rgba(0,196,212,0.04)",
            pointerEvents: "none",
          }} />

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: ".75rem" }}>
              <div style={{ width: "2rem", height: "2px", background: "var(--ac)" }} />
              <p style={{ fontSize: ".72rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--ac)", margin: 0 }}>
                How We Build
              </p>
            </div>
            <h2 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              lineHeight: 0.9,
              letterSpacing: ".02em",
              marginBottom: "2rem",
            }}>OUR CRAFT</h2>
            <p style={{
              fontSize: "clamp(.95rem, 1.3vw, 1.05rem)",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.5)",
              fontWeight: 300,
              maxWidth: "46ch",
            }}>
              At SNAR, every piece is designed with intention. We focus on premium fabrics, performance-led construction, and refined silhouettes that deliver comfort, durability, and a clean, modern edge. The result is sportswear that moves effortlessly, feels powerful on the body, and meets the expectations of a generation that values both function and style.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {CRAFT_POINTS.map((pt, i) => (
              <div key={i} style={{
                display: "flex",
                gap: "1.25rem",
                alignItems: "flex-start",
                padding: "1.5rem",
                background: "rgba(0,196,212,0.03)",
                border: "1px solid rgba(0,196,212,0.08)",
                borderRadius: "14px",
              }}>
                <div style={{
                  width: "32px", height: "32px",
                  borderRadius: "8px",
                  background: "rgba(0,196,212,0.1)",
                  border: "1px solid rgba(0,196,212,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, marginTop: ".1rem",
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1rem",
                  color: "var(--ac)",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <p style={{ fontSize: ".78rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#fff", marginBottom: ".4rem" }}>
                    {pt.label}
                  </p>
                  <p style={{ fontSize: ".85rem", lineHeight: 1.65, color: "rgba(255,255,255,0.4)", fontWeight: 300 }}>
                    {pt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VISION ─── */}
      <section style={{ padding: "0 6vw 8rem" }}>
        <div style={{
          padding: "6rem 5vw",
          background: "linear-gradient(135deg, rgba(0,196,212,0.05) 0%, rgba(0,196,212,0.02) 50%, transparent 100%)",
          border: "1px solid rgba(0,196,212,0.12)",
          borderRadius: "24px",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* large decorative text */}
          <div aria-hidden="true" style={{
            position: "absolute",
            top: "-1rem", right: "4vw",
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(8rem, 18vw, 20rem)",
            color: "rgba(0,196,212,0.03)",
            lineHeight: 1,
            letterSpacing: ".02em",
            userSelect: "none",
            pointerEvents: "none",
          }}>SNAR</div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6vw", alignItems: "start", position: "relative", zIndex: 2 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: ".75rem" }}>
                <div style={{ width: "2rem", height: "2px", background: "var(--ac)" }} />
                <p style={{ fontSize: ".72rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--ac)", margin: 0 }}>
                  The Vision
                </p>
              </div>
              <h2 style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.5rem, 5.5vw, 5.5rem)",
                lineHeight: 0.88,
                letterSpacing: ".02em",
                marginBottom: "0",
              }}>
                Built for<br />
                the Bold,<br />
                the Focused,<br />
                <span style={{ color: "var(--ac)" }}>Always-Evolving</span>
              </h2>
            </div>

            <div style={{ paddingTop: "1rem" }}>
              <p style={{
                fontSize: "clamp(1rem, 1.5vw, 1.12rem)",
                lineHeight: 1.85,
                color: "rgba(255,255,255,0.55)",
                fontWeight: 300,
                marginBottom: "1.75rem",
              }}>
                Our vision is to build a premium sportswear brand for those who demand more — to create apparel that fuels confidence, supports performance, and builds a culture around movement, ambition, and self-expression.
              </p>
              <p style={{
                fontSize: "clamp(1rem, 1.5vw, 1.12rem)",
                lineHeight: 1.85,
                color: "rgba(255,255,255,0.55)",
                fontWeight: 300,
                marginBottom: "2.5rem",
              }}>
                SNAR exists to ignite your edge — through products that look elite, feel exceptional, and keep up with every level you reach. High-performance, responsibly made sportswear accessible across India and beyond.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".75rem" }}>
                {["Innovation", "Sustainability", "Performance", "Style", "Community"].map((tag) => (
                  <span key={tag} style={{
                    padding: ".35rem .9rem",
                    background: "rgba(0,196,212,0.07)",
                    border: "1px solid rgba(0,196,212,0.15)",
                    borderRadius: "100px",
                    fontSize: ".68rem",
                    fontWeight: 600,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--ac)",
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{
        margin: "0 6vw 8rem",
        padding: "6rem 5vw",
        background: "linear-gradient(135deg, #0A1520 0%, #060C12 100%)",
        border: "1px solid rgba(0,196,212,0.14)",
        borderRadius: "24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(0,196,212,0.1) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        <div aria-hidden="true" style={{
          position: "absolute",
          top: "-100px", left: "50%", transform: "translateX(-50%)",
          width: "500px", height: "500px",
          borderRadius: "50%",
          border: "1px solid rgba(0,196,212,0.05)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", marginBottom: "1.5rem" }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--ac)", boxShadow: "0 0 8px var(--ac)" }} />
            <p style={{ fontSize: ".72rem", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--ac)", margin: 0 }}>
              Join The Movement
            </p>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--ac)", boxShadow: "0 0 8px var(--ac)" }} />
          </div>

          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(3rem, 8vw, 7rem)",
            lineHeight: 0.88,
            letterSpacing: ".02em",
            marginBottom: "1.5rem",
            textShadow: "0 0 80px rgba(0,196,212,0.2)",
          }}>
            Wear the Drive
          </h2>
          <p style={{
            maxWidth: "38ch",
            margin: "0 auto 3rem",
            fontSize: "clamp(.9rem, 1.4vw, 1.05rem)",
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.4)",
            fontWeight: 300,
          }}>
            Built to perform. Designed for the bold. Find sportswear that moves as hard as you do.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/collections" style={{
              display: "inline-flex", alignItems: "center", gap: ".6rem",
              padding: ".95rem 2.5rem",
              background: "var(--ac)",
              color: "#05050A",
              borderRadius: "12px",
              fontSize: ".78rem", fontWeight: 800, letterSpacing: ".1em",
              textTransform: "uppercase", textDecoration: "none",
              boxShadow: "0 0 30px rgba(0,196,212,0.25)",
            }}>
              Shop Now
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/>
              </svg>
            </Link>
            <Link href="/" style={{
              display: "inline-flex", alignItems: "center", gap: ".6rem",
              padding: ".95rem 2.5rem",
              background: "transparent",
              color: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "12px",
              fontSize: ".78rem", fontWeight: 700, letterSpacing: ".1em",
              textTransform: "uppercase", textDecoration: "none",
            }}>
              Explore the Site
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
