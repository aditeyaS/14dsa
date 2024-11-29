import CodeBlock from "@/components/code-block";
import { Complexity } from "@/components/complexity";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Heading } from "@/components/text";
import { pycountSetBits, pyisPow2 } from "./code";

export default function BKA() {
  return (
    <PageContainer
      pageTitle="Brian Kernigam's Algorithm"
      contributors={["aditeyaS"]}
    >
      <SectionContainer>
        <Heading>Count the set bits</Heading>
        <Complexity
          time="θ(set bits)"
          timeVariant={"fair"}
          space="O(1)"
          spaceVariant={"excellent"}
        />
        <CodeBlock languages={["python"]} snippets={[pycountSetBits]} />
      </SectionContainer>
      <SectionContainer>
        <Heading>is power of 2</Heading>
        <CodeBlock languages={["python"]} snippets={[pyisPow2]} />
      </SectionContainer>
    </PageContainer>
  );
}
