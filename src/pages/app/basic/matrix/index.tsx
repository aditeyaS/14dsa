import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  CodeBlock,
  Heading,
  LanguageSections,
  LI,
  UL,
} from "@/components/blocks";
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
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pyinit} />]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
