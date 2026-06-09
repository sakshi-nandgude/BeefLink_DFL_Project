import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "For Farmers", href: "#", hasDropdown: true },
  { label: "For Buyers", href: "#", hasDropdown: true },
  { label: "Network", href: "#", hasDropdown: true },
  { label: "About Us", href: "#" },
  { label: "News", href: "#" },
];

const HOW_IT_WORKS = [
  {
    num: "1",
    title: "Farmers list supply",
    desc: "Farmers upload cattle availability, certification details and expected processing dates.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
        <circle cx="20" cy="12" r="7" stroke="#2d6a4f" strokeWidth="2.2" />
        <path d="M6 36c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="#2d6a4f" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "2",
    title: "Processing is coordinated",
    desc: "The platform connects farmers with available slots at partner abattoirs and processors.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
        <rect x="6" y="14" width="28" height="20" rx="3" stroke="#2d6a4f" strokeWidth="2.2" />
        <path d="M14 14V10a6 6 0 0 1 12 0v4" stroke="#2d6a4f" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="20" cy="24" r="3" stroke="#2d6a4f" strokeWidth="2.2" />
      </svg>
    ),
  },
  {
    num: "3",
    title: "Transport is shared",
    desc: "Loads are combined and routes planned to reduce costs, emissions and empty journeys.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
        <rect x="4" y="14" width="24" height="14" rx="2" stroke="#2d6a4f" strokeWidth="2.2" />
        <path d="M28 20h4l4 6v2h-8V20Z" stroke="#2d6a4f" strokeWidth="2.2" strokeLinejoin="round" />
        <circle cx="11" cy="30" r="3" stroke="#2d6a4f" strokeWidth="2.2" />
        <circle cx="29" cy="30" r="3" stroke="#2d6a4f" strokeWidth="2.2" />
      </svg>
    ),
  },
  {
    num: "4",
    title: "Beef is sold and delivered",
    desc: "Buyers place orders, products are traced, and deliveries are coordinated efficiently.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
        <path d="M8 10h24l-3 16H11L8 10Z" stroke="#2d6a4f" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M5 10h2M16 10V7M24 10V7" stroke="#2d6a4f" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="15" cy="30" r="2.5" stroke="#2d6a4f" strokeWidth="2.2" />
        <circle cx="25" cy="30" r="2.5" stroke="#2d6a4f" strokeWidth="2.2" />
      </svg>
    ),
  },
];

const TOOLS = [
  {
    title: "Processing Slot Booking",
    desc: "View real-time availability and book with partner abattoirs.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
        <rect x="6" y="8" width="28" height="26" rx="3" stroke="#2d6a4f" strokeWidth="2" />
        <path d="M14 6v4M26 6v4M6 18h28" stroke="#2d6a4f" strokeWidth="2" strokeLinecap="round" />
        <rect x="12" y="23" width="6" height="5" rx="1" fill="#2d6a4f" opacity=".4" />
      </svg>
    ),
  },
  {
    title: "Shared Transport",
    desc: "Coordinate and share refrigerated transport across the region.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
        <rect x="4" y="14" width="22" height="12" rx="2" stroke="#2d6a4f" strokeWidth="2" />
        <path d="M26 20h5l4 6v2h-9V20Z" stroke="#2d6a4f" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="11" cy="28" r="2.5" stroke="#2d6a4f" strokeWidth="2" />
        <circle cx="29" cy="28" r="2.5" stroke="#2d6a4f" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Buyer Marketplace",
    desc: "Buyers access available products and place orders in one place.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
        <path d="M8 10h24l-3 16H11L8 10Z" stroke="#2d6a4f" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="15" cy="31" r="2" stroke="#2d6a4f" strokeWidth="2" />
        <circle cx="25" cy="31" r="2" stroke="#2d6a4f" strokeWidth="2" />
        <path d="M5 10h3" stroke="#2d6a4f" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Demand Forecasting",
    desc: "See future demand trends and plan with confidence.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
        <path d="M6 32L14 20l7 6 7-10 6-4" stroke="#2d6a4f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 34h28M6 6v28" stroke="#2d6a4f" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "QR Traceability",
    desc: "Full transparency from farm to fork with a simple QR scan.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
        <rect x="6" y="6" width="12" height="12" rx="1.5" stroke="#2d6a4f" strokeWidth="2" />
        <rect x="22" y="6" width="12" height="12" rx="1.5" stroke="#2d6a4f" strokeWidth="2" />
        <rect x="6" y="22" width="12" height="12" rx="1.5" stroke="#2d6a4f" strokeWidth="2" />
        <rect x="9" y="9" width="6" height="6" rx=".5" fill="#2d6a4f" />
        <rect x="25" y="9" width="6" height="6" rx=".5" fill="#2d6a4f" />
        <rect x="9" y="25" width="6" height="6" rx=".5" fill="#2d6a4f" />
        <path d="M22 22h4v4h-4zM30 22h2v2h-2zM28 28h4v4h-4zM22 30h4v2h-4z" fill="#2d6a4f" />
      </svg>
    ),
  },
  {
    title: "Digital Livestock Passport",
    desc: "Secure digital records for each animal in the supply chain.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
        <rect x="8" y="4" width="24" height="32" rx="3" stroke="#2d6a4f" strokeWidth="2" />
        <path d="M14 14h12M14 20h12M14 26h8" stroke="#2d6a4f" strokeWidth="2" strokeLinecap="round" />
        <path d="M13 8h14" stroke="#2d6a4f" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const WHO_ITS_FOR = [
  {
    title: "Farmers",
    desc: "Get better prices, reduce costs and reach more buyers together.",
    color: "#1b4332",
    img: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=300&q=80",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" width="22" height="22">
        <circle cx="14" cy="9" r="5" stroke="white" strokeWidth="2" />
        <path d="M4 26c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Processors & Abattoirs",
    desc: "Improve capacity utilisation and streamline scheduling.",
    color: "#2d6a4f",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" width="22" height="22">
        <rect x="4" y="10" width="20" height="14" rx="2" stroke="white" strokeWidth="2" />
        <path d="M9 10V7a5 5 0 0 1 10 0v3" stroke="white" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Logistics Providers",
    desc: "Better route planning, fuller loads and fewer empty miles.",
    color: "#40916c",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=300&q=80",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" width="22" height="22">
        <rect x="2" y="10" width="17" height="10" rx="1.5" stroke="white" strokeWidth="2" />
        <path d="M19 14h4l3 6v2h-7V14Z" stroke="white" strokeWidth="2" />
        <circle cx="8" cy="22" r="2" stroke="white" strokeWidth="2" />
        <circle cx="22" cy="22" r="2" stroke="white" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Restaurants & Hotels",
    desc: "Reliable supply of high-quality, traceable organic beef.",
    color: "#52b788",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&q=80",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" width="22" height="22">
        <path d="M5 7h18l-2 12H7L5 7Z" stroke="white" strokeWidth="2" />
        <circle cx="11" cy="23" r="2" stroke="white" strokeWidth="2" />
        <circle cx="18" cy="23" r="2" stroke="white" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Schools & Hospitals",
    desc: "Source local, traceable beef through simplified procurement.",
    color: "#74c69d",
    img: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=300&q=80",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" width="22" height="22">
        <rect x="4" y="8" width="20" height="16" rx="2" stroke="white" strokeWidth="2" />
        <path d="M10 4h8v4h-8z" stroke="white" strokeWidth="2" />
        <path d="M14 13v6M11 16h6" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Consumers",
    desc: "Know where your food comes from and support local farmers.",
    color: "#95d5b2",
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=300&q=80",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" width="22" height="22">
        <circle cx="10" cy="9" r="4" stroke="white" strokeWidth="2" />
        <circle cx="20" cy="9" r="4" stroke="white" strokeWidth="2" />
        <path d="M2 24c0-4.418 3.582-8 8-8M18 16c4.418 0 8 3.582 8 8" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 16c2.209 0 4 3.582 4 8" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const STATS = [
  { num: "250+", label: "Farmers in the network" },
  { num: "12,000+", label: "Organic cattle managed" },
  { num: "40+", label: "Partner transport providers" },
  { num: "8", label: "Partner abattoirs & processors" },
  { num: "80+", label: "Active buyers & organisations" },
];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", color: "#1a2e1a", margin: 0, padding: 0 }}>
      {/* NAVBAR */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "white", borderBottom: "1px solid #e8f0e8",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 32px", height: 64,
        boxShadow: "0 1px 6px rgba(0,0,0,0.07)"
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 8,
            background: "#1b4332", display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <svg viewBox="0 0 32 32" fill="none" width="26" height="26">
              <path d="M8 18c0-4 3-8 8-10 5 2 8 6 8 10a8 8 0 0 1-16 0Z" stroke="white" strokeWidth="1.8" />
              <circle cx="16" cy="10" r="3" stroke="white" strokeWidth="1.8" />
              <path d="M10 10l-2-3M22 10l2-3" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 13, letterSpacing: 0.5, lineHeight: 1.1, color: "#1b4332" }}>MID-WEST</div>
            <div style={{ fontWeight: 800, fontSize: 13, letterSpacing: 0.5, lineHeight: 1.1, color: "#1b4332" }}>BEEF LINK</div>
            <div style={{ fontSize: 9, color: "#52b788", letterSpacing: 0.3 }}>Farmer-Owned. Regionally Connected.</div>
          </div>
        </div>

        {/* Nav links */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} style={{
              padding: "6px 12px", fontSize: 14, fontWeight: 500,
              color: "#2d4a2d", textDecoration: "none", borderRadius: 6,
              display: "flex", alignItems: "center", gap: 3,
              transition: "background .15s"
            }}
              onMouseEnter={e => e.currentTarget.style.background = "#f0f7f0"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              {l.label}
              {l.hasDropdown && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 5l3 3 3-3" stroke="#2d4a2d" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )}
            </a>
          ))}
        </div>

        {/* Auth buttons */}
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <button style={{
            border: "1.5px solid #cde0cd", background: "white",
            color: "#1b4332", padding: "7px 18px", borderRadius: 7,
            fontSize: 13, fontWeight: 600, cursor: "pointer",
            display: "flex", alignItems: "center", gap: 6
          }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="6" r="3.5" stroke="#1b4332" strokeWidth="1.5" />
              <path d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#1b4332" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Log In
          </button>
          <button style={{
            background: "#1b4332", color: "white",
            border: "none", padding: "8px 20px", borderRadius: 7,
            fontSize: 13, fontWeight: 700, cursor: "pointer",
            letterSpacing: 0.2
          }}>
            Join the Network
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        position: "relative", minHeight: 520,
        background: "linear-gradient(120deg, #e8f5e9 0%, #f1f8f1 40%, #c8e6c9 100%)",
        display: "flex", alignItems: "center",
        overflow: "hidden"
      }}>
        {/* Cow image bg */}
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0,
          width: "55%", overflow: "hidden"
        }}>
          <img
            src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=1000&q=85"
            alt="Hereford cows in Irish countryside"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to right, #e8f5e9 0%, transparent 40%)"
          }} />
        </div>

        {/* Hero content */}
        <div style={{ position: "relative", zIndex: 2, padding: "64px 64px 64px 60px", maxWidth: 580 }}>
          <h1 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900,
            lineHeight: 1.15, margin: "0 0 20px",
            color: "#1a2e1a"
          }}>
            Connecting organic beef producers, processors and buyers{" "}
            <span style={{ color: "#2d6a4f" }}>across the Mid-West.</span>
          </h1>
          <div style={{ width: 48, height: 3, background: "#52b788", marginBottom: 20, borderRadius: 2 }} />
          <p style={{ fontSize: 16, color: "#3a5a3a", lineHeight: 1.65, margin: "0 0 36px", maxWidth: 400 }}>
            Mid-West Beef Link is a farmer-owned platform that coordinates supply, logistics and demand to keep more value in our region.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button style={{
              background: "#1b4332", color: "white",
              border: "none", padding: "14px 24px", borderRadius: 8,
              fontSize: 14, fontWeight: 700, cursor: "pointer",
              display: "flex", alignItems: "center", gap: 10, minWidth: 180
            }}>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M10 2C7.791 2 6 4.5 6 8a4 4 0 0 0 8 0C14 4.5 12.209 2 10 2Z" stroke="white" strokeWidth="1.5" />
                <path d="M4 18c0-3.5 2.686-6 6-6s6 2.5 6 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <div style={{ textAlign: "left" }}>
                <div>Join as a Farmer</div>
                <div style={{ fontSize: 11, fontWeight: 400, opacity: 0.8 }}>List your supply</div>
              </div>
            </button>
            <button style={{
              background: "white", color: "#1b4332",
              border: "2px solid #1b4332", padding: "14px 24px", borderRadius: 8,
              fontSize: 14, fontWeight: 700, cursor: "pointer",
              display: "flex", alignItems: "center", gap: 10, minWidth: 220
            }}>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M3 6h14l-1 9H4L3 6Z" stroke="#1b4332" strokeWidth="1.5" strokeLinejoin="round" />
                <circle cx="8" cy="17" r="1.5" stroke="#1b4332" strokeWidth="1.5" />
                <circle cx="13" cy="17" r="1.5" stroke="#1b4332" strokeWidth="1.5" />
                <path d="M1 6h2" stroke="#1b4332" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <div style={{ textAlign: "left" }}>
                <div>Find Local Organic Beef</div>
                <div style={{ fontSize: 11, fontWeight: 400, opacity: 0.7 }}>For your business or organisation</div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: "white", padding: "72px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "#52b788", textTransform: "uppercase", marginBottom: 8 }}>PROCESS</div>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: "#1a2e1a", margin: "0 0 10px" }}>HOW IT WORKS</h2>
          <p style={{ fontSize: 15, color: "#4a6a4a", maxWidth: 480, margin: "0 auto" }}>
            A simple, transparent network that brings the whole supply chain together.
          </p>
        </div>
        <div style={{ display: "flex", gap: 0, alignItems: "flex-start", maxWidth: 1100, margin: "0 auto", flexWrap: "wrap" }}>
          {HOW_IT_WORKS.map((step, i) => (
            <div key={step.num} style={{ flex: "1 1 200px", display: "flex", flexDirection: "column", alignItems: "center", position: "relative", padding: "0 16px" }}>
              {/* Connector line */}
              {i < HOW_IT_WORKS.length - 1 && (
                <div style={{
                  position: "absolute", top: 38, left: "calc(50% + 40px)",
                  width: "calc(100% - 80px)", borderTop: "2px dashed #b7ddb7", zIndex: 0
                }} />
              )}
              <div style={{
                width: 76, height: 76, borderRadius: "50%",
                background: "#f0f7f0", border: "2.5px solid #c8e6c9",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 16, position: "relative", zIndex: 1
              }}>
                <div style={{
                  position: "absolute", top: -8, left: -8,
                  width: 26, height: 26, borderRadius: "50%",
                  background: "#2d6a4f", color: "white",
                  fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  {step.num}
                </div>
                {step.icon}
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1a2e1a", textAlign: "center", marginBottom: 8 }}>{step.title}</h3>
              <p style={{ fontSize: 13, color: "#5a7a5a", textAlign: "center", lineHeight: 1.55, margin: 0 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POWERFUL TOOLS */}
      <section style={{ background: "#f6fbf6", padding: "72px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "#52b788", textTransform: "uppercase", marginBottom: 8 }}>FEATURES</div>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: "#1a2e1a", margin: "0 0 10px" }}>POWERFUL TOOLS FOR OUR NETWORK</h2>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 24, maxWidth: 1100, margin: "0 auto", justifyContent: "center" }}>
          {TOOLS.map((tool) => (
            <div key={tool.title} style={{
              flex: "1 1 160px", maxWidth: 190,
              background: "white", borderRadius: 12,
              padding: "28px 20px 24px",
              border: "1.5px solid #e0ede0",
              display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
              boxShadow: "0 2px 8px rgba(45,106,79,.05)",
              transition: "box-shadow .2s, border-color .2s",
              cursor: "default"
            }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 6px 24px rgba(45,106,79,.13)"; e.currentTarget.style.borderColor = "#52b788"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 8px rgba(45,106,79,.05)"; e.currentTarget.style.borderColor = "#e0ede0"; }}
            >
              <div style={{
                width: 60, height: 60, borderRadius: 14,
                background: "#f0f7f0", display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 14
              }}>
                {tool.icon}
              </div>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#1a2e1a", marginBottom: 8 }}>{tool.title}</h3>
              <p style={{ fontSize: 12, color: "#5a7a5a", lineHeight: 1.55, margin: 0 }}>{tool.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section style={{ background: "white", padding: "72px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "#52b788", textTransform: "uppercase", marginBottom: 8 }}>AUDIENCE</div>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: "#1a2e1a", margin: "0 0 10px" }}>WHO IT'S FOR</h2>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 18, maxWidth: 1100, margin: "0 auto", justifyContent: "center" }}>
          {WHO_ITS_FOR.map((w) => (
            <div key={w.title} style={{
              flex: "1 1 155px", maxWidth: 175, borderRadius: 14,
              overflow: "hidden", boxShadow: "0 2px 10px rgba(0,0,0,.08)",
              transition: "transform .2s, box-shadow .2s", cursor: "default"
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 10px 28px rgba(0,0,0,.13)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,.08)"; }}
            >
              <div style={{ position: "relative", height: 110 }}>
                <img src={w.img} alt={w.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{
                  position: "absolute", bottom: 10, left: 10,
                  width: 36, height: 36, borderRadius: "50%",
                  background: w.color, display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  {w.icon}
                </div>
              </div>
              <div style={{ padding: "14px 14px 16px", background: "white" }}>
                <h3 style={{ fontSize: 13, fontWeight: 700, color: "#1a2e1a", marginBottom: 6 }}>{w.title}</h3>
                <p style={{ fontSize: 12, color: "#5a7a5a", lineHeight: 1.5, margin: 0 }}>{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{
        background: "#1b4332",
        padding: "0 60px"
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "stretch", flexWrap: "wrap" }}>
          {/* Stronger Together */}
          <div style={{
            flex: "1 1 220px", padding: "40px 32px 40px 0",
            borderRight: "1px solid rgba(255,255,255,.15)",
            display: "flex", flexDirection: "column", justifyContent: "center"
          }}>
            <h3 style={{ fontSize: 18, fontWeight: 800, color: "white", margin: "0 0 10px" }}>STRONGER TOGETHER</h3>
            <p style={{ fontSize: 13, color: "#95d5b2", lineHeight: 1.6, margin: 0 }}>
              By working together, we build a more resilient food system and a stronger future for our region.
            </p>
          </div>

          {/* Stats */}
          {STATS.map((s, i) => (
            <div key={s.num} style={{
              flex: "1 1 120px",
              padding: "40px 28px",
              borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,.12)" : "none",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              textAlign: "center"
            }}>
              <div style={{ fontSize: 30, fontWeight: 900, color: "white", lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: 12, color: "#95d5b2", marginTop: 6, lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}

          {/* Trusted */}
          <div style={{
            flex: "1 1 160px", padding: "40px 0 40px 28px",
            borderLeft: "1px solid rgba(255,255,255,.12)",
            display: "flex", flexDirection: "column", justifyContent: "center"
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#95d5b2", letterSpacing: 1.5, marginBottom: 14 }}>TRUSTED & CERTIFIED</div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <div style={{
                background: "white", borderRadius: 6, padding: "6px 12px",
                fontSize: 11, fontWeight: 700, color: "#1b4332"
              }}>BORD BIA<br /><span style={{ fontWeight: 400 }}>QUALITY</span></div>
              <div style={{
                background: "white", borderRadius: 6, padding: "6px 12px",
                fontSize: 11, fontWeight: 700, color: "#1b4332"
              }}>AIMS<br /><span style={{ fontWeight: 400, fontSize: 9 }}>Animal ID & Movement</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <footer style={{
        background: "#152d1e", padding: "0 60px"
      }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "20px 0", flexWrap: "wrap", gap: 16
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 6,
              background: "#2d6a4f", display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <svg viewBox="0 0 28 28" fill="none" width="20" height="20">
                <path d="M7 16c0-3.5 2.5-7 7-8.5C19 9 21.5 12.5 21.5 16a7 7 0 0 1-14 0Z" stroke="white" strokeWidth="1.8" />
                <circle cx="14" cy="9" r="2.5" stroke="white" strokeWidth="1.8" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 12, color: "#95d5b2", fontWeight: 600 }}>Mid-West Beef Link is farmer-owned and not-for-profit.</div>
              <div style={{ fontSize: 11, color: "#74c69d" }}>Our mission is simple: better coordination, fairer value, stronger communities.</div>
            </div>
          </div>
          <button style={{
            background: "#2d6a4f", color: "white",
            border: "none", padding: "10px 24px", borderRadius: 7,
            fontSize: 13, fontWeight: 700, cursor: "pointer",
            display: "flex", alignItems: "center", gap: 8,
            whiteSpace: "nowrap"
          }}>
            Join the Network Today
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
}
