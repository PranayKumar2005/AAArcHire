import { createFileRoute } from "@tanstack/react-router";
import { InnerPageTemplate } from "@/components/site/InnerPageTemplate";
import img from "@/assets/ind-retail.jpg";
export const Route = createFileRoute("/industries/retail")({
  head: () => ({ meta: [{ title: "Retail Design Recruitment | AA ArcHire" }, { name: "description", content: "Specialist recruitment for retail design and architecture talent across India." }] }),
  component: () => <InnerPageTemplate
    eyebrow="Industry" title="Retail Design Recruitment."
    subtitle="Flagship stores, mall design and brand-led retail experiences across India and the GCC."
    heroImage={img}
    breadcrumb={[{ label: "Home", to: "/" }, { label: "Industries" }, { label: "Retail" }]}
    overview={{ heading: "Sector-specific talent for retail environments.", body: [
      "Retail design demands a unique blend of brand sensibility, commercial pragmatism and rapid delivery — the talents we specialize in identifying.",
      "Our consultants have placed talent on India's most recognized retail projects, giving us the relationships and reference points that compress search timelines and elevate quality.",
    ]}}
    expertise={["Concept and design strategy","Schematic and design development","Construction documentation","Project management and delivery","FF&E and material specification","Sustainability and operational planning"]}
    roles={["Senior Designer","Design Lead","Project Architect","Sector Head","Studio Director","Senior Project Manager","Design Coordinator"]}
  />,
});
