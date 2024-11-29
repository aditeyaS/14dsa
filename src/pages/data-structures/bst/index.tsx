import CodeBlock from "@/components/code-block";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Heading, Paragraph } from "@/components/text";
import { LI, UL } from "@/components/ul-li";
import { Complexity } from "@/components/complexity";
import { pydeleteR, pyinsertI, pyinsertR, pysearchI, pysearchR } from "./code";

export default function BST() {
  return (
    <PageContainer pageTitle="Binary Search Tree" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>{`left.val < right.val`}</LI>
          <LI>all keys are typically distinct</LI>
          <LI>search, insert, delete - O(log n)</LI>
          <LI>find closest - O(log n)</LI>
          <LI>sorted traversal - O(n)</LI>
          <LI>
            Applications: maintain sorted stream of data; implement doubly ended
            priority queue
          </LI>
        </UL>
      </SectionContainer>
      <SectionContainer>
        <Heading>Search</Heading>
        <Paragraph>Recursive</Paragraph>
        <Complexity
          time="O(h)"
          timeVariant={"fair"}
          space="O(h)"
          spaceVariant={"fair"}
        />
        <CodeBlock languages={["python"]} snippets={[pysearchR]} />
        <Paragraph>Recursive</Paragraph>
        <Complexity
          time="O(h)"
          timeVariant={"fair"}
          space="O(1)"
          spaceVariant={"excellent"}
        />
        <CodeBlock languages={["python"]} snippets={[pysearchI]} />
      </SectionContainer>
      <SectionContainer>
        <Heading>Insert</Heading>
        <Paragraph>Recursive</Paragraph>
        <Complexity
          time="O(h)"
          timeVariant={"fair"}
          space="O(h)"
          spaceVariant={"fair"}
        />
        <CodeBlock languages={["python"]} snippets={[pyinsertR]} />
        <Paragraph>Iterative</Paragraph>
        <Complexity
          time="O(h)"
          timeVariant={"fair"}
          space="O(1)"
          spaceVariant={"excellent"}
        />
        <CodeBlock languages={["python"]} snippets={[pyinsertI]} />
      </SectionContainer>

      <SectionContainer>
        <Heading>Delete</Heading>
        <Paragraph>Recursive</Paragraph>
        <Complexity
          time="O(h)"
          timeVariant={"fair"}
          space="O(h)"
          spaceVariant={"fair"}
        />
        <CodeBlock languages={["python"]} snippets={[pydeleteR]} />
      </SectionContainer>

      <SectionContainer>
        <Heading>AVL Tree</Heading>
        <UL>
          <LI>Self balancing BST</LI>
          <LI>
            {
              "For every node difference between left and right height does not exceed 1; balance factor <= 1"
            }
          </LI>
          <LI>balance factor = abs(left height - right height)</LI>
        </UL>
      </SectionContainer>

      <SectionContainer>
        <Heading>Red Black Tree</Heading>
        <UL>
          <LI>Every node is either Red or Black</LI>
          <LI>root is Black</LI>
          <LI>No 2 consecutive Red</LI>
          <LI>
            number of Black nodes from every node to all of it's descendant
            leaves should be same
          </LI>
        </UL>
      </SectionContainer>
    </PageContainer>
  );
}
