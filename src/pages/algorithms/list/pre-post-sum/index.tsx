import CodeBlock from "@/components/code-block";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Heading } from "@/components/text";
import { pysumbwi } from "./code";

export default function PrePostSum() {
  return (
    <PageContainer pageTitle="Prefix/Postfix Sum" contributors={["aditeyaS"]}>
      <SectionContainer>
        <Heading>find sum of subarray between indexes</Heading>
        <CodeBlock languages={["python"]} snippets={[pysumbwi]} />
      </SectionContainer>
    </PageContainer>
  );
}
