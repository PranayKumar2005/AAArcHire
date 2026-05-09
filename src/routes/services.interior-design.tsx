import { createFileRoute } from "@tanstack/react-router";
import { InnerPageTemplate } from "@/components/site/InnerPageTemplate";
import img from "@/assets/service-interior.jpg";
export const Route = createFileRoute("/services/interior-design")({
  head: () => ({ meta: [{ title: "Interior Design Recruiting — AA ArcHire" }, { name: "description", content: "Curated interior design recruitment for hospitality, residential and commercial studios." }] }),
  component: () => <InnerPageTemplate
    eyebrow="Service" title="Interior Design Recruiting."
    subtitle="Designers who shape how spaces feel — and how brands behave inside them."
    heroImage={img}
    breadcrumb={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Interior Design" }]}
    overview={{
      heading: "Interior design hiring is part craft, part chemistry.",
      body: [
        "We recruit interior designers, FF&E specialists and design managers for studios where atmosphere matters as much as plan. Our network spans hospitality majors, luxury residential studios and global commercial practices.",
        "Every shortlist is curated against your studio's aesthetic, sector experience and team chemistry — not just years of experience.",
      ],
    }}
    expertise={["Hospitality and resort interiors","Luxury residential","Workplace and commercial fit-out","FF&E procurement and specification","Material and finish strategy","Design management and delivery"]}
    roles={["Senior Interior Designer","Design Director","FF&E Lead","Studio Head","Associate Designer","Junior Designer","Spec & Materials Manager"]}
  />,
});
