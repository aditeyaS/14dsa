import CodeBlock from "@/components/code-block";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Heading } from "@/components/text";
import { LI, UL } from "@/components/ul-li";
import {
  pyAccess,
  pyDel,
  pyInit,
  pyOthers,
  pyStrFormatting,
  pyStringMethods,
} from "./code";

export default function String() {
  return (
    <PageContainer pageTitle="String" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>immutable</LI>
        </UL>
      </SectionContainer>

      <SectionContainer>
        <Heading>Initialize</Heading>
        <CodeBlock languages={["python"]} snippets={[pyInit]} />
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
        <Heading>String formatting</Heading>
        <CodeBlock languages={["python"]} snippets={[pyStrFormatting]} />
      </SectionContainer>

      <SectionContainer>
        <Heading>Others</Heading>
        <CodeBlock languages={["python"]} snippets={[pyOthers]} />
      </SectionContainer>

      <SectionContainer>
        <Heading>String methods</Heading>
        <CodeBlock languages={["python"]} snippets={[pyStringMethods]} />
      </SectionContainer>
    </PageContainer>
  );
}
