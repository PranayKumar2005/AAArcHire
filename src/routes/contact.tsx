import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import hero from "@/assets/hero-architecture.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact AA ArcHire — Hyderabad Office" }, { name: "description", content: "Get in touch with AA ArcHire for architecture, interior design, BIM or executive search hiring inquiries." }] }),
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's start a conversation."
        subtitle="Hyderabad headquarters. Pan-India and global reach."
        image={hero}
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Contact" }]} />
      <section className="py-24 md:py-32 bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-5">Visit · Call · Write</p>
            <h2 className="h-display text-4xl md:text-5xl mb-10">We respond within one business day.</h2>
            <ul className="space-y-7">
              <li className="flex gap-5"><MapPin className="h-6 w-6 text-[color:var(--gold)] shrink-0" />
                <div><p className="font-semibold">Hyderabad Office</p>
                <p className="text-[color:var(--mutedtxt)] mt-1">4th Floor, Cyber Towers,<br/>HITEC City, Hyderabad,<br/>Telangana 500081, India</p></div></li>
              <li className="flex gap-5"><Phone className="h-6 w-6 text-[color:var(--gold)] shrink-0" />
                <div><p className="font-semibold">Phone</p>
                <p className="text-[color:var(--mutedtxt)] mt-1">+91 40 4000 7890</p></div></li>
              <li className="flex gap-5"><Mail className="h-6 w-6 text-[color:var(--gold)] shrink-0" />
                <div><p className="font-semibold">Email</p>
                <p className="text-[color:var(--mutedtxt)] mt-1">hello@aaarchire.com<br/>careers@aaarchire.com</p></div></li>
              <li className="flex gap-5"><Clock className="h-6 w-6 text-[color:var(--gold)] shrink-0" />
                <div><p className="font-semibold">Hours</p>
                <p className="text-[color:var(--mutedtxt)] mt-1">Mon – Fri · 09:30 – 18:30 IST</p></div></li>
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="bg-[color:var(--surface)] p-8 md:p-12 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input required placeholder="First name" className="w-full px-5 py-4 bg-white border border-border focus:outline-none focus:border-[color:var(--gold)]" />
                <input required placeholder="Last name" className="w-full px-5 py-4 bg-white border border-border focus:outline-none focus:border-[color:var(--gold)]" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <input required type="email" placeholder="Work email" className="w-full px-5 py-4 bg-white border border-border focus:outline-none focus:border-[color:var(--gold)]" />
                <input placeholder="Phone" className="w-full px-5 py-4 bg-white border border-border focus:outline-none focus:border-[color:var(--gold)]" />
              </div>
              <input placeholder="Company / Studio" className="w-full px-5 py-4 bg-white border border-border focus:outline-none focus:border-[color:var(--gold)]" />
              <select className="w-full px-5 py-4 bg-white border border-border focus:outline-none focus:border-[color:var(--gold)]">
                <option>Inquiry type — please select</option>
                <option>Hire architecture talent</option>
                <option>Hire interior design talent</option>
                <option>Executive search</option>
                <option>BIM / technical hiring</option>
                <option>I'm a candidate</option>
                <option>Press / partnerships</option>
              </select>
              <textarea required placeholder="Tell us about your need" className="w-full px-5 py-4 bg-white border border-border focus:outline-none focus:border-[color:var(--gold)] min-h-36" />
              <button type="submit" className="btn-gold">{submitted ? "Thank you — we'll be in touch" : "Send Message"}</button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="bg-[color:var(--surface)]">
        <div className="w-full h-[420px]">
          <iframe
            title="AA ArcHire Hyderabad Office"
            className="w-full h-full border-0"
            src="https://www.openstreetmap.org/export/embed.html?bbox=78.37%2C17.43%2C78.41%2C17.46&layer=mapnik&marker=17.4475%2C78.3826"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
