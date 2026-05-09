import { createFileRoute } from "@tanstack/react-router";
import { InnerPageTemplate } from "@/components/site/InnerPageTemplate";
import img from "@/assets/ind-education.jpg";
export const Route = createFileRoute("/industries/education")({
  head: () => ({ meta: [{ title: "Education Design Recruitment | AA ArcHire" }, { name: "description", content: "Specialist recruitment for education design and architecture talent across India." }] }),
  component: () => <InnerPageTemplate
    eyebrow="Industry" title="Education Design Recruitment."
    subtitle="Schools, universities and learning environments where architecture supports pedagogy."
    heroImage={img}
    breadcrumb={[{ label: "Home", to: "/" }, { label: "Industries" }, { label: "Education" }]}
    overview={{ heading: "Sector-specific talent for education environments.", body: [
      "Education design is a long-horizon practice. We place architects who understand campus planning, learning theory and the operational realities of academic clients.",
      "Our consultants have placed talent on India's most recognized education projects, giving us the relationships and reference points that compress search timelines and elevate quality.",
    ]}}
    expertise={["Concept and design strategy","Schematic and design development","Construction documentation","Project management and delivery","FF&E and material specification","Sustainability and operational planning"]}
    roles={["Senior Designer","Design Lead","Project Architect","Sector Head","Studio Director","Senior Project Manager","Design Coordinator"]}
  />,
});
