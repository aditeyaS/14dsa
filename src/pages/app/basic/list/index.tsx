import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  Alert,
  CodeBlock,
  Heading,
  LanguageSections,
  Paragraph,
} from "@/components/blocks";
import { pyAccess, pyDel, pyInit, pyInsert, pyOthers } from "./code";

export default function List() {
  return (
    <PageContainer pageTitle="List" contributors={["aditeyaS"]}>
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
        <Heading>Access</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language="python" code={pyAccess} />
              <Alert type="Caution">
                <Paragraph>
                  arr.index(item) gives error if item is not present
                </Paragraph>
              </Alert>
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
              <Alert type="Caution">
                <Paragraph>
                  arr.remove(item) gives error if item is not present
                </Paragraph>
              </Alert>
              <Alert type="Tip">
                <Paragraph>
                  Use another data structure if there are lot of delete
                </Paragraph>
              </Alert>
            </>,
          ]}
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
