import { lazy } from "react";
import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  LI,
  UL,
  Heading2,
  Paragraph,
  Complexity,
  LanguageSections,
  CodeBlock,
  Alert,
} from "@/components/blocks";
import AdjLImage from "./adj-l-image";
import { pyadjl, pyadjldict } from "./code";

const GI = lazy(() => import("./graph-image"));
const MT = lazy(() => import("./matrix-table"));

export default function Representation() {
  return (
    <PageContainer pageTitle="Representation" contributors={["aditeyaS"]}>
      <SectionContainer>
        <GI />
      </SectionContainer>
      <SectionContainer>
        <Heading2>Adjacency Matrix</Heading2>
        <UL>
          <LI>|V| = no of vertex</LI>
          <LI>size of matrix = |V| x |V|</LI>
          <LI>M [ i ][ j ] = 1 if (edge from i to j) else 0</LI>
          <LI>For undirected graph: matrix is symmetric</LI>
          <LI>
            When vertex values are not numbers = map matrix index with array and
            dictionary
          </LI>
        </UL>
        <MT />
        <Paragraph>Properties</Paragraph>
        <UL>
          <LI>
            Space: <Complexity complexity="O(V ^ 2)" level={3} />
          </LI>
          <LI>
            Operations:
            <UL className="ml-8">
              <LI>
                Check if u and v are adj: <Complexity complexity="O(1)" />
              </LI>
              <LI>
                All vertex adj to u:
                <Complexity complexity="O(V)" level={2} />
              </LI>
              <LI>
                degree of u:
                <Complexity complexity="O(V)" level={2} />
              </LI>
              <LI>
                Add/remove edge <Complexity complexity="O(1)" />
              </LI>
              <LI>
                Add/remove vertex <Complexity complexity="O(V ^ 2)" level={3} />
              </LI>
            </UL>
          </LI>
        </UL>
      </SectionContainer>

      <SectionContainer>
        <Heading2>Adjacency List</Heading2>
        <AdjLImage />
        <UL>
          <LI>
            Represented as:
            <UL className="ml-8">
              <LI>Dynamic size array</LI>
              <LI>Linked list</LI>
            </UL>
          </LI>
        </UL>
        <Paragraph>Properties</Paragraph>
        <UL>
          <LI>
            Space:
            <UL className="ml-8">
              <LI>
                <Complexity complexity="O(V + E)" level={3} /> Directed Graph
              </LI>
              <LI>
                <Complexity complexity="O(V + 2E)" level={3} /> Undirected Graph
              </LI>
            </UL>
          </LI>
          <LI>
            Operations:
            <UL className="ml-8">
              <LI>
                Check if u and v are adj:{" "}
                <Complexity complexity="O(V)" level={2} />
              </LI>
              <LI>
                All vertex adj to u:
                <Complexity complexity="O(degree(u))" level={2} />
              </LI>
              <LI>
                degree of u:
                <Complexity complexity="O(1)" />
              </LI>
              <LI>
                Add edge <Complexity complexity="O(1)" />
              </LI>
              <LI>
                Remove edge <Complexity complexity="O(V)" level={2} />
              </LI>
              <LI>
                Add/remove vertex <Complexity complexity="O(V ^ 2)" level={3} />
              </LI>
            </UL>
          </LI>
        </UL>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language="python" code={pyadjl} />]}
        />
        <Alert type={"Tip"}>
          <Paragraph>Use defaultdict</Paragraph>
          <CodeBlock language="python" code={pyadjldict} />
        </Alert>
      </SectionContainer>
    </PageContainer>
  );
}
