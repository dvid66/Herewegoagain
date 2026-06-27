import { useState, useEffect, useRef } from "react";
import { SiX } from "react-icons/si";

import imgCJFace from "@assets/file_00000000ae3071f4996686dabbcc28d6_1782525794223.png";
import imgCJMissile from "@assets/file_00000000c95471f4a81c4fc202c0ef0d_1782525794267.png";
import imgCJStreet from "@assets/e3ff96bf9d25d9f6ce728bb8c982186a_1782525764183.jpg";
import imgCJBed from "@assets/cfb96f4ef5ed21e5f5f2a141ca49fd9a_1782525764435.jpg";
import imgCJCinema from "@assets/700dcb0e29ca55dbe9ab6cdff4e04727_1782525764494.jpg";
import imgCJBreaking from "@assets/1782523850458_1782525794092.png";

const CA = "DR4nHueGFV6M9D3sEACyWwvt4ihhGKfQG3tyYKfXpump";
const BUY_URL = "https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=DR4nHueGFV6M9D3sEACyWwvt4ihhGKfQG3tyYKfXpump";
const DEX_URL = "https://dexscreener.com/solana/DR4nHueGFV6M9D3sEACyWwvt4ihhGKfQG3tyYKfXpump";
const PUMP_URL = "https://pump.fun/coin/DR4nHueGFV6M9D3sEACyWwvt4ihhGKfQG3tyYKfXpump";
const X_URL = "https://x.com/i/communities/2038639985490887031";

const BREAKING_HEADLINES = [
  "🚨 BREAKING — Another ceasefire announced.",
  "📡 UPDATE — New reports from the Strait of Hormuz.",
  "📊 LIVE — Markets react.",
  "⚠️ BREAKING — Here we go again.",
  "🚀 SOLANA — $AGAIN now live.",
  "🔴 DEVELOPING — Situation unclear.",
];

export default function Home() {
  const [utcTime, setUtcTime] = useState("");
  const [showMission, setShowMission] = useState(false);
  const [copiedLabel, setCopiedLabel] = useState("COPY CA");
  const [loadingDone, setLoadingDone] = useState(false);
  const [headlineIdx, setHeadlineIdx] = useState(0);
  const [visibleEntries, setVisibleEntries] = useState<Set<number>>(new Set());
  const tlRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setInterval(() => {
      const now = new Date();
      setUtcTime(
        now.toISOString().substring(11, 19) + " UTC"
      );
    }, 1000);
    setUtcTime(new Date().toISOString().substring(11, 19) + " UTC");
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoadingDone(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setHeadlineIdx((i) => (i + 1) % BREAKING_HEADLINES.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number(e.target.getAttribute("data-index"));
            setVisibleEntries((prev) => new Set(prev).add(idx));
          }
        });
      },
      { threshold: 0.15 }
    );
    const els = document.querySelectorAll(".tl-item");
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [loadingDone]);

  const copyCA = () => {
    navigator.clipboard.writeText(CA).catch(() => {});
    setShowMission(true);
    setCopiedLabel("COPIED!");
    setTimeout(() => {
      setShowMission(false);
      setCopiedLabel("COPY CA");
    }, 2600);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const TIMELINE = [
    { time: "09:14 UTC", label: "BREAKING", text: "Ceasefire announced." },
    { time: "09:36 UTC", label: "UPDATE", text: "Another incident reported." },
    { time: "09:42 UTC", label: "MARKETS", text: "Markets react." },
    { time: "09:45 UTC", label: "LIVE", text: "$AGAIN launches on Solana." },
    { time: "09:47 UTC", label: "DEVELOPING", text: "You're reading this." },
  ];

  const ARCHIVE = [
    { img: imgCJFace, caption: "CJ had a point.", cam: "CAM 01", tag: "ARCHIVE", ts: "09:14" },
    { img: imgCJMissile, caption: "Perfect timing.", cam: "FEED A", tag: "LIVE", ts: "09:22" },
    { img: imgCJStreet, caption: "Market mood.", cam: "CAM 02", tag: "UPDATE", ts: "09:35" },
    { img: imgCJBed, caption: "Breaking again.", cam: "FEED B", tag: "BREAKING", ts: "09:41" },
    { img: imgCJCinema, caption: "Another notification.", cam: "CAM 03", tag: "WORLD", ts: "09:43" },
    { img: imgCJBreaking, caption: "Nothing ever changes.", cam: "FEED C", tag: "DEVELOPING", ts: "09:47" },
  ];

  const TAG_COLORS: Record<string, string> = {
    ARCHIVE: "bt-world",
    LIVE: "bt-live",
    UPDATE: "bt-update",
    BREAKING: "bt-breaking",
    WORLD: "bt-world",
    DEVELOPING: "bt-developing",
    MARKETS: "bt-markets",
  };

  return (
    <div className="bg-master text-foreground relative min-h-screen" style={{ overflowX: "hidden" }}>

      {/* GTA LOADING SCREEN */}
      {!loadingDone && (
        <div id="gta-loading">
          <div className="loading-silhouette-wrapper">
            {/* Trump silhouette — CSS art */}
            <div className="loading-silhouette-trump" style={{ marginRight: "-20px", zIndex: 1 }}>
              <svg width="160" height="300" viewBox="0 0 160 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Body silhouette */}
                <ellipse cx="80" cy="50" rx="32" ry="36" fill="#1a0a2e"/>
                {/* Hair sweep */}
                <path d="M50 30 Q48 10 80 15 Q112 10 110 30 Q115 20 105 18 Q95 5 80 8 Q65 5 55 18 Q45 20 50 30Z" fill="#2d1054"/>
                {/* Suit body */}
                <path d="M40 85 Q45 75 60 80 L80 90 L100 80 Q115 75 120 85 L130 200 L30 200 Z" fill="#1a0a2e"/>
                {/* Tie */}
                <path d="M75 85 L72 130 L80 140 L88 130 L85 85 Z" fill="#cc0000"/>
                {/* Legs */}
                <rect x="40" y="195" width="35" height="100" rx="4" fill="#1a0a2e"/>
                <rect x="85" y="195" width="35" height="100" rx="4" fill="#1a0a2e"/>
                {/* Arms at sides */}
                <path d="M40 90 L25 170 L38 172 L50 115 Z" fill="#1a0a2e"/>
                <path d="M120 90 L135 170 L122 172 L110 115 Z" fill="#1a0a2e"/>
                {/* Phone in hand */}
                <rect x="120" y="145" width="18" height="28" rx="3" fill="#2d1054" stroke="#8b5cf6" strokeWidth="1"/>
                {/* Face glow */}
                <ellipse cx="80" cy="48" rx="28" ry="32" fill="#2d1054" opacity="0.7"/>
              </svg>
            </div>
            {/* CJ silhouette */}
            <div className="loading-silhouette-cj" style={{ zIndex: 2 }}>
              <svg width="140" height="300" viewBox="0 0 140 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Head */}
                <circle cx="70" cy="45" r="30" fill="#1a0a2e"/>
                {/* Cap */}
                <path d="M40 38 Q45 20 70 22 Q95 20 100 38 L104 36 L36 36 Z" fill="#2d1054"/>
                <rect x="36" y="35" width="68" height="8" rx="2" fill="#2d1054"/>
                {/* Body - tee */}
                <path d="M35 75 L30 80 L25 160 L45 165 L50 110 L70 115 L90 110 L95 165 L115 160 L110 80 L105 75 Z" fill="#1a0a2e"/>
                {/* Arms raised - hand on head */}
                <path d="M35 80 Q20 70 15 55 Q12 45 25 42 Q35 40 40 58 L40 80 Z" fill="#1a0a2e"/>
                {/* Hand on head */}
                <ellipse cx="22" cy="40" rx="10" ry="7" fill="#2d1054"/>
                {/* Right arm normal */}
                <path d="M105 80 L120 130 L108 135 L100 90 Z" fill="#1a0a2e"/>
                {/* Legs */}
                <path d="M45 160 L40 290 L60 290 L70 200 L80 290 L100 290 L95 160 Z" fill="#1a0a2e"/>
                {/* Shoes */}
                <ellipse cx="50" cy="290" rx="16" ry="8" fill="#2d1054"/>
                <ellipse cx="90" cy="290" rx="16" ry="8" fill="#2d1054"/>
              </svg>
            </div>
          </div>
          <div className="loading-title">$AGAIN</div>
          <div className="loading-subtitle">Here We Go Again · Solana</div>
          <div className="loading-bar-wrap">
            <div className="loading-bar-fill" />
          </div>
          <div className="loading-tip">Loading situation... please wait</div>
        </div>
      )}

      {/* SCANLINES + STATIC */}
      <div className="scanlines" />
      <div className="static-flash" />

      {/* MISSION PASSED OVERLAY */}
      {showMission && (
        <div className="mission-passed-overlay">
          <div className="mission-passed-card">
            <span className="mission-star">⭐</span>
            <span className="mission-star">⭐</span>
            <span className="mission-star">⭐</span>
            <span className="mission-star">⭐</span>
            <div className="mission-passed-text">MISSION PASSED!</div>
            <div style={{ fontSize: "2rem", margin: "6px 0" }}>💰</div>
            <div className="mission-passed-sub">Contract address copied</div>
            <div style={{
              fontFamily: "'Courier Prime', monospace",
              fontSize: "0.55rem",
              color: "rgba(245,196,0,0.6)",
              marginTop: "8px",
              letterSpacing: "0.1em"
            }}>+ $AGAIN ACQUIRED</div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════
          FIXED NAV
      ═══════════════════════════════════════ */}
      <nav className="nav-glow fixed top-0 w-full z-40 flex items-center justify-between px-4 h-14"
        style={{
          background: "linear-gradient(180deg, rgba(7,6,14,0.97) 0%, rgba(13,9,24,0.95) 100%)",
          borderBottom: "2px solid #cc0000",
        }}>
        {/* Left: logo + live */}
        <div className="flex items-center gap-3">
          <span style={{
            fontFamily: "'Teko', sans-serif",
            fontWeight: 700,
            fontSize: "1.8rem",
            color: "#f5c400",
            letterSpacing: "0.05em",
            textShadow: "0 0 20px rgba(245,196,0,0.4)",
            lineHeight: 1,
          }}>$AGAIN</span>
          <div className="flex items-center gap-1.5">
            <span className="live-dot" />
            <span style={{
              fontFamily: "'Courier Prime', monospace",
              fontSize: "0.6rem",
              fontWeight: 700,
              color: "#cc0000",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}>LIVE</span>
          </div>
        </div>

        {/* Right: nav links */}
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2">
            <a href={BUY_URL} target="_blank" className="nav-pill nav-pill-buy">BUY</a>
            <button onClick={() => scrollTo("chart")} className="nav-pill nav-pill-chart">CHART</button>
            <a href="#archive" className="nav-pill nav-pill-archive">ARCHIVE</a>
            <a href={X_URL} target="_blank" className="nav-pill nav-pill-x">
              <SiX size={10} /> COMMUNITY
            </a>
          </div>
          {/* Mobile: just buy */}
          <a href={BUY_URL} target="_blank" className="md:hidden nav-pill nav-pill-buy text-xs">BUY</a>

          <div className="flex items-center gap-3 ml-3 pl-3" style={{ borderLeft: "1px solid rgba(139,0,255,0.2)" }}>
            <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.65rem", color: "rgba(240,237,224,0.4)", letterSpacing: "0.08em" }} className="hidden md:inline">
              {utcTime}
            </span>
            <div className="signal-bars">
              <span /><span /><span /><span />
            </div>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════
          BREAKING NEWS TICKER
      ═══════════════════════════════════════ */}
      <div className="news-strap fixed top-14 w-full z-30 overflow-hidden" style={{ height: "28px", display: "flex", alignItems: "center" }}>
        {/* BREAKING label */}
        <div style={{
          background: "#f5c400",
          color: "#07060e",
          fontFamily: "'Teko', sans-serif",
          fontWeight: 700,
          fontSize: "0.85rem",
          padding: "0 14px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          letterSpacing: "0.1em",
          flexShrink: 0,
          zIndex: 2,
        }}>
          BREAKING
        </div>
        <div style={{ overflow: "hidden", flex: 1 }}>
          <div className="ticker-track" style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 700,
            fontSize: "0.8rem",
            color: "white",
            letterSpacing: "0.08em",
            whiteSpace: "nowrap",
          }}>
            {[1,2].map((_, ri) => (
              <span key={ri}>
                {[
                  "🚨 BREAKING — Another ceasefire announced",
                  "📡 UPDATE — New reports from the Strait of Hormuz",
                  "📊 LIVE — Markets react",
                  "⚠️ BREAKING — Here we go again",
                  "🚀 $AGAIN now live on Solana",
                  `CONTRACT: ${CA}`,
                  "🔴 DEVELOPING — Situation unclear",
                  "🚨 AH SHIT. HERE WE GO AGAIN.",
                ].map((t, i) => (
                  <span key={i} style={{ margin: "0 28px" }}>
                    {t} <span style={{ color: "#f5c400", opacity: 0.5 }}>·</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-5 md:px-12 lg:px-20 overflow-hidden"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, rgba(139,0,255,0.12) 0%, transparent 55%), radial-gradient(ellipse at 70% 30%, rgba(204,0,0,0.06) 0%, transparent 45%), #07060e",
        }}
      >
        {/* Animated missiles */}
        <div className="missile-anim m1" style={{ fontSize: "2.5rem" }}>
          🚀<div className="trail" style={{ width: "100px" }} />
        </div>
        <div className="missile-anim m2" style={{ fontSize: "2rem" }}>
          🚀<div className="trail" style={{ width: "70px" }} />
        </div>
        <div className="missile-anim m3" style={{ fontSize: "3rem" }}>
          🚀<div className="trail" style={{ width: "130px" }} />
        </div>

        {/* Corner broadcast tags */}
        <div className="corner-tag" style={{ position: "absolute", top: "80px", right: "20px" }}>CAM 01 · FEED A</div>
        <div className="corner-tag" style={{ position: "absolute", top: "80px", left: "20px" }}>26.2°N 56.3°E</div>

        {/* Tactical coordinate grid overlay */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(100,30,180,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(100,30,180,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />

        {/* Ship scene — animated */}
        <div style={{ position: "absolute", bottom: "60px", right: "40px", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px", opacity: 0.5 }}>
          <div className="ship-scene">
            <div className="missile-hit">🚀</div>
            <div className="ship-emoji">🚢</div>
            <div className="explosion-emoji">💥</div>
          </div>
          <span className="corner-tag">STRAIT OF HORMUZ</span>
        </div>

        <div className="relative z-10 max-w-4xl">
          {/* Live lower-third */}
          <div className="lower-third mb-6 inline-flex">
            <div className="lower-third-label">⚠ SOLANA · BREAKING NEWS · STRAIT OF HORMUZ</div>
            <div className="lower-third-text">$AGAIN — HERE WE GO AGAIN</div>
          </div>

          {/* Main headline */}
          <div className="mb-2">
            <div style={{
              fontFamily: "'Teko', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(4.5rem, 14vw, 10rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.02em",
              color: "#f0ede0",
              textTransform: "uppercase",
            }} className="glitch-text" data-text="AH SHIT.">
              AH SHIT.
            </div>
            <div style={{
              fontFamily: "'Teko', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(4.5rem, 14vw, 10rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.02em",
              color: "#f0ede0",
              textTransform: "uppercase",
            }}>
              HERE WE
            </div>
            <div style={{
              fontFamily: "'Teko', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(4.5rem, 14vw, 10rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.02em",
              color: "#f5c400",
              textTransform: "uppercase",
              textShadow: "0 0 60px rgba(245,196,0,0.35)",
            }}>
              GO AGAIN.
            </div>
          </div>

          {/* CJ figure + subline */}
          <div className="flex items-center gap-6 my-8">
            <div className="cj-figure">
              <span className="cj-hand">🤦</span>
            </div>
            <div>
              <p style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 600,
                fontSize: "1.25rem",
                color: "#f0ede0",
                lineHeight: 1.4,
                maxWidth: "380px",
              }}>
                Ceasefire lasted about five minutes.<br/>
                Another headline. Another panic.<br/>
                <span style={{ color: "#f5c400" }}>Here we go again.</span>
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            <a href={BUY_URL} target="_blank" className="btn-gta-yellow">BUY NOW</a>
            <button onClick={() => scrollTo("chart")} className="btn-gta-red">OPEN CHART</button>
          </div>

          {/* Contract address */}
          <div className="contract-box mb-6" style={{ maxWidth: "520px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
              <span className="broadcast-tag bt-live">LIVE</span>
              <span style={{
                fontFamily: "'Courier Prime', monospace",
                fontSize: "0.6rem",
                color: "rgba(240,237,224,0.4)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}>CONTRACT ADDRESS</span>
            </div>
            <div style={{
              fontFamily: "'Courier Prime', monospace",
              fontSize: "0.8rem",
              color: "#f0ede0",
              wordBreak: "break-all",
              lineHeight: 1.4,
              marginBottom: "12px",
            }}>
              {CA}
            </div>
            <button onClick={copyCA} className="btn-gta-orange" style={{ fontSize: "1rem", padding: "7px 24px" }}>
              {copiedLabel}
            </button>
          </div>

          {/* Community link */}
          <a href={X_URL} target="_blank" className="nav-pill nav-pill-x" style={{ fontSize: "0.85rem" }}>
            <SiX size={12} /> 𝕏 COMMUNITY
          </a>

          {/* Token stats */}
          <div className="flex flex-wrap gap-3 mt-8">
            <div className="stat-card">
              <div style={{ fontFamily: "'Teko', sans-serif", fontWeight: 700, fontSize: "1.8rem", color: "#f5c400", lineHeight: 1 }}>1B</div>
              <div style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.55rem", color: "rgba(138,154,106,0.8)", letterSpacing: "0.2em", textTransform: "uppercase" }}>SUPPLY</div>
            </div>
            <div className="stat-card">
              <div style={{ fontFamily: "'Teko', sans-serif", fontWeight: 700, fontSize: "1.8rem", color: "#39ff14", lineHeight: 1 }}>0%</div>
              <div style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.55rem", color: "rgba(138,154,106,0.8)", letterSpacing: "0.2em", textTransform: "uppercase" }}>TAX</div>
            </div>
            <div className="stat-card">
              <div style={{ fontFamily: "'Teko', sans-serif", fontWeight: 700, fontSize: "1.8rem", color: "#9b5cf6", lineHeight: 1 }}>◎</div>
              <div style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.55rem", color: "rgba(138,154,106,0.8)", letterSpacing: "0.2em", textTransform: "uppercase" }}>SOLANA</div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════════════════════════════
          THE SITUATION
      ═══════════════════════════════════════ */}
      <section className="section-purple py-24 px-5 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="flex-1">
              {/* Broadcast tag */}
              <div className="flex items-center gap-2 mb-6">
                <span className="broadcast-tag bt-breaking">BREAKING</span>
                <span className="broadcast-tag bt-world">WORLD</span>
                <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.6rem", color: "rgba(138,154,106,0.6)", letterSpacing: "0.15em" }}>THE SITUATION</span>
              </div>

              <h2 style={{
                fontFamily: "'Teko', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(3rem, 8vw, 6rem)",
                lineHeight: 0.9,
                textTransform: "uppercase",
                marginBottom: "32px",
              }}>
                <span style={{ color: "#f0ede0" }}>HERE WE </span>
                <span style={{ color: "#f5c400", textShadow: "0 0 40px rgba(245,196,0,0.3)" }}>GO AGAIN.</span>
              </h2>

              <div style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 500,
                fontSize: "1.2rem",
                color: "#f0ede0",
                lineHeight: 1.7,
                maxWidth: "480px",
              }}>
                <p style={{ marginBottom: "16px" }}>Everyone has seen that moment.</p>
                <p style={{ marginBottom: "16px" }}>Something finally calms down.</p>
                <p style={{ marginBottom: "16px" }}>Five minutes later everything falls apart.</p>
                <p style={{ marginBottom: "24px", color: "#f5c400", fontWeight: 700, fontSize: "1.4rem" }}>
                  Here We Go Again.
                </p>
                <p style={{ color: "rgba(240,237,224,0.7)" }}>
                  $AGAIN is a Solana memecoin built around the world's favorite reaction whenever another breaking news notification arrives.
                </p>
              </div>

              <div style={{
                marginTop: "32px",
                borderLeft: "4px solid #ff6b00",
                paddingLeft: "16px",
                background: "linear-gradient(90deg, rgba(255,107,0,0.06), transparent)",
                padding: "12px 16px",
              }}>
                <div style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.6rem", color: "#ff6b00", letterSpacing: "0.2em", marginBottom: "6px" }}>UPDATE</div>
                <p style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, fontSize: "1rem", color: "rgba(240,237,224,0.8)" }}>
                  No roadmap. No promises. Just another day on the internet.
                </p>
              </div>
            </div>

            {/* Broadcast panel */}
            <div style={{
              width: "280px",
              flexShrink: 0,
              background: "linear-gradient(135deg, rgba(139,0,255,0.1), rgba(204,0,0,0.05))",
              border: "1px solid rgba(139,0,255,0.3)",
              borderRadius: "4px",
              padding: "20px",
            }}>
              {/* Radar */}
              <div className="flex items-center justify-between mb-4">
                <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.65rem", color: "rgba(240,237,224,0.5)", letterSpacing: "0.15em", textTransform: "uppercase" }}>RADAR · LIVE</span>
                <div className="radar-container">
                  <div className="radar-ring" />
                  <div className="radar-line" />
                  <div className="radar-ping" />
                </div>
              </div>

              <div className="section-divider mb-4" />

              {[
                { label: "STATUS", value: "ACTIVE", color: "#39ff14" },
                { label: "CHAIN", value: "SOLANA", color: "#9b5cf6" },
                { label: "SUPPLY", value: "1,000,000,000", color: "#f5c400" },
                { label: "TAX", value: "0%", color: "#39ff14" },
                { label: "CONTRACT", value: CA.slice(0,8) + "...", color: "#ff6b00" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center py-2" style={{ borderBottom: "1px solid rgba(139,0,255,0.1)" }}>
                  <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.6rem", color: "rgba(138,154,106,0.7)", letterSpacing: "0.15em", textTransform: "uppercase" }}>{item.label}</span>
                  <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.7rem", color: item.color, fontWeight: 700 }}>{item.value}</span>
                </div>
              ))}

              <div className="section-divider mt-4 mb-4" />

              <div style={{
                background: "rgba(57,255,20,0.05)",
                border: "1px solid rgba(57,255,20,0.2)",
                padding: "8px 10px",
                borderRadius: "2px",
                fontFamily: "'Courier Prime', monospace",
                fontSize: "0.6rem",
                color: "rgba(57,255,20,0.7)",
                letterSpacing: "0.1em",
                lineHeight: 1.6,
              }}>
                ▶ FEED ACTIVE<br/>
                ▶ CHAIN: SOLANA<br/>
                ▶ SIGNAL: STRONG<br/>
                ▶ UTC {utcTime}
              </div>

              <a href={BUY_URL} target="_blank" className="btn-gta-yellow" style={{ width: "100%", marginTop: "16px", fontSize: "1.1rem", padding: "10px 0", display: "block" }}>
                BUY NOW
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════════════════════════════
          LIVE TIMELINE
      ═══════════════════════════════════════ */}
      <section className="py-24 px-5 md:px-12 lg:px-20 relative z-10" ref={tlRef}>
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="live-dot" />
            <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.65rem", color: "#cc0000", letterSpacing: "0.25em", fontWeight: 700, textTransform: "uppercase" }}>LIVE UPDATES</span>
            <span className="broadcast-tag bt-developing" style={{ marginLeft: "8px" }}>DEVELOPING</span>
          </div>

          <h2 style={{
            fontFamily: "'Teko', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            lineHeight: 0.9,
            textTransform: "uppercase",
            marginBottom: "48px",
          }}>
            <span style={{ color: "#f0ede0" }}>SITUATION </span>
            <span style={{ color: "#f5c400" }}>REPORT</span>
          </h2>

          <div style={{ position: "relative", paddingLeft: "28px" }}>
            <div style={{
              position: "absolute", left: "4px", top: 0, bottom: 0,
              width: "1px",
              background: "linear-gradient(180deg, #cc0000, rgba(139,0,255,0.5), transparent)",
            }} />

            {TIMELINE.map((item, i) => (
              <div
                key={i}
                data-index={i}
                className={`tl-item ${visibleEntries.has(i) ? "visible" : ""}`}
                style={{
                  marginBottom: "28px",
                  opacity: visibleEntries.has(i) ? 1 : 0,
                  transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s`,
                  transform: visibleEntries.has(i) ? "translateY(0)" : "translateY(30px)",
                  position: "relative",
                }}
              >
                <div style={{
                  position: "absolute",
                  left: "-24px",
                  top: "6px",
                  width: "8px", height: "8px",
                  borderRadius: "50%",
                  background: i === TIMELINE.length - 1 ? "#f5c400" : "#cc0000",
                  boxShadow: i === TIMELINE.length - 1 ? "0 0 8px rgba(245,196,0,0.8)" : "0 0 6px rgba(204,0,0,0.6)",
                }} />
                <div className="flex items-center gap-3 mb-1">
                  <span className={`broadcast-tag ${TAG_COLORS[item.label] || "bt-update"}`}>{item.label}</span>
                  <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.7rem", color: "rgba(138,154,106,0.6)", letterSpacing: "0.1em" }}>{item.time}</span>
                </div>
                <div style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 600,
                  fontSize: "1.25rem",
                  color: "#f0ede0",
                }}>{item.text}</div>
                {i < TIMELINE.length - 1 && (
                  <div style={{ height: "1px", background: "rgba(139,0,255,0.1)", marginTop: "16px" }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════════════════════════════
          LIVE CHART
      ═══════════════════════════════════════ */}
      <section id="chart" className="section-purple py-24 px-5 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="live-dot" />
            <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.65rem", color: "#cc0000", letterSpacing: "0.25em", fontWeight: 700, textTransform: "uppercase" }}>LIVE FEED</span>
            <span className="broadcast-tag bt-markets">MARKETS</span>
            <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.6rem", color: "rgba(138,154,106,0.5)", letterSpacing: "0.1em", marginLeft: "auto" }}>UTC +0</span>
          </div>

          <h2 style={{
            fontFamily: "'Teko', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            lineHeight: 0.9,
            textTransform: "uppercase",
            marginBottom: "32px",
          }}>
            <span style={{ color: "#f0ede0" }}>THE </span>
            <span style={{ color: "#f5c400" }}>CHART</span>
          </h2>

          {/* Chart frame */}
          <div style={{
            position: "relative",
            borderRadius: "6px",
            overflow: "hidden",
            border: "1px solid rgba(255,107,0,0.5)",
            boxShadow: "0 0 30px rgba(255,107,0,0.15), 0 0 80px rgba(139,0,255,0.08)",
            background: "#0a080f",
            marginBottom: "24px",
          }}>
            {/* Frame header */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "8px 14px",
              background: "rgba(0,0,0,0.5)",
              borderBottom: "1px solid rgba(255,107,0,0.2)",
            }}>
              <div className="flex items-center gap-2">
                <span className="broadcast-tag bt-live">LIVE MARKET</span>
                <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.6rem", color: "rgba(240,237,224,0.4)" }}>$AGAIN / USD</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="corner-tag">CAM 02</span>
                <div className="radar-container" style={{ width: "28px", height: "28px" }}>
                  <div className="radar-line" />
                  <div className="radar-ping" />
                </div>
              </div>
            </div>

            <div dangerouslySetInnerHTML={{__html: `<style>#dexscreener-embed{position:relative;width:100%;padding-bottom:125%;}@media(min-width:1400px){#dexscreener-embed{padding-bottom:65%;}}#dexscreener-embed iframe{position:absolute;width:100%;height:100%;top:0;left:0;border:0;}</style><div id="dexscreener-embed"><iframe src="https://dexscreener.com/solana/HTWiEMpyyqRmA4o3jGioqMCtKXN8Ca5WGogUT1PYZP64?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"></iframe></div>`}} />
          </div>

          <div className="flex flex-wrap gap-3 relative">
            <a href={DEX_URL} target="_blank" className="btn-gta-red">OPEN DEXSCREENER</a>
            <button onClick={copyCA} className="btn-gta-yellow">{copiedLabel}</button>
            <a href={PUMP_URL} target="_blank" className="btn-gta-orange">PUMPFUN</a>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════════════════════════════
          ARCHIVE / MEME GALLERY
      ═══════════════════════════════════════ */}
      <section id="archive" className="py-24 px-5 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="broadcast-tag bt-breaking">ARCHIVE</span>
            <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.6rem", color: "rgba(138,154,106,0.5)", letterSpacing: "0.15em", textTransform: "uppercase" }}>SITUATION REPORT · LATEST EVIDENCE</span>
          </div>

          <h2 style={{
            fontFamily: "'Teko', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(3rem, 10vw, 7rem)",
            lineHeight: 0.9,
            textTransform: "uppercase",
            marginBottom: "8px",
          }}>
            <span style={{ color: "#f0ede0" }}>LATEST </span>
            <span style={{ color: "#f5c400" }}>EVIDENCE</span>
          </h2>
          <p style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, fontSize: "1rem", color: "rgba(138,154,106,0.6)", letterSpacing: "0.15em", marginBottom: "48px", textTransform: "uppercase" }}>
            Situation Report · Field Archive
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
            {ARCHIVE.map((item, i) => (
              <div key={i} className="card-hover" style={{
                background: "linear-gradient(135deg, rgba(139,0,255,0.06), rgba(204,0,0,0.03))",
                border: "1px solid rgba(139,0,255,0.2)",
                borderRadius: "6px",
                overflow: "hidden",
                position: "relative",
                cursor: "default",
              }}>
                {/* Camera tag */}
                <div style={{
                  position: "absolute", top: "10px", right: "10px",
                  zIndex: 3, display: "flex", gap: "4px",
                }}>
                  <span className={`broadcast-tag ${TAG_COLORS[item.tag] || "bt-update"}`}>{item.tag}</span>
                  <span className="corner-tag">{item.cam}</span>
                </div>
                {/* Timestamp */}
                <div style={{
                  position: "absolute", top: "10px", left: "10px",
                  fontFamily: "'Courier Prime', monospace",
                  fontSize: "0.55rem",
                  color: "rgba(240,237,224,0.5)",
                  background: "rgba(0,0,0,0.6)",
                  padding: "2px 6px",
                  borderRadius: "2px",
                  zIndex: 3,
                }}>{item.ts} UTC</div>

                {/* Image */}
                <div style={{ aspectRatio: "4/3", overflow: "hidden", position: "relative" }}>
                  <img
                    src={item.img}
                    alt={item.caption}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease", display: "block" }}
                    className="group-hover:scale-105"
                  />
                  {/* Scanline on image */}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "repeating-linear-gradient(0deg, transparent 0px, transparent 3px, rgba(0,0,0,0.06) 3px, rgba(0,0,0,0.06) 4px)",
                    pointerEvents: "none",
                  }} />
                </div>

                {/* Caption */}
                <div style={{ padding: "14px 16px", borderTop: "1px solid rgba(139,0,255,0.15)" }}>
                  <p style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, fontSize: "1rem", color: "#f0ede0", marginBottom: "4px" }}>{item.caption}</p>
                  <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.55rem", color: "rgba(138,154,106,0.5)", letterSpacing: "0.1em" }}>
                    Logged: 2026-06-27 · {item.ts} UTC
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════════════════════════════
          HOW TO BUY
      ═══════════════════════════════════════ */}
      <section className="section-purple py-24 px-5 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="broadcast-tag bt-update">THE PLAY</span>
            <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.6rem", color: "rgba(138,154,106,0.5)", letterSpacing: "0.15em" }}>ACQUISITION PROTOCOL</span>
          </div>

          <h2 style={{
            fontFamily: "'Teko', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
            lineHeight: 0.9,
            textTransform: "uppercase",
            marginBottom: "56px",
          }}>
            <div style={{ color: "#f0ede0" }}>GET IN</div>
            <div style={{ color: "#f0ede0" }}>BEFORE IT</div>
            <div style={{ color: "#f5c400", textShadow: "0 0 40px rgba(245,196,0,0.3)" }}>GOES AGAIN.</div>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "20px" }}>
            {[
              {
                num: "01",
                title: "GET A WALLET",
                body: "Download Phantom or Solflare. Create a wallet. Save your recovery phrase.",
                links: [
                  { label: "Phantom", href: "https://phantom.app/" },
                  { label: "Solflare", href: "https://solflare.com/" },
                ],
                accent: "#ff6b00",
              },
              {
                num: "02",
                title: "GET SOL",
                body: "Fund your wallet with SOL.",
                links: [],
                accent: "#f5c400",
              },
              {
                num: "03",
                title: "HIT JUPITER",
                body: "Open Jupiter. Paste the contract. Swap SOL for $AGAIN.",
                links: [{ label: "Open Jupiter", href: BUY_URL }],
                accent: "#8b00ff",
              },
              {
                num: "04",
                title: "HOLD THE LINE",
                body: "Welcome back.\nHere we go again.",
                links: [],
                accent: "#cc0000",
              },
            ].map((step, i) => (
              <div key={i} className="card-hover" style={{
                background: "linear-gradient(135deg, rgba(139,0,255,0.07), rgba(7,6,14,0.9))",
                border: "1px solid rgba(139,0,255,0.2)",
                borderRadius: "4px",
                padding: "28px 24px",
                position: "relative",
                overflow: "hidden",
              }}>
                <div className="gta-step-num">{step.num}</div>
                <div style={{
                  fontFamily: "'Courier Prime', monospace",
                  fontSize: "0.65rem",
                  color: step.accent,
                  letterSpacing: "0.2em",
                  fontWeight: 700,
                  marginBottom: "8px",
                  textTransform: "uppercase",
                }}>{step.num} ——</div>
                <div style={{
                  fontFamily: "'Teko', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.6rem",
                  color: step.accent,
                  textTransform: "uppercase",
                  marginBottom: "12px",
                  lineHeight: 1,
                }}>{step.title}</div>
                <p style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 500,
                  fontSize: "1rem",
                  color: "rgba(240,237,224,0.8)",
                  lineHeight: 1.5,
                  marginBottom: step.links.length > 0 ? "16px" : 0,
                  whiteSpace: "pre-line",
                }}>{step.body}</p>
                {step.links.map((lk, j) => (
                  <a key={j} href={lk.href} target="_blank" className="btn-gta-orange" style={{ fontSize: "0.85rem", padding: "5px 18px", marginRight: "8px", display: "inline-block" }}>
                    {lk.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════ */}
      <footer style={{
        background: "linear-gradient(180deg, #07060e 0%, #0d0918 100%)",
        borderTop: "1px solid rgba(255,107,0,0.3)",
        padding: "64px 20px 40px",
        position: "relative",
        zIndex: 10,
      }}>
        {/* Top gradient accent */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          height: "2px",
          background: "linear-gradient(90deg, #cc0000, #8b00ff, #ff6b00, #f5c400, transparent)",
        }} />

        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
            {/* Brand */}
            <div style={{ maxWidth: "340px" }}>
              <div style={{
                fontFamily: "'Teko', sans-serif",
                fontWeight: 700,
                fontSize: "3.5rem",
                color: "#f5c400",
                letterSpacing: "0.05em",
                lineHeight: 1,
                textShadow: "0 0 40px rgba(245,196,0,0.3)",
                marginBottom: "12px",
              }}>$AGAIN</div>
              <p style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 500,
                fontSize: "1rem",
                color: "rgba(138,154,106,0.7)",
                lineHeight: 1.6,
                marginBottom: "20px",
              }}>
                Another headline.<br/>
                Another day.<br/>
                Here we go again.
              </p>
              {/* Social */}
              <a href={X_URL} target="_blank" className="nav-pill nav-pill-x">
                <SiX size={12} /> 𝕏 COMMUNITY
              </a>
            </div>

            {/* Links */}
            <div className="flex gap-16">
              <div>
                <div style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.6rem", color: "rgba(138,154,106,0.5)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "20px" }}>TOKEN</div>
                <div className="flex flex-col gap-4">
                  {[
                    { label: "Contract", action: copyCA, href: undefined },
                    { label: "Jupiter", href: BUY_URL },
                    { label: "PumpFun", href: PUMP_URL },
                    { label: "DexScreener", href: DEX_URL },
                  ].map((lk, i) =>
                    lk.href ? (
                      <a key={i} href={lk.href} target="_blank" style={{
                        fontFamily: "'Oswald', sans-serif",
                        fontWeight: 500,
                        fontSize: "1rem",
                        color: "rgba(240,237,224,0.7)",
                        textDecoration: "none",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        transition: "color 0.2s",
                      }}
                      onMouseOver={e => (e.currentTarget.style.color = "#ff6b00")}
                      onMouseOut={e => (e.currentTarget.style.color = "rgba(240,237,224,0.7)")}
                      >{lk.label}</a>
                    ) : (
                      <button key={i} onClick={lk.action} style={{
                        fontFamily: "'Oswald', sans-serif",
                        fontWeight: 500,
                        fontSize: "1rem",
                        color: "rgba(240,237,224,0.7)",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                        textAlign: "left",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        transition: "color 0.2s",
                      }}
                      onMouseOver={e => (e.currentTarget.style.color = "#ff6b00")}
                      onMouseOut={e => (e.currentTarget.style.color = "rgba(240,237,224,0.7)")}
                      >{lk.label}</button>
                    )
                  )}
                </div>
              </div>

              <div>
                <div style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.6rem", color: "rgba(138,154,106,0.5)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "20px" }}>COMMUNITY</div>
                <a href={X_URL} target="_blank" style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 500,
                  fontSize: "1rem",
                  color: "rgba(240,237,224,0.7)",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  display: "flex", alignItems: "center", gap: "6px",
                }}
                onMouseOver={e => (e.currentTarget.style.color = "#8b5cf6")}
                onMouseOut={e => (e.currentTarget.style.color = "rgba(240,237,224,0.7)")}
                ><SiX size={12} /> X Community</a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div style={{ borderTop: "1px solid rgba(139,0,255,0.1)", paddingTop: "24px" }}>
            <p style={{
              fontFamily: "'Courier Prime', monospace",
              fontSize: "0.65rem",
              color: "rgba(138,154,106,0.4)",
              maxWidth: "560px",
              lineHeight: 1.7,
              marginBottom: "12px",
            }}>
              $AGAIN is a meme token with no intrinsic value or expectation of profit. Nothing on this site is financial advice. Do your own research.
            </p>
            <p style={{
              fontFamily: "'Courier Prime', monospace",
              fontSize: "0.6rem",
              color: "rgba(138,154,106,0.25)",
            }}>
              © 2026 $AGAIN · On Solana · Ah Shit.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
