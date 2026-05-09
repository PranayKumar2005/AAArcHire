import { Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PageHero } from "./PageHero";
import { Reveal } from "./Reveal";
import { CTABanner } from "@/components/sections/CTABanner";

export type InnerPageProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  heroImage: string;
  overview: { heading: string; body: string[] };
  expertise: string[];
  roles: string[];
  whyUs?: { title: string; desc: string }[];
  metrics?: { value: string; label: string }[];
  breadcrumb?: { label: string; to?: string }[];
};

const DEFAULT_WHY = [
  { title: "Sector Specialists", desc: "Recruiters with deep architecture and design industry roots — not generalists." },
  { title: "Curated Shortlists", desc: "We present three to five exceptional candidates, not fifty resumes." },
  { title: "Confidential Search", desc: "Discreet outreach that protects your brand and respects every candidate's career." },
  { title: "Long-term Retention", desc: "92% of our placements are still in role after two years." },
];

const DEFAULT_METRICS = [
  { value: "2,400+", label: "Placements" },
  { value: "14+", label: "Years" },
  { value: "98%", label: "Client Retention" },
  { value: "38", label: "Countries" },
];

export function InnerPageTemplate(p: InnerPageProps) {
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} image={p.heroImage} breadcrumb={p.breadcrumb} />

      {/* Overview */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-20">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow mb-5">Overview</p>
            <h2 className="h-display text-3xl md:text-5xl leading-[1.1]">{p.overview.heading}</h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-8 space-y-5 text-[color:var(--mutedtxt)] leading-relaxed text-lg">
            {p.overview.body.map((para, i) => <p key={i}>{para}</p>)}
          </Reveal>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 md:py-32 bg-[color:var(--surface)]">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow mb-5">Recruitment Expertise</p>
            <h2 className="h-display text-3xl md:text-5xl max-w-3xl mb-14">Our specialized capabilities for this practice.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {p.expertise.map((e, i) => (
              <Reveal key={e} delay={i * 0.05}>
                <div className="flex gap-4 items-start py-5 border-b border-border">
                  <CheckCircle2 className="h-6 w-6 text-[color:var(--gold)] mt-0.5 shrink-0" />
                  <p className="text-lg text-[color:var(--navy)]">{e}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow mb-5">Roles We Fill</p>
            <h2 className="h-display text-3xl md:text-5xl max-w-3xl mb-14">From senior IC to leadership.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {p.roles.map((r, i) => (
              <Reveal key={r} delay={i * 0.04}>
                <div className="border border-border p-6 hover:border-[color:var(--gold)] transition-all hover:bg-[color:var(--surface)]/50">
                  <p className="h-display text-lg">{r}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-24 md:py-32 bg-[color:var(--navy)] text-white">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow mb-5">Why AA ArcHire</p>
            <h2 className="h-display text-3xl md:text-5xl max-w-3xl mb-14">A partner, not a placement engine.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(p.whyUs ?? DEFAULT_WHY).map((w, i) => (
              <Reveal key={w.title} delay={i * 0.1}>
                <div className="border border-white/10 p-8 h-full hover:border-[color:var(--gold)] transition-colors">
                  <div className="h-10 w-10 grid place-items-center bg-[color:var(--gold)] text-[color:var(--navy)] font-bold mb-6">
                    0{i + 1}
                  </div>
                  <h3 className="h-display text-xl mb-3">{w.title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 bg-[color:var(--surface)]">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {(p.metrics ?? DEFAULT_METRICS).map((m, i) => (
            <Reveal key={m.label} delay={i * 0.08}>
              <p className="h-display text-5xl md:text-6xl font-bold text-[color:var(--navy)]">{m.value}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[color:var(--mutedtxt)]">{m.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Inline contact CTA */}
      <section className="py-24 bg-white">
        <div className="container-x">
          <Reveal>
            <div className="bg-[color:var(--surface)] p-10 md:p-16 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="eyebrow mb-5">Start a Conversation</p>
                <h3 className="h-display text-3xl md:text-4xl">Tell us about the role you need to fill.</h3>
              </div>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <input className="w-full px-5 py-4 bg-white border border-border focus:outline-none focus:border-[color:var(--gold)]" placeholder="Your name" />
                <input className="w-full px-5 py-4 bg-white border border-border focus:outline-none focus:border-[color:var(--gold)]" placeholder="Work email" type="email" />
                <textarea className="w-full px-5 py-4 bg-white border border-border focus:outline-none focus:border-[color:var(--gold)] min-h-32" placeholder="Tell us about the position" />
                <Link to="/contact" className="btn-gold w-full sm:w-auto">Send Inquiry <ArrowRight className="h-4 w-4" /></Link>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
