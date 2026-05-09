import { createFileRoute } from "@tanstack/react-router";
import { HomeHero } from "@/components/sections/HomeHero";
import { Services } from "@/components/sections/Services";
import { Industries } from "@/components/sections/Industries";
import { Stats } from "@/components/sections/Stats";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { JobsPreview } from "@/components/sections/JobsPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { Insights } from "@/components/sections/Insights";
import { CTABanner } from "@/components/sections/CTABanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AA ArcHire — Architecture & Design Recruitment, Hyderabad" },
      { name: "description", content: "AA ArcHire connects elite architecture and interior design talent with India's leading firms. Boutique recruitment, executive search and BIM hiring." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <HomeHero />
      <Services />
      <Industries />
      <Stats />
      <AboutPreview />
      <JobsPreview />
      <Testimonials />
      <Insights />
      <CTABanner />
    </>
  );
}
