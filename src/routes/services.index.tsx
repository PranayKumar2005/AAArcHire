import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner } from "@/components/sections/CTABanner";
import { ArrowUpRight, Compass, Sofa, Crown, Cpu } from "lucide-react";
import a from "@/assets/service-architecture.jpg";
import b from "@/assets/service-interior.jpg";
import c from "@/assets/service-executive.jpg";
import d from "@/assets/service-bim.jpg";

export const Route = createFileRoute("/services/")({
  head: () => ({ meta: [
    { title: "Services — Architecture & Design Recruitment | AA ArcHire" },
    { name: "description", content: "Architecture recruiting, interior design recruiting, executive search and BIM/technical talent — boutique services from AA ArcHire." },
  ]}),
  component: Services,
});

const S = [
  { icon: Compass, title: "Architecture Recruiting", to: "/services/architecture", img: a, desc: "Senior architects, design leads and technical principals for studios shaping the future skyline." },
  { icon: Sofa, title: "Interior Design Recruiting", to: "/services/interior-design", img: b, desc: "Curated interior, FF&E and design specialists across hospitality, residential and commercial sectors." },
  { icon: Crown, title: "Executive Search", to: "/services/executive-search", img: c, desc: "Confidential C-suite, partner and principal placements for design-led organizations." },
  { icon: Cpu, title: "BIM & Technical Talent", to: "/services/bim", img: d, desc: "Revit, BIM coordinators, computational designers and technical specialists." },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="A specialized recruitment practice for the design economy."
        subtitle="Four core capabilities. One singular focus on architecture and design."
        image={a}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />
      <section className="py-24 md:py-32 bg-white">
        <div className="container-x grid md:grid-cols-2 gap-6 lg:gap-8">
          {S.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <Link to={s.to} className="group block relative overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy)] via-[color:var(--navy)]/40 to-transparent" />
                <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                  <s.icon className="h-8 w-8 text-[color:var(--gold)] mb-4" />
                  <h3 className="h-display text-3xl mb-3">{s.title}</h3>
                  <p className="text-white/75 max-w-md">{s.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[color:var(--gold)]">
                    Explore <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CTABanner />
    </>
  );
}
