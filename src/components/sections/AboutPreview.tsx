import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import about from "@/assets/about-team.jpg";

export function AboutPreview() {
  return (
    <section className="py-28 md:py-36 bg-white">
      <div className="container-x grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <Reveal>
          <div className="relative">
            <img src={about} alt="AA ArcHire team" loading="lazy"
              className="w-full aspect-[4/5] object-cover" />
            <div className="absolute -bottom-8 -right-8 hidden md:block bg-[color:var(--gold)] text-[color:var(--navy)] p-8 max-w-[220px]">
              <p className="h-display text-5xl font-bold">2012</p>
              <p className="text-xs uppercase tracking-[0.2em] mt-2">Established in Hyderabad</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="eyebrow mb-5">About AA ArcHire</p>
          <h2 className="h-display text-4xl md:text-5xl leading-[1.1]">
            A boutique search firm built by people who understand design.
          </h2>
          <p className="mt-6 text-[color:var(--mutedtxt)] leading-relaxed">
            Founded in Hyderabad by industry veterans, AA ArcHire has spent over a decade placing the architects,
            designers and leaders behind India's most ambitious built environments. We don't sell resumes —
            we curate careers and craft teams.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-8">
            <div>
              <p className="eyebrow mb-3">Our Mission</p>
              <p className="text-sm text-[color:var(--mutedtxt)] leading-relaxed">
                To elevate the architecture and design industry by placing visionary talent where it can do its best work.
              </p>
            </div>
            <div>
              <p className="eyebrow mb-3">Our Vision</p>
              <p className="text-sm text-[color:var(--mutedtxt)] leading-relaxed">
                To be South Asia's most trusted recruitment partner for the design and built-environment economy.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Link to="/about" className="btn-outline-dark">More About Us</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
