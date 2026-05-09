import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { MapPin, Briefcase, IndianRupee, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const JOBS = [
  { title: "Senior Project Architect", location: "Mumbai", category: "Architecture", experience: "8-12 yrs", salary: "₹22-32 LPA" },
  { title: "Design Director — Hospitality", location: "Bengaluru", category: "Interior Design", experience: "12+ yrs", salary: "₹40-55 LPA" },
  { title: "BIM Manager (Revit)", location: "Hyderabad", category: "BIM", experience: "7-10 yrs", salary: "₹18-26 LPA" },
  { title: "Principal Architect", location: "Delhi NCR", category: "Architecture", experience: "15+ yrs", salary: "₹55-80 LPA" },
  { title: "Senior Interior Designer", location: "Hyderabad", category: "Interior Design", experience: "5-8 yrs", salary: "₹12-18 LPA" },
  { title: "Urban Planning Consultant", location: "Pune", category: "Urban Planning", experience: "6-9 yrs", salary: "₹16-24 LPA" },
];

const CATEGORIES = ["All", "Architecture", "Interior Design", "BIM", "Urban Planning"];

export function JobsPreview() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? JOBS : JOBS.filter((j) => j.category === filter);

  return (
    <section className="py-28 md:py-36 bg-[color:var(--surface)]">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-8">
          <Reveal>
            <p className="eyebrow mb-5">Featured Openings</p>
            <h2 className="h-display text-4xl md:text-6xl max-w-2xl">Live opportunities at India's leading studios.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/careers" className="btn-outline-dark">View All Jobs</Link>
          </Reveal>
        </div>

        <Reveal>
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((c) => (
              <button key={c} onClick={() => setFilter(c)}
                className={`px-5 py-2 text-xs uppercase tracking-[0.18em] border transition-all ${
                  filter === c ? "bg-[color:var(--navy)] text-white border-[color:var(--navy)]" : "border-border text-[color:var(--mutedtxt)] hover:border-[color:var(--navy)]"
                }`}>{c}</button>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {filtered.map((j, i) => (
            <Reveal key={j.title} delay={i * 0.05}>
              <div className="group bg-white p-8 border border-border hover:border-[color:var(--gold)] transition-all hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.2)]">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--gold)]">{j.category}</span>
                  <ArrowUpRight className="h-5 w-5 text-[color:var(--mutedtxt)] group-hover:text-[color:var(--navy)] group-hover:rotate-12 transition-all" />
                </div>
                <h3 className="h-display text-2xl mb-5">{j.title}</h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[color:var(--mutedtxt)]">
                  <span className="flex items-center gap-2"><MapPin className="h-4 w-4" />{j.location}</span>
                  <span className="flex items-center gap-2"><Briefcase className="h-4 w-4" />{j.experience}</span>
                  <span className="flex items-center gap-2"><IndianRupee className="h-4 w-4" />{j.salary}</span>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <Link to="/careers" className="text-[13px] uppercase tracking-[0.2em] font-medium link-underline">Apply Now</Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
