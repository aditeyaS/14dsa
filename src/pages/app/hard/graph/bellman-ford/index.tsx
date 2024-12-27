import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { UL, LI, PseudoCode, Complexity } from "@/components/blocks";

import { algo, idea } from "./code";

export default function BellmanFordAlgorithm() {
  return (
    <PageContainer
      pageTitle="Bellman Ford Algorithm"
      contributors={["aditeyaS"]}
    >
      <SectionContainer>
        <UL className="mb-4">
          <LI>shortest path algorithm</LI>
          <LI>works when edges have negative weight (cons of dijkstra) </LI>
          <LI>uses DP (bottom up)</LI>

          <LI>
            Time:
            <Complexity complexity="O(VE)" level={3} />
          </LI>
        </UL>
      </SectionContainer>

      <SectionContainer>
        <PseudoCode code={idea} text="Idea" />
        <PseudoCode code={algo} text="Algo" />
      </SectionContainer>
    </PageContainer>
  );
}
