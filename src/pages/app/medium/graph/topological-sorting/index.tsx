import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import {
  LanguageSections,
  CodeBlock,
  Paragraph,
  UL,
  LI,
  Heading,
  PseudoCode,
} from "@/components/blocks";
import { pybfspseudo, pycd, pydfspseudo } from "./code";
import DGraphImage from "./d-graph-image";

export default function TopologicalSorting() {
  return (
    <PageContainer pageTitle="Topological Sorting" contributors={["aditeyaS"]}>
      <SectionContainer>
        <DGraphImage />
        <UL>
          <LI>Think of it as jobs</LI>
          <LI>Print in order of dependence</LI>
          <LI>Eg. v1, v2, v3, v4, v5</LI>
          <LI>There can be multiple sorting of a DAG (directed acyclic)</LI>
        </UL>
      </SectionContainer>

      <SectionContainer>
        <Heading>BFS (Kahn's Algorithm)</Heading>
        <PseudoCode code={pybfspseudo} />
        <Paragraph>Cycle Detection using above</Paragraph>
        <LanguageSections
          languages={["python"]}
          sections={[<CodeBlock language="python" code={pycd} />]}
        />
      </SectionContainer>

      <SectionContainer>
        <Heading>DFS</Heading>
        <PseudoCode code={pydfspseudo} />
      </SectionContainer>
    </PageContainer>
  );
}
