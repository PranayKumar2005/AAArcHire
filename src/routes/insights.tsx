import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner } from "@/components/sections/CTABanner";
import { POSTS } from "@/components/sections/Insights";
import hero from "@/assets/service-interior.jpg";
import a from "@/assets/ind-residential.jpg";
import b from "@/assets/ind-retail.jpg";
import c from "@/assets/ind-education.jpg";

const ALL = [
  ...POSTS,
  { title: "Why luxury residential studios are paying premium for FF&E specialists", date: "Jan 18, 2026", category: "Compensation", img: a, slug: "ff-e-premium" },
  { title: "Inside the war for retail design talent across the GCC", date: "Dec 09, 2025", category: "Industry", img: b, slug: "retail-gcc" },
  { title: "Designing for learning: India's K-12 architecture market in 2026", date: "Nov 21, 2025", category: "Sector Report", img: c, slug: "k12-2026" },
];

export const Route = createFileRoute("/insights")({
  head: () => ({ meta: [{ title: "Insights — Architecture Hiring & Design Industry | AA ArcHire" }, { name: "description", content: "Salary benchmarks, hiring trends and sector reports from AA ArcHire's recruitment team." }] }),
  component: Insights,
});

function Insights() {
  return (
    <>
      <PageHero eyebrow="Insights" title="Perspectives on the design economy."
        subtitle="Hiring intelligence, compensation benchmarks and sector reports."
        image={hero}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Insights" }]} />
      <section className="py-24 md:py-32 bg-white">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ALL.map((p, i) => (
            <Reveal key={p.slug + i} delay={i * 0.06}>
              <article className="group bg-white border border-border h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                </div>
                <div className="p-7">
                  <div className="flex justify-between text-xs uppercase tracking-[0.2em] text-[color:var(--mutedtxt)] mb-4">
                    <span className="text-[color:var(--gold)]">{p.category}</span>
                    <span>{p.date}</span>
                  </div>
                  <h3 className="h-display text-xl leading-snug mb-5 group-hover:text-[color:var(--gold)] transition-colors">{p.title}</h3>
                  <a href="#" className="text-[12px] uppercase tracking-[0.2em] link-underline">Read More</a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CTABanner />
    </>
  );
}
