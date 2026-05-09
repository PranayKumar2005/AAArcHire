import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const T = [
  { quote: "AA ArcHire understood our studio's culture before they even sent a single shortlist. Within six weeks they placed our new Design Director — and she's transformed how we approach hospitality projects.", name: "Ananya Reddy", role: "Managing Partner", company: "Studio Vyom Architects" },
  { quote: "The most discreet, thoughtful executive search experience we've had in India. They quietly built our entire interior practice leadership.", name: "Vikram Mehta", role: "CEO", company: "Mehta Design Group" },
  { quote: "From BIM specialists to senior project architects, every hire has been a long-term retention story. They know what 'right' looks like.", name: "Priya Sharma", role: "HR Director", company: "Skyline Studios International" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % T.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-28 md:py-36 bg-white">
      <div className="container-x max-w-5xl">
        <Reveal>
          <p className="eyebrow mb-5">Voices of Our Clients</p>
          <h2 className="h-display text-4xl md:text-6xl mb-16">Trusted by India's most respected studios.</h2>
        </Reveal>

        <div className="relative min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <Quote className="h-12 w-12 text-[color:var(--gold)] mb-6" />
              <p className="h-display text-2xl md:text-4xl leading-[1.4] text-[color:var(--navy)]">
                "{T[i].quote}"
              </p>
              <div className="mt-10 flex items-center gap-5">
                <div className="h-14 w-14 rounded-full bg-[color:var(--surface)] grid place-items-center font-display text-xl text-[color:var(--navy)] font-bold">
                  {T[i].name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-[color:var(--navy)]">{T[i].name}</p>
                  <p className="text-sm text-[color:var(--mutedtxt)]">{T[i].role} · {T[i].company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex gap-2 mt-12">
          {T.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)}
              className={`h-1 transition-all ${idx === i ? "w-12 bg-[color:var(--gold)]" : "w-6 bg-border"}`}
              aria-label={`Testimonial ${idx + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
