import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  CodeBlock,
  Heading,
  LanguageSections,
  LI,
  UL,
} from "@/components/blocks";
import { pynodecircular, pynodedoubly, pynodesingle } from "./code";

export default function LinkedList() {
  return (
    <PageContainer pageTitle="Linked List" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>Nodes stored in non contiguous memory</LI>
          <LI>
            Applications: Round robin, places where insert/delete at beginning
            should be O(1)
          </LI>
        </UL>
      </SectionContainer>

      <SectionContainer>
        <Heading>Single Linked List</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language="python" code={pynodesingle} />]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>Circular Linked List</Heading>
        <UL>
          <LI>the next of the last node points at head</LI>
          <LI>
            Advantage: whole list can be traversed from any node; implementation
            of round robin
          </LI>
        </UL>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language="python" code={pynodecircular} />]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>Doubly Linked List</Heading>
        <UL>
          <LI>
            Advantage: traverse in both dir, insert/delete before node,
            insert/delete form both ends in O(1) by maintaining tail
          </LI>
          <LI>Disadvantages: extra space, complex code</LI>
        </UL>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language="python" code={pynodedoubly} />]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
