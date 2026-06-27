import { useState, useEffect, useCallback } from "react";
import { SiX } from "react-icons/si";

import imgCJFace    from "@assets/file_00000000ae3071f4996686dabbcc28d6_1782525794223.png";
import imgCJMissile from "@assets/file_00000000c95471f4a81c4fc202c0ef0d_1782525794267.png";
import imgCJStreet  from "@assets/e3ff96bf9d25d9f6ce728bb8c982186a_1782525764183.jpg";
import imgCJBed     from "@assets/cfb96f4ef5ed21e5f5f2a141ca49fd9a_1782525764435.jpg";
import imgCJCinema  from "@assets/700dcb0e29ca55dbe9ab6cdff4e04727_1782525764494.jpg";
import imgBreaking  from "@assets/1782523850458_1782530080986.png";
import imgCNNLive   from "@assets/robinson-432x243_1782530080724.jpeg";

const CA       = "DR4nHueGFV6M9D3sEACyWwvt4ihhGKfQG3tyYKfXpump";
const BUY_URL  = "https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=DR4nHueGFV6M9D3sEACyWwvt4ihhGKfQG3tyYKfXpump";
const DEX_URL  = "https://dexscreener.com/solana/DR4nHueGFV6M9D3sEACyWwvt4ihhGKfQG3tyYKfXpump";
const PUMP_URL = "https://pump.fun/coin/DR4nHueGFV6M9D3sEACyWwvt4ihhGKfQG3tyYKfXpump";
const X_URL    = "https://x.com/i/communities/2038639985490887031";

/* ── SVG primitives ──────────────────────── */

const PalmLeft = () => (
  <svg width="200" height="360" viewBox="0 0 200 360" fill="none">
    <rect x="88" y="190" width="17" height="170" rx="4" fill="#070412" transform="rotate(-8 88 190)"/>
    <rect x="93" y="150" width="13" height="115" rx="3" fill="#070412" transform="rotate(-15 93 150)"/>
    <ellipse cx="62" cy="190" rx="76" ry="21" fill="#070412" transform="rotate(-35 62 190)"/>
    <ellipse cx="97" cy="165" rx="72" ry="19" fill="#070412" transform="rotate(-55 97 165)"/>
    <ellipse cx="88" cy="155" rx="66" ry="17" fill="#070412" transform="rotate(15 88 155)"/>
    <ellipse cx="108" cy="144" rx="68" ry="18" fill="#070412" transform="rotate(-70 108 144)"/>
    <ellipse cx="83" cy="134" rx="62" ry="16" fill="#070412" transform="rotate(30 83 134)"/>
    <path d="M44 360 Q100 342 158 360 Q130 322 94 313 Q58 322 44 360Z" fill="#070412"/>
  </svg>
);

const PalmRight = () => (
  <svg width="200" height="360" viewBox="0 0 200 360" fill="none">
    <rect x="95" y="190" width="17" height="170" rx="4" fill="#070412" transform="rotate(8 95 190)"/>
    <rect x="94" y="150" width="13" height="115" rx="3" fill="#070412" transform="rotate(15 94 150)"/>
    <ellipse cx="138" cy="190" rx="76" ry="21" fill="#070412" transform="rotate(35 138 190)"/>
    <ellipse cx="103" cy="165" rx="72" ry="19" fill="#070412" transform="rotate(55 103 165)"/>
    <ellipse cx="112" cy="155" rx="66" ry="17" fill="#070412" transform="rotate(-15 112 155)"/>
    <ellipse cx="92" cy="144" rx="68" ry="18" fill="#070412" transform="rotate(70 92 144)"/>
    <ellipse cx="117" cy="134" rx="62" ry="16" fill="#070412" transform="rotate(-30 117 134)"/>
    <path d="M44 360 Q100 342 158 360 Q130 322 94 313 Q58 322 44 360Z" fill="#070412"/>
  </svg>
);

const WomanSilhouette = () => (
  <svg width="160" height="300" viewBox="0 0 160 300" fill="none">
    <circle cx="80" cy="34" r="26" fill="#070412"/>
    <path d="M54 56 Q48 62 44 84 Q40 106 44 132 Q48 152 53 166 L70 166 L79 92 L81 92 L90 166 L107 166 Q112 152 116 132 Q120 106 116 84 Q112 62 106 56 Q96 52 80 52 Q64 52 54 56Z" fill="#070412"/>
    <path d="M54 62 L41 73 L24 150 L43 155 L54 102Z" fill="#070412"/>
    <path d="M106 62 L119 73 L136 150 L117 155 L106 102Z" fill="#070412"/>
    <path d="M52 160 L44 300 L65 300 Q70 262 79 234 Q82 224 82 234 Q87 262 95 300 L116 300 L108 160Z" fill="#070412"/>
  </svg>
);

const CityBuildings = () => (
  <svg width="100%" height="130" viewBox="0 0 1200 130" preserveAspectRatio="xMidYMax slice" fill="none">
    <rect x="0"   y="55"  width="58"  height="75"  fill="#060310"/>
    <rect x="52"  y="18"  width="76"  height="112" fill="#080418"/>
    <rect x="124" y="46"  width="48"  height="84"  fill="#060310"/>
    <rect x="168" y="3"   width="96"  height="127" fill="#090520"/>
    <rect x="260" y="38"  width="66"  height="92"  fill="#070414"/>
    <rect x="322" y="22"  width="86"  height="108" fill="#080418"/>
    <rect x="404" y="0"   width="114" height="130" fill="#090520"/>
    <rect x="515" y="28"  width="57"  height="102" fill="#060310"/>
    <rect x="568" y="8"   width="80"  height="122" fill="#080418"/>
    <rect x="645" y="42"  width="53"  height="88"  fill="#090520"/>
    <rect x="694" y="12"  width="90"  height="118" fill="#060310"/>
    <rect x="781" y="32"  width="67"  height="98"  fill="#080418"/>
    <rect x="845" y="0"   width="105" height="130" fill="#090520"/>
    <rect x="947" y="22"  width="72"  height="108" fill="#060310"/>
    <rect x="1016" y="50" width="48"  height="80"  fill="#080418"/>
    <rect x="1061" y="28" width="95"  height="102" fill="#090520"/>
  </svg>
);

const MissileSVG = ({ size = 1 }: { size?: number }) => (
  <svg width={Math.round(78*size)} height={Math.round(20*size)} viewBox="0 0 78 20" fill="none">
    <path d="M68 10 L78 5 L78 15Z" fill="#c62828"/>
    <rect x="18" y="7" width="52" height="6" rx="1" fill="#94a3b8"/>
    <rect x="20" y="7" width="50" height="3" rx="1" fill="rgba(255,255,255,0.18)"/>
    <path d="M18 10 L0 5 L0 15Z" fill="#64748b"/>
    <path d="M26 7 L26 13 L32 15 L32 5Z" fill="#7a8fa8"/>
    <ellipse cx="7"  cy="10" rx="6" ry="4.5" fill="rgba(255,120,0,0.9)"/>
    <ellipse cx="4"  cy="10" rx="8" ry="3.5" fill="rgba(255,180,0,0.55)"/>
    <ellipse cx="1"  cy="10" rx="9" ry="2.5" fill="rgba(255,80,0,0.25)"/>
  </svg>
);

const StarSVG = ({ color = "#ff6b00" }: { color?: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill={color} stroke="rgba(0,0,0,0.4)" strokeWidth="1"/>
  </svg>
);

const RadarSVG = () => (
  <svg width="72" height="72" viewBox="0 0 80 80" fill="none">
    <circle cx="40" cy="40" r="37" stroke="rgba(255,107,0,0.18)" strokeWidth="1" fill="rgba(0,8,20,0.4)"/>
    <circle cx="40" cy="40" r="26" stroke="rgba(255,107,0,0.12)" strokeWidth="0.5" fill="none"/>
    <circle cx="40" cy="40" r="15" stroke="rgba(255,107,0,0.1)" strokeWidth="0.5" fill="none"/>
    <line x1="40" y1="3" x2="40" y2="77" stroke="rgba(255,107,0,0.07)" strokeWidth="0.5"/>
    <line x1="3" y1="40" x2="77" y2="40" stroke="rgba(255,107,0,0.07)" strokeWidth="0.5"/>
    <g className="radar-sweep">
      <path d="M40 40 L40 3 A37 37 0 0 1 77 40Z" fill="url(#rg)" opacity="0.55"/>
      <defs>
        <radialGradient id="rg" cx="0%" cy="100%" r="100%">
          <stop offset="0%" stopColor="rgba(255,107,0,0)" stopOpacity="0"/>
          <stop offset="75%" stopColor="rgba(255,107,0,0.12)" stopOpacity="1"/>
          <stop offset="100%" stopColor="rgba(255,107,0,0.45)" stopOpacity="1"/>
        </radialGradient>
      </defs>
    </g>
    <circle className="blip" cx="54" cy="26" r="2.5" fill="#ff6b00" style={{ filter: "drop-shadow(0 0 3px #ff6b00)" }}/>
    <circle className="blip" cx="24" cy="50" r="2" fill="#e91e8c" style={{ animationDelay: "1s", filter: "drop-shadow(0 0 3px #e91e8c)" }}/>
    <circle cx="40" cy="40" r="2" fill="rgba(255,107,0,0.7)"/>
    <circle className="radar-ping-ring" cx="40" cy="40" r="7" stroke="rgba(255,107,0,0.45)" strokeWidth="1" fill="none" style={{ transformOrigin: "40px 40px" }}/>
    <circle className="radar-ping-ring" cx="40" cy="40" r="7" stroke="rgba(255,107,0,0.25)" strokeWidth="0.5" fill="none" style={{ transformOrigin: "40px 40px" }}/>
  </svg>
);

/* ── Component ──────────────────────────── */

export default function Home() {
  const [utcTime, setUtcTime]     = useState("");
  const [showMP, setShowMP]       = useState(false);
  const [copyLabel, setCopyLabel] = useState("Copy CA");
  const [loaderGone, setLoaderGone] = useState(false);
  const [visibleTl, setVisibleTl] = useState<Set<number>>(new Set());

  useEffect(() => {
    const tick = () => setUtcTime(new Date().toISOString().replace("T"," ").slice(0,19) + " UTC");
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setTimeout(() => setLoaderGone(true), 4700);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!loaderGone) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) setVisibleTl(p => new Set(p).add(Number(e.target.getAttribute("data-tl"))));
      }),
      { threshold: 0.2 }
    );
    document.querySelectorAll("[data-tl]").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [loaderGone]);

  // 3D card tilt
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".tilt-card");
    const handlers: Array<[HTMLElement, EventListener, EventListener]> = [];
    cards.forEach(card => {
      const onMove = (e: Event) => {
        const me = e as MouseEvent;
        const r = card.getBoundingClientRect();
        const x = ((me.clientX - r.left) / r.width  - 0.5) * 14;
        const y = ((me.clientY - r.top)  / r.height - 0.5) * -14;
        card.style.transform = `perspective(500px) rotateY(${x}deg) rotateX(${y}deg) translateZ(6px)`;
      };
      const onLeave = () => { card.style.transform = ""; };
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      handlers.push([card, onMove as EventListener, onLeave as EventListener]);
    });
    return () => handlers.forEach(([c, m, l]) => { c.removeEventListener("mousemove", m); c.removeEventListener("mouseleave", l); });
  }, [loaderGone]);

  const copyCA = useCallback(() => {
    navigator.clipboard.writeText(CA).catch(() => {});
    setShowMP(true);
    setCopyLabel("Copied!");
    setTimeout(() => { setShowMP(false); setCopyLabel("Copy CA"); }, 3000);
  }, []);

  const TICKER = [
    "CEASEFIRE VIOLATED — DAY 3",
    "MARKETS RESPOND",
    "ANOTHER EMERGENCY CALL",
    "AH SHIT. HERE WE GO AGAIN.",
    `$AGAIN — CA: ${CA}`,
    "WORLD LEADERS ON HOLD",
    "REPORTS EMERGING FROM THE STRAIT",
    "BUY $AGAIN ON SOLANA",
    "HERE WE GO AGAIN.",
  ].join("   //   ");

  const TL = [
    { time: "09:14", badge: "BREAKING", text: "Ceasefire announced. World leaders exhale." },
    { time: "09:36", badge: "UPDATE",   text: "Reports of fresh clashes emerging." },
    { time: "09:42", badge: "MARKETS",  text: "S&P drops. Oil surges. Twitter explodes." },
    { time: "09:45", badge: "LIVE",     text: "$AGAIN goes live on Solana." },
    { time: "09:47", badge: "NOW",      text: "You're reading this." },
  ];

  const badgeClass: Record<string, string> = {
    BREAKING: "badge-breaking", UPDATE: "badge-update", MARKETS: "badge-world",
    LIVE: "badge-live", NOW: "badge-live", ARCHIVE: "badge-world", DEV: "badge-update",
  };

  const ARCHIVE = [
    { img: imgCJFace,    cap: "CJ had a point.",      tag: "ARCHIVE" },
    { img: imgCJMissile, cap: "Perfect timing.",       tag: "LIVE"    },
    { img: imgCJStreet,  cap: "Market mood.",          tag: "ARCHIVE" },
    { img: imgCJBed,     cap: "Every morning.",        tag: "ARCHIVE" },
    { img: imgCJCinema,  cap: "Another notification.", tag: "UPDATE"  },
  ];

  const BG_NAV = "rgba(8,13,24,0.97)";
  const BG_SECTION_A = "linear-gradient(160deg, #0c1428 0%, #0a1120 50%, #101830 100%)";
  const BG_SECTION_B = "linear-gradient(160deg, #0a1020 0%, #0c1528 50%, #0a1020 100%)";

  return (
    <div style={{ background: "#080d18", color: "#f0ead8", minHeight: "100vh", overflowX: "hidden" }}>

      {/* ── GTA Loading Screen ─────────────── */}
      {!loaderGone && (
        <div id="gta-loader">
          <div className="loader-gradient-layer"/>
          <div className="loader-stars"/>
          <div className="loader-sun"/>
          <div className="loader-horizon"/>
          <div className="loader-city-buildings"><CityBuildings/></div>
          <div className="loader-palm-left"><PalmLeft/></div>
          <div className="loader-palm-right"><PalmRight/></div>
          <div className="loader-silhouette"><WomanSilhouette/></div>
          <div className="loader-logo-wrap">
            <div className="loader-logo">$AGAIN</div>
            <div className="loader-subtitle">Here We Go Again &nbsp;·&nbsp; Solana</div>
          </div>
          <div className="loader-bar-wrap" style={{ margin: "0 auto" }}>
            <div className="loader-bar"/>
          </div>
          <div className="loader-tip">Loading situation&hellip;</div>
        </div>
      )}

      {/* ── Global overlays ────────────────── */}
      <div className="scanlines-fixed"/>
      <div className="static-flash"/>

      {/* ── Mission Passed ─────────────────── */}
      {showMP && (
        <div className="mp-overlay">
          <div className="mp-box">
            <div className="mp-shake">
              <span className="mp-star s1"><StarSVG/></span>
              <span className="mp-star s2"><StarSVG/></span>
              <span className="mp-star s3"><StarSVG color="#e91e8c"/></span>
              <span className="mp-star s4"><StarSVG color="#e91e8c"/></span>
              <span className="mp-text-main">mission passed<span className="mp-exclaim">!</span></span>
              <span className="mp-respect">Respect +</span>
              <span className="mp-cash">CONTRACT ADDRESS COPIED</span>
            </div>
          </div>
        </div>
      )}

      {/* ── NAV ────────────────────────────── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 500,
        height: "52px",
        background: BG_NAV,
        borderBottom: "2px solid #c62828",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 20px",
        boxShadow: "0 1px 24px rgba(0,0,0,0.6)",
      }}>
        {/* Logo — white on black */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{
            background: "#000", color: "#fff",
            fontFamily: "'Pricedown', 'Anton', 'Oswald', sans-serif",
            fontSize: "1.6rem",
            padding: "2px 14px 4px",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            lineHeight: 1,
            userSelect: "none",
          }}>$AGAIN</div>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <span className="live-dot"/>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.56rem", color: "#dc2626", letterSpacing: "0.22em", fontWeight: 700 }}>LIVE</span>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <a href={BUY_URL} target="_blank" className="btn-gta btn-orange" style={{ padding: "7px 18px", fontSize: "0.8rem" }}>Buy</a>
          <a href="#chart" className="btn-gta btn-red" style={{ padding: "7px 18px", fontSize: "0.8rem" }}>Chart</a>
          <a href="#archive" className="btn-gta btn-dark" style={{ padding: "7px 18px", fontSize: "0.8rem" }}>Archive</a>
          <a href={X_URL} target="_blank" className="btn-gta btn-pink" style={{ padding: "7px 16px", fontSize: "0.8rem", gap: "5px" }}>
            <SiX size={11}/> X
          </a>
        </div>
      </nav>

      {/* ── Ticker ─────────────────────────── */}
      <div style={{
        position: "fixed", top: "52px", left: 0, right: 0, zIndex: 490,
        height: "28px", overflow: "hidden",
        background: "linear-gradient(90deg, #7f0000 0%, #c62828 100%)",
        borderBottom: "1.5px solid rgba(255,107,0,0.5)",
        display: "flex", alignItems: "center",
      }}>
        <div style={{
          background: "#ff6b00", color: "white",
          fontFamily: "'Pricedown', 'Anton', 'Oswald', sans-serif",
          fontSize: "0.78rem", padding: "0 14px",
          height: "100%", display: "flex", alignItems: "center",
          flexShrink: 0, letterSpacing: "0.06em",
        }}>BREAKING</div>
        <div style={{ flex: 1, overflow: "hidden" }}>
          <div className="ticker-inner" style={{
            fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
            fontWeight: 500, fontSize: "0.72rem",
            color: "rgba(255,255,255,0.92)", letterSpacing: "0.07em",
            textTransform: "uppercase", padding: "0 18px",
          }}>
            {[TICKER, TICKER].map((t, i) => <span key={i} style={{ marginRight: "60px" }}>{t}</span>)}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section style={{
        position: "relative",
        minHeight: "100vh",
        paddingTop: "104px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "radial-gradient(ellipse at 20% 55%, rgba(255,107,0,0.07) 0%, transparent 50%), radial-gradient(ellipse at 80% 30%, rgba(233,30,140,0.05) 0%, transparent 45%), #080d18",
      }}>
        <div className="tac-grid" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}/>

        {/* Missiles */}
        {[
          { cls: "ms1", size: 1.1 },
          { cls: "ms2", size: 0.85 },
          { cls: "ms3", size: 1.4 },
        ].map(m => (
          <div key={m.cls} className={`missile-wrap ${m.cls}`} style={{ position: "absolute", zIndex: 12 }}>
            <div className="missile-body">
              <div style={{ width: "55px", height: "2px", background: "linear-gradient(to left, rgba(255,107,0,0.7), transparent)", position: "absolute", right: "100%", top: "50%", transform: "translateY(-50%)" }}/>
              <MissileSVG size={m.size}/>
            </div>
          </div>
        ))}

        {/* Hero layout */}
        <div style={{
          width: "100%", maxWidth: "1280px", margin: "0 auto",
          padding: "40px 5vw 80px",
          display: "flex", flexWrap: "wrap",
          alignItems: "center", gap: "40px",
        }}>

          {/* ── LEFT: Text ──────────────── */}
          <div style={{ flex: "1 1 380px", position: "relative", zIndex: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <span className="live-dot"/>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", color: "#dc2626", letterSpacing: "0.22em", fontWeight: 700 }}>BREAKING</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", color: "rgba(240,234,216,0.28)", letterSpacing: "0.1em" }}>· Solana · Global</span>
            </div>

            {/* BIG headline — glitch */}
            <div className="glitch-wrap" style={{ marginBottom: "20px" }}>
              <div className="g-main" style={{
                fontFamily: "'Pricedown', 'Anton', 'Oswald', sans-serif",
                fontSize: "clamp(3.5rem, 11vw, 8.5rem)",
                lineHeight: 0.92,
                textTransform: "uppercase",
              }}>
                <div style={{ color: "#f0ead8", WebkitTextStroke: "2px rgba(0,0,0,0.3)", textShadow: "3px 3px 0 rgba(0,0,0,0.5)" }}>THEY SAID</div>
                <div style={{ color: "#f0ead8", WebkitTextStroke: "2px rgba(0,0,0,0.3)", textShadow: "3px 3px 0 rgba(0,0,0,0.5)" }}>IT WAS</div>
                <div style={{ color: "#ff6b00", WebkitTextStroke: "2px rgba(80,30,0,0.5)", textShadow: "3px 3px 0 #6a2800, 0 0 50px rgba(255,107,0,0.35)" }}>OVER.</div>
              </div>
              <div className="g-r" aria-hidden style={{ fontFamily: "'Pricedown', 'Anton', 'Oswald', sans-serif", fontSize: "clamp(3.5rem, 11vw, 8.5rem)", lineHeight: 0.92, textTransform: "uppercase" }}>
                <div>THEY SAID</div><div>IT WAS</div><div style={{ color: "#ff6b00" }}>OVER.</div>
              </div>
              <div className="g-b" aria-hidden style={{ fontFamily: "'Pricedown', 'Anton', 'Oswald', sans-serif", fontSize: "clamp(3.5rem, 11vw, 8.5rem)", lineHeight: 0.92, textTransform: "uppercase" }}>
                <div>THEY SAID</div><div>IT WAS</div><div style={{ color: "#ff6b00" }}>OVER.</div>
              </div>
            </div>

            <p style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, fontSize: "1.25rem", color: "rgba(240,234,216,0.75)", lineHeight: 1.55, maxWidth: "400px", marginBottom: "8px" }}>
              World leaders on an emergency call.<br/>
              Markets reacting to something.<br/>
              <span style={{ color: "#e91e8c", fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "1.3rem" }}>Here we go again.</span>
            </p>

            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "rgba(240,234,216,0.3)", marginBottom: "32px", letterSpacing: "0.05em" }}>
              $AGAIN · Solana · No tax · 1B supply
            </p>

            {/* CTA */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "28px" }}>
              <a href={BUY_URL} target="_blank" className="btn-gta btn-orange" style={{ fontSize: "1rem", padding: "13px 32px" }}>Buy $AGAIN</a>
              <button onClick={() => document.getElementById("chart")?.scrollIntoView({ behavior: "smooth" })} className="btn-gta btn-red" style={{ fontSize: "1rem", padding: "13px 28px" }}>Chart</button>
            </div>

            {/* CA — open, no box */}
            <div style={{ maxWidth: "480px", borderLeft: "3px solid #ff6b00", paddingLeft: "14px", marginBottom: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
                <span className="live-dot"/>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.52rem", color: "rgba(240,234,216,0.28)", letterSpacing: "0.22em" }}>CONTRACT · SOLANA</span>
              </div>
              <div style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.7rem", color: "rgba(240,234,216,0.65)", wordBreak: "break-all", lineHeight: 1.6, marginBottom: "12px" }}>{CA}</div>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <button onClick={copyCA} className="btn-gta btn-orange" style={{ fontSize: "0.82rem", padding: "8px 20px" }}>{copyLabel}</button>
                <a href={X_URL} target="_blank" className="btn-gta btn-pink" style={{ fontSize: "0.82rem", padding: "8px 18px", display: "inline-flex", alignItems: "center", gap: "5px" }}>
                  <SiX size={11}/> Community
                </a>
              </div>
            </div>

            {/* Stats — inline, no pills */}
            <div style={{ display: "flex", gap: "28px", flexWrap: "wrap", paddingTop: "4px" }}>
              {[
                { v: "1B",  l: "Supply",  c: "#ff6b00" },
                { v: "0%",  l: "Tax",     c: "#e91e8c" },
                { v: "SOL", l: "Chain",   c: "#93c5fd" },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: "left" }}>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", color: s.c, lineHeight: 1 }}>{s.v}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.48rem", color: "rgba(107,126,168,0.5)", letterSpacing: "0.22em", textTransform: "uppercase", marginTop: "2px" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Trump Broadcast Composite ── */}
          <div style={{ flex: "1 1 440px", maxWidth: "580px", position: "relative", zIndex: 15 }}>
            {/* Outer broadcast frame */}
            <div className="broadcast-frame" style={{ borderRadius: "0", width: "100%" }}>

              {/* Trump breaking news image — full size */}
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img
                  src={imgBreaking}
                  alt="Breaking News — Ceasefire Violated"
                  style={{ width: "100%", display: "block", objectFit: "cover" }}
                />

                {/* Scanline overlay */}
                <div style={{
                  position: "absolute", inset: 0, zIndex: 5,
                  background: "repeating-linear-gradient(0deg,transparent 0px,transparent 3px,rgba(0,0,0,0.05) 3px,rgba(0,0,0,0.05) 4px)",
                  pointerEvents: "none",
                }}/>

                {/* Top-right LIVE badge */}
                <div style={{ position: "absolute", top: "10px", right: "10px", zIndex: 10, display: "flex", alignItems: "center", gap: "5px", background: "rgba(0,0,0,0.75)", padding: "4px 10px", border: "1px solid rgba(220,38,38,0.5)" }}>
                  <span className="live-dot"/>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.6rem", color: "#dc2626", letterSpacing: "0.22em" }}>LIVE</span>
                </div>

                {/* PIP — CNN Live broadcast screenshot (bottom-left) */}
                <div className="pip-frame" style={{
                  position: "absolute", bottom: "12px", left: "12px", zIndex: 10,
                  width: "38%", boxShadow: "0 4px 20px rgba(0,0,0,0.8)",
                }}>
                  <div className="pip-live-badge">
                    <span className="live-dot" style={{ width: "6px", height: "6px" }}/>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.5rem", color: "#dc2626", letterSpacing: "0.2em" }}>LIVE</span>
                  </div>
                  <img
                    src={imgCNNLive}
                    alt="CNN Live Feed"
                    style={{ width: "100%", display: "block", objectFit: "cover" }}
                  />
                  {/* PIP lower-third */}
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 5,
                    background: "rgba(0,0,0,0.82)", borderTop: "1.5px solid #c62828",
                    padding: "3px 6px",
                  }}>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.45rem", color: "#dc2626", letterSpacing: "0.12em", textTransform: "uppercase" }}>CNN LIVE</div>
                    <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: "0.58rem", color: "white", letterSpacing: "0.04em", textTransform: "uppercase", lineHeight: 1.2 }}>Breaking Trial Coverage</div>
                  </div>
                </div>

                {/* UTC timestamp top-left */}
                <div style={{
                  position: "absolute", top: "10px", left: "10px", zIndex: 10,
                  fontFamily: "'Courier Prime', monospace", fontSize: "0.5rem",
                  color: "rgba(240,234,216,0.4)", background: "rgba(0,0,0,0.6)",
                  padding: "2px 6px",
                }}>
                  {utcTime || "—"}
                </div>
              </div>
            </div>

            {/* External caption bar below frame */}
            <div style={{
              background: "linear-gradient(90deg, #c62828, #7f0000)",
              padding: "10px 16px",
              borderTop: "2px solid rgba(255,107,0,0.6)",
            }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "0.58rem", color: "rgba(255,255,255,0.7)", letterSpacing: "0.2em", marginBottom: "3px" }}>BREAKING NEWS</div>
              <div style={{ fontFamily: "'Pricedown', 'Anton', 'Oswald', sans-serif", fontSize: "1.4rem", color: "white", letterSpacing: "0.04em", textTransform: "uppercase", lineHeight: 1.1 }}>
                CEASEFIRE VIOLATED — SITUATION TENSE
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", marginTop: "4px", textTransform: "uppercase" }}>
                Reports of fresh clashes emerge &nbsp;·&nbsp; Markets in freefall &nbsp;·&nbsp; Here we go again
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SITUATION
      ══════════════════════════════════════ */}
      <section style={{
        position: "relative", padding: "120px 5vw",
        background: BG_SECTION_A,
        clipPath: "polygon(0 60px, 100% 0, 100% calc(100% - 60px), 0 100%)",
        marginTop: "-60px", paddingTop: "140px", paddingBottom: "140px",
        overflow: "hidden",
      }}>
        <div className="tac-grid" style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.6 }}/>
        <div style={{ maxWidth: "740px", position: "relative", zIndex: 5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
            <span className="badge-breaking">BREAKING</span>
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(255,107,0,0.35), transparent)" }}/>
          </div>

          <h2 style={{
            fontFamily: "'Pricedown', 'Anton', 'Oswald', sans-serif",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            lineHeight: 0.92, textTransform: "uppercase",
            marginBottom: "28px",
            color: "#f0ead8", WebkitTextStroke: "1.5px rgba(0,0,0,0.3)",
            textShadow: "3px 3px 0 rgba(0,0,0,0.4)",
          }}>
            HERE WE <span style={{ color: "#ff6b00", textShadow: "3px 3px 0 #6a2800, 0 0 35px rgba(255,107,0,0.3)" }}>GO AGAIN.</span>
          </h2>

          <div style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 500, fontSize: "1.2rem", color: "rgba(240,234,216,0.78)", lineHeight: 1.75, marginBottom: "28px" }}>
            <p style={{ marginBottom: "10px" }}>Everyone has seen that moment.</p>
            <p style={{ marginBottom: "10px" }}>Something finally calms down.</p>
            <p style={{ marginBottom: "10px" }}>Five minutes later everything falls apart.</p>
            <p style={{ color: "#e91e8c", fontFamily: "'Teko', sans-serif", fontWeight: 600, fontSize: "1.55rem", letterSpacing: "0.06em", marginTop: "16px", textTransform: "uppercase" }}>Here We Go Again.</p>
          </div>

          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", color: "rgba(240,234,216,0.5)", lineHeight: 1.7, marginBottom: "32px", borderLeft: "3px solid rgba(255,107,0,0.45)", paddingLeft: "16px" }}>
            $AGAIN is a Solana memecoin built around the world's favorite reaction whenever another breaking news notification arrives. No roadmap. No promises.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href={BUY_URL} target="_blank" className="btn-gta btn-orange">Buy $AGAIN</a>
            <a href={X_URL} target="_blank" className="btn-gta btn-pink" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <SiX size={12}/> Community
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          LIVE TIMELINE
      ══════════════════════════════════════ */}
      <section style={{ padding: "100px 5vw", background: "#080d18", position: "relative", overflow: "hidden" }}>
        <div className="tac-grid" style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }}/>
        <div style={{ maxWidth: "680px", position: "relative", zIndex: 5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "18px" }}>
            <span className="live-dot"/>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", color: "#dc2626", letterSpacing: "0.22em", fontWeight: 700, textTransform: "uppercase" }}>Live Updates</span>
          </div>
          <h2 style={{
            fontFamily: "'Pricedown', 'Anton', 'Oswald', sans-serif",
            fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
            lineHeight: 0.92, textTransform: "uppercase", marginBottom: "44px",
            color: "#f0ead8", WebkitTextStroke: "1.5px rgba(0,0,0,0.3)",
            textShadow: "3px 3px 0 rgba(0,0,0,0.4)",
          }}>
            SITUATION <span style={{ color: "#ff6b00", textShadow: "3px 3px 0 #6a2800" }}>REPORT</span>
          </h2>

          <div style={{ position: "relative", paddingLeft: "28px" }}>
            <svg style={{ position: "absolute", left: "6px", top: 0, height: "100%", width: "3px" }} viewBox="0 0 3 400" preserveAspectRatio="none">
              <defs>
                <linearGradient id="tlG" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#c62828"/>
                  <stop offset="55%" stopColor="rgba(233,30,140,0.4)"/>
                  <stop offset="100%" stopColor="transparent"/>
                </linearGradient>
              </defs>
              <line x1="1.5" y1="0" x2="1.5" y2="400" stroke="url(#tlG)" strokeWidth="2"/>
            </svg>
            {TL.map((item, i) => (
              <div key={i} data-tl={i} style={{
                marginBottom: "24px", position: "relative",
                opacity: visibleTl.has(i) ? 1 : 0,
                transform: visibleTl.has(i) ? "translateY(0)" : "translateY(24px)",
                transition: `all 0.65s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`,
              }}>
                <div style={{
                  position: "absolute", left: "-24px", top: "5px",
                  width: "9px", height: "9px", borderRadius: "50%",
                  background: i === TL.length-1 ? "#ff6b00" : "#dc2626",
                  boxShadow: i === TL.length-1 ? "0 0 8px rgba(255,107,0,0.8)" : "0 0 7px rgba(220,38,38,0.7)",
                }}/>
                <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "3px" }}>
                  <span className={badgeClass[item.badge] || "badge-update"}>{item.badge}</span>
                  <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.62rem", color: "rgba(107,126,168,0.6)", letterSpacing: "0.1em" }}>{item.time} UTC</span>
                </div>
                <div style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, fontSize: "1.15rem", color: "#f0ead8" }}>{item.text}</div>
                {i < TL.length-1 && <div style={{ height: "1px", background: "rgba(255,107,0,0.08)", marginTop: "14px" }}/>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CHART
      ══════════════════════════════════════ */}
      <section id="chart" style={{
        padding: "140px 5vw",
        background: BG_SECTION_A,
        clipPath: "polygon(0 60px, 100% 0, 100% calc(100% - 60px), 0 100%)",
        marginTop: "-60px", paddingTop: "140px", paddingBottom: "140px",
        position: "relative", overflow: "hidden",
      }}>
        <div className="tac-grid" style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }}/>
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
            <span className="live-dot"/>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", color: "#dc2626", letterSpacing: "0.22em", fontWeight: 700, textTransform: "uppercase" }}>Live Feed</span>
          </div>
          <h2 style={{
            fontFamily: "'Pricedown', 'Anton', 'Oswald', sans-serif",
            fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
            lineHeight: 0.92, textTransform: "uppercase", marginBottom: "28px",
            color: "#f0ead8", WebkitTextStroke: "1.5px rgba(0,0,0,0.3)",
            textShadow: "3px 3px 0 rgba(0,0,0,0.4)",
          }}>
            THE <span style={{ color: "#ff6b00", textShadow: "3px 3px 0 #6a2800" }}>CHART</span>
          </h2>

          <div style={{ marginBottom: "22px", overflow: "hidden" }}>
            <div dangerouslySetInnerHTML={{ __html: `<style>#dexscreener-embed{position:relative;width:100%;padding-bottom:125%;}@media(min-width:1400px){#dexscreener-embed{padding-bottom:65%;}}#dexscreener-embed iframe{position:absolute;width:100%;height:100%;top:0;left:0;border:0;}</style><div id="dexscreener-embed"><iframe src="https://dexscreener.com/solana/HTWiEMpyyqRmA4o3jGioqMCtKXN8Ca5WGogUT1PYZP64?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"></iframe></div>` }}/>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <a href={DEX_URL} target="_blank" className="btn-gta btn-red">DexScreener</a>
            <button onClick={copyCA} className="btn-gta btn-orange">{copyLabel}</button>
            <a href={PUMP_URL} target="_blank" className="btn-gta btn-dark">PumpFun</a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ARCHIVE
      ══════════════════════════════════════ */}
      <section id="archive" style={{ padding: "100px 5vw 120px", background: "#080d18", position: "relative", overflow: "hidden" }}>
        <div className="tac-grid" style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none" }}/>
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <span className="badge-breaking">Archive</span>
          </div>
          <h2 style={{
            fontFamily: "'Pricedown', 'Anton', 'Oswald', sans-serif",
            fontSize: "clamp(2.8rem, 8vw, 6.5rem)",
            lineHeight: 0.9, textTransform: "uppercase", marginBottom: "52px",
            color: "#f0ead8", WebkitTextStroke: "2px rgba(0,0,0,0.3)",
            textShadow: "4px 4px 0 rgba(0,0,0,0.4)",
          }}>
            LATEST <span style={{ color: "#ff6b00", textShadow: "4px 4px 0 #6a2800, 0 0 50px rgba(255,107,0,0.25)" }}>EVIDENCE</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px" }}>
            {ARCHIVE.map((item, i) => (
              <div key={i} className="tilt-card" style={{ overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", top: "10px", left: "10px", zIndex: 3 }}>
                  <span className={badgeClass[item.tag] || "badge-update"}>{item.tag}</span>
                </div>
                <div style={{ aspectRatio: "4/3", overflow: "hidden", background: "#06080f" }}>
                  <img
                    src={item.img} alt={item.cap}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.6s ease", filter: "contrast(1.05) saturate(0.85)" }}
                    onMouseOver={e => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>
                <p style={{ fontFamily: "'Teko', sans-serif", fontWeight: 500, fontSize: "1.1rem", color: "rgba(240,234,216,0.55)", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: "10px", paddingLeft: "2px" }}>{item.cap}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HOW TO BUY
      ══════════════════════════════════════ */}
      <section style={{
        padding: "140px 5vw 160px",
        background: BG_SECTION_B,
        clipPath: "polygon(0 60px, 100% 0, 100% calc(100% - 60px), 0 100%)",
        marginTop: "-60px", position: "relative", overflow: "hidden",
      }}>
        <div className="tac-grid" style={{ position: "absolute", inset: 0, opacity: 0.4, pointerEvents: "none" }}/>
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <span className="badge-update">The Play</span>
          </div>
          <h2 style={{
            fontFamily: "'Pricedown', 'Anton', 'Oswald', sans-serif",
            fontSize: "clamp(2.2rem, 6vw, 5rem)",
            lineHeight: 0.92, textTransform: "uppercase", marginBottom: "52px",
            color: "#f0ead8", WebkitTextStroke: "1.5px rgba(0,0,0,0.3)",
            textShadow: "3px 3px 0 rgba(0,0,0,0.4)",
          }}>
            <div>GET IN BEFORE</div>
            <div style={{ color: "#ff6b00", textShadow: "3px 3px 0 #6a2800, 0 0 40px rgba(255,107,0,0.3)" }}>IT GOES AGAIN.</div>
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              { n: "01", title: "Get a Wallet",  body: "Download Phantom or Solflare. Save your seed phrase.",
                links: [{ l: "Phantom", h: "https://phantom.app/" }, { l: "Solflare", h: "https://solflare.com/" }], c: "#ff6b00" },
              { n: "02", title: "Get SOL",       body: "Fund your wallet with SOL from any exchange.", links: [], c: "#e91e8c" },
              { n: "03", title: "Hit Jupiter",   body: "Paste the contract, swap SOL for $AGAIN.",
                links: [{ l: "Open Jupiter", h: BUY_URL }], c: "#93c5fd" },
              { n: "04", title: "Hold.",          body: "Welcome back. Here we go again.", links: [], c: "#dc2626" },
            ].map((step, i) => (
              <div key={i} style={{
                display: "flex", gap: "24px", alignItems: "flex-start",
                padding: "28px 0",
                borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none",
              }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "3.5rem", color: step.c, lineHeight: 1, opacity: 0.35, flexShrink: 0, width: "60px", textAlign: "right" }}>{step.n}</div>
                <div style={{ flex: 1, paddingTop: "4px" }}>
                  <div style={{ fontFamily: "'Pricedown', 'Anton', 'Oswald', sans-serif", fontSize: "1.8rem", color: step.c, textTransform: "uppercase", lineHeight: 1, letterSpacing: "0.03em", marginBottom: "8px" }}>{step.title}</div>
                  <p style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 500, fontSize: "1rem", color: "rgba(240,234,216,0.55)", lineHeight: 1.6, marginBottom: step.links.length ? "14px" : 0 }}>{step.body}</p>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    {step.links.map((lk, j) => (
                      <a key={j} href={lk.h} target="_blank" className="btn-gta btn-orange" style={{ fontSize: "0.75rem", padding: "7px 16px" }}>{lk.l}</a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOOTER
      ══════════════════════════════════════ */}
      <footer style={{
        background: "linear-gradient(180deg, #080d18 0%, #05080f 100%)",
        borderTop: "1px solid rgba(255,107,0,0.18)",
        padding: "60px 5vw 36px",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, #c62828, #ff6b00, #e91e8c, transparent)" }}/>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "36px", marginBottom: "44px" }}>
            <div style={{ maxWidth: "300px" }}>
              {/* Footer logo — white on black */}
              <div style={{
                display: "inline-block",
                background: "#000", color: "#fff",
                fontFamily: "'Pricedown', 'Anton', 'Oswald', sans-serif",
                fontSize: "2.8rem", padding: "3px 18px 6px",
                letterSpacing: "0.05em", textTransform: "uppercase",
                lineHeight: 1, marginBottom: "14px",
              }}>$AGAIN</div>
              <p style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 500, fontSize: "0.95rem", color: "rgba(240,234,216,0.45)", lineHeight: 1.7, marginBottom: "18px" }}>
                Another headline.<br/>Another day.<br/>Here we go again.
              </p>
              <a href={X_URL} target="_blank" className="btn-gta btn-pink" style={{ fontSize: "0.8rem", padding: "8px 18px", display: "inline-flex", alignItems: "center", gap: "5px" }}>
                <SiX size={11}/> X Community
              </a>
            </div>

            <div style={{ display: "flex", gap: "44px" }}>
              <div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.56rem", color: "rgba(107,126,168,0.4)", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "18px" }}>Links</div>
                {[
                  { l: "Contract",    href: undefined, action: copyCA },
                  { l: "Jupiter",     href: BUY_URL },
                  { l: "PumpFun",     href: PUMP_URL },
                  { l: "DexScreener", href: DEX_URL },
                ].map((lk, i) => lk.href ? (
                  <a key={i} href={lk.href} target="_blank" style={{
                    display: "block", marginBottom: "12px",
                    fontFamily: "'Oswald', sans-serif", fontWeight: 400, fontSize: "0.95rem",
                    color: "rgba(240,234,216,0.45)", textDecoration: "none",
                    letterSpacing: "0.05em", textTransform: "uppercase",
                    transition: "color 0.2s",
                  }}
                    onMouseOver={e => (e.currentTarget.style.color = "#ff6b00")}
                    onMouseOut={e => (e.currentTarget.style.color = "rgba(240,234,216,0.45)")}
                  >{lk.l}</a>
                ) : (
                  <button key={i} onClick={lk.action} style={{
                    display: "block", marginBottom: "12px", width: "100%", textAlign: "left",
                    fontFamily: "'Oswald', sans-serif", fontWeight: 400, fontSize: "0.95rem",
                    color: "rgba(240,234,216,0.45)", background: "none", border: "none", cursor: "pointer",
                    letterSpacing: "0.05em", textTransform: "uppercase", padding: 0,
                    transition: "color 0.2s",
                  }}
                    onMouseOver={e => (e.currentTarget.style.color = "#ff6b00")}
                    onMouseOut={e => (e.currentTarget.style.color = "rgba(240,234,216,0.45)")}
                  >{lk.l}</button>
                ))}
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,107,0,0.08)", paddingTop: "22px" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", color: "rgba(107,126,168,0.3)", maxWidth: "500px", lineHeight: 1.7, marginBottom: "8px" }}>
              $AGAIN is a meme token with no intrinsic value or expectation of financial return. Nothing here is financial advice. DYOR.
            </p>
            <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.55rem", color: "rgba(107,126,168,0.2)" }}>
              © 2026 $AGAIN · Solana · Ah Shit.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
