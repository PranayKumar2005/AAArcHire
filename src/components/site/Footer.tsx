import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Twitter, Facebook, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[color:var(--navy)] text-white">
      <div className="container-x py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Link to="/" className="h-display text-3xl font-bold">
              AA<span className="text-[color:var(--gold)]">.</span>ArcHire
            </Link>
            <p className="mt-5 text-white/65 leading-relaxed max-w-sm">
              India's premier recruitment partner for architecture, interior design and the built environment.
              Connecting visionary firms with the talent that shapes tomorrow's spaces.
            </p>
            <div className="mt-8">
              <p className="eyebrow mb-3">Newsletter</p>
              <form onSubmit={(e) => e.preventDefault()} className="flex max-w-sm">
                <input type="email" required placeholder="your@email.com"
                  className="flex-1 bg-white/5 border border-white/15 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-[color:var(--gold)]" />
                <button className="bg-[color:var(--gold)] text-[color:var(--navy)] px-5" aria-label="Subscribe">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow mb-5">Company</p>
            <ul className="space-y-3 text-white/70">
              <li><Link to="/about" className="hover:text-[color:var(--gold)]">About</Link></li>
              <li><Link to="/services" className="hover:text-[color:var(--gold)]">Services</Link></li>
              <li><Link to="/careers" className="hover:text-[color:var(--gold)]">Careers</Link></li>
              <li><Link to="/insights" className="hover:text-[color:var(--gold)]">Insights</Link></li>
              <li><Link to="/contact" className="hover:text-[color:var(--gold)]">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow mb-5">Industries</p>
            <ul className="space-y-3 text-white/70">
              <li><Link to="/industries/hospitality" className="hover:text-[color:var(--gold)]">Hospitality</Link></li>
              <li><Link to="/industries/healthcare" className="hover:text-[color:var(--gold)]">Healthcare</Link></li>
              <li><Link to="/industries/residential" className="hover:text-[color:var(--gold)]">Residential</Link></li>
              <li><Link to="/industries/retail" className="hover:text-[color:var(--gold)]">Retail</Link></li>
              <li><Link to="/industries/education" className="hover:text-[color:var(--gold)]">Education</Link></li>
              <li><Link to="/industries/workplace" className="hover:text-[color:var(--gold)]">Workplace</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow mb-5">Get in Touch</p>
            <ul className="space-y-4 text-white/70">
              <li className="flex gap-3"><MapPin className="h-5 w-5 text-[color:var(--gold)] shrink-0 mt-0.5" />
                <span>4th Floor, Cyber Towers,<br/>HITEC City, Hyderabad,<br/>Telangana 500081, India</span></li>
              <li className="flex gap-3"><Phone className="h-5 w-5 text-[color:var(--gold)] shrink-0" /><span>+91 40 4000 7890</span></li>
              <li className="flex gap-3"><Mail className="h-5 w-5 text-[color:var(--gold)] shrink-0" /><span>hello@aaarchire.com</span></li>
            </ul>
            <div className="flex gap-3 mt-6">
              {[Linkedin, Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" aria-label="social"
                  className="h-10 w-10 grid place-items-center border border-white/15 hover:bg-[color:var(--gold)] hover:text-[color:var(--navy)] hover:border-[color:var(--gold)] transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/50 uppercase tracking-[0.18em]">
          <p>© 2026 AA ArcHire. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[color:var(--gold)]">Privacy</a>
            <a href="#" className="hover:text-[color:var(--gold)]">Terms</a>
            <a href="#" className="hover:text-[color:var(--gold)]">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
