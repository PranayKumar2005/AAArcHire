import { createFileRoute } from "@tanstack/react-router";
import { InnerPageTemplate } from "@/components/site/InnerPageTemplate";
import img from "@/assets/service-bim.jpg";
export const Route = createFileRoute("/services/bim")({
  head: () => ({ meta: [{ title: "BIM & Technical Talent Recruitment | AA ArcHire" }, { name: "description", content: "Revit, BIM, computational design and technical specialists for India's leading practices." }] }),
  component: () => <InnerPageTemplate
    eyebrow="Service" title="BIM & Technical Talent."
    subtitle="The technologists, modelers and coordinators behind every well-delivered project."
    heroImage={img}
    breadcrumb={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "BIM" }]}
    overview={{
      heading: "Technical talent is the multiplier behind every great studio.",
      body: [
        "BIM, computational design and digital workflows are reshaping the design profession. We recruit the specialists who set up your standards, build your models and unlock your delivery capacity.",
        "From Revit modellers to Dynamo developers, our pipeline is one of the deepest in South Asia.",
      ],
    }}
    expertise={["Revit Architecture and MEP","BIM coordination and clash detection","Dynamo and Grasshopper scripting","ISO 19650 implementation","Common Data Environments","Digital twins and reality capture"]}
    roles={["BIM Manager","BIM Coordinator","Senior Revit Modeller","Computational Designer","Digital Design Lead","BIM Implementation Specialist"]}
  />,
});
