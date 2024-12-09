import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import SortVisualizer from "@/components/sort-visualizer";
import {
  LI,
  UL,
  SpaceTimeComplexity,
  LanguageSections,
  CodeBlock,
  Heading,
} from "@/components/blocks";
import { pyinsertionsort } from "./code";
import visualizerFunction from "./visualizer";

export default function InsertionSort() {
  return (
    <PageContainer pageTitle="Insertion Sort" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>Stable sorting</LI>
          <LI>
            <SpaceTimeComplexity
              time="θ(n^2)"
              timeLevel={5}
              space="O(1)"
              spaceLevel={1}
            />
          </LI>
        </UL>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language={"python"} code={pyinsertionsort} />
            </>,
          ]}
        />
      </SectionContainer>
      <SectionContainer>
        <Heading>Visualizer</Heading>
        <SortVisualizer sortFunction={visualizerFunction} />
      </SectionContainer>
    </PageContainer>
  );
}
