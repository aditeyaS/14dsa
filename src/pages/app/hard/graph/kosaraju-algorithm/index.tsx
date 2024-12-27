import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  UL,
  LI,
  Alert,
  PseudoCode,
  Complexity,
  Paragraph,
  OL,
  Heading,
} from "@/components/blocks";

import { pseudo1 } from "./code";
import Image from "./image";

export default function KosarajuAlgorithm() {
  return (
    <PageContainer pageTitle="Kosaraju's Algorithm" contributors={["aditeyaS"]}>
      <SectionContainer>
        <UL className="mb-4">
          <LI>
            used to find strongly connected components (components that can be
            reached)
          </LI>
          <LI>
            Time:
            <Complexity complexity="O(V + E)" level={3} />
          </LI>
        </UL>
        <Image />
        <Paragraph className="text-base">
          In the above digram [0,1,2] are connected and [3,4] are connected.
          (you cannot reach 2 from 3 or 4)
        </Paragraph>
      </SectionContainer>

      <SectionContainer>
        <Heading>Steps</Heading>
        <OL>
          <LI>
            {`order the vertices in decreasing order of finish time in DFS (when recursion start -> start time; when all adj are processed -> finish time)`}
            <PseudoCode text="" code={pseudo1} />
          </LI>
          <LI>Reverse all edges</LI>
          <LI>
            Do DFS of the reversed graph in the order obtained in step 1. For
            every vertex, all reachable vertices are strongly connected.
          </LI>
        </OL>
      </SectionContainer>

      <SectionContainer>
        <Alert type={"Important"}>
          It is not the best algorithm. Tarjan is more efficient
        </Alert>
      </SectionContainer>
    </PageContainer>
  );
}
