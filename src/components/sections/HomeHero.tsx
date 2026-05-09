import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-architecture.jpg";

export function HomeHero() {
  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden flex items-center">
      <img src={heroImg} alt="Architecture studio at golden hour" className="absolute inset-0 w-full h-full object-cover scale-105" />
      <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--navy)]/85 via-[color:var(--navy)]/50 to-[color:var(--navy)]/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(200,169,126,0.15),transparent_50%)]" />

      <div className="container-x relative text-white">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="eyebrow text-[color:var(--gold)] mb-7">
          Architecture & Design Recruitment
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="h-display text-5xl md:text-7xl lg:text-8xl leading-[0.98] max-w-5xl"
        >
          Building Elite <br/>
          <span className="italic font-light">Architecture</span> & <br/>
          Design <span className="text-[color:var(--gold)]">Teams.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed">
          AA ArcHire connects top architecture and interior design talent with industry-leading firms across India and globally.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="btn-gold">Start Hiring</Link>
          <Link to="/careers" className="btn-outline-light">Explore Opportunities</Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
