import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  CodeBlock,
  Complexity,
  Heading,
  LanguageSections,
  LI,
  UL,
} from "@/components/blocks";
import { pyDel, pyInit, pyInsert, pyOthers } from "./code";

export default function SetDS() {
  return (
    <PageContainer pageTitle="Set" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>distinct elements</LI>
          <LI>unordered</LI>
          <LI>
            search, insert, delete - <Complexity complexity="O(1)" />
          </LI>
        </UL>
      </SectionContainer>

      <SectionContainer>
        <Heading>Initialize</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language="python" code={pyInit} />]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>Insert</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language="python" code={pyInsert} />]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>Delete</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language="python" code={pyDel} />]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>Others</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language="python" code={pyOthers} />]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
