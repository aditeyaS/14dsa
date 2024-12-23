import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  LI,
  UL,
  Heading,
  Paragraph,
  SpaceTimeComplexity,
  LanguageSections,
  CodeBlock,
  Complexity,
} from "@/components/blocks";
import { pydeleteR, pyinsertI, pyinsertR, pysearchI, pysearchR } from "./code";

export default function BST() {
  return (
    <PageContainer pageTitle="Binary Search Tree" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>{`left.val < right.val`}</LI>
          <LI>all values are typically distinct</LI>
          <LI>
            search, insert, delete -{" "}
            <Complexity complexity="O(log n)" level={2} />
          </LI>
          <LI>
            find closest - <Complexity complexity="O(log n)" level={2} />
          </LI>
          <LI>
            sorted traversal - <Complexity complexity="O(n)" level={3} />
          </LI>
          <LI>
            Applications: maintain sorted stream of data; implement doubly ended
            priority queue
          </LI>
        </UL>
      </SectionContainer>
      <SectionContainer>
        <Heading>Search</Heading>
        <Paragraph>Recursive</Paragraph>
        <SpaceTimeComplexity
          time="O(h)"
          timeLevel={3}
          space="O(h)"
          spaceLevel={3}
        />
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language={"python"} code={pysearchR} />
            </>,
          ]}
        />
        <Paragraph>Iterative</Paragraph>
        <SpaceTimeComplexity
          time="O(h)"
          timeLevel={3}
          space="O(1)"
          spaceLevel={1}
        />
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language={"python"} code={pysearchI} />
            </>,
          ]}
        />
      </SectionContainer>
      <SectionContainer>
        <Heading>Insert</Heading>
        <Paragraph>Recursive</Paragraph>
        <SpaceTimeComplexity
          time="O(h)"
          timeLevel={3}
          space="O(h)"
          spaceLevel={3}
        />
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language={"python"} code={pyinsertR} />
            </>,
          ]}
        />

        <Paragraph>Iterative</Paragraph>
        <SpaceTimeComplexity
          time="O(h)"
          timeLevel={3}
          space="O(1)"
          spaceLevel={1}
        />
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language={"python"} code={pyinsertI} />
            </>,
          ]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>Delete</Heading>
        <Paragraph>Recursive</Paragraph>
        <SpaceTimeComplexity
          time="O(h)"
          timeLevel={3}
          space="O(h)"
          spaceLevel={3}
        />
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language={"python"} code={pydeleteR} />
            </>,
          ]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
