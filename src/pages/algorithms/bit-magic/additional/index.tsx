import CodeBlock from "@/components/code-block";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Heading } from "@/components/text";
import { pypowerSet } from "./code";

export default function Additional() {
  return (
    <PageContainer pageTitle="Additional" contributors={["aditeyaS"]}>
      <SectionContainer>
        <Heading>Power set</Heading>
        <CodeBlock languages={["python"]} snippets={[pypowerSet]} />
      </SectionContainer>
    </PageContainer>
  );
}
