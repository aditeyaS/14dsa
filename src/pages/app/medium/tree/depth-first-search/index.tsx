import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  Paragraph,
  SpaceTimeComplexity,
  LanguageSections,
  CodeBlock,
  Heading,
  Paragraph2,
} from "@/components/blocks";
import { pyinOrder, pypreOrderSO, pypreOrder } from "./code";

export default function DFS() {
  return (
    <PageContainer pageTitle="Depth First Search" contributors={["aditeyaS"]}>
      <SectionContainer>
        <Heading>Iterative</Heading>
      </SectionContainer>

      <SectionContainer>
        <Paragraph>In-order (LPR)</Paragraph>
        <SpaceTimeComplexity
          time="θ(n)"
          timeLevel={3}
          space="θ(h)"
          spaceLevel={3}
        />
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pyinOrder} />]}
        />
      </SectionContainer>

      <SectionContainer>
        <Paragraph>Pre-order (PLR)</Paragraph>
        <SpaceTimeComplexity
          time="θ(n)"
          timeLevel={3}
          space="θ(n)"
          spaceLevel={3}
        />
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pypreOrder} />]}
        />
        <Paragraph2 className="text-muted-foreground">
          Space optimized:
        </Paragraph2>
        <SpaceTimeComplexity
          time="θ(n)"
          timeLevel={3}
          space="θ(h)"
          spaceLevel={3}
        />
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pypreOrderSO} />]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
