import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Stats } from "@/components/sections/Stats";
import { CTABanner } from "@/components/sections/CTABanner";
import hero from "@/assets/about-team.jpg";
import office from "@/assets/hero-architecture.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About AA ArcHire — Hyderabad's Architecture Recruitment Specialists" },
    { name: "description", content: "Founded in 2012 in Hyderabad, AA ArcHire is a boutique recruitment firm dedicated to architecture, interior design and the built environment." },
  ]}),
  component: About,
});

const VALUES = [
  { t: "Craft", d: "We treat search as a craft — patient, precise, intentional." },
  { t: "Discretion", d: "Confidentiality is a baseline, not a premium feature." },
  { t: "Industry Fluency", d: "We speak the language of design, not just hiring." },
  { t: "Long Horizon", d: "Every placement is judged on the second-year retention, not the first." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A boutique search firm dedicated to design."
        subtitle="Born in Hyderabad. Trusted across India and beyond."
        image={hero}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      <section className="py-24 md:py-32 bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-16 items-center">
          <Reveal className="lg:col-span-6">
            <img src={office} alt="AA ArcHire studio" className="w-full aspect-[4/5] object-cover" loading="lazy" />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6">
            <p className="eyebrow mb-5">Our Story</p>
            <h2 className="h-display text-4xl md:text-5xl leading-[1.1]">Built by people who've spent a career in design.</h2>
            <div className="mt-6 space-y-5 text-[color:var(--mutedtxt)] leading-relaxed">
              <p>AA ArcHire was founded in 2012 by a group of architects and HR practitioners who shared a frustration: India's design industry deserved a recruitment partner that actually understood it.</p>
              <p>Over fourteen years, we've grown into the trusted talent partner for boutique studios, multinational consultancies and developer-led design teams across hospitality, healthcare, residential, retail and workplace.</p>
              <p>Our Hyderabad headquarters anchors a network that reaches every major design hub in South Asia — and increasingly, the Middle East, Singapore and the UK.</p>
            </div>
            <div className="mt-10"><Link to="/contact" className="btn-outline-dark">Work With Us</Link></div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-[color:var(--surface)]">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow mb-5">What We Stand For</p>
            <h2 className="h-display text-4xl md:text-5xl mb-14 max-w-2xl">Four values guide every search we run.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.08}>
                <div className="bg-white p-8 h-full border-t-2 border-[color:var(--gold)]">
                  <h3 className="h-display text-2xl mb-3">{v.t}</h3>
                  <p className="text-[color:var(--mutedtxt)] text-sm leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <CTABanner />
    </>
  );
}
