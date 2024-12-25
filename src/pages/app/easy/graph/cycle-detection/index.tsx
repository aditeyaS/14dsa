import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { LanguageSections, CodeBlock, Heading2 } from "@/components/blocks";
import { pyud, pyd } from "./code";

export default function CycleDetection() {
  return (
    <PageContainer pageTitle="Cycle Detection" contributors={["aditeyaS"]}>
      <SectionContainer>
        <Heading2>Undirected graph</Heading2>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pyud} />]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading2>Directed graph</Heading2>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pyd} />]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
