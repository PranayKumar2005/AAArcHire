import { createFileRoute } from "@tanstack/react-router";
import { InnerPageTemplate } from "@/components/site/InnerPageTemplate";
import img from "@/assets/ind-workplace.jpg";
export const Route = createFileRoute("/industries/workplace")({
  head: () => ({ meta: [{ title: "Workplace Design Recruitment | AA ArcHire" }, { name: "description", content: "Specialist recruitment for workplace design and architecture talent across India." }] }),
  component: () => <InnerPageTemplate
    eyebrow="Industry" title="Workplace Design Recruitment."
    subtitle="The future of work is being designed today — and we recruit the people designing it."
    heroImage={img}
    breadcrumb={[{ label: "Home", to: "/" }, { label: "Industries" }, { label: "Workplace" }]}
    overview={{ heading: "Sector-specific talent for workplace environments.", body: [
      "From global GCC fit-outs to creative agency studios, we place workplace strategists, designers and project leads.",
      "Our consultants have placed talent on India's most recognized workplace projects, giving us the relationships and reference points that compress search timelines and elevate quality.",
    ]}}
    expertise={["Concept and design strategy","Schematic and design development","Construction documentation","Project management and delivery","FF&E and material specification","Sustainability and operational planning"]}
    roles={["Senior Designer","Design Lead","Project Architect","Sector Head","Studio Director","Senior Project Manager","Design Coordinator"]}
  />,
});
