import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export function CTABanner() {
  return (
    <section className="relative py-28 md:py-40 bg-[color:var(--ink)] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(200,169,126,0.2),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(200,169,126,0.1),transparent_50%)]" />
      <div className="container-x relative text-center max-w-4xl">
        <Reveal>
          <p className="eyebrow mb-6 justify-center">Let's Build Together</p>
          <h2 className="h-display text-4xl md:text-7xl leading-[1.05]">
            Let's build exceptional <br/>
            <span className="italic font-light">design teams,</span> together.
          </h2>
          <p className="mt-8 text-white/70 max-w-xl mx-auto">
            Whether you're hiring world-class talent or seeking your next defining role, our team is ready to craft what's next with you.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-gold">Hire Talent</Link>
            <Link to="/careers" className="btn-outline-light">Find Jobs</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
