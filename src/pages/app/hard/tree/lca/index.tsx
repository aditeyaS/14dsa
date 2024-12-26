import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  CodeBlock,
  Heading2,
  LanguageSections,
  Paragraph2,
  PseudoCode,
  SpaceTimeComplexity,
} from "@/components/blocks";
import { pylca1, pylca2, pypseudo1, pypseudo2 } from "./code";

export default function LCA() {
  return (
    <PageContainer
      pageTitle="Least common ancestor"
      contributors={["aditeyaS"]}
    >
      <SectionContainer>
        <Heading2>Naive</Heading2>
        <SpaceTimeComplexity
          space="O(n)"
          time="O(n)"
          spaceLevel={3}
          timeLevel={3}
        />
        <PseudoCode code={pypseudo1} />
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language="python" code={pylca1} />]}
        />
      </SectionContainer>
      <SectionContainer>
        <Heading2>Space Efficient</Heading2>
        <Paragraph2 className="text-muted-foreground">
          Assumption: The nodes will be present
        </Paragraph2>
        <PseudoCode text="Idea" code={pypseudo2} />
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language="python" code={pylca2} />]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
