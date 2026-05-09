import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type NavItem = { label: string; to: string; mega?: boolean };
const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "#", mega: true },
  { label: "Careers", to: "/careers" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

const INDUSTRIES = [
  { label: "Hospitality Design", to: "/industries/hospitality" },
  { label: "Healthcare Design", to: "/industries/healthcare" },
  { label: "Residential Design", to: "/industries/residential" },
  { label: "Retail Design", to: "/industries/retail" },
  { label: "Education Design", to: "/industries/education" },
  { label: "Industrial Design", to: "/industries/industrial" },
  { label: "Workplace", to: "/industries/workplace" },
  { label: "Urban Planning", to: "/industries/urban-planning" },
];

const SERVICES = [
  { label: "Architecture Recruiting", to: "/services/architecture" },
  { label: "Interior Design Recruiting", to: "/services/interior-design" },
  { label: "Executive Search", to: "/services/executive-search" },
  { label: "BIM & Technical Talent", to: "/services/bim" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); setMega(false); }, [path]);

  const isHome = path === "/";
  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent ? "bg-transparent" : "bg-white shadow-[0_1px_0_rgba(0,0,0,0.05)]"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className={`flex items-center gap-2 ${transparent ? "text-white" : "text-[color:var(--navy)]"}`}>
          <span className="h-display text-2xl font-bold tracking-tight">
            AA<span className="text-[color:var(--gold)]">.</span>ArcHire
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((item) =>
            item.mega ? (
              <button
                key={item.label}
                onMouseEnter={() => setMega(true)}
                onClick={() => setMega((v) => !v)}
                className={`flex items-center gap-1 text-[13px] uppercase tracking-[0.18em] font-medium link-underline ${
                  transparent ? "text-white/90 hover:text-white" : "text-[color:var(--navy)]"
                }`}
              >
                {item.label} <ChevronDown className="h-3.5 w-3.5" />
              </button>
            ) : (
              <Link
                key={item.label}
                to={item.to as string}
                onMouseEnter={() => setMega(false)}
                className={`text-[13px] uppercase tracking-[0.18em] font-medium link-underline ${
                  transparent ? "text-white/90 hover:text-white" : "text-[color:var(--navy)]"
                }`}
                activeProps={{ className: "text-[color:var(--gold)]" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-gold">Hire Talent</Link>
        </div>

        <button
          onClick={() => setOpen(true)}
          className={`lg:hidden p-2 ${transparent ? "text-white" : "text-[color:var(--navy)]"}`}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mega menu */}
      <AnimatePresence>
        {mega && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            onMouseLeave={() => setMega(false)}
            className="absolute left-0 right-0 top-full bg-white border-t border-border shadow-xl"
          >
            <div className="container-x py-10 grid grid-cols-2 md:grid-cols-3 gap-10">
              <div>
                <p className="eyebrow mb-4">Services</p>
                <ul className="space-y-3">
                  {SERVICES.map((s) => (
                    <li key={s.to}>
                      <Link to={s.to} className="text-[color:var(--navy)] hover:text-[color:var(--gold)] transition-colors">{s.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-2">
                <p className="eyebrow mb-4">Industries We Serve</p>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {INDUSTRIES.map((i) => (
                    <li key={i.to}>
                      <Link to={i.to} className="text-[color:var(--navy)] hover:text-[color:var(--gold)] transition-colors">{i.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35 }}
            className="fixed inset-0 z-50 bg-[color:var(--navy)] text-white lg:hidden overflow-y-auto"
          >
            <div className="flex items-center justify-between h-20 px-6">
              <span className="h-display text-xl font-bold">AA<span className="text-[color:var(--gold)]">.</span>ArcHire</span>
              <button onClick={() => setOpen(false)} aria-label="Close"><X className="h-6 w-6" /></button>
            </div>
            <nav className="px-6 py-6 flex flex-col gap-5">
              {NAV.filter(n => !n.mega).map((n) => (
                <Link key={n.label} to={n.to as string} className="text-2xl h-display">{n.label}</Link>
              ))}
              <div className="pt-4 border-t border-white/10">
                <p className="eyebrow mb-3">Industries</p>
                <div className="grid grid-cols-1 gap-2">
                  {INDUSTRIES.map((i) => (
                    <Link key={i.to} to={i.to} className="text-white/80 hover:text-[color:var(--gold)]">{i.label}</Link>
                  ))}
                </div>
              </div>
              <Link to="/contact" className="btn-gold mt-4 self-start">Hire Talent</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
