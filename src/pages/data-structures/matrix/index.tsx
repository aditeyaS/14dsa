import CodeBlock from "@/components/code-block";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { Heading } from "@/components/text";
import { LI, UL } from "@/components/ul-li";
import { pyinit } from "./code";

export default function Matrix() {
  return (
    <PageContainer pageTitle="Matrix" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>2D array</LI>
        </UL>
      </SectionContainer>
      <SectionContainer>
        <Heading>Initialization</Heading>
        <CodeBlock languages={["python"]} snippets={[pyinit]} />
      </SectionContainer>
    </PageContainer>
  );
}
