import CodeBlock from "@/components/code-block";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Heading } from "@/components/text";
import { LI, UL } from "@/components/ul-li";
import { Alert } from "@/components/alert";
import { pyAccess, pyImportant, pyInit, pyOthers } from "./code";

export default function Tuple() {
  return (
    <PageContainer pageTitle="Tuple" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>ordered</LI>
          <LI>unchangeable</LI>
          <LI>can have duplicates</LI>
        </UL>
      </SectionContainer>

      <SectionContainer>
        <Heading>Initialization</Heading>
        <CodeBlock languages={["python"]} snippets={[pyInit]} />
      </SectionContainer>

      <SectionContainer>
        <Heading>Access</Heading>
        <CodeBlock languages={["python"]} snippets={[pyAccess]} />
      </SectionContainer>

      <SectionContainer>
        <Heading>Others</Heading>
        <CodeBlock languages={["python"]} snippets={[pyOthers]} />
      </SectionContainer>

      <SectionContainer>
        <Alert type="Important">
          <CodeBlock languages={["python"]} snippets={[pyImportant]} />
        </Alert>
      </SectionContainer>
    </PageContainer>
  );
}
