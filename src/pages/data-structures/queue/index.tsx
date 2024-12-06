import CodeBlock from "@/components/code-block";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Heading, Paragraph } from "@/components/text";
import { LI, UL } from "@/components/ul-li";
import { Alert } from "@/components/alert";
import {
  pycircularListImplementation,
  pydequeImplementation,
  pylistImplementation,
  pyllImplementation,
} from "./code";
import QueueImage from "./image";

export default function Queue() {
  return (
    <PageContainer pageTitle="Queue" contributors={["aditeyaS"]}>
      <SectionContainer>
        <QueueImage />
      </SectionContainer>

      <SectionContainer>
        <UL>
          <LI>FIFO (first in first out) data structure</LI>
          <LI>
            Applications: single resource multiple consumers; sync slow fast
            devices; OS - semaphores, FCFS scheduling
          </LI>
          <LI>Variation: dequq, priority queue, doubly ended priority queue</LI>
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
          <Paragraph>Use deque for queue</Paragraph>
        </Alert>
      </SectionContainer>

      <SectionContainer>
        <Alert type="Note">
          <Paragraph>
            python also has Queue; but its used in multithreading
          </Paragraph>
          <CodeBlock
            languages={["python"]}
            snippets={["from queue import Queue"]}
          />
        </Alert>
      </SectionContainer>

      <SectionContainer>
        <Heading>Linked List implementation</Heading>
        <CodeBlock languages={["python"]} snippets={[pyllImplementation]} />
      </SectionContainer>

      <SectionContainer>
        <Heading>Implement queue using circular list</Heading>
        <CodeBlock
          languages={["python"]}
          snippets={[pycircularListImplementation]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
