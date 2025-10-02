
import React, { useEffect, useMemo, useRef, useState } from "react";

const IMAGES = [
  "https://images.pexels.com/photos/31817157/pexels-photo-31817157.jpeg?_gl=1*1hqiavu*_ga*ODg2NTA4NzAxLjE3NTg0ODUzMTU.*_ga_8JE65Q40S6*czE3NTg0ODUzMTUkbzEkZzEkdDE3NTg0ODY0NTIkajMxJGwwJGgw",
  "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
  "https://images.pexels.com/photos/19899070/pexels-photo-19899070.jpeg?_gl=1*1cfvmfg*_ga*ODg2NTA4NzAxLjE3NTg0ODUzMTU.*_ga_8JE65Q40S6*czE3NTg0ODUzMTUkbzEkZzEkdDE3NTg0ODYxMTckajQwJGwwJGgw",
];

export default function App() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <HeaderWithHero />
      <AboutSection />
      <AuthoritySection />
      <PortfolioSection />
      <MarketIntelSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <ConnectCTA />
    </main>
  );
}

// ===================== NAVBAR + HERO =====================
function HeaderWithHero() {
  const [idx, setIdx] = useState(0);
  const total = IMAGES.length;

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % total), 6000);
    return () => clearInterval(t);
  }, [total]);

  const go = (dir: "next" | "prev") =>
    setIdx((i) => (i + (dir === "next" ? 1 : -1) + total) % total);

  return (
    <section className="relative" id="hero">
      <nav className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center gap-6">
          <a href="#" className="flex items-center gap-3 shrink-0" aria-label="Home">
            <div className="border border-black px-2 py-1 leading-none tracking-widest">NB</div>
            <div className="text-[11px] leading-tight uppercase tracking-[0.16em]">
              <div className="font-semibold text-[12px]">Leanne Bakos</div>
              <div className="opacity-70">Real Estate</div>
            </div>
          </a>

          <div className="hidden md:flex items-center justify-center flex-1">
            <ul className="flex items-center gap-8 text-[12px] tracking-[0.12em] uppercase">
              <li><a className="hover:opacity-60 transition" href="#portfolio">Portfolio</a></li>
              <li><a className="hover:opacity-60 transition" href="#market">Market Intelligence</a></li>
              <li><a className="hover:opacity-60 transition" href="#testimonials">Testimonials</a></li>
              <li><a className="hover:opacity-60 transition" href="#contact">By Appointment</a></li>
            </ul>
          </div>

          <div className="ml-auto hidden md:block text-[12px] tracking-[0.14em]">
            <a href="tel:+27000000000">+27 ••• ••••</a>
          </div>
        </div>
      </nav>

      <div className="relative h-[78vh] md:h-[86vh] overflow-hidden">
        {IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Luxury property"
            className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ${i === idx ? "opacity-100" : "opacity-0"}`}
          />
        ))}

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 h-full w-full">
          <div className="mx-auto max-w-5xl px-6 h-full flex flex-col items-center justify-center text-white text-center">
            <span className="inline-flex items-center gap-2 border border-white/60 px-3 py-1 text-[11px] tracking-[0.18em] uppercase backdrop-blur-sm">
              <span className="inline-block size-2 bg-[var(--sf-gold)]" /> StatusForge Partner
            </span>
            <h1 className="mt-6 font-serif text-3xl md:text-5xl lg:text-[56px] leading-[1.15] drop-shadow-sm">
              Leanne Bakos — Private Client Real Estate
            </h1>
            <p className="mt-3 text-sm md:text-base opacity-90 max-w-2xl">
              Luxury property advisory in Randburg & Sandton. High‑discretion, results‑driven representation.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a href="#contact" className="inline-block border border-white/80 px-8 py-3 tracking-[0.18em] text-[12px] uppercase hover:bg-white hover:text-black transition">By Appointment Only</a>
              <a href="#portfolio" className="inline-block border border-white/40 px-8 py-3 tracking-[0.18em] text-[12px] uppercase hover:bg-white/10 transition">View Portfolio</a>
            </div>
          </div>
        </div>

        {/* Arrows hidden on mobile */}
        <button
          aria-label="Previous slide"
          onClick={() => go("prev")}
          className="hidden md:inline-flex group absolute left-6 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center border border-white/70 text-white hover:bg-white hover:text-black transition"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button
          aria-label="Next slide"
          onClick={() => go("next")}
          className="hidden md:inline-flex group absolute right-6 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center border border-white/70 text-white hover:bg-white hover:text-black transition"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </section>
  );
}

// ===================== ABOUT =====================
function AboutSection(){
  return (
    <section id="about" className="py-28 px-6">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-[420px,1fr] gap-12 lg:gap-16 items-center">
        <img src="https://res.cloudinary.com/dsalwmbub/image/upload/v1759201741/516543679_18516759217061405_412300132199100235_n_xqbvtq.jpg" alt="Leanne Bakos headshot" className="w-full h-[560px] object-cover rounded-[28px]" />
        <div>
          <h2 className="font-serif text-4xl md:text-5xl">About Leanne Bakos</h2>
          <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
            Leanne represents discerning buyers and sellers across Randburg & Sandton. With a reputation for
            quiet execution and meticulous deal craftsmanship, he navigates complex, high‑value transactions with
            discretion.
          </p>
          <ul className="mt-8 grid sm:grid-cols-3 gap-4">
            <li className="border border-neutral-200 rounded-2xl p-6"><p className="text-sm uppercase tracking-[0.14em] text-neutral-500">Experience</p><p className="mt-2 text-2xl font-semibold">10+ Years</p></li>
            <li className="border border-neutral-200 rounded-2xl p-6"><p className="text-sm uppercase tracking-[0.14em] text-neutral-500">Credentials</p><p className="mt-2 text-2xl font-semibold">REALTOR®, PPRE</p></li>
            <li className="border border-neutral-200 rounded-2xl p-6"><p className="text-sm uppercase tracking-[0.14em] text-neutral-500">Partnership</p><p className="mt-2 text-2xl font-semibold">StatusForge</p></li>
          </ul>
          <p className="mt-6 text-neutral-600 text-base">StatusForge partnership adds precision branding, authority content, and market visibility to every brief.</p>
        </div>
      </div>
    </section>
  );
}

// ===================== AUTHORITY / STATS =====================
function AuthoritySection(){
  return (
    <section id="authority" className="py-28 px-6 bg-neutral-50">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-4xl md:text-5xl text-center">Success</h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <StatCard label="Total Sales" value={<CountUp end={85} prefix="R" suffix="M+" />} note="Across luxury categories"/>
          <StatCard label="Price Band" value={<CountUp end={2} prefix="R" suffix="M+" />} note="High‑value properties"/>
          <StatCard label="Client Satisfaction" value={<CountUp end={98} suffix="%" />} note="Post‑close surveys"/>
        </div>
      </div>
    </section>
  );
}
function StatCard({label, value, note}:{label:string; value:React.ReactNode; note:string}){
  return (<div className="rounded-2xl border border-neutral-200 p-8 bg-white text-center"><p className="text-sm uppercase tracking-[0.14em] text-neutral-500">{label}</p><div className="mt-2 text-5xl font-semibold">{value}</div><p className="mt-2 text-neutral-600">{note}</p></div>);
}
function CountUp({ end, duration = 1.6, prefix = "", suffix = "", decimals = 0 }:
  { end: number; duration?: number; prefix?: string; suffix?: string; decimals?: number; }){
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);
  const elRef = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    const el = elRef.current; if (!el) return;
    if (!("IntersectionObserver" in window)) { setStarted(true); return; }
    const obs = new IntersectionObserver((entries) => { const e = entries[0]; if (e && e.isIntersecting) { setStarted(true); obs.disconnect(); } }, { threshold: 0.35 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (!started) return; const startTime = performance.now(); const d = duration*1000; let raf = 0;
    const tick = (now:number) => { const progress = Math.min((now-startTime)/d, 1); setVal(end*progress); if (progress < 1) raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick); return () => cancelAnimationFrame(raf);
  }, [started, end, duration]);
  const format = (n:number) => new Intl.NumberFormat("en-US", { maximumFractionDigits: decimals }).format(decimals ? Number(n.toFixed(decimals)) : Math.round(n));
  return <span ref={elRef}>{prefix}{format(val)}{suffix}</span>;
}

// ===================== PORTFOLIO =====================
function PortfolioSection(){
  const [tab, setTab] = useState<"sold" | "exclusive">("sold");
  const sold = useMemo(() => ([
    { title: "4-Bed Modern Villa", price: "R6.9M", area: "Sandton", img: "https://images.pexels.com/photos/261187/pexels-photo-261187.jpeg" },
    { title: "Penthouse with City Views", price: "R8.2M", area: "Rosebank", img: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg" },
    { title: "Golf Estate Residence", price: "R5.4M", area: "Midrand", img: "https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg" },
    { title: "Architectural Family Home", price: "R3.2M", area: "Fourways", img: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg" },
    { title: "Contemporary Cluster Home", price: "R4.1M", area: "Bryanston", img: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg" },
    { title: "Executive Apartment", price: "R2.7M", area: "Hyde Park", img: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg" },
  ]), []);
  const exclusive = useMemo(() => ([
    { title: "Exclusive: Ridgeview Villa", price: "R12.0M", area: "Bryanston", img: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg" },
    { title: "Exclusive: Forest Edge Estate", price: "R9.5M", area: "Waterfall", img: "https://images.pexels.com/photos/1396125/pexels-photo-1396125.jpeg" },
    { title: "Exclusive: Skyline Penthouse", price: "R14.8M", area: "Sandton CBD", img: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg" },
  ]), []);
  const items = tab === "sold" ? sold : exclusive;

  return (
    <section id="portfolio" className="min-h-screen py-28 bg-black text-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl">Portfolio</h2>
        <p className="mt-3 text-sm text-white/60">High‑value properties only (R2M+)</p>
        <div className="mt-8 mx-auto w-full max-w-md">
          <div className="relative bg-white/10 border border-white/20 rounded-full p-1 flex">
            <button type="button" onClick={() => setTab("sold")} className={`relative z-10 flex-1 py-3 text-[12px] uppercase tracking-[0.14em] transition ${tab === "sold" ? "text-white" : "text-white/60 hover:text-white"}`}>Recently Sold</button>
            <button type="button" onClick={() => setTab("exclusive")} className={`relative z-10 flex-1 py-3 text-[12px] uppercase tracking-[0.14em] transition ${tab === "exclusive" ? "text-white" : "text-white/60 hover:text-white"}`}>Exclusively Listed</button>
            <span className={`absolute top-1 bottom-1 w-1/2 rounded-full bg-white/20 backdrop-blur-sm shadow-sm transition-transform duration-300 ease-out ${tab === "sold" ? "translate-x-0" : "translate-x-full"}`} aria-hidden />
          </div>
        </div>
      </div>

      <div className="mt-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {items.map((p,i)=>(<CardTall key={`${tab}-${i}`} {...p} tag={tab === "exclusive" ? "Exclusive" : undefined} />))}
        </div>
      </div>
    </section>
  );
}
function CardTall({ title, price, area, img, tag }:{ title:string; price:string; area:string; img:string; tag?:string }){
  return (
    <a href="#" className="group relative block h-[80vh] sm:h-[70vh] rounded-[28px] overflow-hidden shadow-xl">
      <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" loading="lazy"/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent"/>
      {tag && (<span className="absolute left-6 top-6 bg-white/90 text-black text-xs tracking-widest px-3 py-1 uppercase">{tag}</span>)}
      <div className="absolute left-8 right-8 bottom-8 text-white"><h4 className="font-serif text-3xl md:text-4xl drop-shadow-[0_6px_24px_rgba(0,0,0,0.55)]">{title}</h4><p className="opacity-90">{area}</p><p className="mt-1 font-medium">{price}</p></div>
    </a>
  );
}

// ===================== MARKET INTELLIGENCE (scoped) =====================
function MarketIntelSection(){
  return (
    <section id="market" className="bg-[#f7f6f3] text-[#0f0f10]">
      <style>{`
        .mi{ --bg:#f7f6f3; --text:#0f0f10; --muted:#6b7280; --border:#e5e7eb; --accent:#eeb75d; --accent-dark:#d9a74f; }
        .mi *{ box-sizing:border-box }
        .mi .mi-section{ padding:56px 20px }
        .mi .mi-container{ max-width:1100px; margin:0 auto }
        .mi .mi-header{ text-align:center; max-width:800px; margin:0 auto 22px }
        .mi h2{ font-family:'Playfair Display',serif; font-size:clamp(28px,4vw,40px); margin:0 }
        .mi .mi-sub{ color:var(--muted); margin-top:8px }
        .mi .mi-grid{ display:grid; gap:18px }
        .mi .mi-grid-3{ grid-template-columns:repeat(3,minmax(0,1fr)) }
        @media(max-width:900px){ .mi .mi-grid-3{ grid-template-columns:1fr 1fr } }
        @media(max-width:640px){ .mi .mi-grid-3{ grid-template-columns:1fr } }
        .mi .mi-card{ display:flex; flex-direction:column; background:#fff; border:1px solid var(--border); border-radius:16px; overflow:hidden; box-shadow:0 6px 18px rgba(15,15,16,.06); transition:transform .18s ease, box-shadow .18s ease }
        .mi .mi-card:hover{ transform:translateY(-4px); box-shadow:0 10px 24px rgba(15,15,16,.12) }
        .mi .mi-thumb{ aspect-ratio:16/9; background:#ddd; position:relative; overflow:hidden }
        .mi .mi-thumb img{ width:100%; height:100%; object-fit:cover; display:block }
        .mi .mi-content{ padding:16px 16px 18px }
        .mi .mi-kicker{ font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:#4b5563; font-weight:700 }
        .mi .mi-title{ margin:6px 0 6px; font-weight:700; font-size:18px; line-height:1.25 }
        .mi .mi-meta{ display:flex; gap:10px; align-items:center; color:#6b7280; font-size:13px }
        .mi .mi-dot{ width:4px; height:4px; border-radius:50%; background:#c7cdd8 }
        .mi .mi-tags{ display:flex; flex-wrap:wrap; gap:8px; margin-top:10px }
        .mi .mi-tag{ font-size:12px; padding:4px 8px; border-radius:999px; background:#f5f5f5; border:1px solid #eee }
        .mi .mi-cta{ margin-top:auto; display:flex; align-items:center; justify-content:space-between; gap:12px; padding:12px 16px; border-top:1px dashed var(--border); background:linear-gradient(180deg,#fff, #fff8ec) }
        .mi .mi-cta a{ text-decoration:none; background:var(--accent); color:#fff; padding:8px 12px; border-radius:10px; font-weight:600; border:1px solid var(--accent-dark); box-shadow:0 8px 18px rgba(238,183,93,.25); transition:transform .12s ease, box-shadow .12s ease, background .12s ease }
        .mi .mi-cta a:hover{ transform:translateY(-1px); background:#f1c273; box-shadow:0 10px 22px rgba(238,183,93,.35) }
        .mi .mi-cta small{ color:#7a7f8a }
        .mi .mi-row-actions{ display:flex; justify-content:center; gap:10px; margin-top:20px }
        .mi .mi-ghost{ background:#fff; border:1px solid var(--border); padding:10px 12px; border-radius:10px; font-weight:600; font-size:14px; text-decoration:none; color:#374151 }
        .mi .mi-primary{ background:var(--accent); color:#fff; border:1px solid var(--accent-dark) }
        .mi .mi-primary:hover{ filter:brightness(1.05) }
      `}</style>

      <div className="mi mi-section">
        <div className="mi-container">
          <div className="mi-header">
            <h2>Insights & Updates</h2>
            <p className="mi-sub">Short, sharp reads on Sandton, Fourways, and Midrand — all hosted on Medium for credibility and shareability.</p>
          </div>

          <div className="mi-grid mi-grid-3">
            <article className="mi-card">
              <div className="mi-thumb">
                <img src="https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Sandton skyline at sunset" />
              </div>
              <div className="mi-content">
                <div className="mi-kicker">Market Timing</div>
                <div className="mi-title">Homes Are Moving Faster in Sandton East — Here’s the 21‑Day Window</div>
                <div className="mi-meta"><span>By Leanne Bakos</span><span className="mi-dot"/><span>5 min read</span><span className="mi-dot"/><span>Sep 2025</span></div>
                <div className="mi-tags"><span className="mi-tag">Sandton</span><span className="mi-tag">Pricing</span><span className="mi-tag">Strategy</span></div>
              </div>
              <div className="mi-cta"><small>Read the full story on Medium</small><a href="https://medium.com/" target="_blank" rel="noopener noreferrer">Read on Medium →</a></div>
            </article>

            <article className="mi-card">
              <div className="mi-thumb">
                <img src="https://images.pexels.com/photos/31817157/pexels-photo-31817157.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Fourways modern home exterior" />
              </div>
              <div className="mi-content">
                <div className="mi-kicker">Pricing Power</div>
                <div className="mi-title">Fourways Cluster Homes: Why R21,700/m² Is the New Normal</div>
                <div className="mi-meta"><span>By Leanne Bakos</span><span className="mi-dot"/><span>4 min read</span><span className="mi-dot"/><span>Sep 2025</span></div>
                <div className="mi-tags"><span className="mi-tag">Fourways</span><span className="mi-tag">Valuation</span><span className="mi-tag">Seller Tips</span></div>
              </div>
              <div className="mi-cta"><small>Read the full story on Medium</small><a href="https://medium.com/" target="_blank" rel="noopener noreferrer">Read on Medium →</a></div>
            </article>

            <article className="mi-card">
              <div className="mi-thumb">
                <img src="https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Midrand townhouse interior" />
              </div>
              <div className="mi-content">
                <div className="mi-kicker">Buyer Demand</div>
                <div className="mi-title">Midrand Townhouses: 4 Buyers Per Listing — How to Win Bidding</div>
                <div className="mi-meta"><span>By Leanne Bakos</span><span className="mi-dot"/><span>6 min read</span><span className="mi-dot"/><span>Sep 2025</span></div>
                <div className="mi-tags"><span className="mi-tag">Midrand</span><span className="mi-tag">Buyers</span><span className="mi-tag">Offers</span></div>
              </div>
              <div className="mi-cta"><small>Read the full story on Medium</small><a href="https://medium.com/" target="_blank" rel="noopener noreferrer">Read on Medium →</a></div>
            </article>
          </div>

          <div className="mi-row-actions">
            <a className="mi-ghost" href="#all-posts">See all posts</a>
            <a className="mi-ghost mi-primary" href="https://medium.com/" target="_blank" rel="noopener noreferrer">Visit Leanne on Medium</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===================== TESTIMONIALS CAROUSEL =====================
function TestimonialsSection(){
  const slides = [
    { text: "Leanne's understanding of the luxury market is unparalleled. He secured our R15M Waterfall property in a highly competitive environment, handling every detail with absolute professionalism and discretion.", author: "James & Sarah Mitchell", title: "Entrepreneurs, Steyn City Residents" },
    { text: "Working with a StatusForge certified professional made all the difference. Leanne's market intelligence and network access gave us opportunities we never would have found elsewhere.", author: "Dr. Michael Khumalo", title: "Specialist Surgeon, Sandton" },
    { text: "The level of service and expertise exceeded every expectation. From initial consultation to final transfer, Leanne managed our R20M acquisition with remarkable efficiency and insight.", author: "Maria & Carlos Santos", title: "International Executives" },
  ];
  const virtual = [slides[slides.length - 1], ...slides, slides[0]];
  const [index, setIndex] = useState(1);
  const [anim, setAnim] = useState(true);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [width, setWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const startXRef = useRef(0);
  const deltaXRef = useRef(0);
  const pointerIdRef = useRef<number | null>(null);

  useEffect(() => {
    const measure = () => { if (viewportRef.current) setWidth(viewportRef.current.clientWidth); };
    measure();
    let ro: any;
    if ("ResizeObserver" in window && viewportRef.current){ ro = new (window as any).ResizeObserver(measure); ro.observe(viewportRef.current); }
    else { window.addEventListener("resize", measure); }
    return () => { ro?.disconnect?.(); window.removeEventListener("resize", measure); };
  }, []);

  useEffect(() => {
    if (paused || dragging || !width) return;
    const t = setInterval(() => next(), 4500);
    return () => clearInterval(t);
  }, [paused, dragging, index, width]);

  const next = () => { setAnim(true); setIndex((i) => i + 1); };
  const prev = () => { setAnim(true); setIndex((i) => i - 1); };
  const goReal = (realIdx: number) => { setAnim(true); setIndex(realIdx + 1); };
  const onTransitionEnd = () => {
    if (index === 0) { setAnim(false); setIndex(slides.length); }
    else if (index === slides.length + 1) { setAnim(false); setIndex(1); }
  };
  useEffect(() => { if (!anim) requestAnimationFrame(() => setAnim(true)); }, [anim]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture?.(e.pointerId);
    pointerIdRef.current = e.pointerId;
    setDragging(true); deltaXRef.current = 0; startXRef.current = e.clientX; setAnim(false);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging || pointerIdRef.current !== e.pointerId) return;
    deltaXRef.current = e.clientX - startXRef.current;
  };
  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (pointerIdRef.current !== e.pointerId) return;
    try { e.currentTarget.releasePointerCapture?.(e.pointerId); } catch {}
    if (!dragging) return;
    const dx = deltaXRef.current; setDragging(false); setAnim(true);
    const threshold = Math.max(60, width * 0.12);
    if (dx > threshold) prev(); else if (dx < -threshold) next(); else setIndex((i) => i);
    deltaXRef.current = 0; pointerIdRef.current = null;
  };

  const base = -index * width;
  const translate = dragging ? base + deltaXRef.current : base;
  const transition = anim ? "transform 700ms ease-in-out" : "none";

  return (
    <section id="testimonials" className="bg-[#f6f6f6] py-[120px] select-none">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-center">Client Success Stories</h2>
        <p className="text-center text-neutral-500 mt-2">Discretion, expertise, and exceptional results</p>

        <div
          ref={viewportRef}
          className="relative mt-10 overflow-hidden rounded-2xl touch-pan-y cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          role="region"
          aria-roledescription="carousel"
          aria-label="Testimonials"
          aria-live="off"
        >
          <div
            className="flex"
            style={{ width: `${virtual.length * width}px`, transform: `translate3d(${translate}px,0,0)`, transition }}
            onTransitionEnd={onTransitionEnd}
          >
            {virtual.map((t, i) => (
              <div key={i} style={{ width: `${width}px` }} className="px-1">
                <article data-quote={'"'} className="relative z-0 overflow-hidden bg-white p-10 md:p-12 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] before:absolute before:top-3 before:left-6 before:text-[7rem] before:text-[var(--sf-gold)] before:opacity-20 before:leading-none before:font-serif before:pointer-events-none before:-z-[1] before:content-[attr(data-quote)]">
                  <div className="italic text-[1.1rem] leading-[1.8] text-neutral-600 mt-5 mb-[25px] relative z-10">{t.text}</div>
                  <div className="font-semibold text-neutral-900 relative z-10">{t.author}</div>
                  <div className="text-[0.9rem] text-neutral-600 relative z-10">{t.title}</div>
                </article>
              </div>
            ))}
          </div>

          <button aria-label="Previous" onClick={prev} className="flex absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white/90 hover:bg-white shadow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button aria-label="Next" onClick={next} className="flex absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white/90 hover:bg-white shadow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {slides.map((_, realIdx) => {
            const active = (index - 1 + slides.length) % slides.length === realIdx;
            return (
              <button key={realIdx} onClick={() => goReal(realIdx)} aria-label={`Go to slide ${realIdx + 1}`} className={`h-2.5 rounded-full transition-all ${active ? 'w-6 bg-neutral-900' : 'w-2.5 bg-neutral-300 hover:bg-neutral-400'}`} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ===================== CONTACT SECTION (info) =====================
function ContactSection(){
  return (
    <section id="contact" className="py-28 px-6 bg-neutral-900 text-white">
      <div className="mx-auto max-w-5xl text-center">
        <p className="uppercase tracking-[0.18em] text-[11px] text-white/70">Exclusive consultation</p>
        <h2 className="mt-3 font-serif text-4xl md:text-5xl">Request a Confidential Consultation</h2>
        <p className="mt-3 text-white/80 max-w-2xl mx-auto">Confidential inquiries welcome. High‑discretion advisory for buyers and sellers.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <ContactCard title="Call" value="+27 ••• ••••" href="tel:+27000000000"/>
          <ContactCard title="Email" value="Leanne@example.com" href="mailto:Leanne@example.com"/>
          <ContactCard title="Schedule" value="Book a 15‑min consult" href="#"/>
        </div>
      </div>
    </section>
  );
}
function ContactCard({title, value, href}:{title:string; value:string; href:string}){ return (<a href={href} className="rounded-2xl border border-white/20 p-6 hover:bg-white/5 transition"><p className="text-sm uppercase tracking-[0.14em] text-white/70">{title}</p><p className="mt-2 text-xl font-medium">{value}</p></a>); }

// ===================== FOOTER (50vh) =====================
function Footer(){
  const year = new Date().getFullYear(); const company = "Leanne Bakos"; const brandTag = "The Bakos Estate Co";
  const phoneDisplay = "(+27) 555-0199"; const phoneHref = "tel:+275550199"; const email = "Leanne@example.com";
  const address1 = "8569 Pines Blvd., #214"; const address2 = "Johannesburg, GP 2000";
  const nav = [{label:"Home",href:"#"}, {label:"Meet the Team",href:"#about"}, {label:"Featured Listings",href:"#portfolio"}, {label:"Testimonials",href:"#testimonials"}, {label:"Contact Us",href:"#contact"}];
  return (
    <footer className="bg-white text-neutral-900 border-t border-neutral-200 px-6">
      <div className="mx-auto max-w-7xl min-h-[50vh] flex flex-col justify-between">
        <div className="pt-12 md:pt-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-3"><div className="inline-flex items-baseline gap-2"><div className="text-2xl tracking-[0.2em]">Leanne</div><div className="h-5 w-[2px] bg-neutral-300"/><div className="text-sm tracking-[0.24em] uppercase">NB</div></div></div>
            <div className="md:col-span-5"><h3 className="font-semibold tracking-wide text-lg">{brandTag}</h3><div className="mt-4 space-y-1"><a href={phoneHref} className="inline-block border-b border-neutral-900/40 pb-1">{phoneDisplay}</a><br/><a href={`mailto:${email}`} className="inline-block border-b border-neutral-900/40 pb-1">{email}</a></div></div>
            <div className="md:col-span-4"><h3 className="font-semibold tracking-wide text-lg">Address</h3><p className="mt-4">{address1}</p><p>{address2}</p></div>
            <div className="md:col-span-12 flex md:justify-end gap-4 md:gap-5 mt-6 md:mt-0">{["facebook","instagram","linkedin","x","google","homes"].map((name)=>(<a key={name} href="#" aria-label={name} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#5c7fbd] text-[#5c7fbd]"><SocialIcon name={name} /></a>))}</div>
          </div>
          <div className="mt-10 flex flex-wrap gap-8 md:gap-12">{nav.map((n)=>(<a key={n.label} href={n.href} className="uppercase text-sm tracking-[0.18em] border-b border-neutral-900/60 pb-1 hover:opacity-70">{n.label}</a>))}</div>
          <p className="mt-10 text-sm text-neutral-600 max-w-4xl">All information is deemed reliable but not guaranteed and should be independently reviewed and verified.</p>
          <div className="mt-6 flex items-center gap-6"><span className="inline-flex h-10 w-14 items-center justify-center bg-neutral-100 text-neutral-400 text-xs">R</span><span className="inline-flex h-10 w-14 items-center justify-center bg-neutral-100 text-neutral-400 text-xs">EHO</span></div>
        </div>
        <div className="py-8 border-t border-neutral-200 mt-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-neutral-300">SF</span><span className="text-sm">Website designed and developed by <a href="#" className="underline">StatusForge</a></span></div>
          <div className="text-sm text-neutral-700 text-center md:text-right">Copyright © {year} {company}, License# NB1053758 · <a href="#" className="underline">Privacy Policy</a></div>
        </div>
      </div>
    </footer>
  );
}
function SocialIcon({ name }:{name:string}){
  switch(name){
    case "facebook": return (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 8h3V5h-3c-1.66 0-3 1.34-3 3v2H8v3h3v6h3v-6h3l1-3h-4V8c0-.55.45-1 1-1Z" stroke="currentColor" strokeWidth="1.2"/></svg>);
    case "instagram": return (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.2"/><circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.2"/><circle cx="17" cy="7" r="1" fill="currentColor"/></svg>);
    case "linkedin": return (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.2"/><path d="M8 11v5M8 8.5h0M12 16v-3.5a2 2 0 1 1 4 0V16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>);
    case "x": return (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>);
    case "google": return (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 12a9 9 0 1 1-2.64-6.36" stroke="currentColor" strokeWidth="1.2"/><path d="M21 12h-8" stroke="currentColor" strokeWidth="1.2"/></svg>);
    case "homes": return (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 11l8-6 8 6v8H4v-8Z" stroke="currentColor" strokeWidth="1.2"/><path d="M10 19v-6h4v6" stroke="currentColor" strokeWidth="1.2"/></svg>);
    default: return null;
  }
}

// ===================== CONNECT FAB + VALIDATED MODAL =====================
function ConnectCTA(){
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  // Show after HERO section
  useEffect(() => {
    const update = () => {
      const el = document.getElementById('hero');
      if (!el) { setVisible(true); return; }
      const bottomAbs = el.getBoundingClientRect().bottom + window.scrollY;
      setVisible(window.scrollY > bottomAbs - 20);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`fixed left-5 bottom-24 md:left-6 md:bottom-6 z-40 inline-flex items-center gap-3 rounded-full bg-black text-white px-5 md:px-6 h-12 shadow-[0_10px_30px_rgba(0,0,0,0.35)] border border-white/10 hover:translate-y-[-1px] transition ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none translate-y-2'}`}
        aria-label="Open contact"
      >
        <span className="tracking-[0.18em] text-[12px] uppercase">Let's Connect</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="opacity-80"><path d="M6 14l6-6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>

      {open && <ContactModal onClose={() => setOpen(false)} />}
    </>
  );
}

type Values = { name:string; email:string; phone:string; interest:string; message:string; consent:boolean };
type Errors = Partial<Record<keyof Values, string>>;

function ContactModal({ onClose }:{onClose:() => void}){
  const firstRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const prev = (document.body.style as any).overflow;
    document.body.style.overflow = 'hidden';
    firstRef.current?.focus?.();
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey); };
  }, [onClose]);

  const [values, setValues] = useState<Values>({ name:"", email:"", phone:"", interest:"", message:"", consent:false });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const refs = {
    name: useRef<HTMLInputElement | null>(null),
    email: useRef<HTMLInputElement | null>(null),
    phone: useRef<HTMLInputElement | null>(null),
    interest: useRef<HTMLSelectElement | null>(null),
    message: useRef<HTMLTextAreaElement | null>(null),
    consent: useRef<HTMLInputElement | null>(null),
  };

  const setField = (k: keyof Values) => (e: any) => {
    const v = k === "consent" ? !!e.target.checked : e.target.value;
    setValues((s) => ({ ...s, [k]: v }));
  };

  const validate = (v: Values): Errors => {
    const errs: Errors = {};
    if (!v.name || v.name.trim().length < 2) errs.name = "Please enter your full name.";
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email);
    if (!emailOk) errs.email = "Enter a valid email address.";
    if (v.phone && (v.phone.replace(/\D/g,"").length < 7)) errs.phone = "Enter a valid phone number.";
    if (!v.interest) errs.interest = "Select what you're interested in.";
    if (v.message && v.message.trim().length < 10) errs.message = "Add a little more detail (10+ chars).";
    if (!v.consent) errs.consent = "Please agree to the privacy notice.";
    return errs;
  };

  const focusFirstError = (errs: Errors) => {
    const order: (keyof Values)[] = ["name","email","phone","interest","message","consent"];
    for (const k of order) { if (errs[k]) { (refs[k].current as any)?.focus?.(); break; } }
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) { focusFirstError(errs); return; }
    setSubmitting(true);
    try {
      // simulate post
      await new Promise((r) => setTimeout(r, 800));
      setSuccess(true);
    } finally {
      setSubmitting(false);
    }
  };

  const fieldClass = (key: keyof Values) =>
    `w-full rounded-md px-4 py-3 bg-neutral-800/80 border placeholder-neutral-400 focus:outline-none focus:ring-2 ${errors[key] ? "border-red-500 focus:ring-red-500" : "border-neutral-700 focus:ring-white/30"}`;

  const stop = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-0 sm:p-4" onClick={onClose}>
      <div
        onClick={stop}
        className="bg-neutral-900 text-white w-screen h-screen rounded-t-[24px] sm:rounded-[24px] md:rounded-2xl md:w-[45vw] md:h-auto md:max-h-[92vh] shadow-2xl border border-white/10 overflow-hidden"
        role="dialog" aria-modal="true" aria-label="Leave a message"
      >
        <div className="relative p-5 sm:p-7 md:p-8 lg:p-10 flex flex-col min-h-full">
          {/* Close (desktop) */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="hidden md:inline-flex absolute right-4 top-4 h-9 w-9 items-center justify-center rounded-md border border-white/20 text-white/90 hover:bg-white/10"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </button>

          {success ? (
            <div className="flex-1 grid place-items-center text-center">
              <div>
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-white text-black grid place-items-center">
                  ✓
                </div>
                <h4 className="font-serif text-2xl">Message sent</h4>
                <p className="mt-2 text-white/80">We’ll be in touch shortly. Thanks for reaching out.</p>
                <button onClick={onClose} className="mt-6 inline-flex items-center justify-center rounded-md bg-white text-black px-6 h-11 font-semibold border border-white hover:bg-white/90">Close</button>
              </div>
            </div>
          ) : (
            <>
              <h3 className="font-serif uppercase tracking-[0.18em] text-[26px] sm:text-[30px] md:text-4xl">
                Leave a Message
              </h3>

              <form onSubmit={submit} noValidate className="mt-5 sm:mt-6 grid gap-3 md:gap-4">
                {/* Name */}
                <label className="sr-only" htmlFor="name">Full Name</label>
                <input ref={(el)=>{firstRef.current = el; refs.name.current = el}} id="name" name="name" placeholder="Full Name" value={values.name} onChange={setField("name")} aria-invalid={!!errors.name} aria-describedby={errors.name ? "err-name" : undefined} className={fieldClass("name")} />
                {errors.name && <p id="err-name" role="alert" className="text-red-400 text-sm">{errors.name}</p>}

                {/* Email */}
                <label className="sr-only" htmlFor="email">Email</label>
                <input ref={refs.email} id="email" type="email" name="email" placeholder="Email" value={values.email} onChange={setField("email")} aria-invalid={!!errors.email} aria-describedby={errors.email ? "err-email" : undefined} className={fieldClass("email")} />
                {errors.email && <p id="err-email" role="alert" className="text-red-400 text-sm">{errors.email}</p>}

                {/* Phone */}
                <label className="sr-only" htmlFor="phone">Phone</label>
                <input ref={refs.phone} id="phone" name="phone" placeholder="Phone" value={values.phone} onChange={setField("phone")} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "err-phone" : undefined} className={fieldClass("phone")} />
                {errors.phone && <p id="err-phone" role="alert" className="text-red-400 text-sm">{errors.phone}</p>}

                {/* Interest */}
                <div className="relative">
                  <label className="sr-only" htmlFor="interest">Interested in</label>
                  <select ref={refs.interest} id="interest" name="interest" value={values.interest} onChange={setField("interest")} aria-invalid={!!errors.interest} aria-describedby={errors.interest ? "err-interest" : undefined} className={`appearance-none ${fieldClass("interest")}`}>
                    <option value="">Interested in…</option>
                    <option>Selling & Buying</option>
                    <option>Buying</option>
                    <option>Selling</option>
                    <option>Renting</option>
                    <option>Other</option>
                  </select>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 opacity-70">
                    <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {errors.interest && <p id="err-interest" role="alert" className="text-red-400 text-sm">{errors.interest}</p>}

                {/* Message */}
                <label className="sr-only" htmlFor="message">Message</label>
                <textarea ref={refs.message} id="message" name="message" rows={5} placeholder="Message" value={values.message} onChange={setField("message")} aria-invalid={!!errors.message} aria-describedby={errors.message ? "err-message" : undefined} className={fieldClass("message")} />
                {errors.message && <p id="err-message" role="alert" className="text-red-400 text-sm">{errors.message}</p>}

                {/* Consent */}
                <label className="mt-1 flex items-start gap-3 text-[12.5px] leading-snug text-neutral-300">
                  <input ref={refs.consent} type="checkbox" checked={values.consent} onChange={setField("consent")} aria-invalid={!!errors.consent} className={`mt-1 accent-white ${errors.consent ? "outline outline-2 outline-red-500" : ""}`} />
                  <span>
                    By providing The Nice Agent your contact information, you acknowledge and agree to our
                    <a href="#" className="underline"> Privacy Policy</a> and consent to receiving marketing communications.
                  </span>
                </label>
                {errors.consent && <p role="alert" className="text-red-400 text-sm">{errors.consent}</p>}

                {/* Submit buttons */}
                <button type="submit" disabled={submitting} className="block md:hidden w-full mt-3 h-12 rounded-md bg-white text-black font-semibold tracking-wide border border-white hover:bg-white/90 disabled:opacity-60">
                  {submitting ? "Submitting…" : "SUBMIT"}
                </button>
              </form>

              {/* Desktop sticky submit */}
              <div className="hidden md:block absolute inset-x-0 bottom-0 bg-neutral-900/95 border-t border-white/10 p-4">
                <button onClick={submit as any} disabled={submitting} className="w-full md:w-auto inline-flex items-center justify-center rounded-md bg-white text-black px-6 h-11 font-semibold tracking-wide border border-white hover:bg-white/90 disabled:opacity-60">
                  {submitting ? "Submitting…" : "Submit"}
                </button>
              </div>

              {/* Mobile bottom close */}
              <button onClick={onClose} aria-label="Close" className="md:hidden mt-6 mx-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
