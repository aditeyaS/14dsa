import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  Heading,
  Heading2,
  Paragraph,
  Strong,
  UL,
  LI,
  Complexity,
  LanguageSections,
  CodeBlock,
} from "@/components/blocks";
import { pylumoto, pyhoares, pyquicksort } from "./code";

export default function QuickSort() {
  return (
    <PageContainer pageTitle="Quick Sort" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>Divide and conquer algo</LI>
          <LI>
            Worst Case: <Complexity complexity="O(n^2)" level={5} />
          </LI>
          <LI>
            Despite O(n^2) considered faster:
            <UL className="ml-8">
              <LI>in place</LI>
              <LI>cache friendly</LI>
              <LI>
                avg <Complexity complexity="O(n log n)" level={3} />
              </LI>
              <LI>tail recursive</LI>
            </UL>
          </LI>
        </UL>
      </SectionContainer>

      <SectionContainer>
        <Heading2>Array partition</Heading2>
        <Paragraph>
          Choose 1 element (<Strong>pivot</Strong>) and bring all smaller
          elements on left and larger on right.
        </Paragraph>
        <Paragraph>
          2 partition algorithm:
          <UL>
            <LI>Lomuto</LI>
            <LI>Hoare's</LI>
          </UL>
        </Paragraph>
      </SectionContainer>

      <SectionContainer>
        <Heading2 className="underline">Lumoto Partition</Heading2>
        <UL>
          <LI>Last element - r (right) - pivot</LI>
          <LI>
            picks the last element - places it at the correct position and
            return the position
          </LI>
        </UL>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pylumoto} />]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading2 className="underline">Hoare's Partition</Heading2>
        <UL>
          <LI>First element - l (left) - pivot</LI>
          <LI>
            picks the first element - places it at the correct position and
            returns the position
          </LI>
          <LI>Faster than Lumoto</LI>
        </UL>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pyhoares} />]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>Quick Sort</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pyquicksort} />]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
