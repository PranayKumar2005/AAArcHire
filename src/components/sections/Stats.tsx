import CountUp from "react-countup";
import { Reveal } from "@/components/site/Reveal";
import { Award, Users, Globe, Sparkles } from "lucide-react";

const STATS = [
  { value: 14, suffix: "+", label: "Years of Industry Experience", icon: Award },
  { value: 2400, suffix: "+", label: "Successful Placements", icon: Users },
  { value: 38, suffix: "", label: "Countries in Our Network", icon: Globe },
  { value: 98, suffix: "%", label: "Client Satisfaction Rate", icon: Sparkles },
];

export function Stats() {
  return (
    <section className="py-28 md:py-36 bg-[color:var(--navy)] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(200,169,126,0.18),transparent_55%)]" />
      <div className="container-x relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal>
            <p className="eyebrow mb-5 justify-center">Why Choose Us</p>
            <h2 className="h-display text-4xl md:text-6xl">A measurable difference, by design.</h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="text-center md:text-left">
                <s.icon className="h-8 w-8 text-[color:var(--gold)] mx-auto md:mx-0 mb-5" />
                <div className="h-display text-5xl md:text-6xl font-bold">
                  <CountUp end={s.value} suffix={s.suffix} duration={2.5} enableScrollSpy scrollSpyOnce />
                </div>
                <p className="mt-3 text-white/65 text-sm uppercase tracking-[0.15em]">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
