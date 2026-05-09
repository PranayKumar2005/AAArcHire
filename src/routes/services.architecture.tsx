import { createFileRoute } from "@tanstack/react-router";
import { InnerPageTemplate } from "@/components/site/InnerPageTemplate";
import img from "@/assets/service-architecture.jpg";
export const Route = createFileRoute("/services/architecture")({
  head: () => ({ meta: [{ title: "Architecture Recruiting — AA ArcHire" }, { name: "description", content: "Specialist architecture recruiting for India's leading studios. Senior architects, project leads and design directors." }] }),
  component: () => <InnerPageTemplate
    eyebrow="Service"
    title="Architecture Recruiting."
    subtitle="Placing architects who design India's most ambitious buildings."
    heroImage={img}
    breadcrumb={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Architecture" }]}
    overview={{
      heading: "Architecture talent is our home discipline.",
      body: [
        "From boutique design studios to multinational consultancies, AA ArcHire has placed thousands of architects across India and the GCC. We understand the difference between a design-led practice and a delivery-led one — and we hire accordingly.",
        "Our consultants are former architects, project managers and HR practitioners who have shipped buildings. We assess portfolios on craft, not keywords.",
      ],
    }}
    expertise={[
      "Concept and schematic design talent",
      "Design development and construction documentation",
      "Project management and delivery leadership",
      "Sustainability and LEED specialists",
      "Heritage and adaptive-reuse practitioners",
      "Computational and parametric designers",
    ]}
    roles={["Senior Architect","Principal Architect","Design Director","Project Architect","Studio Head","Associate Partner","Sustainability Lead","Job Captain"]}
  />,
});
