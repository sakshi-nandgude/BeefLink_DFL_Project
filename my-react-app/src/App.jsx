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

const styles = `
  * { box-sizing: border-box; }
  .mwbl-wrap { font-family: 'Segoe UI', system-ui, sans-serif; color: #1a2e1a; margin: 0; padding: 0; }

  /* NAV */
  .nav { position: sticky; top: 0; z-index: 100; background: white; border-bottom: 1px solid #e8f0e8; display: flex; align-items: center; justify-content: space-between; padding: 0 20px; height: 64px; box-shadow: 0 1px 6px rgba(0,0,0,0.07); }
  .nav-links { display: flex; align-items: center; gap: 4px; }
  .nav-auth { display: flex; gap: 10px; align-items: center; }
  .hamburger { display: none; background: none; border: none; cursor: pointer; padding: 6px; }
  .mobile-menu { display: none; background: white; border-bottom: 1px solid #e8f0e8; padding: 12px 20px 20px; }
  .mobile-menu.open { display: block; }
  .mobile-menu a { display: block; padding: 10px 0; font-size: 15px; color: #2d4a2d; text-decoration: none; border-bottom: 1px solid #f0f7f0; }
  .mobile-menu-auth { display: flex; flex-direction: column; gap: 10px; margin-top: 14px; }

  /* HERO */
  .hero { position: relative; min-height: 480px; background: linear-gradient(135deg, #e8f5e9 0%, #f1f8f1 50%, #c8e6c9 100%); display: flex; align-items: center; overflow: hidden; }
  .hero-img-wrap { position: absolute; right: 0; top: 0; bottom: 0; width: 55%; overflow: hidden; }
  .hero-img-wrap img { width: 100%; height: 100%; object-fit: cover; object-position: center; }
  .hero-img-fade { position: absolute; inset: 0; background: linear-gradient(to right, #e8f5e9 0%, transparent 45%); }
  .hero-content { position: relative; z-index: 2; padding: 64px 60px; max-width: 580px; }
  .hero-divider { width: 48px; height: 3px; background: #52b788; margin-bottom: 20px; border-radius: 2px; }
  .hero-btns { display: flex; gap: 14px; flex-wrap: wrap; }

  /* SECTIONS */
  .section-white { background: white; padding: 72px 60px; }
  .section-tinted { background: #f6fbf6; padding: 72px 60px; }
  .section-header { text-align: center; margin-bottom: 52px; }
  .section-eyebrow { font-size: 11px; font-weight: 700; letter-spacing: 2px; color: #52b788; text-transform: uppercase; margin-bottom: 8px; }

  /* HOW IT WORKS */
  .steps-row { display: flex; gap: 0; align-items: flex-start; max-width: 1100px; margin: 0 auto; flex-wrap: wrap; }
  .step { flex: 1 1 200px; display: flex; flex-direction: column; align-items: center; position: relative; padding: 0 16px; }
  .step-connector { position: absolute; top: 38px; left: calc(50% + 40px); width: calc(100% - 80px); border-top: 2px dashed #b7ddb7; z-index: 0; }
  .step-circle { width: 76px; height: 76px; border-radius: 50%; background: #f0f7f0; border: 2.5px solid #c8e6c9; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; position: relative; z-index: 1; }
  .step-num { position: absolute; top: -8px; left: -8px; width: 26px; height: 26px; border-radius: 50%; background: #2d6a4f; color: white; font-size: 11px; font-weight: 800; display: flex; align-items: center; justify-content: center; }

  /* TOOLS */
  .tools-grid { display: flex; flex-wrap: wrap; gap: 24px; max-width: 1100px; margin: 0 auto; justify-content: center; }
  .tool-card { flex: 1 1 160px; max-width: 190px; background: white; border-radius: 12px; padding: 28px 20px 24px; border: 1.5px solid #e0ede0; display: flex; flex-direction: column; align-items: center; text-align: center; box-shadow: 0 2px 8px rgba(45,106,79,.05); transition: box-shadow .2s, border-color .2s; cursor: default; }
  .tool-card:hover { box-shadow: 0 6px 24px rgba(45,106,79,.13); border-color: #52b788; }
  .tool-icon-wrap { width: 60px; height: 60px; border-radius: 14px; background: #f0f7f0; display: flex; align-items: center; justify-content: center; margin-bottom: 14px; }

  /* WHO IT'S FOR */
  .who-grid { display: flex; flex-wrap: wrap; gap: 18px; max-width: 1100px; margin: 0 auto; justify-content: center; }
  .who-card { flex: 1 1 155px; max-width: 175px; border-radius: 14px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,.08); transition: transform .2s, box-shadow .2s; cursor: default; }
  .who-card:hover { transform: translateY(-4px); box-shadow: 0 10px 28px rgba(0,0,0,.13); }
  .who-img-wrap { position: relative; height: 110px; }
  .who-img-wrap img { width: 100%; height: 100%; object-fit: cover; }
  .who-icon-badge { position: absolute; bottom: 10px; left: 10px; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }

  /* STATS */
  .stats-bar { background: #1b4332; padding: 0 60px; }
  .stats-inner { max-width: 1100px; margin: 0 auto; display: flex; align-items: stretch; flex-wrap: wrap; }
  .stats-intro { flex: 1 1 220px; padding: 40px 32px 40px 0; border-right: 1px solid rgba(255,255,255,.15); display: flex; flex-direction: column; justify-content: center; }
  .stat-item { flex: 1 1 120px; padding: 40px 28px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }
  .stats-trusted { flex: 1 1 160px; padding: 40px 0 40px 28px; border-left: 1px solid rgba(255,255,255,.12); display: flex; flex-direction: column; justify-content: center; }
  .badge-row { display: flex; gap: 10px; flex-wrap: wrap; }
  .cert-badge { background: white; border-radius: 6px; padding: 6px 12px; font-size: 11px; font-weight: 700; color: #1b4332; }

  /* FOOTER */
  .footer { background: #152d1e; padding: 0 60px; }
  .footer-inner { max-width: 1100px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; padding: 20px 0; flex-wrap: wrap; gap: 16px; }

  /* BUTTONS */
  .btn-primary { background: #1b4332; color: white; border: none; padding: 14px 24px; border-radius: 8px; font-size: 14px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 10px; min-width: 180px; }
  .btn-outline { background: white; color: #1b4332; border: 2px solid #1b4332; padding: 14px 24px; border-radius: 8px; font-size: 14px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 10px; }
  .btn-login { border: 1.5px solid #cde0cd; background: white; color: #1b4332; padding: 7px 18px; border-radius: 7px; font-size: 13px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 6px; }
  .btn-join-nav { background: #1b4332; color: white; border: none; padding: 8px 20px; border-radius: 7px; font-size: 13px; font-weight: 700; cursor: pointer; }
  .btn-join-footer { background: #2d6a4f; color: white; border: none; padding: 10px 24px; border-radius: 7px; font-size: 13px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 8px; white-space: nowrap; }

  /* MOBILE */
  @media (max-width: 768px) {
    .nav-links, .nav-auth { display: none; }
    .hamburger { display: flex; flex-direction: column; gap: 5px; }
    .hamburger span { display: block; width: 22px; height: 2px; background: #1b4332; border-radius: 2px; }

    .hero { min-height: auto; flex-direction: column; align-items: stretch; }
    .hero-img-wrap { position: relative; width: 100%; height: 220px; }
    .hero-img-fade { background: linear-gradient(to bottom, transparent 60%, #e8f5e9 100%); }
    .hero-content { padding: 28px 20px 40px; max-width: 100%; }
    .hero-btns { flex-direction: column; }
    .btn-primary, .btn-outline { min-width: 0; width: 100%; justify-content: flex-start; }

    .section-white { padding: 48px 20px; }
    .section-tinted { padding: 48px 20px; }

    .steps-row { flex-direction: column; align-items: stretch; gap: 28px; }
    .step { flex: none; flex-direction: row; align-items: flex-start; padding: 0; gap: 16px; }
    .step-connector { display: none; }
    .step-circle { flex-shrink: 0; width: 64px; height: 64px; margin-bottom: 0; }
    .step-text { flex: 1; }

    .tools-grid { gap: 14px; }
    .tool-card { flex: 1 1 140px; max-width: calc(50% - 7px); padding: 20px 14px; }

    .who-grid { gap: 12px; }
    .who-card { flex: 1 1 140px; max-width: calc(50% - 6px); }

    .stats-bar { padding: 0 20px; }
    .stats-inner { flex-direction: column; }
    .stats-intro { border-right: none; border-bottom: 1px solid rgba(255,255,255,.15); padding: 28px 0; }
    .stat-item { flex: none; padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,.1); flex-direction: row; justify-content: space-between; align-items: center; text-align: left; width: 100%; }
    .stats-trusted { border-left: none; border-top: 1px solid rgba(255,255,255,.15); padding: 24px 0; }

    .footer { padding: 0 20px; }
    .footer-inner { flex-direction: column; align-items: flex-start; padding: 24px 0; }

    .nav { padding: 0 16px; }
  }

  @media (max-width: 480px) {
    .tool-card { flex: 1 1 100%; max-width: 100%; }
    .who-card { flex: 1 1 140px; max-width: calc(50% - 6px); }
  }
`;

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="mwbl-wrap">
      <style>{styles}</style>

      {/* NAVBAR */}
      <nav className="nav">
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 40, height: 40, borderRadius: 8, background: "#1b4332", display: "flex", alignItems: "center", justifyContent: "center" }}>
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

        {/* Desktop nav links */}
        <div className="nav-links">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} style={{ padding: "6px 12px", fontSize: 14, fontWeight: 500, color: "#2d4a2d", textDecoration: "none", borderRadius: 6, display: "flex", alignItems: "center", gap: 3 }}
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

        {/* Desktop auth */}
        <div className="nav-auth">
          <button className="btn-login">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="6" r="3.5" stroke="#1b4332" strokeWidth="1.5" />
              <path d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#1b4332" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Log In
          </button>
          <button className="btn-join-nav">Join the Network</button>
        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMobileOpen(o => !o)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu${mobileOpen ? " open" : ""}`}>
        {NAV_LINKS.map(l => <a key={l.label} href={l.href}>{l.label}</a>)}
        <div className="mobile-menu-auth">
          <button className="btn-login" style={{ width: "100%", justifyContent: "center" }}>Log In</button>
          <button className="btn-join-nav" style={{ padding: "10px 20px" }}>Join the Network</button>
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-img-wrap">
          <img src="https://mountainamericajerky.com/wp-content/uploads/2024/05/grass-fed-cows.webp" alt="Grass-fed cows on open pasture" />
          <div className="hero-img-fade" />
        </div>
        <div className="hero-content">
          <h1 style={{ fontSize: "clamp(1.7rem, 5vw, 3rem)", fontWeight: 900, lineHeight: 1.15, margin: "0 0 20px", color: "#1a2e1a" }}>
            Connecting organic beef producers, processors and buyers{" "}
            <span style={{ color: "#2d6a4f" }}>across the Mid-West.</span>
          </h1>
          <div className="hero-divider" />
          <p style={{ fontSize: 16, color: "#3a5a3a", lineHeight: 1.65, margin: "0 0 36px", maxWidth: 400 }}>
            Mid-West Beef Link is a farmer-owned platform that coordinates supply, logistics and demand to keep more value in our region.
          </p>
          <div className="hero-btns">
            <button className="btn-primary">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M10 2C7.791 2 6 4.5 6 8a4 4 0 0 0 8 0C14 4.5 12.209 2 10 2Z" stroke="white" strokeWidth="1.5" />
                <path d="M4 18c0-3.5 2.686-6 6-6s6 2.5 6 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <div style={{ textAlign: "left" }}>
                <div>Join as a Farmer</div>
                <div style={{ fontSize: 11, fontWeight: 400, opacity: 0.8 }}>List your supply</div>
              </div>
            </button>
            <button className="btn-outline">
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
      <section className="section-white">
        <div className="section-header">
          <div className="section-eyebrow">PROCESS</div>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: "#1a2e1a", margin: "0 0 10px" }}>HOW IT WORKS</h2>
          <p style={{ fontSize: 15, color: "#4a6a4a", maxWidth: 480, margin: "0 auto" }}>
            A simple, transparent network that brings the whole supply chain together.
          </p>
        </div>
        <div className="steps-row">
          {HOW_IT_WORKS.map((step, i) => (
            <div key={step.num} className="step">
              {i < HOW_IT_WORKS.length - 1 && <div className="step-connector" />}
              <div className="step-circle">
                <div className="step-num">{step.num}</div>
                {step.icon}
              </div>
              <div className="step-text">
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1a2e1a", textAlign: "left", marginBottom: 8, marginTop: 4 }}>{step.title}</h3>
                <p style={{ fontSize: 13, color: "#5a7a5a", textAlign: "left", lineHeight: 1.55, margin: 0 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* POWERFUL TOOLS */}
      <section className="section-tinted">
        <div className="section-header">
          <div className="section-eyebrow">FEATURES</div>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: "#1a2e1a", margin: "0 0 10px" }}>POWERFUL TOOLS FOR OUR NETWORK</h2>
        </div>
        <div className="tools-grid">
          {TOOLS.map((tool) => (
            <div key={tool.title} className="tool-card">
              <div className="tool-icon-wrap">{tool.icon}</div>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#1a2e1a", marginBottom: 8 }}>{tool.title}</h3>
              <p style={{ fontSize: 12, color: "#5a7a5a", lineHeight: 1.55, margin: 0 }}>{tool.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="section-white">
        <div className="section-header">
          <div className="section-eyebrow">AUDIENCE</div>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: "#1a2e1a", margin: "0 0 10px" }}>WHO IT'S FOR</h2>
        </div>
        <div className="who-grid">
          {WHO_ITS_FOR.map((w) => (
            <div key={w.title} className="who-card">
              <div className="who-img-wrap">
                <img src={w.img} alt={w.title} />
                <div className="who-icon-badge" style={{ background: w.color }}>{w.icon}</div>
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
      <section className="stats-bar">
        <div className="stats-inner">
          <div className="stats-intro">
            <h3 style={{ fontSize: 18, fontWeight: 800, color: "white", margin: "0 0 10px" }}>STRONGER TOGETHER</h3>
            <p style={{ fontSize: 13, color: "#95d5b2", lineHeight: 1.6, margin: 0 }}>
              By working together, we build a more resilient food system and a stronger future for our region.
            </p>
          </div>
          {STATS.map((s, i) => (
            <div key={s.num} className="stat-item" style={{ borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,.12)" : "none" }}>
              <div style={{ fontSize: 30, fontWeight: 900, color: "white", lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: 12, color: "#95d5b2", marginTop: 6, lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
          <div className="stats-trusted">
            <div style={{ fontSize: 11, fontWeight: 700, color: "#95d5b2", letterSpacing: 1.5, marginBottom: 14 }}>TRUSTED & CERTIFIED</div>
            <div className="badge-row">
              <div className="cert-badge">BORD BIA<br /><span style={{ fontWeight: 400 }}>QUALITY</span></div>
              <div className="cert-badge">AIMS<br /><span style={{ fontWeight: 400, fontSize: 9 }}>Animal ID & Movement</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 32, height: 32, borderRadius: 6, background: "#2d6a4f", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
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
          <button className="btn-join-footer">
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
