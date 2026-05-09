import { createFileRoute } from "@tanstack/react-router";
import { InnerPageTemplate } from "@/components/site/InnerPageTemplate";
import img from "@/assets/ind-hospitality.jpg";
export const Route = createFileRoute("/industries/hospitality")({
  head: () => ({ meta: [{ title: "Hospitality Design Recruitment | AA ArcHire" }, { name: "description", content: "Specialist recruitment for hospitality design and architecture talent across India." }] }),
  component: () => <InnerPageTemplate
    eyebrow="Industry" title="Hospitality Design Recruitment."
    subtitle="Hotels, resorts, restaurants and lifestyle brands deserve teams that understand guest experience as a design discipline."
    heroImage={img}
    breadcrumb={[{ label: "Home", to: "/" }, { label: "Industries" }, { label: "Hospitality" }]}
    overview={{ heading: "Sector-specific talent for hospitality environments.", body: [
      "From luxury resort masterplans to boutique urban hotels and F&B concepts, hospitality is one of our deepest practice areas.",
      "Our consultants have placed talent on India's most recognized hospitality projects, giving us the relationships and reference points that compress search timelines and elevate quality.",
    ]}}
    expertise={["Concept and design strategy","Schematic and design development","Construction documentation","Project management and delivery","FF&E and material specification","Sustainability and operational planning"]}
    roles={["Senior Designer","Design Lead","Project Architect","Sector Head","Studio Director","Senior Project Manager","Design Coordinator"]}
  />,
});
