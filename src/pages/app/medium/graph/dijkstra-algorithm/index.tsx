import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  LanguageSections,
  CodeBlock,
  UL,
  LI,
  Alert,
  PseudoCode,
  Complexity,
} from "@/components/blocks";

import { pseudo, pyd } from "./code";

export default function DijkstraAlgorithm() {
  return (
    <PageContainer pageTitle="Dijkstra's Algorithm" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL>
          <LI>shortest path algo</LI>
          <LI>
            Time: <Complexity complexity="V log V + E log E" level={3} />
          </LI>
        </UL>
        <PseudoCode code={pseudo} />
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language="python" code={pyd} />]}
        />
        <Alert type={"Important"}>
          <UL>
            <LI>The above is not the best most efficient implementation.</LI>
            <LI>We use adj list (don't have to travel the whole row) </LI>
            <LI>min heap (find min weight edge in log V)</LI>
            <LI>Time - O((V + E) log V)</LI>
          </UL>
        </Alert>
      </SectionContainer>
    </PageContainer>
  );
}
