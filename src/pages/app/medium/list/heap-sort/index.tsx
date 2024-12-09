import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  LI,
  UL,
  SpaceTimeComplexity,
  LanguageSections,
  CodeBlock,
  OL,
} from "@/components/blocks";
import { pyheapsort } from "./code";

export default function HeapSort() {
  return (
    <PageContainer pageTitle="Heap Sort" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>Optimization over selection sort</LI>
          <LI>Not stable sorting</LI>
          <LI>Used in hybrid sorting algo like Intro Sort</LI>
          <LI>
            <SpaceTimeComplexity
              time="θ(n log n)"
              timeLevel={4}
              space="O(1)"
              spaceLevel={1}
            />
          </LI>
          <LI>
            2 steps:
            <OL className="ml-10">
              <LI>Build a MaxHeap</LI>
              <LI>
                Repeatedly swap root with the last node, reduce heap size by 1
                and heapify
              </LI>
            </OL>
          </LI>
        </UL>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language={"python"} code={pyheapsort} />
            </>,
          ]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
