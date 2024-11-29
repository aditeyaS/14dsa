import CodeBlock from "@/components/code-block";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Heading, Paragraph } from "@/components/text";
import { LI, UL } from "@/components/ul-li";
import { Alert } from "@/components/alert";
import { pyAccess, pyDdTip, pyDel, pyInit, pyInsert, pyOthers } from "./code";

export default function Dictionary() {
  return (
    <PageContainer pageTitle="Dictionary" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>key value pairs</LI>
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
        <Heading>Access</Heading>
        <CodeBlock languages={["python"]} snippets={[pyAccess]} />
      </SectionContainer>

      <SectionContainer>
        <Heading>Delete</Heading>
        <CodeBlock languages={["python"]} snippets={[pyDel]} />
      </SectionContainer>

      <SectionContainer>
        <Heading>Others</Heading>
        <CodeBlock languages={["python"]} snippets={[pyOthers]} />
      </SectionContainer>

      <SectionContainer>
        <Alert type="Caution">
          <Paragraph>
            The dictionary key should be immutable. Use tuple instead of list.
          </Paragraph>
        </Alert>
      </SectionContainer>

      <SectionContainer>
        <Alert type="Tip">
          <CodeBlock languages={["python"]} snippets={[pyDdTip]}></CodeBlock>
        </Alert>
      </SectionContainer>
    </PageContainer>
  );
}
