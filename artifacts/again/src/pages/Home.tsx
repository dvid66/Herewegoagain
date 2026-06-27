import { useState, useEffect, useRef, useCallback } from "react";
import { SiX } from "react-icons/si";

import imgCJFace    from "@assets/file_00000000ae3071f4996686dabbcc28d6_1782525794223.png";
import imgCJMissile from "@assets/file_00000000c95471f4a81c4fc202c0ef0d_1782525794267.png";
import imgCJStreet  from "@assets/e3ff96bf9d25d9f6ce728bb8c982186a_1782525764183.jpg";
import imgCJBed     from "@assets/cfb96f4ef5ed21e5f5f2a141ca49fd9a_1782525764435.jpg";
import imgCJCinema  from "@assets/700dcb0e29ca55dbe9ab6cdff4e04727_1782525764494.jpg";
import imgCJBreaking from "@assets/1782523850458_1782525794092.png";

const CA       = "DR4nHueGFV6M9D3sEACyWwvt4ihhGKfQG3tyYKfXpump";
const BUY_URL  = "https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=DR4nHueGFV6M9D3sEACyWwvt4ihhGKfQG3tyYKfXpump";
const DEX_URL  = "https://dexscreener.com/solana/DR4nHueGFV6M9D3sEACyWwvt4ihhGKfQG3tyYKfXpump";
const PUMP_URL = "https://pump.fun/coin/DR4nHueGFV6M9D3sEACyWwvt4ihhGKfQG3tyYKfXpump";
const X_URL    = "https://x.com/i/communities/2038639985490887031";

/* ── SVG assets ──────────────────────────────────────── */
const PalmLeft = () => (
  <svg width="220" height="380" viewBox="0 0 220 380" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="95" y="200" width="18" height="180" rx="4" fill="#0d0515" transform="rotate(-8 95 200)"/>
    <rect x="100" y="160" width="14" height="120" rx="3" fill="#0d0515" transform="rotate(-15 100 160)"/>
    <ellipse cx="70" cy="200" rx="80" ry="22" fill="#0d0515" transform="rotate(-35 70 200)"/>
    <ellipse cx="105" cy="175" rx="75" ry="20" fill="#0d0515" transform="rotate(-55 105 175)"/>
    <ellipse cx="95" cy="165" rx="70" ry="18" fill="#0d0515" transform="rotate(15 95 165)"/>
    <ellipse cx="115" cy="155" rx="72" ry="19" fill="#0d0515" transform="rotate(-70 115 155)"/>
    <ellipse cx="90" cy="145" rx="65" ry="17" fill="#0d0515" transform="rotate(30 90 145)"/>
    <ellipse cx="110" cy="135" rx="68" ry="18" fill="#0d0515" transform="rotate(-85 110 135)"/>
    <path d="M50 380 Q110 360 170 380 Q140 340 100 330 Q60 340 50 380Z" fill="#0d0515"/>
  </svg>
);

const PalmRight = () => (
  <svg width="220" height="380" viewBox="0 0 220 380" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="107" y="200" width="18" height="180" rx="4" fill="#0d0515" transform="rotate(8 107 200)"/>
    <rect x="106" y="160" width="14" height="120" rx="3" fill="#0d0515" transform="rotate(15 106 160)"/>
    <ellipse cx="150" cy="200" rx="80" ry="22" fill="#0d0515" transform="rotate(35 150 200)"/>
    <ellipse cx="115" cy="175" rx="75" ry="20" fill="#0d0515" transform="rotate(55 115 175)"/>
    <ellipse cx="125" cy="165" rx="70" ry="18" fill="#0d0515" transform="rotate(-15 125 165)"/>
    <ellipse cx="105" cy="155" rx="72" ry="19" fill="#0d0515" transform="rotate(70 105 155)"/>
    <ellipse cx="130" cy="145" rx="65" ry="17" fill="#0d0515" transform="rotate(-30 130 145)"/>
    <ellipse cx="110" cy="135" rx="68" ry="18" fill="#0d0515" transform="rotate(85 110 135)"/>
    <path d="M50 380 Q110 360 170 380 Q140 340 100 330 Q60 340 50 380Z" fill="#0d0515"/>
  </svg>
);

const WomanSilhouette = () => (
  <svg width="180" height="320" viewBox="0 0 180 320" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="90" cy="38" r="28" fill="#0d0515"/>
    <path d="M70 38 Q68 18 90 20 Q112 18 110 38 Q116 28 108 22 Q98 12 90 14 Q82 12 72 22 Q64 28 70 38Z" fill="#160824"/>
    <path d="M62 62 Q55 68 50 90 Q45 112 50 140 Q55 160 60 175 L78 175 L88 100 L92 100 L102 175 L120 175 Q125 160 130 140 Q135 112 130 90 Q125 68 118 62 Q108 58 90 58 Q72 58 62 62Z" fill="#0d0515"/>
    <path d="M62 68 L48 80 L30 160 L50 165 L62 110 Z" fill="#0d0515"/>
    <path d="M118 68 L132 80 L150 160 L130 165 L118 110 Z" fill="#0d0515"/>
    <path d="M30 158 L28 175 Q30 182 38 185 Q44 183 46 178 L50 165 Z" fill="#0d0515"/>
    <path d="M150 158 L152 175 Q150 182 142 185 Q136 183 134 178 L130 165 Z" fill="#0d0515"/>
    <path d="M60 170 L50 320 L72 320 Q78 280 88 250 Q92 240 92 250 Q98 280 108 320 L130 320 L120 170 Z" fill="#0d0515"/>
    <ellipse cx="61" cy="319" rx="16" ry="5" fill="#160824"/>
    <ellipse cx="119" cy="319" rx="16" ry="5" fill="#160824"/>
  </svg>
);

const CityBuildings = () => (
  <svg width="100%" height="140" viewBox="0 0 1200 140" preserveAspectRatio="xMidYMax slice" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0"   y="60"  width="60"  height="80" fill="#080410"/>
    <rect x="8"   y="72"  width="44"  height="48" fill="#0d0515" opacity="0.5"/>
    <rect x="55"  y="20"  width="80"  height="120" fill="#0a0312"/>
    <rect x="63"  y="30"  width="64"  height="50"  fill="#0d0515" opacity="0.4"/>
    <rect x="130" y="50"  width="50"  height="90"  fill="#08040f"/>
    <rect x="175" y="5"   width="100" height="135" fill="#0d0515"/>
    <rect x="183" y="15"  width="84"  height="60"  fill="#12071e" opacity="0.5"/>
    <rect x="270" y="40"  width="70"  height="100" fill="#080410"/>
    <rect x="335" y="25"  width="90"  height="115" fill="#0a0312"/>
    <rect x="420" y="0"   width="120" height="140" fill="#0d0515"/>
    <rect x="428" y="10"  width="104" height="70"  fill="#12071e" opacity="0.5"/>
    <rect x="540" y="30"  width="60"  height="110" fill="#08040f"/>
    <rect x="595" y="10"  width="85"  height="130" fill="#0a0312"/>
    <rect x="675" y="45"  width="55"  height="95"  fill="#0d0515"/>
    <rect x="725" y="15"  width="95"  height="125" fill="#080410"/>
    <rect x="733" y="25"  width="79"  height="60"  fill="#0d0515" opacity="0.4"/>
    <rect x="815" y="35"  width="70"  height="105" fill="#0a0312"/>
    <rect x="880" y="0"   width="110" height="140" fill="#0d0515"/>
    <rect x="888" y="10"  width="94"  height="75"  fill="#12071e" opacity="0.5"/>
    <rect x="985" y="25"  width="75"  height="115" fill="#08040f"/>
    <rect x="1055" y="55" width="50"  height="85"  fill="#0a0312"/>
    <rect x="1100" y="30" width="100" height="110" fill="#0d0515"/>
  </svg>
);

const MissileSVG = ({ size = 1 }: { size?: number }) => (
  <svg width={Math.round(80*size)} height={Math.round(20*size)} viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M70 10 L80 6 L80 14 Z" fill="#cc3300"/>
    <rect x="20" y="7" width="52" height="6" rx="1" fill="#b0b8cc"/>
    <rect x="22" y="7" width="50" height="3" rx="1" fill="rgba(255,255,255,0.2)"/>
    <path d="M20 10 L0 5 L0 15 Z" fill="#8899aa"/>
    <path d="M28 7 L28 13 L34 15 L34 5 Z" fill="#99aacc"/>
    <path d="M28 13 L36 18 L36 13 Z" fill="#7788aa" opacity="0.7"/>
    <path d="M28 7 L36 2 L36 7 Z" fill="#7788aa" opacity="0.7"/>
    <ellipse cx="8" cy="10" rx="6" ry="5" fill="rgba(255,140,0,0.9)"/>
    <ellipse cx="5" cy="10" rx="8" ry="4" fill="rgba(255,200,0,0.6)"/>
    <ellipse cx="2" cy="10" rx="10" ry="3" fill="rgba(255,100,0,0.3)"/>
  </svg>
);

const ShipSVG = () => (
  <svg width="90" height="55" viewBox="0 0 90 55" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 40 Q45 25 85 40 L78 52 Q45 48 12 52 Z" fill="#3a4a5a"/>
    <path d="M5 40 Q45 30 85 40" stroke="#4a5a6a" strokeWidth="1" fill="none"/>
    <rect x="30" y="25" width="28" height="16" rx="1" fill="#2a3a4a"/>
    <rect x="35" y="18" width="18" height="8" rx="1" fill="#1a2a3a"/>
    <rect x="42" y="10" width="4" height="10" fill="#1a2a3a"/>
    <rect x="38" y="26" width="6" height="4" fill="#4a5a6a"/>
    <rect x="47" y="26" width="6" height="4" fill="#4a5a6a"/>
    <path d="M5 40 L12 52" stroke="#2a3a4a" strokeWidth="1"/>
    <path d="M85 40 L78 52" stroke="#2a3a4a" strokeWidth="1"/>
    <path d="M2 45 Q45 55 88 45" stroke="#1a4a7a" strokeWidth="2" fill="none" opacity="0.4"/>
  </svg>
);

const StarSVG = ({ color = "#f5c400" }: { color?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill={color} stroke="rgba(0,0,0,0.5)" strokeWidth="1"/>
  </svg>
);

const RadarSVG = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" r="38" stroke="rgba(57,255,20,0.2)" strokeWidth="1" fill="rgba(0,20,0,0.3)"/>
    <circle cx="40" cy="40" r="28" stroke="rgba(57,255,20,0.15)" strokeWidth="0.5" fill="none"/>
    <circle cx="40" cy="40" r="18" stroke="rgba(57,255,20,0.12)" strokeWidth="0.5" fill="none"/>
    <circle cx="40" cy="40" r="8" stroke="rgba(57,255,20,0.2)" strokeWidth="0.5" fill="none"/>
    <line x1="40" y1="2" x2="40" y2="78" stroke="rgba(57,255,20,0.08)" strokeWidth="0.5"/>
    <line x1="2" y1="40" x2="78" y2="40" stroke="rgba(57,255,20,0.08)" strokeWidth="0.5"/>
    <g className="radar-sweep">
      <path d="M40 40 L40 2 A38 38 0 0 1 78 40 Z" fill="url(#radarGrad)" opacity="0.6"/>
      <defs>
        <radialGradient id="radarGrad" cx="0%" cy="100%" r="100%">
          <stop offset="0%" stopColor="rgba(57,255,20,0)" stopOpacity="0"/>
          <stop offset="70%" stopColor="rgba(57,255,20,0.15)" stopOpacity="1"/>
          <stop offset="100%" stopColor="rgba(57,255,20,0.5)" stopOpacity="1"/>
        </radialGradient>
      </defs>
    </g>
    <circle className="blip" cx="55" cy="28" r="2.5" fill="#39ff14" style={{ filter: "drop-shadow(0 0 3px #39ff14)" }}/>
    <circle className="blip" cx="25" cy="52" r="2" fill="#39ff14" style={{ animationDelay: "1s", filter: "drop-shadow(0 0 3px #39ff14)" }}/>
    <circle cx="40" cy="40" r="2" fill="rgba(57,255,20,0.8)"/>
    <circle className="radar-ping-ring" cx="40" cy="40" r="8" stroke="rgba(57,255,20,0.5)" strokeWidth="1" fill="none" style={{ transformOrigin: "40px 40px" }}/>
    <circle className="radar-ping-ring" cx="40" cy="40" r="8" stroke="rgba(57,255,20,0.3)" strokeWidth="0.5" fill="none" style={{ transformOrigin: "40px 40px" }}/>
  </svg>
);

const SignalBars = () => (
  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0"  y="11" width="3" height="5" rx="0.5" fill="#39ff14" opacity="0.9"/>
    <rect x="5"  y="8"  width="3" height="8" rx="0.5" fill="#39ff14" opacity="0.8"/>
    <rect x="10" y="4"  width="3" height="12" rx="0.5" fill="#39ff14" opacity="0.7"/>
    <rect x="15" y="0"  width="3" height="16" rx="0.5" fill="#39ff14" opacity="0.3"/>
  </svg>
);

/* ── Main Component ──────────────────────────────────── */
export default function Home() {
  const [utcTime, setUtcTime] = useState("");
  const [showMP, setShowMP] = useState(false);
  const [copyLabel, setCopyLabel] = useState("Copy Contract");
  const [loaderGone, setLoaderGone] = useState(false);
  const [visibleTl, setVisibleTl] = useState<Set<number>>(new Set());
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  // UTC clock
  useEffect(() => {
    const update = () => setUtcTime(new Date().toISOString().replace("T", " ").substring(0, 19) + " UTC");
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  // Loading screen removal
  useEffect(() => {
    const id = setTimeout(() => setLoaderGone(true), 4700);
    return () => clearTimeout(id);
  }, []);

  // Timeline IntersectionObserver
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

  // Section reveal observer
  useEffect(() => {
    if (!loaderGone) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          const id = e.target.getAttribute("data-section");
          if (id) setVisibleSections(p => new Set(p).add(id));
        }
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll("[data-section]").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [loaderGone]);

  // 3D tilt cards
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".tilt-card");
    const handlers: Array<[HTMLElement, EventListener, EventListener]> = [];
    cards.forEach(card => {
      const onMove = (e: Event) => {
        const me = e as MouseEvent;
        const rect = card.getBoundingClientRect();
        const x = ((me.clientX - rect.left) / rect.width  - 0.5) * 16;
        const y = ((me.clientY - rect.top)  / rect.height - 0.5) * -16;
        card.style.transform = `perspective(600px) rotateY(${x}deg) rotateX(${y}deg) translateZ(8px)`;
      };
      const onLeave = () => { card.style.transform = ""; };
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      handlers.push([card, onMove as EventListener, onLeave as EventListener]);
    });
    return () => handlers.forEach(([card, m, l]) => { card.removeEventListener("mousemove", m); card.removeEventListener("mouseleave", l); });
  }, [loaderGone]);

  const copyCA = useCallback(() => {
    navigator.clipboard.writeText(CA).catch(() => {});
    setShowMP(true);
    setCopyLabel("Copied!");
    setTimeout(() => { setShowMP(false); setCopyLabel("Copy Contract"); }, 3000);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const TICKER_TEXT = [
    "BREAKING — Another ceasefire announced",
    "UPDATE — New reports from the Strait of Hormuz",
    "LIVE — Markets react",
    "BREAKING — Here we go again",
    "SOLANA — $AGAIN now live on-chain",
    `CONTRACT: ${CA}`,
    "DEVELOPING — Situation unclear",
    "AH SHIT. HERE WE GO AGAIN.",
    "BREAKING — Ceasefire lasted five minutes",
  ].join("   //   ");

  const TL = [
    { time: "09:14", label: "BREAKING", text: "Ceasefire announced." },
    { time: "09:36", label: "UPDATE",   text: "Another incident reported." },
    { time: "09:42", label: "MARKETS",  text: "Markets react." },
    { time: "09:45", label: "LIVE",     text: "$AGAIN launches on Solana." },
    { time: "09:47", label: "DEV",      text: "You're reading this." },
  ];

  const ARCHIVE = [
    { img: imgCJFace,     cap: "CJ had a point.",          cam: "CAM 01", tag: "ARCHIVE" },
    { img: imgCJMissile,  cap: "Perfect timing.",           cam: "FEED A", tag: "LIVE"    },
    { img: imgCJStreet,   cap: "Market mood.",              cam: "CAM 02", tag: "UPDATE"  },
    { img: imgCJBed,      cap: "Breaking again.",           cam: "FEED B", tag: "BREAKING"},
    { img: imgCJCinema,   cap: "Another notification.",     cam: "CAM 03", tag: "WORLD"   },
    { img: imgCJBreaking, cap: "Nothing ever changes.",     cam: "FEED C", tag: "DEV"     },
  ];

  const tagClass: Record<string,string> = {
    ARCHIVE:"badge-world", LIVE:"badge-live", UPDATE:"badge-update",
    BREAKING:"badge-breaking", WORLD:"badge-world", DEV:"badge-dev", MARKETS:"badge-update",
  };

  return (
    <div style={{ background: "#0d0712", color: "#fff5e4", minHeight: "100vh", overflowX: "hidden", position: "relative" }}>

      {/* ══════════════════════════════
          GTA LOADING SCREEN
      ══════════════════════════════ */}
      {!loaderGone && (
        <div id="gta-loader">
          <div className="loader-gradient-layer"/>
          <div className="loader-stars"/>
          <div className="loader-sun"/>
          <div className="loader-horizon"/>

          {/* City buildings silhouette */}
          <div className="loader-city-buildings">
            <CityBuildings/>
          </div>

          {/* Palm trees */}
          <div className="loader-palm-left" style={{ bottom: 0 }}>
            <PalmLeft/>
          </div>
          <div className="loader-palm-right" style={{ bottom: 0 }}>
            <PalmRight/>
          </div>

          {/* Woman silhouette */}
          <div className="loader-silhouette">
            <WomanSilhouette/>
          </div>

          <div className="loader-title-wrap">
            <div className="loader-title">$AGAIN</div>
            <div className="loader-subtitle">Here We Go Again &nbsp;·&nbsp; Solana</div>
          </div>

          <div className="loader-bar-wrap" style={{ margin: "0 auto 0" }}>
            <div className="loader-bar"/>
          </div>
          <div className="loader-tip">Loading situation&hellip; please wait</div>
        </div>
      )}

      {/* Global overlays */}
      <div className="scanlines-fixed"/>
      <div className="static-flash"/>

      {/* ══════════════════════════════
          MISSION PASSED OVERLAY
      ══════════════════════════════ */}
      {showMP && (
        <div className="mp-overlay">
          <div className="mp-box">
            <div className="mp-shake">
              <span className="mp-star s1"><StarSVG color="#f5c400"/></span>
              <span className="mp-star s2"><StarSVG color="#f5c400"/></span>
              <span className="mp-star s3"><StarSVG color="#f5c400"/></span>
              <span className="mp-star s4"><StarSVG color="#f5c400"/></span>
              <span className="mp-text-main">mission passed<span className="mp-exclaim">!</span></span>
              <span className="mp-respect">Respect +</span>
              <span className="mp-cash">CONTRACT ADDRESS COPIED</span>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════
          NAV
      ══════════════════════════════ */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 500,
        height: "56px",
        background: "linear-gradient(180deg, rgba(13,7,18,0.98) 0%, rgba(20,10,30,0.96) 100%)",
        borderBottom: "2px solid #cc0000",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 20px",
        boxShadow: "0 2px 30px rgba(107,0,204,0.2), 0 0 0 0 transparent",
      }}>
        {/* Left */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <span style={{
            fontFamily: "'Righteous', sans-serif",
            fontSize: "1.9rem",
            color: "#f5c400",
            letterSpacing: "0.04em",
            lineHeight: 1,
            WebkitTextStroke: "2px rgba(0,0,0,0.4)",
            textShadow: "0 0 24px rgba(245,196,0,0.5), 3px 3px 0 rgba(0,0,0,0.4)",
          }}>$AGAIN</span>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <span className="live-dot"/>
            <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.58rem", color: "#cc0000", letterSpacing: "0.25em", fontWeight: 700 }}>LIVE</span>
          </div>
        </div>

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <a href={BUY_URL} target="_blank" className="btn-gta btn-gold" style={{ fontSize: "0.85rem", padding: "7px 20px" }}>Buy</a>
          <button onClick={() => scrollTo("chart")} className="btn-gta btn-red" style={{ fontSize: "0.85rem", padding: "7px 20px" }}>Chart</button>
          <a href="#archive" className="btn-gta btn-purple" style={{ fontSize: "0.85rem", padding: "7px 20px" }}>Archive</a>
          <a href={X_URL} target="_blank" className="btn-gta btn-orange" style={{ fontSize: "0.85rem", padding: "7px 18px", gap: "5px" }}>
            <SiX size={11}/> Community
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginLeft: "8px", paddingLeft: "10px", borderLeft: "1px solid rgba(107,0,204,0.25)" }}>
            <span className="live-dot"/>
            <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.56rem", color: "rgba(255,245,228,0.3)", letterSpacing: "0.12em" }}>SOL</span>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════
          BREAKING NEWS TICKER
      ══════════════════════════════ */}
      <div style={{
        position: "fixed", top: "56px", left: 0, right: 0, zIndex: 490,
        height: "30px",
        background: "linear-gradient(90deg, #8b0000 0%, #cc0000 100%)",
        borderBottom: "2px solid #f5c400",
        display: "flex", alignItems: "center",
        overflow: "hidden",
      }}>
        <div style={{
          background: "#f5c400", color: "#1a0d1f",
          fontFamily: "'Righteous', sans-serif",
          fontSize: "0.85rem",
          padding: "0 16px",
          height: "100%", display: "flex", alignItems: "center",
          flexShrink: 0,
          letterSpacing: "0.06em",
          WebkitTextStroke: "0.5px rgba(0,0,0,0.2)",
          zIndex: 2,
        }}>BREAKING</div>
        <div style={{ flex: 1, overflow: "hidden" }}>
          <div className="ticker-inner" style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 400,
            fontSize: "0.8rem",
            color: "white",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            padding: "0 20px",
          }}>
            {[TICKER_TEXT, TICKER_TEXT].map((t, i) => (
              <span key={i} style={{ marginRight: "60px" }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section style={{
        position: "relative",
        minHeight: "100vh",
        paddingTop: "110px",
        paddingBottom: "80px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        background: "radial-gradient(ellipse at 25% 60%, rgba(107,0,204,0.18) 0%, transparent 55%), radial-gradient(ellipse at 75% 30%, rgba(204,0,0,0.08) 0%, transparent 45%), #0d0712",
      }}>
        <div className="tac-grid bg-heat" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}/>

        {/* Animated missiles (SVG) */}
        <div className="missile-wrap ms1" style={{ position: "absolute", zIndex: 12 }}>
          <div className="missile-body">
            <div className="missile-trail-seg" style={{ width: "60px", height: "2px", background: "linear-gradient(to left, rgba(255,140,0,0.8), transparent)", position: "absolute", right: "100%", top: "50%", transform: "translateY(-50%)" }}/>
            <div className="missile-trail-seg" style={{ width: "40px", height: "1px", background: "linear-gradient(to left, rgba(255,200,0,0.5), transparent)", position: "absolute", right: "calc(100% + 50px)", top: "50%", transform: "translateY(-50%)" }}/>
            <MissileSVG size={1.2}/>
          </div>
        </div>
        <div className="missile-wrap ms2" style={{ position: "absolute", zIndex: 12 }}>
          <div className="missile-body">
            <div className="missile-trail-seg" style={{ width: "50px", height: "2px", background: "linear-gradient(to left, rgba(255,140,0,0.8), transparent)", position: "absolute", right: "100%", top: "50%", transform: "translateY(-50%)" }}/>
            <MissileSVG size={0.9}/>
          </div>
        </div>
        <div className="missile-wrap ms3" style={{ position: "absolute", zIndex: 12 }}>
          <div className="missile-body">
            <div className="missile-trail-seg" style={{ width: "80px", height: "3px", background: "linear-gradient(to left, rgba(255,140,0,0.8), transparent)", position: "absolute", right: "100%", top: "50%", transform: "translateY(-50%)" }}/>
            <MissileSVG size={1.5}/>
          </div>
        </div>

        {/* Hero content */}
        <div style={{ maxWidth: "900px", padding: "0 24px 0 5vw", position: "relative", zIndex: 20 }}>
          {/* Live label */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
            <span className="live-dot"/>
            <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.62rem", color: "#cc0000", letterSpacing: "0.25em", fontWeight: 700, textTransform: "uppercase" }}>Breaking</span>
            <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.62rem", color: "rgba(255,245,228,0.3)", letterSpacing: "0.1em" }}>&#xB7; Solana &#xB7; Strait of Hormuz</span>
          </div>

          {/* Headline — glitch wrapper */}
          <div className="glitch-wrap" style={{ marginBottom: "12px" }}>
            <div className="g-main" style={{
              fontFamily: "'Righteous', sans-serif",
              fontSize: "clamp(4rem,14vw,10rem)",
              lineHeight: 0.88,
              textTransform: "uppercase",
              letterSpacing: "0.01em",
            }}>
              <div style={{ color: "#fff5e4", WebkitTextStroke: "3px rgba(0,0,0,0.35)", textShadow: "4px 4px 0 rgba(0,0,0,0.4), 0 0 60px rgba(255,245,228,0.1)" }}>AH SHIT.</div>
              <div style={{ color: "#fff5e4", WebkitTextStroke: "3px rgba(0,0,0,0.35)", textShadow: "4px 4px 0 rgba(0,0,0,0.4)" }}>HERE WE</div>
              <div style={{ color: "#f5c400", WebkitTextStroke: "3px rgba(80,40,0,0.5)", textShadow: "4px 4px 0 #7a4a00, 0 0 80px rgba(245,196,0,0.4)" }}>GO AGAIN.</div>
            </div>
            <div className="g-r" aria-hidden style={{ fontFamily: "'Righteous', sans-serif", fontSize: "clamp(4rem,14vw,10rem)", lineHeight: 0.88, textTransform: "uppercase" }}>
              <div>AH SHIT.</div>
              <div>HERE WE</div>
              <div style={{ color: "#f5c400" }}>GO AGAIN.</div>
            </div>
            <div className="g-b" aria-hidden style={{ fontFamily: "'Righteous', sans-serif", fontSize: "clamp(4rem,14vw,10rem)", lineHeight: 0.88, textTransform: "uppercase" }}>
              <div>AH SHIT.</div>
              <div>HERE WE</div>
              <div style={{ color: "#f5c400" }}>GO AGAIN.</div>
            </div>
          </div>

          <p style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, fontSize: "1.3rem", color: "rgba(255,245,228,0.85)", lineHeight: 1.5, maxWidth: "440px", marginBottom: "36px" }}>
            Ceasefire lasted about five minutes.<br/>
            Another headline. Another panic.<br/>
            <span style={{ color: "#f5c400", fontWeight: 700 }}>Here we go again.</span>
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "32px" }}>
            <a href={BUY_URL} target="_blank" className="btn-gta btn-gold">Buy Now</a>
            <button onClick={() => scrollTo("chart")} className="btn-gta btn-red">Open Chart</button>
          </div>

          {/* Contract box */}
          <div className="ca-box border-pulse" style={{ maxWidth: "520px", marginBottom: "28px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
              <span className="badge-live">Live</span>
              <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.55rem", color: "rgba(255,245,228,0.35)", letterSpacing: "0.25em", textTransform: "uppercase" }}>Contract Address &#xB7; Solana</span>
            </div>
            <div style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.78rem", color: "#fff5e4", wordBreak: "break-all", lineHeight: 1.5, marginBottom: "14px", opacity: 0.9 }}>{CA}</div>
            <button onClick={copyCA} className="btn-gta btn-gold" style={{ fontSize: "0.9rem", padding: "9px 24px" }}>
              {copyLabel}
            </button>
          </div>

          {/* Community */}
          <a href={X_URL} target="_blank" className="btn-gta btn-purple" style={{ fontSize: "0.85rem", padding: "9px 22px", display: "inline-flex", marginBottom: "32px" }}>
            <SiX size={13}/> X Community
          </a>

          {/* Token stats */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {[
              { val: "1B", lbl: "Supply" },
              { val: "0%", lbl: "Tax" },
              { val: "SOL", lbl: "Chain" },
            ].map((s, i) => (
              <div key={i} className="stat-pill" style={{ minWidth: "90px" }}>
                <div style={{ fontFamily: "'Righteous', sans-serif", fontSize: "1.8rem", color: ["#f5c400","#39ff14","#a78bfa"][i], lineHeight: 1, WebkitTextStroke: "1px rgba(0,0,0,0.3)" }}>{s.val}</div>
                <div style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.55rem", color: "rgba(138,122,154,0.8)", letterSpacing: "0.2em", textTransform: "uppercase" }}>{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SITUATION SECTION
      ══════════════════════════════ */}
      <section
        data-section="situation"
        style={{
          position: "relative",
          padding: "100px 5vw",
          background: "linear-gradient(135deg, #120820 0%, #0d0712 50%, #1a0d2e 100%)",
          clipPath: "polygon(0 60px, 100% 0, 100% calc(100% - 60px), 0 100%)",
          marginTop: "-60px",
          paddingTop: "140px",
          paddingBottom: "140px",
          overflow: "hidden",
        }}
      >
        <div className="tac-grid" style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.5 }}/>

        <div style={{ maxWidth: "780px", position: "relative", zIndex: 5 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <span className="badge-breaking">BREAKING</span>
              <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(245,196,0,0.3), transparent)" }}/>
            </div>

              <h2 style={{
                fontFamily: "'Righteous', sans-serif",
                fontSize: "clamp(3rem,7vw,5.5rem)",
                lineHeight: 0.9,
                textTransform: "uppercase",
                marginBottom: "28px",
                WebkitTextStroke: "2px rgba(0,0,0,0.3)",
              }}>
                <span style={{ color: "#fff5e4", textShadow: "3px 3px 0 rgba(0,0,0,0.4)" }}>HERE WE </span>
                <span style={{ color: "#f5c400", textShadow: "3px 3px 0 #7a4a00, 0 0 40px rgba(245,196,0,0.3)" }}>GO AGAIN.</span>
              </h2>

              <div style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 500, fontSize: "1.25rem", color: "rgba(255,245,228,0.8)", lineHeight: 1.8, marginBottom: "32px" }}>
                <p style={{ marginBottom: "10px" }}>Everyone has seen that moment.</p>
                <p style={{ marginBottom: "10px" }}>Something finally calms down.</p>
                <p style={{ marginBottom: "10px" }}>Five minutes later everything falls apart.</p>
                <p style={{ color: "#f5c400", fontWeight: 700, fontSize: "1.4rem", fontFamily: "'Righteous', sans-serif", marginTop: "20px" }}>Here We Go Again.</p>
              </div>

              <p style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 500, fontSize: "1.05rem", color: "rgba(255,245,228,0.55)", lineHeight: 1.7, marginBottom: "36px", borderLeft: "3px solid rgba(255,107,0,0.5)", paddingLeft: "16px" }}>
                $AGAIN is a Solana memecoin built around the world&#39;s favorite reaction whenever another breaking news notification arrives. No roadmap. No promises.
              </p>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a href={BUY_URL} target="_blank" className="btn-gta btn-gold">Buy Now</a>
                <a href={X_URL} target="_blank" className="btn-gta btn-purple" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <SiX size={12}/> Community
                </a>
              </div>
            </div>
        </div>
      </section>

      {/* ══════════════════════════════
          LIVE TIMELINE
      ══════════════════════════════ */}
      <section style={{ padding: "100px 5vw", background: "#0d0712", position: "relative", overflow: "hidden" }}>
        <div className="tac-grid" style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none" }}/>

        <div style={{ maxWidth: "720px", position: "relative", zIndex: 5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
            <span className="live-dot"/>
            <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.62rem", color: "#cc0000", letterSpacing: "0.25em", fontWeight: 700, textTransform: "uppercase" }}>Live Updates</span>
          </div>
          <h2 style={{ fontFamily: "'Righteous', sans-serif", fontSize: "clamp(2.5rem,7vw,5rem)", lineHeight: 0.9, textTransform: "uppercase", marginBottom: "48px", WebkitTextStroke: "2px rgba(0,0,0,0.3)" }}>
            <span style={{ color: "#fff5e4", textShadow: "3px 3px 0 rgba(0,0,0,0.4)" }}>SITUATION </span>
            <span style={{ color: "#f5c400", textShadow: "3px 3px 0 #7a4a00" }}>REPORT</span>
          </h2>

          <div style={{ position: "relative", paddingLeft: "32px" }}>
            {/* Vertical line SVG */}
            <svg style={{ position: "absolute", left: "8px", top: 0, height: "100%", width: "4px" }} viewBox="0 0 4 400" preserveAspectRatio="none">
              <line x1="2" y1="0" x2="2" y2="400" stroke="url(#tlGrad)" strokeWidth="2" className="timeline-svg-line drawn"/>
              <defs>
                <linearGradient id="tlGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#cc0000"/>
                  <stop offset="50%" stopColor="rgba(107,0,204,0.6)"/>
                  <stop offset="100%" stopColor="transparent"/>
                </linearGradient>
              </defs>
            </svg>

            {TL.map((item, i) => (
              <div key={i} data-tl={i} style={{
                marginBottom: "28px",
                position: "relative",
                opacity: visibleTl.has(i) ? 1 : 0,
                transform: visibleTl.has(i) ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s`,
              }}>
                <div style={{
                  position: "absolute", left: "-28px", top: "6px",
                  width: "10px", height: "10px", borderRadius: "50%",
                  background: i === TL.length-1 ? "#f5c400" : "#cc0000",
                  boxShadow: i === TL.length-1 ? "0 0 10px rgba(245,196,0,0.8)" : "0 0 8px rgba(204,0,0,0.7)",
                }}/>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                  <span className={tagClass[item.label] || "badge-update"}>{item.label}</span>
                  <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.65rem", color: "rgba(138,122,154,0.6)", letterSpacing: "0.12em" }}>{item.time} UTC</span>
                </div>
                <div style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, fontSize: "1.2rem", color: "#fff5e4" }}>{item.text}</div>
                {i < TL.length-1 && <div style={{ height: "1px", background: "rgba(107,0,204,0.12)", marginTop: "16px" }}/>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          LIVE CHART
      ══════════════════════════════ */}
      <section id="chart" style={{
        padding: "100px 5vw 120px",
        background: "linear-gradient(135deg, #1a0d2e 0%, #0d0712 50%, #12080f 100%)",
        clipPath: "polygon(0 60px, 100% 0, 100% calc(100% - 60px), 0 100%)",
        marginTop: "-60px",
        paddingTop: "140px",
        paddingBottom: "140px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div className="tac-grid" style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none" }}/>
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <span className="live-dot"/>
            <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.62rem", color: "#cc0000", letterSpacing: "0.25em", fontWeight: 700 }}>LIVE FEED</span>
          </div>
          <h2 style={{ fontFamily: "'Righteous', sans-serif", fontSize: "clamp(2.5rem,7vw,5rem)", lineHeight: 0.9, textTransform: "uppercase", marginBottom: "28px", WebkitTextStroke: "2px rgba(0,0,0,0.3)" }}>
            <span style={{ color: "#fff5e4", textShadow: "3px 3px 0 rgba(0,0,0,0.4)" }}>THE </span>
            <span style={{ color: "#f5c400", textShadow: "3px 3px 0 #7a4a00" }}>CHART</span>
          </h2>

          {/* Chart frame */}
          <div className="border-pulse" style={{
            border: "1px solid rgba(245,196,0,0.4)",
            background: "#090510",
            marginBottom: "24px",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Frame header */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 16px", background: "rgba(0,0,0,0.5)", borderBottom: "1px solid rgba(245,196,0,0.15)" }}>
              <span className="live-dot"/>
              <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.58rem", color: "rgba(255,245,228,0.4)", letterSpacing: "0.15em" }}>$AGAIN / USD</span>
            </div>
            <div dangerouslySetInnerHTML={{ __html: `<style>#dexscreener-embed{position:relative;width:100%;padding-bottom:125%;}@media(min-width:1400px){#dexscreener-embed{padding-bottom:65%;}}#dexscreener-embed iframe{position:absolute;width:100%;height:100%;top:0;left:0;border:0;}</style><div id="dexscreener-embed"><iframe src="https://dexscreener.com/solana/HTWiEMpyyqRmA4o3jGioqMCtKXN8Ca5WGogUT1PYZP64?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"></iframe></div>` }}/>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <a href={DEX_URL} target="_blank" className="btn-gta btn-red">Open DexScreener</a>
            <button onClick={copyCA} className="btn-gta btn-gold">{copyLabel}</button>
            <a href={PUMP_URL} target="_blank" className="btn-gta btn-orange">PumpFun</a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          ARCHIVE
      ══════════════════════════════ */}
      <section id="archive" style={{ padding: "100px 5vw 120px", background: "#0d0712", position: "relative", overflow: "hidden" }}>
        <div className="tac-grid" style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none" }}/>
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <span className="badge-breaking">Archive</span>
          </div>
          <h2 style={{ fontFamily: "'Righteous', sans-serif", fontSize: "clamp(3rem,9vw,7rem)", lineHeight: 0.9, textTransform: "uppercase", marginBottom: "12px", WebkitTextStroke: "3px rgba(0,0,0,0.3)" }}>
            <span style={{ color: "#fff5e4", textShadow: "4px 4px 0 rgba(0,0,0,0.4)" }}>LATEST </span>
            <span style={{ color: "#f5c400", textShadow: "4px 4px 0 #7a4a00, 0 0 60px rgba(245,196,0,0.3)" }}>EVIDENCE</span>
          </h2>
          <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 300, fontSize: "0.9rem", color: "rgba(138,122,154,0.5)", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "52px" }}>Field Archive</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
            {ARCHIVE.map((item, i) => (
              <div key={i} className="tilt-card" style={{
                background: "linear-gradient(135deg, rgba(107,0,204,0.08), rgba(13,7,18,0.95))",
                border: "1px solid rgba(107,0,204,0.22)",
                overflow: "hidden",
                position: "relative",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              }}>
                {/* Tag */}
                <div style={{ position: "absolute", top: "10px", right: "10px", zIndex: 3 }}>
                  <span className={tagClass[item.tag] || "badge-update"}>{item.tag}</span>
                </div>

                {/* Image */}
                <div style={{ aspectRatio: "4/3", overflow: "hidden", background: "#080410" }}>
                  <img src={item.img} alt={item.cap} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "contrast(1.05) saturate(0.9)", transition: "transform 0.6s ease" }}
                    onMouseOver={e => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  {/* Scanline overlay on image */}
                  <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(0deg,transparent 0px,transparent 3px,rgba(0,0,0,0.06) 3px,rgba(0,0,0,0.06) 4px)", pointerEvents: "none" }}/>
                </div>

                <div style={{ padding: "14px 16px", borderTop: "1px solid rgba(107,0,204,0.15)", position: "relative", zIndex: 2 }}>
                  <p style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, fontSize: "1rem", color: "#fff5e4", marginBottom: "4px" }}>{item.cap}</p>
                  <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.52rem", color: "rgba(138,122,154,0.45)", letterSpacing: "0.1em" }}>Logged: 2026-06-27 &#xB7; {item.cam}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          HOW TO BUY
      ══════════════════════════════ */}
      <section style={{
        padding: "140px 5vw 160px",
        background: "linear-gradient(135deg, #1a0d2e 0%, #120820 50%, #0d0712 100%)",
        clipPath: "polygon(0 60px, 100% 0, 100% calc(100% - 60px), 0 100%)",
        marginTop: "-60px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div className="tac-grid" style={{ position: "absolute", inset: 0, opacity: 0.4, pointerEvents: "none" }}/>
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <span className="badge-update">The Play</span>
          </div>
          <h2 style={{ fontFamily: "'Righteous', sans-serif", fontSize: "clamp(2.5rem,7vw,5.5rem)", lineHeight: 0.9, textTransform: "uppercase", marginBottom: "56px", WebkitTextStroke: "2px rgba(0,0,0,0.3)" }}>
            <div style={{ color: "#fff5e4", textShadow: "3px 3px 0 rgba(0,0,0,0.4)" }}>GET IN</div>
            <div style={{ color: "#fff5e4", textShadow: "3px 3px 0 rgba(0,0,0,0.4)" }}>BEFORE IT</div>
            <div style={{ color: "#f5c400", textShadow: "3px 3px 0 #7a4a00, 0 0 50px rgba(245,196,0,0.3)" }}>GOES AGAIN.</div>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "20px" }}>
            {[
              { n: "01", title: "Get a Wallet",  body: "Download Phantom or Solflare.\nCreate a wallet.\nSave your recovery phrase.", links: [{ l: "Phantom", h: "https://phantom.app/" }, { l: "Solflare", h: "https://solflare.com/" }], c: "#ff6b00", shadow: "#5a2000" },
              { n: "02", title: "Get SOL",        body: "Fund your wallet with SOL.", links: [], c: "#f5c400", shadow: "#7a4a00" },
              { n: "03", title: "Hit Jupiter",    body: "Open Jupiter.\nPaste the contract.\nSwap SOL for $AGAIN.", links: [{ l: "Open Jupiter", h: BUY_URL }], c: "#a78bfa", shadow: "#1a0040" },
              { n: "04", title: "Hold the Line",  body: "Welcome back.\nHere we go again.", links: [], c: "#cc0000", shadow: "#4a0000" },
            ].map((step, i) => (
              <div key={i} className="tilt-card" style={{
                background: "linear-gradient(135deg, rgba(107,0,204,0.09), rgba(13,7,18,0.95))",
                border: `1px solid rgba(${step.c === "#f5c400" ? "245,196,0" : step.c === "#ff6b00" ? "255,107,0" : step.c === "#a78bfa" ? "167,139,250" : "204,0,0"},0.25)`,
                padding: "28px 24px",
                position: "relative",
                overflow: "hidden",
              }}>
                {/* Big step number watermark */}
                <div style={{ position: "absolute", top: "-8px", right: "12px", fontFamily: "'Righteous', sans-serif", fontSize: "5rem", color: "rgba(255,255,255,0.04)", lineHeight: 1, pointerEvents: "none", WebkitTextStroke: "1px rgba(255,255,255,0.03)" }}>{step.n}</div>
                <div style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.6rem", color: step.c, letterSpacing: "0.2em", fontWeight: 700, marginBottom: "8px", textTransform: "uppercase" }}>{step.n} &#8212;</div>
                <div style={{ fontFamily: "'Righteous', sans-serif", fontWeight: 400, fontSize: "1.5rem", color: step.c, textTransform: "uppercase", marginBottom: "14px", lineHeight: 1, textShadow: `2px 2px 0 ${step.shadow}`, WebkitTextStroke: "1px rgba(0,0,0,0.3)" }}>{step.title}</div>
                <p style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 500, fontSize: "1rem", color: "rgba(255,245,228,0.75)", lineHeight: 1.6, whiteSpace: "pre-line", marginBottom: step.links.length > 0 ? "16px" : 0 }}>{step.body}</p>
                {step.links.map((lk, j) => (
                  <a key={j} href={lk.h} target="_blank" className="btn-gta btn-orange" style={{ fontSize: "0.8rem", padding: "7px 18px", marginRight: "8px", display: "inline-block" }}>{lk.l}</a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          FOOTER
      ══════════════════════════════ */}
      <footer style={{
        background: "linear-gradient(180deg, #0d0712 0%, #07040e 100%)",
        borderTop: "1px solid rgba(245,196,0,0.2)",
        padding: "64px 5vw 40px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, #cc0000, #6b00cc, #ff6b00, #f5c400, transparent)" }}/>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "40px", marginBottom: "48px" }}>
            <div style={{ maxWidth: "340px" }}>
              <div style={{ fontFamily: "'Righteous', sans-serif", fontSize: "3.5rem", color: "#f5c400", letterSpacing: "0.04em", lineHeight: 1, WebkitTextStroke: "2px rgba(0,0,0,0.35)", textShadow: "3px 3px 0 #7a4a00, 0 0 40px rgba(245,196,0,0.3)", marginBottom: "14px" }}>$AGAIN</div>
              <p style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 500, fontSize: "1rem", color: "rgba(138,122,154,0.65)", lineHeight: 1.7, marginBottom: "20px" }}>Another headline.<br/>Another day.<br/>Here we go again.</p>
              <a href={X_URL} target="_blank" className="btn-gta btn-purple" style={{ fontSize: "0.85rem", padding: "9px 20px" }}>
                <SiX size={12}/> X Community
              </a>
            </div>

            <div style={{ display: "flex", gap: "48px" }}>
              <div>
                <div style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.58rem", color: "rgba(138,122,154,0.45)", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "20px" }}>Token</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {[
                    { l: "Contract", href: undefined, action: copyCA },
                    { l: "Jupiter",    href: BUY_URL  },
                    { l: "PumpFun",   href: PUMP_URL  },
                    { l: "DexScreener",href: DEX_URL  },
                  ].map((lk, i) => lk.href ? (
                    <a key={i} href={lk.href} target="_blank" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 400, fontSize: "1rem", color: "rgba(255,245,228,0.6)", textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase", transition: "color 0.2s" }}
                      onMouseOver={e => (e.currentTarget.style.color = "#f5c400")} onMouseOut={e => (e.currentTarget.style.color = "rgba(255,245,228,0.6)")}
                    >{lk.l}</a>
                  ) : (
                    <button key={i} onClick={lk.action} style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 400, fontSize: "1rem", color: "rgba(255,245,228,0.6)", background: "none", border: "none", cursor: "pointer", textAlign: "left", letterSpacing: "0.06em", textTransform: "uppercase", transition: "color 0.2s", padding: 0 }}
                      onMouseOver={e => (e.currentTarget.style.color = "#f5c400")} onMouseOut={e => (e.currentTarget.style.color = "rgba(255,245,228,0.6)")}
                    >{lk.l}</button>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.58rem", color: "rgba(138,122,154,0.45)", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "20px" }}>Community</div>
                <a href={X_URL} target="_blank" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 400, fontSize: "1rem", color: "rgba(255,245,228,0.6)", textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "6px", transition: "color 0.2s" }}
                  onMouseOver={e => (e.currentTarget.style.color = "#a78bfa")} onMouseOut={e => (e.currentTarget.style.color = "rgba(255,245,228,0.6)")}
                ><SiX size={12}/> X Community</a>
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(107,0,204,0.12)", paddingTop: "24px" }}>
            <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.62rem", color: "rgba(138,122,154,0.35)", maxWidth: "540px", lineHeight: 1.7, marginBottom: "10px" }}>
              $AGAIN is a meme token with no intrinsic value or expectation of profit. Nothing on this site is financial advice. Do your own research.
            </p>
            <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: "0.58rem", color: "rgba(138,122,154,0.2)" }}>
              &#169; 2026 $AGAIN &#xB7; On Solana &#xB7; Ah Shit.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
