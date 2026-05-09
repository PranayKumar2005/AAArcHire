import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import h from "@/assets/ind-hospitality.jpg";
import he from "@/assets/ind-healthcare.jpg";
import r from "@/assets/ind-residential.jpg";
import re from "@/assets/ind-retail.jpg";
import e from "@/assets/ind-education.jpg";
import i from "@/assets/ind-industrial.jpg";
import w from "@/assets/ind-workplace.jpg";
import u from "@/assets/ind-urban.jpg";

const INDUSTRIES = [
  { title: "Hospitality", to: "/industries/hospitality", img: h },
  { title: "Healthcare", to: "/industries/healthcare", img: he },
  { title: "Residential", to: "/industries/residential", img: r },
  { title: "Retail", to: "/industries/retail", img: re },
  { title: "Education", to: "/industries/education", img: e },
  { title: "Industrial", to: "/industries/industrial", img: i },
  { title: "Workplace", to: "/industries/workplace", img: w },
  { title: "Urban Planning", to: "/industries/urban-planning", img: u },
];

export function Industries() {
  return (
    <section className="py-28 md:py-36 bg-[color:var(--surface)]">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <p className="eyebrow mb-5 justify-center">Industries</p>
            <h2 className="h-display text-4xl md:text-6xl">Sectors we proudly serve.</h2>
            <p className="mt-5 text-[color:var(--mutedtxt)]">
              Deep specialization across every vertical of the built environment — from intimate residences to global hospitality brands.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {INDUSTRIES.map((ind, idx) => (
            <Reveal key={ind.title} delay={idx * 0.05}>
              <Link to={ind.to} className="group relative block aspect-[4/5] overflow-hidden">
                <img src={ind.img} alt={ind.title} loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-[color:var(--navy)]/55 group-hover:bg-[color:var(--navy)]/30 transition-colors" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className="gold-divider mb-4 transition-all group-hover:w-24" />
                  <h3 className="h-display text-xl md:text-2xl">{ind.title}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
