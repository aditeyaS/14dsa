import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  CodeBlock,
  Heading,
  LanguageSections,
  LI,
  SpaceTimeComplexity,
  UL,
} from "@/components/blocks";
import { pybinarySearch, pybsrotated, pymediansorted } from "./code";

export default function BinarySearch() {
  return (
    <PageContainer pageTitle="Binary Search" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>Used for searching in sorted array</LI>
          <LI>
            <SpaceTimeComplexity
              time="O(log n)"
              timeLevel={3}
              space="O(1)"
              spaceLevel={1}
            />
          </LI>
        </UL>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language={"python"} code={pybinarySearch} />
            </>,
          ]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>Search in sorted rotated array</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language={"python"} code={pybsrotated} />
            </>,
          ]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>Median of 2 sorted array</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language={"python"} code={pymediansorted} />
            </>,
          ]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
