import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Compass, Sofa, Crown } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import a from "@/assets/service-architecture.jpg";
import b from "@/assets/service-interior.jpg";
import c from "@/assets/service-executive.jpg";

const SERVICES = [
  { title: "Architecture Recruiting", icon: Compass, img: a, to: "/services/architecture",
    desc: "Senior architects, project leads and design directors for studios shaping the future skyline." },
  { title: "Interior Design Recruiting", icon: Sofa, img: b, to: "/services/interior-design",
    desc: "Curated interior, FF&E and design specialists across hospitality, residential and commercial." },
  { title: "Executive Search", icon: Crown, img: c, to: "/services/executive-search",
    desc: "Confidential C-suite, partner and principal placements for design-led organizations." },
];

export function Services() {
  return (
    <section className="py-28 md:py-36 bg-white">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <Reveal>
            <p className="eyebrow mb-5">What We Do</p>
            <h2 className="h-display text-4xl md:text-6xl max-w-2xl">A specialized search practice for the design economy.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-[color:var(--mutedtxt)] max-w-md">
              Three core practices, one obsession — placing exceptional people who make exceptional spaces possible.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <Link to={s.to} className="group block relative overflow-hidden bg-[color:var(--surface)]">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy)] via-[color:var(--navy)]/40 to-transparent opacity-90" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <s.icon className="h-7 w-7 text-[color:var(--gold)] mb-4" />
                  <h3 className="h-display text-2xl md:text-3xl mb-3">{s.title}</h3>
                  <p className="text-white/75 text-sm leading-relaxed mb-5 max-w-sm">{s.desc}</p>
                  <span className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-[color:var(--gold)] group-hover:gap-3 transition-all">
                    Learn More <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
