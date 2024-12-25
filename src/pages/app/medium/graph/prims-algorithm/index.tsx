import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  LanguageSections,
  CodeBlock,
  UL,
  LI,
  SpaceTimeComplexity,
  Alert,
  PseudoCode,
} from "@/components/blocks";
import Image from "./image";
import { pseudo, pyprims } from "./code";

export default function PrimsAlgorithm() {
  return (
    <PageContainer pageTitle="Prim's Algorithm" contributors={["aditeyaS"]}>
      <SectionContainer>
        <Image />
        <UL>
          <LI>Greedy algo</LI>
          <LI>used to get Minimum Spanning Tree</LI>
          <LI>Weighted connected graph</LI>
          <LI>
            Minimum path length (wire length if nodes are devices) to make sure
            all nodes are connected to each other maybe through intermediate
            nodes
          </LI>
          <LI>
            <SpaceTimeComplexity
              time="O(V^2)"
              timeLevel={4}
              space="O(V)"
              spaceLevel={2}
            />
          </LI>
        </UL>
        <PseudoCode code={pseudo} />
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language="python" code={pyprims} />]}
        />
        <Alert type={"Important"}>
          <UL>
            <LI>The above is not the best most efficient implementation.</LI>
            <LI>We use adj list (don't have to travel the whole row) </LI>
            <LI>min heap (find min weight edge in log V)</LI>
            <LI>Time - O(E log V)</LI>
          </UL>
        </Alert>
      </SectionContainer>
    </PageContainer>
  );
}
