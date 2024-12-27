import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  Alert,
  CodeBlock,
  Heading,
  LanguageSections,
  LI,
  UL,
} from "@/components/blocks";

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
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language="python" code={pyInit} />
              <Alert type="Important">
                <CodeBlock language="python" code={pyImportant} />
              </Alert>
            </>,
          ]}
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
        <Heading>Others</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language="python" code={pyOthers} />]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
