import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  Alert,
  CodeBlock,
  Heading,
  LanguageSections,
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
                arr.index(item) gives error if item is not present
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
                arr.remove(item) gives error if item is not present
              </Alert>
              <Alert type="Tip">
                Use another data structure if there are lot of delete
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
