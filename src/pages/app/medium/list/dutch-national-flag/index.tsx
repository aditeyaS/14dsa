import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { LanguageSections, CodeBlock, Heading2 } from "@/components/blocks";
import { pydnf } from "./code";
import Image from "./image";

export default function DutchNationalFlag() {
  return (
    <PageContainer
      pageTitle="Dutch National Flag Algo"
      contributors={["aditeyaS"]}
    >
      <SectionContainer>
        <Heading2>Sort an array of 0, 1, 2</Heading2>
        <Image />
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pydnf} />]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
