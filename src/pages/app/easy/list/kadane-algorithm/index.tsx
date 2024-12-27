import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  LanguageSections,
  CodeBlock,
  Heading2,
  PseudoCode,
} from "@/components/blocks";
import { pymaxSubArraySum, pypseudo } from "./code";

export default function KadaneAlgorithm() {
  return (
    <PageContainer pageTitle="Kadane's Algorithm" contributors={["aditeyaS"]}>
      <SectionContainer>
        <Heading2 className="underline">
          Maximum length even odd subarray
        </Heading2>
        <PseudoCode code={pypseudo} />
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language={"python"} code={pymaxSubArraySum} />]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
