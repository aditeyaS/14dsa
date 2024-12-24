import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  LI,
  UL,
  SpaceTimeComplexity,
  LanguageSections,
  CodeBlock,
  Paragraph,
} from "@/components/blocks";
import { pycountsort, pycountsortobj } from "./code";

export default function CountingSort() {
  return (
    <PageContainer pageTitle="Counting Sort" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>Used when array value range is small</LI>
          <LI>Elements in range [0, k-1]</LI>
          <LI>
            <SpaceTimeComplexity
              time="θ(n + k)"
              timeLevel={3}
              space="k"
              spaceLevel={1}
            />
          </LI>
        </UL>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pycountsort} />]}
        />
      </SectionContainer>

      <SectionContainer>
        <Paragraph className="underline">
          General Purpose Sorting Algo
        </Paragraph>
        <UL>
          <LI>The above will not work for list of objects</LI>
          <LI>Stable</LI>
        </UL>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pycountsortobj} />]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
