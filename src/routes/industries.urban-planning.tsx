import { createFileRoute } from "@tanstack/react-router";
import { InnerPageTemplate } from "@/components/site/InnerPageTemplate";
import img from "@/assets/ind-urban.jpg";
export const Route = createFileRoute("/industries/urban-planning")({
  head: () => ({ meta: [{ title: "Urban Planning Design Recruitment | AA ArcHire" }, { name: "description", content: "Specialist recruitment for urban planning design and architecture talent across India." }] }),
  component: () => <InnerPageTemplate
    eyebrow="Industry" title="Urban Planning Design Recruitment."
    subtitle="Master planners, urban designers and the talent shaping India's next generation of cities."
    heroImage={img}
    breadcrumb={[{ label: "Home", to: "/" }, { label: "Industries" }, { label: "Urban Planning" }]}
    overview={{ heading: "Sector-specific talent for urban planning environments.", body: [
      "Our urban planning practice supports public-sector clients, large developers and consultancies working on smart cities, TOD and large-scale master plans.",
      "Our consultants have placed talent on India's most recognized urban planning projects, giving us the relationships and reference points that compress search timelines and elevate quality.",
    ]}}
    expertise={["Concept and design strategy","Schematic and design development","Construction documentation","Project management and delivery","FF&E and material specification","Sustainability and operational planning"]}
    roles={["Senior Designer","Design Lead","Project Architect","Sector Head","Studio Director","Senior Project Manager","Design Coordinator"]}
  />,
});
