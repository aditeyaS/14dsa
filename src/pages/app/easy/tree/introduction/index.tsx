import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  LI,
  UL,
  Heading,
  LanguageSections,
  CodeBlock,
  OL,
  Alert,
} from "@/components/blocks";
import { pynode } from "./code";

export default function Introduction() {
  return (
    <PageContainer pageTitle="Tree Introduction" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>hierarchical data structure</LI>
          <LI>
            Terms related to tree:
            <OL className="ml-8 text-base">
              <LI>root</LI>
              <LI>leaf - nodes with no children</LI>
              <LI>children</LI>
              <LI>parent</LI>
              <LI>subtree</LI>
              <LI>descendants</LI>
              <LI>ancestors</LI>
              <LI>degree - no of children</LI>
              <LI>internal nodes - non-leaf nodes</LI>
            </OL>
          </LI>
          <LI>
            Applications: organization structure; folder structure; XML/HTML
            content; binary search tree; binary heap; b and B+ tree
          </LI>
        </UL>
      </SectionContainer>
      <SectionContainer>
        <Alert type={"Important"}>We mainly talk about binary trees.</Alert>
      </SectionContainer>
      <SectionContainer>
        <Heading>Binary Tree</Heading>
        <UL>
          <LI>at most 2 children</LI>
        </UL>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pynode} />]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
