import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { SiX } from "react-icons/si";

import imgCJFace from "@assets/file_00000000ae3071f4996686dabbcc28d6_1782525794223.png";
import imgCJMissile from "@assets/file_00000000c95471f4a81c4fc202c0ef0d_1782525794267.png";
import imgCJStreet from "@assets/e3ff96bf9d25d9f6ce728bb8c982186a_1782525764183.jpg";
import imgCJBed from "@assets/cfb96f4ef5ed21e5f5f2a141ca49fd9a_1782525764435.jpg";
import imgCJCinema from "@assets/700dcb0e29ca55dbe9ab6cdff4e04727_1782525764494.jpg";
import imgCJBreaking from "@assets/1782523850458_1782525794092.png";

const CONTRACT_ADDRESS = "DR4nHueGFV6M9D3sEACyWwvt4ihhGKfQG3tyYKfXpump";

export default function Home() {
  const [time, setTime] = useState("");
  const [showMissionPassed, setShowMissionPassed] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toISOString().substring(11, 19) + " UTC");
    };
    updateTime();
    const intId = setInterval(updateTime, 1000);
    return () => clearInterval(intId);
  }, []);

  const handleCopyCA = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setShowMissionPassed(true);
    setTimeout(() => setShowMissionPassed(false), 2000);
  };

  const scrollToChart = () => {
    document.getElementById("chart")?.scrollIntoView({ behavior: "smooth" });
  };

  const [visibleEntries, setVisibleEntries] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleEntries((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".timeline-entry").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden font-rajdhani bg-grain">
      <div className="fixed inset-0 map-grid pointer-events-none z-0" />
      <div className="fixed inset-0 static-flash z-50 pointer-events-none" />

      {/* Nav */}
      <nav className="fixed top-0 w-full z-40 bg-background/90 backdrop-blur-sm border-b-2 border-primary border-b-primary flex items-center justify-between px-4 h-14 font-oswald text-sm">
        <div className="flex items-center gap-2">
          <span className="font-anton text-secondary text-2xl tracking-tight">$AGAIN</span>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a href="https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=DR4nHueGFV6M9D3sEACyWwvt4ihhGKfQG3tyYKfXpump" target="_blank" className="bg-primary text-background px-4 py-1 rounded-full font-bold hover:bg-orange-600 transition-colors">BUY</a>
          <button onClick={scrollToChart} className="bg-destructive text-white px-4 py-1 rounded-full font-bold hover:bg-red-700 transition-colors">CHART</button>
          <a href="#archive" className="bg-muted/20 text-muted-foreground px-4 py-1 rounded-full font-bold hover:bg-muted/40 transition-colors">ARCHIVE</a>
          <a href="https://x.com/i/communities/2038639985490887031" target="_blank" className="bg-muted/20 text-muted-foreground px-4 py-1 rounded-full font-bold hover:bg-muted/40 transition-colors flex items-center gap-2"><SiX /> COMMUNITY</a>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1 font-bold text-destructive">
            <div className="w-2 h-2 rounded-full bg-destructive animate-pulse-fast" />
            LIVE
          </div>
          <div className="font-courier text-muted">{time}</div>
          <svg className="w-4 h-4 text-muted" viewBox="0 0 24 24" fill="currentColor">
            <rect x="2" y="16" width="4" height="6" />
            <rect x="10" y="10" width="4" height="12" />
            <rect x="18" y="4" width="4" height="18" />
          </svg>
        </div>
      </nav>

      {/* Ticker */}
      <div className="fixed top-14 w-full z-30 bg-destructive text-white font-rajdhani font-bold py-1 overflow-hidden whitespace-nowrap text-sm tracking-wider flex">
        <div className="animate-ticker">
          <span className="mx-4">🚨 BREAKING — Another ceasefire announced · UPDATE — New reports from the Strait of Hormuz · LIVE — Markets react · BREAKING — Here we go again · $AGAIN now live on Solana · CONTRACT: DR4nHueGFV6M9D3sEACyWwvt4ihhGKfQG3tyYKfXpump · AH SHIT, HERE WE GO AGAIN · 🚀 MISSILE INBOUND · SOLANA BLOCKCHAIN CONFIRMED · </span>
          <span className="mx-4">🚨 BREAKING — Another ceasefire announced · UPDATE — New reports from the Strait of Hormuz · LIVE — Markets react · BREAKING — Here we go again · $AGAIN now live on Solana · CONTRACT: DR4nHueGFV6M9D3sEACyWwvt4ihhGKfQG3tyYKfXpump · AH SHIT, HERE WE GO AGAIN · 🚀 MISSILE INBOUND · SOLANA BLOCKCHAIN CONFIRMED · </span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative min-h-[100dvh] flex flex-col items-start justify-center pt-24 pb-12 px-6 md:px-12 lg:px-24 z-10 overflow-hidden">
        
        {/* Missiles */}
        <div className="missile m-1 text-4xl hidden md:block">🚀<div className="smoke-trail"/></div>
        <div className="missile m-2 text-3xl">🚀<div className="smoke-trail"/></div>
        <div className="missile m-3 text-5xl hidden md:block">🚀<div className="smoke-trail"/></div>

        <div className="absolute bottom-12 left-6 md:left-12 lg:left-24 font-courier text-xs font-bold text-destructive flex flex-col gap-1 z-20">
          <span className="bg-background/80 px-2 py-1 inline-block w-max">⚠ SOLANA · BREAKING NEWS · STRAIT OF HORMUZ</span>
          <span className="text-muted text-[10px] w-max">26.2°N 56.3°E</span>
        </div>

        <div className="max-w-3xl z-20 space-y-8">
          <h1 className="font-anton text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.85] tracking-tight glitch-text">
            <div className="text-foreground">AH SHIT.</div>
            <div className="text-foreground">HERE WE</div>
            <div className="text-secondary">GO AGAIN.</div>
          </h1>

          <p className="font-rajdhani text-xl md:text-2xl text-foreground max-w-lg leading-snug">
            Ceasefire lasted about five minutes.<br/>
            Another headline. Another panic.<br/>
            Here we go again.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a href="https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=DR4nHueGFV6M9D3sEACyWwvt4ihhGKfQG3tyYKfXpump" target="_blank" className="bg-secondary text-background font-anton text-2xl px-8 py-3 rounded-xl hover:scale-105 transition-transform uppercase tracking-wider">
              BUY NOW
            </a>
            <button onClick={scrollToChart} className="bg-destructive text-white font-anton text-2xl px-8 py-3 rounded-xl hover:scale-105 transition-transform uppercase tracking-wider">
              OPEN CHART
            </button>
          </div>

          <div className="bg-card border border-primary/50 p-4 rounded-lg inline-block relative group">
            <div className="font-courier text-sm break-all max-w-[280px] sm:max-w-none text-muted-foreground mb-3">
              CONTRACT: <span className="text-foreground">{CONTRACT_ADDRESS}</span>
            </div>
            <button onClick={handleCopyCA} className="bg-primary text-background font-rajdhani font-bold px-4 py-1.5 rounded uppercase text-sm hover:bg-orange-600 transition-colors w-full sm:w-auto">
              COPY CA
            </button>
            {showMissionPassed && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-anton text-secondary text-3xl sm:text-4xl whitespace-nowrap mission-passed-anim pointer-events-none drop-shadow-lg z-50">
                MISSION PASSED!
              </div>
            )}
          </div>

          <a href="https://x.com/i/communities/2038639985490887031" target="_blank" className="inline-flex items-center gap-2 bg-muted/20 px-4 py-2 rounded-full font-oswald text-sm font-bold text-muted-foreground hover:bg-muted/30 transition-colors">
            <SiX /> 𝕏 COMMUNITY
          </a>

          <div className="flex items-center gap-4 text-xs font-courier text-muted font-bold pt-4 border-t border-muted/20">
            <div><span className="text-foreground">1B</span> SUPPLY</div>
            <div className="text-muted/50">/</div>
            <div><span className="text-foreground">0%</span> TAX</div>
            <div className="text-muted/50">/</div>
            <div><span className="text-foreground">◎</span> CHAIN</div>
          </div>
        </div>
      </section>

      {/* The Situation */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-muted/20 relative z-10 bg-background/50">
        <div className="max-w-2xl">
          <div className="font-courier text-destructive font-bold text-xs uppercase mb-2 inline-block bg-destructive/10 px-2 py-0.5">THE SITUATION</div>
          <h2 className="font-anton text-5xl md:text-7xl uppercase tracking-tight mb-8">
            <span className="text-foreground">HERE WE </span>
            <span className="text-secondary">GO AGAIN.</span>
          </h2>
          
          <div className="space-y-6 font-rajdhani text-lg md:text-xl text-foreground">
            <p>Everyone has seen that moment.</p>
            <p>Something finally calms down.</p>
            <p>Five minutes later everything falls apart.</p>
            <p className="font-bold text-secondary text-2xl">Here We Go Again.</p>
            <p>$AGAIN is a Solana memecoin built around the world's favorite reaction to another breaking news notification.</p>
          </div>

          <div className="mt-12 bg-card border-l-4 border-primary p-4 inline-block shadow-lg">
            <div className="font-courier text-[10px] text-primary mb-1">UPDATE</div>
            <p className="font-rajdhani text-sm text-foreground">No roadmap. No promises. Just another day on the internet.</p>
          </div>
        </div>
      </section>

      {/* Live Timeline */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-muted/20 relative z-10">
        <div className="max-w-3xl">
          <div className="font-courier text-destructive font-bold text-xs uppercase mb-2 flex items-center gap-2">
            LIVE UPDATES <span className="w-1.5 h-1.5 rounded-full bg-destructive animate-pulse-fast"></span>
          </div>
          <h2 className="font-anton text-5xl md:text-7xl uppercase tracking-tight mb-16">
            <span className="text-foreground">SITUATION </span>
            <span className="text-secondary">REPORT</span>
          </h2>

          <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-[4px] before:w-[1px] before:bg-muted/30">
            {[
              { time: "09:14 UTC", text: "Ceasefire announced." },
              { time: "09:36 UTC", text: "Another incident reported." },
              { time: "09:42 UTC", text: "Markets react." },
              { time: "09:45 UTC", text: "$AGAIN launches on Solana." },
              { time: "09:47 UTC", text: "You're reading this." }
            ].map((item, i) => (
              <div 
                key={i} 
                data-index={i}
                className={`timeline-entry pl-6 relative transition-all duration-700 ${visibleEntries.has(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <div className="absolute left-[1px] top-1.5 w-2 h-2 rounded-full bg-primary ring-4 ring-background" />
                <div className="font-courier text-primary text-sm font-bold mb-1">{item.time}</div>
                <div className="font-rajdhani text-xl text-foreground">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <section id="chart" className="py-24 px-6 md:px-12 lg:px-24 border-t border-muted/20 relative z-10 bg-background/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <div className="font-rajdhani text-destructive font-bold text-sm uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-destructive animate-pulse-fast" />
              LIVE FEED
            </div>
            <div className="font-courier text-muted text-xs flex items-center gap-2">
              Updated live <span className="text-[10px]">UTC +0</span>
            </div>
          </div>
          
          <h2 className="font-anton text-5xl md:text-7xl uppercase tracking-tight mb-8">
            <span className="text-foreground">THE </span>
            <span className="text-secondary">CHART</span>
          </h2>

          <div className="relative rounded-xl overflow-hidden border border-primary shadow-[0_0_15px_rgba(255,107,0,0.2)] bg-card mb-8">
            <div className="absolute top-4 left-4 z-10 bg-destructive/90 px-2 py-1 font-rajdhani text-xs font-bold text-white uppercase rounded-sm">
              LIVE MARKET
            </div>
            <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full border border-accent flex items-center justify-center bg-background/80">
              <div className="w-full h-[1px] bg-accent/50 animate-radar absolute top-1/2 left-0 origin-right" />
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            </div>
            <div 
              dangerouslySetInnerHTML={{
                __html: `<style>#dexscreener-embed{position:relative;width:100%;padding-bottom:125%;}@media(min-width:1400px){#dexscreener-embed{padding-bottom:65%;}}#dexscreener-embed iframe{position:absolute;width:100%;height:100%;top:0;left:0;border:0;}</style><div id="dexscreener-embed"><iframe src="https://dexscreener.com/solana/HTWiEMpyyqRmA4o3jGioqMCtKXN8Ca5WGogUT1PYZP64?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"></iframe></div>`
              }}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
            <a href="https://dexscreener.com/solana/DR4nHueGFV6M9D3sEACyWwvt4ihhGKfQG3tyYKfXpump" target="_blank" className="bg-destructive text-white font-anton text-xl px-8 py-3 rounded-lg hover:bg-red-700 transition-colors uppercase tracking-wider text-center">
              OPEN DEXSCREENER
            </a>
            <button onClick={handleCopyCA} className="bg-secondary text-background font-anton text-xl px-8 py-3 rounded-lg hover:bg-yellow-500 transition-colors uppercase tracking-wider">
              COPY CA
            </button>
            {showMissionPassed && (
              <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 font-anton text-secondary text-2xl whitespace-nowrap mission-passed-anim pointer-events-none z-50">
                MISSION PASSED!
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Archive */}
      <section id="archive" className="py-24 px-6 md:px-12 lg:px-24 border-t border-muted/20 relative z-10">
        <div className="font-courier text-destructive font-bold text-xs uppercase mb-2 bg-destructive/10 px-2 py-0.5 inline-block">ARCHIVE</div>
        <h2 className="font-anton text-5xl md:text-7xl uppercase tracking-tight mb-2">
          <span className="text-foreground">LATEST </span>
          <span className="text-secondary">EVIDENCE</span>
        </h2>
        <p className="font-rajdhani text-muted font-bold text-lg mb-12">Situation Report</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { img: imgCJFace, caption: "CJ had a point.", cam: "CAM 01" },
            { img: imgCJMissile, caption: "Perfect timing.", cam: "FEED A" },
            { img: imgCJStreet, caption: "Market mood.", cam: "CAM 02" },
            { img: imgCJBed, caption: "Breaking again.", cam: "FEED B" },
            { img: imgCJCinema, caption: "Another notification.", cam: "CAM 03" },
            { img: imgCJBreaking, caption: "Nothing ever changes.", cam: "FEED C" }
          ].map((item, i) => (
            <div key={i} className="group bg-card border border-card-border/30 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_0_12px_rgba(255,107,0,0.4)] relative">
              <div className="absolute top-2 right-2 bg-destructive text-white font-courier text-[10px] px-1.5 py-0.5 rounded-sm z-10">
                {item.cam}
              </div>
              <div className="aspect-[4/3] w-full overflow-hidden bg-background">
                <img src={item.img} alt={item.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-4 border-t border-card-border/20">
                <p className="font-rajdhani text-foreground font-semibold">{item.caption}</p>
                <p className="font-courier text-[10px] text-muted mt-2">Logged: {new Date().toISOString().split('T')[0]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to Buy */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-muted/20 relative z-10 bg-background/50">
        <div className="max-w-4xl mx-auto">
          <div className="font-courier text-destructive font-bold text-xs uppercase mb-2">THE PLAY</div>
          <h2 className="font-anton text-5xl md:text-7xl uppercase tracking-tight mb-16 flex flex-col leading-[0.9]">
            <span className="text-foreground">GET IN</span>
            <span className="text-foreground">BEFORE IT</span>
            <span className="text-secondary">GOES AGAIN.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-muted/20 p-6 rounded-xl relative overflow-hidden">
              <div className="absolute -top-4 -right-4 font-anton text-8xl text-muted/10 select-none">01</div>
              <div className="font-anton text-2xl text-primary mb-4">01 — GET A WALLET</div>
              <p className="font-rajdhani text-foreground text-lg mb-6 relative z-10">Download Phantom or Solflare. Create a wallet. Save your recovery phrase.</p>
              <div className="flex gap-3 relative z-10">
                <a href="https://phantom.app/" target="_blank" className="text-xs font-bold font-oswald bg-muted/20 hover:bg-muted/40 px-3 py-1.5 rounded-full transition-colors">Get Phantom</a>
                <a href="https://solflare.com/" target="_blank" className="text-xs font-bold font-oswald bg-muted/20 hover:bg-muted/40 px-3 py-1.5 rounded-full transition-colors">Get Solflare</a>
              </div>
            </div>

            <div className="bg-card border border-muted/20 p-6 rounded-xl relative overflow-hidden">
              <div className="absolute -top-4 -right-4 font-anton text-8xl text-muted/10 select-none">02</div>
              <div className="font-anton text-2xl text-primary mb-4">02 — GET SOL</div>
              <p className="font-rajdhani text-foreground text-lg relative z-10">Fund your wallet with SOL.</p>
            </div>

            <div className="bg-card border border-muted/20 p-6 rounded-xl relative overflow-hidden">
              <div className="absolute -top-4 -right-4 font-anton text-8xl text-muted/10 select-none">03</div>
              <div className="font-anton text-2xl text-primary mb-4">03 — HIT JUPITER</div>
              <p className="font-rajdhani text-foreground text-lg mb-6 relative z-10">Open Jupiter. Paste the contract. Swap SOL for $AGAIN.</p>
              <a href="https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=DR4nHueGFV6M9D3sEACyWwvt4ihhGKfQG3tyYKfXpump" target="_blank" className="text-xs font-bold font-oswald bg-primary text-background hover:bg-orange-600 px-3 py-1.5 rounded-full transition-colors relative z-10 inline-block">Open Jupiter</a>
            </div>

            <div className="bg-card border border-primary/30 p-6 rounded-xl relative overflow-hidden bg-primary/5">
              <div className="absolute -top-4 -right-4 font-anton text-8xl text-primary/10 select-none">04</div>
              <div className="font-anton text-2xl text-primary mb-4">04 — HOLD THE LINE</div>
              <p className="font-rajdhani text-foreground text-lg font-bold relative z-10 leading-relaxed">
                Welcome back.<br/>
                <span className="text-secondary text-xl">Here we go again.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050604] border-t border-primary py-16 px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div>
            <div className="font-anton text-secondary text-5xl tracking-tight mb-2">$AGAIN</div>
            <div className="font-rajdhani text-muted text-lg">Another headline. Another meme. Another Solana coin.</div>
          </div>
          
          <div className="flex gap-16 font-rajdhani text-lg font-bold">
            <div className="space-y-3">
              <div className="text-muted text-sm font-courier mb-4">TOKEN</div>
              <button onClick={handleCopyCA} className="block hover:text-primary transition-colors text-left">Contract</button>
              <a href="https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=DR4nHueGFV6M9D3sEACyWwvt4ihhGKfQG3tyYKfXpump" target="_blank" className="block hover:text-primary transition-colors">Jupiter</a>
              <a href="#" className="block hover:text-primary transition-colors">PumpFun</a>
              <a href="https://dexscreener.com/solana/DR4nHueGFV6M9D3sEACyWwvt4ihhGKfQG3tyYKfXpump" target="_blank" className="block hover:text-primary transition-colors">DexScreener</a>
            </div>
            <div className="space-y-3">
              <div className="text-muted text-sm font-courier mb-4">COMMUNITY</div>
              <a href="https://x.com/i/communities/2038639985490887031" target="_blank" className="block hover:text-primary transition-colors">X Community</a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto border-t border-muted/20 pt-8">
          <p className="font-courier text-[11px] text-muted max-w-[600px] mb-4 leading-relaxed">
            $AGAIN is a meme token with no intrinsic value or expectation of profit. Nothing on this site is financial advice. Do your own research.
          </p>
          <p className="font-courier text-[10px] text-muted/50">
            © 2026 $AGAIN · On Solana · Ah Shit.
          </p>
        </div>
      </footer>
    </div>
  );
}