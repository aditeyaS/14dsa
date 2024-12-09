import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  Alert,
  CodeBlock,
  Heading,
  LanguageSections,
  LI,
  Paragraph,
  UL,
} from "@/components/blocks";
import {
  pydequeImplementation,
  pylistImplementation,
  pyllImplementation,
} from "./code";
import StackImage from "./image";

export default function Stack() {
  return (
    <PageContainer pageTitle="Stack" contributors={["aditeyaS"]}>
      <SectionContainer>
        <StackImage />
      </SectionContainer>

      <SectionContainer>
        <UL>
          <LI>LIFO (last in first out) data structure</LI>
          <LI>Underflow: pop or peek on empty stack</LI>
          <LI>Overflow: push on a full stack</LI>
          <LI>
            Applications: recursive function calls; balanced parenthesis;
            undo/redo
          </LI>
        </UL>
      </SectionContainer>

      <SectionContainer>
        <Heading>List implementation</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language="python" code={pylistImplementation} />
            </>,
          ]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>Deque implementation</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language="python" code={pydequeImplementation} />
              <Alert type="Tip">
                <Paragraph>
                  Use deque for stack; better performance (uses doubly linked
                  list)
                </Paragraph>
              </Alert>
              <Alert type="Note">
                <Paragraph>
                  python also has LIFO queue; but its used in multithreading
                </Paragraph>
                <CodeBlock
                  language={"python"}
                  code={"from queue import LifoQueue"}
                />
              </Alert>
            </>,
          ]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>Linked List implementation</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock language="python" code={pyllImplementation} />
            </>,
          ]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
