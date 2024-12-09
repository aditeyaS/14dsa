import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  Alert,
  CodeBlock,
  Complexity,
  Heading,
  LanguageSections,
  LI,
  Paragraph,
  UL,
} from "@/components/blocks";
import { pyAccess, pyDdTip, pyDel, pyInit, pyInsert, pyOthers } from "./code";

export default function Dictionary() {
  return (
    <PageContainer pageTitle="Dictionary" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>key value pairs</LI>
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
          sections={[
            <>
              <CodeBlock language="python" code={pyInit} />
            </>,
          ]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>Insert</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language="python" code={pyInsert} />
              <Alert type="Caution">
                <Paragraph>
                  The dictionary key should be immutable. Use tuple instead of
                  list.
                </Paragraph>
              </Alert>
            </>,
          ]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>Access</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language="python" code={pyAccess} />
            </>,
          ]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>Delete</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language="python" code={pyDel} />
            </>,
          ]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>Others</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language="python" code={pyOthers} />
              <Alert type="Tip">
                <CodeBlock language={"python"} code={pyDdTip}></CodeBlock>
              </Alert>
            </>,
          ]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
