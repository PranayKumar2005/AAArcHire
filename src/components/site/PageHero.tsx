import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
  breadcrumb?: { label: string; to?: string }[];
}) {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full flex items-end overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy)] via-[color:var(--navy)]/60 to-[color:var(--navy)]/30" />
      <div className="container-x relative pb-20 text-white">
        <Reveal>
          <p className="eyebrow text-[color:var(--gold)] mb-5">{eyebrow}</p>
          <h1 className="h-display text-5xl md:text-7xl max-w-4xl leading-[1.05]">{title}</h1>
          {subtitle && <p className="mt-6 text-lg text-white/80 max-w-2xl">{subtitle}</p>}
          {breadcrumb && (
            <div className="mt-8 flex gap-2 text-xs uppercase tracking-[0.2em] text-white/60">
              {breadcrumb.map((b, i) => (
                <span key={i} className="flex items-center gap-2">
                  {b.to ? <Link to={b.to} className="hover:text-[color:var(--gold)]">{b.label}</Link> : <span>{b.label}</span>}
                  {i < breadcrumb.length - 1 && <span>/</span>}
                </span>
              ))}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
