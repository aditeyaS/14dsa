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
import { pydfs, pydfsd } from "./code";

export default function DFS() {
  return (
    <PageContainer pageTitle="Depth First Search" contributors={["aditeyaS"]}>
      <SectionContainer>
        <Heading2>Applications</Heading2>
        <UL>
          <LI>cycle detection</LI>
          <LI>Topological sorting</LI>
          <LI>path finding</LI>
        </UL>
      </SectionContainer>
      <SectionContainer>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pydfs} />]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading2>Disconnected graph</Heading2>
        <Paragraph>
          Time: <Complexity complexity="O(V + E)" level={3} />
        </Paragraph>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pydfsd} />]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
