import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  Paragraph,
  SpaceTimeComplexity,
  LanguageSections,
  CodeBlock,
} from "@/components/blocks";
import { pylevelOrder } from "./code";

export default function BFS() {
  return (
    <PageContainer pageTitle="Breadth First Search" contributors={["aditeyaS"]}>
      <SectionContainer>
        <Paragraph>Level order traversal</Paragraph>
        <SpaceTimeComplexity
          time="θ(n)"
          timeLevel={3}
          space="θ(width)"
          spaceLevel={3}
        />
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pylevelOrder} />]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
