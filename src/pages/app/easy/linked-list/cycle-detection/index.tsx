import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  LI,
  UL,
  Heading,
  CodeBlock,
  LanguageSections,
} from "@/components/blocks";
import { pycycledetection, pyremoveloop } from "./code";

export default function CycleDetection() {
  return (
    <PageContainer
      pageTitle="Floyd's Cycle Detection"
      contributors={["aditeyaS"]}
    >
      <SectionContainer>
        <UL>
          <LI>fast will enter the loop before slow</LI>
          <LI>The distance keeps on increasing by 1 in every iteration</LI>
          <LI>When distance becomes length of cycle they must meet</LI>
        </UL>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pycycledetection} />]}
        />
      </SectionContainer>
      <SectionContainer>
        <Heading>Remove cycle</Heading>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pyremoveloop} />]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
