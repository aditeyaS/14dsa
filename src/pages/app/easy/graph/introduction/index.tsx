import PageContainer from "@/components/layout/page-container";
import SectionContainer from "@/components/layout/section-container";
import { LI, UL, Paragraph, Heading2 } from "@/components/blocks";
import UDGraphImage from "./ud-graph-image";
import DGraphImage from "./d-graph-image";

export default function Introduction() {
  return (
    <PageContainer pageTitle="Introduction" contributors={["aditeyaS"]}>
      <SectionContainer>
        <Paragraph>G = (V, E) # pair of vertex and edges</Paragraph>
        <Paragraph>{`V = {v1, v2, v3, v4, v5}`}</Paragraph>
        <Paragraph>{`E = {(v1, v2), (v1, v3), (v2, v4), (v3, v4), (v3, v5), (v4, v5)}`}</Paragraph>
        <UL className="mt-4">
          <LI>Walk: sequence of vertex by following edges</LI>
          <LI>Path: special walk with no repeating vertex</LI>
          <LI>
            Types:
            <UL className="ml-8">
              <LI>directed & undirected - edges with direction</LI>
              <LI>cyclic & acyclic - cycle or not</LI>
              <LI>weighted & unweighted - edges with weight</LI>
            </UL>
          </LI>
        </UL>
      </SectionContainer>

      <SectionContainer>
        <Heading2>Undirected graph</Heading2>
        <UDGraphImage />
        <UL>
          <LI>degree (v3) = 3</LI>
          <LI>Sum of degrees = 2 * |E|</LI>
          <LI>Max no of edges = (|v| * (|V| - 1)) // 2</LI>
          <LI>{`(Eg) Walk : v1 -> v2 -> v4 -> v2`}</LI>
          <LI>{`(Eg) Path: v1 -> v2 -> v4`}</LI>
        </UL>
      </SectionContainer>

      <SectionContainer>
        <Heading2>Directed graph</Heading2>
        <DGraphImage />
        <UL>
          <LI>in-degree (v3) = 1</LI>
          <LI>out-degree (v3) = 2</LI>
          <LI>Sum of in-degrees = |E|</LI>
          <LI>Sum of out-degrees = |E|</LI>
          <LI>Max no of edges = |V| * (|V| - 1)</LI>
        </UL>
      </SectionContainer>
    </PageContainer>
  );
}
