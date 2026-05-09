import { createFileRoute } from "@tanstack/react-router";
import { InnerPageTemplate } from "@/components/site/InnerPageTemplate";
import img from "@/assets/ind-healthcare.jpg";
export const Route = createFileRoute("/industries/healthcare")({
  head: () => ({ meta: [{ title: "Healthcare Design Recruitment | AA ArcHire" }, { name: "description", content: "Specialist recruitment for healthcare design and architecture talent across India." }] }),
  component: () => <InnerPageTemplate
    eyebrow="Industry" title="Healthcare Design Recruitment."
    subtitle="Hospitals, clinics and wellness facilities where architecture is part of the care pathway."
    heroImage={img}
    breadcrumb={[{ label: "Home", to: "/" }, { label: "Industries" }, { label: "Healthcare" }]}
    overview={{ heading: "Sector-specific talent for healthcare environments.", body: [
      "Healthcare design is one of the most complex disciplines in architecture — we recruit specialists who understand evidence-based design, infection control planning and the regulatory landscape.",
      "Our consultants have placed talent on India's most recognized healthcare projects, giving us the relationships and reference points that compress search timelines and elevate quality.",
    ]}}
    expertise={["Concept and design strategy","Schematic and design development","Construction documentation","Project management and delivery","FF&E and material specification","Sustainability and operational planning"]}
    roles={["Senior Designer","Design Lead","Project Architect","Sector Head","Studio Director","Senior Project Manager","Design Coordinator"]}
  />,
});
