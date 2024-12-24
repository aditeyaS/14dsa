import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";

import {
  pyAccess,
  pyDel,
  pyInit,
  pyOthers,
  pyStrFormatting,
  pyStringMethods,
} from "./code";
import {
  Alert,
  CodeBlock,
  Heading,
  LanguageSections,
  LI,
  UL,
} from "@/components/blocks";

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
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language="python" code={pyInit} />]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>Access</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language="python" code={pyAccess} />]}
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
        <Heading>String formatting</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language="python" code={pyStrFormatting} />]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>Others</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language="python" code={pyOthers} />]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>String methods</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language="python" code={pyStringMethods} />]}
        />
      </SectionContainer>

      <SectionContainer>
        <Alert type={"Tip"}>
          If there are a lot of modifications required then choose an array and
          return it as a string
        </Alert>
      </SectionContainer>
    </PageContainer>
  );
}
