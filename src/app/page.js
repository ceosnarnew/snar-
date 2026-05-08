"use client";
import React, { useEffect, useRef, useState } from "react";

const PRODUCTS = [
  { id: 1, name: "Performance Tee", price: "₹1,099", colors: ["#111","#00C4D4","#fff"], bg: "linear-gradient(160deg,#0D1520 0%,#1A2535 100%)", label: "NEW" },
  { id: 2, name: "Training Shorts", price: "₹899", colors: ["#00C4D4","#111","#1a3a1a"], bg: "linear-gradient(160deg,#0A1A18 0%,#003D3D 100%)" },
  { id: 3, name: "Elite Tracksuit", price: "₹2,499", colors: ["#111","#222","#00C4D4"], bg: "linear-gradient(160deg,#0D0E18 0%,#1A1B28 100%)", label: "HOT" },
  { id: 4, name: "Performance Hoodie", price: "₹1,799", colors: ["#111","#00C4D4","#333"], bg: "linear-gradient(160deg,#0D0E18 0%,#15202B 100%)" },
  { id: 5, name: "Active Tee", price: "₹999", colors: ["#fff","#111","#00C4D4"], bg: "linear-gradient(160deg,#1A1A1A 0%,#2A2A2A 100%)" },
  { id: 6, name: "Gym Bag", price: "₹1,299", colors: ["#111","#222","#333"], bg: "linear-gradient(160deg,#0D0E18 0%,#191A24 100%)", label: "NEW" },
];

const CATEGORIES = [
  { name: "Tracksuits", icon: "tracksuit", image: "/cat_tracksuit.png" },
  { name: "Hoodies", icon: "hoodie", image: "/cat_hoodie.png" },
  { name: "T-Shirts", icon: "tshirt", image: "/cat_tshirt.png" },
  { name: "Shorts", icon: "shorts", image: "/cat_shorts.png" },
  { name: "Accessories", icon: "bag", image: "/cat_accessories.png" },
];



function ProdSVG({ product }) {
  const stroke = "rgba(0,196,212,0.5)";
  const fill = "rgba(0,196,212,0.08)";
  return (
    <svg viewBox="0 0 200 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="240" fill="transparent"/>
      {product.id === 2 || product.id === 4 ? (
        <>
          <path d="M50 55 L50 170 L90 170 L100 140 L110 170 L150 170 L150 55Z" fill={fill} stroke={stroke} strokeWidth="1.2"/>
          <rect x="50" y="55" width="100" height="16" fill="rgba(0,196,212,0.14)" stroke={stroke} strokeWidth="1"/>
        </>
      ) : product.id === 6 ? (
        <>
          <rect x="35" y="90" width="130" height="100" rx="6" fill={fill} stroke={stroke} strokeWidth="1.2"/>
          <path d="M60 90 L68 55 L132 55 L140 90" fill="none" stroke={stroke} strokeWidth="1.2"/>
          <rect x="70" y="90" width="60" height="10" fill="rgba(0,196,212,0.12)" stroke={stroke} strokeWidth="1"/>
        </>
      ) : product.id === 3 ? (
        <>
          <path d="M62 32 L40 75 L60 82 L60 200 L140 200 L140 82 L160 75 L138 32 Q118 42 100 42 Q82 42 62 32Z" fill={fill} stroke={stroke} strokeWidth="1.2"/>
          <path d="M62 32 L40 75 L35 70 L35 120 L60 82Z" fill="rgba(0,196,212,0.05)" stroke={stroke} strokeWidth="1"/>
          <path d="M138 32 L160 75 L165 70 L165 120 L140 82Z" fill="rgba(0,196,212,0.05)" stroke={stroke} strokeWidth="1"/>
          <path d="M78 32 Q100 24 122 32 L124 52 Q108 60 100 62 Q92 60 76 52Z" fill="rgba(0,196,212,0.15)" stroke={stroke} strokeWidth="1"/>
        </>
      ) : (
        <>
          <path d="M62 45 L40 90 L62 98 L62 200 L138 200 L138 98 L160 90 L138 45 L118 56 Q100 62 82 56Z" fill={fill} stroke={stroke} strokeWidth="1.2"/>
          <path d="M82 56 Q100 48 118 56" fill="none" stroke={stroke} strokeWidth="1"/>
          <line x1="100" y1="62" x2="100" y2="195" stroke="rgba(0,196,212,0.07)" strokeWidth="1"/>
        </>
      )}
    </svg>
  );
}

export default function Home() {
  const [heroSlide, setHeroSlide] = useState(0);
  const [trackOffset, setTrackOffset] = useState(0);

  const heroTimerRef = useRef(null);
  const HERO_SLIDES = 3;
  const VISIBLE_CARDS = 4;
  const MAX_OFFSET = PRODUCTS.length - VISIBLE_CARDS;

  useEffect(() => {
    heroTimerRef.current = setInterval(() => {
      setHeroSlide(s => (s + 1) % HERO_SLIDES);
    }, 5000);
    return () => clearInterval(heroTimerRef.current);
  }, []);

  const goSlide = (i) => {
    clearInterval(heroTimerRef.current);
    setHeroSlide(i);
    heroTimerRef.current = setInterval(() => setHeroSlide(s => (s + 1) % HERO_SLIDES), 5000);
  };

  const trackPrev = () => setTrackOffset(o => Math.max(0, o - 1));
  const trackNext = () => setTrackOffset(o => Math.min(MAX_OFFSET, o + 1));

  const heroContent = [
    { eyebrow: "PREMIUM SPORTSWEAR", h1line1: "IGNITE", h1line2: "YOUR", ac: "EDGE", sub: "Engineered for performance.\nDesigned for champions.", cta1: "SHOP NOW", cta2: "EXPLORE COLLECTION",
      features: [
        { title: "BREATHABLE", desc: "Stay cool\nand fresh", icon: "breathable" },
        { title: "QUICK DRY", desc: "Sweat-wicking\ntechnology", icon: "quick-dry" },
        { title: "STRETCHABLE", desc: "Move freely\nand comfortably", icon: "stretchable" },
        { title: "LIGHTWEIGHT", desc: "Built for speed\nand agility", icon: "lightweight" },
      ]
    },
    { eyebrow: "NEW COLLECTION 2026", h1line1: "PUSH", h1line2: "YOUR", ac: "LIMITS", sub: "Advanced fabric technology\nfor elite performance.", cta1: "SHOP NOW", cta2: "VIEW LOOKBOOK" },
    { eyebrow: "UP TO 30% OFF", h1line1: "SALE", h1line2: "NOW", ac: "LIVE", sub: "Selected items on sale.\nGrab yours before they're gone.", cta1: "SHOP SALE", cta2: "ALL PRODUCTS" },
  ];

  const hc = heroContent[heroSlide];

  return (
    <>


      {/* HERO */}
      <section className="hero">
        <div className="hero-slides" style={{ transform: `translateX(-${heroSlide * 100}%)` }}>
          {heroContent.map((hci, idx) => (
            <div className="hero-slide" key={idx}>
              <div className="hero-bg">
                <div style={{
                  position:"absolute",inset:0,
                  background:`linear-gradient(125deg,#050508 0%,#0D0D18 40%,${idx===0?"#0A1520":idx===1?"#0A1810":"#150A0A"} 100%)`
                }}/>
                <div style={{position:"absolute",inset:0,background:"linear-gradient(to right,rgba(0,0,0,.85) 35%,rgba(0,0,0,.1) 100%)"}}/>
              </div>
              <img src="/hero_background.png" className="hero-athlete" alt="Athletes" />
              <div className="hero-content">
                <div className="hero-eyebrow">{hci.eyebrow}</div>
                <h1 className="hero-h1">
                  {hci.h1line1}<br/>{hci.h1line2} <span className="ac">{hci.ac}</span>
                </h1>
                <p className="hero-sub">{hci.sub}</p>
                
                {hci.features && (
                  <div className="hero-features">
                    {hci.features.map((f, i) => (
                      <div key={i} className="hero-feat-item">
                        <div className="hero-feat-icon">
                          {f.icon === 'breathable' && <svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>}
                          {f.icon === 'quick-dry' && <svg viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/><path d="M12 8v4"/></svg>}
                          {f.icon === 'stretchable' && <svg viewBox="0 0 24 24"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/><polyline points="21 15 21 21 15 21"/><polyline points="3 9 3 3 9 3"/><line x1="21" y1="21" x2="14" y2="14"/><line x1="3" y1="3" x2="10" y2="10"/></svg>}
                          {f.icon === 'lightweight' && <svg viewBox="0 0 24 24"><path d="M12 2s-6 4-6 11a6 6 0 0 0 12 0c0-7-6-11-6-11z"/><line x1="12" y1="22" x2="12" y2="13"/></svg>}
                        </div>
                        <div className="hero-feat-text">
                          <div className="hero-feat-title">{f.title}</div>
                          <div className="hero-feat-desc">
                            {f.desc.split('\n').map((l, idx) => <span key={idx} style={{display:'block'}}>{l}</span>)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="hero-btns">
                  <a href="#" className="btn-primary">
                    {hci.cta1}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
                  </a>
                  <a href="#" className="btn-outline">{hci.cta2}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="hero-arrow hero-prev" onClick={() => goSlide((heroSlide - 1 + HERO_SLIDES) % HERO_SLIDES)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15,18 9,12 15,6"/></svg>
        </button>
        <button className="hero-arrow hero-next" onClick={() => goSlide((heroSlide + 1) % HERO_SLIDES)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9,18 15,12 9,6"/></svg>
        </button>
        <div className="hero-dots">
          {Array.from({length: HERO_SLIDES}).map((_,i) => (
            <div key={i} className={`hero-dot${heroSlide===i?" active":""}`} onClick={() => goSlide(i)}/>
          ))}
        </div>
      </section>

      {/* FEATURES STRIP */}
      <div className="features-strip">
        <div className="feat-item">
          <div className="feat-icon-wrap">
            <svg viewBox="0 0 24 24"><path d="M12 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"/><path d="M10.5 12.5l1.5 1.5 3-3"/><path d="M12 15v7l-3-1.5L6 22v-7.5"/></svg>
          </div>
          <div>
            <div className="feat-title">PREMIUM QUALITY</div>
            <div className="feat-desc">Built to last</div>
          </div>
        </div>
        <div className="feat-item">
          <div className="feat-icon-wrap">
            <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
          </div>
          <div>
            <div className="feat-title">PERFORMANCE DRIVEN</div>
            <div className="feat-desc">For every athlete</div>
          </div>
        </div>
        <div className="feat-item">
          <div className="feat-icon-wrap">
            <svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
          </div>
          <div>
            <div className="feat-title">FREE SHIPPING</div>
            <div className="feat-desc">On orders over ₹999</div>
          </div>
        </div>
        <div className="feat-item">
          <div className="feat-icon-wrap">
            <svg viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><polyline points="3 3 3 8 8 8"/></svg>
          </div>
          <div>
            <div className="feat-title">EASY RETURNS</div>
            <div className="feat-desc">14 days return policy</div>
          </div>
        </div>
      </div>

      {/* CATEGORIES */}
      <section className="cats-section">
        <div className="section-wrap">
          <div className="section-header">
            <div className="section-title">BROWSE BY CATEGORY</div>
            <a href="#" className="section-link">
              VIEW ALL CATEGORIES
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
            </a>
          </div>
          <div className="cats-grid">
            {CATEGORIES.map((cat) => (
              <div key={cat.name} className="cat-card">
                <div className="cat-img-wrap">
                  <img src={cat.image} alt={cat.name} />
                </div>
                <div className="cat-info">
                  <div className="cat-name">{cat.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="products-section">
        <div className="section-wrap">
          <div className="section-header">
            <div className="section-title">FEATURED PRODUCTS</div>
            <a href="#" className="section-link">
              VIEW ALL PRODUCTS
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
            </a>
          </div>
          <div className="products-track-wrap">
            <div className="products-track" style={{ transform: `translateX(calc(-${trackOffset} * (100% / ${VISIBLE_CARDS} + 1.2rem / ${VISIBLE_CARDS})))` }}>
              {PRODUCTS.map((p) => (
                <div key={p.id} className="prod-card">
                  <div className="prod-img-wrap">
                    {p.label && (
                      <div style={{position:"absolute",top:"10px",left:"10px",background:"var(--ac)",color:"var(--bg)",fontSize:".6rem",fontWeight:700,letterSpacing:".1em",padding:".18rem .55rem",zIndex:2}}>{p.label}</div>
                    )}
                    <div className="prod-img-placeholder" style={{background:p.bg,width:"100%",height:"100%"}}>
                      <ProdSVG product={p}/>
                    </div>
                  </div>
                  <div className="prod-colors">
                    {p.colors.map((c, i) => (
                      <div key={i} className={`prod-dot${i===0?" active":""}`} style={{background:c}}/>
                    ))}
                  </div>
                  <div className="prod-foot">
                    <div className="prod-info">
                      <div className="prod-name">{p.name}</div>
                      <div className="prod-price">{p.price}</div>
                    </div>
                    <button className="prod-cart-btn">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{display:"flex",justifyContent:"center",gap:".7rem",marginTop:"1.5rem"}}>
            <button className="track-arrow track-prev" style={{position:"static",transform:"none"}} onClick={trackPrev} disabled={trackOffset===0}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15,18 9,12 15,6"/></svg>
            </button>
            <button className="track-arrow track-next" style={{position:"static",transform:"none"}} onClick={trackNext} disabled={trackOffset>=MAX_OFFSET}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9,18 15,12 9,6"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* PROMO BANNERS */}
      <div className="promo-section">
        <div className="promo-card">
          <div className="promo-bg">
            <div className="promo-bg-placeholder" style={{background:"linear-gradient(135deg,#0A0B12 0%,#12141E 40%,#0D1828 100%)"}}>
              <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",opacity:.12}} viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
                <path d="M350 30 L280 110 L310 122 L310 300 L490 300 L490 122 L520 110 L450 30 Q415 46 400 48 Q385 46 350 30Z" fill="none" stroke="#00C4D4" strokeWidth="1.5"/>
                <circle cx="180" cy="170" r="90" fill="none" stroke="#00C4D4" strokeWidth="1"/>
                <path d="M130 80 L130 250 L230 250 L230 80Z" fill="rgba(0,196,212,0.05)"/>
              </svg>
            </div>
            <div className="promo-overlay"/>
          </div>
          <div className="promo-content">
            <div className="promo-label">NEW COLLECTION</div>
            <div className="promo-title">PERFORMANCE<br/><span className="ac">REDEFINED</span></div>
            <div className="promo-sub">Take your training to the next level.</div>
            <a href="#" className="btn-promo">EXPLORE NOW</a>
          </div>
        </div>
        <div className="promo-card">
          <div className="promo-bg">
            <div className="promo-bg-placeholder" style={{background:"linear-gradient(135deg,#0A1018 0%,#141820 40%,#0A1215 100%)"}}>
              <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",opacity:.12}} viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="480" cy="170" rx="110" ry="130" fill="none" stroke="#00C4D4" strokeWidth="1.5"/>
                <path d="M100 30 L80 120 L95 126 L90 290 L310 290 L305 126 L320 120 L300 30Z" fill="none" stroke="#00C4D4" strokeWidth="1.2"/>
                <line x1="0" y1="100" x2="600" y2="240" stroke="#00C4D4" strokeWidth=".8" strokeDasharray="4 8"/>
              </svg>
            </div>
            <div className="promo-overlay"/>
          </div>
          <div className="promo-content">
            <div className="promo-label">LIMITED TIME OFFER</div>
            <div className="promo-title">UP TO<br/><span className="ac">30% OFF</span></div>
            <div className="promo-sub">On selected items</div>
            <a href="#" className="btn-promo">SHOP SALE</a>
          </div>
        </div>
      </div>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="trust-item">
          <div className="trust-icon">
            <svg viewBox="0 0 24 24"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
          </div>
          <div>
            <div className="trust-title">Free Shipping</div>
            <div className="trust-desc">On orders over ₹999</div>
          </div>
        </div>
        <div className="trust-item">
          <div className="trust-icon">
            <svg viewBox="0 0 24 24"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
          </div>
          <div>
            <div className="trust-title">Easy Returns</div>
            <div className="trust-desc">14 days return policy</div>
          </div>
        </div>
        <div className="trust-item">
          <div className="trust-icon">
            <svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
          </div>
          <div>
            <div className="trust-title">Secure Payment</div>
            <div className="trust-desc">100% secure checkout</div>
          </div>
        </div>
        <div className="trust-item">
          <div className="trust-icon">
            <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.82 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.73 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l1.19-1.19a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <div>
            <div className="trust-title">24/7 Support</div>
            <div className="trust-desc">We&apos;re here to help</div>
          </div>
        </div>
      </div>


    </>
  );
}
