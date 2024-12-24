import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  LanguageSections,
  CodeBlock,
  Heading2,
  Paragraph,
  Complexity,
  UL,
  LI,
} from "@/components/blocks";
import { pybfs, pybfsd } from "./code";

export default function BFS() {
  return (
    <PageContainer pageTitle="Breadth First Search" contributors={["aditeyaS"]}>
      <SectionContainer>
        <Heading2>Applications</Heading2>
        <UL>
          <LI>shortest path in unweighted graph</LI>
          <LI>cycle detection</LI>
          <LI>crawler in search engine</LI>
        </UL>
      </SectionContainer>
      <SectionContainer>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pybfs} />]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading2>Disconnected graph</Heading2>
        <Paragraph>
          Time: <Complexity complexity="O(V + E)" level={3} />
        </Paragraph>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pybfsd} />]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
