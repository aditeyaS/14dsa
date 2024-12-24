import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  LI,
  UL,
  Heading,
  SpaceTimeComplexity,
  LanguageSections,
  CodeBlock,
} from "@/components/blocks";
import SortVisualizer from "@/components/sort-visualizer";
import visualizerFunction from "./visualizer";
import { pymergesort } from "./code";

export default function MergeSort() {
  return (
    <PageContainer pageTitle="Merge Sort" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>Divide and conquer algo</LI>
          <LI>Stable sorting</LI>
          <LI>Well suited for LL | Quick sort better for list</LI>
        </UL>
        <SpaceTimeComplexity
          time="θ(n log n)"
          timeLevel={3}
          space="O(n)"
          spaceLevel={3}
        />
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pymergesort} />]}
        />
      </SectionContainer>
      <SectionContainer>
        <Heading>Visualizer</Heading>
        <SortVisualizer sortFunction={visualizerFunction} />
      </SectionContainer>
    </PageContainer>
  );
}
