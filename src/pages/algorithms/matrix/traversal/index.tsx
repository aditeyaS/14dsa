import CodeBlock from "@/components/code-block";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { pysnake, pyspiral } from "./code";
import { Heading } from "@/components/text";
import SnakeImage from "./snake-image";
import SpiralImage from "./spiral-image";

export default function TraversalMatrix() {
  return (
    <PageContainer pageTitle="Traversal" contributors={["aditeyaS"]}>
      <SectionContainer>
        <Heading>Snake</Heading>
        <SnakeImage />
        <CodeBlock languages={["python"]} snippets={[pysnake]} />
      </SectionContainer>

      <SectionContainer>
        <Heading>Spiral</Heading>
        <SpiralImage />
        <CodeBlock languages={["python"]} snippets={[pyspiral]} />
      </SectionContainer>
    </PageContainer>
  );
}
