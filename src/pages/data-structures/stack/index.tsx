import CodeBlock from "@/components/code-block";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Heading, Paragraph } from "@/components/text";
import { LI, UL } from "@/components/ul-li";
import { Alert } from "@/components/alert";
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
        <CodeBlock languages={["python"]} snippets={[pylistImplementation]} />
      </SectionContainer>

      <SectionContainer>
        <Heading>Deque implementation</Heading>
        <CodeBlock languages={["python"]} snippets={[pydequeImplementation]} />
        <Alert type="Tip">
          <Paragraph>
            Use deque for stack; better performance (uses doubly linked list)
          </Paragraph>
        </Alert>
      </SectionContainer>

      <SectionContainer>
        <Alert type="Note">
          <Paragraph>
            python also has LIFO queue; but its used in multithreading
          </Paragraph>
          <CodeBlock
            languages={["python"]}
            snippets={["from queue import LifoQueue"]}
          />
        </Alert>
      </SectionContainer>

      <SectionContainer>
        <Heading>Linked List implementation</Heading>
        <CodeBlock languages={["python"]} snippets={[pyllImplementation]} />
      </SectionContainer>
    </PageContainer>
  );
}
