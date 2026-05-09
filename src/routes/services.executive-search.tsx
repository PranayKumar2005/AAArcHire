import { createFileRoute } from "@tanstack/react-router";
import { InnerPageTemplate } from "@/components/site/InnerPageTemplate";
import img from "@/assets/service-executive.jpg";
export const Route = createFileRoute("/services/executive-search")({
  head: () => ({ meta: [{ title: "Executive Search — Architecture & Design Leadership | AA ArcHire" }, { name: "description", content: "Confidential C-suite, partner and principal search for design-led organizations across India and APAC." }] }),
  component: () => <InnerPageTemplate
    eyebrow="Service" title="Executive Search."
    subtitle="Confidential leadership placements for design-led organizations."
    heroImage={img}
    breadcrumb={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Executive Search" }]}
    overview={{
      heading: "Leadership hiring requires a different kind of search.",
      body: [
        "Our executive search practice operates discreetly across India, the Middle East and South-East Asia. We've helped design firms hire managing partners, CEOs of developer-led design groups, and global design directors for hospitality majors.",
        "Each search is led personally by a senior partner and supported by structured assessment, referencing and competitive benchmarking.",
      ],
    }}
    expertise={["Confidential off-market outreach","Structured leadership assessment","Compensation benchmarking and negotiation","Equity, partnership and ESOP structuring","On-boarding and 100-day support","Succession planning advisory"]}
    roles={["Managing Partner","CEO / Country Head","Global Design Director","Studio Principal","Practice Leader","Head of Design","Chief Design Officer"]}
  />,
});
