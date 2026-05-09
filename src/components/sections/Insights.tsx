import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import a from "@/assets/service-architecture.jpg";
import b from "@/assets/ind-workplace.jpg";
import c from "@/assets/ind-hospitality.jpg";

export const POSTS = [
  { title: "What India's top studios look for in a Senior Architect in 2026", date: "Apr 22, 2026", category: "Hiring Trends", img: a, slug: "senior-architect-2026" },
  { title: "BIM talent shortage: how mid-sized firms are competing", date: "Mar 14, 2026", category: "BIM & Tech", img: b, slug: "bim-talent-shortage" },
  { title: "Hospitality design: salary benchmarks across South Asia", date: "Feb 02, 2026", category: "Compensation", img: c, slug: "hospitality-salaries" },
];

export function Insights() {
  return (
    <section className="py-28 md:py-36 bg-[color:var(--surface)]">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <Reveal>
            <p className="eyebrow mb-5">Insights</p>
            <h2 className="h-display text-4xl md:text-6xl max-w-2xl">Perspectives from the design economy.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/insights" className="btn-outline-dark">All Articles</Link>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {POSTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <article className="group bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                </div>
                <div className="p-7">
                  <div className="flex justify-between text-xs uppercase tracking-[0.2em] text-[color:var(--mutedtxt)] mb-4">
                    <span className="text-[color:var(--gold)]">{p.category}</span>
                    <span>{p.date}</span>
                  </div>
                  <h3 className="h-display text-xl leading-snug mb-5 group-hover:text-[color:var(--gold)] transition-colors">{p.title}</h3>
                  <Link to="/insights" className="text-[12px] uppercase tracking-[0.2em] link-underline">Read More</Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
