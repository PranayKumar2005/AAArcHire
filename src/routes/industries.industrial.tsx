import { createFileRoute } from "@tanstack/react-router";
import { InnerPageTemplate } from "@/components/site/InnerPageTemplate";
import img from "@/assets/ind-industrial.jpg";
export const Route = createFileRoute("/industries/industrial")({
  head: () => ({ meta: [{ title: "Industrial Design Recruitment | AA ArcHire" }, { name: "description", content: "Specialist recruitment for industrial design and architecture talent across India." }] }),
  component: () => <InnerPageTemplate
    eyebrow="Industry" title="Industrial Design Recruitment."
    subtitle="Factories, warehouses, data centers and the architecture of industry."
    heroImage={img}
    breadcrumb={[{ label: "Home", to: "/" }, { label: "Industries" }, { label: "Industrial" }]}
    overview={{ heading: "Sector-specific talent for industrial environments.", body: [
      "Industrial architecture is a fast-growing practice in India. We recruit architects with experience in manufacturing facilities, logistics, and mission-critical infrastructure.",
      "Our consultants have placed talent on India's most recognized industrial projects, giving us the relationships and reference points that compress search timelines and elevate quality.",
    ]}}
    expertise={["Concept and design strategy","Schematic and design development","Construction documentation","Project management and delivery","FF&E and material specification","Sustainability and operational planning"]}
    roles={["Senior Designer","Design Lead","Project Architect","Sector Head","Studio Director","Senior Project Manager","Design Coordinator"]}
  />,
});
