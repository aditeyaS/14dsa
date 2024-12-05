import CodeBlock from "@/components/code-block";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { pycycledetection, pyremoveloop } from "./code";
import { LI, UL } from "@/components/ul-li";
import { Heading } from "@/components/text";

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
        <CodeBlock languages={["python"]} snippets={[pycycledetection]} />
      </SectionContainer>
      <SectionContainer>
        <Heading>Remove cycle</Heading>
        <CodeBlock languages={["python"]} snippets={[pyremoveloop]} />
      </SectionContainer>
    </PageContainer>
  );
}
