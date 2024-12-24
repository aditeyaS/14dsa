import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import SortVisualizer from "@/components/sort-visualizer";
import {
  CodeBlock,
  Heading,
  LanguageSections,
  LI,
  SpaceTimeComplexity,
  UL,
} from "@/components/blocks";
import { pybubblesort } from "./code";
import visualizerFunction from "./visualizer";

export default function BubbleSort() {
  return (
    <PageContainer pageTitle="Bubble Sort" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>Stable sorting</LI>
          <LI>
            <SpaceTimeComplexity
              time="O(n^2)"
              timeLevel={5}
              space="O(1)"
              spaceLevel={1}
            />
          </LI>
        </UL>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pybubblesort} />]}
        />
      </SectionContainer>
      <SectionContainer>
        <Heading>Visualizer</Heading>
        <SortVisualizer sortFunction={visualizerFunction} />
      </SectionContainer>
    </PageContainer>
  );
}
