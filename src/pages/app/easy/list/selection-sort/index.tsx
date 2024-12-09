import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  LI,
  UL,
  Heading,
  CodeBlock,
  LanguageSections,
  SpaceTimeComplexity,
} from "@/components/blocks";
import SortVisualizer from "@/components/sort-visualizer";
import { pyselectionsort } from "./code";
import visualizerFunction from "./visualizer";

export default function SelectionSort() {
  return (
    <PageContainer pageTitle="Selection Sort" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>Not Stable</LI>
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
              <CodeBlock language={"python"} code={pyselectionsort} />
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
