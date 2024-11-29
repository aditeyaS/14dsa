import CodeBlock from "@/components/code-block";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Heading } from "@/components/text";
import { LI, UL } from "@/components/ul-li";
import { pyDel, pyInit, pyInsert, pyOthers } from "./code";

export default function SetDS() {
  return (
    <PageContainer pageTitle="Set" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>distinct elements</LI>
          <LI>unordered</LI>
          <LI>O(1) for search, insert, delete</LI>
        </UL>
      </SectionContainer>

      <SectionContainer>
        <Heading>Initialize</Heading>
        <CodeBlock languages={["python"]} snippets={[pyInit]} />
      </SectionContainer>

      <SectionContainer>
        <Heading>Insert</Heading>
        <CodeBlock languages={["python"]} snippets={[pyInsert]} />
      </SectionContainer>

      <SectionContainer>
        <Heading>Delete</Heading>
        <CodeBlock languages={["python"]} snippets={[pyDel]} />
      </SectionContainer>

      <SectionContainer>
        <Heading>Others</Heading>
        <CodeBlock languages={["python"]} snippets={[pyOthers]} />
      </SectionContainer>
    </PageContainer>
  );
}
