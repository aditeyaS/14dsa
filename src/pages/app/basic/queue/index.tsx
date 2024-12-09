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
                <Paragraph>Use deque for queue</Paragraph>
              </Alert>
              <Alert type="Note">
                <Paragraph>
                  python also has Queue; but its used in multithreading
                </Paragraph>

                <CodeBlock
                  language={"python"}
                  code={"from queue import Queue"}
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

      <SectionContainer>
        <Heading>Implement queue using circular list</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[
            <>
              <CodeBlock
                language="python"
                code={pycircularListImplementation}
              />
            </>,
          ]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
