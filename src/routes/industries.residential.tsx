import { createFileRoute } from "@tanstack/react-router";
import { InnerPageTemplate } from "@/components/site/InnerPageTemplate";
import img from "@/assets/ind-residential.jpg";
export const Route = createFileRoute("/industries/residential")({
  head: () => ({ meta: [{ title: "Residential Design Recruitment | AA ArcHire" }, { name: "description", content: "Specialist recruitment for residential design and architecture talent across India." }] }),
  component: () => <InnerPageTemplate
    eyebrow="Industry" title="Residential Design Recruitment."
    subtitle="From luxury private homes to large-scale residential developments — designers who craft how people live."
    heroImage={img}
    breadcrumb={[{ label: "Home", to: "/" }, { label: "Industries" }, { label: "Residential" }]}
    overview={{ heading: "Sector-specific talent for residential environments.", body: [
      "We recruit residential designers across the spectrum, from intimate private commissions to large multi-family developer projects.",
      "Our consultants have placed talent on India's most recognized residential projects, giving us the relationships and reference points that compress search timelines and elevate quality.",
    ]}}
    expertise={["Concept and design strategy","Schematic and design development","Construction documentation","Project management and delivery","FF&E and material specification","Sustainability and operational planning"]}
    roles={["Senior Designer","Design Lead","Project Architect","Sector Head","Studio Director","Senior Project Manager","Design Coordinator"]}
  />,
});
