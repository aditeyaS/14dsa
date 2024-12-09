import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Heading, CodeBlock, LanguageSections } from "@/components/blocks";
import { pysnake, pyspiral } from "./code";
import SnakeImage from "./snake-image";
import SpiralImage from "./spiral-image";

export default function TraversalMatrix() {
  return (
    <PageContainer pageTitle="Traversal" contributors={["aditeyaS"]}>
      <SectionContainer>
        <Heading>Snake</Heading>
        <SnakeImage />
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language={"python"} code={pysnake} />
            </>,
          ]}
        />
      </SectionContainer>
      <SectionContainer>
        <Heading>Spiral</Heading>
        <SpiralImage />
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language={"python"} code={pyspiral} />
            </>,
          ]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
