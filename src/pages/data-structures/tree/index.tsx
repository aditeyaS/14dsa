import CodeBlock from "@/components/code-block";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Heading } from "@/components/text";
import { LI, UL } from "@/components/ul-li";
import { pynode } from "./code";

export default function Tree() {
  return (
    <PageContainer pageTitle="Tree" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>hierarchical data structure</LI>
          <LI>
            Terms related to tree: root, leaf, children, parent, subtree,
            descendants, ancestors, degree (no of children), internal nodes
            (non-leaf nodes)
          </LI>
          <LI>
            Applications: organization structure; folder structure; XML/HTML
            content; binary search tree; binary heap; b and B+ tree
          </LI>
        </UL>
      </SectionContainer>
      <SectionContainer>
        <Heading>Binary Tree</Heading>
        <UL>
          <LI>at most 2 children</LI>
        </UL>
        <CodeBlock languages={["python"]} snippets={[pynode]} />
      </SectionContainer>
    </PageContainer>
  );
}
