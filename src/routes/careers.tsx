import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Briefcase, IndianRupee, Search, X, Upload } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTABanner } from "@/components/sections/CTABanner";
import hero from "@/assets/service-executive.jpg";
import { JOBS } from "@/components/sections/JobsPreview";

const ALL_JOBS = [
  ...JOBS,
  { title: "Associate Architect", location: "Hyderabad", category: "Architecture", experience: "3-5 yrs", salary: "₹8-12 LPA" },
  { title: "FF&E Specialist", location: "Bengaluru", category: "Interior Design", experience: "4-7 yrs", salary: "₹10-16 LPA" },
  { title: "Revit Modeller", location: "Pune", category: "BIM", experience: "2-4 yrs", salary: "₹6-10 LPA" },
  { title: "Master Planner", location: "Mumbai", category: "Urban Planning", experience: "10+ yrs", salary: "₹30-45 LPA" },
];

const CATEGORIES = ["All", "Architecture", "Interior Design", "BIM", "Urban Planning"];
const LOCATIONS = ["All", "Hyderabad", "Mumbai", "Bengaluru", "Delhi NCR", "Pune"];

export const Route = createFileRoute("/careers")({
  head: () => ({ meta: [{ title: "Careers — Architecture & Design Jobs | AA ArcHire" }, { name: "description", content: "Browse the latest architecture, interior design and BIM job openings with India's leading studios." }] }),
  component: Careers,
});

function Careers() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [loc, setLoc] = useState("All");
  const [open, setOpen] = useState<string | null>(null);

  const filtered = ALL_JOBS.filter((j) =>
    (cat === "All" || j.category === cat) &&
    (loc === "All" || j.location === loc) &&
    (q === "" || j.title.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Find your next defining role."
        subtitle="Curated opportunities at India's most respected architecture and design studios."
        image={hero}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Careers" }]}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-10">
          <aside className="lg:col-span-3 space-y-8">
            <div>
              <p className="eyebrow mb-4">Search</p>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[color:var(--mutedtxt)]" />
                <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Job title…"
                  className="w-full pl-11 pr-4 py-3 border border-border focus:outline-none focus:border-[color:var(--gold)]" />
              </div>
            </div>
            <div>
              <p className="eyebrow mb-4">Category</p>
              <div className="space-y-2">
                {CATEGORIES.map((c) => (
                  <button key={c} onClick={() => setCat(c)}
                    className={`block w-full text-left px-4 py-2.5 text-sm transition-all ${cat === c ? "bg-[color:var(--navy)] text-white" : "hover:bg-[color:var(--surface)]"}`}>{c}</button>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow mb-4">Location</p>
              <div className="space-y-2">
                {LOCATIONS.map((c) => (
                  <button key={c} onClick={() => setLoc(c)}
                    className={`block w-full text-left px-4 py-2.5 text-sm transition-all ${loc === c ? "bg-[color:var(--navy)] text-white" : "hover:bg-[color:var(--surface)]"}`}>{c}</button>
                ))}
              </div>
            </div>
          </aside>

          <div className="lg:col-span-9">
            <p className="text-[color:var(--mutedtxt)] mb-6">{filtered.length} open positions</p>
            <div className="space-y-4">
              {filtered.map((j, i) => (
                <Reveal key={j.title + i} delay={i * 0.04}>
                  <div className="bg-white border border-border p-7 hover:border-[color:var(--gold)] transition-all hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.15)]">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--gold)]">{j.category}</span>
                        <h3 className="h-display text-2xl mt-2 mb-3">{j.title}</h3>
                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[color:var(--mutedtxt)]">
                          <span className="flex items-center gap-2"><MapPin className="h-4 w-4" />{j.location}</span>
                          <span className="flex items-center gap-2"><Briefcase className="h-4 w-4" />{j.experience}</span>
                          <span className="flex items-center gap-2"><IndianRupee className="h-4 w-4" />{j.salary}</span>
                        </div>
                      </div>
                      <button onClick={() => setOpen(j.title)} className="btn-gold shrink-0">Apply Now</button>
                    </div>
                  </div>
                </Reveal>
              ))}
              {filtered.length === 0 && (
                <p className="text-center py-20 text-[color:var(--mutedtxt)]">No roles match your filters.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 grid place-items-center p-4" onClick={() => setOpen(null)}>
            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-xl w-full p-8 md:p-10 relative">
              <button onClick={() => setOpen(null)} className="absolute right-5 top-5"><X className="h-5 w-5" /></button>
              <p className="eyebrow mb-3">Apply Now</p>
              <h3 className="h-display text-2xl mb-6">{open}</h3>
              <form onSubmit={(e) => { e.preventDefault(); setOpen(null); }} className="space-y-4">
                <input className="w-full px-4 py-3 border border-border focus:outline-none focus:border-[color:var(--gold)]" placeholder="Full name" required />
                <input type="email" className="w-full px-4 py-3 border border-border focus:outline-none focus:border-[color:var(--gold)]" placeholder="Email address" required />
                <input className="w-full px-4 py-3 border border-border focus:outline-none focus:border-[color:var(--gold)]" placeholder="Phone" />
                <textarea className="w-full px-4 py-3 border border-border focus:outline-none focus:border-[color:var(--gold)] min-h-24" placeholder="Cover note" />
                <label className="flex items-center justify-center gap-2 px-4 py-4 border border-dashed border-border cursor-pointer hover:border-[color:var(--gold)]">
                  <Upload className="h-4 w-4" /> <span className="text-sm">Upload CV (PDF/DOC)</span>
                  <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                </label>
                <button type="submit" className="btn-gold w-full">Submit Application</button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTABanner />
    </>
  );
}
