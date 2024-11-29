import CodeBlock from "@/components/code-block";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Paragraph } from "@/components/text";
import { pylevelOrder } from "./code";
import { Complexity } from "@/components/complexity";

export default function BFS() {
  return (
    <PageContainer pageTitle="BFS" contributors={["aditeyaS"]}>
      <SectionContainer>
        <Paragraph>Level order traversal</Paragraph>
        <Complexity
          time="θ(n)"
          timeVariant={"fair"}
          space="θ(width)"
          spaceVariant={"fair"}
        />
        <CodeBlock languages={["python"]} snippets={[pylevelOrder]} />
      </SectionContainer>
    </PageContainer>
  );
}
