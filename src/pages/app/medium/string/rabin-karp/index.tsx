import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  LI,
  UL,
  LanguageSections,
  CodeBlock,
  SpaceTimeComplexity,
} from "@/components/blocks";
import { pyrk } from "./code";

export default function RabinKarp() {
  return (
    <PageContainer pageTitle="Rabin Karp Algorithm" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>Used for pattern searching</LI>
          <LI>
            We calculate hash for every window (Rolling hash) and if the hash
            match we check individual values
          </LI>
          <LI>
            <SpaceTimeComplexity
              time="O((N-M)*M)"
              timeLevel={4}
              space="O(1)"
              spaceLevel={1}
            />
          </LI>
        </UL>
      </SectionContainer>
      <SectionContainer>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language="python" code={pyrk} />]}
        />
      </SectionContainer>
    </PageContainer>
  );
}
